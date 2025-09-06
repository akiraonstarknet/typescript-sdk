'use strict';

const config = require('../shared/indexer.479ae593.cjs');
const logger = require('../shared/indexer.99798ac7.cjs');
const protocol = require('@apibara/protocol');
require('node:async_hooks');
require('unctx');
require('consola');

function inMemoryPersistence() {
  return config.defineIndexerPlugin((indexer) => {
    let lastCursor;
    let lastFilter;
    indexer.hooks.hook("connect:before", ({ request }) => {
      if (lastCursor) {
        request.startingCursor = lastCursor;
      }
      if (lastFilter) {
        request.filter[1] = lastFilter;
      }
    });
    indexer.hooks.hook("connect:factory", ({ request, endCursor }) => {
      if (request.filter[1]) {
        lastCursor = endCursor;
        lastFilter = request.filter[1];
      }
    });
    indexer.hooks.hook("handler:middleware", ({ use }) => {
      use(async (context, next) => {
        await next();
        if (context.endCursor && protocol.isCursor(context.endCursor)) {
          lastCursor = context.endCursor;
        }
      });
    });
  });
}

exports.defineIndexerPlugin = config.defineIndexerPlugin;
exports.logger = logger.logger;
exports.useLogger = logger.useLogger;
exports.inMemoryPersistence = inMemoryPersistence;
//# sourceMappingURL=index.cjs.map
