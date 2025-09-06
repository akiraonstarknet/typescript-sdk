'use strict';

const protocol = require('@apibara/protocol');
const testing = require('@apibara/protocol/testing');
const config = require('../shared/indexer.479ae593.cjs');
const index = require('../index.cjs');
const logger = require('../shared/indexer.99798ac7.cjs');
const internal_plugins = require('./plugins.cjs');
require('node:async_hooks');
require('unctx');
require('consola');
require('hookable');
require('node:assert');
require('@opentelemetry/api');

function generateMockMessages(count = 10, options) {
  const invalidateAt = options?.invalidate;
  const finalizeAt = options?.finalize;
  const messages = [];
  const baseBlockNumber = options?.baseBlockNumber ?? BigInt(5e6);
  for (let i = 0; i < count; i++) {
    const currentBlockNumber = baseBlockNumber + BigInt(i);
    const uniqueKey = uniqueKeyFromOrderKey(currentBlockNumber);
    if (invalidateAt && i === invalidateAt.invalidateTriggerIndex) {
      const invalidateToBlock = baseBlockNumber + BigInt(invalidateAt.invalidateFromIndex);
      messages.push({
        _tag: "invalidate",
        invalidate: {
          cursor: {
            orderKey: invalidateToBlock,
            uniqueKey: options?.uniqueKey ? uniqueKeyFromOrderKey(invalidateToBlock) : void 0
          }
        }
      });
    } else if (finalizeAt && i === finalizeAt.finalizeTriggerIndex) {
      const fianlizedToBlock = baseBlockNumber + BigInt(finalizeAt.finalizeToIndex);
      messages.push({
        _tag: "finalize",
        finalize: {
          cursor: {
            orderKey: fianlizedToBlock,
            uniqueKey: options?.uniqueKey ? uniqueKeyFromOrderKey(fianlizedToBlock) : void 0
          }
        }
      });
    } else {
      messages.push({
        _tag: "data",
        data: {
          cursor: { orderKey: currentBlockNumber - 1n },
          finality: "accepted",
          data: [{ data: `${baseBlockNumber + BigInt(i)}` }],
          endCursor: {
            orderKey: currentBlockNumber,
            uniqueKey: options?.uniqueKey ? uniqueKey : void 0
          },
          production: "backfill"
        }
      });
    }
  }
  return messages;
}
function uniqueKeyFromOrderKey(orderKey) {
  return `0xff00${orderKey.toString()}`;
}
function getMockIndexer(params) {
  const { internalContext: contextParams, override } = params ?? {};
  const { plugins, ...rest } = override ?? {};
  return index.createIndexer(
    index.defineIndexer(testing.MockStream)({
      streamUrl: "https://sepolia.ethereum.a5a.ch",
      finality: "accepted",
      filter: {},
      async transform() {
      },
      plugins: [
        logger.logger(),
        internal_plugins.internalContext(
          contextParams ?? {
            availableIndexers: ["testing"],
            indexerName: "testing"
          }
        ),
        ...plugins ?? []
      ],
      ...rest ?? {}
    })
  );
}
function mockSink({
  output,
  metadata
}) {
  return config.defineIndexerPlugin((indexer) => {
    indexer.hooks.hook("connect:before", ({ request }) => {
      if (metadata?.lastCursor && protocol.isCursor(metadata.lastCursor)) {
        request.startingCursor = metadata.lastCursor;
      }
      if (metadata?.lastFilter) {
        request.filter[1] = metadata.lastFilter;
      }
    });
    indexer.hooks.hook("connect:factory", ({ request, endCursor }) => {
      if (request.filter[1]) {
        if (metadata) {
          metadata.lastCursor = endCursor;
          metadata.lastFilter = request.filter[1];
        }
      }
    });
    indexer.hooks.hook("handler:middleware", ({ use }) => {
      use(async (context, next) => {
        context.output = output;
        await next();
        context.output = null;
        if (metadata) {
          metadata.lastCursor = context.endCursor;
        }
      });
    });
  });
}
function useMockSink() {
  const context = config.useIndexerContext();
  return { output: context.output };
}

exports.generateMockMessages = generateMockMessages;
exports.getMockIndexer = getMockIndexer;
exports.mockSink = mockSink;
exports.useMockSink = useMockSink;
//# sourceMappingURL=testing.cjs.map
