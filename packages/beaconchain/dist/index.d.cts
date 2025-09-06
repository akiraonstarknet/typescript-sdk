import { StreamConfig } from '@apibara/protocol';
import _m0 from 'protobufjs/minimal.js';
import { Codec, CodecType, MessageCodec } from '@apibara/protocol/codec';

declare const protobufPackage$2 = "beaconchain.v2";
/** Validator status */
declare enum ValidatorStatus$1 {
    UNKNOWN = 0,
    PENDING_INITIALIZED = 1,
    PENDING_QUEUED = 2,
    ACTIVE_ONGOING = 3,
    ACTIVE_EXITING = 4,
    ACTIVE_SLASHED = 5,
    EXITED_UNSLASHED = 6,
    EXITED_SLASHED = 7,
    WITHDRAWAL_POSSIBLE = 8,
    WITHDRAWAL_DONE = 9,
    UNRECOGNIZED = -1
}
declare function validatorStatusFromJSON(object: any): ValidatorStatus$1;
declare function validatorStatusToJSON(object: ValidatorStatus$1): string;
/**
 * An address of 160 bits.
 *
 * As a separate type so that the API is clearer.
 */
interface Address$1 {
    readonly x0?: bigint | undefined;
    readonly x1?: bigint | undefined;
    readonly x2?: number | undefined;
}
declare const Address$1: {
    encode(message: Address$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Address$1;
    fromJSON(object: any): Address$1;
    toJSON(message: Address$1): unknown;
    create(base?: DeepPartial$2<Address$1>): Address$1;
    fromPartial(object: DeepPartial$2<Address$1>): Address$1;
};
/** Unsigned integer of 256 bits. */
interface U256$1 {
    readonly x0?: bigint | undefined;
    readonly x1?: bigint | undefined;
    readonly x2?: bigint | undefined;
    readonly x3?: bigint | undefined;
}
declare const U256$1: {
    encode(message: U256$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): U256$1;
    fromJSON(object: any): U256$1;
    toJSON(message: U256$1): unknown;
    create(base?: DeepPartial$2<U256$1>): U256$1;
    fromPartial(object: DeepPartial$2<U256$1>): U256$1;
};
/** Byte array of 256 bits. */
interface B256$1 {
    readonly x0?: bigint | undefined;
    readonly x1?: bigint | undefined;
    readonly x2?: bigint | undefined;
    readonly x3?: bigint | undefined;
}
declare const B256$1: {
    encode(message: B256$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): B256$1;
    fromJSON(object: any): B256$1;
    toJSON(message: B256$1): unknown;
    create(base?: DeepPartial$2<B256$1>): B256$1;
    fromPartial(object: DeepPartial$2<B256$1>): B256$1;
};
/** Byte array of 384 bits. */
interface B384$1 {
    readonly x0?: bigint | undefined;
    readonly x1?: bigint | undefined;
    readonly x2?: bigint | undefined;
    readonly x3?: bigint | undefined;
    readonly x4?: bigint | undefined;
    readonly x5?: bigint | undefined;
}
declare const B384$1: {
    encode(message: B384$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): B384$1;
    fromJSON(object: any): B384$1;
    toJSON(message: B384$1): unknown;
    create(base?: DeepPartial$2<B384$1>): B384$1;
    fromPartial(object: DeepPartial$2<B384$1>): B384$1;
};
/** Unsigned integer of 128 bits. */
interface U128$1 {
    readonly x0?: bigint | undefined;
    readonly x1?: bigint | undefined;
}
declare const U128$1: {
    encode(message: U128$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): U128$1;
    fromJSON(object: any): U128$1;
    toJSON(message: U128$1): unknown;
    create(base?: DeepPartial$2<U128$1>): U128$1;
    fromPartial(object: DeepPartial$2<U128$1>): U128$1;
};
type Builtin$2 = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
type DeepPartial$2<T> = T extends Builtin$2 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$2<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$2<U>> : T extends {
    readonly $case: string;
} ? {
    [K in keyof Omit<T, "$case">]?: DeepPartial$2<T[K]>;
} & {
    readonly $case: T["$case"];
} : T extends {} ? {
    [K in keyof T]?: DeepPartial$2<T[K]>;
} : Partial<T>;

declare const common_validatorStatusFromJSON: typeof validatorStatusFromJSON;
declare const common_validatorStatusToJSON: typeof validatorStatusToJSON;
declare namespace common {
  export { Address$1 as Address, B256$1 as B256, B384$1 as B384, type DeepPartial$2 as DeepPartial, U128$1 as U128, U256$1 as U256, ValidatorStatus$1 as ValidatorStatus, protobufPackage$2 as protobufPackage, common_validatorStatusFromJSON as validatorStatusFromJSON, common_validatorStatusToJSON as validatorStatusToJSON };
}

declare const protobufPackage$1 = "beaconchain.v2";
/** Beacon Chain DNA definitions (data). */
/** Requested data, grouped by block. */
interface Block$1 {
    /** The header. */
    readonly header?: BlockHeader$1 | undefined;
    /** List of transactions. */
    readonly transactions?: readonly Transaction$1[] | undefined;
    /** List of validators. */
    readonly validators?: readonly Validator$1[] | undefined;
    /** List of blobs. */
    readonly blobs?: readonly Blob$1[] | undefined;
}
declare const Block$1: {
    encode(message: Block$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Block$1;
    fromJSON(object: any): Block$1;
    toJSON(message: Block$1): unknown;
    create(base?: DeepPartial$1<Block$1>): Block$1;
    fromPartial(object: DeepPartial$1<Block$1>): Block$1;
};
interface BlockHeader$1 {
    /** Block slot. */
    readonly slot?: bigint | undefined;
    /** Proposer index. */
    readonly proposerIndex?: number | undefined;
    /** Parent root. */
    readonly parentRoot?: B256$1 | undefined;
    /** State root. */
    readonly stateRoot?: B256$1 | undefined;
    /** Randao reveal. */
    readonly randaoReveal?: Uint8Array | undefined;
    /** Deposit count. */
    readonly depositCount?: bigint | undefined;
    /** Deposit state root. */
    readonly depositRoot?: B256$1 | undefined;
    /** Block hash. */
    readonly blockHash?: B256$1 | undefined;
    /** Graffiti. */
    readonly graffiti?: B256$1 | undefined;
    /** Execution payload. */
    readonly executionPayload?: ExecutionPayload$1 | undefined;
    /** Blob kzg commitments. */
    readonly blobKzgCommitments?: readonly B384$1[] | undefined;
}
declare const BlockHeader$1: {
    encode(message: BlockHeader$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockHeader$1;
    fromJSON(object: any): BlockHeader$1;
    toJSON(message: BlockHeader$1): unknown;
    create(base?: DeepPartial$1<BlockHeader$1>): BlockHeader$1;
    fromPartial(object: DeepPartial$1<BlockHeader$1>): BlockHeader$1;
};
interface Transaction$1 {
    readonly filterIds?: readonly number[] | undefined;
    /** Transaction hash. */
    readonly transactionHash?: B256$1 | undefined;
    /** Nonce. */
    readonly nonce?: bigint | undefined;
    /** Transaction index in the block. */
    readonly transactionIndex?: number | undefined;
    /** Sender. */
    readonly from?: Address$1 | undefined;
    /** Recipient. */
    readonly to?: Address$1 | undefined;
    /** Amount of wei transferred. */
    readonly value?: U256$1 | undefined;
    /** Gas price. */
    readonly gasPrice?: U128$1 | undefined;
    /** Gas amount. */
    readonly gasLimit?: U128$1 | undefined;
    /** Max base fee per gas the sender is willing to pay. */
    readonly maxFeePerGas?: U128$1 | undefined;
    /** Miner's tip. */
    readonly maxPriorityFeePerGas?: U128$1 | undefined;
    /** Data. */
    readonly input?: Uint8Array | undefined;
    /** The signature's r,s,v,yParity values. */
    readonly signature?: Signature$1 | undefined;
    /** Chain ID. */
    readonly chainId?: bigint | undefined;
    /** EIP-2930 access list. */
    readonly accessList?: readonly AccessListItem$1[] | undefined;
    /** EIP-2718 transaction type. */
    readonly transactionType?: bigint | undefined;
    /** EIP-4844 max gas fee per blob. */
    readonly maxFeePerBlobGas?: U128$1 | undefined;
    /** EIP-4844 blob hashes. */
    readonly blobVersionedHashes?: readonly B256$1[] | undefined;
}
declare const Transaction$1: {
    encode(message: Transaction$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Transaction$1;
    fromJSON(object: any): Transaction$1;
    toJSON(message: Transaction$1): unknown;
    create(base?: DeepPartial$1<Transaction$1>): Transaction$1;
    fromPartial(object: DeepPartial$1<Transaction$1>): Transaction$1;
};
interface Validator$1 {
    readonly filterIds?: readonly number[] | undefined;
    readonly validatorIndex?: number | undefined;
    readonly balance?: bigint | undefined;
    readonly status?: ValidatorStatus$1 | undefined;
    readonly pubkey?: B384$1 | undefined;
    readonly withdrawalCredentials?: B256$1 | undefined;
    readonly effectiveBalance?: bigint | undefined;
    readonly slashed?: boolean | undefined;
    readonly activationEligibilityEpoch?: bigint | undefined;
    readonly activationEpoch?: bigint | undefined;
    readonly exitEpoch?: bigint | undefined;
    readonly withdrawableEpoch?: bigint | undefined;
}
declare const Validator$1: {
    encode(message: Validator$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator$1;
    fromJSON(object: any): Validator$1;
    toJSON(message: Validator$1): unknown;
    create(base?: DeepPartial$1<Validator$1>): Validator$1;
    fromPartial(object: DeepPartial$1<Validator$1>): Validator$1;
};
interface Blob$1 {
    readonly filterIds?: readonly number[] | undefined;
    /** Blob index in the block. */
    readonly blobIndex?: number | undefined;
    /** Blob data. */
    readonly blob?: Uint8Array | undefined;
    /** KZG commitment. */
    readonly kzgCommitment?: B384$1 | undefined;
    /** KZG proof. */
    readonly kzgProof?: B384$1 | undefined;
    /** KZG commitment inclusion proof. */
    readonly kzgCommitmentInclusionProof?: readonly B256$1[] | undefined;
    /** Blob hash. */
    readonly blobHash?: B256$1 | undefined;
    /** Index of the transaction that posted the blob. */
    readonly transactionIndex?: number | undefined;
    /** Hash of the transaction that posted the blob. */
    readonly transactionHash?: B256$1 | undefined;
}
declare const Blob$1: {
    encode(message: Blob$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Blob$1;
    fromJSON(object: any): Blob$1;
    toJSON(message: Blob$1): unknown;
    create(base?: DeepPartial$1<Blob$1>): Blob$1;
    fromPartial(object: DeepPartial$1<Blob$1>): Blob$1;
};
interface ExecutionPayload$1 {
    /** Parent block hash. */
    readonly parentHash?: B256$1 | undefined;
    /** Address of the fee recipient. */
    readonly feeRecipient?: Address$1 | undefined;
    /** State root. */
    readonly stateRoot?: B256$1 | undefined;
    /** Receipts root. */
    readonly receiptsRoot?: B256$1 | undefined;
    /** Logs bloom. */
    readonly logsBloom?: Uint8Array | undefined;
    /** Previous RANDAO. */
    readonly prevRandao?: B256$1 | undefined;
    /** Block number. */
    readonly blockNumber?: bigint | undefined;
    /** Block timestamp. */
    readonly timestamp?: Date | undefined;
}
declare const ExecutionPayload$1: {
    encode(message: ExecutionPayload$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExecutionPayload$1;
    fromJSON(object: any): ExecutionPayload$1;
    toJSON(message: ExecutionPayload$1): unknown;
    create(base?: DeepPartial$1<ExecutionPayload$1>): ExecutionPayload$1;
    fromPartial(object: DeepPartial$1<ExecutionPayload$1>): ExecutionPayload$1;
};
interface Signature$1 {
    /** The signature's r value. */
    readonly r?: U256$1 | undefined;
    /** The signature's s value. */
    readonly s?: U256$1 | undefined;
}
declare const Signature$1: {
    encode(message: Signature$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Signature$1;
    fromJSON(object: any): Signature$1;
    toJSON(message: Signature$1): unknown;
    create(base?: DeepPartial$1<Signature$1>): Signature$1;
    fromPartial(object: DeepPartial$1<Signature$1>): Signature$1;
};
interface AccessListItem$1 {
    /** Account address to be loaded at the start of the transaction. */
    readonly address?: Address$1 | undefined;
    /** Storage keys to be loaded at the start of the transaction. */
    readonly storageKeys?: readonly B256$1[] | undefined;
}
declare const AccessListItem$1: {
    encode(message: AccessListItem$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessListItem$1;
    fromJSON(object: any): AccessListItem$1;
    toJSON(message: AccessListItem$1): unknown;
    create(base?: DeepPartial$1<AccessListItem$1>): AccessListItem$1;
    fromPartial(object: DeepPartial$1<AccessListItem$1>): AccessListItem$1;
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

declare namespace data {
  export { AccessListItem$1 as AccessListItem, Blob$1 as Blob, Block$1 as Block, BlockHeader$1 as BlockHeader, type DeepPartial$1 as DeepPartial, ExecutionPayload$1 as ExecutionPayload, Signature$1 as Signature, Transaction$1 as Transaction, Validator$1 as Validator, protobufPackage$1 as protobufPackage };
}

declare const protobufPackage = "beaconchain.v2";
/** Beacon Chain DNA definitions (filter). */
declare enum HeaderFilter$1 {
    UNSPECIFIED = 0,
    ALWAYS = 1,
    ON_DATA = 2,
    ON_DATA_OR_ON_NEW_BLOCK = 3,
    UNRECOGNIZED = -1
}
declare function headerFilterFromJSON(object: any): HeaderFilter$1;
declare function headerFilterToJSON(object: HeaderFilter$1): string;
interface Filter$1 {
    /** Include header. */
    readonly header?: HeaderFilter$1 | undefined;
    /** Filter transactions. */
    readonly transactions?: readonly TransactionFilter$1[] | undefined;
    /** Filter validators. */
    readonly validators?: readonly ValidatorFilter$1[] | undefined;
    /** Filter blobs. */
    readonly blobs?: readonly BlobFilter$1[] | undefined;
}
declare const Filter$1: {
    encode(message: Filter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Filter$1;
    fromJSON(object: any): Filter$1;
    toJSON(message: Filter$1): unknown;
    create(base?: DeepPartial<Filter$1>): Filter$1;
    fromPartial(object: DeepPartial<Filter$1>): Filter$1;
};
interface TransactionFilter$1 {
    readonly id?: number | undefined;
    /** Filter based on the transaction's sender address. */
    readonly from?: Address$1 | undefined;
    /** Filter based on the transaction's recipient address. */
    readonly to?: Address$1 | undefined;
    /** Only return `creat` transactions. Defaults to `false`. */
    readonly create?: boolean | undefined;
    /** Include the transaction's blob. Defaults to `false`. */
    readonly includeBlob?: boolean | undefined;
}
declare const TransactionFilter$1: {
    encode(message: TransactionFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionFilter$1;
    fromJSON(object: any): TransactionFilter$1;
    toJSON(message: TransactionFilter$1): unknown;
    create(base?: DeepPartial<TransactionFilter$1>): TransactionFilter$1;
    fromPartial(object: DeepPartial<TransactionFilter$1>): TransactionFilter$1;
};
interface ValidatorFilter$1 {
    readonly id?: number | undefined;
    /** Filter the validator based on its index. */
    readonly validatorIndex?: number | undefined;
    /** Filter based on the validator's status. */
    readonly status?: ValidatorStatus$1 | undefined;
}
declare const ValidatorFilter$1: {
    encode(message: ValidatorFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorFilter$1;
    fromJSON(object: any): ValidatorFilter$1;
    toJSON(message: ValidatorFilter$1): unknown;
    create(base?: DeepPartial<ValidatorFilter$1>): ValidatorFilter$1;
    fromPartial(object: DeepPartial<ValidatorFilter$1>): ValidatorFilter$1;
};
interface BlobFilter$1 {
    readonly id?: number | undefined;
    /** Include the transaction that posted the blob. */
    readonly includeTransaction?: boolean | undefined;
}
declare const BlobFilter$1: {
    encode(message: BlobFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlobFilter$1;
    fromJSON(object: any): BlobFilter$1;
    toJSON(message: BlobFilter$1): unknown;
    create(base?: DeepPartial<BlobFilter$1>): BlobFilter$1;
    fromPartial(object: DeepPartial<BlobFilter$1>): BlobFilter$1;
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

type filter_DeepPartial<T> = DeepPartial<T>;
declare const filter_headerFilterFromJSON: typeof headerFilterFromJSON;
declare const filter_headerFilterToJSON: typeof headerFilterToJSON;
declare const filter_protobufPackage: typeof protobufPackage;
declare namespace filter {
  export { BlobFilter$1 as BlobFilter, type filter_DeepPartial as DeepPartial, Filter$1 as Filter, HeaderFilter$1 as HeaderFilter, TransactionFilter$1 as TransactionFilter, ValidatorFilter$1 as ValidatorFilter, filter_headerFilterFromJSON as headerFilterFromJSON, filter_headerFilterToJSON as headerFilterToJSON, filter_protobufPackage as protobufPackage };
}

declare const index_common: typeof common;
declare const index_data: typeof data;
declare const index_filter: typeof filter;
declare namespace index {
  export { index_common as common, index_data as data, index_filter as filter };
}

/** An Ethereum address. */
declare const Address: Codec<`0x${string}`, Address$1>;
type Address = CodecType<typeof Address>;
/** Data with length 256 bits. */
declare const B256: Codec<`0x${string}`, B256$1>;
type B256 = CodecType<typeof B256>;
/** Data with length 256 bits. */
declare const U256: Codec<bigint, U256$1>;
type U256 = CodecType<typeof U256>;
/** Data with length 128 bits. */
declare const U128: Codec<bigint, U128$1>;
type U128 = CodecType<typeof U128>;
declare const B384: Codec<`0x${string}`, B384$1>;
type B384 = CodecType<typeof B384>;
declare const ValidatorStatus: Codec<"pending_initialized" | "pending_queued" | "active_ongoing" | "active_exiting" | "active_slashed" | "exited_unslashed" | "exited_slashed" | "withdrawal_possible" | "withdrawal_done" | "unknown", ValidatorStatus$1>;
type ValidatorStatus = CodecType<typeof ValidatorStatus>;

/** Header options.
 *
 * - `always`: receive all block headers.
 * - `on_data`: receive headers only if any other filter matches.
 * - `on_data_or_on_new_block`: receive headers only if any other filter matches and for "live" blocks.
 */
declare const HeaderFilter: Codec<"always" | "on_data" | "on_data_or_on_new_block" | "unknown", HeaderFilter$1>;
type HeaderFilter = CodecType<typeof HeaderFilter>;
/** Filter transactions.
 *
 * @prop from Filter transactions by the sender address.
 * @prop to Filter transactions by the target address.
 * @prop includeBlob Include any blob posted by the transaction..
 */
declare const TransactionFilter: MessageCodec<{
    id: Codec<number | undefined, number | undefined>;
    from: Codec<`0x${string}` | undefined, Address$1 | undefined>;
    to: Codec<`0x${string}` | undefined, Address$1 | undefined>;
    create: Codec<boolean | undefined, boolean | undefined>;
    includeBlob: Codec<boolean | undefined, boolean | undefined>;
}>;
type TransactionFilter = CodecType<typeof TransactionFilter>;
/** Filter validators.
 *
 * @prop validatorIndex Filter validators by their index.
 * @prop status Filter validators by their status.
 */
declare const ValidatorFilter: MessageCodec<{
    id: Codec<number | undefined, number | undefined>;
    validatorIndex: Codec<number | undefined, number | undefined>;
    status: Codec<"unknown" | "pending_initialized" | "pending_queued" | "active_ongoing" | "active_exiting" | "active_slashed" | "exited_unslashed" | "exited_slashed" | "withdrawal_possible" | "withdrawal_done" | undefined, ValidatorStatus$1 | undefined>;
}>;
type ValidatorFilter = CodecType<typeof ValidatorFilter>;
/** Filter blobs.
 *
 * @prop includeTransaction Include the transaction that posted the blob.
 */
declare const BlobFilter: MessageCodec<{
    id: Codec<number | undefined, number | undefined>;
    includeTransaction: Codec<boolean | undefined, boolean | undefined>;
}>;
type BlobFilter = CodecType<typeof BlobFilter>;
/** Filter block data.
 *
 * @prop header Change how block headers are returned.
 * @prop validators Filter validators.
 */
declare const Filter: MessageCodec<{
    header: Codec<"always" | "on_data" | "on_data_or_on_new_block" | "unknown" | undefined, HeaderFilter$1 | undefined>;
    transactions: Codec<readonly {
        id?: number | undefined;
        from?: `0x${string}` | undefined;
        to?: `0x${string}` | undefined;
        create?: boolean | undefined;
        includeBlob?: boolean | undefined;
    }[] | undefined, readonly {
        id?: number | undefined;
        from?: Address$1 | undefined;
        to?: Address$1 | undefined;
        create?: boolean | undefined;
        includeBlob?: boolean | undefined;
    }[] | undefined>;
    validators: Codec<readonly {
        id?: number | undefined;
        validatorIndex?: number | undefined;
        status?: "unknown" | "pending_initialized" | "pending_queued" | "active_ongoing" | "active_exiting" | "active_slashed" | "exited_unslashed" | "exited_slashed" | "withdrawal_possible" | "withdrawal_done" | undefined;
    }[] | undefined, readonly {
        id?: number | undefined;
        validatorIndex?: number | undefined;
        status?: ValidatorStatus$1 | undefined;
    }[] | undefined>;
    blobs: Codec<readonly {
        id?: number | undefined;
        includeTransaction?: boolean | undefined;
    }[] | undefined, readonly {
        id?: number | undefined;
        includeTransaction?: boolean | undefined;
    }[] | undefined>;
}>;
type Filter = CodecType<typeof Filter>;
declare const FilterFromBytes: Codec<Filter, Uint8Array>;
declare function mergeFilter(a: Filter, b: Filter): Filter;

declare const ExecutionPayload: MessageCodec<{
    parentHash: Codec<`0x${string}`, B256$1 | undefined>;
    feeRecipient: Codec<`0x${string}`, Address$1 | undefined>;
    stateRoot: Codec<`0x${string}`, B256$1 | undefined>;
    receiptsRoot: Codec<`0x${string}`, B256$1 | undefined>;
    logsBloom: Codec<`0x${string}`, Uint8Array | undefined>;
    prevRandao: Codec<`0x${string}`, B256$1 | undefined>;
    blockNumber: Codec<bigint, bigint | undefined>;
    timestamp: Codec<Date, Date | undefined>;
}>;
type ExecutionPayload = CodecType<typeof ExecutionPayload>;
declare const BlockHeader: MessageCodec<{
    slot: Codec<bigint, bigint | undefined>;
    proposerIndex: Codec<number, number | undefined>;
    parentRoot: Codec<`0x${string}`, B256$1 | undefined>;
    stateRoot: Codec<`0x${string}`, B256$1 | undefined>;
    randaoReveal: Codec<`0x${string}`, Uint8Array | undefined>;
    depositCount: Codec<bigint, bigint | undefined>;
    depositRoot: Codec<`0x${string}`, B256$1 | undefined>;
    blockHash: Codec<`0x${string}` | undefined, B256$1 | undefined>;
    graffiti: Codec<`0x${string}`, B256$1 | undefined>;
    executionPayload: Codec<{
        parentHash: `0x${string}`;
        feeRecipient: `0x${string}`;
        stateRoot: `0x${string}`;
        receiptsRoot: `0x${string}`;
        logsBloom: `0x${string}`;
        prevRandao: `0x${string}`;
        blockNumber: bigint;
        timestamp: Date;
    } | undefined, {
        parentHash?: B256$1 | undefined;
        feeRecipient?: Address$1 | undefined;
        stateRoot?: B256$1 | undefined;
        receiptsRoot?: B256$1 | undefined;
        logsBloom?: Uint8Array | undefined;
        prevRandao?: B256$1 | undefined;
        blockNumber?: bigint | undefined;
        timestamp?: Date | undefined;
    } | undefined>;
    blobKzgCommitments: Codec<readonly `0x${string}`[], readonly B384$1[] | undefined>;
}>;
type BlockHeader = CodecType<typeof BlockHeader>;
declare const Validator: MessageCodec<{
    filterIds: Codec<readonly number[], readonly number[] | undefined>;
    validatorIndex: Codec<number, number | undefined>;
    balance: Codec<bigint, bigint | undefined>;
    status: Codec<"unknown", ValidatorStatus$1 | undefined> | Codec<"pending_initialized", ValidatorStatus$1 | undefined> | Codec<"pending_queued", ValidatorStatus$1 | undefined> | Codec<"active_ongoing", ValidatorStatus$1 | undefined> | Codec<"active_exiting", ValidatorStatus$1 | undefined> | Codec<"active_slashed", ValidatorStatus$1 | undefined> | Codec<"exited_unslashed", ValidatorStatus$1 | undefined> | Codec<"exited_slashed", ValidatorStatus$1 | undefined> | Codec<"withdrawal_possible", ValidatorStatus$1 | undefined> | Codec<"withdrawal_done", ValidatorStatus$1 | undefined>;
    pubkey: Codec<`0x${string}`, B384$1 | undefined>;
    withdrawalCredentials: Codec<`0x${string}`, B256$1 | undefined>;
    effectiveBalance: Codec<bigint, bigint | undefined>;
    slashed: Codec<false, boolean | undefined> | Codec<true, boolean | undefined>;
    activationEligibilityEpoch: Codec<bigint, bigint | undefined>;
    activationEpoch: Codec<bigint, bigint | undefined>;
    exitEpoch: Codec<bigint, bigint | undefined>;
    withdrawableEpoch: Codec<bigint, bigint | undefined>;
}>;
type Validator = CodecType<typeof Validator>;
declare const Blob: MessageCodec<{
    filterIds: Codec<readonly number[], readonly number[] | undefined>;
    blobIndex: Codec<number, number | undefined>;
    blob: Codec<`0x${string}`, Uint8Array | undefined>;
    kzgCommitment: Codec<`0x${string}`, B384$1 | undefined>;
    kzgProof: Codec<`0x${string}`, B384$1 | undefined>;
    kzgCommitmentInclusionProof: Codec<readonly `0x${string}`[], readonly B256$1[] | undefined>;
    blobHash: Codec<`0x${string}`, B256$1 | undefined>;
    transactionIndex: Codec<number, number | undefined>;
    transactionHash: Codec<`0x${string}`, B256$1 | undefined>;
}>;
type Blob = CodecType<typeof Blob>;
declare const Signature: MessageCodec<{
    r: Codec<bigint | undefined, U256$1 | undefined>;
    s: Codec<bigint | undefined, U256$1 | undefined>;
    v: Codec<bigint | undefined, U256$1 | undefined>;
    YParity: Codec<boolean | undefined, boolean | undefined>;
}>;
type Signature = CodecType<typeof Signature>;
declare const AccessListItem: MessageCodec<{
    address: Codec<`0x${string}`, Address$1 | undefined>;
    storageKeys: Codec<readonly `0x${string}`[], readonly B256$1[] | undefined>;
}>;
type AccessListItem = CodecType<typeof AccessListItem>;
declare const Transaction: MessageCodec<{
    filterIds: Codec<readonly number[], readonly number[] | undefined>;
    transactionHash: Codec<`0x${string}`, B256$1 | undefined>;
    nonce: Codec<bigint, bigint | undefined>;
    transactionIndex: Codec<number, number | undefined>;
    from: Codec<`0x${string}`, Address$1 | undefined>;
    to: Codec<`0x${string}` | undefined, Address$1 | undefined>;
    value: Codec<bigint, U256$1 | undefined>;
    gasPrice: Codec<bigint | undefined, U128$1 | undefined>;
    gasLimit: Codec<bigint | undefined, U128$1 | undefined>;
    maxFeePerGas: Codec<bigint | undefined, U128$1 | undefined>;
    maxPriorityFeePerGas: Codec<bigint | undefined, U128$1 | undefined>;
    input: Codec<`0x${string}`, Uint8Array | undefined>;
    signature: Codec<{
        r?: bigint | undefined;
        s?: bigint | undefined;
        v?: bigint | undefined;
        YParity?: boolean | undefined;
    } | undefined, {
        r?: U256$1 | undefined;
        s?: U256$1 | undefined;
        v?: U256$1 | undefined;
        YParity?: boolean | undefined;
    } | undefined>;
    chainId: Codec<bigint | undefined, bigint | undefined>;
    accessList: Codec<readonly {
        address: `0x${string}`;
        storageKeys: readonly `0x${string}`[];
    }[], readonly {
        address?: Address$1 | undefined;
        storageKeys?: readonly B256$1[] | undefined;
    }[] | undefined>;
    transactionType: Codec<bigint, bigint | undefined>;
    maxFeePerBlobGas: Codec<bigint | undefined, U128$1 | undefined>;
    blobVersionedHashes: Codec<readonly `0x${string}`[], readonly B256$1[] | undefined>;
}>;
type Transaction = CodecType<typeof Transaction>;
declare const Block: MessageCodec<{
    header: Codec<{
        slot: bigint;
        proposerIndex: number;
        parentRoot: `0x${string}`;
        stateRoot: `0x${string}`;
        randaoReveal: `0x${string}`;
        depositCount: bigint;
        depositRoot: `0x${string}`;
        blockHash?: `0x${string}` | undefined;
        graffiti: `0x${string}`;
        executionPayload?: {
            parentHash: `0x${string}`;
            feeRecipient: `0x${string}`;
            stateRoot: `0x${string}`;
            receiptsRoot: `0x${string}`;
            logsBloom: `0x${string}`;
            prevRandao: `0x${string}`;
            blockNumber: bigint;
            timestamp: Date;
        } | undefined;
        blobKzgCommitments: readonly `0x${string}`[];
    }, {
        slot?: bigint | undefined;
        proposerIndex?: number | undefined;
        parentRoot?: B256$1 | undefined;
        stateRoot?: B256$1 | undefined;
        randaoReveal?: Uint8Array | undefined;
        depositCount?: bigint | undefined;
        depositRoot?: B256$1 | undefined;
        blockHash?: B256$1 | undefined;
        graffiti?: B256$1 | undefined;
        executionPayload?: {
            parentHash?: B256$1 | undefined;
            feeRecipient?: Address$1 | undefined;
            stateRoot?: B256$1 | undefined;
            receiptsRoot?: B256$1 | undefined;
            logsBloom?: Uint8Array | undefined;
            prevRandao?: B256$1 | undefined;
            blockNumber?: bigint | undefined;
            timestamp?: Date | undefined;
        } | undefined;
        blobKzgCommitments?: readonly B384$1[] | undefined;
    } | undefined>;
    validators: Codec<readonly {
        filterIds: readonly number[];
        validatorIndex: number;
        balance: bigint;
        status: "unknown" | "pending_initialized" | "pending_queued" | "active_ongoing" | "active_exiting" | "active_slashed" | "exited_unslashed" | "exited_slashed" | "withdrawal_possible" | "withdrawal_done";
        pubkey: `0x${string}`;
        withdrawalCredentials: `0x${string}`;
        effectiveBalance: bigint;
        slashed: boolean;
        activationEligibilityEpoch: bigint;
        activationEpoch: bigint;
        exitEpoch: bigint;
        withdrawableEpoch: bigint;
    }[], readonly {
        filterIds?: readonly number[] | undefined;
        validatorIndex?: number | undefined;
        balance?: bigint | undefined;
        status?: ValidatorStatus$1 | undefined;
        pubkey?: B384$1 | undefined;
        withdrawalCredentials?: B256$1 | undefined;
        effectiveBalance?: bigint | undefined;
        slashed?: boolean | undefined;
        activationEligibilityEpoch?: bigint | undefined;
        activationEpoch?: bigint | undefined;
        exitEpoch?: bigint | undefined;
        withdrawableEpoch?: bigint | undefined;
    }[] | undefined>;
    blobs: Codec<readonly {
        filterIds: readonly number[];
        blobIndex: number;
        blob: `0x${string}`;
        kzgCommitment: `0x${string}`;
        kzgProof: `0x${string}`;
        kzgCommitmentInclusionProof: readonly `0x${string}`[];
        blobHash: `0x${string}`;
        transactionIndex: number;
        transactionHash: `0x${string}`;
    }[], readonly {
        filterIds?: readonly number[] | undefined;
        blobIndex?: number | undefined;
        blob?: Uint8Array | undefined;
        kzgCommitment?: B384$1 | undefined;
        kzgProof?: B384$1 | undefined;
        kzgCommitmentInclusionProof?: readonly B256$1[] | undefined;
        blobHash?: B256$1 | undefined;
        transactionIndex?: number | undefined;
        transactionHash?: B256$1 | undefined;
    }[] | undefined>;
    transactions: Codec<readonly {
        filterIds: readonly number[];
        transactionHash: `0x${string}`;
        nonce: bigint;
        transactionIndex: number;
        from: `0x${string}`;
        to?: `0x${string}` | undefined;
        value: bigint;
        gasPrice?: bigint | undefined;
        gasLimit?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        input: `0x${string}`;
        signature?: {
            r?: bigint | undefined;
            s?: bigint | undefined;
            v?: bigint | undefined;
            YParity?: boolean | undefined;
        } | undefined;
        chainId?: bigint | undefined;
        accessList: readonly {
            address: `0x${string}`;
            storageKeys: readonly `0x${string}`[];
        }[];
        transactionType: bigint;
        maxFeePerBlobGas?: bigint | undefined;
        blobVersionedHashes: readonly `0x${string}`[];
    }[], readonly {
        filterIds?: readonly number[] | undefined;
        transactionHash?: B256$1 | undefined;
        nonce?: bigint | undefined;
        transactionIndex?: number | undefined;
        from?: Address$1 | undefined;
        to?: Address$1 | undefined;
        value?: U256$1 | undefined;
        gasPrice?: U128$1 | undefined;
        gasLimit?: U128$1 | undefined;
        maxFeePerGas?: U128$1 | undefined;
        maxPriorityFeePerGas?: U128$1 | undefined;
        input?: Uint8Array | undefined;
        signature?: {
            r?: U256$1 | undefined;
            s?: U256$1 | undefined;
            v?: U256$1 | undefined;
            YParity?: boolean | undefined;
        } | undefined;
        chainId?: bigint | undefined;
        accessList?: readonly {
            address?: Address$1 | undefined;
            storageKeys?: readonly B256$1[] | undefined;
        }[] | undefined;
        transactionType?: bigint | undefined;
        maxFeePerBlobGas?: U128$1 | undefined;
        blobVersionedHashes?: readonly B256$1[] | undefined;
    }[] | undefined>;
}>;
type Block = CodecType<typeof Block>;
declare const BlockFromBytes: Codec<Block, Uint8Array>;

declare const BeaconChainStream: StreamConfig<{
    header?: "always" | "on_data" | "on_data_or_on_new_block" | "unknown" | undefined;
    transactions?: readonly {
        id?: number | undefined;
        from?: `0x${string}` | undefined;
        to?: `0x${string}` | undefined;
        create?: boolean | undefined;
        includeBlob?: boolean | undefined;
    }[] | undefined;
    validators?: readonly {
        id?: number | undefined;
        validatorIndex?: number | undefined;
        status?: "unknown" | "pending_initialized" | "pending_queued" | "active_ongoing" | "active_exiting" | "active_slashed" | "exited_unslashed" | "exited_slashed" | "withdrawal_possible" | "withdrawal_done" | undefined;
    }[] | undefined;
    blobs?: readonly {
        id?: number | undefined;
        includeTransaction?: boolean | undefined;
    }[] | undefined;
}, {
    header: {
        slot: bigint;
        proposerIndex: number;
        parentRoot: `0x${string}`;
        stateRoot: `0x${string}`;
        randaoReveal: `0x${string}`;
        depositCount: bigint;
        depositRoot: `0x${string}`;
        blockHash?: `0x${string}` | undefined;
        graffiti: `0x${string}`;
        executionPayload?: {
            parentHash: `0x${string}`;
            feeRecipient: `0x${string}`;
            stateRoot: `0x${string}`;
            receiptsRoot: `0x${string}`;
            logsBloom: `0x${string}`;
            prevRandao: `0x${string}`;
            blockNumber: bigint;
            timestamp: Date;
        } | undefined;
        blobKzgCommitments: readonly `0x${string}`[];
    };
    validators: readonly {
        filterIds: readonly number[];
        validatorIndex: number;
        balance: bigint;
        status: "unknown" | "pending_initialized" | "pending_queued" | "active_ongoing" | "active_exiting" | "active_slashed" | "exited_unslashed" | "exited_slashed" | "withdrawal_possible" | "withdrawal_done";
        pubkey: `0x${string}`;
        withdrawalCredentials: `0x${string}`;
        effectiveBalance: bigint;
        slashed: boolean;
        activationEligibilityEpoch: bigint;
        activationEpoch: bigint;
        exitEpoch: bigint;
        withdrawableEpoch: bigint;
    }[];
    blobs: readonly {
        filterIds: readonly number[];
        blobIndex: number;
        blob: `0x${string}`;
        kzgCommitment: `0x${string}`;
        kzgProof: `0x${string}`;
        kzgCommitmentInclusionProof: readonly `0x${string}`[];
        blobHash: `0x${string}`;
        transactionIndex: number;
        transactionHash: `0x${string}`;
    }[];
    transactions: readonly {
        filterIds: readonly number[];
        transactionHash: `0x${string}`;
        nonce: bigint;
        transactionIndex: number;
        from: `0x${string}`;
        to?: `0x${string}` | undefined;
        value: bigint;
        gasPrice?: bigint | undefined;
        gasLimit?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        input: `0x${string}`;
        signature?: {
            r?: bigint | undefined;
            s?: bigint | undefined;
            v?: bigint | undefined;
            YParity?: boolean | undefined;
        } | undefined;
        chainId?: bigint | undefined;
        accessList: readonly {
            address: `0x${string}`;
            storageKeys: readonly `0x${string}`[];
        }[];
        transactionType: bigint;
        maxFeePerBlobGas?: bigint | undefined;
        blobVersionedHashes: readonly `0x${string}`[];
    }[];
}>;

export { AccessListItem, Address, B256, B384, BeaconChainStream, Blob, BlobFilter, Block, BlockFromBytes, BlockHeader, ExecutionPayload, Filter, FilterFromBytes, HeaderFilter, Signature, Transaction, TransactionFilter, U128, U256, Validator, ValidatorFilter, ValidatorStatus, mergeFilter, index as proto };
