import { w as Client, l as StreamDataRequest, v as StreamDataOptions, r as StreamDataResponse, S as StatusRequest, u as ClientCallOptions, f as StatusResponse, t as StreamConfig, B as Bytes, E as Cursor, J as DataFinality, K as DataProduction } from '../shared/protocol.0e734e33.cjs';
import { MessageCodec, Codec, CodecType } from '../codec.cjs';
import 'nice-grpc-common';
import 'protobufjs/minimal.js';
import 'nice-grpc';

declare class MockClient<TFilter, TBlock> implements Client<TFilter, TBlock> {
    private messageFactory;
    constructor(messageFactory: (request: StreamDataRequest<TFilter>, options?: StreamDataOptions) => (StreamDataResponse<TBlock> | Error)[]);
    status(request?: StatusRequest, options?: ClientCallOptions): Promise<StatusResponse>;
    streamData(request: StreamDataRequest<TFilter>, options?: StreamDataOptions): StreamDataIterable<TBlock>;
}
declare class StreamDataIterable<TBlock> {
    private messages;
    constructor(messages: (StreamDataResponse<TBlock> | Error)[]);
    [Symbol.asyncIterator](): AsyncIterator<StreamDataResponse<TBlock>>;
}

declare const MockFilter: MessageCodec<{
    filter: Codec<string | undefined, string | undefined>;
}>;
type MockFilter = CodecType<typeof MockFilter>;
declare const MockFilterFromBytes: Codec<MockFilter, Uint8Array>;
declare const MockBlock: MessageCodec<{
    data: Codec<string | undefined, string | undefined>;
}>;
type MockBlock = CodecType<typeof MockBlock>;
declare const MockBlockFromBytes: Codec<MockBlock | null, Uint8Array>;
declare const MockStream: StreamConfig<{
    filter?: string | undefined;
}, {
    data?: string | undefined;
}>;
declare const MockStreamResponse: Codec<{
    _tag: "heartbeat";
} | ({
    _tag: "data";
} & {
    data: {
        cursor?: {
            orderKey: bigint;
            uniqueKey?: Bytes | undefined;
        } | undefined;
        endCursor: {
            orderKey: bigint;
            uniqueKey?: Bytes | undefined;
        };
        finality: "finalized" | "accepted" | "pending" | "unknown";
        production: "unknown" | "backfill" | "live";
        data: readonly ({
            data?: string | undefined;
        } | null)[];
    };
}) | ({
    _tag: "invalidate";
} & {
    invalidate: {
        cursor?: {
            orderKey: bigint;
            uniqueKey?: Bytes | undefined;
        } | undefined;
    };
}) | ({
    _tag: "finalize";
} & {
    finalize: {
        cursor?: {
            orderKey: bigint;
            uniqueKey?: Bytes | undefined;
        } | undefined;
    };
}) | ({
    _tag: "systemMessage";
} & {
    systemMessage: {
        output: ({
            _tag: "stdout";
        } & {
            stdout: string;
        }) | ({
            _tag: "stderr";
        } & {
            stderr: string;
        });
    };
}), ({
    $case: "data";
} & {
    data: {
        cursor?: Cursor | undefined;
        endCursor: Cursor;
        finality: DataFinality;
        production: DataProduction;
        data?: readonly Uint8Array[] | undefined;
    };
}) | ({
    $case: "invalidate";
} & {
    invalidate: {
        cursor?: Cursor | undefined;
    };
}) | ({
    $case: "finalize";
} & {
    finalize: {
        cursor?: Cursor | undefined;
    };
}) | ({
    $case: "heartbeat";
} & {
    heartbeat: undefined;
}) | ({
    $case: "systemMessage";
} & {
    systemMessage: {
        output: ({
            $case: "stdout";
        } & {
            stdout: string;
        }) | ({
            $case: "stderr";
        } & {
            stderr: string;
        });
    };
})>;
type MockStreamResponse = CodecType<typeof MockStreamResponse>;

export { MockBlock, MockBlockFromBytes, MockClient, MockFilter, MockFilterFromBytes, MockStream, MockStreamResponse, StreamDataIterable };
