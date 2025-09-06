import { a as FieldElement } from './shared/starknet.e649ecb1.cjs';
import '@apibara/protocol/codec';
import 'protobufjs/minimal.js';

type Parser<TOut> = (data: readonly FieldElement[], offset: number) => {
    out: TOut;
    offset: number;
};
declare class ParseError extends Error {
    constructor(message: string);
}
declare function parseBool(data: readonly FieldElement[], offset: number): {
    out: boolean;
    offset: number;
};
declare function parseAsBigInt(data: readonly FieldElement[], offset: number): {
    out: bigint;
    offset: number;
};
declare const parseU8: typeof parseAsBigInt;
declare const parseU16: typeof parseAsBigInt;
declare const parseU32: typeof parseAsBigInt;
declare const parseU64: typeof parseAsBigInt;
declare const parseU128: typeof parseAsBigInt;
declare const parseUsize: typeof parseAsBigInt;
declare function parseU256(data: readonly FieldElement[], offset: number): {
    out: bigint;
    offset: number;
};
declare function parseAsHex(data: readonly FieldElement[], offset: number): {
    out: `0x${string}`;
    offset: number;
};
declare const parseContractAddress: typeof parseAsHex;
declare const parseEthAddress: typeof parseAsHex;
declare const parseStorageAddress: typeof parseAsHex;
declare const parseClassHash: typeof parseAsHex;
declare const parseBytes31: typeof parseAsHex;
declare function parseFelt252(data: readonly FieldElement[], offset: number): {
    out: bigint;
    offset: number;
};
declare function parseEmpty(_data: readonly FieldElement[], offset: number): {
    out: null;
    offset: number;
};
declare function parseArray<T>(type: Parser<T>): Parser<T[]>;
declare const parseSpan: typeof parseArray;
declare function parseOption<T>(type: Parser<T>): (data: readonly FieldElement[], offset: number) => {
    out: T;
    offset: number;
} | {
    out: null;
    offset: number;
};
declare function parseStruct<T extends Record<string, unknown>>(parsers: {
    [K in keyof T]: {
        index: number;
        parser: Parser<T[K]>;
    };
}): Parser<{
    [K in keyof T]: T[K];
}>;
declare function parseEnum<T extends Record<string, unknown>>(parsers: {
    [K in keyof T]: {
        index: number;
        parser: Parser<T[K]>;
    };
}): Parser<T[keyof T]>;
declare function parseTuple<T extends Parser<unknown>[]>(...parsers: T): Parser<UnwrapParsers<T>>;
type UnwrapParsers<TP> = {
    [Index in keyof TP]: TP[Index] extends Parser<infer U> ? U : never;
};
declare function parseByteArray(data: readonly FieldElement[], offset: number): {
    out: string;
    offset: number;
};

export { ParseError, type Parser, parseArray, parseAsBigInt, parseAsHex, parseBool, parseByteArray, parseBytes31, parseClassHash, parseContractAddress, parseEmpty, parseEnum, parseEthAddress, parseFelt252, parseOption, parseSpan, parseStorageAddress, parseStruct, parseTuple, parseU128, parseU16, parseU256, parseU32, parseU64, parseU8, parseUsize };
