'use strict';

const protocol = require('@apibara/protocol');
const consola = require('consola');
const hookable = require('hookable');
const assert = require('node:assert');
const config = require('./shared/indexer.479ae593.cjs');
const api = require('@opentelemetry/api');
const internal_plugins = require('./internal/plugins.cjs');
require('node:async_hooks');
require('unctx');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const consola__default = /*#__PURE__*/_interopDefaultCompat(consola);
const assert__default = /*#__PURE__*/_interopDefaultCompat(assert);

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
  return api.trace.getTracer("@apibara/indexer");
}
function createIndexerMetrics() {
  const meter = api.metrics.getMeter("@apibara/indexer");
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
    hooks: hookable.createHooks()
  };
  if (indexer.options.debug) {
    hookable.createDebugger(indexer.hooks, { tag: "indexer" });
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
      if (error instanceof protocol.ClientError || error instanceof protocol.ServerError) {
        const isServerError = error instanceof protocol.ServerError;
        if (error.code === protocol.Status.INTERNAL) {
          if (retryCount < maxRetries) {
            consola__default.error(
              `Internal ${isServerError ? "server" : "client"} error: ${error.message}`
            );
            consola__default.start("Reconnecting...");
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
  await config.indexerAsyncContext.callAsync({}, async () => {
    const context = config.useIndexerContext();
    if (indexer.options.debug) {
      context.debug = true;
    }
    const middleware = await registerMiddleware(indexer);
    const indexerMetrics = createIndexerMetrics();
    const tracer = createTracer();
    await indexer.hooks.callHook("run:before");
    const { indexerName: indexerId } = internal_plugins.useInternalContext();
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
                assert__default(indexer.options.factory !== void 0);
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
                    assert__default(message2._tag === "data");
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
                  consola__default.warn(message.systemMessage.output.stderr);
                  break;
                }
                case "stdout": {
                  consola__default.info(message.systemMessage.output.stdout);
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
          consola__default.warn("unexpected message", message);
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

exports.useIndexerContext = config.useIndexerContext;
exports.createIndexer = createIndexer;
exports.defineIndexer = defineIndexer;
exports.run = run;
exports.runWithReconnect = runWithReconnect;
//# sourceMappingURL=index.cjs.map
