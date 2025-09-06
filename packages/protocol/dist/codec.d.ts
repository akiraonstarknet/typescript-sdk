/** Codec to encode and decode protobuf messages */
type Codec<TApp = unknown, TProto = unknown> = {
    encode(app: TApp): TProto;
    decode(proto: TProto): TApp;
};
type CodecType<C extends Codec> = ReturnType<C["decode"]>;
type CodecProto<C extends Codec> = ReturnType<C["encode"]>;
type Evaluate<T> = T extends infer O ? {
    [K in keyof O]: O[K];
} : never;
type TPropertyKey = string | symbol;
type TProperties = Record<TPropertyKey, Codec>;
type OptionalPropertyKeys<T> = {
    [K in keyof T]: undefined extends T[K] ? K : never;
}[keyof T];
type RequiredPropertyKeys<T> = keyof Omit<T, OptionalPropertyKeys<T>>;
type _MessageCodecType<T extends TProperties> = {
    [K in keyof T]: CodecType<T[K]>;
};
type _MessageCodecProto<T extends TProperties> = {
    [K in keyof T]: CodecProto<T[K]>;
};
type MessageCodecType<T extends TProperties> = _MessageCodecType<T> extends infer R ? Evaluate<Partial<R> & Required<Pick<R, RequiredPropertyKeys<R>>>> : never;
type MessageCodecProto<T extends TProperties> = _MessageCodecProto<T> extends infer R ? Evaluate<Partial<R> & Required<Pick<R, RequiredPropertyKeys<R>>>> : never;
type MessageCodec<T extends TProperties = TProperties> = Codec<MessageCodecType<T>, MessageCodecProto<T>>;
declare function MessageCodec<T extends TProperties>(schema: T): MessageCodec<T>;
type ArrayCodec<T extends Codec> = T extends Codec<infer TApp, infer TProto> ? Codec<readonly TApp[], readonly TProto[] | undefined> : never;
declare function ArrayCodec<T extends Codec<TApp, TProto>, TApp, TProto>(t: T): ArrayCodec<T>;
type MutableArrayCodec<T extends Codec<TApp, TProto>, TApp, TProto> = T extends Codec<infer TApp, infer TProto> ? Codec<TApp[], TProto[]> : never;
declare function MutableArrayCodec<T extends Codec<TApp, TProto>, TApp, TProto>(t: T): MutableArrayCodec<T, TApp, TProto>;
type OptionalCodec<T extends Codec> = T extends Codec<infer TApp, infer TProto> ? Codec<TApp | undefined, TProto | undefined> : never;
declare function OptionalCodec<T extends Codec>(t: T): OptionalCodec<T>;
type RequiredCodec<T extends Codec> = T extends Codec<infer TApp, infer TProto> ? TApp extends undefined ? never : Codec<TApp, TProto | undefined> : never;
declare function RequiredCodec<T extends Codec>(t: T): RequiredCodec<T>;
type NullOrCodec<T extends Codec> = T extends Codec<infer TApp, infer TProto> ? Codec<TApp | null, TProto | null> : never;
declare function NullOrCodec<T extends Codec>(t: T): NullOrCodec<T>;
type BigIntCodec = CodecType<typeof BigIntCodec>;
declare const BigIntCodec: Codec<bigint, bigint>;
type NumberCodec = CodecType<typeof NumberCodec>;
declare const NumberCodec: Codec<number, number>;
type Uint8ArrayCodec = CodecType<typeof Uint8ArrayCodec>;
declare const Uint8ArrayCodec: Codec<Uint8Array, Uint8Array>;
type DateCodec = CodecType<typeof DateCodec>;
declare const DateCodec: Codec<Date, Date>;
type BooleanCodec = CodecType<typeof BooleanCodec>;
declare const BooleanCodec: Codec<boolean, boolean>;
type StringCodec = CodecType<typeof StringCodec>;
declare const StringCodec: Codec<string, string>;
type UndefinedCodec = CodecType<typeof UndefinedCodec>;
declare const UndefinedCodec: Codec<undefined, undefined>;
type Literal = string | number | boolean | null | undefined;
type LiteralCodec<T extends Codec, L extends Literal> = T extends Codec<infer TApp, infer TProto> ? Codec<TApp, TProto> : never;
declare const LiteralCodec: <const L extends Literal>(value: L) => LiteralCodec<Codec<L, L>, L>;
type LiteralUnionCodec<T extends Codec, L extends readonly Literal[]> = T extends Codec<infer TApp, infer TProto> ? Codec<TApp, TProto> : never;
declare const LiteralUnionCodec: <const L extends readonly Literal[]>(values: L) => LiteralUnionCodec<Codec<L[number], L[number]>, L>;
type AppVariantMap<TTag extends TPropertyKey, TVariants extends TProperties> = {
    [K in keyof TVariants]: {
        [P in TTag]: K;
    } & (CodecType<TVariants[K]> extends UndefinedCodec ? {} : {
        [P in K & TPropertyKey]: CodecType<TVariants[K]>;
    });
};
type VariantCodecType<TTag extends TPropertyKey, TVariants extends TProperties> = AppVariantMap<TTag, TVariants>[keyof TVariants];
type ProtoVariantMap<TDiscriminator extends TPropertyKey, TVariants extends TProperties> = {
    [K in keyof TVariants]: {
        [P in TDiscriminator]: K;
    } & {
        [P in K & TPropertyKey]: CodecProto<TVariants[K]>;
    };
};
type VariantCodecProto<TDiscriminator extends TPropertyKey, TVariants extends TProperties> = ProtoVariantMap<TDiscriminator, TVariants>[keyof TVariants];
type VariantCodec<T extends Codec, TTag extends TPropertyKey, TDiscriminator extends TPropertyKey> = T extends Codec<infer TApp, infer TProto> ? Codec<TApp, TProto> : never;
declare const VariantCodec: <TTag extends TPropertyKey, TDiscriminator extends TPropertyKey, TVariants extends TProperties, TCodec extends Codec<VariantCodecType<TTag, TVariants>, VariantCodecProto<TDiscriminator, TVariants>>>(options: {
    tag: TTag;
    discriminator: TDiscriminator;
    variants: TVariants;
}) => VariantCodec<TCodec, TTag, TDiscriminator>;
type OneOfCodec<TVariants extends TProperties> = VariantCodec<Codec<VariantCodecType<"_tag", TVariants>, VariantCodecProto<"$case", TVariants>>, "_tag", "$case">;
declare function OneOfCodec<TVariants extends TProperties>(variants: TVariants): OneOfCodec<TVariants>;

export { ArrayCodec, BigIntCodec, BooleanCodec, type Codec, type CodecProto, type CodecType, DateCodec, type Evaluate, LiteralCodec, LiteralUnionCodec, MessageCodec, MutableArrayCodec, NullOrCodec, NumberCodec, OneOfCodec, OptionalCodec, RequiredCodec, StringCodec, Uint8ArrayCodec, UndefinedCodec, VariantCodec };
