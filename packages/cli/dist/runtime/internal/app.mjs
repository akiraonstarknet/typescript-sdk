import { createIndexer as _createIndexer } from "@apibara/indexer";
import {
  internalContext
} from "@apibara/indexer/internal/plugins";
import {
  inMemoryPersistence,
  logger
} from "@apibara/indexer/plugins";
import consola from "consola";
import { indexers } from "#apibara-internal-virtual/indexers";
import { logger as instrumentationLogger } from "#apibara-internal-virtual/instrumentation";
import { createLogger } from "./logger.mjs";
export const availableIndexers = indexers.map((i) => i.name);
export function createIndexer({
  indexerName,
  processedRuntimeConfig,
  preset
}) {
  const indexerDefinition = indexers.find((i) => i.name === indexerName);
  if (indexerDefinition === void 0) {
    throw new Error(
      `Specified indexer "${indexerName}" but it was not defined`
    );
  }
  const indexerModule = indexerDefinition.indexer?.default;
  if (indexerModule === void 0) {
    consola.warn(
      `Specified indexer "${indexerName}" but it does not export a default. Ignoring.`
    );
    return;
  }
  const definition = typeof indexerModule === "function" ? indexerModule(processedRuntimeConfig) : indexerModule;
  let reporter = createLogger({
    indexer: indexerName,
    preset,
    indexers: availableIndexers
  });
  if (instrumentationLogger) {
    const _reporter = instrumentationLogger({
      indexer: indexerName,
      preset,
      indexers: availableIndexers
    });
    if (_reporter && "log" in _reporter) {
      reporter = _reporter;
    }
  }
  definition.plugins = [
    internalContext({
      indexerName,
      availableIndexers
    }),
    logger({ logger: reporter }),
    inMemoryPersistence(),
    ...definition.plugins ?? []
  ];
  return {
    indexer: _createIndexer(definition),
    logger: consola.create({ reporters: [reporter] })
  };
}
