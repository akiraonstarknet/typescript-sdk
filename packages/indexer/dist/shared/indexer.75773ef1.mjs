import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'unctx';

const indexerAsyncContext = getContext("indexer", {
  asyncContext: true,
  AsyncLocalStorage
});
function useIndexerContext() {
  return indexerAsyncContext.use();
}

function defineIndexerPlugin(def) {
  return def;
}

export { defineIndexerPlugin as d, indexerAsyncContext as i, useIndexerContext as u };
//# sourceMappingURL=indexer.75773ef1.mjs.map
