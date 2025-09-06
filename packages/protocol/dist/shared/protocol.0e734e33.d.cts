import { Codec, CodecProto, CodecType, MessageCodec } from '../codec.cjs';
import { CallContext, CallOptions } from 'nice-grpc-common';
import _m0 from 'protobufjs/minimal.js';
import { DefaultCallOptions, NormalizedServiceDefinition, ChannelCredentials, ChannelOptions } from 'nice-grpc';

/**
 * A Duration represents a signed, fixed-length span of time represented
 * as a count of seconds and fractions of seconds at nanosecond
 * resolution. It is independent of any calendar and concepts like "day"
 * or "month". It is related to Timestamp in that the difference between
 * two Timestamp values is a Duration and it can be added or subtracted
 * from a Timestamp. Range is approximately +-10,000 years.
 *
 * # Examples
 *
 * Example 1: Compute Duration from two Timestamps in pseudo code.
 *
 *     Timestamp start = ...;
 *     Timestamp end = ...;
 *     Duration duration = ...;
 *
 *     duration.seconds = end.seconds - start.seconds;
 *     duration.nanos = end.nanos - start.nanos;
 *
 *     if (duration.seconds < 0 && duration.nanos > 0) {
 *       duration.seconds += 1;
 *       duration.nanos -= 1000000000;
 *     } else if (duration.seconds > 0 && duration.nanos < 0) {
 *       duration.seconds -= 1;
 *       duration.nanos += 1000000000;
 *     }
 *
 * Example 2: Compute Timestamp from Timestamp + Duration in pseudo code.
 *
 *     Timestamp start = ...;
 *     Duration duration = ...;
 *     Timestamp end = ...;
 *
 *     end.seconds = start.seconds + duration.seconds;
 *     end.nanos = start.nanos + duration.nanos;
 *
 *     if (end.nanos < 0) {
 *       end.seconds -= 1;
 *       end.nanos += 1000000000;
 *     } else if (end.nanos >= 1000000000) {
 *       end.seconds += 1;
 *       end.nanos -= 1000000000;
 *     }
 *
 * Example 3: Compute Duration from datetime.timedelta in Python.
 *
 *     td = datetime.timedelta(days=3, minutes=10)
 *     duration = Duration()
 *     duration.FromTimedelta(td)
 *
 * # JSON Mapping
 *
 * In JSON format, the Duration type is encoded as a string rather than an
 * object, where the string ends in the suffix "s" (indicating seconds) and
 * is preceded by the number of seconds, with nanoseconds expressed as
 * fractional seconds. For example, 3 seconds with 0 nanoseconds should be
 * encoded in JSON format as "3s", while 3 seconds and 1 nanosecond should
 * be expressed in JSON format as "3.000000001s", and 3 seconds and 1
 * microsecond should be expressed in JSON format as "3.000001s".
 */
