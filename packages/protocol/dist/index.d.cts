import { s as stream } from './shared/protocol.0e734e33.cjs';
export { B as Bytes, b as BytesFromUint8Array, w as Client, u as ClientCallOptions, x as CreateClientOptions, C as Cursor, e as CursorFromBytes, c as CursorProto, q as Data, g as DataFinality, h as DataProduction, D as DnaStreamClient, a as DnaStreamDefinition, k as Duration, j as DurationCodec, F as Finalize, G as GrpcClient, H as Heartbeat, I as Invalidate, R as ResponseWithoutData, S as StatusRequest, f as StatusResponse, o as StdErr, m as StdOut, t as StreamConfig, A as StreamDataIterable, v as StreamDataOptions, l as StreamDataRequest, r as StreamDataResponse, p as SystemMessage, T as TimeoutError, z as createAuthenticatedClient, y as createClient, d as createCursor, i as isCursor, n as normalizeCursor } from './shared/protocol.0e734e33.cjs';
import _m0 from 'protobufjs/minimal.js';
export { ClientError, Metadata, ServerError, Status } from 'nice-grpc';
import './codec.cjs';
import 'nice-grpc-common';

declare const protobufPackage = "dna.v2.testing";
interface MockFilter {
    readonly filter?: string | undefined;
}
declare const MockFilter: {
    encode(message: MockFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MockFilter;
    fromJSON(object: any): MockFilter;
    toJSON(message: MockFilter): unknown;
    create(base?: DeepPartial<MockFilter>): MockFilter;
    fromPartial(object: DeepPartial<MockFilter>): MockFilter;
};
interface MockBlock {
    readonly data?: string | undefined;
}
declare const MockBlock: {
    encode(message: MockBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MockBlock;
    fromJSON(object: any): MockBlock;
    toJSON(message: MockBlock): unknown;
    create(base?: DeepPartial<MockBlock>): MockBlock;
    fromPartial(object: DeepPartial<MockBlock>): MockBlock;
};
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

type testing_DeepPartial<T> = DeepPartial<T>;
declare const testing_MockBlock: typeof MockBlock;
declare const testing_MockFilter: typeof MockFilter;
declare const testing_protobufPackage: typeof protobufPackage;
declare namespace testing {
  export { type testing_DeepPartial as DeepPartial, testing_MockBlock as MockBlock, testing_MockFilter as MockFilter, testing_protobufPackage as protobufPackage };
}

declare const index_stream: typeof stream;
declare const index_testing: typeof testing;
declare namespace index {
  export { index_stream as stream, index_testing as testing };
}

/** Track data rate using high precision timers. */
declare class RateGauge {
    private interval;
    private prev?;
    private rateMs?;
    private var;
    constructor(intervalSeconds: number);
    record(items: number): void;
    /** Returns the average rate per second. */
    average(): number | undefined;
    /** Returns the variance. */
    variance(): number;
}

export { RateGauge, index as proto };
