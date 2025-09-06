'use strict';

const config = require('../shared/indexer.479ae593.cjs');
require('node:async_hooks');
require('unctx');

const INTERNAL_CONTEXT_PROPERTY = "_internal";
function internalContext(values) {
  return config.defineIndexerPlugin((indexer) => {
    indexer.hooks.hook("run:before", () => {
      try {
        const ctx = config.useIndexerContext();
        ctx[INTERNAL_CONTEXT_PROPERTY] = {
          ...ctx[INTERNAL_CONTEXT_PROPERTY] || {},
          ...values
        };
      } catch (error) {
        throw new Error("Failed to set internal context", {
          cause: error
        });
      }
    });
  });
}
function useInternalContext() {
  const ctx = config.useIndexerContext();
  if (ctx[INTERNAL_CONTEXT_PROPERTY] === void 0) {
    throw new Error(
      "Internal context is not available, possibly 'internalContext' plugin is missing!"
    );
  }
  return ctx[INTERNAL_CONTEXT_PROPERTY];
}

exports.INTERNAL_CONTEXT_PROPERTY = INTERNAL_CONTEXT_PROPERTY;
exports.internalContext = internalContext;
exports.useInternalContext = useInternalContext;
//# sourceMappingURL=plugins.cjs.map