interface Duration$1 {
    /**
     * Signed seconds of the span of time. Must be from -315,576,000,000
     * to +315,576,000,000 inclusive. Note: these bounds are computed from:
     * 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
     */
    readonly seconds?: bigint | undefined;
    /**
     * Signed fractions of a second at nanosecond resolution of the span
     * of time. Durations less than one second are represented with a 0
     * `seconds` field and a positive or negative `nanos` field. For durations
     * of one second or more, a non-zero value for the `nanos` field must be
     * of the same sign as the `seconds` field. Must be from -999,999,999
     * to +999,999,999 inclusive.
     */
    readonly nanos?: number | undefined;
}
declare const Duration$1: {
    encode(message: Duration$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Duration$1;
    fromJSON(object: any): Duration$1;
    toJSON(message: Duration$1): unknown;
    create(base?: DeepPartial$1<Duration$1>): Duration$1;
    fromPartial(object: DeepPartial$1<Duration$1>): Duration$1;
};
type Builtin$1 = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
type DeepPartial$1<T> = T extends Builtin$1 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$1<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$1<U>> : T extends {
    readonly $case: string;
} ? {
    [K in keyof Omit<T, "$case">]?: DeepPartial$1<T[K]>;
} & {
    readonly $case: T["$case"];
} : T extends {} ? {
    [K in keyof T]?: DeepPartial$1<T[K]>;
} : Partial<T>;

declare const protobufPackage = "dna.v2.stream";
/** Apibara DNA server V2 */
/** Data finality. */
declare enum DataFinality$1 {
    UNKNOWN = 0,
    /** PENDING - Data was received, but is not part of the canonical chain yet. */
    PENDING = 1,
    /** ACCEPTED - Data is now part of the canonical chain, but could still be invalidated. */
    ACCEPTED = 2,
    /** FINALIZED - Data is finalized and cannot be invalidated. */
    FINALIZED = 3,
    UNRECOGNIZED = -1
}
declare function dataFinalityFromJSON(object: any): DataFinality$1;
declare function dataFinalityToJSON(object: DataFinality$1): string;
/** Data production mode. */
declare enum DataProduction$1 {
    UNKNOWN = 0,
    /** BACKFILL - Data is for a backfilled block. */
    BACKFILL = 1,
    /** LIVE - Data is for a live block. */
    LIVE = 2,
    UNRECOGNIZED = -1
}
declare function dataProductionFromJSON(object: any): DataProduction$1;
declare function dataProductionToJSON(object: DataProduction$1): string;
/** A cursor over the stream content. */
interface Cursor$1 {
    /**
     * Key used for ordering messages in the stream.
     *
     * This is usually the block or slot number.
     */
    readonly orderKey?: bigint | undefined;
    /**
     * Key used to discriminate branches in the stream.
     *
     * This is usually the hash of the block.
     */
    readonly uniqueKey?: Uint8Array | undefined;
}
declare const Cursor$1: {
    encode(message: Cursor$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cursor$1;
    fromJSON(object: any): Cursor$1;
    toJSON(message: Cursor$1): unknown;
    create(base?: DeepPartial<Cursor$1>): Cursor$1;
    fromPartial(object: DeepPartial<Cursor$1>): Cursor$1;
};
/** Request for the `Status` method. */
interface StatusRequest$1 {
}
declare const StatusRequest$1: {
    encode(_: StatusRequest$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatusRequest$1;
    fromJSON(_: any): StatusRequest$1;
    toJSON(_: StatusRequest$1): unknown;
    create(base?: DeepPartial<StatusRequest$1>): StatusRequest$1;
    fromPartial(_: DeepPartial<StatusRequest$1>): StatusRequest$1;
};
/** Response for the `Status` method. */
interface StatusResponse$1 {
    /** The current head of the chain. */
    readonly currentHead?: Cursor$1 | undefined;
    /** The last cursor that was ingested by the node. */
    readonly lastIngested?: Cursor$1 | undefined;
    /** The finalized block. */
    readonly finalized?: Cursor$1 | undefined;
    /** The first block available. */
    readonly starting?: Cursor$1 | undefined;
}
declare const StatusResponse$1: {
    encode(message: StatusResponse$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatusResponse$1;
    fromJSON(object: any): StatusResponse$1;
    toJSON(message: StatusResponse$1): unknown;
    create(base?: DeepPartial<StatusResponse$1>): StatusResponse$1;
    fromPartial(object: DeepPartial<StatusResponse$1>): StatusResponse$1;
};
/** Request data to be streamed. */
interface StreamDataRequest$1 {
    /**
     * Cursor to start streaming from.
     *
     * If not specified, starts from the genesis block.
     * Use the data's message `end_cursor` field to resume streaming.
     */
    readonly startingCursor?: Cursor$1 | undefined;
    /**
     * Return data with the specified finality.
     *
     * If not specified, defaults to `DATA_FINALITY_ACCEPTED`.
     */
    readonly finality?: DataFinality$1 | undefined;
    /** Filters used to generate data. */
    readonly filter?: readonly Uint8Array[] | undefined;
    /**
     * Heartbeat interval.
     *
     * Value must be between 10 and 60 seconds.
     * If not specified, defaults to 30 seconds.
     */
    readonly heartbeatInterval?: Duration$1 | undefined;
}
declare const StreamDataRequest$1: {
    encode(message: StreamDataRequest$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamDataRequest$1;
    fromJSON(object: any): StreamDataRequest$1;
    toJSON(message: StreamDataRequest$1): unknown;
    create(base?: DeepPartial<StreamDataRequest$1>): StreamDataRequest$1;
    fromPartial(object: DeepPartial<StreamDataRequest$1>): StreamDataRequest$1;
};
/** Contains a piece of streamed data. */
interface StreamDataResponse$1 {
    readonly message?: {
        readonly $case: "data";
        readonly data: Data$1;
    } | {
        readonly $case: "invalidate";
        readonly invalidate: Invalidate$1;
    } | {
        readonly $case: "finalize";
        readonly finalize: Finalize$1;
    } | {
        readonly $case: "heartbeat";
        readonly heartbeat: Heartbeat$1;
    } | {
        readonly $case: "systemMessage";
        readonly systemMessage: SystemMessage$1;
    } | undefined;
}
declare const StreamDataResponse$1: {
    encode(message: StreamDataResponse$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamDataResponse$1;
    fromJSON(object: any): StreamDataResponse$1;
    toJSON(message: StreamDataResponse$1): unknown;
    create(base?: DeepPartial<StreamDataResponse$1>): StreamDataResponse$1;
    fromPartial(object: DeepPartial<StreamDataResponse$1>): StreamDataResponse$1;
};
/** Invalidate data after the given cursor. */
interface Invalidate$1 {
    /**
     * The cursor of the new chain's head.
     *
     * All data after this cursor should be considered invalid.
     */
    readonly cursor?: Cursor$1 | undefined;
    /** List of blocks that were removed from the chain. */
    readonly removed?: readonly Cursor$1[] | undefined;
}
declare const Invalidate$1: {
    encode(message: Invalidate$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Invalidate$1;
    fromJSON(object: any): Invalidate$1;
    toJSON(message: Invalidate$1): unknown;
    create(base?: DeepPartial<Invalidate$1>): Invalidate$1;
    fromPartial(object: DeepPartial<Invalidate$1>): Invalidate$1;
};
/** Move the finalized block forward. */
interface Finalize$1 {
    /**
     * The cursor of the new finalized block.
     *
     * All data before this cursor cannot be invalidated.
     */
    readonly cursor?: Cursor$1 | undefined;
}
declare const Finalize$1: {
    encode(message: Finalize$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Finalize$1;
    fromJSON(object: any): Finalize$1;
    toJSON(message: Finalize$1): unknown;
    create(base?: DeepPartial<Finalize$1>): Finalize$1;
    fromPartial(object: DeepPartial<Finalize$1>): Finalize$1;
};
/**
 * A single block of data.
 *
 * If the request specified multiple filters, the `data` field will contain the
 * data for each filter in the same order as the filters were specified in the
 * request.
 * If no data is available for a filter, the corresponding data field will be
 * empty.
 */
interface Data$1 {
    /** Cursor that generated this block of data. */
    readonly cursor?: Cursor$1 | undefined;
    /** Block cursor. Use this cursor to resume the stream. */
    readonly endCursor?: Cursor$1 | undefined;
    /** The finality status of the block. */
    readonly finality?: DataFinality$1 | undefined;
    /**
     * The block data.
     *
     * This message contains chain-specific data serialized using protobuf.
     */
    readonly data?: readonly Uint8Array[] | undefined;
    /** The production mode of the block. */
    readonly production?: DataProduction$1 | undefined;
}
declare const Data$1: {
    encode(message: Data$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Data$1;
    fromJSON(object: any): Data$1;
    toJSON(message: Data$1): unknown;
    create(base?: DeepPartial<Data$1>): Data$1;
    fromPartial(object: DeepPartial<Data$1>): Data$1;
};
/** Sent to clients to check if stream is still connected. */
interface Heartbeat$1 {
}
declare const Heartbeat$1: {
    encode(_: Heartbeat$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Heartbeat$1;
    fromJSON(_: any): Heartbeat$1;
    toJSON(_: Heartbeat$1): unknown;
    create(base?: DeepPartial<Heartbeat$1>): Heartbeat$1;
    fromPartial(_: DeepPartial<Heartbeat$1>): Heartbeat$1;
};
/** Message from the server to the client. */
interface SystemMessage$1 {
    readonly output?: {
        readonly $case: "stdout";
        readonly stdout: string;
    } | {
        readonly $case: "stderr";
        readonly stderr: string;
    } | undefined;
}
declare const SystemMessage$1: {
    encode(message: SystemMessage$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SystemMessage$1;
    fromJSON(object: any): SystemMessage$1;
    toJSON(message: SystemMessage$1): unknown;
    create(base?: DeepPartial<SystemMessage$1>): SystemMessage$1;
    fromPartial(object: DeepPartial<SystemMessage$1>): SystemMessage$1;
};
type DnaStreamDefinition = typeof DnaStreamDefinition;
declare const DnaStreamDefinition: {
    readonly name: "DnaStream";
    readonly fullName: "dna.v2.stream.DnaStream";
    readonly methods: {
        /** Stream data from the server. */
        readonly streamData: {
            readonly name: "StreamData";
            readonly requestType: {
                encode(message: StreamDataRequest$1, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): StreamDataRequest$1;
                fromJSON(object: any): StreamDataRequest$1;
                toJSON(message: StreamDataRequest$1): unknown;
                create(base?: DeepPartial<StreamDataRequest$1>): StreamDataRequest$1;
                fromPartial(object: DeepPartial<StreamDataRequest$1>): StreamDataRequest$1;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: StreamDataResponse$1, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): StreamDataResponse$1;
                fromJSON(object: any): StreamDataResponse$1;
                toJSON(message: StreamDataResponse$1): unknown;
                create(base?: DeepPartial<StreamDataResponse$1>): StreamDataResponse$1;
                fromPartial(object: DeepPartial<StreamDataResponse$1>): StreamDataResponse$1;
            };
            readonly responseStream: true;
            readonly options: {};
        };
        /** Get DNA server status. */
        readonly status: {
            readonly name: "Status";
            readonly requestType: {
                encode(_: StatusRequest$1, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): StatusRequest$1;
                fromJSON(_: any): StatusRequest$1;
                toJSON(_: StatusRequest$1): unknown;
                create(base?: DeepPartial<StatusRequest$1>): StatusRequest$1;
                fromPartial(_: DeepPartial<StatusRequest$1>): StatusRequest$1;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: StatusResponse$1, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): StatusResponse$1;
                fromJSON(object: any): StatusResponse$1;
                toJSON(message: StatusResponse$1): unknown;
                create(base?: DeepPartial<StatusResponse$1>): StatusResponse$1;
                fromPartial(object: DeepPartial<StatusResponse$1>): StatusResponse$1;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
interface DnaStreamServiceImplementation<CallContextExt = {}> {
    /** Stream data from the server. */
    streamData(request: StreamDataRequest$1, context: CallContext & CallContextExt): ServerStreamingMethodResult<DeepPartial<StreamDataResponse$1>>;
    /** Get DNA server status. */
    status(request: StatusRequest$1, context: CallContext & CallContextExt): Promise<DeepPartial<StatusResponse$1>>;
}
interface DnaStreamClient<CallOptionsExt = {}> {
    /** Stream data from the server. */
    streamData(request: DeepPartial<StreamDataRequest$1>, options?: CallOptions & CallOptionsExt): AsyncIterable<StreamDataResponse$1>;
    /** Get DNA server status. */
    status(request: DeepPartial<StatusRequest$1>, options?: CallOptions & CallOptionsExt): Promise<StatusResponse$1>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {
    readonly $case: string;
} ? {
    [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]>;
} & {
    readonly $case: T["$case"];
} : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type ServerStreamingMethodResult<Response> = {
    [Symbol.asyncIterator](): AsyncIterator<Response, void>;
};

type stream_DeepPartial<T> = DeepPartial<T>;
type stream_DnaStreamClient<CallOptionsExt = {}> = DnaStreamClient<CallOptionsExt>;
declare const stream_DnaStreamDefinition: typeof DnaStreamDefinition;
type stream_DnaStreamServiceImplementation<CallContextExt = {}> = DnaStreamServiceImplementation<CallContextExt>;
type stream_ServerStreamingMethodResult<Response> = ServerStreamingMethodResult<Response>;
declare const stream_dataFinalityFromJSON: typeof dataFinalityFromJSON;
declare const stream_dataFinalityToJSON: typeof dataFinalityToJSON;
declare const stream_dataProductionFromJSON: typeof dataProductionFromJSON;
declare const stream_dataProductionToJSON: typeof dataProductionToJSON;
declare const stream_protobufPackage: typeof protobufPackage;
declare namespace stream {
  export { Cursor$1 as Cursor, Data$1 as Data, DataFinality$1 as DataFinality, DataProduction$1 as DataProduction, type stream_DeepPartial as DeepPartial, type stream_DnaStreamClient as DnaStreamClient, stream_DnaStreamDefinition as DnaStreamDefinition, type stream_DnaStreamServiceImplementation as DnaStreamServiceImplementation, Finalize$1 as Finalize, Heartbeat$1 as Heartbeat, Invalidate$1 as Invalidate, type stream_ServerStreamingMethodResult as ServerStreamingMethodResult, StatusRequest$1 as StatusRequest, StatusResponse$1 as StatusResponse, StreamDataRequest$1 as StreamDataRequest, StreamDataResponse$1 as StreamDataResponse, SystemMessage$1 as SystemMessage, stream_dataFinalityFromJSON as dataFinalityFromJSON, stream_dataFinalityToJSON as dataFinalityToJSON, stream_dataProductionFromJSON as dataProductionFromJSON, stream_dataProductionToJSON as dataProductionToJSON, stream_protobufPackage as protobufPackage };
}

/** Bytes encoded as a 0x-prefixed hex string. */
type Bytes = `0x${string}`;
declare const BytesFromUint8Array: Codec<`0x${string}` | undefined, Uint8Array | undefined>;
type _CursorApp = {
    orderKey: bigint;
    uniqueKey?: Bytes | undefined;
};
type _CursorProto = Cursor$1;
/** The Cursor protobuf representation. */
type CursorProto = CodecProto<typeof Cursor>;
/** Represent a position in the stream. */
declare const Cursor: Codec<_CursorApp, _CursorProto>;
type Cursor = CodecType<typeof Cursor>;
declare const createCursor: (props: Cursor) => _CursorApp;
declare const CursorFromBytes: Codec<Cursor, Uint8Array>;
declare function isCursor(value: unknown): value is Cursor;
/** Normalize a cursor.
 *
 * The challenge is that the `Cursor` validator expects `uniqueKey` to be either a `0x${string}`
 * or not present at all. Setting the field to `undefined` will result in a validation error.
 *
 * @param cursor The cursor to normalize
 */
declare function normalizeCursor(cursor: {
    orderKey: bigint;
    uniqueKey: string | null;
}): Cursor;

/** The request to the `status` endpoint. */
declare const StatusRequest: MessageCodec<{}>;
type StatusRequest = CodecType<typeof StatusRequest>;
/** The response from the `status` endpoint. */
declare const StatusResponse: MessageCodec<{
    currentHead: Codec<{
        orderKey: bigint;
        uniqueKey?: Bytes | undefined;
    } | undefined, Cursor$1 | undefined>;
    lastIngested: Codec<{
        orderKey: bigint;
        uniqueKey?: Bytes | undefined;
    } | undefined, Cursor$1 | undefined>;
    finalized: Codec<{
        orderKey: bigint;
        uniqueKey?: Bytes | undefined;
    } | undefined, Cursor$1 | undefined>;
    starting: Codec<{
        orderKey: bigint;
        uniqueKey?: Bytes | undefined;
    } | undefined, Cursor$1 | undefined>;
}>;
type StatusResponse = CodecType<typeof StatusResponse>;

/** Data finality. */
declare const DataFinality: Codec<"finalized" | "accepted" | "pending" | "unknown", DataFinality$1>;
type DataFinality = CodecType<typeof DataFinality>;
/** Data production mode. */
declare const DataProduction: Codec<"backfill" | "live" | "unknown", DataProduction$1>;
type DataProduction = CodecType<typeof DataProduction>;
declare const DurationCodec: MessageCodec<{
    seconds: Codec<bigint, bigint>;
    nanos: Codec<number, number>;
}>;
type Duration = CodecType<typeof DurationCodec>;
/** Create a `StreamDataRequest` with the given filter schema. */
declare const StreamDataRequest: <TA>(filter: Codec<TA, Uint8Array>) => MessageCodec<{
    finality: Codec<"finalized" | "accepted" | "pending" | "unknown" | undefined, DataFinality$1 | undefined>;
    startingCursor: Codec<{
        orderKey: bigint;
        uniqueKey?: Bytes | undefined;
    } | undefined, Cursor$1 | undefined>;
    filter: Codec<TA[], Uint8Array[]>;
    heartbeatInterval: Codec<{
        seconds: bigint;
        nanos: number;
    } | undefined, {
        seconds: bigint;
        nanos: number;
    } | undefined>;
}>;
type StreamDataRequest<TA> = CodecType<ReturnType<typeof StreamDataRequest<TA>>>;
declare const Invalidate: MessageCodec<{
    cursor: Codec<{
        orderKey: bigint;
        uniqueKey?: Bytes | undefined;
    } | undefined, Cursor$1 | undefined>;
}>;
type Invalidate = CodecType<typeof Invalidate>;
declare const Finalize: MessageCodec<{
    cursor: Codec<{
        orderKey: bigint;
        uniqueKey?: Bytes | undefined;
    } | undefined, Cursor$1 | undefined>;
}>;
type Finalize = CodecType<typeof Finalize>;
declare const Heartbeat: Codec<undefined, undefined>;
type Heartbeat = CodecType<typeof Heartbeat>;
declare const StdOut: Codec<string, string>;
type StdOut = CodecType<typeof StdOut>;
declare const StdErr: Codec<string, string>;
type StdErr = CodecType<typeof StdErr>;
declare const SystemMessage: MessageCodec<{
    output: Codec<({
        _tag: "stdout";
    } & {
        stdout: string;
    }) | ({
        _tag: "stderr";
    } & {
        stderr: string;
    }), ({
        $case: "stdout";
    } & {
        stdout: string;
    }) | ({
        $case: "stderr";
    } & {
        stderr: string;
    })>;
}>;
type SystemMessage = CodecType<typeof SystemMessage>;
declare const Data: <TA>(schema: Codec<TA | null, Uint8Array>) => MessageCodec<{
    cursor: Codec<{
        orderKey: bigint;
        uniqueKey?: Bytes | undefined;
    } | undefined, Cursor$1 | undefined>;
    endCursor: Codec<{
        orderKey: bigint;
        uniqueKey?: Bytes | undefined;
    }, Cursor$1>;
    finality: Codec<"finalized" | "accepted" | "pending" | "unknown", DataFinality$1>;
    production: Codec<"unknown" | "backfill" | "live", DataProduction$1>;
    data: Codec<readonly (TA | null)[], readonly Uint8Array[] | undefined>;
}>;
type Data<TA> = CodecType<ReturnType<typeof Data<TA>>>;
declare const ResponseWithoutData: Codec<({
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
}) | {
    _tag: "heartbeat";
} | ({
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
    $case: "invalidate";
} & {
    invalidate: {
        cursor?: Cursor$1 | undefined;
    };
}) | ({
    $case: "finalize";
} & {
    finalize: {
        cursor?: Cursor$1 | undefined;
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
type ResponseWithoutData = CodecType<typeof ResponseWithoutData>;
declare const StreamDataResponse: <TA>(schema: Codec<TA | null, Uint8Array>) => Codec<{
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
        data: readonly (TA | null)[];
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
        cursor?: Cursor$1 | undefined;
        endCursor: Cursor$1;
        finality: DataFinality$1;
        production: DataProduction$1;
        data?: readonly Uint8Array[] | undefined;
    };
}) | ({
    $case: "invalidate";
} & {
    invalidate: {
        cursor?: Cursor$1 | undefined;
    };
}) | ({
    $case: "finalize";
} & {
    finalize: {
        cursor?: Cursor$1 | undefined;
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
type StreamDataResponse<TA> = CodecType<ReturnType<typeof StreamDataResponse<TA>>>;

/** Configure a DNA stream. */
declare class StreamConfig<TFilter, TBlock> {
    private filter;
    private block;
    mergeFilter: (a: TFilter, b: TFilter) => TFilter;
    name: string;
    private request;
    private response;
    constructor(filter: Codec<TFilter, Uint8Array>, block: Codec<TBlock | null, Uint8Array>, mergeFilter: (a: TFilter, b: TFilter) => TFilter, name: string);
    /** Filter schema. */
    get Filter(): Codec<TFilter, Uint8Array>;
    /** Block schema. */
    get Block(): Codec<TBlock | null, Uint8Array>;
    /** Stream data request schema. */
    get Request(): MessageCodec<{
        finality: Codec<"finalized" | "accepted" | "pending" | "unknown" | undefined, DataFinality$1 | undefined>;
        startingCursor: Codec<{
            orderKey: bigint;
            uniqueKey?: Bytes | undefined;
        } | undefined, Cursor$1 | undefined>;
        filter: Codec<TFilter[], Uint8Array[]>;
        heartbeatInterval: Codec<{
            seconds: bigint;
            nanos: number;
        } | undefined, {
            seconds: bigint;
            nanos: number;
        } | undefined>;
    }>;
    /** Stream data response schema. */
    get Response(): Codec<{
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
            data: readonly (TBlock | null)[];
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
            cursor?: Cursor$1 | undefined;
            endCursor: Cursor$1;
            finality: DataFinality$1;
            production: DataProduction$1;
            data?: readonly Uint8Array[] | undefined;
        };
    }) | ({
        $case: "invalidate";
    } & {
        invalidate: {
            cursor?: Cursor$1 | undefined;
        };
    }) | ({
        $case: "finalize";
    } & {
        finalize: {
            cursor?: Cursor$1 | undefined;
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
}

declare class TimeoutError extends Error {
    constructor(timeout: number);
}
/** Client call options. */
interface ClientCallOptions {
    signal?: AbortSignal;
}
interface StreamDataOptions extends ClientCallOptions {
    /** Stop at the specified cursor (inclusive). */
    endingCursor?: Cursor;
    /** Timeout between messages, in milliseconds. */
    timeout?: number;
}
/** DNA client. */
interface Client<TFilter, TBlock> {
    /** Fetch the DNA stream status. */
    status(request?: StatusRequest, options?: ClientCallOptions): Promise<StatusResponse>;
    /** Start streaming data from the DNA server. */
    streamData(request: StreamDataRequest<TFilter>, options?: StreamDataOptions): AsyncIterable<StreamDataResponse<TBlock>>;
}
type CreateClientOptions = {
    defaultCallOptions?: DefaultCallOptions<NormalizedServiceDefinition<DnaStreamDefinition>>;
    credentials?: ChannelCredentials;
    channelOptions?: ChannelOptions;
};
/** Create a client connecting to the DNA grpc service. */
declare function createClient<TFilter, TBlock>(config: StreamConfig<TFilter, TBlock>, streamUrl: string, options?: CreateClientOptions): GrpcClient<TFilter, TBlock>;
declare function createAuthenticatedClient<TFilter, TBlock>(config: StreamConfig<TFilter, TBlock>, streamUrl: string, options?: CreateClientOptions): GrpcClient<TFilter, TBlock>;
declare class GrpcClient<TFilter, TBlock> implements Client<TFilter, TBlock> {
    private config;
    private client;
    private encodeRequest;
    constructor(config: StreamConfig<TFilter, TBlock>, client: DnaStreamClient);
    status(request?: StatusRequest, options?: ClientCallOptions): Promise<{
        currentHead?: {
            orderKey: bigint;
            uniqueKey?: Bytes | undefined;
        } | undefined;
        lastIngested?: {
            orderKey: bigint;
            uniqueKey?: Bytes | undefined;
        } | undefined;
        finalized?: {
            orderKey: bigint;
            uniqueKey?: Bytes | undefined;
        } | undefined;
        starting?: {
            orderKey: bigint;
            uniqueKey?: Bytes | undefined;
        } | undefined;
    }>;
    streamData(request: StreamDataRequest<TFilter>, options?: StreamDataOptions): StreamDataIterable<TBlock | null>;
}
declare class StreamDataIterable<TBlock> {
    private it;
    private schema;
    private options?;
    constructor(it: AsyncIterable<StreamDataResponse$1>, schema: Codec<TBlock, Uint8Array>, options?: StreamDataOptions | undefined);
    [Symbol.asyncIterator](): AsyncIterator<StreamDataResponse<TBlock>>;
}

export { StreamDataIterable as A, type Bytes as B, Cursor as C, type DnaStreamClient as D, Cursor$1 as E, Finalize as F, GrpcClient as G, Heartbeat as H, Invalidate as I, DataFinality$1 as J, DataProduction$1 as K, ResponseWithoutData as R, StatusRequest as S, TimeoutError as T, DnaStreamDefinition as a, BytesFromUint8Array as b, type CursorProto as c, createCursor as d, CursorFromBytes as e, StatusResponse as f, DataFinality as g, DataProduction as h, isCursor as i, DurationCodec as j, type Duration as k, StreamDataRequest as l, StdOut as m, normalizeCursor as n, StdErr as o, SystemMessage as p, Data as q, StreamDataResponse as r, stream as s, StreamConfig as t, type ClientCallOptions as u, type StreamDataOptions as v, type Client as w, type CreateClientOptions as x, createClient as y, createAuthenticatedClient as z };
