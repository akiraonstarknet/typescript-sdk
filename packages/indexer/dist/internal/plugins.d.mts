import { b as IndexerPlugin } from '../shared/indexer.00654e11.mjs';
import '@apibara/protocol';
import 'hookable';

declare const INTERNAL_CONTEXT_PROPERTY = "_internal";
declare function internalContext<TFilter, TBlock, TTxnParams>(values: Record<string, unknown>): IndexerPlugin<TFilter, TBlock>;
type InternalContext = {
    indexerName: string;
    availableIndexers: string[];
};
declare function useInternalContext(): InternalContext;

export { INTERNAL_CONTEXT_PROPERTY, type InternalContext, internalContext, useInternalContext };
