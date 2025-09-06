import { d as defineIndexerPlugin, u as useIndexerContext } from '../shared/indexer.75773ef1.mjs';
import 'node:async_hooks';
import 'unctx';

const INTERNAL_CONTEXT_PROPERTY = "_internal";
function internalContext(values) {
  return defineIndexerPlugin((indexer) => {
    indexer.hooks.hook("run:before", () => {
      try {
        const ctx = useIndexerContext();
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
  const ctx = useIndexerContext();
  if (ctx[INTERNAL_CONTEXT_PROPERTY] === void 0) {
    throw new Error(
      "Internal context is not available, possibly 'internalContext' plugin is missing!"
    );
  }
  return ctx[INTERNAL_CONTEXT_PROPERTY];
}

export { INTERNAL_CONTEXT_PROPERTY, internalContext, useInternalContext };
//# sourceMappingURL=plugins.mjs.map
