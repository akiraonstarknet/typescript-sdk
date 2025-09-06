import { I as IndexerWithStreamConfig } from '../shared/indexer.00654e11.mjs';
import '@apibara/protocol';
import 'hookable';

type VcrResult = Record<string, unknown>;
declare function createVcr(): {
    run<TFilter, TBlock>(cassetteName: string, indexerConfig: IndexerWithStreamConfig<TFilter, TBlock>, range: {
        fromBlock: bigint;
        toBlock: bigint;
    }): Promise<VcrResult>;
};

export { type VcrResult, createVcr };
