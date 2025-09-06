import { StreamDataRequest, StreamDataOptions, Cursor, StreamDataResponse, Invalidate, Finalize, SystemMessage, DataFinality, DataProduction, CreateClientOptions, StreamConfig, Client } from '@apibara/protocol';
import { NestedHooks, Hookable } from 'hookable';

interface IndexerContext extends Record<string, any> {
}
declare function useIndexerContext(): IndexerContext;

type NextFunction = () => Promise<void>;
type MiddlewareFunction<C> = (context: C, next: NextFunction) => Promise<void>;

type IndexerPlugin<TFilter, TBlock> = (indexer: Indexer<TFilter, TBlock>) => void;
declare function defineIndexerPlugin<TFilter, TBlock>(def: IndexerPlugin<TFilter, TBlock>): IndexerPlugin<TFilter, TBlock>;

type UseMiddlewareFunction = (fn: MiddlewareFunction<IndexerContext>) => void;
interface IndexerHooks<TFilter, TBlock> {
    "run:before": () => void;
    "run:after": () => void;
    "connect:before": ({ request, options, }: {
        request: StreamDataRequest<TFilter>;
        options: StreamDataOptions;
    }) => void;
    "connect:after": ({ request, }: {
        request: StreamDataRequest<TFilter>;
    }) => void;
    "connect:factory": ({ request, endCursor, }: {
        request: StreamDataRequest<TFilter>;
        endCursor?: Cursor;
    }) => void;
    "handler:middleware": ({ use }: {
        use: UseMiddlewareFunction;
    }) => void;
    message: ({ message }: {
        message: StreamDataResponse<TBlock>;
    }) => void;
    "message:invalidate": ({ message }: {
        message: Invalidate;
    }) => void;
    "message:finalize": ({ message }: {
        message: Finalize;
    }) => void;
    "message:heartbeat": () => void;
    "message:systemMessage": ({ message }: {
        message: SystemMessage;
    }) => void;
}
type IndexerStartingCursor = {
    startingCursor?: never;
    startingBlock: bigint;
} | {
    startingCursor: Cursor;
    startingBlock?: never;
} | {
    startingCursor?: never;
    startingBlock?: never;
};
type HandlerArgs<TBlock> = {
    block: TBlock;
    cursor?: Cursor | undefined;
    endCursor?: Cursor | undefined;
    finality: DataFinality;
    production: DataProduction;
    context: IndexerContext;
};
type IndexerConfig<TFilter, TBlock> = {
    streamUrl: string;
    filter: TFilter;
    finality?: DataFinality;
    clientOptions?: CreateClientOptions;
    factory?: (args: HandlerArgs<TBlock>) => Promise<{
        filter?: TFilter;
    }>;
    transform: (args: HandlerArgs<TBlock>) => Promise<void>;
    hooks?: NestedHooks<IndexerHooks<TFilter, TBlock>>;
    plugins?: ReadonlyArray<IndexerPlugin<TFilter, TBlock>>;
    debug?: boolean;
} & IndexerStartingCursor;
type IndexerWithStreamConfig<TFilter, TBlock> = IndexerConfig<TFilter, TBlock> & {
    streamConfig: StreamConfig<TFilter, TBlock>;
};
declare function defineIndexer<TFilter, TBlock>(streamConfig: StreamConfig<TFilter, TBlock>): (config: IndexerConfig<TFilter, TBlock>) => IndexerWithStreamConfig<TFilter, TBlock>;
interface Indexer<TFilter, TBlock> {
    streamConfig: StreamConfig<TFilter, TBlock>;
    options: IndexerConfig<TFilter, TBlock>;
    hooks: Hookable<IndexerHooks<TFilter, TBlock>>;
}
declare function createIndexer<TFilter, TBlock>({ streamConfig, ...options }: IndexerWithStreamConfig<TFilter, TBlock>): Indexer<TFilter, TBlock>;
interface ReconnectOptions {
    maxRetries?: number;
    retryDelay?: number;
    maxWait?: number;
}
declare function runWithReconnect<TFilter, TBlock>(client: Client<TFilter, TBlock>, indexer: Indexer<TFilter, TBlock>, options?: ReconnectOptions): Promise<void>;
interface RunOptions {
    onConnect?: () => void | Promise<void>;
}
declare function run<TFilter, TBlock>(client: Client<TFilter, TBlock>, indexer: Indexer<TFilter, TBlock>, runOptions?: RunOptions): Promise<void>;

export { type HandlerArgs as H, type IndexerWithStreamConfig as I, type ReconnectOptions as R, type UseMiddlewareFunction as U, type Indexer as a, type IndexerPlugin as b, type IndexerConfig as c, defineIndexerPlugin as d, type IndexerHooks as e, type IndexerStartingCursor as f, defineIndexer as g, createIndexer as h, type RunOptions as i, run as j, runWithReconnect as r, useIndexerContext as u };
