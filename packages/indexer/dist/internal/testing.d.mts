import { a as Indexer, b as IndexerPlugin, c as IndexerConfig } from '../shared/indexer.00654e11.mjs';
import { MockStreamResponse, MockFilter, MockBlock } from '@apibara/protocol/testing';
import { InternalContext } from './plugins.mjs';
import '@apibara/protocol';
import 'hookable';

type MockMessagesOptions = {
    invalidate?: {
        invalidateFromIndex: number;
        invalidateTriggerIndex: number;
    };
    finalize?: {
        finalizeToIndex: number;
        finalizeTriggerIndex: number;
    };
    uniqueKey?: boolean;
    baseBlockNumber?: bigint;
};
declare function generateMockMessages(count?: number, options?: MockMessagesOptions): MockStreamResponse[];
type MockIndexerParams = {
    internalContext?: InternalContext;
    override?: Partial<IndexerConfig<MockFilter, MockBlock>>;
};
declare function getMockIndexer(params?: MockIndexerParams): Indexer<{
    filter?: string | undefined;
}, {
    data?: string | undefined;
}>;
type MockRet = {
    data: string;
};
/**
 * A mock sink used for testing. The indexer function can write to the output array.
 * The indexer context is optionally written to the metadata object.
 */
declare function mockSink<TFilter, TBlock>({ output, metadata, }: {
    output: unknown[];
    metadata?: Record<string, unknown>;
}): IndexerPlugin<TFilter, TBlock>;
declare function useMockSink(): {
    output: unknown[];
};

export { type MockMessagesOptions, type MockRet, generateMockMessages, getMockIndexer, mockSink, useMockSink };
