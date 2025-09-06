import { MessageCodec, Codec, CodecType, Evaluate } from '@apibara/protocol/codec';
import { F as FieldElement, c as common, a as FieldElement$1 } from './shared/starknet.e649ecb1.mjs';
import _m0 from 'protobufjs/minimal.js';
import { StreamConfig } from '@apibara/protocol';
import { Abi } from 'abi-wan-kanabi';
export { Abi } from 'abi-wan-kanabi';
import { ExtractAbiEventNames, ExtractAbiEvent, AbiEventMember, ExtractAbiEnum, StringToPrimitiveType as StringToPrimitiveType$1 } from 'abi-wan-kanabi/kanabi';

declare const protobufPackage$1 = "starknet.v2";
/** Starknet DNA definitions (data). */
declare enum TransactionStatus$1 {
    UNSPECIFIED = 0,
    SUCCEEDED = 1,
    REVERTED = 2,
    UNRECOGNIZED = -1
}
declare function transactionStatusFromJSON(object: any): TransactionStatus$1;
declare function transactionStatusToJSON(object: TransactionStatus$1): string;
declare enum L1DataAvailabilityMode$1 {
    /** UNSPECIFIED - Unknown DA. */
    UNSPECIFIED = 0,
    /** BLOB - Data published via blobs. */
    BLOB = 1,
    /** CALLDATA - Data published via calldata. */
    CALLDATA = 2,
    UNRECOGNIZED = -1
}
declare function l1DataAvailabilityModeFromJSON(object: any): L1DataAvailabilityMode$1;
declare function l1DataAvailabilityModeToJSON(object: L1DataAvailabilityMode$1): string;
/** Transaction execution status. */
declare enum ExecutionStatus {
    /** UNSPECIFIED - Unknown execution status. */
    UNSPECIFIED = 0,
    /** SUCCEEDED - Transaction succeeded. */
    SUCCEEDED = 1,
    /** REVERTED - Transaction reverted. */
    REVERTED = 2,
    UNRECOGNIZED = -1
}
declare function executionStatusFromJSON(object: any): ExecutionStatus;
declare function executionStatusToJSON(object: ExecutionStatus): string;
/** Price unit. */
declare enum PriceUnit$1 {
    /** UNSPECIFIED - Unknown price unit. */
    UNSPECIFIED = 0,
    /** WEI - WEI. */
    WEI = 1,
    /** FRI - FRI. */
    FRI = 2,
    UNRECOGNIZED = -1
}
declare function priceUnitFromJSON(object: any): PriceUnit$1;
declare function priceUnitToJSON(object: PriceUnit$1): string;
/** DA mode. */
declare enum DataAvailabilityMode$1 {
    /** UNSPECIFIED - Unknown DA. */
    UNSPECIFIED = 0,
    /** L1 - L1. */
    L1 = 1,
    /** L2 - L2. */
    L2 = 2,
    UNRECOGNIZED = -1
}
declare function dataAvailabilityModeFromJSON(object: any): DataAvailabilityMode$1;
declare function dataAvailabilityModeToJSON(object: DataAvailabilityMode$1): string;
declare enum CallType$1 {
    UNSPECIFIED = 0,
    LIBRARY_CALL = 1,
    CALL = 2,
    DELEGATE = 3,
    UNRECOGNIZED = -1
}
declare function callTypeFromJSON(object: any): CallType$1;
declare function callTypeToJSON(object: CallType$1): string;
/** Requested data, grouped by block. */
interface Block$1 {
    /** The header. */
    readonly header?: BlockHeader$1 | undefined;
    /** List of transactions. */
    readonly transactions?: readonly Transaction$1[] | undefined;
    /** List of transactions receipts. */
    readonly receipts?: readonly TransactionReceipt$1[] | undefined;
    /** List of events. */
    readonly events?: readonly Event$1[] | undefined;
    /** List of messages. */
    readonly messages?: readonly MessageToL1$1[] | undefined;
    /** List of storage changes by contract. */
    readonly storageDiffs?: readonly StorageDiff$1[] | undefined;
    /** List of contract/class changes. */
    readonly contractChanges?: readonly ContractChange$1[] | undefined;
    /** List of nonce updates. */
    readonly nonceUpdates?: readonly NonceUpdate$1[] | undefined;
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
    /** Hash of the block. */
    readonly blockHash?: FieldElement | undefined;
    /** Hash of the block's parent. */
    readonly parentBlockHash?: FieldElement | undefined;
    /** Block height. */
    readonly blockNumber?: bigint | undefined;
    /** Sequencer address. */
    readonly sequencerAddress?: FieldElement | undefined;
    /** New state root after the block. */
    readonly newRoot?: FieldElement | undefined;
    /** Timestamp when block  was produced. */
    readonly timestamp?: Date | undefined;
    /** Starknet version. */
    readonly starknetVersion?: string | undefined;
    /** Price of L1 gas in the block. */
    readonly l1GasPrice?: ResourcePrice$1 | undefined;
    /** Price of L1 data gas in the block. */
    readonly l1DataGasPrice?: ResourcePrice$1 | undefined;
    /** L1 data availability mode. */
    readonly l1DataAvailabilityMode?: L1DataAvailabilityMode$1 | undefined;
}
declare const BlockHeader$1: {
    encode(message: BlockHeader$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockHeader$1;
    fromJSON(object: any): BlockHeader$1;
    toJSON(message: BlockHeader$1): unknown;
    create(base?: DeepPartial$1<BlockHeader$1>): BlockHeader$1;
    fromPartial(object: DeepPartial$1<BlockHeader$1>): BlockHeader$1;
};
/** A transaction. */
interface Transaction$1 {
    readonly filterIds?: readonly number[] | undefined;
    /** Common transaction metadata. */
    readonly meta?: TransactionMeta$1 | undefined;
    readonly transaction?: {
        readonly $case: "invokeV0";
        readonly invokeV0: InvokeTransactionV0$1;
    } | {
        readonly $case: "invokeV1";
        readonly invokeV1: InvokeTransactionV1$1;
    } | {
        readonly $case: "invokeV3";
        readonly invokeV3: InvokeTransactionV3$1;
    } | {
        readonly $case: "l1Handler";
        readonly l1Handler: L1HandlerTransaction$1;
    } | {
        readonly $case: "deploy";
        readonly deploy: DeployTransaction$1;
    } | {
        readonly $case: "declareV0";
        readonly declareV0: DeclareTransactionV0$1;
    } | {
        readonly $case: "declareV1";
        readonly declareV1: DeclareTransactionV1$1;
    } | {
        readonly $case: "declareV2";
        readonly declareV2: DeclareTransactionV2$1;
    } | {
        readonly $case: "declareV3";
        readonly declareV3: DeclareTransactionV3$1;
    } | {
        readonly $case: "deployAccountV1";
        readonly deployAccountV1: DeployAccountTransactionV1$1;
    } | {
        readonly $case: "deployAccountV3";
        readonly deployAccountV3: DeployAccountTransactionV3$1;
    } | undefined;
}
declare const Transaction$1: {
    encode(message: Transaction$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Transaction$1;
    fromJSON(object: any): Transaction$1;
    toJSON(message: Transaction$1): unknown;
    create(base?: DeepPartial$1<Transaction$1>): Transaction$1;
    fromPartial(object: DeepPartial$1<Transaction$1>): Transaction$1;
};
interface TransactionMeta$1 {
    /** Transaction index. */
    readonly transactionIndex?: number | undefined;
    /** Transaction hash. */
    readonly transactionHash?: FieldElement | undefined;
    /** Transaction status. */
    readonly transactionStatus?: TransactionStatus$1 | undefined;
}
declare const TransactionMeta$1: {
    encode(message: TransactionMeta$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionMeta$1;
    fromJSON(object: any): TransactionMeta$1;
    toJSON(message: TransactionMeta$1): unknown;
    create(base?: DeepPartial$1<TransactionMeta$1>): TransactionMeta$1;
    fromPartial(object: DeepPartial$1<TransactionMeta$1>): TransactionMeta$1;
};
interface InvokeTransactionV0$1 {
    readonly maxFee?: FieldElement | undefined;
    readonly signature?: readonly FieldElement[] | undefined;
    readonly contractAddress?: FieldElement | undefined;
    readonly entryPointSelector?: FieldElement | undefined;
    readonly calldata?: readonly FieldElement[] | undefined;
}
declare const InvokeTransactionV0$1: {
    encode(message: InvokeTransactionV0$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeTransactionV0$1;
    fromJSON(object: any): InvokeTransactionV0$1;
    toJSON(message: InvokeTransactionV0$1): unknown;
    create(base?: DeepPartial$1<InvokeTransactionV0$1>): InvokeTransactionV0$1;
    fromPartial(object: DeepPartial$1<InvokeTransactionV0$1>): InvokeTransactionV0$1;
};
interface InvokeTransactionV1$1 {
    readonly senderAddress?: FieldElement | undefined;
    readonly calldata?: readonly FieldElement[] | undefined;
    readonly maxFee?: FieldElement | undefined;
    readonly signature?: readonly FieldElement[] | undefined;
    readonly nonce?: FieldElement | undefined;
}
declare const InvokeTransactionV1$1: {
    encode(message: InvokeTransactionV1$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeTransactionV1$1;
    fromJSON(object: any): InvokeTransactionV1$1;
    toJSON(message: InvokeTransactionV1$1): unknown;
    create(base?: DeepPartial$1<InvokeTransactionV1$1>): InvokeTransactionV1$1;
    fromPartial(object: DeepPartial$1<InvokeTransactionV1$1>): InvokeTransactionV1$1;
};
interface InvokeTransactionV3$1 {
    readonly senderAddress?: FieldElement | undefined;
    readonly calldata?: readonly FieldElement[] | undefined;
    readonly signature?: readonly FieldElement[] | undefined;
    readonly nonce?: FieldElement | undefined;
    readonly resourceBounds?: ResourceBoundsMapping$1 | undefined;
    readonly tip?: bigint | undefined;
    readonly paymasterData?: readonly FieldElement[] | undefined;
    readonly accountDeploymentData?: readonly FieldElement[] | undefined;
    readonly nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
    readonly feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
}
declare const InvokeTransactionV3$1: {
    encode(message: InvokeTransactionV3$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeTransactionV3$1;
    fromJSON(object: any): InvokeTransactionV3$1;
    toJSON(message: InvokeTransactionV3$1): unknown;
    create(base?: DeepPartial$1<InvokeTransactionV3$1>): InvokeTransactionV3$1;
    fromPartial(object: DeepPartial$1<InvokeTransactionV3$1>): InvokeTransactionV3$1;
};
interface L1HandlerTransaction$1 {
    readonly nonce?: bigint | undefined;
    readonly contractAddress?: FieldElement | undefined;
    readonly entryPointSelector?: FieldElement | undefined;
    readonly calldata?: readonly FieldElement[] | undefined;
}
declare const L1HandlerTransaction$1: {
    encode(message: L1HandlerTransaction$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): L1HandlerTransaction$1;
    fromJSON(object: any): L1HandlerTransaction$1;
    toJSON(message: L1HandlerTransaction$1): unknown;
    create(base?: DeepPartial$1<L1HandlerTransaction$1>): L1HandlerTransaction$1;
    fromPartial(object: DeepPartial$1<L1HandlerTransaction$1>): L1HandlerTransaction$1;
};
interface DeployTransaction$1 {
    readonly contractAddressSalt?: FieldElement | undefined;
    readonly constructorCalldata?: readonly FieldElement[] | undefined;
    readonly classHash?: FieldElement | undefined;
}
declare const DeployTransaction$1: {
    encode(message: DeployTransaction$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeployTransaction$1;
    fromJSON(object: any): DeployTransaction$1;
    toJSON(message: DeployTransaction$1): unknown;
    create(base?: DeepPartial$1<DeployTransaction$1>): DeployTransaction$1;
    fromPartial(object: DeepPartial$1<DeployTransaction$1>): DeployTransaction$1;
};
interface DeclareTransactionV0$1 {
    readonly senderAddress?: FieldElement | undefined;
    readonly maxFee?: FieldElement | undefined;
    readonly signature?: readonly FieldElement[] | undefined;
    readonly classHash?: FieldElement | undefined;
}
declare const DeclareTransactionV0$1: {
    encode(message: DeclareTransactionV0$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeclareTransactionV0$1;
    fromJSON(object: any): DeclareTransactionV0$1;
    toJSON(message: DeclareTransactionV0$1): unknown;
    create(base?: DeepPartial$1<DeclareTransactionV0$1>): DeclareTransactionV0$1;
    fromPartial(object: DeepPartial$1<DeclareTransactionV0$1>): DeclareTransactionV0$1;
};
interface DeclareTransactionV1$1 {
    readonly senderAddress?: FieldElement | undefined;
    readonly maxFee?: FieldElement | undefined;
    readonly signature?: readonly FieldElement[] | undefined;
    readonly nonce?: FieldElement | undefined;
    readonly classHash?: FieldElement | undefined;
}
declare const DeclareTransactionV1$1: {
    encode(message: DeclareTransactionV1$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeclareTransactionV1$1;
    fromJSON(object: any): DeclareTransactionV1$1;
    toJSON(message: DeclareTransactionV1$1): unknown;
    create(base?: DeepPartial$1<DeclareTransactionV1$1>): DeclareTransactionV1$1;
    fromPartial(object: DeepPartial$1<DeclareTransactionV1$1>): DeclareTransactionV1$1;
};
interface DeclareTransactionV2$1 {
    readonly senderAddress?: FieldElement | undefined;
    readonly compiledClassHash?: FieldElement | undefined;
    readonly maxFee?: FieldElement | undefined;
    readonly signature?: readonly FieldElement[] | undefined;
    readonly nonce?: FieldElement | undefined;
    readonly classHash?: FieldElement | undefined;
}
declare const DeclareTransactionV2$1: {
    encode(message: DeclareTransactionV2$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeclareTransactionV2$1;
    fromJSON(object: any): DeclareTransactionV2$1;
    toJSON(message: DeclareTransactionV2$1): unknown;
    create(base?: DeepPartial$1<DeclareTransactionV2$1>): DeclareTransactionV2$1;
    fromPartial(object: DeepPartial$1<DeclareTransactionV2$1>): DeclareTransactionV2$1;
};
interface DeclareTransactionV3$1 {
    readonly senderAddress?: FieldElement | undefined;
    readonly compiledClassHash?: FieldElement | undefined;
    readonly signature?: readonly FieldElement[] | undefined;
    readonly nonce?: FieldElement | undefined;
    readonly classHash?: FieldElement | undefined;
    readonly resourceBounds?: ResourceBoundsMapping$1 | undefined;
    readonly tip?: bigint | undefined;
    readonly paymasterData?: readonly FieldElement[] | undefined;
    readonly accountDeploymentData?: readonly FieldElement[] | undefined;
    readonly nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
    readonly feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
}
declare const DeclareTransactionV3$1: {
    encode(message: DeclareTransactionV3$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeclareTransactionV3$1;
    fromJSON(object: any): DeclareTransactionV3$1;
    toJSON(message: DeclareTransactionV3$1): unknown;
    create(base?: DeepPartial$1<DeclareTransactionV3$1>): DeclareTransactionV3$1;
    fromPartial(object: DeepPartial$1<DeclareTransactionV3$1>): DeclareTransactionV3$1;
};
interface DeployAccountTransactionV1$1 {
    readonly maxFee?: FieldElement | undefined;
    readonly signature?: readonly FieldElement[] | undefined;
    readonly nonce?: FieldElement | undefined;
    readonly contractAddressSalt?: FieldElement | undefined;
    readonly constructorCalldata?: readonly FieldElement[] | undefined;
    readonly classHash?: FieldElement | undefined;
}
declare const DeployAccountTransactionV1$1: {
    encode(message: DeployAccountTransactionV1$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeployAccountTransactionV1$1;
    fromJSON(object: any): DeployAccountTransactionV1$1;
    toJSON(message: DeployAccountTransactionV1$1): unknown;
    create(base?: DeepPartial$1<DeployAccountTransactionV1$1>): DeployAccountTransactionV1$1;
    fromPartial(object: DeepPartial$1<DeployAccountTransactionV1$1>): DeployAccountTransactionV1$1;
};
interface DeployAccountTransactionV3$1 {
    readonly signature?: readonly FieldElement[] | undefined;
    readonly nonce?: FieldElement | undefined;
    readonly contractAddressSalt?: FieldElement | undefined;
    readonly constructorCalldata?: readonly FieldElement[] | undefined;
    readonly classHash?: FieldElement | undefined;
    readonly resourceBounds?: ResourceBoundsMapping$1 | undefined;
    readonly tip?: bigint | undefined;
    readonly paymasterData?: readonly FieldElement[] | undefined;
    readonly nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
    readonly feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
}
declare const DeployAccountTransactionV3$1: {
    encode(message: DeployAccountTransactionV3$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeployAccountTransactionV3$1;
    fromJSON(object: any): DeployAccountTransactionV3$1;
    toJSON(message: DeployAccountTransactionV3$1): unknown;
    create(base?: DeepPartial$1<DeployAccountTransactionV3$1>): DeployAccountTransactionV3$1;
    fromPartial(object: DeepPartial$1<DeployAccountTransactionV3$1>): DeployAccountTransactionV3$1;
};
interface TransactionReceipt$1 {
    readonly filterIds?: readonly number[] | undefined;
    /** Common transaction receipt metadata. */
    readonly meta?: TransactionReceiptMeta$1 | undefined;
    readonly receipt?: {
        readonly $case: "invoke";
        readonly invoke: InvokeTransactionReceipt$1;
    } | {
        readonly $case: "l1Handler";
        readonly l1Handler: L1HandlerTransactionReceipt$1;
    } | {
        readonly $case: "declare";
        readonly declare: DeclareTransactionReceipt$1;
    } | {
        readonly $case: "deploy";
        readonly deploy: DeployTransactionReceipt$1;
    } | {
        readonly $case: "deployAccount";
        readonly deployAccount: DeployAccountTransactionReceipt$1;
    } | undefined;
}
declare const TransactionReceipt$1: {
    encode(message: TransactionReceipt$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionReceipt$1;
    fromJSON(object: any): TransactionReceipt$1;
    toJSON(message: TransactionReceipt$1): unknown;
    create(base?: DeepPartial$1<TransactionReceipt$1>): TransactionReceipt$1;
    fromPartial(object: DeepPartial$1<TransactionReceipt$1>): TransactionReceipt$1;
};
interface TransactionReceiptMeta$1 {
    readonly transactionIndex?: number | undefined;
    readonly transactionHash?: FieldElement | undefined;
    readonly actualFee?: FeePayment$1 | undefined;
    readonly executionResources?: ExecutionResources$1 | undefined;
    readonly executionResult?: {
        readonly $case: "succeeded";
        readonly succeeded: ExecutionSucceeded$1;
    } | {
        readonly $case: "reverted";
        readonly reverted: ExecutionReverted$1;
    } | undefined;
}
declare const TransactionReceiptMeta$1: {
    encode(message: TransactionReceiptMeta$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionReceiptMeta$1;
    fromJSON(object: any): TransactionReceiptMeta$1;
    toJSON(message: TransactionReceiptMeta$1): unknown;
    create(base?: DeepPartial$1<TransactionReceiptMeta$1>): TransactionReceiptMeta$1;
    fromPartial(object: DeepPartial$1<TransactionReceiptMeta$1>): TransactionReceiptMeta$1;
};
interface ExecutionSucceeded$1 {
}
declare const ExecutionSucceeded$1: {
    encode(_: ExecutionSucceeded$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExecutionSucceeded$1;
    fromJSON(_: any): ExecutionSucceeded$1;
    toJSON(_: ExecutionSucceeded$1): unknown;
    create(base?: DeepPartial$1<ExecutionSucceeded$1>): ExecutionSucceeded$1;
    fromPartial(_: DeepPartial$1<ExecutionSucceeded$1>): ExecutionSucceeded$1;
};
interface ExecutionReverted$1 {
    readonly reason?: string | undefined;
}
declare const ExecutionReverted$1: {
    encode(message: ExecutionReverted$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExecutionReverted$1;
    fromJSON(object: any): ExecutionReverted$1;
    toJSON(message: ExecutionReverted$1): unknown;
    create(base?: DeepPartial$1<ExecutionReverted$1>): ExecutionReverted$1;
    fromPartial(object: DeepPartial$1<ExecutionReverted$1>): ExecutionReverted$1;
};
interface InvokeTransactionReceipt$1 {
}
declare const InvokeTransactionReceipt$1: {
    encode(_: InvokeTransactionReceipt$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeTransactionReceipt$1;
    fromJSON(_: any): InvokeTransactionReceipt$1;
    toJSON(_: InvokeTransactionReceipt$1): unknown;
    create(base?: DeepPartial$1<InvokeTransactionReceipt$1>): InvokeTransactionReceipt$1;
    fromPartial(_: DeepPartial$1<InvokeTransactionReceipt$1>): InvokeTransactionReceipt$1;
};
interface L1HandlerTransactionReceipt$1 {
    readonly messageHash?: Uint8Array | undefined;
}
declare const L1HandlerTransactionReceipt$1: {
    encode(message: L1HandlerTransactionReceipt$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): L1HandlerTransactionReceipt$1;
    fromJSON(object: any): L1HandlerTransactionReceipt$1;
    toJSON(message: L1HandlerTransactionReceipt$1): unknown;
    create(base?: DeepPartial$1<L1HandlerTransactionReceipt$1>): L1HandlerTransactionReceipt$1;
    fromPartial(object: DeepPartial$1<L1HandlerTransactionReceipt$1>): L1HandlerTransactionReceipt$1;
};
interface DeclareTransactionReceipt$1 {
}
declare const DeclareTransactionReceipt$1: {
    encode(_: DeclareTransactionReceipt$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeclareTransactionReceipt$1;
    fromJSON(_: any): DeclareTransactionReceipt$1;
    toJSON(_: DeclareTransactionReceipt$1): unknown;
    create(base?: DeepPartial$1<DeclareTransactionReceipt$1>): DeclareTransactionReceipt$1;
    fromPartial(_: DeepPartial$1<DeclareTransactionReceipt$1>): DeclareTransactionReceipt$1;
};
interface DeployTransactionReceipt$1 {
    readonly contractAddress?: FieldElement | undefined;
}
declare const DeployTransactionReceipt$1: {
    encode(message: DeployTransactionReceipt$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeployTransactionReceipt$1;
    fromJSON(object: any): DeployTransactionReceipt$1;
    toJSON(message: DeployTransactionReceipt$1): unknown;
    create(base?: DeepPartial$1<DeployTransactionReceipt$1>): DeployTransactionReceipt$1;
    fromPartial(object: DeepPartial$1<DeployTransactionReceipt$1>): DeployTransactionReceipt$1;
};
interface DeployAccountTransactionReceipt$1 {
    readonly contractAddress?: FieldElement | undefined;
}
declare const DeployAccountTransactionReceipt$1: {
    encode(message: DeployAccountTransactionReceipt$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeployAccountTransactionReceipt$1;
    fromJSON(object: any): DeployAccountTransactionReceipt$1;
    toJSON(message: DeployAccountTransactionReceipt$1): unknown;
    create(base?: DeepPartial$1<DeployAccountTransactionReceipt$1>): DeployAccountTransactionReceipt$1;
    fromPartial(object: DeepPartial$1<DeployAccountTransactionReceipt$1>): DeployAccountTransactionReceipt$1;
};
/** Transaction events. */
interface Event$1 {
    readonly filterIds?: readonly number[] | undefined;
    /** The contract that emitted the event. */
    readonly address?: FieldElement | undefined;
    /** The event keys. */
    readonly keys?: readonly FieldElement[] | undefined;
    /** The event data. */
    readonly data?: readonly FieldElement[] | undefined;
    /** The event index. */
    readonly eventIndex?: number | undefined;
    /** Transaction index. */
    readonly transactionIndex?: number | undefined;
    /** Transaction hash. */
    readonly transactionHash?: FieldElement | undefined;
    /** Transaction status. */
    readonly transactionStatus?: TransactionStatus$1 | undefined;
    /** Event index in the transaction. */
    readonly eventIndexInTransaction?: number | undefined;
}
declare const Event$1: {
    encode(message: Event$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event$1;
    fromJSON(object: any): Event$1;
    toJSON(message: Event$1): unknown;
    create(base?: DeepPartial$1<Event$1>): Event$1;
    fromPartial(object: DeepPartial$1<Event$1>): Event$1;
};
interface MessageToL1$1 {
    readonly filterIds?: readonly number[] | undefined;
    /** The contract sending the message. */
    readonly fromAddress?: FieldElement | undefined;
    /** Target address. */
    readonly toAddress?: FieldElement | undefined;
    /** Message payload. */
    readonly payload?: readonly FieldElement[] | undefined;
    /** Message index. */
    readonly messageIndex?: number | undefined;
    /** Transaction index. */
    readonly transactionIndex?: number | undefined;
    /** Transaction hash. */
    readonly transactionHash?: FieldElement | undefined;
    /** Transaction status. */
    readonly transactionStatus?: TransactionStatus$1 | undefined;
    /** Message index in the transaction. */
    readonly messageIndexInTransaction?: number | undefined;
}
declare const MessageToL1$1: {
    encode(message: MessageToL1$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageToL1$1;
    fromJSON(object: any): MessageToL1$1;
    toJSON(message: MessageToL1$1): unknown;
    create(base?: DeepPartial$1<MessageToL1$1>): MessageToL1$1;
    fromPartial(object: DeepPartial$1<MessageToL1$1>): MessageToL1$1;
};
/** Price of a unit of a resource. */
interface ResourcePrice$1 {
    /** Price in fri (10^-18 strk). */
    readonly priceInFri?: FieldElement | undefined;
    /** Price in wei (10^-18 eth). */
    readonly priceInWei?: FieldElement | undefined;
}
declare const ResourcePrice$1: {
    encode(message: ResourcePrice$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourcePrice$1;
    fromJSON(object: any): ResourcePrice$1;
    toJSON(message: ResourcePrice$1): unknown;
    create(base?: DeepPartial$1<ResourcePrice$1>): ResourcePrice$1;
    fromPartial(object: DeepPartial$1<ResourcePrice$1>): ResourcePrice$1;
};
/** A Starknet fee payment. */
interface FeePayment$1 {
    /** Amount paid. */
    readonly amount?: FieldElement | undefined;
    /** Unit of the amount. */
    readonly unit?: PriceUnit$1 | undefined;
}
declare const FeePayment$1: {
    encode(message: FeePayment$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeePayment$1;
    fromJSON(object: any): FeePayment$1;
    toJSON(message: FeePayment$1): unknown;
    create(base?: DeepPartial$1<FeePayment$1>): FeePayment$1;
    fromPartial(object: DeepPartial$1<FeePayment$1>): FeePayment$1;
};
/** Execution resources. */
interface ExecutionResources$1 {
    /** Computation resources. */
    readonly computation?: ComputationResources$1 | undefined;
    /** Data availability resources. */
    readonly dataAvailability?: DataAvailabilityResources$1 | undefined;
}
declare const ExecutionResources$1: {
    encode(message: ExecutionResources$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExecutionResources$1;
    fromJSON(object: any): ExecutionResources$1;
    toJSON(message: ExecutionResources$1): unknown;
    create(base?: DeepPartial$1<ExecutionResources$1>): ExecutionResources$1;
    fromPartial(object: DeepPartial$1<ExecutionResources$1>): ExecutionResources$1;
};
/** Computation resources. */
interface ComputationResources$1 {
    /** The number of Cairo steps used. */
    readonly steps?: bigint | undefined;
    /** The number of unused memory cells. */
    readonly memoryHoles?: bigint | undefined;
    /** The number of RANGE_CHECK builtin instances. */
    readonly rangeCheckBuiltinApplications?: bigint | undefined;
    /** The number of Pedersen builtin instances. */
    readonly pedersenBuiltinApplications?: bigint | undefined;
    /** The number of Poseidon builtin instances. */
    readonly poseidonBuiltinApplications?: bigint | undefined;
    /** The number of EC_OP builtin instances. */
    readonly ecOpBuiltinApplications?: bigint | undefined;
    /** The number of ECDSA builtin instances. */
    readonly ecdsaBuiltinApplications?: bigint | undefined;
    /** The number of BITWISE builtin instances. */
    readonly bitwiseBuiltinApplications?: bigint | undefined;
    /** The number of KECCAK builtin instances. */
    readonly keccakBuiltinApplications?: bigint | undefined;
    /** The number of accesses to the segment arena. */
    readonly segmentArenaBuiltin?: bigint | undefined;
}
declare const ComputationResources$1: {
    encode(message: ComputationResources$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ComputationResources$1;
    fromJSON(object: any): ComputationResources$1;
    toJSON(message: ComputationResources$1): unknown;
    create(base?: DeepPartial$1<ComputationResources$1>): ComputationResources$1;
    fromPartial(object: DeepPartial$1<ComputationResources$1>): ComputationResources$1;
};
interface DataAvailabilityResources$1 {
    /** The gas consumed by this transaction's data, 0 if it uses data gas for DA. */
    readonly l1Gas?: bigint | undefined;
    /** The data gas consumed by this transaction's data, 0 if it uses gas for DA. */
    readonly l1DataGas?: bigint | undefined;
}
declare const DataAvailabilityResources$1: {
    encode(message: DataAvailabilityResources$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataAvailabilityResources$1;
    fromJSON(object: any): DataAvailabilityResources$1;
    toJSON(message: DataAvailabilityResources$1): unknown;
    create(base?: DeepPartial$1<DataAvailabilityResources$1>): DataAvailabilityResources$1;
    fromPartial(object: DeepPartial$1<DataAvailabilityResources$1>): DataAvailabilityResources$1;
};
interface ResourceBoundsMapping$1 {
    /** Maximum amount and price of L1 gas. */
    readonly l1Gas?: ResourceBounds$1 | undefined;
    /** Maximum amount and price of L2 gas. */
    readonly l2Gas?: ResourceBounds$1 | undefined;
}
declare const ResourceBoundsMapping$1: {
    encode(message: ResourceBoundsMapping$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceBoundsMapping$1;
    fromJSON(object: any): ResourceBoundsMapping$1;
    toJSON(message: ResourceBoundsMapping$1): unknown;
    create(base?: DeepPartial$1<ResourceBoundsMapping$1>): ResourceBoundsMapping$1;
    fromPartial(object: DeepPartial$1<ResourceBoundsMapping$1>): ResourceBoundsMapping$1;
};
interface ResourceBounds$1 {
    /** The maximum amount of resources that can be consumed by a transaction. */
    readonly maxAmount?: bigint | undefined;
    /** / The max price per unit of resource. */
    readonly maxPricePerUnit?: Uint128 | undefined;
}
declare const ResourceBounds$1: {
    encode(message: ResourceBounds$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceBounds$1;
    fromJSON(object: any): ResourceBounds$1;
    toJSON(message: ResourceBounds$1): unknown;
    create(base?: DeepPartial$1<ResourceBounds$1>): ResourceBounds$1;
    fromPartial(object: DeepPartial$1<ResourceBounds$1>): ResourceBounds$1;
};
interface Uint128 {
    readonly x0?: bigint | undefined;
    readonly x1?: bigint | undefined;
}
declare const Uint128: {
    encode(message: Uint128, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Uint128;
    fromJSON(object: any): Uint128;
    toJSON(message: Uint128): unknown;
    create(base?: DeepPartial$1<Uint128>): Uint128;
    fromPartial(object: DeepPartial$1<Uint128>): Uint128;
};
/** Difference in storage values for a contract. */
interface StorageDiff$1 {
    readonly filterIds?: readonly number[] | undefined;
    /** The contract address. */
    readonly contractAddress?: FieldElement | undefined;
    /** Entries that changed. */
    readonly storageEntries?: readonly StorageEntry$1[] | undefined;
}
declare const StorageDiff$1: {
    encode(message: StorageDiff$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StorageDiff$1;
    fromJSON(object: any): StorageDiff$1;
    toJSON(message: StorageDiff$1): unknown;
    create(base?: DeepPartial$1<StorageDiff$1>): StorageDiff$1;
    fromPartial(object: DeepPartial$1<StorageDiff$1>): StorageDiff$1;
};
/** Storage entry. */
interface StorageEntry$1 {
    /** Storage location. */
    readonly key?: FieldElement | undefined;
    /** Storage value. */
    readonly value?: FieldElement | undefined;
}
declare const StorageEntry$1: {
    encode(message: StorageEntry$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StorageEntry$1;
    fromJSON(object: any): StorageEntry$1;
    toJSON(message: StorageEntry$1): unknown;
    create(base?: DeepPartial$1<StorageEntry$1>): StorageEntry$1;
    fromPartial(object: DeepPartial$1<StorageEntry$1>): StorageEntry$1;
};
/** A class/contract change. */
interface ContractChange$1 {
    readonly filterIds?: readonly number[] | undefined;
    readonly change?: {
        readonly $case: "declaredClass";
        readonly declaredClass: DeclaredClass$1;
    } | {
        readonly $case: "replacedClass";
        readonly replacedClass: ReplacedClass$1;
    } | {
        readonly $case: "deployedContract";
        readonly deployedContract: DeployedContract$1;
    } | undefined;
}
declare const ContractChange$1: {
    encode(message: ContractChange$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractChange$1;
    fromJSON(object: any): ContractChange$1;
    toJSON(message: ContractChange$1): unknown;
    create(base?: DeepPartial$1<ContractChange$1>): ContractChange$1;
    fromPartial(object: DeepPartial$1<ContractChange$1>): ContractChange$1;
};
/** Class declared. */
interface DeclaredClass$1 {
    /** Class hash of the newly declared class. */
    readonly classHash?: FieldElement | undefined;
    /**
     * Hash of the cairo assembly resulting from the sierra compilation.
     *
     * If undefined, it's the result of a deprecated Cairo 0 declaration.
     */
    readonly compiledClassHash?: FieldElement | undefined;
}
declare const DeclaredClass$1: {
    encode(message: DeclaredClass$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeclaredClass$1;
    fromJSON(object: any): DeclaredClass$1;
    toJSON(message: DeclaredClass$1): unknown;
    create(base?: DeepPartial$1<DeclaredClass$1>): DeclaredClass$1;
    fromPartial(object: DeepPartial$1<DeclaredClass$1>): DeclaredClass$1;
};
/** Class replaced. */
interface ReplacedClass$1 {
    /** The address of the contract whose class was replaced. */
    readonly contractAddress?: FieldElement | undefined;
    /** The new class hash. */
    readonly classHash?: FieldElement | undefined;
}
declare const ReplacedClass$1: {
    encode(message: ReplacedClass$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReplacedClass$1;
    fromJSON(object: any): ReplacedClass$1;
    toJSON(message: ReplacedClass$1): unknown;
    create(base?: DeepPartial$1<ReplacedClass$1>): ReplacedClass$1;
    fromPartial(object: DeepPartial$1<ReplacedClass$1>): ReplacedClass$1;
};
/** Contract deployed. */
interface DeployedContract$1 {
    /** Address of the newly deployed contract. */
    readonly contractAddress?: FieldElement | undefined;
    /** Class hash of the deployed contract. */
    readonly classHash?: FieldElement | undefined;
}
declare const DeployedContract$1: {
    encode(message: DeployedContract$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeployedContract$1;
    fromJSON(object: any): DeployedContract$1;
    toJSON(message: DeployedContract$1): unknown;
    create(base?: DeepPartial$1<DeployedContract$1>): DeployedContract$1;
    fromPartial(object: DeepPartial$1<DeployedContract$1>): DeployedContract$1;
};
/** Nonce update. */
interface NonceUpdate$1 {
    readonly filterIds?: readonly number[] | undefined;
    /** Contract address. */
    readonly contractAddress?: FieldElement | undefined;
    /** New nonce value. */
    readonly nonce?: FieldElement | undefined;
}
declare const NonceUpdate$1: {
    encode(message: NonceUpdate$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NonceUpdate$1;
    fromJSON(object: any): NonceUpdate$1;
    toJSON(message: NonceUpdate$1): unknown;
    create(base?: DeepPartial$1<NonceUpdate$1>): NonceUpdate$1;
    fromPartial(object: DeepPartial$1<NonceUpdate$1>): NonceUpdate$1;
};
interface TransactionTrace$1 {
    readonly filterIds?: readonly number[] | undefined;
    /** Index of the transaction in the block. */
    readonly transactionIndex?: number | undefined;
    /** Transaction hash. */
    readonly transactionHash?: FieldElement | undefined;
    readonly traceRoot?: {
        readonly $case: "invoke";
        readonly invoke: InvokeTransactionTrace$1;
    } | {
        readonly $case: "declare";
        readonly declare: DeclareTransactionTrace$1;
    } | {
        readonly $case: "deployAccount";
        readonly deployAccount: DeployAccountTransactionTrace$1;
    } | {
        readonly $case: "l1Handler";
        readonly l1Handler: L1HandlerTransactionTrace$1;
    } | undefined;
}
declare const TransactionTrace$1: {
    encode(message: TransactionTrace$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionTrace$1;
    fromJSON(object: any): TransactionTrace$1;
    toJSON(message: TransactionTrace$1): unknown;
    create(base?: DeepPartial$1<TransactionTrace$1>): TransactionTrace$1;
    fromPartial(object: DeepPartial$1<TransactionTrace$1>): TransactionTrace$1;
};
interface InvokeTransactionTrace$1 {
    readonly validateInvocation?: FunctionInvocation$1 | undefined;
    readonly executeInvocation?: {
        readonly $case: "success";
        readonly success: FunctionInvocation$1;
    } | {
        readonly $case: "reverted";
        readonly reverted: ExecutionReverted$1;
    } | undefined;
    readonly feeTransferInvocation?: FunctionInvocation$1 | undefined;
}
declare const InvokeTransactionTrace$1: {
    encode(message: InvokeTransactionTrace$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeTransactionTrace$1;
    fromJSON(object: any): InvokeTransactionTrace$1;
    toJSON(message: InvokeTransactionTrace$1): unknown;
    create(base?: DeepPartial$1<InvokeTransactionTrace$1>): InvokeTransactionTrace$1;
    fromPartial(object: DeepPartial$1<InvokeTransactionTrace$1>): InvokeTransactionTrace$1;
};
interface DeclareTransactionTrace$1 {
    readonly validateInvocation?: FunctionInvocation$1 | undefined;
    readonly feeTransferInvocation?: FunctionInvocation$1 | undefined;
}
declare const DeclareTransactionTrace$1: {
    encode(message: DeclareTransactionTrace$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeclareTransactionTrace$1;
    fromJSON(object: any): DeclareTransactionTrace$1;
    toJSON(message: DeclareTransactionTrace$1): unknown;
    create(base?: DeepPartial$1<DeclareTransactionTrace$1>): DeclareTransactionTrace$1;
    fromPartial(object: DeepPartial$1<DeclareTransactionTrace$1>): DeclareTransactionTrace$1;
};
interface DeployAccountTransactionTrace$1 {
    readonly validateInvocation?: FunctionInvocation$1 | undefined;
    readonly constructorInvocation?: FunctionInvocation$1 | undefined;
    readonly feeTransferInvocation?: FunctionInvocation$1 | undefined;
}
declare const DeployAccountTransactionTrace$1: {
    encode(message: DeployAccountTransactionTrace$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeployAccountTransactionTrace$1;
    fromJSON(object: any): DeployAccountTransactionTrace$1;
    toJSON(message: DeployAccountTransactionTrace$1): unknown;
    create(base?: DeepPartial$1<DeployAccountTransactionTrace$1>): DeployAccountTransactionTrace$1;
    fromPartial(object: DeepPartial$1<DeployAccountTransactionTrace$1>): DeployAccountTransactionTrace$1;
};
interface L1HandlerTransactionTrace$1 {
    readonly functionInvocation?: FunctionInvocation$1 | undefined;
}
declare const L1HandlerTransactionTrace$1: {
    encode(message: L1HandlerTransactionTrace$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): L1HandlerTransactionTrace$1;
    fromJSON(object: any): L1HandlerTransactionTrace$1;
    toJSON(message: L1HandlerTransactionTrace$1): unknown;
    create(base?: DeepPartial$1<L1HandlerTransactionTrace$1>): L1HandlerTransactionTrace$1;
    fromPartial(object: DeepPartial$1<L1HandlerTransactionTrace$1>): L1HandlerTransactionTrace$1;
};
interface FunctionInvocation$1 {
    readonly contractAddress?: FieldElement | undefined;
    readonly entryPointSelector?: FieldElement | undefined;
    readonly calldata?: readonly FieldElement[] | undefined;
    readonly callerAddress?: FieldElement | undefined;
    readonly classHash?: FieldElement | undefined;
    readonly callType?: CallType$1 | undefined;
    readonly result?: readonly FieldElement[] | undefined;
    readonly calls?: readonly FunctionInvocation$1[] | undefined;
    readonly events?: readonly number[] | undefined;
    readonly messages?: readonly number[] | undefined;
}
declare const FunctionInvocation$1: {
    encode(message: FunctionInvocation$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionInvocation$1;
    fromJSON(object: any): FunctionInvocation$1;
    toJSON(message: FunctionInvocation$1): unknown;
    create(base?: DeepPartial$1<FunctionInvocation$1>): FunctionInvocation$1;
    fromPartial(object: DeepPartial$1<FunctionInvocation$1>): FunctionInvocation$1;
};
interface FunctionCall {
    readonly contractAddress?: FieldElement | undefined;
    readonly entryPointSelector?: FieldElement | undefined;
    readonly calldata?: readonly FieldElement[] | undefined;
}
declare const FunctionCall: {
    encode(message: FunctionCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionCall;
    fromJSON(object: any): FunctionCall;
    toJSON(message: FunctionCall): unknown;
    create(base?: DeepPartial$1<FunctionCall>): FunctionCall;
    fromPartial(object: DeepPartial$1<FunctionCall>): FunctionCall;
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

type data_ExecutionStatus = ExecutionStatus;
declare const data_ExecutionStatus: typeof ExecutionStatus;
declare const data_FunctionCall: typeof FunctionCall;
declare const data_Uint128: typeof Uint128;
declare const data_callTypeFromJSON: typeof callTypeFromJSON;
declare const data_callTypeToJSON: typeof callTypeToJSON;
declare const data_dataAvailabilityModeFromJSON: typeof dataAvailabilityModeFromJSON;
declare const data_dataAvailabilityModeToJSON: typeof dataAvailabilityModeToJSON;
declare const data_executionStatusFromJSON: typeof executionStatusFromJSON;
declare const data_executionStatusToJSON: typeof executionStatusToJSON;
declare const data_l1DataAvailabilityModeFromJSON: typeof l1DataAvailabilityModeFromJSON;
declare const data_l1DataAvailabilityModeToJSON: typeof l1DataAvailabilityModeToJSON;
declare const data_priceUnitFromJSON: typeof priceUnitFromJSON;
declare const data_priceUnitToJSON: typeof priceUnitToJSON;
declare const data_transactionStatusFromJSON: typeof transactionStatusFromJSON;
declare const data_transactionStatusToJSON: typeof transactionStatusToJSON;
declare namespace data {
  export { Block$1 as Block, BlockHeader$1 as BlockHeader, CallType$1 as CallType, ComputationResources$1 as ComputationResources, ContractChange$1 as ContractChange, DataAvailabilityMode$1 as DataAvailabilityMode, DataAvailabilityResources$1 as DataAvailabilityResources, DeclareTransactionReceipt$1 as DeclareTransactionReceipt, DeclareTransactionTrace$1 as DeclareTransactionTrace, DeclareTransactionV0$1 as DeclareTransactionV0, DeclareTransactionV1$1 as DeclareTransactionV1, DeclareTransactionV2$1 as DeclareTransactionV2, DeclareTransactionV3$1 as DeclareTransactionV3, DeclaredClass$1 as DeclaredClass, type DeepPartial$1 as DeepPartial, DeployAccountTransactionReceipt$1 as DeployAccountTransactionReceipt, DeployAccountTransactionTrace$1 as DeployAccountTransactionTrace, DeployAccountTransactionV1$1 as DeployAccountTransactionV1, DeployAccountTransactionV3$1 as DeployAccountTransactionV3, DeployTransaction$1 as DeployTransaction, DeployTransactionReceipt$1 as DeployTransactionReceipt, DeployedContract$1 as DeployedContract, Event$1 as Event, ExecutionResources$1 as ExecutionResources, ExecutionReverted$1 as ExecutionReverted, data_ExecutionStatus as ExecutionStatus, ExecutionSucceeded$1 as ExecutionSucceeded, FeePayment$1 as FeePayment, data_FunctionCall as FunctionCall, FunctionInvocation$1 as FunctionInvocation, InvokeTransactionReceipt$1 as InvokeTransactionReceipt, InvokeTransactionTrace$1 as InvokeTransactionTrace, InvokeTransactionV0$1 as InvokeTransactionV0, InvokeTransactionV1$1 as InvokeTransactionV1, InvokeTransactionV3$1 as InvokeTransactionV3, L1DataAvailabilityMode$1 as L1DataAvailabilityMode, L1HandlerTransaction$1 as L1HandlerTransaction, L1HandlerTransactionReceipt$1 as L1HandlerTransactionReceipt, L1HandlerTransactionTrace$1 as L1HandlerTransactionTrace, MessageToL1$1 as MessageToL1, NonceUpdate$1 as NonceUpdate, PriceUnit$1 as PriceUnit, ReplacedClass$1 as ReplacedClass, ResourceBounds$1 as ResourceBounds, ResourceBoundsMapping$1 as ResourceBoundsMapping, ResourcePrice$1 as ResourcePrice, StorageDiff$1 as StorageDiff, StorageEntry$1 as StorageEntry, Transaction$1 as Transaction, TransactionMeta$1 as TransactionMeta, TransactionReceipt$1 as TransactionReceipt, TransactionReceiptMeta$1 as TransactionReceiptMeta, TransactionStatus$1 as TransactionStatus, TransactionTrace$1 as TransactionTrace, data_Uint128 as Uint128, data_callTypeFromJSON as callTypeFromJSON, data_callTypeToJSON as callTypeToJSON, data_dataAvailabilityModeFromJSON as dataAvailabilityModeFromJSON, data_dataAvailabilityModeToJSON as dataAvailabilityModeToJSON, data_executionStatusFromJSON as executionStatusFromJSON, data_executionStatusToJSON as executionStatusToJSON, data_l1DataAvailabilityModeFromJSON as l1DataAvailabilityModeFromJSON, data_l1DataAvailabilityModeToJSON as l1DataAvailabilityModeToJSON, data_priceUnitFromJSON as priceUnitFromJSON, data_priceUnitToJSON as priceUnitToJSON, protobufPackage$1 as protobufPackage, data_transactionStatusFromJSON as transactionStatusFromJSON, data_transactionStatusToJSON as transactionStatusToJSON };
}

declare const protobufPackage = "starknet.v2";
/** Starknet DNA definitions (filter). */
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
    /** Filter transactions. */
    readonly transactions?: readonly TransactionFilter$1[] | undefined;
    /** Filter events. */
    readonly events?: readonly EventFilter$1[] | undefined;
    /** Filter messages to L1. */
    readonly messages?: readonly MessageToL1Filter$1[] | undefined;
    /** Filter storage diffs. */
    readonly storageDiffs?: readonly StorageDiffFilter$1[] | undefined;
    /** Filter contract changes. */
    readonly contractChanges?: readonly ContractChangeFilter$1[] | undefined;
    /** Filter nonce updates. */
    readonly nonceUpdates?: readonly NonceUpdateFilter$1[] | undefined;
}
declare const Filter$1: {
    encode(message: Filter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Filter$1;
    fromJSON(object: any): Filter$1;
    toJSON(message: Filter$1): unknown;
    create(base?: DeepPartial<Filter$1>): Filter$1;
    fromPartial(object: DeepPartial<Filter$1>): Filter$1;
};
/** Filter events. */
interface EventFilter$1 {
    readonly id?: number | undefined;
    /** Filter by contract emitting the event. */
    readonly address?: FieldElement | undefined;
    /** Filter keys that prefix-match the given data. */
    readonly keys?: readonly Key$1[] | undefined;
    /**
     * Only returns events with keys of exactly the same length as the filter.
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
    /**
     * Include the transaction that emitted the event.
     *
     * Defaults to false.
     */
    readonly includeTransaction?: boolean | undefined;
    /**
     * Include the receipt of the transaction that emitted the event.
     *
     * Defaults to false.
     */
    readonly includeReceipt?: boolean | undefined;
    /**
     * Include the messages to L1 sent by the transaction that emitted the event.
     *
     * Defaults to false.
     */
    readonly includeMessages?: boolean | undefined;
    /**
     * Include sibling events, that is events emitted by the same transaction.
     *
     * Defaults to false.
     */
    readonly includeSiblings?: boolean | undefined;
    /**
     * Include the trace of the transaction that emitted the event.
     *
     * Defaults to false.
     */
    readonly includeTransactionTrace?: boolean | undefined;
}
declare const EventFilter$1: {
    encode(message: EventFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventFilter$1;
    fromJSON(object: any): EventFilter$1;
    toJSON(message: EventFilter$1): unknown;
    create(base?: DeepPartial<EventFilter$1>): EventFilter$1;
    fromPartial(object: DeepPartial<EventFilter$1>): EventFilter$1;
};
interface Key$1 {
    /** The event key. If empty, matches any event key. */
    readonly value?: FieldElement | undefined;
}
declare const Key$1: {
    encode(message: Key$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Key$1;
    fromJSON(object: any): Key$1;
    toJSON(message: Key$1): unknown;
    create(base?: DeepPartial<Key$1>): Key$1;
    fromPartial(object: DeepPartial<Key$1>): Key$1;
};
/** Filter messages to L1. */
interface MessageToL1Filter$1 {
    readonly id?: number | undefined;
    /** Filter by sender address. */
    readonly fromAddress?: FieldElement | undefined;
    /** Filter by destination address. */
    readonly toAddress?: FieldElement | undefined;
    /**
     * Filter based on the transaction status.
     *
     * Defaults to `Succeeded`.
     */
    readonly transactionStatus?: TransactionStatusFilter$1 | undefined;
    /**
     * Include the transaction that sent the message.
     *
     * Defaults to false.
     */
    readonly includeTransaction?: boolean | undefined;
    /**
     * Include the receipt of the transaction that sent the message.
     *
     * Defaults to false.
     */
    readonly includeReceipt?: boolean | undefined;
    /**
     * Include the events of the transaction that sent the message.
     *
     * Defaults to false.
     */
    readonly includeEvents?: boolean | undefined;
    /**
     * Include the messages of the transaction that sent the message.
     *
     * Defaults to false.
     */
    readonly includeSiblings?: boolean | undefined;
    /**
     * Include the trace of the transaction that sent the message.
     *
     * Defaults to false.
     */
    readonly includeTransactionTrace?: boolean | undefined;
}
declare const MessageToL1Filter$1: {
    encode(message: MessageToL1Filter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageToL1Filter$1;
    fromJSON(object: any): MessageToL1Filter$1;
    toJSON(message: MessageToL1Filter$1): unknown;
    create(base?: DeepPartial<MessageToL1Filter$1>): MessageToL1Filter$1;
    fromPartial(object: DeepPartial<MessageToL1Filter$1>): MessageToL1Filter$1;
};
/** Filter transactions. */
interface TransactionFilter$1 {
    readonly id?: number | undefined;
    /**
     * Filter based on the transaction status.
     *
     * Defaults to `Succeeded`.
     */
    readonly transactionStatus?: TransactionStatusFilter$1 | undefined;
    /**
     * Flag to request the transaction's receipt.
     *
     * Defaults to `false`.
     */
    readonly includeReceipt?: boolean | undefined;
    /**
     * Flag to request the transaction's events.
     *
     * Defaults to `false`.
     */
    readonly includeEvents?: boolean | undefined;
    /**
     * Flag to request the transaction's messages to L1.
     *
     * Defaults to `false`.
     */
    readonly includeMessages?: boolean | undefined;
    readonly inner?: {
        readonly $case: "invokeV0";
        readonly invokeV0: InvokeTransactionV0Filter$1;
    } | {
        readonly $case: "invokeV1";
        readonly invokeV1: InvokeTransactionV1Filter$1;
    } | {
        readonly $case: "invokeV3";
        readonly invokeV3: InvokeTransactionV3Filter$1;
    } | {
        readonly $case: "deploy";
        readonly deploy: DeployTransactionFilter$1;
    } | {
        readonly $case: "declareV0";
        readonly declareV0: DeclareV0TransactionFilter$1;
    } | {
        readonly $case: "declareV1";
        readonly declareV1: DeclareV1TransactionFilter$1;
    } | {
        readonly $case: "declareV2";
        readonly declareV2: DeclareV2TransactionFilter$1;
    } | {
        readonly $case: "declareV3";
        readonly declareV3: DeclareV3TransactionFilter$1;
    } | {
        readonly $case: "l1Handler";
        readonly l1Handler: L1HandlerTransactionFilter$1;
    } | {
        readonly $case: "deployAccountV1";
        readonly deployAccountV1: DeployAccountV1TransactionFilter$1;
    } | {
        readonly $case: "deployAccountV3";
        readonly deployAccountV3: DeployAccountV3TransactionFilter$1;
    } | undefined;
    /**
     * Flag to request the transaction's trace.
     *
     * Defaults to `false``.
     */
    readonly includeTrace?: boolean | undefined;
}
declare const TransactionFilter$1: {
    encode(message: TransactionFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionFilter$1;
    fromJSON(object: any): TransactionFilter$1;
    toJSON(message: TransactionFilter$1): unknown;
    create(base?: DeepPartial<TransactionFilter$1>): TransactionFilter$1;
    fromPartial(object: DeepPartial<TransactionFilter$1>): TransactionFilter$1;
};
interface InvokeTransactionV0Filter$1 {
}
declare const InvokeTransactionV0Filter$1: {
    encode(_: InvokeTransactionV0Filter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeTransactionV0Filter$1;
    fromJSON(_: any): InvokeTransactionV0Filter$1;
    toJSON(_: InvokeTransactionV0Filter$1): unknown;
    create(base?: DeepPartial<InvokeTransactionV0Filter$1>): InvokeTransactionV0Filter$1;
    fromPartial(_: DeepPartial<InvokeTransactionV0Filter$1>): InvokeTransactionV0Filter$1;
};
interface InvokeTransactionV1Filter$1 {
}
declare const InvokeTransactionV1Filter$1: {
    encode(_: InvokeTransactionV1Filter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeTransactionV1Filter$1;
    fromJSON(_: any): InvokeTransactionV1Filter$1;
    toJSON(_: InvokeTransactionV1Filter$1): unknown;
    create(base?: DeepPartial<InvokeTransactionV1Filter$1>): InvokeTransactionV1Filter$1;
    fromPartial(_: DeepPartial<InvokeTransactionV1Filter$1>): InvokeTransactionV1Filter$1;
};
interface InvokeTransactionV3Filter$1 {
}
declare const InvokeTransactionV3Filter$1: {
    encode(_: InvokeTransactionV3Filter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvokeTransactionV3Filter$1;
    fromJSON(_: any): InvokeTransactionV3Filter$1;
    toJSON(_: InvokeTransactionV3Filter$1): unknown;
    create(base?: DeepPartial<InvokeTransactionV3Filter$1>): InvokeTransactionV3Filter$1;
    fromPartial(_: DeepPartial<InvokeTransactionV3Filter$1>): InvokeTransactionV3Filter$1;
};
interface DeployTransactionFilter$1 {
}
declare const DeployTransactionFilter$1: {
    encode(_: DeployTransactionFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeployTransactionFilter$1;
    fromJSON(_: any): DeployTransactionFilter$1;
    toJSON(_: DeployTransactionFilter$1): unknown;
    create(base?: DeepPartial<DeployTransactionFilter$1>): DeployTransactionFilter$1;
    fromPartial(_: DeepPartial<DeployTransactionFilter$1>): DeployTransactionFilter$1;
};
interface DeclareV0TransactionFilter$1 {
}
declare const DeclareV0TransactionFilter$1: {
    encode(_: DeclareV0TransactionFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeclareV0TransactionFilter$1;
    fromJSON(_: any): DeclareV0TransactionFilter$1;
    toJSON(_: DeclareV0TransactionFilter$1): unknown;
    create(base?: DeepPartial<DeclareV0TransactionFilter$1>): DeclareV0TransactionFilter$1;
    fromPartial(_: DeepPartial<DeclareV0TransactionFilter$1>): DeclareV0TransactionFilter$1;
};
interface DeclareV1TransactionFilter$1 {
}
declare const DeclareV1TransactionFilter$1: {
    encode(_: DeclareV1TransactionFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeclareV1TransactionFilter$1;
    fromJSON(_: any): DeclareV1TransactionFilter$1;
    toJSON(_: DeclareV1TransactionFilter$1): unknown;
    create(base?: DeepPartial<DeclareV1TransactionFilter$1>): DeclareV1TransactionFilter$1;
    fromPartial(_: DeepPartial<DeclareV1TransactionFilter$1>): DeclareV1TransactionFilter$1;
};
interface DeclareV2TransactionFilter$1 {
}
declare const DeclareV2TransactionFilter$1: {
    encode(_: DeclareV2TransactionFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeclareV2TransactionFilter$1;
    fromJSON(_: any): DeclareV2TransactionFilter$1;
    toJSON(_: DeclareV2TransactionFilter$1): unknown;
    create(base?: DeepPartial<DeclareV2TransactionFilter$1>): DeclareV2TransactionFilter$1;
    fromPartial(_: DeepPartial<DeclareV2TransactionFilter$1>): DeclareV2TransactionFilter$1;
};
interface DeclareV3TransactionFilter$1 {
}
declare const DeclareV3TransactionFilter$1: {
    encode(_: DeclareV3TransactionFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeclareV3TransactionFilter$1;
    fromJSON(_: any): DeclareV3TransactionFilter$1;
    toJSON(_: DeclareV3TransactionFilter$1): unknown;
    create(base?: DeepPartial<DeclareV3TransactionFilter$1>): DeclareV3TransactionFilter$1;
    fromPartial(_: DeepPartial<DeclareV3TransactionFilter$1>): DeclareV3TransactionFilter$1;
};
interface L1HandlerTransactionFilter$1 {
}
declare const L1HandlerTransactionFilter$1: {
    encode(_: L1HandlerTransactionFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): L1HandlerTransactionFilter$1;
    fromJSON(_: any): L1HandlerTransactionFilter$1;
    toJSON(_: L1HandlerTransactionFilter$1): unknown;
    create(base?: DeepPartial<L1HandlerTransactionFilter$1>): L1HandlerTransactionFilter$1;
    fromPartial(_: DeepPartial<L1HandlerTransactionFilter$1>): L1HandlerTransactionFilter$1;
};
interface DeployAccountV1TransactionFilter$1 {
}
declare const DeployAccountV1TransactionFilter$1: {
    encode(_: DeployAccountV1TransactionFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeployAccountV1TransactionFilter$1;
    fromJSON(_: any): DeployAccountV1TransactionFilter$1;
    toJSON(_: DeployAccountV1TransactionFilter$1): unknown;
    create(base?: DeepPartial<DeployAccountV1TransactionFilter$1>): DeployAccountV1TransactionFilter$1;
    fromPartial(_: DeepPartial<DeployAccountV1TransactionFilter$1>): DeployAccountV1TransactionFilter$1;
};
interface DeployAccountV3TransactionFilter$1 {
}
declare const DeployAccountV3TransactionFilter$1: {
    encode(_: DeployAccountV3TransactionFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeployAccountV3TransactionFilter$1;
    fromJSON(_: any): DeployAccountV3TransactionFilter$1;
    toJSON(_: DeployAccountV3TransactionFilter$1): unknown;
    create(base?: DeepPartial<DeployAccountV3TransactionFilter$1>): DeployAccountV3TransactionFilter$1;
    fromPartial(_: DeepPartial<DeployAccountV3TransactionFilter$1>): DeployAccountV3TransactionFilter$1;
};
interface StorageDiffFilter$1 {
    readonly id?: number | undefined;
    /** Filter by contract address. */
    readonly contractAddress?: FieldElement | undefined;
}
declare const StorageDiffFilter$1: {
    encode(message: StorageDiffFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StorageDiffFilter$1;
    fromJSON(object: any): StorageDiffFilter$1;
    toJSON(message: StorageDiffFilter$1): unknown;
    create(base?: DeepPartial<StorageDiffFilter$1>): StorageDiffFilter$1;
    fromPartial(object: DeepPartial<StorageDiffFilter$1>): StorageDiffFilter$1;
};
interface ContractChangeFilter$1 {
    readonly id?: number | undefined;
    readonly change?: {
        readonly $case: "declaredClass";
        readonly declaredClass: DeclaredClassFilter$1;
    } | {
        readonly $case: "replacedClass";
        readonly replacedClass: ReplacedClassFilter$1;
    } | {
        readonly $case: "deployedContract";
        readonly deployedContract: DeployedContractFilter$1;
    } | undefined;
}
declare const ContractChangeFilter$1: {
    encode(message: ContractChangeFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractChangeFilter$1;
    fromJSON(object: any): ContractChangeFilter$1;
    toJSON(message: ContractChangeFilter$1): unknown;
    create(base?: DeepPartial<ContractChangeFilter$1>): ContractChangeFilter$1;
    fromPartial(object: DeepPartial<ContractChangeFilter$1>): ContractChangeFilter$1;
};
interface DeclaredClassFilter$1 {
}
declare const DeclaredClassFilter$1: {
    encode(_: DeclaredClassFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeclaredClassFilter$1;
    fromJSON(_: any): DeclaredClassFilter$1;
    toJSON(_: DeclaredClassFilter$1): unknown;
    create(base?: DeepPartial<DeclaredClassFilter$1>): DeclaredClassFilter$1;
    fromPartial(_: DeepPartial<DeclaredClassFilter$1>): DeclaredClassFilter$1;
};
interface ReplacedClassFilter$1 {
}
declare const ReplacedClassFilter$1: {
    encode(_: ReplacedClassFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReplacedClassFilter$1;
    fromJSON(_: any): ReplacedClassFilter$1;
    toJSON(_: ReplacedClassFilter$1): unknown;
    create(base?: DeepPartial<ReplacedClassFilter$1>): ReplacedClassFilter$1;
    fromPartial(_: DeepPartial<ReplacedClassFilter$1>): ReplacedClassFilter$1;
};
interface DeployedContractFilter$1 {
}
declare const DeployedContractFilter$1: {
    encode(_: DeployedContractFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeployedContractFilter$1;
    fromJSON(_: any): DeployedContractFilter$1;
    toJSON(_: DeployedContractFilter$1): unknown;
    create(base?: DeepPartial<DeployedContractFilter$1>): DeployedContractFilter$1;
    fromPartial(_: DeepPartial<DeployedContractFilter$1>): DeployedContractFilter$1;
};
interface NonceUpdateFilter$1 {
    readonly id?: number | undefined;
    /** Filter by contract address. */
    readonly contractAddress?: FieldElement | undefined;
}
declare const NonceUpdateFilter$1: {
    encode(message: NonceUpdateFilter$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NonceUpdateFilter$1;
    fromJSON(object: any): NonceUpdateFilter$1;
    toJSON(message: NonceUpdateFilter$1): unknown;
    create(base?: DeepPartial<NonceUpdateFilter$1>): NonceUpdateFilter$1;
    fromPartial(object: DeepPartial<NonceUpdateFilter$1>): NonceUpdateFilter$1;
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
  export { ContractChangeFilter$1 as ContractChangeFilter, DeclareV0TransactionFilter$1 as DeclareV0TransactionFilter, DeclareV1TransactionFilter$1 as DeclareV1TransactionFilter, DeclareV2TransactionFilter$1 as DeclareV2TransactionFilter, DeclareV3TransactionFilter$1 as DeclareV3TransactionFilter, DeclaredClassFilter$1 as DeclaredClassFilter, type filter_DeepPartial as DeepPartial, DeployAccountV1TransactionFilter$1 as DeployAccountV1TransactionFilter, DeployAccountV3TransactionFilter$1 as DeployAccountV3TransactionFilter, DeployTransactionFilter$1 as DeployTransactionFilter, DeployedContractFilter$1 as DeployedContractFilter, EventFilter$1 as EventFilter, Filter$1 as Filter, HeaderFilter$1 as HeaderFilter, InvokeTransactionV0Filter$1 as InvokeTransactionV0Filter, InvokeTransactionV1Filter$1 as InvokeTransactionV1Filter, InvokeTransactionV3Filter$1 as InvokeTransactionV3Filter, Key$1 as Key, L1HandlerTransactionFilter$1 as L1HandlerTransactionFilter, MessageToL1Filter$1 as MessageToL1Filter, NonceUpdateFilter$1 as NonceUpdateFilter, ReplacedClassFilter$1 as ReplacedClassFilter, StorageDiffFilter$1 as StorageDiffFilter, TransactionFilter$1 as TransactionFilter, TransactionStatusFilter$1 as TransactionStatusFilter, filter_headerFilterFromJSON as headerFilterFromJSON, filter_headerFilterToJSON as headerFilterToJSON, filter_protobufPackage as protobufPackage, filter_transactionStatusFilterFromJSON as transactionStatusFilterFromJSON, filter_transactionStatusFilterToJSON as transactionStatusFilterToJSON };
}

declare const index_common: typeof common;
declare const index_data: typeof data;
declare const index_filter: typeof filter;
declare namespace index {
  export { index_common as common, index_data as data, index_filter as filter };
}

/** Price of a unit of resource.
 *
 * @prop priceInFri The price in Fri (1e-18 STRK).
 * @prop priceInWei The price in Wei (1e-18 ETH).
 */
declare const ResourcePrice: MessageCodec<{
    priceInFri: Codec<`0x${string}` | undefined, FieldElement | undefined>;
    priceInWei: Codec<`0x${string}` | undefined, FieldElement | undefined>;
}>;
type ResourcePrice = Readonly<CodecType<typeof ResourcePrice>>;
/** How data is posted to L1. */
declare const L1DataAvailabilityMode: Codec<"blob" | "calldata" | "unknown", L1DataAvailabilityMode$1>;
type L1DataAvailabilityMode = CodecType<typeof L1DataAvailabilityMode>;
/** Status of a transaction. */
declare const TransactionStatus: Codec<"unknown" | "succeeded" | "reverted", TransactionStatus$1>;
type TransactionStatus = CodecType<typeof TransactionStatus>;
/** 128-bit unsigned integer. */
declare const U128: Codec<bigint, Uint128>;
type U128 = CodecType<typeof U128>;
/** Resource bounds. */
declare const ResourceBounds: MessageCodec<{
    maxAmount: Codec<bigint, bigint | undefined>;
    maxPricePerUnit: Codec<bigint, Uint128 | undefined>;
}>;
type ResourceBounds = Readonly<CodecType<typeof ResourceBounds>>;
/** Resource bounds mapping. */
declare const ResourceBoundsMapping: MessageCodec<{
    l1Gas: Codec<{
        maxAmount: bigint;
        maxPricePerUnit: bigint;
    }, {
        maxAmount?: bigint | undefined;
        maxPricePerUnit?: Uint128 | undefined;
    } | undefined>;
    l2Gas: Codec<{
        maxAmount: bigint;
        maxPricePerUnit: bigint;
    }, {
        maxAmount?: bigint | undefined;
        maxPricePerUnit?: Uint128 | undefined;
    } | undefined>;
}>;
type ResourceBoundsMapping = Readonly<CodecType<typeof ResourceBoundsMapping>>;
/** Data availability mode. */
declare const DataAvailabilityMode: Codec<"l1" | "l2" | "unknown", DataAvailabilityMode$1>;
type DataAvailabilityMode = CodecType<typeof DataAvailabilityMode>;
/** Starknet block header.
 *
 * @prop blockHash The hash of the block.
 * @prop parentBlockHash The hash of the parent block.
 * @prop blockNumber The block number.
 * @prop sequencerAddress The address of the sequencer.
 * @prop newRoot The new state root.
 * @prop timestamp The block timestamp.
 * @prop starknetVersion The Starknet version string.
 * @prop l1GasPrice Calldata gas price.
 * @prop l1DataGasPrice Blob gas price.
 * @prop l1DataAvailabilityMode How data is posted to L1.
 */
declare const BlockHeader: MessageCodec<{
    blockHash: Codec<`0x${string}` | undefined, FieldElement | undefined>;
    parentBlockHash: Codec<`0x${string}`, FieldElement | undefined>;
    blockNumber: Codec<bigint, bigint | undefined>;
    sequencerAddress: Codec<`0x${string}`, FieldElement | undefined>;
    newRoot: Codec<`0x${string}` | undefined, FieldElement | undefined>;
    timestamp: Codec<Date, Date | undefined>;
    starknetVersion: Codec<string, string | undefined>;
    l1GasPrice: Codec<{
        priceInFri?: `0x${string}` | undefined;
        priceInWei?: `0x${string}` | undefined;
    }, {
        priceInFri?: FieldElement | undefined;
        priceInWei?: FieldElement | undefined;
    } | undefined>;
    l1DataGasPrice: Codec<{
        priceInFri?: `0x${string}` | undefined;
        priceInWei?: `0x${string}` | undefined;
    }, {
        priceInFri?: FieldElement | undefined;
        priceInWei?: FieldElement | undefined;
    } | undefined>;
    l1DataAvailabilityMode: Codec<"unknown", L1DataAvailabilityMode$1 | undefined> | Codec<"blob", L1DataAvailabilityMode$1 | undefined> | Codec<"calldata", L1DataAvailabilityMode$1 | undefined>;
}>;
type BlockHeader = Readonly<CodecType<typeof BlockHeader>>;
/** Transaction metadata.
 *
 * This is the information that is common between all transaction types.
 *
 * @prop transactionIndex The transaction index in the block.
 * @prop transactionHash The transaction hash.
 * @prop transactionStatus The transaction status.
 */
declare const TransactionMeta: MessageCodec<{
    transactionIndex: Codec<number, number | undefined>;
    transactionHash: Codec<`0x${string}`, FieldElement | undefined>;
    transactionStatus: Codec<"unknown", TransactionStatus$1 | undefined> | Codec<"succeeded", TransactionStatus$1 | undefined> | Codec<"reverted", TransactionStatus$1 | undefined>;
}>;
type TransactionMeta = Readonly<CodecType<typeof TransactionMeta>>;
/** Invoke transaction v0.
 *
 * @prop maxFee The maximum fee.
 * @prop signature The signature.
 * @prop contractAddress The contract address.
 * @prop entryPointSelector The entry point selector.
 * @prop calldata The calldata.
 */
declare const InvokeTransactionV0: MessageCodec<{
    maxFee: Codec<`0x${string}`, FieldElement | undefined>;
    signature: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    contractAddress: Codec<`0x${string}`, FieldElement | undefined>;
    entryPointSelector: Codec<`0x${string}`, FieldElement | undefined>;
    calldata: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
}>;
type InvokeTransactionV0 = Readonly<CodecType<typeof InvokeTransactionV0>>;
/** Invoke transaction v1.
 *
 * @prop senderAddress The sender address.
 * @prop calldata The calldata.
 * @prop maxFee The maximum fee.
 * @prop signature The signature.
 * @prop nonce The nonce.
 */
declare const InvokeTransactionV1: MessageCodec<{
    senderAddress: Codec<`0x${string}`, FieldElement | undefined>;
    calldata: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    maxFee: Codec<`0x${string}`, FieldElement | undefined>;
    signature: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    nonce: Codec<`0x${string}`, FieldElement | undefined>;
}>;
type InvokeTransactionV1 = Readonly<CodecType<typeof InvokeTransactionV1>>;
/** Invoke transaction v3.
 *
 * @prop senderAddress The sender address.
 * @prop calldata The calldata.
 * @prop signature The signature.
 * @prop nonce The nonce.
 * @prop resourceBounds The resource bounds.
 * @prop tip The tip.
 * @prop paymasterData The paymaster data.
 * @prop accountDeploymentData The account deployment data.
 * @prop nonceDataAvailabilityMode How nonce data is posted to L1.
 * @prop feeDataAvailabilityMode How fee data is posted to L1.
 */
declare const InvokeTransactionV3: MessageCodec<{
    senderAddress: Codec<`0x${string}`, FieldElement | undefined>;
    calldata: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    signature: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    nonce: Codec<`0x${string}`, FieldElement | undefined>;
    resourceBounds: Codec<{
        l1Gas: {
            maxAmount: bigint;
            maxPricePerUnit: bigint;
        };
        l2Gas: {
            maxAmount: bigint;
            maxPricePerUnit: bigint;
        };
    }, {
        l1Gas?: {
            maxAmount?: bigint | undefined;
            maxPricePerUnit?: Uint128 | undefined;
        } | undefined;
        l2Gas?: {
            maxAmount?: bigint | undefined;
            maxPricePerUnit?: Uint128 | undefined;
        } | undefined;
    } | undefined>;
    tip: Codec<bigint, bigint | undefined>;
    paymasterData: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    accountDeploymentData: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    nonceDataAvailabilityMode: Codec<"unknown", DataAvailabilityMode$1 | undefined> | Codec<"l1", DataAvailabilityMode$1 | undefined> | Codec<"l2", DataAvailabilityMode$1 | undefined>;
    feeDataAvailabilityMode: Codec<"unknown", DataAvailabilityMode$1 | undefined> | Codec<"l1", DataAvailabilityMode$1 | undefined> | Codec<"l2", DataAvailabilityMode$1 | undefined>;
}>;
type InvokeTransactionV3 = Readonly<CodecType<typeof InvokeTransactionV3>>;
/** L1 handler transaction.
 *
 * @prop nonce The nonce.
 * @prop contractAddress The contract address.
 * @prop entryPointSelector The entry point selector.
 * @prop calldata The calldata.
 */
declare const L1HandlerTransaction: MessageCodec<{
    nonce: Codec<bigint, bigint | undefined>;
    contractAddress: Codec<`0x${string}`, FieldElement | undefined>;
    entryPointSelector: Codec<`0x${string}`, FieldElement | undefined>;
    calldata: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
}>;
type L1HandlerTransaction = Readonly<CodecType<typeof L1HandlerTransaction>>;
/** Deploy transaction.
 *
 * @prop contractAddressSalt The contract address salt.
 * @prop constructorCalldata The constructor calldata.
 * @prop classHash The class hash.
 */
declare const DeployTransaction: MessageCodec<{
    contractAddressSalt: Codec<`0x${string}`, FieldElement | undefined>;
    constructorCalldata: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    classHash: Codec<`0x${string}`, FieldElement | undefined>;
}>;
type DeployTransaction = Readonly<CodecType<typeof DeployTransaction>>;
/** Declare transaction v0.
 *
 * @prop senderAddress The sender address.
 * @prop maxFee The maximum fee.
 * @prop signature The signature.
 * @prop classHash The class hash.
 */
declare const DeclareTransactionV0: MessageCodec<{
    senderAddress: Codec<`0x${string}`, FieldElement | undefined>;
    maxFee: Codec<`0x${string}`, FieldElement | undefined>;
    signature: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    classHash: Codec<`0x${string}`, FieldElement | undefined>;
}>;
type DeclareTransactionV0 = Readonly<CodecType<typeof DeclareTransactionV0>>;
/** Declare transaction v1.
 *
 * @prop senderAddress The sender address.
 * @prop maxFee The maximum fee.
 * @prop signature The signature.
 * @prop nonce The nonce.
 * @prop classHash The class hash.
 */
declare const DeclareTransactionV1: MessageCodec<{
    senderAddress: Codec<`0x${string}`, FieldElement | undefined>;
    maxFee: Codec<`0x${string}`, FieldElement | undefined>;
    signature: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    nonce: Codec<`0x${string}`, FieldElement | undefined>;
    classHash: Codec<`0x${string}`, FieldElement | undefined>;
}>;
type DeclareTransactionV1 = Readonly<CodecType<typeof DeclareTransactionV1>>;
/** Declare transaction v2.
 *
 * @prop senderAddress The sender address.
 * @prop compiledClassHash The compiled class hash.
 * @prop maxFee The maximum fee.
 * @prop signature The signature.
 * @prop nonce The nonce.
 * @prop classHash The class hash.
 */
declare const DeclareTransactionV2: MessageCodec<{
    senderAddress: Codec<`0x${string}`, FieldElement | undefined>;
    compiledClassHash: Codec<`0x${string}`, FieldElement | undefined>;
    maxFee: Codec<`0x${string}`, FieldElement | undefined>;
    signature: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    nonce: Codec<`0x${string}`, FieldElement | undefined>;
    classHash: Codec<`0x${string}`, FieldElement | undefined>;
}>;
type DeclareTransactionV2 = Readonly<CodecType<typeof DeclareTransactionV2>>;
/** Declare transaction v3.
 *
 * @prop senderAddress The sender address.
 * @prop compiledClassHash The compiled class hash.
 * @prop signature The signature.
 * @prop nonce The nonce.
 * @prop classHash The class hash.
 * @prop resourceBounds The resource bounds.
 * @prop tip The tip.
 * @prop paymasterData The paymaster data.
 * @prop nonceDataAvailabilityMode How nonce data is posted to L1.
 * @prop feeDataAvailabilityMode How fee data is posted to L1.
 */
declare const DeclareTransactionV3: MessageCodec<{
    senderAddress: Codec<`0x${string}`, FieldElement | undefined>;
    compiledClassHash: Codec<`0x${string}`, FieldElement | undefined>;
    signature: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    nonce: Codec<`0x${string}`, FieldElement | undefined>;
    classHash: Codec<`0x${string}`, FieldElement | undefined>;
    resourceBounds: Codec<{
        l1Gas: {
            maxAmount: bigint;
            maxPricePerUnit: bigint;
        };
        l2Gas: {
            maxAmount: bigint;
            maxPricePerUnit: bigint;
        };
    }, {
        l1Gas?: {
            maxAmount?: bigint | undefined;
            maxPricePerUnit?: Uint128 | undefined;
        } | undefined;
        l2Gas?: {
            maxAmount?: bigint | undefined;
            maxPricePerUnit?: Uint128 | undefined;
        } | undefined;
    } | undefined>;
    tip: Codec<bigint, bigint | undefined>;
    paymasterData: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    accountDeploymentData: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    nonceDataAvailabilityMode: Codec<"unknown", DataAvailabilityMode$1 | undefined> | Codec<"l1", DataAvailabilityMode$1 | undefined> | Codec<"l2", DataAvailabilityMode$1 | undefined>;
    feeDataAvailabilityMode: Codec<"unknown", DataAvailabilityMode$1 | undefined> | Codec<"l1", DataAvailabilityMode$1 | undefined> | Codec<"l2", DataAvailabilityMode$1 | undefined>;
}>;
type DeclareTransactionV3 = Readonly<CodecType<typeof DeclareTransactionV3>>;
/** Deploy account transaction v1.
 *
 * @prop maxFee The maximum fee.
 * @prop signature The signature.
 * @prop nonce The nonce.
 * @prop contractAddressSalt The contract address salt.
 * @prop constructorCalldata The constructor calldata.
 * @prop classHash The class hash.
 */
declare const DeployAccountTransactionV1: MessageCodec<{
    maxFee: Codec<`0x${string}`, FieldElement | undefined>;
    signature: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    nonce: Codec<`0x${string}`, FieldElement | undefined>;
    contractAddressSalt: Codec<`0x${string}`, FieldElement | undefined>;
    constructorCalldata: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    classHash: Codec<`0x${string}`, FieldElement | undefined>;
}>;
type DeployAccountTransactionV1 = Readonly<CodecType<typeof DeployAccountTransactionV1>>;
/** Deploy account transaction v3.
 *
 * @prop signature The signature.
 * @prop nonce The nonce.
 * @prop contractAddressSalt The contract address salt.
 * @prop constructorCalldata The constructor calldata.
 * @prop classHash The class hash.
 * @prop resourceBounds The resource bounds.
 * @prop tip The tip.
 * @prop paymasterData The paymaster data.
 * @prop nonceDataAvailabilityMode How nonce data is posted to L1.
 * @prop feeDataAvailabilityMode How fee data is posted to L1.
 */
declare const DeployAccountTransactionV3: MessageCodec<{
    signature: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    nonce: Codec<`0x${string}`, FieldElement | undefined>;
    contractAddressSalt: Codec<`0x${string}`, FieldElement | undefined>;
    constructorCalldata: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    classHash: Codec<`0x${string}`, FieldElement | undefined>;
    resourceBounds: Codec<{
        l1Gas: {
            maxAmount: bigint;
            maxPricePerUnit: bigint;
        };
        l2Gas: {
            maxAmount: bigint;
            maxPricePerUnit: bigint;
        };
    }, {
        l1Gas?: {
            maxAmount?: bigint | undefined;
            maxPricePerUnit?: Uint128 | undefined;
        } | undefined;
        l2Gas?: {
            maxAmount?: bigint | undefined;
            maxPricePerUnit?: Uint128 | undefined;
        } | undefined;
    } | undefined>;
    tip: Codec<bigint, bigint | undefined>;
    paymasterData: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    nonceDataAvailabilityMode: Codec<"unknown", DataAvailabilityMode$1 | undefined> | Codec<"l1", DataAvailabilityMode$1 | undefined> | Codec<"l2", DataAvailabilityMode$1 | undefined>;
    feeDataAvailabilityMode: Codec<"unknown", DataAvailabilityMode$1 | undefined> | Codec<"l1", DataAvailabilityMode$1 | undefined> | Codec<"l2", DataAvailabilityMode$1 | undefined>;
}>;
type DeployAccountTransactionV3 = Readonly<CodecType<typeof DeployAccountTransactionV3>>;
/** A transaction.
 *
 * @prop filterIds The filter IDs.
 * @prop meta The transaction metadata.
 */
declare const Transaction: MessageCodec<{
    filterIds: Codec<readonly number[], readonly number[] | undefined>;
    meta: Codec<{
        transactionIndex: number;
        transactionHash: `0x${string}`;
        transactionStatus: "unknown" | "succeeded" | "reverted";
    }, {
        transactionIndex?: number | undefined;
        transactionHash?: FieldElement | undefined;
        transactionStatus?: TransactionStatus$1 | undefined;
    } | undefined>;
    transaction: Codec<{
        _tag: "invokeV0";
    } & {
        invokeV0: {
            maxFee: `0x${string}`;
            signature: readonly `0x${string}`[];
            contractAddress: `0x${string}`;
            entryPointSelector: `0x${string}`;
            calldata: readonly `0x${string}`[];
        };
    }, (({
        $case: "invokeV0";
    } & {
        invokeV0: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "invokeV1";
    } & {
        invokeV1: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
        };
    }) | ({
        $case: "invokeV3";
    } & {
        invokeV3: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "deploy";
    } & {
        deploy: {
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV0";
    } & {
        declareV0: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV1";
    } & {
        declareV1: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV2";
    } & {
        declareV2: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV3";
    } & {
        declareV3: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "l1Handler";
    } & {
        l1Handler: {
            nonce?: bigint | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "deployAccountV1";
    } & {
        deployAccountV1: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "deployAccountV3";
    } & {
        deployAccountV3: {
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "invokeV1";
    } & {
        invokeV1: {
            senderAddress: `0x${string}`;
            calldata: readonly `0x${string}`[];
            maxFee: `0x${string}`;
            signature: readonly `0x${string}`[];
            nonce: `0x${string}`;
        };
    }, (({
        $case: "invokeV0";
    } & {
        invokeV0: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "invokeV1";
    } & {
        invokeV1: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
        };
    }) | ({
        $case: "invokeV3";
    } & {
        invokeV3: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "deploy";
    } & {
        deploy: {
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV0";
    } & {
        declareV0: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV1";
    } & {
        declareV1: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV2";
    } & {
        declareV2: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV3";
    } & {
        declareV3: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "l1Handler";
    } & {
        l1Handler: {
            nonce?: bigint | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "deployAccountV1";
    } & {
        deployAccountV1: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "deployAccountV3";
    } & {
        deployAccountV3: {
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "invokeV3";
    } & {
        invokeV3: {
            senderAddress: `0x${string}`;
            calldata: readonly `0x${string}`[];
            signature: readonly `0x${string}`[];
            nonce: `0x${string}`;
            resourceBounds: {
                l1Gas: {
                    maxAmount: bigint;
                    maxPricePerUnit: bigint;
                };
                l2Gas: {
                    maxAmount: bigint;
                    maxPricePerUnit: bigint;
                };
            };
            tip: bigint;
            paymasterData: readonly `0x${string}`[];
            accountDeploymentData: readonly `0x${string}`[];
            nonceDataAvailabilityMode: "unknown" | "l1" | "l2";
            feeDataAvailabilityMode: "unknown" | "l1" | "l2";
        };
    }, (({
        $case: "invokeV0";
    } & {
        invokeV0: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "invokeV1";
    } & {
        invokeV1: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
        };
    }) | ({
        $case: "invokeV3";
    } & {
        invokeV3: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "deploy";
    } & {
        deploy: {
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV0";
    } & {
        declareV0: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV1";
    } & {
        declareV1: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV2";
    } & {
        declareV2: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV3";
    } & {
        declareV3: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "l1Handler";
    } & {
        l1Handler: {
            nonce?: bigint | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "deployAccountV1";
    } & {
        deployAccountV1: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "deployAccountV3";
    } & {
        deployAccountV3: {
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "deploy";
    } & {
        deploy: {
            contractAddressSalt: `0x${string}`;
            constructorCalldata: readonly `0x${string}`[];
            classHash: `0x${string}`;
        };
    }, (({
        $case: "invokeV0";
    } & {
        invokeV0: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "invokeV1";
    } & {
        invokeV1: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
        };
    }) | ({
        $case: "invokeV3";
    } & {
        invokeV3: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "deploy";
    } & {
        deploy: {
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV0";
    } & {
        declareV0: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV1";
    } & {
        declareV1: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV2";
    } & {
        declareV2: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV3";
    } & {
        declareV3: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "l1Handler";
    } & {
        l1Handler: {
            nonce?: bigint | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "deployAccountV1";
    } & {
        deployAccountV1: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "deployAccountV3";
    } & {
        deployAccountV3: {
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "declareV0";
    } & {
        declareV0: {
            senderAddress: `0x${string}`;
            maxFee: `0x${string}`;
            signature: readonly `0x${string}`[];
            classHash: `0x${string}`;
        };
    }, (({
        $case: "invokeV0";
    } & {
        invokeV0: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "invokeV1";
    } & {
        invokeV1: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
        };
    }) | ({
        $case: "invokeV3";
    } & {
        invokeV3: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "deploy";
    } & {
        deploy: {
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV0";
    } & {
        declareV0: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV1";
    } & {
        declareV1: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV2";
    } & {
        declareV2: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV3";
    } & {
        declareV3: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "l1Handler";
    } & {
        l1Handler: {
            nonce?: bigint | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "deployAccountV1";
    } & {
        deployAccountV1: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "deployAccountV3";
    } & {
        deployAccountV3: {
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "declareV1";
    } & {
        declareV1: {
            senderAddress: `0x${string}`;
            maxFee: `0x${string}`;
            signature: readonly `0x${string}`[];
            nonce: `0x${string}`;
            classHash: `0x${string}`;
        };
    }, (({
        $case: "invokeV0";
    } & {
        invokeV0: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "invokeV1";
    } & {
        invokeV1: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
        };
    }) | ({
        $case: "invokeV3";
    } & {
        invokeV3: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "deploy";
    } & {
        deploy: {
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV0";
    } & {
        declareV0: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV1";
    } & {
        declareV1: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV2";
    } & {
        declareV2: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV3";
    } & {
        declareV3: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "l1Handler";
    } & {
        l1Handler: {
            nonce?: bigint | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "deployAccountV1";
    } & {
        deployAccountV1: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "deployAccountV3";
    } & {
        deployAccountV3: {
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "declareV2";
    } & {
        declareV2: {
            senderAddress: `0x${string}`;
            compiledClassHash: `0x${string}`;
            maxFee: `0x${string}`;
            signature: readonly `0x${string}`[];
            nonce: `0x${string}`;
            classHash: `0x${string}`;
        };
    }, (({
        $case: "invokeV0";
    } & {
        invokeV0: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "invokeV1";
    } & {
        invokeV1: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
        };
    }) | ({
        $case: "invokeV3";
    } & {
        invokeV3: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "deploy";
    } & {
        deploy: {
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV0";
    } & {
        declareV0: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV1";
    } & {
        declareV1: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV2";
    } & {
        declareV2: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV3";
    } & {
        declareV3: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "l1Handler";
    } & {
        l1Handler: {
            nonce?: bigint | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "deployAccountV1";
    } & {
        deployAccountV1: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "deployAccountV3";
    } & {
        deployAccountV3: {
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "declareV3";
    } & {
        declareV3: {
            senderAddress: `0x${string}`;
            compiledClassHash: `0x${string}`;
            signature: readonly `0x${string}`[];
            nonce: `0x${string}`;
            classHash: `0x${string}`;
            resourceBounds: {
                l1Gas: {
                    maxAmount: bigint;
                    maxPricePerUnit: bigint;
                };
                l2Gas: {
                    maxAmount: bigint;
                    maxPricePerUnit: bigint;
                };
            };
            tip: bigint;
            paymasterData: readonly `0x${string}`[];
            accountDeploymentData: readonly `0x${string}`[];
            nonceDataAvailabilityMode: "unknown" | "l1" | "l2";
            feeDataAvailabilityMode: "unknown" | "l1" | "l2";
        };
    }, (({
        $case: "invokeV0";
    } & {
        invokeV0: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "invokeV1";
    } & {
        invokeV1: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
        };
    }) | ({
        $case: "invokeV3";
    } & {
        invokeV3: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "deploy";
    } & {
        deploy: {
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV0";
    } & {
        declareV0: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV1";
    } & {
        declareV1: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV2";
    } & {
        declareV2: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV3";
    } & {
        declareV3: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "l1Handler";
    } & {
        l1Handler: {
            nonce?: bigint | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "deployAccountV1";
    } & {
        deployAccountV1: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "deployAccountV3";
    } & {
        deployAccountV3: {
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "l1Handler";
    } & {
        l1Handler: {
            nonce: bigint;
            contractAddress: `0x${string}`;
            entryPointSelector: `0x${string}`;
            calldata: readonly `0x${string}`[];
        };
    }, (({
        $case: "invokeV0";
    } & {
        invokeV0: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "invokeV1";
    } & {
        invokeV1: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
        };
    }) | ({
        $case: "invokeV3";
    } & {
        invokeV3: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "deploy";
    } & {
        deploy: {
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV0";
    } & {
        declareV0: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV1";
    } & {
        declareV1: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV2";
    } & {
        declareV2: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV3";
    } & {
        declareV3: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "l1Handler";
    } & {
        l1Handler: {
            nonce?: bigint | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "deployAccountV1";
    } & {
        deployAccountV1: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "deployAccountV3";
    } & {
        deployAccountV3: {
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "deployAccountV1";
    } & {
        deployAccountV1: {
            maxFee: `0x${string}`;
            signature: readonly `0x${string}`[];
            nonce: `0x${string}`;
            contractAddressSalt: `0x${string}`;
            constructorCalldata: readonly `0x${string}`[];
            classHash: `0x${string}`;
        };
    }, (({
        $case: "invokeV0";
    } & {
        invokeV0: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "invokeV1";
    } & {
        invokeV1: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
        };
    }) | ({
        $case: "invokeV3";
    } & {
        invokeV3: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "deploy";
    } & {
        deploy: {
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV0";
    } & {
        declareV0: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV1";
    } & {
        declareV1: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV2";
    } & {
        declareV2: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV3";
    } & {
        declareV3: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "l1Handler";
    } & {
        l1Handler: {
            nonce?: bigint | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "deployAccountV1";
    } & {
        deployAccountV1: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "deployAccountV3";
    } & {
        deployAccountV3: {
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "deployAccountV3";
    } & {
        deployAccountV3: {
            signature: readonly `0x${string}`[];
            nonce: `0x${string}`;
            contractAddressSalt: `0x${string}`;
            constructorCalldata: readonly `0x${string}`[];
            classHash: `0x${string}`;
            resourceBounds: {
                l1Gas: {
                    maxAmount: bigint;
                    maxPricePerUnit: bigint;
                };
                l2Gas: {
                    maxAmount: bigint;
                    maxPricePerUnit: bigint;
                };
            };
            tip: bigint;
            paymasterData: readonly `0x${string}`[];
            nonceDataAvailabilityMode: "unknown" | "l1" | "l2";
            feeDataAvailabilityMode: "unknown" | "l1" | "l2";
        };
    }, (({
        $case: "invokeV0";
    } & {
        invokeV0: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "invokeV1";
    } & {
        invokeV1: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
        };
    }) | ({
        $case: "invokeV3";
    } & {
        invokeV3: {
            senderAddress?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "deploy";
    } & {
        deploy: {
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV0";
    } & {
        declareV0: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV1";
    } & {
        declareV1: {
            senderAddress?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV2";
    } & {
        declareV2: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "declareV3";
    } & {
        declareV3: {
            senderAddress?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            accountDeploymentData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    }) | ({
        $case: "l1Handler";
    } & {
        l1Handler: {
            nonce?: bigint | undefined;
            contractAddress?: FieldElement | undefined;
            entryPointSelector?: FieldElement | undefined;
            calldata?: readonly FieldElement[] | undefined;
        };
    }) | ({
        $case: "deployAccountV1";
    } & {
        deployAccountV1: {
            maxFee?: FieldElement | undefined;
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "deployAccountV3";
    } & {
        deployAccountV3: {
            signature?: readonly FieldElement[] | undefined;
            nonce?: FieldElement | undefined;
            contractAddressSalt?: FieldElement | undefined;
            constructorCalldata?: readonly FieldElement[] | undefined;
            classHash?: FieldElement | undefined;
            resourceBounds?: {
                l1Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
                l2Gas?: {
                    maxAmount?: bigint | undefined;
                    maxPricePerUnit?: Uint128 | undefined;
                } | undefined;
            } | undefined;
            tip?: bigint | undefined;
            paymasterData?: readonly FieldElement[] | undefined;
            nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
        };
    })) | undefined>;
}>;
type Transaction = Readonly<CodecType<typeof Transaction>>;
declare const PriceUnit: Codec<"wei" | "fri" | "unknown", PriceUnit$1>;
type PriceUnit = CodecType<typeof PriceUnit>;
declare const FeePayment: MessageCodec<{
    amount: Codec<`0x${string}`, FieldElement | undefined>;
    unit: Codec<"unknown", PriceUnit$1 | undefined> | Codec<"wei", PriceUnit$1 | undefined> | Codec<"fri", PriceUnit$1 | undefined>;
}>;
type FeePayment = Readonly<CodecType<typeof FeePayment>>;
declare const ComputationResources: MessageCodec<{
    steps: Codec<bigint, bigint | undefined>;
    memoryHoles: Codec<bigint | undefined, bigint | undefined>;
    rangeCheckBuiltinApplications: Codec<bigint | undefined, bigint | undefined>;
    pedersenBuiltinApplications: Codec<bigint | undefined, bigint | undefined>;
    poseidonBuiltinApplications: Codec<bigint | undefined, bigint | undefined>;
    ecOpBuiltinApplications: Codec<bigint | undefined, bigint | undefined>;
    ecdsaBuiltinApplications: Codec<bigint | undefined, bigint | undefined>;
    bitwiseBuiltinApplications: Codec<bigint | undefined, bigint | undefined>;
    keccakBuiltinApplications: Codec<bigint | undefined, bigint | undefined>;
    segmentArenaBuiltin: Codec<bigint | undefined, bigint | undefined>;
}>;
type ComputationResources = Readonly<CodecType<typeof ComputationResources>>;
declare const DataAvailabilityResources: MessageCodec<{
    l1Gas: Codec<bigint, bigint | undefined>;
    l1DataGas: Codec<bigint, bigint | undefined>;
}>;
type DataAvailabilityResources = Readonly<CodecType<typeof DataAvailabilityResources>>;
declare const ExecutionResources: MessageCodec<{
    computation: Codec<{
        steps: bigint;
        memoryHoles?: bigint | undefined;
        rangeCheckBuiltinApplications?: bigint | undefined;
        pedersenBuiltinApplications?: bigint | undefined;
        poseidonBuiltinApplications?: bigint | undefined;
        ecOpBuiltinApplications?: bigint | undefined;
        ecdsaBuiltinApplications?: bigint | undefined;
        bitwiseBuiltinApplications?: bigint | undefined;
        keccakBuiltinApplications?: bigint | undefined;
        segmentArenaBuiltin?: bigint | undefined;
    }, {
        steps?: bigint | undefined;
        memoryHoles?: bigint | undefined;
        rangeCheckBuiltinApplications?: bigint | undefined;
        pedersenBuiltinApplications?: bigint | undefined;
        poseidonBuiltinApplications?: bigint | undefined;
        ecOpBuiltinApplications?: bigint | undefined;
        ecdsaBuiltinApplications?: bigint | undefined;
        bitwiseBuiltinApplications?: bigint | undefined;
        keccakBuiltinApplications?: bigint | undefined;
        segmentArenaBuiltin?: bigint | undefined;
    } | undefined>;
    dataAvailability: Codec<{
        l1Gas: bigint;
        l1DataGas: bigint;
    }, {
        l1Gas?: bigint | undefined;
        l1DataGas?: bigint | undefined;
    } | undefined>;
}>;
type ExecutionResources = Readonly<CodecType<typeof ExecutionResources>>;
declare const ExecutionSucceeded: MessageCodec<{}>;
type ExecutionSucceeded = Readonly<CodecType<typeof ExecutionSucceeded>>;
declare const ExecutionReverted: MessageCodec<{
    reason: Codec<string | undefined, string | undefined>;
}>;
type ExecutionReverted = Readonly<CodecType<typeof ExecutionReverted>>;
declare const TransactionReceiptMeta: MessageCodec<{
    transactionIndex: Codec<number, number | undefined>;
    transactionHash: Codec<`0x${string}`, FieldElement | undefined>;
    actualFee: Codec<{
        amount: `0x${string}`;
        unit: "unknown" | "wei" | "fri";
    }, {
        amount?: FieldElement | undefined;
        unit?: PriceUnit$1 | undefined;
    } | undefined>;
    executionResources: Codec<{
        computation: {
            steps: bigint;
            memoryHoles?: bigint | undefined;
            rangeCheckBuiltinApplications?: bigint | undefined;
            pedersenBuiltinApplications?: bigint | undefined;
            poseidonBuiltinApplications?: bigint | undefined;
            ecOpBuiltinApplications?: bigint | undefined;
            ecdsaBuiltinApplications?: bigint | undefined;
            bitwiseBuiltinApplications?: bigint | undefined;
            keccakBuiltinApplications?: bigint | undefined;
            segmentArenaBuiltin?: bigint | undefined;
        };
        dataAvailability: {
            l1Gas: bigint;
            l1DataGas: bigint;
        };
    }, {
        computation?: {
            steps?: bigint | undefined;
            memoryHoles?: bigint | undefined;
            rangeCheckBuiltinApplications?: bigint | undefined;
            pedersenBuiltinApplications?: bigint | undefined;
            poseidonBuiltinApplications?: bigint | undefined;
            ecOpBuiltinApplications?: bigint | undefined;
            ecdsaBuiltinApplications?: bigint | undefined;
            bitwiseBuiltinApplications?: bigint | undefined;
            keccakBuiltinApplications?: bigint | undefined;
            segmentArenaBuiltin?: bigint | undefined;
        } | undefined;
        dataAvailability?: {
            l1Gas?: bigint | undefined;
            l1DataGas?: bigint | undefined;
        } | undefined;
    } | undefined>;
    executionResult: Codec<{
        _tag: "succeeded";
    } & {
        succeeded: {};
    }, (({
        $case: "succeeded";
    } & {
        succeeded: {};
    }) | ({
        $case: "reverted";
    } & {
        reverted: {
            reason?: string | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "reverted";
    } & {
        reverted: {
            reason?: string | undefined;
        };
    }, (({
        $case: "succeeded";
    } & {
        succeeded: {};
    }) | ({
        $case: "reverted";
    } & {
        reverted: {
            reason?: string | undefined;
        };
    })) | undefined>;
}>;
type TransactionReceiptMeta = Readonly<CodecType<typeof TransactionReceiptMeta>>;
declare const InvokeTransactionReceipt: MessageCodec<{}>;
type InvokeTransactionReceipt = Readonly<CodecType<typeof InvokeTransactionReceipt>>;
declare const L1HandlerTransactionReceipt: MessageCodec<{
    messageHash: Codec<Uint8Array, Uint8Array | undefined>;
}>;
type L1HandlerTransactionReceipt = Readonly<CodecType<typeof L1HandlerTransactionReceipt>>;
declare const DeclareTransactionReceipt: MessageCodec<{}>;
type DeclareTransactionReceipt = Readonly<CodecType<typeof DeclareTransactionReceipt>>;
declare const DeployTransactionReceipt: MessageCodec<{
    contractAddress: Codec<`0x${string}`, FieldElement | undefined>;
}>;
type DeployTransactionReceipt = Readonly<CodecType<typeof DeployTransactionReceipt>>;
declare const DeployAccountTransactionReceipt: MessageCodec<{
    contractAddress: Codec<`0x${string}`, FieldElement | undefined>;
}>;
type DeployAccountTransactionReceipt = Readonly<CodecType<typeof DeployAccountTransactionReceipt>>;
/** A transaction receipt.
 *
 * @prop meta Transaction receipt metadata.
 * @prop receipt Transaction-specific receipt.
 */
declare const TransactionReceipt: MessageCodec<{
    filterIds: Codec<readonly number[], readonly number[] | undefined>;
    meta: Codec<{
        transactionIndex: number;
        transactionHash: `0x${string}`;
        actualFee: {
            amount: `0x${string}`;
            unit: "unknown" | "wei" | "fri";
        };
        executionResources: {
            computation: {
                steps: bigint;
                memoryHoles?: bigint | undefined;
                rangeCheckBuiltinApplications?: bigint | undefined;
                pedersenBuiltinApplications?: bigint | undefined;
                poseidonBuiltinApplications?: bigint | undefined;
                ecOpBuiltinApplications?: bigint | undefined;
                ecdsaBuiltinApplications?: bigint | undefined;
                bitwiseBuiltinApplications?: bigint | undefined;
                keccakBuiltinApplications?: bigint | undefined;
                segmentArenaBuiltin?: bigint | undefined;
            };
            dataAvailability: {
                l1Gas: bigint;
                l1DataGas: bigint;
            };
        };
        executionResult: ({
            _tag: "succeeded";
        } & {
            succeeded: {};
        }) | ({
            _tag: "reverted";
        } & {
            reverted: {
                reason?: string | undefined;
            };
        });
    }, {
        transactionIndex?: number | undefined;
        transactionHash?: FieldElement | undefined;
        actualFee?: {
            amount?: FieldElement | undefined;
            unit?: PriceUnit$1 | undefined;
        } | undefined;
        executionResources?: {
            computation?: {
                steps?: bigint | undefined;
                memoryHoles?: bigint | undefined;
                rangeCheckBuiltinApplications?: bigint | undefined;
                pedersenBuiltinApplications?: bigint | undefined;
                poseidonBuiltinApplications?: bigint | undefined;
                ecOpBuiltinApplications?: bigint | undefined;
                ecdsaBuiltinApplications?: bigint | undefined;
                bitwiseBuiltinApplications?: bigint | undefined;
                keccakBuiltinApplications?: bigint | undefined;
                segmentArenaBuiltin?: bigint | undefined;
            } | undefined;
            dataAvailability?: {
                l1Gas?: bigint | undefined;
                l1DataGas?: bigint | undefined;
            } | undefined;
        } | undefined;
        executionResult?: (({
            $case: "succeeded";
        } & {
            succeeded: {};
        }) | ({
            $case: "reverted";
        } & {
            reverted: {
                reason?: string | undefined;
            };
        })) | undefined;
    } | undefined>;
    receipt: Codec<{
        _tag: "deploy";
    } & {
        deploy: {
            contractAddress: `0x${string}`;
        };
    }, (({
        $case: "deploy";
    } & {
        deploy: {
            contractAddress?: FieldElement | undefined;
        };
    }) | ({
        $case: "l1Handler";
    } & {
        l1Handler: {
            messageHash?: Uint8Array | undefined;
        };
    }) | ({
        $case: "invoke";
    } & {
        invoke: {};
    }) | ({
        $case: "declare";
    } & {
        declare: {};
    }) | ({
        $case: "deployAccount";
    } & {
        deployAccount: {
            contractAddress?: FieldElement | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "l1Handler";
    } & {
        l1Handler: {
            messageHash: Uint8Array;
        };
    }, (({
        $case: "deploy";
    } & {
        deploy: {
            contractAddress?: FieldElement | undefined;
        };
    }) | ({
        $case: "l1Handler";
    } & {
        l1Handler: {
            messageHash?: Uint8Array | undefined;
        };
    }) | ({
        $case: "invoke";
    } & {
        invoke: {};
    }) | ({
        $case: "declare";
    } & {
        declare: {};
    }) | ({
        $case: "deployAccount";
    } & {
        deployAccount: {
            contractAddress?: FieldElement | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "invoke";
    } & {
        invoke: {};
    }, (({
        $case: "deploy";
    } & {
        deploy: {
            contractAddress?: FieldElement | undefined;
        };
    }) | ({
        $case: "l1Handler";
    } & {
        l1Handler: {
            messageHash?: Uint8Array | undefined;
        };
    }) | ({
        $case: "invoke";
    } & {
        invoke: {};
    }) | ({
        $case: "declare";
    } & {
        declare: {};
    }) | ({
        $case: "deployAccount";
    } & {
        deployAccount: {
            contractAddress?: FieldElement | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "declare";
    } & {
        declare: {};
    }, (({
        $case: "deploy";
    } & {
        deploy: {
            contractAddress?: FieldElement | undefined;
        };
    }) | ({
        $case: "l1Handler";
    } & {
        l1Handler: {
            messageHash?: Uint8Array | undefined;
        };
    }) | ({
        $case: "invoke";
    } & {
        invoke: {};
    }) | ({
        $case: "declare";
    } & {
        declare: {};
    }) | ({
        $case: "deployAccount";
    } & {
        deployAccount: {
            contractAddress?: FieldElement | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "deployAccount";
    } & {
        deployAccount: {
            contractAddress: `0x${string}`;
        };
    }, (({
        $case: "deploy";
    } & {
        deploy: {
            contractAddress?: FieldElement | undefined;
        };
    }) | ({
        $case: "l1Handler";
    } & {
        l1Handler: {
            messageHash?: Uint8Array | undefined;
        };
    }) | ({
        $case: "invoke";
    } & {
        invoke: {};
    }) | ({
        $case: "declare";
    } & {
        declare: {};
    }) | ({
        $case: "deployAccount";
    } & {
        deployAccount: {
            contractAddress?: FieldElement | undefined;
        };
    })) | undefined>;
}>;
type TransactionReceipt = Readonly<CodecType<typeof TransactionReceipt>>;
/** A transaction event.
 *
 * @prop fromAddress The address that emitted the event.
 * @prop keys Indexed fields of the event.
 * @prop data Non-indexed fields of the event.
 * @prop eventIndex The event index in the block.
 * @prop transactionIndex The transaction index in the block.
 * @prop transactionHash The transaction hash.
 * @prop transactionStatus The transaction status.
 * @prop eventIndexInTransaction The event index in the transaction.
 */
declare const Event: MessageCodec<{
    filterIds: Codec<readonly number[], readonly number[] | undefined>;
    address: Codec<`0x${string}`, FieldElement | undefined>;
    keys: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    data: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    eventIndex: Codec<number, number | undefined>;
    transactionIndex: Codec<number, number | undefined>;
    transactionHash: Codec<`0x${string}`, FieldElement | undefined>;
    transactionStatus: Codec<"unknown", TransactionStatus$1 | undefined> | Codec<"succeeded", TransactionStatus$1 | undefined> | Codec<"reverted", TransactionStatus$1 | undefined>;
    eventIndexInTransaction: Codec<number, number | undefined>;
}>;
type Event = Readonly<CodecType<typeof Event>>;
/** A message from the L2 to the L1.
 *
 * @prop filterIds The filter IDs.
 * @prop fromAddress The address on L2 that sent the message.
 * @prop toAddress The address on L1 that will receive the message.
 * @prop payload The message payload.
 * @prop messageIndex The message index in the block.
 * @prop transactionIndex The transaction index in the block.
 * @prop transactionHash The transaction hash.
 * @prop transactionStatus The transaction status.
 * @prop messageIndexInTransaction The message index in the transaction.
 */
declare const MessageToL1: MessageCodec<{
    filterIds: Codec<readonly number[], readonly number[] | undefined>;
    fromAddress: Codec<`0x${string}`, FieldElement | undefined>;
    toAddress: Codec<`0x${string}`, FieldElement | undefined>;
    payload: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    messageIndex: Codec<number, number | undefined>;
    transactionIndex: Codec<number, number | undefined>;
    transactionHash: Codec<`0x${string}`, FieldElement | undefined>;
    transactionStatus: Codec<"unknown", TransactionStatus$1 | undefined> | Codec<"succeeded", TransactionStatus$1 | undefined> | Codec<"reverted", TransactionStatus$1 | undefined>;
    messageIndexInTransaction: Codec<number, number | undefined>;
}>;
type MessageToL1 = Readonly<CodecType<typeof MessageToL1>>;
/** An entry in the storage diff.
 *
 * @prop key The storage location.
 * @prop value The new value at the storage location.
 */
declare const StorageEntry: MessageCodec<{
    key: Codec<`0x${string}`, FieldElement | undefined>;
    value: Codec<`0x${string}`, FieldElement | undefined>;
}>;
type StorageEntry = Readonly<CodecType<typeof StorageEntry>>;
/** Storage diff.
 *
 * @prop contractAddress The contract address.
 * @prop storageEntries The entries that changed.
 */
declare const StorageDiff: MessageCodec<{
    filterIds: Codec<readonly number[], readonly number[] | undefined>;
    contractAddress: Codec<`0x${string}`, FieldElement | undefined>;
    storageEntries: Codec<readonly {
        key: `0x${string}`;
        value: `0x${string}`;
    }[], readonly {
        key?: FieldElement | undefined;
        value?: FieldElement | undefined;
    }[] | undefined>;
}>;
type StorageDiff = Readonly<CodecType<typeof StorageDiff>>;
/** A new class declared.
 *
 * @prop classHash The class hash.
 * @prop compiledClassHash The compiled class hash. If undefined, it's the result of a deprecated Cairo 0 declaration.
 */
declare const DeclaredClass: MessageCodec<{
    classHash: Codec<`0x${string}` | undefined, FieldElement | undefined>;
    compiledClassHash: Codec<`0x${string}` | undefined, FieldElement | undefined>;
}>;
type DeclaredClass = Readonly<CodecType<typeof DeclaredClass>>;
/** A class replaced.
 *
 * @prop contractAddress The contract address.
 * @prop classHash The class new hash.
 */
declare const ReplacedClass: MessageCodec<{
    contractAddress: Codec<`0x${string}` | undefined, FieldElement | undefined>;
    classHash: Codec<`0x${string}` | undefined, FieldElement | undefined>;
}>;
type ReplacedClass = Readonly<CodecType<typeof ReplacedClass>>;
/** A contract deployed.
 *
 * @prop contractAddress The contract address.
 * @prop classHash The class hash.
 */
declare const DeployedContract: MessageCodec<{
    contractAddress: Codec<`0x${string}` | undefined, FieldElement | undefined>;
    classHash: Codec<`0x${string}` | undefined, FieldElement | undefined>;
}>;
type DeployedContract = Readonly<CodecType<typeof DeployedContract>>;
/** A contract change.
 *
 * @prop filterIds The filter IDs.
 * @prop change The change.
 */
declare const ContractChange: MessageCodec<{
    filterIds: Codec<readonly number[], readonly number[] | undefined>;
    change: Codec<{
        _tag: "declaredClass";
    } & {
        declaredClass: {
            classHash?: `0x${string}` | undefined;
            compiledClassHash?: `0x${string}` | undefined;
        };
    }, (({
        $case: "declaredClass";
    } & {
        declaredClass: {
            classHash?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "replacedClass";
    } & {
        replacedClass: {
            contractAddress?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "deployedContract";
    } & {
        deployedContract: {
            contractAddress?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "replacedClass";
    } & {
        replacedClass: {
            contractAddress?: `0x${string}` | undefined;
            classHash?: `0x${string}` | undefined;
        };
    }, (({
        $case: "declaredClass";
    } & {
        declaredClass: {
            classHash?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "replacedClass";
    } & {
        replacedClass: {
            contractAddress?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "deployedContract";
    } & {
        deployedContract: {
            contractAddress?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "deployedContract";
    } & {
        deployedContract: {
            contractAddress?: `0x${string}` | undefined;
            classHash?: `0x${string}` | undefined;
        };
    }, (({
        $case: "declaredClass";
    } & {
        declaredClass: {
            classHash?: FieldElement | undefined;
            compiledClassHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "replacedClass";
    } & {
        replacedClass: {
            contractAddress?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    }) | ({
        $case: "deployedContract";
    } & {
        deployedContract: {
            contractAddress?: FieldElement | undefined;
            classHash?: FieldElement | undefined;
        };
    })) | undefined>;
}>;
type ContractChange = Readonly<CodecType<typeof ContractChange>>;
/** A nonce update.
 *
 * @prop contractAddress The contract address.
 * @prop nonce The new nonce.
 */
declare const NonceUpdate: MessageCodec<{
    filterIds: Codec<readonly number[], readonly number[] | undefined>;
    contractAddress: Codec<`0x${string}`, FieldElement | undefined>;
    nonce: Codec<`0x${string}`, FieldElement | undefined>;
}>;
type NonceUpdate = Readonly<CodecType<typeof NonceUpdate>>;
declare const CallType: Codec<"libraryCall" | "call" | "delegate" | "unknown", CallType$1>;
type CallType = CodecType<typeof CallType>;
declare const _FunctionInvocationCodec: MessageCodec<{
    contractAddress: Codec<`0x${string}`, FieldElement | undefined>;
    entryPointSelector: Codec<`0x${string}`, FieldElement | undefined>;
    calldata: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    callerAddress: Codec<`0x${string}`, FieldElement | undefined>;
    classHash: Codec<`0x${string}`, FieldElement | undefined>;
    callType: Codec<"unknown", CallType$1 | undefined> | Codec<"libraryCall", CallType$1 | undefined> | Codec<"call", CallType$1 | undefined> | Codec<"delegate", CallType$1 | undefined>;
    result: Codec<readonly `0x${string}`[], readonly FieldElement[] | undefined>;
    events: Codec<readonly number[], readonly number[] | undefined>;
    messages: Codec<readonly number[], readonly number[] | undefined>;
}>;
/**
 * @note This is a recursive type.
 */
type FunctionInvocation = Evaluate<CodecType<typeof _FunctionInvocationCodec> & {
    calls: FunctionInvocation[];
}>;
/** A successful invocation of the __execute__ call.
 *
 * The call.
 */
declare const ExecuteInvocationSuccess: Codec<{
    contractAddress: `0x${string}`;
    entryPointSelector: `0x${string}`;
    calldata: readonly `0x${string}`[];
    callerAddress: `0x${string}`;
    classHash: `0x${string}`;
    callType: "unknown" | "libraryCall" | "call" | "delegate";
    result: readonly `0x${string}`[];
    events: readonly number[];
    messages: readonly number[];
    calls: FunctionInvocation[];
}, FunctionInvocation$1>;
/** A failed invocation of the __execute__ call.
 *
 * @prop reason The reason for the failure.
 */
declare const ExecuteInvocationReverted: MessageCodec<{
    reason: Codec<string | undefined, string | undefined>;
}>;
/** Trace for invoke transactions.
 *
 * @prop validateInvocation The __validate__ call.
 * @prop executeInvocation The __execute__ call.
 * @prop feeTransferInvocation The __fee_transfer__ call.
 */
declare const InvokeTransactionTrace: MessageCodec<{
    validateInvocation: Codec<{
        contractAddress: `0x${string}`;
        entryPointSelector: `0x${string}`;
        calldata: readonly `0x${string}`[];
        callerAddress: `0x${string}`;
        classHash: `0x${string}`;
        callType: "unknown" | "libraryCall" | "call" | "delegate";
        result: readonly `0x${string}`[];
        events: readonly number[];
        messages: readonly number[];
        calls: FunctionInvocation[];
    } | undefined, FunctionInvocation$1 | undefined>;
    executeInvocation: Codec<{
        _tag: "reverted";
    } & {
        reverted: {
            reason?: string | undefined;
        };
    }, (({
        $case: "reverted";
    } & {
        reverted: {
            reason?: string | undefined;
        };
    }) | ({
        $case: "success";
    } & {
        success: FunctionInvocation$1;
    })) | undefined> | Codec<{
        _tag: "success";
    } & {
        success: {
            contractAddress: `0x${string}`;
            entryPointSelector: `0x${string}`;
            calldata: readonly `0x${string}`[];
            callerAddress: `0x${string}`;
            classHash: `0x${string}`;
            callType: "unknown" | "libraryCall" | "call" | "delegate";
            result: readonly `0x${string}`[];
            events: readonly number[];
            messages: readonly number[];
            calls: FunctionInvocation[];
        };
    }, (({
        $case: "reverted";
    } & {
        reverted: {
            reason?: string | undefined;
        };
    }) | ({
        $case: "success";
    } & {
        success: FunctionInvocation$1;
    })) | undefined>;
    feeTransferInvocation: Codec<{
        contractAddress: `0x${string}`;
        entryPointSelector: `0x${string}`;
        calldata: readonly `0x${string}`[];
        callerAddress: `0x${string}`;
        classHash: `0x${string}`;
        callType: "unknown" | "libraryCall" | "call" | "delegate";
        result: readonly `0x${string}`[];
        events: readonly number[];
        messages: readonly number[];
        calls: FunctionInvocation[];
    } | undefined, FunctionInvocation$1 | undefined>;
}>;
type InvokeTransactionTrace = Readonly<CodecType<typeof InvokeTransactionTrace>>;
/** Trace for declare transactions.
 *
 * @prop validateInvocation The __validate__ call.
 * @prop feeTransferInvocation The __fee_transfer__ call.
 */
declare const DeclareTransactionTrace: MessageCodec<{
    validateInvocation: Codec<{
        contractAddress: `0x${string}`;
        entryPointSelector: `0x${string}`;
        calldata: readonly `0x${string}`[];
        callerAddress: `0x${string}`;
        classHash: `0x${string}`;
        callType: "unknown" | "libraryCall" | "call" | "delegate";
        result: readonly `0x${string}`[];
        events: readonly number[];
        messages: readonly number[];
        calls: FunctionInvocation[];
    } | undefined, FunctionInvocation$1 | undefined>;
    feeTransferInvocation: Codec<{
        contractAddress: `0x${string}`;
        entryPointSelector: `0x${string}`;
        calldata: readonly `0x${string}`[];
        callerAddress: `0x${string}`;
        classHash: `0x${string}`;
        callType: "unknown" | "libraryCall" | "call" | "delegate";
        result: readonly `0x${string}`[];
        events: readonly number[];
        messages: readonly number[];
        calls: FunctionInvocation[];
    } | undefined, FunctionInvocation$1 | undefined>;
}>;
type DeclareTransactionTrace = Readonly<CodecType<typeof DeclareTransactionTrace>>;
/** Trace for deploy account transactions.
 *
 * @prop validateInvocation The __validate__ call.
 * @prop constructorInvocation The __constructor__ invocation.
 * @prop feeTransferInvocation The __fee_transfer__ call.
 */
declare const DeployAccountTransactionTrace: MessageCodec<{
    validateInvocation: Codec<{
        contractAddress: `0x${string}`;
        entryPointSelector: `0x${string}`;
        calldata: readonly `0x${string}`[];
        callerAddress: `0x${string}`;
        classHash: `0x${string}`;
        callType: "unknown" | "libraryCall" | "call" | "delegate";
        result: readonly `0x${string}`[];
        events: readonly number[];
        messages: readonly number[];
        calls: FunctionInvocation[];
    } | undefined, FunctionInvocation$1 | undefined>;
    constructorInvocation: Codec<{
        contractAddress: `0x${string}`;
        entryPointSelector: `0x${string}`;
        calldata: readonly `0x${string}`[];
        callerAddress: `0x${string}`;
        classHash: `0x${string}`;
        callType: "unknown" | "libraryCall" | "call" | "delegate";
        result: readonly `0x${string}`[];
        events: readonly number[];
        messages: readonly number[];
        calls: FunctionInvocation[];
    } | undefined, FunctionInvocation$1 | undefined>;
    feeTransferInvocation: Codec<{
        contractAddress: `0x${string}`;
        entryPointSelector: `0x${string}`;
        calldata: readonly `0x${string}`[];
        callerAddress: `0x${string}`;
        classHash: `0x${string}`;
        callType: "unknown" | "libraryCall" | "call" | "delegate";
        result: readonly `0x${string}`[];
        events: readonly number[];
        messages: readonly number[];
        calls: FunctionInvocation[];
    } | undefined, FunctionInvocation$1 | undefined>;
}>;
type DeployAccountTransactionTrace = Readonly<CodecType<typeof DeployAccountTransactionTrace>>;
/** Trace for L1 handler transactions.
 *
 * @prop functionInvocation The L1 handler function invocation.
 */
declare const L1HandlerTransactionTrace: MessageCodec<{
    functionInvocation: Codec<{
        contractAddress: `0x${string}`;
        entryPointSelector: `0x${string}`;
        calldata: readonly `0x${string}`[];
        callerAddress: `0x${string}`;
        classHash: `0x${string}`;
        callType: "unknown" | "libraryCall" | "call" | "delegate";
        result: readonly `0x${string}`[];
        events: readonly number[];
        messages: readonly number[];
        calls: FunctionInvocation[];
    } | undefined, FunctionInvocation$1 | undefined>;
}>;
type L1HandlerTransactionTrace = Readonly<CodecType<typeof L1HandlerTransactionTrace>>;
/** A transaction trace.
 *
 * @prop filterIds The filter IDs.
 * @prop transactionIndex The transaction index.
 * @prop transactionHash The transaction hash.
 * @prop traceRoot The trace root.
 */
declare const TransactionTrace: MessageCodec<{
    filterIds: Codec<readonly number[], readonly number[] | undefined>;
    transactionIndex: Codec<number, number | undefined>;
    transactionHash: Codec<`0x${string}`, FieldElement | undefined>;
    traceRoot: Codec<{
        _tag: "l1Handler";
    } & {
        l1Handler: {
            functionInvocation?: {
                contractAddress: `0x${string}`;
                entryPointSelector: `0x${string}`;
                calldata: readonly `0x${string}`[];
                callerAddress: `0x${string}`;
                classHash: `0x${string}`;
                callType: "unknown" | "libraryCall" | "call" | "delegate";
                result: readonly `0x${string}`[];
                events: readonly number[];
                messages: readonly number[];
                calls: FunctionInvocation[];
            } | undefined;
        };
    }, (({
        $case: "l1Handler";
    } & {
        l1Handler: {
            functionInvocation?: FunctionInvocation$1 | undefined;
        };
    }) | ({
        $case: "invoke";
    } & {
        invoke: {
            validateInvocation?: FunctionInvocation$1 | undefined;
            executeInvocation?: (({
                $case: "reverted";
            } & {
                reverted: {
                    reason?: string | undefined;
                };
            }) | ({
                $case: "success";
            } & {
                success: FunctionInvocation$1;
            })) | undefined;
            feeTransferInvocation?: FunctionInvocation$1 | undefined;
        };
    }) | ({
        $case: "declare";
    } & {
        declare: {
            validateInvocation?: FunctionInvocation$1 | undefined;
            feeTransferInvocation?: FunctionInvocation$1 | undefined;
        };
    }) | ({
        $case: "deployAccount";
    } & {
        deployAccount: {
            validateInvocation?: FunctionInvocation$1 | undefined;
            constructorInvocation?: FunctionInvocation$1 | undefined;
            feeTransferInvocation?: FunctionInvocation$1 | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "invoke";
    } & {
        invoke: {
            validateInvocation?: {
                contractAddress: `0x${string}`;
                entryPointSelector: `0x${string}`;
                calldata: readonly `0x${string}`[];
                callerAddress: `0x${string}`;
                classHash: `0x${string}`;
                callType: "unknown" | "libraryCall" | "call" | "delegate";
                result: readonly `0x${string}`[];
                events: readonly number[];
                messages: readonly number[];
                calls: FunctionInvocation[];
            } | undefined;
            executeInvocation: ({
                _tag: "reverted";
            } & {
                reverted: {
                    reason?: string | undefined;
                };
            }) | ({
                _tag: "success";
            } & {
                success: {
                    contractAddress: `0x${string}`;
                    entryPointSelector: `0x${string}`;
                    calldata: readonly `0x${string}`[];
                    callerAddress: `0x${string}`;
                    classHash: `0x${string}`;
                    callType: "unknown" | "libraryCall" | "call" | "delegate";
                    result: readonly `0x${string}`[];
                    events: readonly number[];
                    messages: readonly number[];
                    calls: FunctionInvocation[];
                };
            });
            feeTransferInvocation?: {
                contractAddress: `0x${string}`;
                entryPointSelector: `0x${string}`;
                calldata: readonly `0x${string}`[];
                callerAddress: `0x${string}`;
                classHash: `0x${string}`;
                callType: "unknown" | "libraryCall" | "call" | "delegate";
                result: readonly `0x${string}`[];
                events: readonly number[];
                messages: readonly number[];
                calls: FunctionInvocation[];
            } | undefined;
        };
    }, (({
        $case: "l1Handler";
    } & {
        l1Handler: {
            functionInvocation?: FunctionInvocation$1 | undefined;
        };
    }) | ({
        $case: "invoke";
    } & {
        invoke: {
            validateInvocation?: FunctionInvocation$1 | undefined;
            executeInvocation?: (({
                $case: "reverted";
            } & {
                reverted: {
                    reason?: string | undefined;
                };
            }) | ({
                $case: "success";
            } & {
                success: FunctionInvocation$1;
            })) | undefined;
            feeTransferInvocation?: FunctionInvocation$1 | undefined;
        };
    }) | ({
        $case: "declare";
    } & {
        declare: {
            validateInvocation?: FunctionInvocation$1 | undefined;
            feeTransferInvocation?: FunctionInvocation$1 | undefined;
        };
    }) | ({
        $case: "deployAccount";
    } & {
        deployAccount: {
            validateInvocation?: FunctionInvocation$1 | undefined;
            constructorInvocation?: FunctionInvocation$1 | undefined;
            feeTransferInvocation?: FunctionInvocation$1 | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "declare";
    } & {
        declare: {
            validateInvocation?: {
                contractAddress: `0x${string}`;
                entryPointSelector: `0x${string}`;
                calldata: readonly `0x${string}`[];
                callerAddress: `0x${string}`;
                classHash: `0x${string}`;
                callType: "unknown" | "libraryCall" | "call" | "delegate";
                result: readonly `0x${string}`[];
                events: readonly number[];
                messages: readonly number[];
                calls: FunctionInvocation[];
            } | undefined;
            feeTransferInvocation?: {
                contractAddress: `0x${string}`;
                entryPointSelector: `0x${string}`;
                calldata: readonly `0x${string}`[];
                callerAddress: `0x${string}`;
                classHash: `0x${string}`;
                callType: "unknown" | "libraryCall" | "call" | "delegate";
                result: readonly `0x${string}`[];
                events: readonly number[];
                messages: readonly number[];
                calls: FunctionInvocation[];
            } | undefined;
        };
    }, (({
        $case: "l1Handler";
    } & {
        l1Handler: {
            functionInvocation?: FunctionInvocation$1 | undefined;
        };
    }) | ({
        $case: "invoke";
    } & {
        invoke: {
            validateInvocation?: FunctionInvocation$1 | undefined;
            executeInvocation?: (({
                $case: "reverted";
            } & {
                reverted: {
                    reason?: string | undefined;
                };
            }) | ({
                $case: "success";
            } & {
                success: FunctionInvocation$1;
            })) | undefined;
            feeTransferInvocation?: FunctionInvocation$1 | undefined;
        };
    }) | ({
        $case: "declare";
    } & {
        declare: {
            validateInvocation?: FunctionInvocation$1 | undefined;
            feeTransferInvocation?: FunctionInvocation$1 | undefined;
        };
    }) | ({
        $case: "deployAccount";
    } & {
        deployAccount: {
            validateInvocation?: FunctionInvocation$1 | undefined;
            constructorInvocation?: FunctionInvocation$1 | undefined;
            feeTransferInvocation?: FunctionInvocation$1 | undefined;
        };
    })) | undefined> | Codec<{
        _tag: "deployAccount";
    } & {
        deployAccount: {
            validateInvocation?: {
                contractAddress: `0x${string}`;
                entryPointSelector: `0x${string}`;
                calldata: readonly `0x${string}`[];
                callerAddress: `0x${string}`;
                classHash: `0x${string}`;
                callType: "unknown" | "libraryCall" | "call" | "delegate";
                result: readonly `0x${string}`[];
                events: readonly number[];
                messages: readonly number[];
                calls: FunctionInvocation[];
            } | undefined;
            constructorInvocation?: {
                contractAddress: `0x${string}`;
                entryPointSelector: `0x${string}`;
                calldata: readonly `0x${string}`[];
                callerAddress: `0x${string}`;
                classHash: `0x${string}`;
                callType: "unknown" | "libraryCall" | "call" | "delegate";
                result: readonly `0x${string}`[];
                events: readonly number[];
                messages: readonly number[];
                calls: FunctionInvocation[];
            } | undefined;
            feeTransferInvocation?: {
                contractAddress: `0x${string}`;
                entryPointSelector: `0x${string}`;
                calldata: readonly `0x${string}`[];
                callerAddress: `0x${string}`;
                classHash: `0x${string}`;
                callType: "unknown" | "libraryCall" | "call" | "delegate";
                result: readonly `0x${string}`[];
                events: readonly number[];
                messages: readonly number[];
                calls: FunctionInvocation[];
            } | undefined;
        };
    }, (({
        $case: "l1Handler";
    } & {
        l1Handler: {
            functionInvocation?: FunctionInvocation$1 | undefined;
        };
    }) | ({
        $case: "invoke";
    } & {
        invoke: {
            validateInvocation?: FunctionInvocation$1 | undefined;
            executeInvocation?: (({
                $case: "reverted";
            } & {
                reverted: {
                    reason?: string | undefined;
                };
            }) | ({
                $case: "success";
            } & {
                success: FunctionInvocation$1;
            })) | undefined;
            feeTransferInvocation?: FunctionInvocation$1 | undefined;
        };
    }) | ({
        $case: "declare";
    } & {
        declare: {
            validateInvocation?: FunctionInvocation$1 | undefined;
            feeTransferInvocation?: FunctionInvocation$1 | undefined;
        };
    }) | ({
        $case: "deployAccount";
    } & {
        deployAccount: {
            validateInvocation?: FunctionInvocation$1 | undefined;
            constructorInvocation?: FunctionInvocation$1 | undefined;
            feeTransferInvocation?: FunctionInvocation$1 | undefined;
        };
    })) | undefined>;
}>;
type TransactionTrace = Readonly<CodecType<typeof TransactionTrace>>;
/** A block.
 *
 * @prop header The block header.
 * @prop transactions The transactions in the block.
 * @prop receipts The receipts of the transactions.
 * @prop events The events emitted by the transactions.
 * @prop messages The messages sent to L1 by the transactions.
 * @prop traces The transaction traces.
 * @prop storageDiffs The changes to the storage.
 * @prop contractChanges The changes to contracts and classes.
 * @prop nonceUpdates The nonce updates.
 */
declare const Block: MessageCodec<{
    header: Codec<{
        blockHash?: `0x${string}` | undefined;
        parentBlockHash: `0x${string}`;
        blockNumber: bigint;
        sequencerAddress: `0x${string}`;
        newRoot?: `0x${string}` | undefined;
        timestamp: Date;
        starknetVersion: string;
        l1GasPrice: {
            priceInFri?: `0x${string}` | undefined;
            priceInWei?: `0x${string}` | undefined;
        };
        l1DataGasPrice: {
            priceInFri?: `0x${string}` | undefined;
            priceInWei?: `0x${string}` | undefined;
        };
        l1DataAvailabilityMode: "unknown" | "blob" | "calldata";
    }, {
        blockHash?: FieldElement | undefined;
        parentBlockHash?: FieldElement | undefined;
        blockNumber?: bigint | undefined;
        sequencerAddress?: FieldElement | undefined;
        newRoot?: FieldElement | undefined;
        timestamp?: Date | undefined;
        starknetVersion?: string | undefined;
        l1GasPrice?: {
            priceInFri?: FieldElement | undefined;
            priceInWei?: FieldElement | undefined;
        } | undefined;
        l1DataGasPrice?: {
            priceInFri?: FieldElement | undefined;
            priceInWei?: FieldElement | undefined;
        } | undefined;
        l1DataAvailabilityMode?: L1DataAvailabilityMode$1 | undefined;
    } | undefined>;
    transactions: Codec<readonly {
        filterIds: readonly number[];
        meta: {
            transactionIndex: number;
            transactionHash: `0x${string}`;
            transactionStatus: "unknown" | "succeeded" | "reverted";
        };
        transaction: ({
            _tag: "invokeV0";
        } & {
            invokeV0: {
                maxFee: `0x${string}`;
                signature: readonly `0x${string}`[];
                contractAddress: `0x${string}`;
                entryPointSelector: `0x${string}`;
                calldata: readonly `0x${string}`[];
            };
        }) | ({
            _tag: "invokeV1";
        } & {
            invokeV1: {
                senderAddress: `0x${string}`;
                calldata: readonly `0x${string}`[];
                maxFee: `0x${string}`;
                signature: readonly `0x${string}`[];
                nonce: `0x${string}`;
            };
        }) | ({
            _tag: "invokeV3";
        } & {
            invokeV3: {
                senderAddress: `0x${string}`;
                calldata: readonly `0x${string}`[];
                signature: readonly `0x${string}`[];
                nonce: `0x${string}`;
                resourceBounds: {
                    l1Gas: {
                        maxAmount: bigint;
                        maxPricePerUnit: bigint;
                    };
                    l2Gas: {
                        maxAmount: bigint;
                        maxPricePerUnit: bigint;
                    };
                };
                tip: bigint;
                paymasterData: readonly `0x${string}`[];
                accountDeploymentData: readonly `0x${string}`[];
                nonceDataAvailabilityMode: "unknown" | "l1" | "l2";
                feeDataAvailabilityMode: "unknown" | "l1" | "l2";
            };
        }) | ({
            _tag: "deploy";
        } & {
            deploy: {
                contractAddressSalt: `0x${string}`;
                constructorCalldata: readonly `0x${string}`[];
                classHash: `0x${string}`;
            };
        }) | ({
            _tag: "declareV0";
        } & {
            declareV0: {
                senderAddress: `0x${string}`;
                maxFee: `0x${string}`;
                signature: readonly `0x${string}`[];
                classHash: `0x${string}`;
            };
        }) | ({
            _tag: "declareV1";
        } & {
            declareV1: {
                senderAddress: `0x${string}`;
                maxFee: `0x${string}`;
                signature: readonly `0x${string}`[];
                nonce: `0x${string}`;
                classHash: `0x${string}`;
            };
        }) | ({
            _tag: "declareV2";
        } & {
            declareV2: {
                senderAddress: `0x${string}`;
                compiledClassHash: `0x${string}`;
                maxFee: `0x${string}`;
                signature: readonly `0x${string}`[];
                nonce: `0x${string}`;
                classHash: `0x${string}`;
            };
        }) | ({
            _tag: "declareV3";
        } & {
            declareV3: {
                senderAddress: `0x${string}`;
                compiledClassHash: `0x${string}`;
                signature: readonly `0x${string}`[];
                nonce: `0x${string}`;
                classHash: `0x${string}`;
                resourceBounds: {
                    l1Gas: {
                        maxAmount: bigint;
                        maxPricePerUnit: bigint;
                    };
                    l2Gas: {
                        maxAmount: bigint;
                        maxPricePerUnit: bigint;
                    };
                };
                tip: bigint;
                paymasterData: readonly `0x${string}`[];
                accountDeploymentData: readonly `0x${string}`[];
                nonceDataAvailabilityMode: "unknown" | "l1" | "l2";
                feeDataAvailabilityMode: "unknown" | "l1" | "l2";
            };
        }) | ({
            _tag: "l1Handler";
        } & {
            l1Handler: {
                nonce: bigint;
                contractAddress: `0x${string}`;
                entryPointSelector: `0x${string}`;
                calldata: readonly `0x${string}`[];
            };
        }) | ({
            _tag: "deployAccountV1";
        } & {
            deployAccountV1: {
                maxFee: `0x${string}`;
                signature: readonly `0x${string}`[];
                nonce: `0x${string}`;
                contractAddressSalt: `0x${string}`;
                constructorCalldata: readonly `0x${string}`[];
                classHash: `0x${string}`;
            };
        }) | ({
            _tag: "deployAccountV3";
        } & {
            deployAccountV3: {
                signature: readonly `0x${string}`[];
                nonce: `0x${string}`;
                contractAddressSalt: `0x${string}`;
                constructorCalldata: readonly `0x${string}`[];
                classHash: `0x${string}`;
                resourceBounds: {
                    l1Gas: {
                        maxAmount: bigint;
                        maxPricePerUnit: bigint;
                    };
                    l2Gas: {
                        maxAmount: bigint;
                        maxPricePerUnit: bigint;
                    };
                };
                tip: bigint;
                paymasterData: readonly `0x${string}`[];
                nonceDataAvailabilityMode: "unknown" | "l1" | "l2";
                feeDataAvailabilityMode: "unknown" | "l1" | "l2";
            };
        });
    }[], readonly {
        filterIds?: readonly number[] | undefined;
        meta?: {
            transactionIndex?: number | undefined;
            transactionHash?: FieldElement | undefined;
            transactionStatus?: TransactionStatus$1 | undefined;
        } | undefined;
        transaction?: (({
            $case: "invokeV0";
        } & {
            invokeV0: {
                maxFee?: FieldElement | undefined;
                signature?: readonly FieldElement[] | undefined;
                contractAddress?: FieldElement | undefined;
                entryPointSelector?: FieldElement | undefined;
                calldata?: readonly FieldElement[] | undefined;
            };
        }) | ({
            $case: "invokeV1";
        } & {
            invokeV1: {
                senderAddress?: FieldElement | undefined;
                calldata?: readonly FieldElement[] | undefined;
                maxFee?: FieldElement | undefined;
                signature?: readonly FieldElement[] | undefined;
                nonce?: FieldElement | undefined;
            };
        }) | ({
            $case: "invokeV3";
        } & {
            invokeV3: {
                senderAddress?: FieldElement | undefined;
                calldata?: readonly FieldElement[] | undefined;
                signature?: readonly FieldElement[] | undefined;
                nonce?: FieldElement | undefined;
                resourceBounds?: {
                    l1Gas?: {
                        maxAmount?: bigint | undefined;
                        maxPricePerUnit?: Uint128 | undefined;
                    } | undefined;
                    l2Gas?: {
                        maxAmount?: bigint | undefined;
                        maxPricePerUnit?: Uint128 | undefined;
                    } | undefined;
                } | undefined;
                tip?: bigint | undefined;
                paymasterData?: readonly FieldElement[] | undefined;
                accountDeploymentData?: readonly FieldElement[] | undefined;
                nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
                feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            };
        }) | ({
            $case: "deploy";
        } & {
            deploy: {
                contractAddressSalt?: FieldElement | undefined;
                constructorCalldata?: readonly FieldElement[] | undefined;
                classHash?: FieldElement | undefined;
            };
        }) | ({
            $case: "declareV0";
        } & {
            declareV0: {
                senderAddress?: FieldElement | undefined;
                maxFee?: FieldElement | undefined;
                signature?: readonly FieldElement[] | undefined;
                classHash?: FieldElement | undefined;
            };
        }) | ({
            $case: "declareV1";
        } & {
            declareV1: {
                senderAddress?: FieldElement | undefined;
                maxFee?: FieldElement | undefined;
                signature?: readonly FieldElement[] | undefined;
                nonce?: FieldElement | undefined;
                classHash?: FieldElement | undefined;
            };
        }) | ({
            $case: "declareV2";
        } & {
            declareV2: {
                senderAddress?: FieldElement | undefined;
                compiledClassHash?: FieldElement | undefined;
                maxFee?: FieldElement | undefined;
                signature?: readonly FieldElement[] | undefined;
                nonce?: FieldElement | undefined;
                classHash?: FieldElement | undefined;
            };
        }) | ({
            $case: "declareV3";
        } & {
            declareV3: {
                senderAddress?: FieldElement | undefined;
                compiledClassHash?: FieldElement | undefined;
                signature?: readonly FieldElement[] | undefined;
                nonce?: FieldElement | undefined;
                classHash?: FieldElement | undefined;
                resourceBounds?: {
                    l1Gas?: {
                        maxAmount?: bigint | undefined;
                        maxPricePerUnit?: Uint128 | undefined;
                    } | undefined;
                    l2Gas?: {
                        maxAmount?: bigint | undefined;
                        maxPricePerUnit?: Uint128 | undefined;
                    } | undefined;
                } | undefined;
                tip?: bigint | undefined;
                paymasterData?: readonly FieldElement[] | undefined;
                accountDeploymentData?: readonly FieldElement[] | undefined;
                nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
                feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            };
        }) | ({
            $case: "l1Handler";
        } & {
            l1Handler: {
                nonce?: bigint | undefined;
                contractAddress?: FieldElement | undefined;
                entryPointSelector?: FieldElement | undefined;
                calldata?: readonly FieldElement[] | undefined;
            };
        }) | ({
            $case: "deployAccountV1";
        } & {
            deployAccountV1: {
                maxFee?: FieldElement | undefined;
                signature?: readonly FieldElement[] | undefined;
                nonce?: FieldElement | undefined;
                contractAddressSalt?: FieldElement | undefined;
                constructorCalldata?: readonly FieldElement[] | undefined;
                classHash?: FieldElement | undefined;
            };
        }) | ({
            $case: "deployAccountV3";
        } & {
            deployAccountV3: {
                signature?: readonly FieldElement[] | undefined;
                nonce?: FieldElement | undefined;
                contractAddressSalt?: FieldElement | undefined;
                constructorCalldata?: readonly FieldElement[] | undefined;
                classHash?: FieldElement | undefined;
                resourceBounds?: {
                    l1Gas?: {
                        maxAmount?: bigint | undefined;
                        maxPricePerUnit?: Uint128 | undefined;
                    } | undefined;
                    l2Gas?: {
                        maxAmount?: bigint | undefined;
                        maxPricePerUnit?: Uint128 | undefined;
                    } | undefined;
                } | undefined;
                tip?: bigint | undefined;
                paymasterData?: readonly FieldElement[] | undefined;
                nonceDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
                feeDataAvailabilityMode?: DataAvailabilityMode$1 | undefined;
            };
        })) | undefined;
    }[] | undefined>;
    receipts: Codec<readonly {
        filterIds: readonly number[];
        meta: {
            transactionIndex: number;
            transactionHash: `0x${string}`;
            actualFee: {
                amount: `0x${string}`;
                unit: "unknown" | "wei" | "fri";
            };
            executionResources: {
                computation: {
                    steps: bigint;
                    memoryHoles?: bigint | undefined;
                    rangeCheckBuiltinApplications?: bigint | undefined;
                    pedersenBuiltinApplications?: bigint | undefined;
                    poseidonBuiltinApplications?: bigint | undefined;
                    ecOpBuiltinApplications?: bigint | undefined;
                    ecdsaBuiltinApplications?: bigint | undefined;
                    bitwiseBuiltinApplications?: bigint | undefined;
                    keccakBuiltinApplications?: bigint | undefined;
                    segmentArenaBuiltin?: bigint | undefined;
                };
                dataAvailability: {
                    l1Gas: bigint;
                    l1DataGas: bigint;
                };
            };
            executionResult: ({
                _tag: "succeeded";
            } & {
                succeeded: {};
            }) | ({
                _tag: "reverted";
            } & {
                reverted: {
                    reason?: string | undefined;
                };
            });
        };
        receipt: ({
            _tag: "deploy";
        } & {
            deploy: {
                contractAddress: `0x${string}`;
            };
        }) | ({
            _tag: "l1Handler";
        } & {
            l1Handler: {
                messageHash: Uint8Array;
            };
        }) | ({
            _tag: "invoke";
        } & {
            invoke: {};
        }) | ({
            _tag: "declare";
        } & {
            declare: {};
        }) | ({
            _tag: "deployAccount";
        } & {
            deployAccount: {
                contractAddress: `0x${string}`;
            };
        });
    }[], readonly {
        filterIds?: readonly number[] | undefined;
        meta?: {
            transactionIndex?: number | undefined;
            transactionHash?: FieldElement | undefined;
            actualFee?: {
                amount?: FieldElement | undefined;
                unit?: PriceUnit$1 | undefined;
            } | undefined;
            executionResources?: {
                computation?: {
                    steps?: bigint | undefined;
                    memoryHoles?: bigint | undefined;
                    rangeCheckBuiltinApplications?: bigint | undefined;
                    pedersenBuiltinApplications?: bigint | undefined;
                    poseidonBuiltinApplications?: bigint | undefined;
                    ecOpBuiltinApplications?: bigint | undefined;
                    ecdsaBuiltinApplications?: bigint | undefined;
                    bitwiseBuiltinApplications?: bigint | undefined;
                    keccakBuiltinApplications?: bigint | undefined;
                    segmentArenaBuiltin?: bigint | undefined;
                } | undefined;
                dataAvailability?: {
                    l1Gas?: bigint | undefined;
                    l1DataGas?: bigint | undefined;
                } | undefined;
            } | undefined;
            executionResult?: (({
                $case: "succeeded";
            } & {
                succeeded: {};
            }) | ({
                $case: "reverted";
            } & {
                reverted: {
                    reason?: string | undefined;
                };
            })) | undefined;
        } | undefined;
        receipt?: (({
            $case: "deploy";
        } & {
            deploy: {
                contractAddress?: FieldElement | undefined;
            };
        }) | ({
            $case: "l1Handler";
        } & {
            l1Handler: {
                messageHash?: Uint8Array | undefined;
            };
        }) | ({
            $case: "invoke";
        } & {
            invoke: {};
        }) | ({
            $case: "declare";
        } & {
            declare: {};
        }) | ({
            $case: "deployAccount";
        } & {
            deployAccount: {
                contractAddress?: FieldElement | undefined;
            };
        })) | undefined;
    }[] | undefined>;
    events: Codec<readonly {
        filterIds: readonly number[];
        address: `0x${string}`;
        keys: readonly `0x${string}`[];
        data: readonly `0x${string}`[];
        eventIndex: number;
        transactionIndex: number;
        transactionHash: `0x${string}`;
        transactionStatus: "unknown" | "succeeded" | "reverted";
        eventIndexInTransaction: number;
    }[], readonly {
        filterIds?: readonly number[] | undefined;
        address?: FieldElement | undefined;
        keys?: readonly FieldElement[] | undefined;
        data?: readonly FieldElement[] | undefined;
        eventIndex?: number | undefined;
        transactionIndex?: number | undefined;
        transactionHash?: FieldElement | undefined;
        transactionStatus?: TransactionStatus$1 | undefined;
        eventIndexInTransaction?: number | undefined;
    }[] | undefined>;
    messages: Codec<readonly {
        filterIds: readonly number[];
        fromAddress: `0x${string}`;
        toAddress: `0x${string}`;
        payload: readonly `0x${string}`[];
        messageIndex: number;
        transactionIndex: number;
        transactionHash: `0x${string}`;
        transactionStatus: "unknown" | "succeeded" | "reverted";
        messageIndexInTransaction: number;
    }[], readonly {
        filterIds?: readonly number[] | undefined;
        fromAddress?: FieldElement | undefined;
        toAddress?: FieldElement | undefined;
        payload?: readonly FieldElement[] | undefined;
        messageIndex?: number | undefined;
        transactionIndex?: number | undefined;
        transactionHash?: FieldElement | undefined;
        transactionStatus?: TransactionStatus$1 | undefined;
        messageIndexInTransaction?: number | undefined;
    }[] | undefined>;
    traces: Codec<readonly {
        filterIds: readonly number[];
        transactionIndex: number;
        transactionHash: `0x${string}`;
        traceRoot: ({
            _tag: "l1Handler";
        } & {
            l1Handler: {
                functionInvocation?: {
                    contractAddress: `0x${string}`;
                    entryPointSelector: `0x${string}`;
                    calldata: readonly `0x${string}`[];
                    callerAddress: `0x${string}`;
                    classHash: `0x${string}`;
                    callType: "unknown" | "libraryCall" | "call" | "delegate";
                    result: readonly `0x${string}`[];
                    events: readonly number[];
                    messages: readonly number[];
                    calls: FunctionInvocation[];
                } | undefined;
            };
        }) | ({
            _tag: "invoke";
        } & {
            invoke: {
                validateInvocation?: {
                    contractAddress: `0x${string}`;
                    entryPointSelector: `0x${string}`;
                    calldata: readonly `0x${string}`[];
                    callerAddress: `0x${string}`;
                    classHash: `0x${string}`;
                    callType: "unknown" | "libraryCall" | "call" | "delegate";
                    result: readonly `0x${string}`[];
                    events: readonly number[];
                    messages: readonly number[];
                    calls: FunctionInvocation[];
                } | undefined;
                executeInvocation: ({
                    _tag: "reverted";
                } & {
                    reverted: {
                        reason?: string | undefined;
                    };
                }) | ({
                    _tag: "success";
                } & {
                    success: {
                        contractAddress: `0x${string}`;
                        entryPointSelector: `0x${string}`;
                        calldata: readonly `0x${string}`[];
                        callerAddress: `0x${string}`;
                        classHash: `0x${string}`;
                        callType: "unknown" | "libraryCall" | "call" | "delegate";
                        result: readonly `0x${string}`[];
                        events: readonly number[];
                        messages: readonly number[];
                        calls: FunctionInvocation[];
                    };
                });
                feeTransferInvocation?: {
                    contractAddress: `0x${string}`;
                    entryPointSelector: `0x${string}`;
                    calldata: readonly `0x${string}`[];
                    callerAddress: `0x${string}`;
                    classHash: `0x${string}`;
                    callType: "unknown" | "libraryCall" | "call" | "delegate";
                    result: readonly `0x${string}`[];
                    events: readonly number[];
                    messages: readonly number[];
                    calls: FunctionInvocation[];
                } | undefined;
            };
        }) | ({
            _tag: "declare";
        } & {
            declare: {
                validateInvocation?: {
                    contractAddress: `0x${string}`;
                    entryPointSelector: `0x${string}`;
                    calldata: readonly `0x${string}`[];
                    callerAddress: `0x${string}`;
                    classHash: `0x${string}`;
                    callType: "unknown" | "libraryCall" | "call" | "delegate";
                    result: readonly `0x${string}`[];
                    events: readonly number[];
                    messages: readonly number[];
                    calls: FunctionInvocation[];
                } | undefined;
                feeTransferInvocation?: {
                    contractAddress: `0x${string}`;
                    entryPointSelector: `0x${string}`;
                    calldata: readonly `0x${string}`[];
                    callerAddress: `0x${string}`;
                    classHash: `0x${string}`;
                    callType: "unknown" | "libraryCall" | "call" | "delegate";
                    result: readonly `0x${string}`[];
                    events: readonly number[];
                    messages: readonly number[];
                    calls: FunctionInvocation[];
                } | undefined;
            };
        }) | ({
            _tag: "deployAccount";
        } & {
            deployAccount: {
                validateInvocation?: {
                    contractAddress: `0x${string}`;
                    entryPointSelector: `0x${string}`;
                    calldata: readonly `0x${string}`[];
                    callerAddress: `0x${string}`;
                    classHash: `0x${string}`;
                    callType: "unknown" | "libraryCall" | "call" | "delegate";
                    result: readonly `0x${string}`[];
                    events: readonly number[];
                    messages: readonly number[];
                    calls: FunctionInvocation[];
                } | undefined;
                constructorInvocation?: {
                    contractAddress: `0x${string}`;
                    entryPointSelector: `0x${string}`;
                    calldata: readonly `0x${string}`[];
                    callerAddress: `0x${string}`;
                    classHash: `0x${string}`;
                    callType: "unknown" | "libraryCall" | "call" | "delegate";
                    result: readonly `0x${string}`[];
                    events: readonly number[];
                    messages: readonly number[];
                    calls: FunctionInvocation[];
                } | undefined;
                feeTransferInvocation?: {
                    contractAddress: `0x${string}`;
                    entryPointSelector: `0x${string}`;
                    calldata: readonly `0x${string}`[];
                    callerAddress: `0x${string}`;
                    classHash: `0x${string}`;
                    callType: "unknown" | "libraryCall" | "call" | "delegate";
                    result: readonly `0x${string}`[];
                    events: readonly number[];
                    messages: readonly number[];
                    calls: FunctionInvocation[];
                } | undefined;
            };
        });
    }[], readonly {
        filterIds?: readonly number[] | undefined;
        transactionIndex?: number | undefined;
        transactionHash?: FieldElement | undefined;
        traceRoot?: (({
            $case: "l1Handler";
        } & {
            l1Handler: {
                functionInvocation?: FunctionInvocation$1 | undefined;
            };
        }) | ({
            $case: "invoke";
        } & {
            invoke: {
                validateInvocation?: FunctionInvocation$1 | undefined;
                executeInvocation?: (({
                    $case: "reverted";
                } & {
                    reverted: {
                        reason?: string | undefined;
                    };
                }) | ({
                    $case: "success";
                } & {
                    success: FunctionInvocation$1;
                })) | undefined;
                feeTransferInvocation?: FunctionInvocation$1 | undefined;
            };
        }) | ({
            $case: "declare";
        } & {
            declare: {
                validateInvocation?: FunctionInvocation$1 | undefined;
                feeTransferInvocation?: FunctionInvocation$1 | undefined;
            };
        }) | ({
            $case: "deployAccount";
        } & {
            deployAccount: {
                validateInvocation?: FunctionInvocation$1 | undefined;
                constructorInvocation?: FunctionInvocation$1 | undefined;
                feeTransferInvocation?: FunctionInvocation$1 | undefined;
            };
        })) | undefined;
    }[] | undefined>;
    storageDiffs: Codec<readonly {
        filterIds: readonly number[];
        contractAddress: `0x${string}`;
        storageEntries: readonly {
            key: `0x${string}`;
            value: `0x${string}`;
        }[];
    }[], readonly {
        filterIds?: readonly number[] | undefined;
        contractAddress?: FieldElement | undefined;
        storageEntries?: readonly {
            key?: FieldElement | undefined;
            value?: FieldElement | undefined;
        }[] | undefined;
    }[] | undefined>;
    contractChanges: Codec<readonly {
        filterIds: readonly number[];
        change: ({
            _tag: "declaredClass";
        } & {
            declaredClass: {
                classHash?: `0x${string}` | undefined;
                compiledClassHash?: `0x${string}` | undefined;
            };
        }) | ({
            _tag: "replacedClass";
        } & {
            replacedClass: {
                contractAddress?: `0x${string}` | undefined;
                classHash?: `0x${string}` | undefined;
            };
        }) | ({
            _tag: "deployedContract";
        } & {
            deployedContract: {
                contractAddress?: `0x${string}` | undefined;
                classHash?: `0x${string}` | undefined;
            };
        });
    }[], readonly {
        filterIds?: readonly number[] | undefined;
        change?: (({
            $case: "declaredClass";
        } & {
            declaredClass: {
                classHash?: FieldElement | undefined;
                compiledClassHash?: FieldElement | undefined;
            };
        }) | ({
            $case: "replacedClass";
        } & {
            replacedClass: {
                contractAddress?: FieldElement | undefined;
                classHash?: FieldElement | undefined;
            };
        }) | ({
            $case: "deployedContract";
        } & {
            deployedContract: {
                contractAddress?: FieldElement | undefined;
                classHash?: FieldElement | undefined;
            };
        })) | undefined;
    }[] | undefined>;
    nonceUpdates: Codec<readonly {
        filterIds: readonly number[];
        contractAddress: `0x${string}`;
        nonce: `0x${string}`;
    }[], readonly {
        filterIds?: readonly number[] | undefined;
        contractAddress?: FieldElement | undefined;
        nonce?: FieldElement | undefined;
    }[] | undefined>;
}>;
type Block = Readonly<CodecType<typeof Block>>;
declare const BlockFromBytes: Codec<Block, Uint8Array>;

/** Header options.
 *
 * - `always`: receive all block headers.
 * - `on_data`: receive headers only if any other filter matches.
 * - `on_data_or_on_new_block`: receive headers only if any other filter matches and for "live" blocks.
 */
declare const HeaderFilter: Codec<"always" | "on_data" | "on_data_or_on_new_block" | "unknown", HeaderFilter$1>;
type HeaderFilter = CodecType<typeof HeaderFilter>;
/** An event key filter. Use `null` to match any event key. */
declare const Key: Codec<FieldElement$1 | null, {
    value?: FieldElement | undefined;
}>;
type Key = CodecType<typeof Key>;
declare const TransactionStatusFilter: Codec<"succeeded" | "reverted" | "all" | "unknown", TransactionStatusFilter$1>;
type TransactionStatusFilter = CodecType<typeof TransactionStatusFilter>;
/** Filter events.
 *
 * @prop address Filter events by the sender address.
 * @prop keys Filter events by the event keys. Use `null` to match any key.
 * @prop strict If `true`, then the filter will only match events that have exactly the
 * same number of keys as specified in `keys`.
 * @prop transactionStatus Filter based on the transaction status.
 * @prop includeTransaction Include the transaction that emitted the event.
 * @prop includeReceipt Include the transaction receipt.
 * @prop includeMessages Include the messages that were sent to L1 in the same transaction.
 * @prop includeSiblings Include the sibling events of the matched events.
 * @prop includeTransactionTrace Include the trace of the transaction that emitted the event.
 */
declare const EventFilter: MessageCodec<{
    id: Codec<number | undefined, number | undefined>;
    address: Codec<`0x${string}` | undefined, FieldElement | undefined>;
    keys: Codec<readonly (`0x${string}` | null)[] | undefined, readonly {
        value?: FieldElement | undefined;
    }[] | undefined>;
    strict: Codec<boolean | undefined, boolean | undefined>;
    transactionStatus: Codec<"unknown" | "succeeded" | "reverted" | "all" | undefined, TransactionStatusFilter$1 | undefined>;
    includeTransaction: Codec<boolean | undefined, boolean | undefined>;
    includeReceipt: Codec<boolean | undefined, boolean | undefined>;
    includeMessages: Codec<boolean | undefined, boolean | undefined>;
    includeSiblings: Codec<boolean | undefined, boolean | undefined>;
    includeTransactionTrace: Codec<boolean | undefined, boolean | undefined>;
}>;
type EventFilter = Readonly<CodecType<typeof EventFilter>>;
/** Filter messages to L1.
 *
 * @prop fromAddress Filter messages by the sender address (on L2).
 * @prop toAddress Filter messages by the recipient address (on L1).
 * @prop transactionStatus Filter based on the transaction status.
 * @prop includeTransaction Include the transaction that sent the message.
 * @prop includeReceipt Include the transaction receipt.
 * @prop includeEvents Include events from the same transaction.
 * @prop includeTransactionTrace Include the trace of the transaction that sent the message.
 */
declare const MessageToL1Filter: MessageCodec<{
    id: Codec<number | undefined, number | undefined>;
    fromAddress: Codec<`0x${string}` | undefined, FieldElement | undefined>;
    toAddress: Codec<`0x${string}` | undefined, FieldElement | undefined>;
    transactionStatus: Codec<"unknown" | "succeeded" | "reverted" | "all" | undefined, TransactionStatusFilter$1 | undefined>;
    includeTransaction: Codec<boolean | undefined, boolean | undefined>;
    includeReceipt: Codec<boolean | undefined, boolean | undefined>;
    includeEvents: Codec<boolean | undefined, boolean | undefined>;
    includeTransactionTrace: Codec<boolean | undefined, boolean | undefined>;
}>;
type MessageToL1Filter = Readonly<CodecType<typeof MessageToL1Filter>>;
declare const InvokeTransactionV0Filter: MessageCodec<{}>;
type InvokeTransactionV0Filter = Readonly<CodecType<typeof InvokeTransactionV0Filter>>;
declare const InvokeTransactionV1Filter: MessageCodec<{}>;
type InvokeTransactionV1Filter = Readonly<CodecType<typeof InvokeTransactionV1Filter>>;
declare const InvokeTransactionV3Filter: MessageCodec<{}>;
type InvokeTransactionV3Filter = Readonly<CodecType<typeof InvokeTransactionV3Filter>>;
declare const DeployTransactionFilter: MessageCodec<{}>;
type DeployTransactionFilter = Readonly<CodecType<typeof DeployTransactionFilter>>;
declare const DeclareV0TransactionFilter: MessageCodec<{}>;
type DeclareV0TransactionFilter = Readonly<CodecType<typeof DeclareV0TransactionFilter>>;
declare const DeclareV1TransactionFilter: MessageCodec<{}>;
type DeclareV1TransactionFilter = Readonly<CodecType<typeof DeclareV1TransactionFilter>>;
declare const DeclareV2TransactionFilter: MessageCodec<{}>;
type DeclareV2TransactionFilter = Readonly<CodecType<typeof DeclareV2TransactionFilter>>;
declare const DeclareV3TransactionFilter: MessageCodec<{}>;
type DeclareV3TransactionFilter = Readonly<CodecType<typeof DeclareV3TransactionFilter>>;
declare const L1HandlerTransactionFilter: MessageCodec<{}>;
type L1HandlerTransactionFilter = Readonly<CodecType<typeof L1HandlerTransactionFilter>>;
declare const DeployAccountV1TransactionFilter: MessageCodec<{}>;
type DeployAccountV1TransactionFilter = Readonly<CodecType<typeof DeployAccountV1TransactionFilter>>;
declare const DeployAccountV3TransactionFilter: MessageCodec<{}>;
type DeployAccountV3TransactionFilter = Readonly<CodecType<typeof DeployAccountV3TransactionFilter>>;
/** Filter transactions.
 *
 * @prop transactionStatus Filter based on the transaction status.
 * @prop includeReceipt Include the transaction receipt.
 * @prop includeEvents Include events from the same transaction.
 * @prop includeMessages Include messages sent in the transaction.
 * @prop includeTrace Include the transaction's trace.
 */
declare const TransactionFilter: MessageCodec<{
    id: Codec<number | undefined, number | undefined>;
    transactionStatus: Codec<"unknown" | "succeeded" | "reverted" | "all" | undefined, TransactionStatusFilter$1 | undefined>;
    includeReceipt: Codec<boolean | undefined, boolean | undefined>;
    includeMessages: Codec<boolean | undefined, boolean | undefined>;
    includeEvents: Codec<boolean | undefined, boolean | undefined>;
    includeTrace: Codec<boolean | undefined, boolean | undefined>;
    transactionType: Codec<(({
        _tag: "invokeV0";
    } & {
        invokeV0: {};
    }) | ({
        _tag: "invokeV1";
    } & {
        invokeV1: {};
    }) | ({
        _tag: "invokeV3";
    } & {
        invokeV3: {};
    }) | ({
        _tag: "deploy";
    } & {
        deploy: {};
    }) | ({
        _tag: "declareV0";
    } & {
        declareV0: {};
    }) | ({
        _tag: "declareV1";
    } & {
        declareV1: {};
    }) | ({
        _tag: "declareV2";
    } & {
        declareV2: {};
    }) | ({
        _tag: "declareV3";
    } & {
        declareV3: {};
    }) | ({
        _tag: "l1Handler";
    } & {
        l1Handler: {};
    }) | ({
        _tag: "deployAccountV1";
    } & {
        deployAccountV1: {};
    }) | ({
        _tag: "deployAccountV3";
    } & {
        deployAccountV3: {};
    })) | undefined, (({
        $case: "invokeV0";
    } & {
        invokeV0: {};
    }) | ({
        $case: "invokeV1";
    } & {
        invokeV1: {};
    }) | ({
        $case: "invokeV3";
    } & {
        invokeV3: {};
    }) | ({
        $case: "deploy";
    } & {
        deploy: {};
    }) | ({
        $case: "declareV0";
    } & {
        declareV0: {};
    }) | ({
        $case: "declareV1";
    } & {
        declareV1: {};
    }) | ({
        $case: "declareV2";
    } & {
        declareV2: {};
    }) | ({
        $case: "declareV3";
    } & {
        declareV3: {};
    }) | ({
        $case: "l1Handler";
    } & {
        l1Handler: {};
    }) | ({
        $case: "deployAccountV1";
    } & {
        deployAccountV1: {};
    }) | ({
        $case: "deployAccountV3";
    } & {
        deployAccountV3: {};
    })) | undefined>;
}>;
type TransactionFilter = Readonly<CodecType<typeof TransactionFilter>>;
/** Filter storage diffs.
 *
 *  @prop contractAddress Filter by contract address.
 */
declare const StorageDiffFilter: MessageCodec<{
    id: Codec<number | undefined, number | undefined>;
    contractAddress: Codec<`0x${string}` | undefined, FieldElement | undefined>;
}>;
type StorageDiffFilter = Readonly<CodecType<typeof StorageDiffFilter>>;
/** Filter declared classes. */
declare const DeclaredClassFilter: MessageCodec<{}>;
type DeclaredClassFilter = Readonly<CodecType<typeof DeclaredClassFilter>>;
declare const ReplacedClassFilter: MessageCodec<{}>;
type ReplacedClassFilter = Readonly<CodecType<typeof ReplacedClassFilter>>;
declare const DeployedContractFilter: MessageCodec<{}>;
type DeployedContractFilter = Readonly<CodecType<typeof DeployedContractFilter>>;
/** Filter contract changes. */
declare const ContractChangeFilter: MessageCodec<{
    id: Codec<number | undefined, number | undefined>;
    change: Codec<(({
        _tag: "declaredClass";
    } & {
        declaredClass: {};
    }) | ({
        _tag: "replacedClass";
    } & {
        replacedClass: {};
    }) | ({
        _tag: "deployedContract";
    } & {
        deployedContract: {};
    })) | undefined, (({
        $case: "declaredClass";
    } & {
        declaredClass: {};
    }) | ({
        $case: "replacedClass";
    } & {
        replacedClass: {};
    }) | ({
        $case: "deployedContract";
    } & {
        deployedContract: {};
    })) | undefined>;
}>;
type ContractChangeFilter = Readonly<CodecType<typeof ContractChangeFilter>>;
/** Filter updates to nonces.
 *
 * @prop contractAddress Filter by contract address.
 */
declare const NonceUpdateFilter: MessageCodec<{
    id: Codec<number | undefined, number | undefined>;
    contractAddress: Codec<`0x${string}` | undefined, FieldElement | undefined>;
}>;
type NonceUpdateFilter = Readonly<CodecType<typeof NonceUpdateFilter>>;
declare const Filter: MessageCodec<{
    header: Codec<"always" | "on_data" | "on_data_or_on_new_block" | "unknown" | undefined, HeaderFilter$1 | undefined>;
    transactions: Codec<readonly {
        id?: number | undefined;
        transactionStatus?: "unknown" | "succeeded" | "reverted" | "all" | undefined;
        includeReceipt?: boolean | undefined;
        includeMessages?: boolean | undefined;
        includeEvents?: boolean | undefined;
        includeTrace?: boolean | undefined;
        transactionType?: (({
            _tag: "invokeV0";
        } & {
            invokeV0: {};
        }) | ({
            _tag: "invokeV1";
        } & {
            invokeV1: {};
        }) | ({
            _tag: "invokeV3";
        } & {
            invokeV3: {};
        }) | ({
            _tag: "deploy";
        } & {
            deploy: {};
        }) | ({
            _tag: "declareV0";
        } & {
            declareV0: {};
        }) | ({
            _tag: "declareV1";
        } & {
            declareV1: {};
        }) | ({
            _tag: "declareV2";
        } & {
            declareV2: {};
        }) | ({
            _tag: "declareV3";
        } & {
            declareV3: {};
        }) | ({
            _tag: "l1Handler";
        } & {
            l1Handler: {};
        }) | ({
            _tag: "deployAccountV1";
        } & {
            deployAccountV1: {};
        }) | ({
            _tag: "deployAccountV3";
        } & {
            deployAccountV3: {};
        })) | undefined;
    }[] | undefined, readonly {
        id?: number | undefined;
        transactionStatus?: TransactionStatusFilter$1 | undefined;
        includeReceipt?: boolean | undefined;
        includeMessages?: boolean | undefined;
        includeEvents?: boolean | undefined;
        includeTrace?: boolean | undefined;
        transactionType?: (({
            $case: "invokeV0";
        } & {
            invokeV0: {};
        }) | ({
            $case: "invokeV1";
        } & {
            invokeV1: {};
        }) | ({
            $case: "invokeV3";
        } & {
            invokeV3: {};
        }) | ({
            $case: "deploy";
        } & {
            deploy: {};
        }) | ({
            $case: "declareV0";
        } & {
            declareV0: {};
        }) | ({
            $case: "declareV1";
        } & {
            declareV1: {};
        }) | ({
            $case: "declareV2";
        } & {
            declareV2: {};
        }) | ({
            $case: "declareV3";
        } & {
            declareV3: {};
        }) | ({
            $case: "l1Handler";
        } & {
            l1Handler: {};
        }) | ({
            $case: "deployAccountV1";
        } & {
            deployAccountV1: {};
        }) | ({
            $case: "deployAccountV3";
        } & {
            deployAccountV3: {};
        })) | undefined;
    }[] | undefined>;
    events: Codec<readonly {
        id?: number | undefined;
        address?: `0x${string}` | undefined;
        keys?: readonly (`0x${string}` | null)[] | undefined;
        strict?: boolean | undefined;
        transactionStatus?: "unknown" | "succeeded" | "reverted" | "all" | undefined;
        includeTransaction?: boolean | undefined;
        includeReceipt?: boolean | undefined;
        includeMessages?: boolean | undefined;
        includeSiblings?: boolean | undefined;
        includeTransactionTrace?: boolean | undefined;
    }[] | undefined, readonly {
        id?: number | undefined;
        address?: FieldElement | undefined;
        keys?: readonly {
            value?: FieldElement | undefined;
        }[] | undefined;
        strict?: boolean | undefined;
        transactionStatus?: TransactionStatusFilter$1 | undefined;
        includeTransaction?: boolean | undefined;
        includeReceipt?: boolean | undefined;
        includeMessages?: boolean | undefined;
        includeSiblings?: boolean | undefined;
        includeTransactionTrace?: boolean | undefined;
    }[] | undefined>;
    messages: Codec<readonly {
        id?: number | undefined;
        fromAddress?: `0x${string}` | undefined;
        toAddress?: `0x${string}` | undefined;
        transactionStatus?: "unknown" | "succeeded" | "reverted" | "all" | undefined;
        includeTransaction?: boolean | undefined;
        includeReceipt?: boolean | undefined;
        includeEvents?: boolean | undefined;
        includeTransactionTrace?: boolean | undefined;
    }[] | undefined, readonly {
        id?: number | undefined;
        fromAddress?: FieldElement | undefined;
        toAddress?: FieldElement | undefined;
        transactionStatus?: TransactionStatusFilter$1 | undefined;
        includeTransaction?: boolean | undefined;
        includeReceipt?: boolean | undefined;
        includeEvents?: boolean | undefined;
        includeTransactionTrace?: boolean | undefined;
    }[] | undefined>;
    storageDiffs: Codec<readonly {
        id?: number | undefined;
        contractAddress?: `0x${string}` | undefined;
    }[] | undefined, readonly {
        id?: number | undefined;
        contractAddress?: FieldElement | undefined;
    }[] | undefined>;
    contractChanges: Codec<readonly {
        id?: number | undefined;
        change?: (({
            _tag: "declaredClass";
        } & {
            declaredClass: {};
        }) | ({
            _tag: "replacedClass";
        } & {
            replacedClass: {};
        }) | ({
            _tag: "deployedContract";
        } & {
            deployedContract: {};
        })) | undefined;
    }[] | undefined, readonly {
        id?: number | undefined;
        change?: (({
            $case: "declaredClass";
        } & {
            declaredClass: {};
        }) | ({
            $case: "replacedClass";
        } & {
            replacedClass: {};
        }) | ({
            $case: "deployedContract";
        } & {
            deployedContract: {};
        })) | undefined;
    }[] | undefined>;
    nonceUpdates: Codec<readonly {
        id?: number | undefined;
        contractAddress?: `0x${string}` | undefined;
    }[] | undefined, readonly {
        id?: number | undefined;
        contractAddress?: FieldElement | undefined;
    }[] | undefined>;
}>;
type Filter = Readonly<CodecType<typeof Filter>>;
declare const FilterFromBytes: Codec<Filter, Uint8Array>;
declare function mergeFilter(a: Filter, b: Filter): Filter;

/** Returns the transaction receipt for the given transaction index. */
declare function getReceipt(transactionIndex: number, params: {
    receipts: readonly TransactionReceipt[];
} | readonly TransactionReceipt[]): TransactionReceipt | undefined;
/** Returns the transaction for the given transaction index. */
declare function getTransaction(transactionIndex: number, params: {
    transactions: readonly Transaction[];
} | readonly Transaction[]): Transaction | undefined;

type AbiParameter = {
    name: string;
    type: string;
};
type StringToPrimitiveType<TAbi extends Abi, T extends string> = ExtractAbiEnum<TAbi, T> extends never ? StringToPrimitiveType$1<TAbi, T> : ExtractAbiEnum<TAbi, T> extends {
    type: "enum";
    variants: infer TVariants extends readonly AbiParameter[];
} ? {
    [Variant in TVariants[number] as Variant["name"]]: Variant["type"] extends "()" ? // Unit variant (no data): { _tag: "VariantName"; VariantName: null }
    {
        _tag: Variant["name"];
    } & {
        [K in Variant["name"]]: null;
    } : // Variant with data: { _tag: "VariantName"; VariantName: StringToPrimitiveType }
    {
        _tag: Variant["name"];
    } & {
        [K in Variant["name"]]: StringToPrimitiveType<TAbi, Variant["type"]>;
    };
}[TVariants[number]["name"]] : never;
type ResolveNestedVariantType<TAbi extends Abi, TTypeName extends string> = EventToPrimitiveType<TAbi, TTypeName>;
type VariantToTaggedUnion<TAbi extends Abi, TVariant extends AbiEventMember> = TVariant extends {
    kind: "nested";
} ? // Nested: Use the helper to resolve the payload type.
{
    _tag: TVariant["name"];
} & {
    [K in TVariant["name"]]: ResolveNestedVariantType<TAbi, TVariant["type"]>;
} : TVariant extends {
    kind: "flat";
} ? EventToPrimitiveType<TAbi, TVariant["type"]> : never;
type EventToPrimitiveType<TAbi extends Abi, TEventName extends ExtractAbiEventNames<TAbi>> = ExtractAbiEvent<TAbi, TEventName> extends infer TEventDef ? TEventDef extends {
    type: "event";
    kind: "struct";
    members: infer TMembers extends readonly AbiEventMember[];
} ? {
    [Member in TMembers[number] as Member["name"]]: StringToPrimitiveType<TAbi, Member["type"]>;
} : TEventDef extends {
    type: "event";
    kind: "enum";
    variants: infer TVariants extends readonly AbiEventMember[];
} ? {
    [Idx in keyof TVariants]: VariantToTaggedUnion<TAbi, TVariants[Idx]>;
}[number] : TEventDef extends {
    type: "event";
    kind: "enum";
    variants: [];
} ? never : never : never;

declare class DecodeEventError extends Error {
    constructor(message: string);
}
type DecodeEventArgs<TAbi extends Abi = Abi, TEventName extends ExtractAbiEventNames<TAbi> = ExtractAbiEventNames<TAbi>, TStrict extends boolean = true> = {
    abi: TAbi;
    eventName: TEventName;
    event: Event;
    strict?: TStrict;
};
type DecodedEvent<TAbi extends Abi = Abi, TEventName extends ExtractAbiEventNames<TAbi> = ExtractAbiEventNames<TAbi>> = Event & {
    eventName: TEventName;
    args: EventToPrimitiveType<TAbi, TEventName>;
};
type DecodeEventReturn<TAbi extends Abi = Abi, TEventName extends ExtractAbiEventNames<TAbi> = ExtractAbiEventNames<TAbi>, TStrict extends boolean = true> = TStrict extends true ? DecodedEvent<TAbi, TEventName> : DecodedEvent<TAbi, TEventName> | null;
/** Decodes a single event.
 *
 * If `strict: true`, this function throws on failure. Otherwise, returns null.
 */
declare function decodeEvent<TAbi extends Abi = Abi, TEventName extends ExtractAbiEventNames<TAbi> = ExtractAbiEventNames<TAbi>, TStrict extends boolean = true>(args: DecodeEventArgs<TAbi, TEventName, TStrict>): DecodeEventReturn<TAbi, TEventName, TStrict>;

/** Returns the selector of the provided `name` as a bigint. */
declare function getBigIntSelector(name: string): bigint;
/** Returns the selector of the provided `name` as a FieldElement. */
declare function getSelector(name: string): FieldElement$1;
/** Returns the selector of the provided event with `name` as a FieldElement.
 *
 * If the name is fully qualified, only the last part is used to compute the selector.
 */
declare function getEventSelector(name: string): FieldElement$1;

declare module "abi-wan-kanabi" {
    interface Config {
        AddressType: `0x${string}`;
        ClassHashType: `0x${string}`;
        FeltType: bigint;
        BigIntType: bigint;
        U256Type: bigint;
    }
}
declare const StarknetStream: StreamConfig<Readonly<{
    header?: "always" | "on_data" | "on_data_or_on_new_block" | "unknown" | undefined;
    transactions?: readonly {
        id?: number | undefined;
        transactionStatus?: "unknown" | "succeeded" | "reverted" | "all" | undefined;
        includeReceipt?: boolean | undefined;
        includeMessages?: boolean | undefined;
        includeEvents?: boolean | undefined;
        includeTrace?: boolean | undefined;
        transactionType?: (({
            _tag: "invokeV0";
        } & {
            invokeV0: {};
        }) | ({
            _tag: "invokeV1";
        } & {
            invokeV1: {};
        }) | ({
            _tag: "invokeV3";
        } & {
            invokeV3: {};
        }) | ({
            _tag: "deploy";
        } & {
            deploy: {};
        }) | ({
            _tag: "declareV0";
        } & {
            declareV0: {};
        }) | ({
            _tag: "declareV1";
        } & {
            declareV1: {};
        }) | ({
            _tag: "declareV2";
        } & {
            declareV2: {};
        }) | ({
            _tag: "declareV3";
        } & {
            declareV3: {};
        }) | ({
            _tag: "l1Handler";
        } & {
            l1Handler: {};
        }) | ({
            _tag: "deployAccountV1";
        } & {
            deployAccountV1: {};
        }) | ({
            _tag: "deployAccountV3";
        } & {
            deployAccountV3: {};
        })) | undefined;
    }[] | undefined;
    events?: readonly {
        id?: number | undefined;
        address?: `0x${string}` | undefined;
        keys?: readonly (`0x${string}` | null)[] | undefined;
        strict?: boolean | undefined;
        transactionStatus?: "unknown" | "succeeded" | "reverted" | "all" | undefined;
        includeTransaction?: boolean | undefined;
        includeReceipt?: boolean | undefined;
        includeMessages?: boolean | undefined;
        includeSiblings?: boolean | undefined;
        includeTransactionTrace?: boolean | undefined;
    }[] | undefined;
    messages?: readonly {
        id?: number | undefined;
        fromAddress?: `0x${string}` | undefined;
        toAddress?: `0x${string}` | undefined;
        transactionStatus?: "unknown" | "succeeded" | "reverted" | "all" | undefined;
        includeTransaction?: boolean | undefined;
        includeReceipt?: boolean | undefined;
        includeEvents?: boolean | undefined;
        includeTransactionTrace?: boolean | undefined;
    }[] | undefined;
    storageDiffs?: readonly {
        id?: number | undefined;
        contractAddress?: `0x${string}` | undefined;
    }[] | undefined;
    contractChanges?: readonly {
        id?: number | undefined;
        change?: (({
            _tag: "declaredClass";
        } & {
            declaredClass: {};
        }) | ({
            _tag: "replacedClass";
        } & {
            replacedClass: {};
        }) | ({
            _tag: "deployedContract";
        } & {
            deployedContract: {};
        })) | undefined;
    }[] | undefined;
    nonceUpdates?: readonly {
        id?: number | undefined;
        contractAddress?: `0x${string}` | undefined;
    }[] | undefined;
}>, Readonly<{
    header: {
        blockHash?: `0x${string}` | undefined;
        parentBlockHash: `0x${string}`;
        blockNumber: bigint;
        sequencerAddress: `0x${string}`;
        newRoot?: `0x${string}` | undefined;
        timestamp: Date;
        starknetVersion: string;
        l1GasPrice: {
            priceInFri?: `0x${string}` | undefined;
            priceInWei?: `0x${string}` | undefined;
        };
        l1DataGasPrice: {
            priceInFri?: `0x${string}` | undefined;
            priceInWei?: `0x${string}` | undefined;
        };
        l1DataAvailabilityMode: "unknown" | "blob" | "calldata";
    };
    transactions: readonly {
        filterIds: readonly number[];
        meta: {
            transactionIndex: number;
            transactionHash: `0x${string}`;
            transactionStatus: "unknown" | "succeeded" | "reverted";
        };
        transaction: ({
            _tag: "invokeV0";
        } & {
            invokeV0: {
                maxFee: `0x${string}`;
                signature: readonly `0x${string}`[];
                contractAddress: `0x${string}`;
                entryPointSelector: `0x${string}`;
                calldata: readonly `0x${string}`[];
            };
        }) | ({
            _tag: "invokeV1";
        } & {
            invokeV1: {
                senderAddress: `0x${string}`;
                calldata: readonly `0x${string}`[];
                maxFee: `0x${string}`;
                signature: readonly `0x${string}`[];
                nonce: `0x${string}`;
            };
        }) | ({
            _tag: "invokeV3";
        } & {
            invokeV3: {
                senderAddress: `0x${string}`;
                calldata: readonly `0x${string}`[];
                signature: readonly `0x${string}`[];
                nonce: `0x${string}`;
                resourceBounds: {
                    l1Gas: {
                        maxAmount: bigint;
                        maxPricePerUnit: bigint;
                    };
                    l2Gas: {
                        maxAmount: bigint;
                        maxPricePerUnit: bigint;
                    };
                };
                tip: bigint;
                paymasterData: readonly `0x${string}`[];
                accountDeploymentData: readonly `0x${string}`[];
                nonceDataAvailabilityMode: "unknown" | "l1" | "l2";
                feeDataAvailabilityMode: "unknown" | "l1" | "l2";
            };
        }) | ({
            _tag: "deploy";
        } & {
            deploy: {
                contractAddressSalt: `0x${string}`;
                constructorCalldata: readonly `0x${string}`[];
                classHash: `0x${string}`;
            };
        }) | ({
            _tag: "declareV0";
        } & {
            declareV0: {
                senderAddress: `0x${string}`;
                maxFee: `0x${string}`;
                signature: readonly `0x${string}`[];
                classHash: `0x${string}`;
            };
        }) | ({
            _tag: "declareV1";
        } & {
            declareV1: {
                senderAddress: `0x${string}`;
                maxFee: `0x${string}`;
                signature: readonly `0x${string}`[];
                nonce: `0x${string}`;
                classHash: `0x${string}`;
            };
        }) | ({
            _tag: "declareV2";
        } & {
            declareV2: {
                senderAddress: `0x${string}`;
                compiledClassHash: `0x${string}`;
                maxFee: `0x${string}`;
                signature: readonly `0x${string}`[];
                nonce: `0x${string}`;
                classHash: `0x${string}`;
            };
        }) | ({
            _tag: "declareV3";
        } & {
            declareV3: {
                senderAddress: `0x${string}`;
                compiledClassHash: `0x${string}`;
                signature: readonly `0x${string}`[];
                nonce: `0x${string}`;
                classHash: `0x${string}`;
                resourceBounds: {
                    l1Gas: {
                        maxAmount: bigint;
                        maxPricePerUnit: bigint;
                    };
                    l2Gas: {
                        maxAmount: bigint;
                        maxPricePerUnit: bigint;
                    };
                };
                tip: bigint;
                paymasterData: readonly `0x${string}`[];
                accountDeploymentData: readonly `0x${string}`[];
                nonceDataAvailabilityMode: "unknown" | "l1" | "l2";
                feeDataAvailabilityMode: "unknown" | "l1" | "l2";
            };
        }) | ({
            _tag: "l1Handler";
        } & {
            l1Handler: {
                nonce: bigint;
                contractAddress: `0x${string}`;
                entryPointSelector: `0x${string}`;
                calldata: readonly `0x${string}`[];
            };
        }) | ({
            _tag: "deployAccountV1";
        } & {
            deployAccountV1: {
                maxFee: `0x${string}`;
                signature: readonly `0x${string}`[];
                nonce: `0x${string}`;
                contractAddressSalt: `0x${string}`;
                constructorCalldata: readonly `0x${string}`[];
                classHash: `0x${string}`;
            };
        }) | ({
            _tag: "deployAccountV3";
        } & {
            deployAccountV3: {
                signature: readonly `0x${string}`[];
                nonce: `0x${string}`;
                contractAddressSalt: `0x${string}`;
                constructorCalldata: readonly `0x${string}`[];
                classHash: `0x${string}`;
                resourceBounds: {
                    l1Gas: {
                        maxAmount: bigint;
                        maxPricePerUnit: bigint;
                    };
                    l2Gas: {
                        maxAmount: bigint;
                        maxPricePerUnit: bigint;
                    };
                };
                tip: bigint;
                paymasterData: readonly `0x${string}`[];
                nonceDataAvailabilityMode: "unknown" | "l1" | "l2";
                feeDataAvailabilityMode: "unknown" | "l1" | "l2";
            };
        });
    }[];
    receipts: readonly {
        filterIds: readonly number[];
        meta: {
            transactionIndex: number;
            transactionHash: `0x${string}`;
            actualFee: {
                amount: `0x${string}`;
                unit: "unknown" | "wei" | "fri";
            };
            executionResources: {
                computation: {
                    steps: bigint;
                    memoryHoles?: bigint | undefined;
                    rangeCheckBuiltinApplications?: bigint | undefined;
                    pedersenBuiltinApplications?: bigint | undefined;
                    poseidonBuiltinApplications?: bigint | undefined;
                    ecOpBuiltinApplications?: bigint | undefined;
                    ecdsaBuiltinApplications?: bigint | undefined;
                    bitwiseBuiltinApplications?: bigint | undefined;
                    keccakBuiltinApplications?: bigint | undefined;
                    segmentArenaBuiltin?: bigint | undefined;
                };
                dataAvailability: {
                    l1Gas: bigint;
                    l1DataGas: bigint;
                };
            };
            executionResult: ({
                _tag: "succeeded";
            } & {
                succeeded: {};
            }) | ({
                _tag: "reverted";
            } & {
                reverted: {
                    reason?: string | undefined;
                };
            });
        };
        receipt: ({
            _tag: "deploy";
        } & {
            deploy: {
                contractAddress: `0x${string}`;
            };
        }) | ({
            _tag: "l1Handler";
        } & {
            l1Handler: {
                messageHash: Uint8Array;
            };
        }) | ({
            _tag: "invoke";
        } & {
            invoke: {};
        }) | ({
            _tag: "declare";
        } & {
            declare: {};
        }) | ({
            _tag: "deployAccount";
        } & {
            deployAccount: {
                contractAddress: `0x${string}`;
            };
        });
    }[];
    events: readonly {
        filterIds: readonly number[];
        address: `0x${string}`;
        keys: readonly `0x${string}`[];
        data: readonly `0x${string}`[];
        eventIndex: number;
        transactionIndex: number;
        transactionHash: `0x${string}`;
        transactionStatus: "unknown" | "succeeded" | "reverted";
        eventIndexInTransaction: number;
    }[];
    messages: readonly {
        filterIds: readonly number[];
        fromAddress: `0x${string}`;
        toAddress: `0x${string}`;
        payload: readonly `0x${string}`[];
        messageIndex: number;
        transactionIndex: number;
        transactionHash: `0x${string}`;
        transactionStatus: "unknown" | "succeeded" | "reverted";
        messageIndexInTransaction: number;
    }[];
    traces: readonly {
        filterIds: readonly number[];
        transactionIndex: number;
        transactionHash: `0x${string}`;
        traceRoot: ({
            _tag: "l1Handler";
        } & {
            l1Handler: {
                functionInvocation?: {
                    contractAddress: `0x${string}`;
                    entryPointSelector: `0x${string}`;
                    calldata: readonly `0x${string}`[];
                    callerAddress: `0x${string}`;
                    classHash: `0x${string}`;
                    callType: "unknown" | "libraryCall" | "call" | "delegate";
                    result: readonly `0x${string}`[];
                    events: readonly number[];
                    messages: readonly number[];
                    calls: FunctionInvocation[];
                } | undefined;
            };
        }) | ({
            _tag: "invoke";
        } & {
            invoke: {
                validateInvocation?: {
                    contractAddress: `0x${string}`;
                    entryPointSelector: `0x${string}`;
                    calldata: readonly `0x${string}`[];
                    callerAddress: `0x${string}`;
                    classHash: `0x${string}`;
                    callType: "unknown" | "libraryCall" | "call" | "delegate";
                    result: readonly `0x${string}`[];
                    events: readonly number[];
                    messages: readonly number[];
                    calls: FunctionInvocation[];
                } | undefined;
                executeInvocation: ({
                    _tag: "reverted";
                } & {
                    reverted: {
                        reason?: string | undefined;
                    };
                }) | ({
                    _tag: "success";
                } & {
                    success: {
                        contractAddress: `0x${string}`;
                        entryPointSelector: `0x${string}`;
                        calldata: readonly `0x${string}`[];
                        callerAddress: `0x${string}`;
                        classHash: `0x${string}`;
                        callType: "unknown" | "libraryCall" | "call" | "delegate";
                        result: readonly `0x${string}`[];
                        events: readonly number[];
                        messages: readonly number[];
                        calls: FunctionInvocation[];
                    };
                });
                feeTransferInvocation?: {
                    contractAddress: `0x${string}`;
                    entryPointSelector: `0x${string}`;
                    calldata: readonly `0x${string}`[];
                    callerAddress: `0x${string}`;
                    classHash: `0x${string}`;
                    callType: "unknown" | "libraryCall" | "call" | "delegate";
                    result: readonly `0x${string}`[];
                    events: readonly number[];
                    messages: readonly number[];
                    calls: FunctionInvocation[];
                } | undefined;
            };
        }) | ({
            _tag: "declare";
        } & {
            declare: {
                validateInvocation?: {
                    contractAddress: `0x${string}`;
                    entryPointSelector: `0x${string}`;
                    calldata: readonly `0x${string}`[];
                    callerAddress: `0x${string}`;
                    classHash: `0x${string}`;
                    callType: "unknown" | "libraryCall" | "call" | "delegate";
                    result: readonly `0x${string}`[];
                    events: readonly number[];
                    messages: readonly number[];
                    calls: FunctionInvocation[];
                } | undefined;
                feeTransferInvocation?: {
                    contractAddress: `0x${string}`;
                    entryPointSelector: `0x${string}`;
                    calldata: readonly `0x${string}`[];
                    callerAddress: `0x${string}`;
                    classHash: `0x${string}`;
                    callType: "unknown" | "libraryCall" | "call" | "delegate";
                    result: readonly `0x${string}`[];
                    events: readonly number[];
                    messages: readonly number[];
                    calls: FunctionInvocation[];
                } | undefined;
            };
        }) | ({
            _tag: "deployAccount";
        } & {
            deployAccount: {
                validateInvocation?: {
                    contractAddress: `0x${string}`;
                    entryPointSelector: `0x${string}`;
                    calldata: readonly `0x${string}`[];
                    callerAddress: `0x${string}`;
                    classHash: `0x${string}`;
                    callType: "unknown" | "libraryCall" | "call" | "delegate";
                    result: readonly `0x${string}`[];
                    events: readonly number[];
                    messages: readonly number[];
                    calls: FunctionInvocation[];
                } | undefined;
                constructorInvocation?: {
                    contractAddress: `0x${string}`;
                    entryPointSelector: `0x${string}`;
                    calldata: readonly `0x${string}`[];
                    callerAddress: `0x${string}`;
                    classHash: `0x${string}`;
                    callType: "unknown" | "libraryCall" | "call" | "delegate";
                    result: readonly `0x${string}`[];
                    events: readonly number[];
                    messages: readonly number[];
                    calls: FunctionInvocation[];
                } | undefined;
                feeTransferInvocation?: {
                    contractAddress: `0x${string}`;
                    entryPointSelector: `0x${string}`;
                    calldata: readonly `0x${string}`[];
                    callerAddress: `0x${string}`;
                    classHash: `0x${string}`;
                    callType: "unknown" | "libraryCall" | "call" | "delegate";
                    result: readonly `0x${string}`[];
                    events: readonly number[];
                    messages: readonly number[];
                    calls: FunctionInvocation[];
                } | undefined;
            };
        });
    }[];
    storageDiffs: readonly {
        filterIds: readonly number[];
        contractAddress: `0x${string}`;
        storageEntries: readonly {
            key: `0x${string}`;
            value: `0x${string}`;
        }[];
    }[];
    contractChanges: readonly {
        filterIds: readonly number[];
        change: ({
            _tag: "declaredClass";
        } & {
            declaredClass: {
                classHash?: `0x${string}` | undefined;
                compiledClassHash?: `0x${string}` | undefined;
            };
        }) | ({
            _tag: "replacedClass";
        } & {
            replacedClass: {
                contractAddress?: `0x${string}` | undefined;
                classHash?: `0x${string}` | undefined;
            };
        }) | ({
            _tag: "deployedContract";
        } & {
            deployedContract: {
                contractAddress?: `0x${string}` | undefined;
                classHash?: `0x${string}` | undefined;
            };
        });
    }[];
    nonceUpdates: readonly {
        filterIds: readonly number[];
        contractAddress: `0x${string}`;
        nonce: `0x${string}`;
    }[];
}>>;

export { Block, BlockFromBytes, BlockHeader, CallType, ComputationResources, ContractChange, ContractChangeFilter, DataAvailabilityMode, DataAvailabilityResources, DeclareTransactionReceipt, DeclareTransactionTrace, DeclareTransactionV0, DeclareTransactionV1, DeclareTransactionV2, DeclareTransactionV3, DeclareV0TransactionFilter, DeclareV1TransactionFilter, DeclareV2TransactionFilter, DeclareV3TransactionFilter, DeclaredClass, DeclaredClassFilter, type DecodeEventArgs, DecodeEventError, type DecodeEventReturn, type DecodedEvent, DeployAccountTransactionReceipt, DeployAccountTransactionTrace, DeployAccountTransactionV1, DeployAccountTransactionV3, DeployAccountV1TransactionFilter, DeployAccountV3TransactionFilter, DeployTransaction, DeployTransactionFilter, DeployTransactionReceipt, DeployedContract, DeployedContractFilter, Event, EventFilter, ExecuteInvocationReverted, ExecuteInvocationSuccess, ExecutionResources, ExecutionReverted, ExecutionSucceeded, FeePayment, FieldElement$1 as FieldElement, Filter, FilterFromBytes, type FunctionInvocation, HeaderFilter, InvokeTransactionReceipt, InvokeTransactionTrace, InvokeTransactionV0, InvokeTransactionV0Filter, InvokeTransactionV1, InvokeTransactionV1Filter, InvokeTransactionV3, InvokeTransactionV3Filter, Key, L1DataAvailabilityMode, L1HandlerTransaction, L1HandlerTransactionFilter, L1HandlerTransactionReceipt, L1HandlerTransactionTrace, MessageToL1, MessageToL1Filter, NonceUpdate, NonceUpdateFilter, PriceUnit, ReplacedClass, ReplacedClassFilter, ResourceBounds, ResourceBoundsMapping, ResourcePrice, StarknetStream, StorageDiff, StorageDiffFilter, StorageEntry, Transaction, TransactionFilter, TransactionMeta, TransactionReceipt, TransactionReceiptMeta, TransactionStatus, TransactionStatusFilter, TransactionTrace, U128, decodeEvent, getBigIntSelector, getEventSelector, getReceipt, getSelector, getTransaction, mergeFilter, index as proto };
