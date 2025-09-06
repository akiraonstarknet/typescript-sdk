'use strict';

const node_async_hooks = require('node:async_hooks');
const unctx = require('unctx');

const indexerAsyncContext = unctx.getContext("indexer", {
  asyncContext: true,
  AsyncLocalStorage: node_async_hooks.AsyncLocalStorage
});
function useIndexerContext() {
  return indexerAsyncContext.use();
}

function defineIndexerPlugin(def) {
  return def;
}

exports.defineIndexerPlugin = defineIndexerPlugin;
exports.indexerAsyncContext = indexerAsyncContext;
exports.useIndexerContext = useIndexerContext;
//# sourceMappingURL=indexer.479ae593.cjs.map
