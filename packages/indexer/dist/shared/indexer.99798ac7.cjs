'use strict';

const consola = require('consola');
const config = require('./indexer.479ae593.cjs');

function logger({
  logger: logger2
} = {}) {
  return config.defineIndexerPlugin((indexer) => {
    indexer.hooks.hook("run:before", () => {
      const ctx = config.useIndexerContext();
      if (logger2) {
        ctx.logger = consola.consola.create({ reporters: [logger2] });
      } else {
        ctx.logger = consola.consola.create({});
      }
      if (ctx.debug) {
        ctx.logger.level = consola.LogLevels.debug;
      }
    });
  });
}
function useLogger() {
  const ctx = config.useIndexerContext();
  if (!ctx?.logger)
    throw new Error("Logger plugin is not available in context");
  return ctx.logger;
}

exports.logger = logger;
exports.useLogger = useLogger;
//# sourceMappingURL=indexer.99798ac7.cjs.map
