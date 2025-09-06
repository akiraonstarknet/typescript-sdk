import { StreamConfig } from '@apibara/protocol';
import _m0 from 'protobufjs/minimal.js';
import { Codec, CodecType, MessageCodec } from '@apibara/protocol/codec';

declare const protobufPackage$2 = "evm.v2";
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
/** A bloom filter of 256 bytes. */
interface Bloom$1 {
    readonly value?: Uint8Array | undefined;
}
declare const Bloom$1: {
    encode(message: Bloom$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bloom$1;
    fromJSON(object: any): Bloom$1;
    toJSON(message: Bloom$1): unknown;
    create(base?: DeepPartial$2<Bloom$1>): Bloom$1;
    fromPartial(object: DeepPartial$2<Bloom$1>): Bloom$1;
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

declare namespace common {
  export { Address$1 as Address, B256$1 as B256, Bloom$1 as Bloom, type DeepPartial$2 as DeepPartial, U128$1 as U128, U256$1 as U256, protobufPackage$2 as protobufPackage };
}

declare const protobufPackage$1 = "evm.v2";
/** EVM DNA definitions (data). */
declare enum TransactionStatus$1 {
    UNSPECIFIED = 0,
    SUCCEEDED = 1,
    REVERTED = 2,
    UNRECOGNIZED = -1
}
declare function transactionStatusFromJSON(object: any): TransactionStatus$1;
declare function transactionStatusToJSON(object: TransactionStatus$1): string;
declare enum CallType$1 {
    UNSPECIFIED = 0,
    CALL = 1,
    CALL_CODE = 2,
    DELEGATE_CALL = 3,
    STATIC_CALL = 4,
    AUTH_CALL = 5,
    UNRECOGNIZED = -1
}
declare function callTypeFromJSON(object: any): CallType$1;
declare function callTypeToJSON(object: CallType$1): string;
declare enum CreationMethod$1 {
    UNSPECIFIED = 0,
    CREATE = 1,
    CREATE2 = 2,
    EOF_CREATE = 3,
    UNRECOGNIZED = -1
}
declare function creationMethodFromJSON(object: any): CreationMethod$1;
declare function creationMethodToJSON(object: CreationMethod$1): string;
declare enum RewardType$1 {
    UNSPECIFIED = 0,
    BLOCK = 1,
    UNCLE = 2,
    UNRECOGNIZED = -1
}
declare function rewardTypeFromJSON(object: any): RewardType$1;
declare function rewardTypeToJSON(object: RewardType$1): string;
/** Requested data, grouped by block. */
interface Block$1 {
    /** The header. */
    readonly header?: BlockHeader$1 | undefined;
    /** List of withdrawals. */
    readonly withdrawals?: readonly Withdrawal$1[] | undefined;
    /** List of transactions. */
    readonly transactions?: readonly Transaction$1[] | undefined;
    /** List of receipts. */
    readonly receipts?: readonly TransactionReceipt$1[] | undefined;
    /** List of logs. */
    readonly logs?: readonly Log$1[] | undefined;
    /** List of transaction traces. */
    readonly traces?: readonly TransactionTrace$1[] | undefined;
}
declare const Block$1: {
    encode(message: Block$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Block$1;
    fromJSON(object: any): Block$1;
    toJSON(message: Block$1): unknown;
    create(base?: DeepPartial$1<Block$1>): Block$1;
    fromPartial(object: DeepPartial$1<Block$1>): Block$1;
};
/** Block header. */
interface BlockHeader$1 {
    /** Block number. */
    readonly blockNumber?: bigint | undefined;
    /** Hash of the block. */
    readonly blockHash?: B256$1 | undefined;
    /** Hash of the parent block. */
    readonly parentBlockHash?: B256$1 | undefined;
    /** Hash of the uncles. */
    readonly unclesHash?: B256$1 | undefined;
    /** Author of the block. */
    readonly miner?: Address$1 | undefined;
    /** State root hash. */
    readonly stateRoot?: B256$1 | undefined;
    /** Transactions root hash. */
    readonly transactionsRoot?: B256$1 | undefined;
    /** Receipts root hash. */
    readonly receiptsRoot?: B256$1 | undefined;
    /** Logs bloom. */
    readonly logsBloom?: Bloom$1 | undefined;
    /** Difficulty. */
    readonly difficulty?: U256$1 | undefined;
    /** Gas limit. */
    readonly gasLimit?: U128$1 | undefined;
    /** Gas used. */
    readonly gasUsed?: U128$1 | undefined;
    /** Timestamp. */
    readonly timestamp?: Date | undefined;
    /** Extra data. */
    readonly extraData?: Uint8Array | undefined;
    /** Mix hash. */
    readonly mixHash?: B256$1 | undefined;
    /** Nonce. */
    readonly nonce?: bigint | undefined;
    /** Base fee per unit of gas. */
    readonly baseFeePerGas?: U128$1 | undefined;
    /** Withdrawals root hash. */
    readonly withdrawalsRoot?: B256$1 | undefined;
    /** Total difficulty. */
    readonly totalDifficulty?: U256$1 | undefined;
    /** Blob gas used. */
    readonly blobGasUsed?: U128$1 | undefined;
    /** Excess blob gas. */
    readonly excessBlobGas?: U128$1 | undefined;
    /** Parent beacon block root. */
    readonly parentBeaconBlockRoot?: B256$1 | undefined;
    /**
     * The Keccak 256-bit hash of the an RLP encoded list with each EIP-7685
     * request in the block body.
     */
    readonly requestsHash?: B256$1 | undefined;
}
declare const BlockHeader$1: {
    encode(message: BlockHeader$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockHeader$1;
    fromJSON(object: any): BlockHeader$1;
    toJSON(message: BlockHeader$1): unknown;
    create(base?: DeepPartial$1<BlockHeader$1>): BlockHeader$1;
    fromPartial(object: DeepPartial$1<BlockHeader$1>): BlockHeader$1;
};
/** A validator's withdrawal from the consensus layer. */
interface Withdrawal$1 {
    readonly filterIds?: readonly number[] | undefined;
    /** Withdrawal index in the block. */
    readonly withdrawalIndex?: number | undefined;
    /** Increasing index of the withdrawal. */
    readonly index?: bigint | undefined;
    /** Index of the validator. */
    readonly validatorIndex?: number | undefined;
    /** Target address of the withdrawal. */
    readonly address?: Address$1 | undefined;
    /** Value of the withdrawal, in gwei. */
    readonly amount?: bigint | undefined;
}
declare const Withdrawal$1: {
    encode(message: Withdrawal$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Withdrawal$1;
    fromJSON(object: any): Withdrawal$1;
    toJSON(message: Withdrawal$1): unknown;
    create(base?: DeepPartial$1<Withdrawal$1>): Withdrawal$1;
    fromPartial(object: DeepPartial$1<Withdrawal$1>): Withdrawal$1;
};
interface Transaction$1 {
    readonly filterIds?: readonly number[] | undefined;
    /** Transaction index in the block. */
    readonly transactionIndex?: number | undefined;
    /** Transaction hash. */
    readonly transactionHash?: B256$1 | undefined;
    /** Nonce. */
    readonly nonce?: bigint | undefined;
    /** Sender. */
    readonly from?: Address$1 | undefined;
    /** Recipient. */
    readonly to?: Address$1 | undefined;
    /** Amount of wei transferred. */
    readonly value?: U256$1 | undefined;
    /** Gas price. */
    readonly gasPrice?: U128$1 | undefined;
    /** Gas amount. */
    readonly gas?: U128$1 | undefined;
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
    /** The transaction status. */
    readonly transactionStatus?: TransactionStatus$1 | undefined;
}
declare const Transaction$1: {
    encode(message: Transaction$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Transaction$1;
    fromJSON(object: any): Transaction$1;
    toJSON(message: Transaction$1): unknown;
    create(base?: DeepPartial$1<Transaction$1>): Transaction$1;
    fromPartial(object: DeepPartial$1<Transaction$1>): Transaction$1;
};
interface TransactionReceipt$1 {
    readonly filterIds?: readonly number[] | undefined;
    /** Index of the transaction in the block. */
    readonly transactionIndex?: number | undefined;
    /** Transaction hash. */
    readonly transactionHash?: B256$1 | undefined;
    /** Cumulative gas used in the block after this transaction has been executed. */
    readonly cumulativeGasUsed?: U128$1 | undefined;
    /** Gas used by this transaction. */
    readonly gasUsed?: U128$1 | undefined;
    /** The price paid by the transaction. */
    readonly effectiveGasPrice?: U128$1 | undefined;
    /** Sender. */
    readonly from?: Address$1 | undefined;
    /** Recipient, if any. */
    readonly to?: Address$1 | undefined;
    /** Contract address created, if any. */
    readonly contractAddress?: Address$1 | undefined;
    /** Logs bloom. */
    readonly logsBloom?: Bloom$1 | undefined;
    /** EIP-2718 transaction type. */
    readonly transactionType?: bigint | undefined;
    /** EIP-4844 blob gas used. */
    readonly blobGasUsed?: U128$1 | undefined;
    /** EIP-4844 blob gas paid by the transaction. */
    readonly blobGasPrice?: U128$1 | undefined;
    /** The transaction status. */
    readonly transactionStatus?: TransactionStatus$1 | undefined;
}
declare const TransactionReceipt$1: {
    encode(message: TransactionReceipt$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionReceipt$1;
    fromJSON(object: any): TransactionReceipt$1;
    toJSON(message: TransactionReceipt$1): unknown;
    create(base?: DeepPartial$1<TransactionReceipt$1>): TransactionReceipt$1;
    fromPartial(object: DeepPartial$1<TransactionReceipt$1>): TransactionReceipt$1;
};
interface Log$1 {
    readonly filterIds?: readonly number[] | undefined;
    /** Index of the log in the block. */
    readonly logIndex?: number | undefined;
    /** Address of the contract that emitted the log. */
    readonly address?: Address$1 | undefined;
    /** Log topics. */
    readonly topics?: readonly B256$1[] | undefined;
    /** Additional data. */
    readonly data?: Uint8Array | undefined;
    /** Index of the transaction that emitted the log. */
    readonly transactionIndex?: number | undefined;
    /** Hash of the transaction that emitted the log. */
    readonly transactionHash?: B256$1 | undefined;
    /** The transaction status. */
    readonly transactionStatus?: TransactionStatus$1 | undefined;
    /** Index of the log in the transaction. */
    readonly logIndexInTransaction?: number | undefined;
}
declare const Log$1: {
    encode(message: Log$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Log$1;
    fromJSON(object: any): Log$1;
    toJSON(message: Log$1): unknown;
    create(base?: DeepPartial$1<Log$1>): Log$1;
    fromPartial(object: DeepPartial$1<Log$1>): Log$1;
};
interface Signature$1 {
    /** The signature's r value. */
    readonly r?: U256$1 | undefined;
    /** The signature's s value. */
    readonly s?: U256$1 | undefined;
    /** The signature's v value. */
    readonly v?: U256$1 | undefined;
    /** The signature's parity byte. */
    readonly yParity?: boolean | undefined;
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
interface TransactionTrace$1 {
    readonly filterIds?: readonly number[] | undefined;
    /** Index of the transaction in the block. */
    readonly transactionIndex?: number | undefined;
    /** Transaction hash. */
    readonly transactionHash?: B256$1 | undefined;
    /** Traces. */
    readonly traces?: readonly Trace$1[] | undefined;
}
declare const TransactionTrace$1: {
    encode(message: TransactionTrace$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionTrace$1;
    fromJSON(object: any): TransactionTrace$1;
    toJSON(message: TransactionTrace$1): unknown;
    create(base?: DeepPartial$1<TransactionTrace$1>): TransactionTrace$1;
    fromPartial(object: DeepPartial$1<TransactionTrace$1>): TransactionTrace$1;
};
interface Trace$1 {
    readonly action?: {
        readonly $case: "call";
        readonly call: CallAction$1;
    } | {
        readonly $case: "create";
        readonly create: CreateAction$1;
    } | {
        readonly $case: "selfDestruct";
        readonly selfDestruct: SelfDestructAction$1;
    } | {
        readonly $case: "reward";
        readonly reward: RewardAction$1;
    } | undefined;
    /** Error message if the transaction failed. */
    readonly error?: string | undefined;
    readonly output?: {
        readonly $case: "callOutput";
        readonly callOutput: CallOutput$1;
    } | {
        readonly $case: "createOutput";
        readonly createOutput: CreateOutput$1;
    } | undefined;
    /** Number of sub traces. */
    readonly subtraces?: number | undefined;
    /** The identifier of this trace in the trace tree. */
    readonly traceAddress?: readonly number[] | undefined;
}
declare const Trace$1: {
    encode(message: Trace$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Trace$1;
    fromJSON(object: any): Trace$1;
    toJSON(message: Trace$1): unknown;
    create(base?: DeepPartial$1<Trace$1>): Trace$1;
    fromPartial(object: DeepPartial$1<Trace$1>): Trace$1;
};
interface CallAction$1 {
    /** Address of the sending account. */
    readonly fromAddress?: Address$1 | undefined;
    /** Call type. */
    readonly type?: CallType$1 | undefined;
    /** The gas available to execute the call. */
    readonly gas?: bigint | undefined;
    /** Input data provided by the call. */
    readonly input?: Uint8Array | undefined;
    /** Target of the destination address. */
    readonly toAddress?: Address$1 | undefined;
    /** Value transferred to the destination account. */
    readonly value?: U256$1 | undefined;
}
declare const CallAction$1: {
    encode(message: CallAction$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CallAction$1;
    fromJSON(object: any): CallAction$1;
    toJSON(message: CallAction$1): unknown;
    create(base?: DeepPartial$1<CallAction$1>): CallAction$1;
    fromPartial(object: DeepPartial$1<CallAction$1>): CallAction$1;
};
interface CreateAction$1 {
    /** Address of the sending account. */
    readonly fromAddress?: Address$1 | undefined;
    /** The gas available to execute the call. */
    readonly gas?: bigint | undefined;
    /** Input data provided by the call. */
    readonly init?: Uint8Array | undefined;
    /** Value transferred to the ne account. */
    readonly value?: U256$1 | undefined;
    /** Contract creation method. */
    readonly creationMethod?: CreationMethod$1 | undefined;
}
declare const CreateAction$1: {
    encode(message: CreateAction$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateAction$1;
    fromJSON(object: any): CreateAction$1;
    toJSON(message: CreateAction$1): unknown;
    create(base?: DeepPartial$1<CreateAction$1>): CreateAction$1;
    fromPartial(object: DeepPartial$1<CreateAction$1>): CreateAction$1;
};
interface SelfDestructAction$1 {
    /** The destroyed address. */
    readonly address?: Address$1 | undefined;
    /** Balance of the destroyed account before destruct. */
    readonly balance?: U256$1 | undefined;
    /** The heir address. */
    readonly refundAddress?: Address$1 | undefined;
}
declare const SelfDestructAction$1: {
    encode(message: SelfDestructAction$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SelfDestructAction$1;
    fromJSON(object: any): SelfDestructAction$1;
    toJSON(message: SelfDestructAction$1): unknown;
    create(base?: DeepPartial$1<SelfDestructAction$1>): SelfDestructAction$1;
    fromPartial(object: DeepPartial$1<SelfDestructAction$1>): SelfDestructAction$1;
};
interface RewardAction$1 {
    /** The author's address. */
    readonly author?: Address$1 | undefined;
    /** Reward type. */
    readonly type?: RewardType$1 | undefined;
    /** The reward's value. */
    readonly value?: U256$1 | undefined;
}
declare const RewardAction$1: {
    encode(message: RewardAction$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardAction$1;
    fromJSON(object: any): RewardAction$1;
    toJSON(message: RewardAction$1): unknown;
    create(base?: DeepPartial$1<RewardAction$1>): RewardAction$1;
    fromPartial(object: DeepPartial$1<RewardAction$1>): RewardAction$1;
};
interface CallOutput$1 {
    /** Gas used. */
    readonly gasUsed?: bigint | undefined;
    /** Output data. */
    readonly output?: Uint8Array | undefined;
}
declare const CallOutput$1: {
    encode(message: CallOutput$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CallOutput$1;
    fromJSON(object: any): CallOutput$1;
    toJSON(message: CallOutput$1): unknown;
    create(base?: DeepPartial$1<CallOutput$1>): CallOutput$1;
    fromPartial(object: DeepPartial$1<CallOutput$1>): CallOutput$1;
};
interface CreateOutput$1 {
    /** Contract address. */
    readonly address?: Address$1 | undefined;
    /** Code */
    readonly code?: Uint8Array | undefined;
    /** Gas used. */
    readonly gasUsed?: bigint | undefined;
}
declare const CreateOutput$1: {
    encode(message: CreateOutput$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateOutput$1;
    fromJSON(object: any): CreateOutput$1;
    toJSON(message: CreateOutput$1): unknown;
    create(base?: DeepPartial$1<CreateOutput$1>): CreateOutput$1;
    fromPartial(object: DeepPartial$1<CreateOutput$1>): CreateOutput$1;
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

declare const data_callTypeFromJSON: typeof callTypeFromJSON;
declare const data_callTypeToJSON: typeof callTypeToJSON;
declare const data_creationMethodFromJSON: typeof creationMethodFromJSON;
declare const data_creationMethodToJSON: typeof creationMethodToJSON;
declare const data_rewardTypeFromJSON: typeof rewardTypeFromJSON;
declare const data_rewardTypeToJSON: typeof rewardTypeToJSON;
declare const data_transactionStatusFromJSON: typeof transactionStatusFromJSON;
declare const data_transactionStatusToJSON: typeof transactionStatusToJSON;
declare namespace data {
  export { AccessListItem$1 as AccessListItem, Block$1 as Block, BlockHeader$1 as BlockHeader, CallAction$1 as CallAction, CallOutput$1 as CallOutput, CallType$1 as CallType, CreateAction$1 as CreateAction, CreateOutput$1 as CreateOutput, CreationMethod$1 as CreationMethod, type DeepPartial$1 as DeepPartial, Log$1 as Log, RewardAction$1 as RewardAction, RewardType$1 as RewardType, SelfDestructAction$1 as SelfDestructAction, Signature$1 as Signature, Trace$1 as Trace, Transaction$1 as Transaction, TransactionReceipt$1 as TransactionReceipt, TransactionStatus$1 as TransactionStatus, TransactionTrace$1 as TransactionTrace, Withdrawal$1 as Withdrawal, data_callTypeFromJSON as callTypeFromJSON, data_callTypeToJSON as callTypeToJSON, data_creationMethodFromJSON as creationMethodFromJSON, data_creationMethodToJSON as creationMethodToJSON, protobufPackage$1 as protobufPackage, data_rewardTypeFromJSON as rewardTypeFromJSON, data_rewardTypeToJSON as rewardTypeToJSON, data_transactionStatusFromJSON as transactionStatusFromJSON, data_transactionStatusToJSON as transactionStatusToJSON };
}

declare const protobufPackage = "evm.v2";
/** EVM DNA definitions (filter). */
declare enum HeaderFilter$1 {
    UNSPECIFIED = 0,
    ALWAYS = 1,
    ON_DATA = 2,
    ON_DATA_OR_ON_NEW_BLOCK = 3,
    UNRECOGNIZED = -1
}
declare function headerFilterFromJSON(object: any): HeaderFilter$1;
declare function headerFilterToJSON(object: HeaderFilter$1): string;
declare enum TransactionStatusFilter$1 {
    UNSPECIFIED = 0,
    SUCCEEDED = 1,
    REVERTED = 2,
    ALL = 3,
    UNRECOGNIZED = -1
}
declare function transactionStatusFilterFromJSON(object: any): TransactionStatusFilter$1;
declare function transactionStatusFilterToJSON(object: TransactionStatusFilter$1): string;
interface Filter$1 {
    /** Include header. */
    readonly header?: HeaderFilter$1 | undefined;
    /** Filter withdrawals. */
    readonly withdrawals?: readonly WithdrawalFilter$1[] | undefined;
    /** Filter transactions. */
    readonly transactions?: readonly TransactionFilter$1[] | undefined;
    /** Filter logs. */
    readonly logs?: readonly LogFilter$1[] | undefined;
}
declare const Filter$1: {
    encode(message: Filter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Filter$1;
    fromJSON(object: any): Filter$1;
    toJSON(message: Filter$1): unknown;
    create(base?: DeepPartial<Filter$1>): Filter$1;
    fromPartial(object: DeepPartial<Filter$1>): Filter$1;
};
interface WithdrawalFilter$1 {
    readonly id?: number | undefined;
    /** Filter based on the validator index. */
    readonly validatorIndex?: number | undefined;
    /** Filter based on the withdrawal's target address. */
    readonly address?: Address$1 | undefined;
}
declare const WithdrawalFilter$1: {
    encode(message: WithdrawalFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalFilter$1;
    fromJSON(object: any): WithdrawalFilter$1;
    toJSON(message: WithdrawalFilter$1): unknown;
    create(base?: DeepPartial<WithdrawalFilter$1>): WithdrawalFilter$1;
    fromPartial(object: DeepPartial<WithdrawalFilter$1>): WithdrawalFilter$1;
};
interface TransactionFilter$1 {
    readonly id?: number | undefined;
    /** Filter based on the transaction's sender address. */
    readonly from?: Address$1 | undefined;
    /** Filter based on the transaction's recipient address. */
    readonly to?: Address$1 | undefined;
    /** / Only return `create` transactions. Defaults to `false`. */
    readonly create?: boolean | undefined;
    /**
     * Filter based on the transaction status.
     *
     * Defaults to `Succeeded`.
     */
    readonly transactionStatus?: TransactionStatusFilter$1 | undefined;
    /** Flag to request the transaction's receipt. Defaults to `false`. */
    readonly includeReceipt?: boolean | undefined;
    /** Flag to request the transaction's logs. Defaults to `false`. */
    readonly includeLogs?: boolean | undefined;
    /** Flag to request the transaction's trace. Defaults to `false`. */
    readonly includeTransactionTrace?: boolean | undefined;
}
declare const TransactionFilter$1: {
    encode(message: TransactionFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionFilter$1;
    fromJSON(object: any): TransactionFilter$1;
    toJSON(message: TransactionFilter$1): unknown;
    create(base?: DeepPartial<TransactionFilter$1>): TransactionFilter$1;
    fromPartial(object: DeepPartial<TransactionFilter$1>): TransactionFilter$1;
};
interface LogFilter$1 {
    readonly id?: number | undefined;
    /** Filter based on the log's contract address. */
    readonly address?: Address$1 | undefined;
    /** Filter based on the log's topics. */
    readonly topics?: readonly Topic$1[] | undefined;
    /**
     * Only returns logs with topics of exactly the same length as the filter.
     *
     * Defaults to `false`.
     */
    readonly strict?: boolean | undefined;
    /**
     * Filter based on the transaction status.
     *
     * Defaults to `Succeeded`.
     */
    readonly transactionStatus?: TransactionStatusFilter$1 | undefined;
    /** Flag to request the log's transaction. Defaults to `false`. */
    readonly includeTransaction?: boolean | undefined;
    /** Flag to request the log's receipt. Defaults to `false`. */
    readonly includeReceipt?: boolean | undefined;
    /**
     * Include sibling logs, that is logs emitted by the same transaction.
     *
     * Defaults to false.
     */
    readonly includeSiblings?: boolean | undefined;
    /** Flag to request the log's trace. Defaults to `false`. */
    readonly includeTransactionTrace?: boolean | undefined;
}
declare const LogFilter$1: {
    encode(message: LogFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogFilter$1;
    fromJSON(object: any): LogFilter$1;
    toJSON(message: LogFilter$1): unknown;
    create(base?: DeepPartial<LogFilter$1>): LogFilter$1;
    fromPartial(object: DeepPartial<LogFilter$1>): LogFilter$1;
};
/** Topic filter. */
interface Topic$1 {
    /** Topic value. Leave empty to match any topic. */
    readonly value?: B256$1 | undefined;
}
declare const Topic$1: {
    encode(message: Topic$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Topic$1;
    fromJSON(object: any): Topic$1;
    toJSON(message: Topic$1): unknown;
    create(base?: DeepPartial<Topic$1>): Topic$1;
    fromPartial(object: DeepPartial<Topic$1>): Topic$1;
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
declare const filter_transactionStatusFilterFromJSON: typeof transactionStatusFilterFromJSON;
declare const filter_transactionStatusFilterToJSON: typeof transactionStatusFilterToJSON;
declare namespace filter {
  export { type filter_DeepPartial as DeepPartial, Filter$1 as Filter, HeaderFilter$1 as HeaderFilter, LogFilter$1 as LogFilter, Topic$1 as Topic, TransactionFilter$1 as TransactionFilter, TransactionStatusFilter$1 as TransactionStatusFilter, WithdrawalFilter$1 as WithdrawalFilter, filter_headerFilterFromJSON as headerFilterFromJSON, filter_headerFilterToJSON as headerFilterToJSON, filter_protobufPackage as protobufPackage, filter_transactionStatusFilterFromJSON as transactionStatusFilterFromJSON, filter_transactionStatusFilterToJSON as transactionStatusFilterToJSON };
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

/** Header options.
 *
 * - `always`: receive all block headers.
 * - `on_data`: receive headers only if any other filter matches.
 * - `on_data_or_on_new_block`: receive headers only if any other filter matches and for "live" blocks.
 */
declare const HeaderFilter: Codec<"always" | "on_data" | "on_data_or_on_new_block" | "unknown", HeaderFilter$1>;
type HeaderFilter = CodecType<typeof HeaderFilter>;
declare const WithdrawalFilter: MessageCodec<{
    id: Codec<number | undefined, number | undefined>;
    validatorIndex: Codec<number | undefined, number | undefined>;
    address: Codec<`0x${string}` | undefined, Address$1 | undefined>;
}>;
type WithdrawalFilter = CodecType<typeof WithdrawalFilter>;
declare const TransactionStatusFilter: Codec<"succeeded" | "reverted" | "all" | "unknown", TransactionStatusFilter$1>;
type TransactionStatusFilter = CodecType<typeof TransactionStatusFilter>;
declare const Topic: Codec<B256 | null, {
    value?: B256$1 | undefined;
}>;
type Topic = CodecType<typeof Topic>;
declare const LogFilter: MessageCodec<{
    id: Codec<number | undefined, number | undefined>;
    address: Codec<`0x${string}` | undefined, Address$1 | undefined>;
    topics: Codec<readonly (`0x${string}` | null)[] | undefined, readonly {
        value?: B256$1 | undefined;
    }[] | undefined>;
    strict: Codec<boolean | undefined, boolean | undefined>;
    transactionStatus: Codec<"unknown" | "succeeded" | "reverted" | "all" | undefined, TransactionStatusFilter$1 | undefined>;
    includeTransaction: Codec<boolean | undefined, boolean | undefined>;
    includeReceipt: Codec<boolean | undefined, boolean | undefined>;
    includeTransactionTrace: Codec<boolean | undefined, boolean | undefined>;
}>;
type LogFilter = Readonly<CodecType<typeof LogFilter>>;
declare const TransactionFilter: MessageCodec<{
    id: Codec<number | undefined, number | undefined>;
    from: Codec<`0x${string}` | undefined, Address$1 | undefined>;
    to: Codec<`0x${string}` | undefined, Address$1 | undefined>;
    create: Codec<boolean | undefined, boolean | undefined>;
    transactionStatus: Codec<"unknown" | "succeeded" | "reverted" | "all" | undefined, TransactionStatusFilter$1 | undefined>;
    includeReceipt: Codec<boolean | undefined, boolean | undefined>;
    includeLogs: Codec<boolean | undefined, boolean | undefined>;
    includeTransactionTrace: Codec<boolean | undefined, boolean | undefined>;
}>;
type TransactionFilter = Readonly<CodecType<typeof TransactionFilter>>;
declare const Filter: MessageCodec<{
    header: Codec<"always" | "on_data" | "on_data_or_on_new_block" | "unknown" | undefined, HeaderFilter$1 | undefined>;
    withdrawals: Codec<readonly {
        id?: number | undefined;
        validatorIndex?: number | undefined;
        address?: `0x${string}` | undefined;
    }[] | undefined, readonly {
        id?: number | undefined;
        validatorIndex?: number | undefined;
        address?: Address$1 | undefined;
    }[] | undefined>;
    transactions: Codec<readonly {
        id?: number | undefined;
        from?: `0x${string}` | undefined;
        to?: `0x${string}` | undefined;
        create?: boolean | undefined;
        transactionStatus?: "unknown" | "succeeded" | "reverted" | "all" | undefined;
        includeReceipt?: boolean | undefined;
        includeLogs?: boolean | undefined;
        includeTransactionTrace?: boolean | undefined;
    }[] | undefined, readonly {
        id?: number | undefined;
        from?: Address$1 | undefined;
        to?: Address$1 | undefined;
        create?: boolean | undefined;
        transactionStatus?: TransactionStatusFilter$1 | undefined;
        includeReceipt?: boolean | undefined;
        includeLogs?: boolean | undefined;
        includeTransactionTrace?: boolean | undefined;
    }[] | undefined>;
    logs: Codec<readonly {
        id?: number | undefined;
        address?: `0x${string}` | undefined;
        topics?: readonly (`0x${string}` | null)[] | undefined;
        strict?: boolean | undefined;
        transactionStatus?: "unknown" | "succeeded" | "reverted" | "all" | undefined;
        includeTransaction?: boolean | undefined;
        includeReceipt?: boolean | undefined;
        includeTransactionTrace?: boolean | undefined;
    }[] | undefined, readonly {
        id?: number | undefined;
        address?: Address$1 | undefined;
        topics?: readonly {
            value?: B256$1 | undefined;
        }[] | undefined;
        strict?: boolean | undefined;
        transactionStatus?: TransactionStatusFilter$1 | undefined;
        includeTransaction?: boolean | undefined;
        includeReceipt?: boolean | undefined;
        includeTransactionTrace?: boolean | undefined;
    }[] | undefined>;
}>;
type Filter = Readonly<CodecType<typeof Filter>>;
declare const FilterFromBytes: Codec<Filter, Uint8Array>;
declare function mergeFilter(a: Filter, b: Filter): Filter;

declare const Bloom: Codec<`0x${string}` | undefined, {
    value?: Uint8Array | undefined;
}>;
type Bloom = CodecType<typeof Bloom>;
declare const TransactionStatus: Codec<"unknown" | "succeeded" | "reverted", TransactionStatus$1>;
type TransactionStatus = CodecType<typeof TransactionStatus>;
declare const BlockHeader: MessageCodec<{
    blockNumber: Codec<bigint, bigint | undefined>;
    blockHash: Codec<`0x${string}` | undefined, B256$1 | undefined>;
    parentBlockHash: Codec<`0x${string}`, B256$1 | undefined>;
    unclesHash: Codec<`0x${string}`, B256$1 | undefined>;
    miner: Codec<`0x${string}`, Address$1 | undefined>;
    stateRoot: Codec<`0x${string}`, B256$1 | undefined>;
    transactionsRoot: Codec<`0x${string}`, B256$1 | undefined>;
    receiptsRoot: Codec<`0x${string}`, B256$1 | undefined>;
    logsBloom: Codec<`0x${string}`, {
        value?: Uint8Array | undefined;
    } | undefined>;
    difficulty: Codec<bigint, U256$1 | undefined>;
    gasLimit: Codec<bigint, U128$1 | undefined>;
    gasUsed: Codec<bigint, U128$1 | undefined>;
    timestamp: Codec<Date, Date | undefined>;
    extraData: Codec<`0x${string}`, Uint8Array | undefined>;
    mixHash: Codec<`0x${string}` | undefined, B256$1 | undefined>;
    nonce: Codec<bigint | undefined, bigint | undefined>;
    baseFeePerGas: Codec<bigint | undefined, U128$1 | undefined>;
    withdrawalsRoot: Codec<`0x${string}` | undefined, B256$1 | undefined>;
    totalDifficulty: Codec<bigint | undefined, U256$1 | undefined>;
    blobGasUsed: Codec<bigint | undefined, U128$1 | undefined>;
    excessBlobGas: Codec<bigint | undefined, U128$1 | undefined>;
    parentBeaconBlockRoot: Codec<`0x${string}` | undefined, B256$1 | undefined>;
    requestsHash: Codec<`0x${string}` | undefined, B256$1 | undefined>;
}>;
type BlockHeader = CodecType<typeof BlockHeader>;
declare const Withdrawal: MessageCodec<{
    filterIds: Codec<readonly number[], readonly number[] | undefined>;
    withdrawalIndex: Codec<number, number | undefined>;
    index: Codec<bigint, bigint | undefined>;
    validatorIndex: Codec<number, number | undefined>;
    address: Codec<`0x${string}`, Address$1 | undefined>;
    amount: Codec<bigint, bigint | undefined>;
}>;
type Withdrawal = CodecType<typeof Withdrawal>;
declare const AccessListItem: MessageCodec<{
    address: Codec<`0x${string}`, Address$1 | undefined>;
    storageKeys: Codec<readonly `0x${string}`[], readonly B256$1[] | undefined>;
}>;
type AccessListItem = CodecType<typeof AccessListItem>;
declare const Signature: MessageCodec<{
    r: Codec<bigint, U256$1 | undefined>;
    s: Codec<bigint, U256$1 | undefined>;
    v: Codec<bigint | undefined, U256$1 | undefined>;
    YParity: Codec<boolean | undefined, boolean | undefined>;
}>;
type Signature = CodecType<typeof Signature>;
declare const Transaction: MessageCodec<{
    filterIds: Codec<readonly number[], readonly number[] | undefined>;
    transactionIndex: Codec<number, number | undefined>;
    transactionHash: Codec<`0x${string}`, B256$1 | undefined>;
    nonce: Codec<bigint, bigint | undefined>;
    from: Codec<`0x${string}`, Address$1 | undefined>;
    to: Codec<`0x${string}` | undefined, Address$1 | undefined>;
    value: Codec<bigint, U256$1 | undefined>;
    gasPrice: Codec<bigint | undefined, U128$1 | undefined>;
    gas: Codec<bigint, U128$1 | undefined>;
    maxFeePerGas: Codec<bigint | undefined, U128$1 | undefined>;
    maxPriorityFeePerGas: Codec<bigint | undefined, U128$1 | undefined>;
    input: Codec<`0x${string}`, Uint8Array | undefined>;
    signature: Codec<{
        r: bigint;
        s: bigint;
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
    transactionStatus: Codec<"unknown", TransactionStatus$1 | undefined> | Codec<"succeeded", TransactionStatus$1 | undefined> | Codec<"reverted", TransactionStatus$1 | undefined>;
}>;
type Transaction = CodecType<typeof Transaction>;
declare const TransactionReceipt: MessageCodec<{
    filterIds: Codec<readonly number[], readonly number[] | undefined>;
    transactionIndex: Codec<number, number | undefined>;
    transactionHash: Codec<`0x${string}`, B256$1 | undefined>;
    cumulativeGasUsed: Codec<bigint, U128$1 | undefined>;
    gasUsed: Codec<bigint, U128$1 | undefined>;
    effectiveGasPrice: Codec<bigint, U128$1 | undefined>;
    from: Codec<`0x${string}`, Address$1 | undefined>;
    to: Codec<`0x${string}` | undefined, Address$1 | undefined>;
    contractAddress: Codec<`0x${string}` | undefined, Address$1 | undefined>;
    logsBloom: Codec<`0x${string}`, {
        value?: Uint8Array | undefined;
    } | undefined>;
    transactionType: Codec<bigint, bigint | undefined>;
    blobGasUsed: Codec<bigint | undefined, U128$1 | undefined>;
    blobGasPrice: Codec<bigint | undefined, U128$1 | undefined>;
    transactionStatus: Codec<"unknown", TransactionStatus$1 | undefined> | Codec<"succeeded", TransactionStatus$1 | undefined> | Codec<"reverted", TransactionStatus$1 | undefined>;
}>;
type TransactionReceipt = CodecType<typeof TransactionReceipt>;
declare const Log: MessageCodec<{
    filterIds: Codec<readonly number[], readonly number[] | undefined>;
    address: Codec<`0x${string}`, Address$1 | undefined>;
    topics: Codec<readonly `0x${string}`[], readonly B256$1[] | undefined>;
    data: Codec<`0x${string}`, Uint8Array | undefined>;
    logIndex: Codec<number, number | undefined>;
    logIndexInTransaction: Codec<number, number | undefined>;
    transactionIndex: Codec<number, number | undefined>;
    transactionHash: Codec<`0x${string}`, B256$1 | undefined>;
    transactionStatus: Codec<"unknown", TransactionStatus$1 | undefined> | Codec<"succeeded", TransactionStatus$1 | undefined> | Codec<"reverted", TransactionStatus$1 | undefined>;
}>;
type Log = CodecType<typeof Log>;
declare const CallType: Codec<"unknown" | "call" | "delegateCall" | "callCode" | "staticCall" | "authCall", CallType$1>;
type CallType = CodecType<typeof CallType>;
declare const CreationMethod: Codec<"unknown" | "create" | "create2" | "eofCreate", CreationMethod$1>;
type CreationMethod = CodecType<typeof CreationMethod>;
declare const CallAction: MessageCodec<{
    fromAddress: Codec<`0x${string}`, Address$1 | undefined>;
    type: Codec<"unknown", CallType$1 | undefined> | Codec<"call", CallType$1 | undefined> | Codec<"delegateCall", CallType$1 | undefined> | Codec<"callCode", CallType$1 | undefined> | Codec<"staticCall", CallType$1 | undefined> | Codec<"authCall", CallType$1 | undefined>;
    gas: Codec<bigint, bigint | undefined>;
    input: Codec<`0x${string}`, Uint8Array | undefined>;
    toAddress: Codec<`0x${string}`, Address$1 | undefined>;
    value: Codec<bigint, U256$1 | undefined>;
}>;
type CallAction = CodecType<typeof CallAction>;
declare const CreateAction: MessageCodec<{
    fromAddress: Codec<`0x${string}`, Address$1 | undefined>;
    gas: Codec<bigint, bigint | undefined>;
    init: Codec<`0x${string}`, Uint8Array | undefined>;
    value: Codec<bigint, U256$1 | undefined>;
    creationMethod: Codec<"unknown", CreationMethod$1 | undefined> | Codec<"create", CreationMethod$1 | undefined> | Codec<"create2", CreationMethod$1 | undefined> | Codec<"eofCreate", CreationMethod$1 | undefined>;
}>;
type CreateAction = CodecType<typeof CreateAction>;
declare const SelfDestructAction: MessageCodec<{
    address: Codec<`0x${string}`, Address$1 | undefined>;
    balance: Codec<bigint, U256$1 | undefined>;
    refundAddress: Codec<`0x${string}`, Address$1 | undefined>;
}>;
type SelfDestructAction = CodecType<typeof SelfDestructAction>;
declare const RewardType: Codec<"unknown" | "block" | "uncle", RewardType$1>;
type RewardType = CodecType<typeof RewardType>;
declare const RewardAction: MessageCodec<{
    author: Codec<`0x${string}`, Address$1 | undefined>;
    type: Codec<"unknown", RewardType$1 | undefined> | Codec<"block", RewardType$1 | undefined> | Codec<"uncle", RewardType$1 | undefined>;
    value: Codec<bigint, U256$1 | undefined>;
}>;
type RewardAction = CodecType<typeof RewardAction>;
declare const CallOutput: MessageCodec<{
    gasUsed: Codec<bigint, bigint | undefined>;
    output: Codec<`0x${string}`, Uint8Array | undefined>;
}>;
type CallOutput = CodecType<typeof CallOutput>;
declare const CreateOutput: MessageCodec<{
    address: Codec<`0x${string}`, Address$1 | undefined>;
    code: Codec<`0x${string}`, Uint8Array | undefined>;
    gasUsed: Codec<bigint, bigint | undefined>;
}>;
type CreateOutput = CodecType<typeof CreateOutput>;
declare const Trace: MessageCodec<{
    action: Codec<{
        _tag: "create";
    } & {
        create: {
            fromAddress: `0x${string}`;
            gas: bigint;
            init: `0x${string}`;
            value: bigint;
            creationMethod: "unknown" | "create" | "create2" | "eofCreate";
        };
    }, (({
        $case: "create";
    } & {
        create: {
            fromAddress?: Address$1 | undefined;
            gas?: bigint | undefined;
            init?: Uint8Array | undefined;
            value?: U256$1 | undefined;
            creationMethod?: CreationMethod$1 | undefined;
        };
    }) | ({
        $case: "call";
    } & {
        call: {
            fromAddress?: Address$1 | undefined;
            type?: CallType$1 | undefined;
            gas?: bigint | undefined;
            input?: Uint8Array | undefined;
            toAddress?: Address$1 | undefined;
            value?: U256$1 | undefined;
        };
    }) | ({
        $case: "selfDestruct";
    } & {
        selfDestruct: {
            address?: Address$1 | undefined;
            balance?: U256$1 | undefined;
            refundAddress?: Address$1 | undefined;
        };
    }) | ({
        $case: "reward";
    } & {
        reward: {
            author?: Address$1 | undefined;
            type?: RewardType$1 | undefined;
            value?: U256$1 | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "call";
    } & {
        call: {
            fromAddress: `0x${string}`;
            type: "unknown" | "call" | "delegateCall" | "callCode" | "staticCall" | "authCall";
            gas: bigint;
            input: `0x${string}`;
            toAddress: `0x${string}`;
            value: bigint;
        };
    }, (({
        $case: "create";
    } & {
        create: {
            fromAddress?: Address$1 | undefined;
            gas?: bigint | undefined;
            init?: Uint8Array | undefined;
            value?: U256$1 | undefined;
            creationMethod?: CreationMethod$1 | undefined;
        };
    }) | ({
        $case: "call";
    } & {
        call: {
            fromAddress?: Address$1 | undefined;
            type?: CallType$1 | undefined;
            gas?: bigint | undefined;
            input?: Uint8Array | undefined;
            toAddress?: Address$1 | undefined;
            value?: U256$1 | undefined;
        };
    }) | ({
        $case: "selfDestruct";
    } & {
        selfDestruct: {
            address?: Address$1 | undefined;
            balance?: U256$1 | undefined;
            refundAddress?: Address$1 | undefined;
        };
    }) | ({
        $case: "reward";
    } & {
        reward: {
            author?: Address$1 | undefined;
            type?: RewardType$1 | undefined;
            value?: U256$1 | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "selfDestruct";
    } & {
        selfDestruct: {
            address: `0x${string}`;
            balance: bigint;
            refundAddress: `0x${string}`;
        };
    }, (({
        $case: "create";
    } & {
        create: {
            fromAddress?: Address$1 | undefined;
            gas?: bigint | undefined;
            init?: Uint8Array | undefined;
            value?: U256$1 | undefined;
            creationMethod?: CreationMethod$1 | undefined;
        };
    }) | ({
        $case: "call";
    } & {
        call: {
            fromAddress?: Address$1 | undefined;
            type?: CallType$1 | undefined;
            gas?: bigint | undefined;
            input?: Uint8Array | undefined;
            toAddress?: Address$1 | undefined;
            value?: U256$1 | undefined;
        };
    }) | ({
        $case: "selfDestruct";
    } & {
        selfDestruct: {
            address?: Address$1 | undefined;
            balance?: U256$1 | undefined;
            refundAddress?: Address$1 | undefined;
        };
    }) | ({
        $case: "reward";
    } & {
        reward: {
            author?: Address$1 | undefined;
            type?: RewardType$1 | undefined;
            value?: U256$1 | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "reward";
    } & {
        reward: {
            author: `0x${string}`;
            type: "unknown" | "block" | "uncle";
            value: bigint;
        };
    }, (({
        $case: "create";
    } & {
        create: {
            fromAddress?: Address$1 | undefined;
            gas?: bigint | undefined;
            init?: Uint8Array | undefined;
            value?: U256$1 | undefined;
            creationMethod?: CreationMethod$1 | undefined;
        };
    }) | ({
        $case: "call";
    } & {
        call: {
            fromAddress?: Address$1 | undefined;
            type?: CallType$1 | undefined;
            gas?: bigint | undefined;
            input?: Uint8Array | undefined;
            toAddress?: Address$1 | undefined;
            value?: U256$1 | undefined;
        };
    }) | ({
        $case: "selfDestruct";
    } & {
        selfDestruct: {
            address?: Address$1 | undefined;
            balance?: U256$1 | undefined;
            refundAddress?: Address$1 | undefined;
        };
    }) | ({
        $case: "reward";
    } & {
        reward: {
            author?: Address$1 | undefined;
            type?: RewardType$1 | undefined;
            value?: U256$1 | undefined;
        };
    })) | undefined>;
    error: Codec<string | undefined, string | undefined>;
    output: Codec<(({
        _tag: "callOutput";
    } & {
        callOutput: {
            gasUsed: bigint;
            output: `0x${string}`;
        };
    }) | ({
        _tag: "createOutput";
    } & {
        createOutput: {
            address: `0x${string}`;
            code: `0x${string}`;
            gasUsed: bigint;
        };
    })) | undefined, (({
        $case: "callOutput";
    } & {
        callOutput: {
            gasUsed?: bigint | undefined;
            output?: Uint8Array | undefined;
        };
    }) | ({
        $case: "createOutput";
    } & {
        createOutput: {
            address?: Address$1 | undefined;
            code?: Uint8Array | undefined;
            gasUsed?: bigint | undefined;
        };
    })) | undefined>;
    subtraces: Codec<number, number | undefined>;
    traceAddress: Codec<readonly number[], readonly number[] | undefined>;
}>;
type Trace = CodecType<typeof Trace>;
declare const TransactionTrace: MessageCodec<{
    filterIds: Codec<readonly number[], readonly number[] | undefined>;
    transactionIndex: Codec<number, number | undefined>;
    transactionHash: Codec<`0x${string}`, B256$1 | undefined>;
    traces: Codec<readonly {
        action: ({
            _tag: "create";
        } & {
            create: {
                fromAddress: `0x${string}`;
                gas: bigint;
                init: `0x${string}`;
                value: bigint;
                creationMethod: "unknown" | "create" | "create2" | "eofCreate";
            };
        }) | ({
            _tag: "call";
        } & {
            call: {
                fromAddress: `0x${string}`;
                type: "unknown" | "call" | "delegateCall" | "callCode" | "staticCall" | "authCall";
                gas: bigint;
                input: `0x${string}`;
                toAddress: `0x${string}`;
                value: bigint;
            };
        }) | ({
            _tag: "selfDestruct";
        } & {
            selfDestruct: {
                address: `0x${string}`;
                balance: bigint;
                refundAddress: `0x${string}`;
            };
        }) | ({
            _tag: "reward";
        } & {
            reward: {
                author: `0x${string}`;
                type: "unknown" | "block" | "uncle";
                value: bigint;
            };
        });
        error?: string | undefined;
        output?: (({
            _tag: "callOutput";
        } & {
            callOutput: {
                gasUsed: bigint;
                output: `0x${string}`;
            };
        }) | ({
            _tag: "createOutput";
        } & {
            createOutput: {
                address: `0x${string}`;
                code: `0x${string}`;
                gasUsed: bigint;
            };
        })) | undefined;
        subtraces: number;
        traceAddress: readonly number[];
    }[], readonly {
        action?: (({
            $case: "create";
        } & {
            create: {
                fromAddress?: Address$1 | undefined;
                gas?: bigint | undefined;
                init?: Uint8Array | undefined;
                value?: U256$1 | undefined;
                creationMethod?: CreationMethod$1 | undefined;
            };
        }) | ({
            $case: "call";
        } & {
            call: {
                fromAddress?: Address$1 | undefined;
                type?: CallType$1 | undefined;
                gas?: bigint | undefined;
                input?: Uint8Array | undefined;
                toAddress?: Address$1 | undefined;
                value?: U256$1 | undefined;
            };
        }) | ({
            $case: "selfDestruct";
        } & {
            selfDestruct: {
                address?: Address$1 | undefined;
                balance?: U256$1 | undefined;
                refundAddress?: Address$1 | undefined;
            };
        }) | ({
            $case: "reward";
        } & {
            reward: {
                author?: Address$1 | undefined;
                type?: RewardType$1 | undefined;
                value?: U256$1 | undefined;
            };
        })) | undefined;
        error?: string | undefined;
        output?: (({
            $case: "callOutput";
        } & {
            callOutput: {
                gasUsed?: bigint | undefined;
                output?: Uint8Array | undefined;
            };
        }) | ({
            $case: "createOutput";
        } & {
            createOutput: {
                address?: Address$1 | undefined;
                code?: Uint8Array | undefined;
                gasUsed?: bigint | undefined;
            };
        })) | undefined;
        subtraces?: number | undefined;
        traceAddress?: readonly number[] | undefined;
    }[] | undefined>;
}>;
type TransactionTrace = CodecType<typeof TransactionTrace>;
declare const Block: MessageCodec<{
    header: Codec<{
        blockNumber: bigint;
        blockHash?: `0x${string}` | undefined;
        parentBlockHash: `0x${string}`;
        unclesHash: `0x${string}`;
        miner: `0x${string}`;
        stateRoot: `0x${string}`;
        transactionsRoot: `0x${string}`;
        receiptsRoot: `0x${string}`;
        logsBloom: `0x${string}`;
        difficulty: bigint;
        gasLimit: bigint;
        gasUsed: bigint;
        timestamp: Date;
        extraData: `0x${string}`;
        mixHash?: `0x${string}` | undefined;
        nonce?: bigint | undefined;
        baseFeePerGas?: bigint | undefined;
        withdrawalsRoot?: `0x${string}` | undefined;
        totalDifficulty?: bigint | undefined;
        blobGasUsed?: bigint | undefined;
        excessBlobGas?: bigint | undefined;
        parentBeaconBlockRoot?: `0x${string}` | undefined;
        requestsHash?: `0x${string}` | undefined;
    }, {
        blockNumber?: bigint | undefined;
        blockHash?: B256$1 | undefined;
        parentBlockHash?: B256$1 | undefined;
        unclesHash?: B256$1 | undefined;
        miner?: Address$1 | undefined;
        stateRoot?: B256$1 | undefined;
        transactionsRoot?: B256$1 | undefined;
        receiptsRoot?: B256$1 | undefined;
        logsBloom?: {
            value?: Uint8Array | undefined;
        } | undefined;
        difficulty?: U256$1 | undefined;
        gasLimit?: U128$1 | undefined;
        gasUsed?: U128$1 | undefined;
        timestamp?: Date | undefined;
        extraData?: Uint8Array | undefined;
        mixHash?: B256$1 | undefined;
        nonce?: bigint | undefined;
        baseFeePerGas?: U128$1 | undefined;
        withdrawalsRoot?: B256$1 | undefined;
        totalDifficulty?: U256$1 | undefined;
        blobGasUsed?: U128$1 | undefined;
        excessBlobGas?: U128$1 | undefined;
        parentBeaconBlockRoot?: B256$1 | undefined;
        requestsHash?: B256$1 | undefined;
    } | undefined>;
    withdrawals: Codec<readonly {
        filterIds: readonly number[];
        withdrawalIndex: number;
        index: bigint;
        validatorIndex: number;
        address: `0x${string}`;
        amount: bigint;
    }[], readonly {
        filterIds?: readonly number[] | undefined;
        withdrawalIndex?: number | undefined;
        index?: bigint | undefined;
        validatorIndex?: number | undefined;
        address?: Address$1 | undefined;
        amount?: bigint | undefined;
    }[] | undefined>;
    transactions: Codec<readonly {
        filterIds: readonly number[];
        transactionIndex: number;
        transactionHash: `0x${string}`;
        nonce: bigint;
        from: `0x${string}`;
        to?: `0x${string}` | undefined;
        value: bigint;
        gasPrice?: bigint | undefined;
        gas: bigint;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        input: `0x${string}`;
        signature?: {
            r: bigint;
            s: bigint;
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
        transactionStatus: "unknown" | "succeeded" | "reverted";
    }[], readonly {
        filterIds?: readonly number[] | undefined;
        transactionIndex?: number | undefined;
        transactionHash?: B256$1 | undefined;
        nonce?: bigint | undefined;
        from?: Address$1 | undefined;
        to?: Address$1 | undefined;
        value?: U256$1 | undefined;
        gasPrice?: U128$1 | undefined;
        gas?: U128$1 | undefined;
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
        transactionStatus?: TransactionStatus$1 | undefined;
    }[] | undefined>;
    receipts: Codec<readonly {
        filterIds: readonly number[];
        transactionIndex: number;
        transactionHash: `0x${string}`;
        cumulativeGasUsed: bigint;
        gasUsed: bigint;
        effectiveGasPrice: bigint;
        from: `0x${string}`;
        to?: `0x${string}` | undefined;
        contractAddress?: `0x${string}` | undefined;
        logsBloom: `0x${string}`;
        transactionType: bigint;
        blobGasUsed?: bigint | undefined;
        blobGasPrice?: bigint | undefined;
        transactionStatus: "unknown" | "succeeded" | "reverted";
    }[], readonly {
        filterIds?: readonly number[] | undefined;
        transactionIndex?: number | undefined;
        transactionHash?: B256$1 | undefined;
        cumulativeGasUsed?: U128$1 | undefined;
        gasUsed?: U128$1 | undefined;
        effectiveGasPrice?: U128$1 | undefined;
        from?: Address$1 | undefined;
        to?: Address$1 | undefined;
        contractAddress?: Address$1 | undefined;
        logsBloom?: {
            value?: Uint8Array | undefined;
        } | undefined;
        transactionType?: bigint | undefined;
        blobGasUsed?: U128$1 | undefined;
        blobGasPrice?: U128$1 | undefined;
        transactionStatus?: TransactionStatus$1 | undefined;
    }[] | undefined>;
    logs: Codec<readonly {
        filterIds: readonly number[];
        address: `0x${string}`;
        topics: readonly `0x${string}`[];
        data: `0x${string}`;
        logIndex: number;
        logIndexInTransaction: number;
        transactionIndex: number;
        transactionHash: `0x${string}`;
        transactionStatus: "unknown" | "succeeded" | "reverted";
    }[], readonly {
        filterIds?: readonly number[] | undefined;
        address?: Address$1 | undefined;
        topics?: readonly B256$1[] | undefined;
        data?: Uint8Array | undefined;
        logIndex?: number | undefined;
        logIndexInTransaction?: number | undefined;
        transactionIndex?: number | undefined;
        transactionHash?: B256$1 | undefined;
        transactionStatus?: TransactionStatus$1 | undefined;
    }[] | undefined>;
    traces: Codec<readonly {
        filterIds: readonly number[];
        transactionIndex: number;
        transactionHash: `0x${string}`;
        traces: readonly {
            action: ({
                _tag: "create";
            } & {
                create: {
                    fromAddress: `0x${string}`;
                    gas: bigint;
                    init: `0x${string}`;
                    value: bigint;
                    creationMethod: "unknown" | "create" | "create2" | "eofCreate";
                };
            }) | ({
                _tag: "call";
            } & {
                call: {
                    fromAddress: `0x${string}`;
                    type: "unknown" | "call" | "delegateCall" | "callCode" | "staticCall" | "authCall";
                    gas: bigint;
                    input: `0x${string}`;
                    toAddress: `0x${string}`;
                    value: bigint;
                };
            }) | ({
                _tag: "selfDestruct";
            } & {
                selfDestruct: {
                    address: `0x${string}`;
                    balance: bigint;
                    refundAddress: `0x${string}`;
                };
            }) | ({
                _tag: "reward";
            } & {
                reward: {
                    author: `0x${string}`;
                    type: "unknown" | "block" | "uncle";
                    value: bigint;
                };
            });
            error?: string | undefined;
            output?: (({
                _tag: "callOutput";
            } & {
                callOutput: {
                    gasUsed: bigint;
                    output: `0x${string}`;
                };
            }) | ({
                _tag: "createOutput";
            } & {
                createOutput: {
                    address: `0x${string}`;
                    code: `0x${string}`;
                    gasUsed: bigint;
                };
            })) | undefined;
            subtraces: number;
            traceAddress: readonly number[];
        }[];
    }[], readonly {
        filterIds?: readonly number[] | undefined;
        transactionIndex?: number | undefined;
        transactionHash?: B256$1 | undefined;
        traces?: readonly {
            action?: (({
                $case: "create";
            } & {
                create: {
                    fromAddress?: Address$1 | undefined;
                    gas?: bigint | undefined;
                    init?: Uint8Array | undefined;
                    value?: U256$1 | undefined;
                    creationMethod?: CreationMethod$1 | undefined;
                };
            }) | ({
                $case: "call";
            } & {
                call: {
                    fromAddress?: Address$1 | undefined;
                    type?: CallType$1 | undefined;
                    gas?: bigint | undefined;
                    input?: Uint8Array | undefined;
                    toAddress?: Address$1 | undefined;
                    value?: U256$1 | undefined;
                };
            }) | ({
                $case: "selfDestruct";
            } & {
                selfDestruct: {
                    address?: Address$1 | undefined;
                    balance?: U256$1 | undefined;
                    refundAddress?: Address$1 | undefined;
                };
            }) | ({
                $case: "reward";
            } & {
                reward: {
                    author?: Address$1 | undefined;
                    type?: RewardType$1 | undefined;
                    value?: U256$1 | undefined;
                };
            })) | undefined;
            error?: string | undefined;
            output?: (({
                $case: "callOutput";
            } & {
                callOutput: {
                    gasUsed?: bigint | undefined;
                    output?: Uint8Array | undefined;
                };
            }) | ({
                $case: "createOutput";
            } & {
                createOutput: {
                    address?: Address$1 | undefined;
                    code?: Uint8Array | undefined;
                    gasUsed?: bigint | undefined;
                };
            })) | undefined;
            subtraces?: number | undefined;
            traceAddress?: readonly number[] | undefined;
        }[] | undefined;
    }[] | undefined>;
}>;
type Block = CodecType<typeof Block>;
declare const BlockFromBytes: Codec<Block, Uint8Array>;

declare const EvmStream: StreamConfig<Readonly<{
    header?: "always" | "on_data" | "on_data_or_on_new_block" | "unknown" | undefined;
    withdrawals?: readonly {
        id?: number | undefined;
        validatorIndex?: number | undefined;
        address?: `0x${string}` | undefined;
    }[] | undefined;
    transactions?: readonly {
        id?: number | undefined;
        from?: `0x${string}` | undefined;
        to?: `0x${string}` | undefined;
        create?: boolean | undefined;
        transactionStatus?: "unknown" | "succeeded" | "reverted" | "all" | undefined;
        includeReceipt?: boolean | undefined;
        includeLogs?: boolean | undefined;
        includeTransactionTrace?: boolean | undefined;
    }[] | undefined;
    logs?: readonly {
        id?: number | undefined;
        address?: `0x${string}` | undefined;
        topics?: readonly (`0x${string}` | null)[] | undefined;
        strict?: boolean | undefined;
        transactionStatus?: "unknown" | "succeeded" | "reverted" | "all" | undefined;
        includeTransaction?: boolean | undefined;
        includeReceipt?: boolean | undefined;
        includeTransactionTrace?: boolean | undefined;
    }[] | undefined;
}>, {
    header: {
        blockNumber: bigint;
        blockHash?: `0x${string}` | undefined;
        parentBlockHash: `0x${string}`;
        unclesHash: `0x${string}`;
        miner: `0x${string}`;
        stateRoot: `0x${string}`;
        transactionsRoot: `0x${string}`;
        receiptsRoot: `0x${string}`;
        logsBloom: `0x${string}`;
        difficulty: bigint;
        gasLimit: bigint;
        gasUsed: bigint;
        timestamp: Date;
        extraData: `0x${string}`;
        mixHash?: `0x${string}` | undefined;
        nonce?: bigint | undefined;
        baseFeePerGas?: bigint | undefined;
        withdrawalsRoot?: `0x${string}` | undefined;
        totalDifficulty?: bigint | undefined;
        blobGasUsed?: bigint | undefined;
        excessBlobGas?: bigint | undefined;
        parentBeaconBlockRoot?: `0x${string}` | undefined;
        requestsHash?: `0x${string}` | undefined;
    };
    withdrawals: readonly {
        filterIds: readonly number[];
        withdrawalIndex: number;
        index: bigint;
        validatorIndex: number;
        address: `0x${string}`;
        amount: bigint;
    }[];
    transactions: readonly {
        filterIds: readonly number[];
        transactionIndex: number;
        transactionHash: `0x${string}`;
        nonce: bigint;
        from: `0x${string}`;
        to?: `0x${string}` | undefined;
        value: bigint;
        gasPrice?: bigint | undefined;
        gas: bigint;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        input: `0x${string}`;
        signature?: {
            r: bigint;
            s: bigint;
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
        transactionStatus: "unknown" | "succeeded" | "reverted";
    }[];
    receipts: readonly {
        filterIds: readonly number[];
        transactionIndex: number;
        transactionHash: `0x${string}`;
        cumulativeGasUsed: bigint;
        gasUsed: bigint;
        effectiveGasPrice: bigint;
        from: `0x${string}`;
        to?: `0x${string}` | undefined;
        contractAddress?: `0x${string}` | undefined;
        logsBloom: `0x${string}`;
        transactionType: bigint;
        blobGasUsed?: bigint | undefined;
        blobGasPrice?: bigint | undefined;
        transactionStatus: "unknown" | "succeeded" | "reverted";
    }[];
    logs: readonly {
        filterIds: readonly number[];
        address: `0x${string}`;
        topics: readonly `0x${string}`[];
        data: `0x${string}`;
        logIndex: number;
        logIndexInTransaction: number;
        transactionIndex: number;
        transactionHash: `0x${string}`;
        transactionStatus: "unknown" | "succeeded" | "reverted";
    }[];
    traces: readonly {
        filterIds: readonly number[];
        transactionIndex: number;
        transactionHash: `0x${string}`;
        traces: readonly {
            action: ({
                _tag: "create";
            } & {
                create: {
                    fromAddress: `0x${string}`;
                    gas: bigint;
                    init: `0x${string}`;
                    value: bigint;
                    creationMethod: "unknown" | "create" | "create2" | "eofCreate";
                };
            }) | ({
                _tag: "call";
            } & {
                call: {
                    fromAddress: `0x${string}`;
                    type: "unknown" | "call" | "delegateCall" | "callCode" | "staticCall" | "authCall";
                    gas: bigint;
                    input: `0x${string}`;
                    toAddress: `0x${string}`;
                    value: bigint;
                };
            }) | ({
                _tag: "selfDestruct";
            } & {
                selfDestruct: {
                    address: `0x${string}`;
                    balance: bigint;
                    refundAddress: `0x${string}`;
                };
            }) | ({
                _tag: "reward";
            } & {
                reward: {
                    author: `0x${string}`;
                    type: "unknown" | "block" | "uncle";
                    value: bigint;
                };
            });
            error?: string | undefined;
            output?: (({
                _tag: "callOutput";
            } & {
                callOutput: {
                    gasUsed: bigint;
                    output: `0x${string}`;
                };
            }) | ({
                _tag: "createOutput";
            } & {
                createOutput: {
                    address: `0x${string}`;
                    code: `0x${string}`;
                    gasUsed: bigint;
                };
            })) | undefined;
            subtraces: number;
            traceAddress: readonly number[];
        }[];
    }[];
}>;

export { AccessListItem, Address, B256, Block, BlockFromBytes, BlockHeader, Bloom, CallAction, CallOutput, CallType, CreateAction, CreateOutput, CreationMethod, EvmStream, Filter, FilterFromBytes, HeaderFilter, Log, LogFilter, RewardAction, RewardType, SelfDestructAction, Signature, Topic, Trace, Transaction, TransactionFilter, TransactionReceipt, TransactionStatus, TransactionStatusFilter, TransactionTrace, U128, U256, Withdrawal, WithdrawalFilter, mergeFilter, index as proto };
