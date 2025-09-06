import { ClientError, ServerError, Status } from '@apibara/protocol';
import consola from 'consola';
import { createHooks, createDebugger } from 'hookable';
import assert from 'node:assert';
import { i as indexerAsyncContext, u as useIndexerContext } from './shared/indexer.75773ef1.mjs';
import { trace, metrics } from '@opentelemetry/api';
import { useInternalContext } from './internal/plugins.mjs';
import 'node:async_hooks';
import 'unctx';

function compose(middleware) {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let handler;
      if (i >= middleware.length) {
        if (next) {
          await next();
        }
        return;
      }
      if (middleware[i]) {
        handler = middleware[i];
      } else {
        handler = i === middleware.length ? next : void 0;
      }
      if (!handler) {
        throw new Error("Handler not found");
      }
      await handler(context, () => dispatch(i + 1));
    }
  };
}

function createTracer() {
  return trace.getTracer("@apibara/indexer");
}
function createIndexerMetrics() {
  const meter = metrics.getMeter("@apibara/indexer");
  const currentBlockGauge = meter.createGauge("current_block", {
    description: "Current block number being processed",
    unit: "{block}"
  });
  const processedBlockCounter = meter.createCounter("processed_blocks", {
    description: "Number of blocks processed",
    unit: "{blocks}"
  });
  const reorgCounter = meter.createCounter("reorgs", {
    description: "Number of reorgs (invalidate messages) received",
    unit: "{reorgs}"
  });
  return {
    currentBlockGauge,
    processedBlockCounter,
    reorgCounter
  };
}

