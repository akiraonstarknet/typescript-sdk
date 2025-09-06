import { Codec, CodecType } from '@apibara/protocol/codec';
import _m0 from 'protobufjs/minimal.js';

declare const protobufPackage = "starknet.v2";
/** A field element. */
interface FieldElement$1 {
    readonly x0?: bigint | undefined;
    readonly x1?: bigint | undefined;
    readonly x2?: bigint | undefined;
    readonly x3?: bigint | undefined;
}
declare const FieldElement$1: {
    encode(message: FieldElement$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FieldElement$1;
    fromJSON(object: any): FieldElement$1;
    toJSON(message: FieldElement$1): unknown;
    create(base?: DeepPartial<FieldElement$1>): FieldElement$1;
    fromPartial(object: DeepPartial<FieldElement$1>): FieldElement$1;
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

type common_DeepPartial<T> = DeepPartial<T>;
declare const common_protobufPackage: typeof protobufPackage;
declare namespace common {
  export { type common_DeepPartial as DeepPartial, FieldElement$1 as FieldElement, common_protobufPackage as protobufPackage };
}

declare const FieldElement: Codec<`0x${string}`, FieldElement$1>;
type FieldElement = CodecType<typeof FieldElement>;

export { FieldElement$1 as F, FieldElement as a, common as c };
