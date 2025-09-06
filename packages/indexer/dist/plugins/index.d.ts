import { b as IndexerPlugin } from '../shared/indexer.00654e11.js';
export { d as defineIndexerPlugin } from '../shared/indexer.00654e11.js';
import { ConsolaReporter, ConsolaInstance } from 'consola';
export { ConsolaInstance, ConsolaReporter } from 'consola';
import '@apibara/protocol';
import 'hookable';

declare function logger<TFilter, TBlock, TTxnParams>({ logger, }?: {
    logger?: ConsolaReporter;
}): IndexerPlugin<TFilter, TBlock>;
declare function useLogger(): ConsolaInstance;

/**
 * A plugin that persists the last cursor and filter to memory.
 */
declare function inMemoryPersistence<TFilter, TBlock>(): IndexerPlugin<TFilter, TBlock>;

export { IndexerPlugin, inMemoryPersistence, logger, useLogger };
