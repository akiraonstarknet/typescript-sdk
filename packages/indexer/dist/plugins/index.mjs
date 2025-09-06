import { d as defineIndexerPlugin } from '../shared/indexer.75773ef1.mjs';
export { l as logger, u as useLogger } from '../shared/indexer.cc5002a1.mjs';
import { isCursor } from '@apibara/protocol';
import 'node:async_hooks';
import 'unctx';
import 'consola';

function inMemoryPersistence() {
  return defineIndexerPlugin((indexer) => {
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
        if (context.endCursor && isCursor(context.endCursor)) {
          lastCursor = context.endCursor;
        }
      });
    });
  });
}

export { defineIndexerPlugin, inMemoryPersistence };
//# sourceMappingURL=index.mjs.map
