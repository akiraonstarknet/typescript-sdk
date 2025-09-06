import { consola, LogLevels } from 'consola';
import { d as defineIndexerPlugin, u as useIndexerContext } from './indexer.75773ef1.mjs';

function logger({
  logger: logger2
} = {}) {
  return defineIndexerPlugin((indexer) => {
    indexer.hooks.hook("run:before", () => {
      const ctx = useIndexerContext();
      if (logger2) {
        ctx.logger = consola.create({ reporters: [logger2] });
      } else {
        ctx.logger = consola.create({});
      }
      if (ctx.debug) {
        ctx.logger.level = LogLevels.debug;
      }
    });
  });
}
function useLogger() {
  const ctx = useIndexerContext();
  if (!ctx?.logger)
    throw new Error("Logger plugin is not available in context");
  return ctx.logger;
}

export { logger as l, useLogger as u };
//# sourceMappingURL=indexer.cc5002a1.mjs.map