function defineIndexer(streamConfig) {
  return (config) => ({
    streamConfig,
    ...config
  });
}
function createIndexer({
  streamConfig,
  ...options
}) {
  const indexer = {
    options,
    streamConfig,
    hooks: createHooks()
  };
  if (indexer.options.debug) {
    createDebugger(indexer.hooks, { tag: "indexer" });
  }
  indexer.hooks.addHooks(indexer.options.hooks ?? {});
  for (const plugin of indexer.options.plugins ?? []) {
    plugin(indexer);
  }
  return indexer;
}
async function runWithReconnect(client, indexer, options = {}) {
  let retryCount = 0;
  const maxRetries = options.maxRetries ?? 10;
  const retryDelay = options.retryDelay ?? 1e3;
  const maxWait = options.maxWait ?? 3e4;
  const runOptions = {
    onConnect() {
      retryCount = 0;
    }
  };
  while (true) {
    try {
      await run(client, indexer, runOptions);
      return;
    } catch (error) {
      retryCount++;
      if (error instanceof ClientError || error instanceof ServerError) {
        const isServerError = error instanceof ServerError;
        if (error.code === Status.INTERNAL) {
          if (retryCount < maxRetries) {
            consola.error(
              `Internal ${isServerError ? "server" : "client"} error: ${error.message}`
            );
            consola.start("Reconnecting...");
            console.log();
            const delay = Math.random() * (retryDelay * 0.2) + retryDelay;
            await new Promise(
              (resolve) => setTimeout(resolve, Math.min(retryCount * delay, maxWait))
            );
            continue;
          }
        }
      }
      throw error;
    }
  }
}
async function run(client, indexer, runOptions = {}) {
  await indexerAsyncContext.callAsync({}, async () => {
    const context = useIndexerContext();
    if (indexer.options.debug) {
      context.debug = true;
    }
    const middleware = await registerMiddleware(indexer);
    const indexerMetrics = createIndexerMetrics();
    const tracer = createTracer();
    await indexer.hooks.callHook("run:before");
    const { indexerName: indexerId } = useInternalContext();
    const isFactoryMode = indexer.options.factory !== void 0;
    let startingCursor;
    if (indexer.options.startingCursor) {
      startingCursor = indexer.options.startingCursor;
    } else if (indexer.options.startingBlock !== void 0) {
      if (indexer.options.startingBlock === 0n) {
        startingCursor = void 0;
      } else if (indexer.options.startingBlock > 0n) {
        startingCursor = {
          orderKey: indexer.options.startingBlock - 1n
        };
      }
    }
    const request = {
      filter: isFactoryMode ? [indexer.options.filter, {}] : [indexer.options.filter],
      finality: indexer.options.finality,
      startingCursor
    };
    const options = {};
    await indexer.hooks.callHook("connect:before", { request, options });
    let mainFilter;
    if (isFactoryMode) {
      mainFilter = request.filter[1];
    }
    let stream = client.streamData(request, options)[Symbol.asyncIterator]();
    await indexer.hooks.callHook("connect:after", { request });
    let onConnectCalled = false;
    while (true) {
      const { value: message, done } = await stream.next();
      if (done) {
        break;
      }
      if (!onConnectCalled) {
        onConnectCalled = true;
        if (runOptions.onConnect) {
          await runOptions.onConnect();
        }
      }
      await indexer.hooks.callHook("message", { message });
      switch (message._tag) {
        case "data": {
          await tracer.startActiveSpan("message data", async (span) => {
            const blocks = message.data.data;
            const { cursor, endCursor, finality, production } = message.data;
            context.cursor = cursor;
            context.endCursor = endCursor;
            context.finality = finality;
            indexerMetrics.currentBlockGauge.record(
              Number(endCursor?.orderKey),
              {
                indexer_id: indexerId
              }
            );
            await middleware(context, async () => {
              let block;
              if (isFactoryMode && finality !== "pending") {
                assert(indexer.options.factory !== void 0);
                const [factoryBlock, mainBlock] = blocks;
                block = mainBlock;
                if (factoryBlock !== null) {
                  const { filter } = await indexer.options.factory({
                    block: factoryBlock,
                    cursor,
                    endCursor,
                    finality,
                    production,
                    context
                  });
                  if (filter) {
                    mainFilter = indexer.streamConfig.mergeFilter(
                      mainFilter,
                      filter
                    );
                    const request2 = {
                      filter: [indexer.options.filter, mainFilter],
                      finality: indexer.options.finality,
                      startingCursor: cursor
                    };
                    await indexer.hooks.callHook("connect:factory", {
                      request: request2,
                      endCursor
                    });
                    stream = client.streamData(request2, options)[Symbol.asyncIterator]();
                    const { value: message2 } = await stream.next();
                    assert(message2._tag === "data");
                    const [_factoryBlock, _block] = message2.data.data;
                    block = _block;
                  }
                }
              } else {
                block = blocks[0];
              }
              if (block) {
                await tracer.startActiveSpan("handler", async (span2) => {
                  await indexer.options.transform({
                    block,
                    cursor,
                    endCursor,
                    finality,
                    production,
                    context
                  });
                  span2.end();
                });
              }
            });
            span.end();
          });
          indexerMetrics.processedBlockCounter.add(1, {
            indexer_id: indexerId
          });
          context.cursor = void 0;
          context.endCursor = void 0;
          context.finality = void 0;
          break;
        }
        case "invalidate": {
          await tracer.startActiveSpan("message invalidate", async (span) => {
            indexerMetrics.reorgCounter.add(1, {
              indexer_id: indexerId
            });
            await indexer.hooks.callHook("message:invalidate", {
              message: message.invalidate
            });
            span.end();
          });
          break;
        }
        case "finalize": {
          await tracer.startActiveSpan("message finalize", async (span) => {
            await indexer.hooks.callHook("message:finalize", {
              message: message.finalize
            });
            span.end();
          });
          break;
        }
        case "heartbeat": {
          await tracer.startActiveSpan("message heartbeat", async (span) => {
            await indexer.hooks.callHook("message:heartbeat");
            span.end();
          });
          break;
        }
        case "systemMessage": {
          await tracer.startActiveSpan(
            "message systemMessage",
            async (span) => {
              switch (message.systemMessage.output?._tag) {
                case "stderr": {
                  consola.warn(message.systemMessage.output.stderr);
                  break;
                }
                case "stdout": {
                  consola.info(message.systemMessage.output.stdout);
                  break;
                }
              }
              await indexer.hooks.callHook("message:systemMessage", {
                message: message.systemMessage
              });
              span.end();
            }
          );
          break;
        }
        default: {
          consola.warn("unexpected message", message);
          throw new Error("not implemented");
        }
      }
      await indexer.hooks.callHook("run:after");
    }
  });
}
async function registerMiddleware(indexer) {
  const middleware = [];
  const use = (fn) => {
    middleware.push(fn);
  };
  await indexer.hooks.callHook("handler:middleware", { use });
  const composed = compose(middleware);
  return async function _composedIndexerMiddleware(context, next) {
    await composed(context, next);
  };
}

export { createIndexer, defineIndexer, run, runWithReconnect, useIndexerContext };
//# sourceMappingURL=index.mjs.map
