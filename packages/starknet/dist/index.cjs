'use strict';

const protocol = require('@apibara/protocol');
const codec = require('@apibara/protocol/codec');
const Long = require('long');
const _m0 = require('protobufjs/minimal.js');
const starknet = require('@scure/starknet');
const parser = require('./parser.cjs');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const Long__default = /*#__PURE__*/_interopDefaultCompat(Long);
const _m0__default = /*#__PURE__*/_interopDefaultCompat(_m0);

const MAX_U64 = 0xffffffffffffffffn;
const FieldElement$1 = {
  encode(x) {
    const bn = BigInt(x);
    const x3 = bn & MAX_U64;
    const x2 = bn >> 64n & MAX_U64;
    const x1 = bn >> 128n & MAX_U64;
    const x0 = bn >> 192n & MAX_U64;
    return { x0, x1, x2, x3 };
  },
  decode(p) {
    const x0 = p.x0 ?? 0n;
    const x1 = p.x1 ?? 0n;
    const x2 = p.x2 ?? 0n;
    const x3 = p.x3 ?? 0n;
    const bn = x3 + (x2 << 64n) + (x1 << 128n) + (x0 << 192n);
    return `0x${bn.toString(16).padStart(64, "0")}`;
  }
};

const protobufPackage$2 = "starknet.v2";
function createBaseFieldElement() {
  return { x0: BigInt("0"), x1: BigInt("0"), x2: BigInt("0"), x3: BigInt("0") };
}
const FieldElement = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.x0 !== void 0 && message.x0 !== BigInt("0")) {
      if (BigInt.asUintN(64, message.x0) !== message.x0) {
        throw new globalThis.Error("value provided for field message.x0 of type fixed64 too large");
      }
      writer.uint32(9).fixed64(message.x0.toString());
    }
    if (message.x1 !== void 0 && message.x1 !== BigInt("0")) {
      if (BigInt.asUintN(64, message.x1) !== message.x1) {
        throw new globalThis.Error("value provided for field message.x1 of type fixed64 too large");
      }
      writer.uint32(17).fixed64(message.x1.toString());
    }
    if (message.x2 !== void 0 && message.x2 !== BigInt("0")) {
      if (BigInt.asUintN(64, message.x2) !== message.x2) {
        throw new globalThis.Error("value provided for field message.x2 of type fixed64 too large");
      }
      writer.uint32(25).fixed64(message.x2.toString());
    }
    if (message.x3 !== void 0 && message.x3 !== BigInt("0")) {
      if (BigInt.asUintN(64, message.x3) !== message.x3) {
        throw new globalThis.Error("value provided for field message.x3 of type fixed64 too large");
      }
      writer.uint32(33).fixed64(message.x3.toString());
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFieldElement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }
          message.x0 = longToBigint$2(reader.fixed64());
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }
          message.x1 = longToBigint$2(reader.fixed64());
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }
          message.x2 = longToBigint$2(reader.fixed64());
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }
          message.x3 = longToBigint$2(reader.fixed64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      x0: isSet$3(object.x0) ? BigInt(object.x0) : BigInt("0"),
      x1: isSet$3(object.x1) ? BigInt(object.x1) : BigInt("0"),
      x2: isSet$3(object.x2) ? BigInt(object.x2) : BigInt("0"),
      x3: isSet$3(object.x3) ? BigInt(object.x3) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.x0 !== void 0 && message.x0 !== BigInt("0")) {
      obj.x0 = message.x0.toString();
    }
    if (message.x1 !== void 0 && message.x1 !== BigInt("0")) {
      obj.x1 = message.x1.toString();
    }
    if (message.x2 !== void 0 && message.x2 !== BigInt("0")) {
      obj.x2 = message.x2.toString();
    }
    if (message.x3 !== void 0 && message.x3 !== BigInt("0")) {
      obj.x3 = message.x3.toString();
    }
    return obj;
  },
  create(base) {
    return FieldElement.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseFieldElement();
    message.x0 = object.x0 ?? BigInt("0");
    message.x1 = object.x1 ?? BigInt("0");
    message.x2 = object.x2 ?? BigInt("0");
    message.x3 = object.x3 ?? BigInt("0");
    return message;
  }
};
function longToBigint$2(long) {
  return BigInt(long.toString());
}
if (_m0__default.util.Long !== Long__default) {
  _m0__default.util.Long = Long__default;
  _m0__default.configure();
}
function isSet$3(value) {
  return value !== null && value !== void 0;
}

const common = {
  __proto__: null,
  FieldElement: FieldElement,
  protobufPackage: protobufPackage$2
};

function createBaseTimestamp() {
  return { seconds: BigInt("0"), nanos: 0 };
}
const Timestamp = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.seconds !== void 0 && message.seconds !== BigInt("0")) {
      if (BigInt.asIntN(64, message.seconds) !== message.seconds) {
        throw new globalThis.Error("value provided for field message.seconds of type int64 too large");
      }
      writer.uint32(8).int64(message.seconds.toString());
    }
    if (message.nanos !== void 0 && message.nanos !== 0) {
      writer.uint32(16).int32(message.nanos);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.seconds = longToBigint$1(reader.int64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.nanos = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      seconds: isSet$2(object.seconds) ? BigInt(object.seconds) : BigInt("0"),
      nanos: isSet$2(object.nanos) ? globalThis.Number(object.nanos) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.seconds !== void 0 && message.seconds !== BigInt("0")) {
      obj.seconds = message.seconds.toString();
    }
    if (message.nanos !== void 0 && message.nanos !== 0) {
      obj.nanos = Math.round(message.nanos);
    }
    return obj;
  },
  create(base) {
    return Timestamp.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTimestamp();
    message.seconds = object.seconds ?? BigInt("0");
    message.nanos = object.nanos ?? 0;
    return message;
  }
};
function longToBigint$1(long) {
  return BigInt(long.toString());
}
if (_m0__default.util.Long !== Long__default) {
  _m0__default.util.Long = Long__default;
  _m0__default.configure();
}
function isSet$2(value) {
  return value !== null && value !== void 0;
}

const protobufPackage$1 = "starknet.v2";
var TransactionStatus$1 = /* @__PURE__ */ ((TransactionStatus2) => {
  TransactionStatus2[TransactionStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  TransactionStatus2[TransactionStatus2["SUCCEEDED"] = 1] = "SUCCEEDED";
  TransactionStatus2[TransactionStatus2["REVERTED"] = 2] = "REVERTED";
  TransactionStatus2[TransactionStatus2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return TransactionStatus2;
})(TransactionStatus$1 || {});
function transactionStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "TRANSACTION_STATUS_UNSPECIFIED":
      return 0 /* UNSPECIFIED */;
    case 1:
    case "TRANSACTION_STATUS_SUCCEEDED":
      return 1 /* SUCCEEDED */;
    case 2:
    case "TRANSACTION_STATUS_REVERTED":
      return 2 /* REVERTED */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function transactionStatusToJSON(object) {
  switch (object) {
    case 0 /* UNSPECIFIED */:
      return "TRANSACTION_STATUS_UNSPECIFIED";
    case 1 /* SUCCEEDED */:
      return "TRANSACTION_STATUS_SUCCEEDED";
    case 2 /* REVERTED */:
      return "TRANSACTION_STATUS_REVERTED";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var L1DataAvailabilityMode$1 = /* @__PURE__ */ ((L1DataAvailabilityMode2) => {
  L1DataAvailabilityMode2[L1DataAvailabilityMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  L1DataAvailabilityMode2[L1DataAvailabilityMode2["BLOB"] = 1] = "BLOB";
  L1DataAvailabilityMode2[L1DataAvailabilityMode2["CALLDATA"] = 2] = "CALLDATA";
  L1DataAvailabilityMode2[L1DataAvailabilityMode2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return L1DataAvailabilityMode2;
})(L1DataAvailabilityMode$1 || {});
function l1DataAvailabilityModeFromJSON(object) {
  switch (object) {
    case 0:
    case "L1_DATA_AVAILABILITY_MODE_UNSPECIFIED":
      return 0 /* UNSPECIFIED */;
    case 1:
    case "L1_DATA_AVAILABILITY_MODE_BLOB":
      return 1 /* BLOB */;
    case 2:
    case "L1_DATA_AVAILABILITY_MODE_CALLDATA":
      return 2 /* CALLDATA */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function l1DataAvailabilityModeToJSON(object) {
  switch (object) {
    case 0 /* UNSPECIFIED */:
      return "L1_DATA_AVAILABILITY_MODE_UNSPECIFIED";
    case 1 /* BLOB */:
      return "L1_DATA_AVAILABILITY_MODE_BLOB";
    case 2 /* CALLDATA */:
      return "L1_DATA_AVAILABILITY_MODE_CALLDATA";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var ExecutionStatus = /* @__PURE__ */ ((ExecutionStatus2) => {
  ExecutionStatus2[ExecutionStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ExecutionStatus2[ExecutionStatus2["SUCCEEDED"] = 1] = "SUCCEEDED";
  ExecutionStatus2[ExecutionStatus2["REVERTED"] = 2] = "REVERTED";
  ExecutionStatus2[ExecutionStatus2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ExecutionStatus2;
})(ExecutionStatus || {});
function executionStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "EXECUTION_STATUS_UNSPECIFIED":
      return 0 /* UNSPECIFIED */;
    case 1:
    case "EXECUTION_STATUS_SUCCEEDED":
      return 1 /* SUCCEEDED */;
    case 2:
    case "EXECUTION_STATUS_REVERTED":
      return 2 /* REVERTED */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function executionStatusToJSON(object) {
  switch (object) {
    case 0 /* UNSPECIFIED */:
      return "EXECUTION_STATUS_UNSPECIFIED";
    case 1 /* SUCCEEDED */:
      return "EXECUTION_STATUS_SUCCEEDED";
    case 2 /* REVERTED */:
      return "EXECUTION_STATUS_REVERTED";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var PriceUnit$1 = /* @__PURE__ */ ((PriceUnit2) => {
  PriceUnit2[PriceUnit2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PriceUnit2[PriceUnit2["WEI"] = 1] = "WEI";
  PriceUnit2[PriceUnit2["FRI"] = 2] = "FRI";
  PriceUnit2[PriceUnit2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return PriceUnit2;
})(PriceUnit$1 || {});
function priceUnitFromJSON(object) {
  switch (object) {
    case 0:
    case "PRICE_UNIT_UNSPECIFIED":
      return 0 /* UNSPECIFIED */;
    case 1:
    case "PRICE_UNIT_WEI":
      return 1 /* WEI */;
    case 2:
    case "PRICE_UNIT_FRI":
      return 2 /* FRI */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function priceUnitToJSON(object) {
  switch (object) {
    case 0 /* UNSPECIFIED */:
      return "PRICE_UNIT_UNSPECIFIED";
    case 1 /* WEI */:
      return "PRICE_UNIT_WEI";
    case 2 /* FRI */:
      return "PRICE_UNIT_FRI";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var DataAvailabilityMode$1 = /* @__PURE__ */ ((DataAvailabilityMode2) => {
  DataAvailabilityMode2[DataAvailabilityMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  DataAvailabilityMode2[DataAvailabilityMode2["L1"] = 1] = "L1";
  DataAvailabilityMode2[DataAvailabilityMode2["L2"] = 2] = "L2";
  DataAvailabilityMode2[DataAvailabilityMode2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return DataAvailabilityMode2;
})(DataAvailabilityMode$1 || {});
function dataAvailabilityModeFromJSON(object) {
  switch (object) {
    case 0:
    case "DATA_AVAILABILITY_MODE_UNSPECIFIED":
      return 0 /* UNSPECIFIED */;
    case 1:
    case "DATA_AVAILABILITY_MODE_L1":
      return 1 /* L1 */;
    case 2:
    case "DATA_AVAILABILITY_MODE_L2":
      return 2 /* L2 */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function dataAvailabilityModeToJSON(object) {
  switch (object) {
    case 0 /* UNSPECIFIED */:
      return "DATA_AVAILABILITY_MODE_UNSPECIFIED";
    case 1 /* L1 */:
      return "DATA_AVAILABILITY_MODE_L1";
    case 2 /* L2 */:
      return "DATA_AVAILABILITY_MODE_L2";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var CallType$1 = /* @__PURE__ */ ((CallType2) => {
  CallType2[CallType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CallType2[CallType2["LIBRARY_CALL"] = 1] = "LIBRARY_CALL";
  CallType2[CallType2["CALL"] = 2] = "CALL";
  CallType2[CallType2["DELEGATE"] = 3] = "DELEGATE";
  CallType2[CallType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return CallType2;
})(CallType$1 || {});
function callTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "CALL_TYPE_UNSPECIFIED":
      return 0 /* UNSPECIFIED */;
    case 1:
    case "CALL_TYPE_LIBRARY_CALL":
      return 1 /* LIBRARY_CALL */;
    case 2:
    case "CALL_TYPE_CALL":
      return 2 /* CALL */;
    case 3:
    case "CALL_TYPE_DELEGATE":
      return 3 /* DELEGATE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function callTypeToJSON(object) {
  switch (object) {
    case 0 /* UNSPECIFIED */:
      return "CALL_TYPE_UNSPECIFIED";
    case 1 /* LIBRARY_CALL */:
      return "CALL_TYPE_LIBRARY_CALL";
    case 2 /* CALL */:
      return "CALL_TYPE_CALL";
    case 3 /* DELEGATE */:
      return "CALL_TYPE_DELEGATE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseBlock() {
  return {
    header: void 0,
    transactions: [],
    receipts: [],
    events: [],
    messages: [],
    storageDiffs: [],
    contractChanges: [],
    nonceUpdates: [],
    traces: []
  };
}
const Block$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.header !== void 0) {
      BlockHeader$1.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.transactions !== void 0 && message.transactions.length !== 0) {
      for (const v of message.transactions) {
        Transaction$1.encode(v, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.receipts !== void 0 && message.receipts.length !== 0) {
      for (const v of message.receipts) {
        TransactionReceipt$1.encode(v, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.events !== void 0 && message.events.length !== 0) {
      for (const v of message.events) {
        Event$1.encode(v, writer.uint32(34).fork()).ldelim();
      }
    }
    if (message.messages !== void 0 && message.messages.length !== 0) {
      for (const v of message.messages) {
        MessageToL1$1.encode(v, writer.uint32(42).fork()).ldelim();
      }
    }
    if (message.storageDiffs !== void 0 && message.storageDiffs.length !== 0) {
      for (const v of message.storageDiffs) {
        StorageDiff$1.encode(v, writer.uint32(50).fork()).ldelim();
      }
    }
    if (message.contractChanges !== void 0 && message.contractChanges.length !== 0) {
      for (const v of message.contractChanges) {
        ContractChange$1.encode(v, writer.uint32(58).fork()).ldelim();
      }
    }
    if (message.nonceUpdates !== void 0 && message.nonceUpdates.length !== 0) {
      for (const v of message.nonceUpdates) {
        NonceUpdate$1.encode(v, writer.uint32(66).fork()).ldelim();
      }
    }
    if (message.traces !== void 0 && message.traces.length !== 0) {
      for (const v of message.traces) {
        TransactionTrace$1.encode(v, writer.uint32(74).fork()).ldelim();
      }
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.header = BlockHeader$1.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.transactions.push(Transaction$1.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.receipts.push(TransactionReceipt$1.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.events.push(Event$1.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.messages.push(MessageToL1$1.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.storageDiffs.push(StorageDiff$1.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.contractChanges.push(ContractChange$1.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.nonceUpdates.push(NonceUpdate$1.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }
          message.traces.push(TransactionTrace$1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      header: isSet$1(object.header) ? BlockHeader$1.fromJSON(object.header) : void 0,
      transactions: globalThis.Array.isArray(object?.transactions) ? object.transactions.map((e) => Transaction$1.fromJSON(e)) : [],
      receipts: globalThis.Array.isArray(object?.receipts) ? object.receipts.map((e) => TransactionReceipt$1.fromJSON(e)) : [],
      events: globalThis.Array.isArray(object?.events) ? object.events.map((e) => Event$1.fromJSON(e)) : [],
      messages: globalThis.Array.isArray(object?.messages) ? object.messages.map((e) => MessageToL1$1.fromJSON(e)) : [],
      storageDiffs: globalThis.Array.isArray(object?.storageDiffs) ? object.storageDiffs.map((e) => StorageDiff$1.fromJSON(e)) : [],
      contractChanges: globalThis.Array.isArray(object?.contractChanges) ? object.contractChanges.map((e) => ContractChange$1.fromJSON(e)) : [],
      nonceUpdates: globalThis.Array.isArray(object?.nonceUpdates) ? object.nonceUpdates.map((e) => NonceUpdate$1.fromJSON(e)) : [],
      traces: globalThis.Array.isArray(object?.traces) ? object.traces.map((e) => TransactionTrace$1.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.header !== void 0) {
      obj.header = BlockHeader$1.toJSON(message.header);
    }
    if (message.transactions?.length) {
      obj.transactions = message.transactions.map((e) => Transaction$1.toJSON(e));
    }
    if (message.receipts?.length) {
      obj.receipts = message.receipts.map((e) => TransactionReceipt$1.toJSON(e));
    }
    if (message.events?.length) {
      obj.events = message.events.map((e) => Event$1.toJSON(e));
    }
    if (message.messages?.length) {
      obj.messages = message.messages.map((e) => MessageToL1$1.toJSON(e));
    }
    if (message.storageDiffs?.length) {
      obj.storageDiffs = message.storageDiffs.map((e) => StorageDiff$1.toJSON(e));
    }
    if (message.contractChanges?.length) {
      obj.contractChanges = message.contractChanges.map((e) => ContractChange$1.toJSON(e));
    }
    if (message.nonceUpdates?.length) {
      obj.nonceUpdates = message.nonceUpdates.map((e) => NonceUpdate$1.toJSON(e));
    }
    if (message.traces?.length) {
      obj.traces = message.traces.map((e) => TransactionTrace$1.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return Block$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseBlock();
    message.header = object.header !== void 0 && object.header !== null ? BlockHeader$1.fromPartial(object.header) : void 0;
    message.transactions = object.transactions?.map((e) => Transaction$1.fromPartial(e)) || [];
    message.receipts = object.receipts?.map((e) => TransactionReceipt$1.fromPartial(e)) || [];
    message.events = object.events?.map((e) => Event$1.fromPartial(e)) || [];
    message.messages = object.messages?.map((e) => MessageToL1$1.fromPartial(e)) || [];
    message.storageDiffs = object.storageDiffs?.map((e) => StorageDiff$1.fromPartial(e)) || [];
    message.contractChanges = object.contractChanges?.map((e) => ContractChange$1.fromPartial(e)) || [];
    message.nonceUpdates = object.nonceUpdates?.map((e) => NonceUpdate$1.fromPartial(e)) || [];
    message.traces = object.traces?.map((e) => TransactionTrace$1.fromPartial(e)) || [];
    return message;
  }
};
function createBaseBlockHeader() {
  return {
    blockHash: void 0,
    parentBlockHash: void 0,
    blockNumber: BigInt("0"),
    sequencerAddress: void 0,
    newRoot: void 0,
    timestamp: void 0,
    starknetVersion: "",
    l1GasPrice: void 0,
    l1DataGasPrice: void 0,
    l1DataAvailabilityMode: 0
  };
}
const BlockHeader$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.blockHash !== void 0) {
      FieldElement.encode(message.blockHash, writer.uint32(10).fork()).ldelim();
    }
    if (message.parentBlockHash !== void 0) {
      FieldElement.encode(message.parentBlockHash, writer.uint32(18).fork()).ldelim();
    }
    if (message.blockNumber !== void 0 && message.blockNumber !== BigInt("0")) {
      if (BigInt.asUintN(64, message.blockNumber) !== message.blockNumber) {
        throw new globalThis.Error("value provided for field message.blockNumber of type uint64 too large");
      }
      writer.uint32(24).uint64(message.blockNumber.toString());
    }
    if (message.sequencerAddress !== void 0) {
      FieldElement.encode(message.sequencerAddress, writer.uint32(34).fork()).ldelim();
    }
    if (message.newRoot !== void 0) {
      FieldElement.encode(message.newRoot, writer.uint32(42).fork()).ldelim();
    }
    if (message.timestamp !== void 0) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
    }
    if (message.starknetVersion !== void 0 && message.starknetVersion !== "") {
      writer.uint32(58).string(message.starknetVersion);
    }
    if (message.l1GasPrice !== void 0) {
      ResourcePrice$1.encode(message.l1GasPrice, writer.uint32(66).fork()).ldelim();
    }
    if (message.l1DataGasPrice !== void 0) {
      ResourcePrice$1.encode(message.l1DataGasPrice, writer.uint32(74).fork()).ldelim();
    }
    if (message.l1DataAvailabilityMode !== void 0 && message.l1DataAvailabilityMode !== 0) {
      writer.uint32(80).int32(message.l1DataAvailabilityMode);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlockHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.blockHash = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.parentBlockHash = FieldElement.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.blockNumber = longToBigint(reader.uint64());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.sequencerAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.newRoot = FieldElement.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.starknetVersion = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.l1GasPrice = ResourcePrice$1.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }
          message.l1DataGasPrice = ResourcePrice$1.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }
          message.l1DataAvailabilityMode = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      blockHash: isSet$1(object.blockHash) ? FieldElement.fromJSON(object.blockHash) : void 0,
      parentBlockHash: isSet$1(object.parentBlockHash) ? FieldElement.fromJSON(object.parentBlockHash) : void 0,
      blockNumber: isSet$1(object.blockNumber) ? BigInt(object.blockNumber) : BigInt("0"),
      sequencerAddress: isSet$1(object.sequencerAddress) ? FieldElement.fromJSON(object.sequencerAddress) : void 0,
      newRoot: isSet$1(object.newRoot) ? FieldElement.fromJSON(object.newRoot) : void 0,
      timestamp: isSet$1(object.timestamp) ? fromJsonTimestamp(object.timestamp) : void 0,
      starknetVersion: isSet$1(object.starknetVersion) ? globalThis.String(object.starknetVersion) : "",
      l1GasPrice: isSet$1(object.l1GasPrice) ? ResourcePrice$1.fromJSON(object.l1GasPrice) : void 0,
      l1DataGasPrice: isSet$1(object.l1DataGasPrice) ? ResourcePrice$1.fromJSON(object.l1DataGasPrice) : void 0,
      l1DataAvailabilityMode: isSet$1(object.l1DataAvailabilityMode) ? l1DataAvailabilityModeFromJSON(object.l1DataAvailabilityMode) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.blockHash !== void 0) {
      obj.blockHash = FieldElement.toJSON(message.blockHash);
    }
    if (message.parentBlockHash !== void 0) {
      obj.parentBlockHash = FieldElement.toJSON(message.parentBlockHash);
    }
    if (message.blockNumber !== void 0 && message.blockNumber !== BigInt("0")) {
      obj.blockNumber = message.blockNumber.toString();
    }
    if (message.sequencerAddress !== void 0) {
      obj.sequencerAddress = FieldElement.toJSON(message.sequencerAddress);
    }
    if (message.newRoot !== void 0) {
      obj.newRoot = FieldElement.toJSON(message.newRoot);
    }
    if (message.timestamp !== void 0) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.starknetVersion !== void 0 && message.starknetVersion !== "") {
      obj.starknetVersion = message.starknetVersion;
    }
    if (message.l1GasPrice !== void 0) {
      obj.l1GasPrice = ResourcePrice$1.toJSON(message.l1GasPrice);
    }
    if (message.l1DataGasPrice !== void 0) {
      obj.l1DataGasPrice = ResourcePrice$1.toJSON(message.l1DataGasPrice);
    }
    if (message.l1DataAvailabilityMode !== void 0 && message.l1DataAvailabilityMode !== 0) {
      obj.l1DataAvailabilityMode = l1DataAvailabilityModeToJSON(message.l1DataAvailabilityMode);
    }
    return obj;
  },
  create(base) {
    return BlockHeader$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseBlockHeader();
    message.blockHash = object.blockHash !== void 0 && object.blockHash !== null ? FieldElement.fromPartial(object.blockHash) : void 0;
    message.parentBlockHash = object.parentBlockHash !== void 0 && object.parentBlockHash !== null ? FieldElement.fromPartial(object.parentBlockHash) : void 0;
    message.blockNumber = object.blockNumber ?? BigInt("0");
    message.sequencerAddress = object.sequencerAddress !== void 0 && object.sequencerAddress !== null ? FieldElement.fromPartial(object.sequencerAddress) : void 0;
    message.newRoot = object.newRoot !== void 0 && object.newRoot !== null ? FieldElement.fromPartial(object.newRoot) : void 0;
    message.timestamp = object.timestamp ?? void 0;
    message.starknetVersion = object.starknetVersion ?? "";
    message.l1GasPrice = object.l1GasPrice !== void 0 && object.l1GasPrice !== null ? ResourcePrice$1.fromPartial(object.l1GasPrice) : void 0;
    message.l1DataGasPrice = object.l1DataGasPrice !== void 0 && object.l1DataGasPrice !== null ? ResourcePrice$1.fromPartial(object.l1DataGasPrice) : void 0;
    message.l1DataAvailabilityMode = object.l1DataAvailabilityMode ?? 0;
    return message;
  }
};
function createBaseTransaction() {
  return { filterIds: [], meta: void 0, transaction: void 0 };
}
const Transaction$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.filterIds !== void 0 && message.filterIds.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.filterIds) {
        writer.uint32(v);
      }
      writer.ldelim();
    }
    if (message.meta !== void 0) {
      TransactionMeta$1.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    switch (message.transaction?.$case) {
      case "invokeV0":
        InvokeTransactionV0$1.encode(message.transaction.invokeV0, writer.uint32(26).fork()).ldelim();
        break;
      case "invokeV1":
        InvokeTransactionV1$1.encode(message.transaction.invokeV1, writer.uint32(34).fork()).ldelim();
        break;
      case "invokeV3":
        InvokeTransactionV3$1.encode(message.transaction.invokeV3, writer.uint32(42).fork()).ldelim();
        break;
      case "l1Handler":
        L1HandlerTransaction$1.encode(message.transaction.l1Handler, writer.uint32(50).fork()).ldelim();
        break;
      case "deploy":
        DeployTransaction$1.encode(message.transaction.deploy, writer.uint32(58).fork()).ldelim();
        break;
      case "declareV0":
        DeclareTransactionV0$1.encode(message.transaction.declareV0, writer.uint32(66).fork()).ldelim();
        break;
      case "declareV1":
        DeclareTransactionV1$1.encode(message.transaction.declareV1, writer.uint32(74).fork()).ldelim();
        break;
      case "declareV2":
        DeclareTransactionV2$1.encode(message.transaction.declareV2, writer.uint32(82).fork()).ldelim();
        break;
      case "declareV3":
        DeclareTransactionV3$1.encode(message.transaction.declareV3, writer.uint32(90).fork()).ldelim();
        break;
      case "deployAccountV1":
        DeployAccountTransactionV1$1.encode(message.transaction.deployAccountV1, writer.uint32(98).fork()).ldelim();
        break;
      case "deployAccountV3":
        DeployAccountTransactionV3$1.encode(message.transaction.deployAccountV3, writer.uint32(106).fork()).ldelim();
        break;
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.filterIds.push(reader.uint32());
            continue;
          }
          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.filterIds.push(reader.uint32());
            }
            continue;
          }
          break;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.meta = TransactionMeta$1.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.transaction = { $case: "invokeV0", invokeV0: InvokeTransactionV0$1.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.transaction = { $case: "invokeV1", invokeV1: InvokeTransactionV1$1.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.transaction = { $case: "invokeV3", invokeV3: InvokeTransactionV3$1.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.transaction = { $case: "l1Handler", l1Handler: L1HandlerTransaction$1.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.transaction = { $case: "deploy", deploy: DeployTransaction$1.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.transaction = { $case: "declareV0", declareV0: DeclareTransactionV0$1.decode(reader, reader.uint32()) };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }
          message.transaction = { $case: "declareV1", declareV1: DeclareTransactionV1$1.decode(reader, reader.uint32()) };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }
          message.transaction = { $case: "declareV2", declareV2: DeclareTransactionV2$1.decode(reader, reader.uint32()) };
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }
          message.transaction = { $case: "declareV3", declareV3: DeclareTransactionV3$1.decode(reader, reader.uint32()) };
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }
          message.transaction = {
            $case: "deployAccountV1",
            deployAccountV1: DeployAccountTransactionV1$1.decode(reader, reader.uint32())
          };
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }
          message.transaction = {
            $case: "deployAccountV3",
            deployAccountV3: DeployAccountTransactionV3$1.decode(reader, reader.uint32())
          };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      filterIds: globalThis.Array.isArray(object?.filterIds) ? object.filterIds.map((e) => globalThis.Number(e)) : [],
      meta: isSet$1(object.meta) ? TransactionMeta$1.fromJSON(object.meta) : void 0,
      transaction: isSet$1(object.invokeV0) ? { $case: "invokeV0", invokeV0: InvokeTransactionV0$1.fromJSON(object.invokeV0) } : isSet$1(object.invokeV1) ? { $case: "invokeV1", invokeV1: InvokeTransactionV1$1.fromJSON(object.invokeV1) } : isSet$1(object.invokeV3) ? { $case: "invokeV3", invokeV3: InvokeTransactionV3$1.fromJSON(object.invokeV3) } : isSet$1(object.l1Handler) ? { $case: "l1Handler", l1Handler: L1HandlerTransaction$1.fromJSON(object.l1Handler) } : isSet$1(object.deploy) ? { $case: "deploy", deploy: DeployTransaction$1.fromJSON(object.deploy) } : isSet$1(object.declareV0) ? { $case: "declareV0", declareV0: DeclareTransactionV0$1.fromJSON(object.declareV0) } : isSet$1(object.declareV1) ? { $case: "declareV1", declareV1: DeclareTransactionV1$1.fromJSON(object.declareV1) } : isSet$1(object.declareV2) ? { $case: "declareV2", declareV2: DeclareTransactionV2$1.fromJSON(object.declareV2) } : isSet$1(object.declareV3) ? { $case: "declareV3", declareV3: DeclareTransactionV3$1.fromJSON(object.declareV3) } : isSet$1(object.deployAccountV1) ? { $case: "deployAccountV1", deployAccountV1: DeployAccountTransactionV1$1.fromJSON(object.deployAccountV1) } : isSet$1(object.deployAccountV3) ? { $case: "deployAccountV3", deployAccountV3: DeployAccountTransactionV3$1.fromJSON(object.deployAccountV3) } : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.filterIds?.length) {
      obj.filterIds = message.filterIds.map((e) => Math.round(e));
    }
    if (message.meta !== void 0) {
      obj.meta = TransactionMeta$1.toJSON(message.meta);
    }
    if (message.transaction?.$case === "invokeV0") {
      obj.invokeV0 = InvokeTransactionV0$1.toJSON(message.transaction.invokeV0);
    }
    if (message.transaction?.$case === "invokeV1") {
      obj.invokeV1 = InvokeTransactionV1$1.toJSON(message.transaction.invokeV1);
    }
    if (message.transaction?.$case === "invokeV3") {
      obj.invokeV3 = InvokeTransactionV3$1.toJSON(message.transaction.invokeV3);
    }
    if (message.transaction?.$case === "l1Handler") {
      obj.l1Handler = L1HandlerTransaction$1.toJSON(message.transaction.l1Handler);
    }
    if (message.transaction?.$case === "deploy") {
      obj.deploy = DeployTransaction$1.toJSON(message.transaction.deploy);
    }
    if (message.transaction?.$case === "declareV0") {
      obj.declareV0 = DeclareTransactionV0$1.toJSON(message.transaction.declareV0);
    }
    if (message.transaction?.$case === "declareV1") {
      obj.declareV1 = DeclareTransactionV1$1.toJSON(message.transaction.declareV1);
    }
    if (message.transaction?.$case === "declareV2") {
      obj.declareV2 = DeclareTransactionV2$1.toJSON(message.transaction.declareV2);
    }
    if (message.transaction?.$case === "declareV3") {
      obj.declareV3 = DeclareTransactionV3$1.toJSON(message.transaction.declareV3);
    }
    if (message.transaction?.$case === "deployAccountV1") {
      obj.deployAccountV1 = DeployAccountTransactionV1$1.toJSON(message.transaction.deployAccountV1);
    }
    if (message.transaction?.$case === "deployAccountV3") {
      obj.deployAccountV3 = DeployAccountTransactionV3$1.toJSON(message.transaction.deployAccountV3);
    }
    return obj;
  },
  create(base) {
    return Transaction$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTransaction();
    message.filterIds = object.filterIds?.map((e) => e) || [];
    message.meta = object.meta !== void 0 && object.meta !== null ? TransactionMeta$1.fromPartial(object.meta) : void 0;
    if (object.transaction?.$case === "invokeV0" && object.transaction?.invokeV0 !== void 0 && object.transaction?.invokeV0 !== null) {
      message.transaction = {
        $case: "invokeV0",
        invokeV0: InvokeTransactionV0$1.fromPartial(object.transaction.invokeV0)
      };
    }
    if (object.transaction?.$case === "invokeV1" && object.transaction?.invokeV1 !== void 0 && object.transaction?.invokeV1 !== null) {
      message.transaction = {
        $case: "invokeV1",
        invokeV1: InvokeTransactionV1$1.fromPartial(object.transaction.invokeV1)
      };
    }
    if (object.transaction?.$case === "invokeV3" && object.transaction?.invokeV3 !== void 0 && object.transaction?.invokeV3 !== null) {
      message.transaction = {
        $case: "invokeV3",
        invokeV3: InvokeTransactionV3$1.fromPartial(object.transaction.invokeV3)
      };
    }
    if (object.transaction?.$case === "l1Handler" && object.transaction?.l1Handler !== void 0 && object.transaction?.l1Handler !== null) {
      message.transaction = {
        $case: "l1Handler",
        l1Handler: L1HandlerTransaction$1.fromPartial(object.transaction.l1Handler)
      };
    }
    if (object.transaction?.$case === "deploy" && object.transaction?.deploy !== void 0 && object.transaction?.deploy !== null) {
      message.transaction = { $case: "deploy", deploy: DeployTransaction$1.fromPartial(object.transaction.deploy) };
    }
    if (object.transaction?.$case === "declareV0" && object.transaction?.declareV0 !== void 0 && object.transaction?.declareV0 !== null) {
      message.transaction = {
        $case: "declareV0",
        declareV0: DeclareTransactionV0$1.fromPartial(object.transaction.declareV0)
      };
    }
    if (object.transaction?.$case === "declareV1" && object.transaction?.declareV1 !== void 0 && object.transaction?.declareV1 !== null) {
      message.transaction = {
        $case: "declareV1",
        declareV1: DeclareTransactionV1$1.fromPartial(object.transaction.declareV1)
      };
    }
    if (object.transaction?.$case === "declareV2" && object.transaction?.declareV2 !== void 0 && object.transaction?.declareV2 !== null) {
      message.transaction = {
        $case: "declareV2",
        declareV2: DeclareTransactionV2$1.fromPartial(object.transaction.declareV2)
      };
    }
    if (object.transaction?.$case === "declareV3" && object.transaction?.declareV3 !== void 0 && object.transaction?.declareV3 !== null) {
      message.transaction = {
        $case: "declareV3",
        declareV3: DeclareTransactionV3$1.fromPartial(object.transaction.declareV3)
      };
    }
    if (object.transaction?.$case === "deployAccountV1" && object.transaction?.deployAccountV1 !== void 0 && object.transaction?.deployAccountV1 !== null) {
      message.transaction = {
        $case: "deployAccountV1",
        deployAccountV1: DeployAccountTransactionV1$1.fromPartial(object.transaction.deployAccountV1)
      };
    }
    if (object.transaction?.$case === "deployAccountV3" && object.transaction?.deployAccountV3 !== void 0 && object.transaction?.deployAccountV3 !== null) {
      message.transaction = {
        $case: "deployAccountV3",
        deployAccountV3: DeployAccountTransactionV3$1.fromPartial(object.transaction.deployAccountV3)
      };
    }
    return message;
  }
};
function createBaseTransactionMeta() {
  return { transactionIndex: 0, transactionHash: void 0, transactionStatus: 0 };
}
const TransactionMeta$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.transactionIndex !== void 0 && message.transactionIndex !== 0) {
      writer.uint32(8).uint32(message.transactionIndex);
    }
    if (message.transactionHash !== void 0) {
      FieldElement.encode(message.transactionHash, writer.uint32(18).fork()).ldelim();
    }
    if (message.transactionStatus !== void 0 && message.transactionStatus !== 0) {
      writer.uint32(24).int32(message.transactionStatus);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTransactionMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.transactionIndex = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.transactionHash = FieldElement.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.transactionStatus = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      transactionIndex: isSet$1(object.transactionIndex) ? globalThis.Number(object.transactionIndex) : 0,
      transactionHash: isSet$1(object.transactionHash) ? FieldElement.fromJSON(object.transactionHash) : void 0,
      transactionStatus: isSet$1(object.transactionStatus) ? transactionStatusFromJSON(object.transactionStatus) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.transactionIndex !== void 0 && message.transactionIndex !== 0) {
      obj.transactionIndex = Math.round(message.transactionIndex);
    }
    if (message.transactionHash !== void 0) {
      obj.transactionHash = FieldElement.toJSON(message.transactionHash);
    }
    if (message.transactionStatus !== void 0 && message.transactionStatus !== 0) {
      obj.transactionStatus = transactionStatusToJSON(message.transactionStatus);
    }
    return obj;
  },
  create(base) {
    return TransactionMeta$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTransactionMeta();
    message.transactionIndex = object.transactionIndex ?? 0;
    message.transactionHash = object.transactionHash !== void 0 && object.transactionHash !== null ? FieldElement.fromPartial(object.transactionHash) : void 0;
    message.transactionStatus = object.transactionStatus ?? 0;
    return message;
  }
};
function createBaseInvokeTransactionV0() {
  return { maxFee: void 0, signature: [], contractAddress: void 0, entryPointSelector: void 0, calldata: [] };
}
const InvokeTransactionV0$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.maxFee !== void 0) {
      FieldElement.encode(message.maxFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.signature !== void 0 && message.signature.length !== 0) {
      for (const v of message.signature) {
        FieldElement.encode(v, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.contractAddress !== void 0) {
      FieldElement.encode(message.contractAddress, writer.uint32(26).fork()).ldelim();
    }
    if (message.entryPointSelector !== void 0) {
      FieldElement.encode(message.entryPointSelector, writer.uint32(34).fork()).ldelim();
    }
    if (message.calldata !== void 0 && message.calldata.length !== 0) {
      for (const v of message.calldata) {
        FieldElement.encode(v, writer.uint32(50).fork()).ldelim();
      }
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInvokeTransactionV0();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.maxFee = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.signature.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.contractAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.entryPointSelector = FieldElement.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.calldata.push(FieldElement.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      maxFee: isSet$1(object.maxFee) ? FieldElement.fromJSON(object.maxFee) : void 0,
      signature: globalThis.Array.isArray(object?.signature) ? object.signature.map((e) => FieldElement.fromJSON(e)) : [],
      contractAddress: isSet$1(object.contractAddress) ? FieldElement.fromJSON(object.contractAddress) : void 0,
      entryPointSelector: isSet$1(object.entryPointSelector) ? FieldElement.fromJSON(object.entryPointSelector) : void 0,
      calldata: globalThis.Array.isArray(object?.calldata) ? object.calldata.map((e) => FieldElement.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.maxFee !== void 0) {
      obj.maxFee = FieldElement.toJSON(message.maxFee);
    }
    if (message.signature?.length) {
      obj.signature = message.signature.map((e) => FieldElement.toJSON(e));
    }
    if (message.contractAddress !== void 0) {
      obj.contractAddress = FieldElement.toJSON(message.contractAddress);
    }
    if (message.entryPointSelector !== void 0) {
      obj.entryPointSelector = FieldElement.toJSON(message.entryPointSelector);
    }
    if (message.calldata?.length) {
      obj.calldata = message.calldata.map((e) => FieldElement.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return InvokeTransactionV0$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseInvokeTransactionV0();
    message.maxFee = object.maxFee !== void 0 && object.maxFee !== null ? FieldElement.fromPartial(object.maxFee) : void 0;
    message.signature = object.signature?.map((e) => FieldElement.fromPartial(e)) || [];
    message.contractAddress = object.contractAddress !== void 0 && object.contractAddress !== null ? FieldElement.fromPartial(object.contractAddress) : void 0;
    message.entryPointSelector = object.entryPointSelector !== void 0 && object.entryPointSelector !== null ? FieldElement.fromPartial(object.entryPointSelector) : void 0;
    message.calldata = object.calldata?.map((e) => FieldElement.fromPartial(e)) || [];
    return message;
  }
};
function createBaseInvokeTransactionV1() {
  return { senderAddress: void 0, calldata: [], maxFee: void 0, signature: [], nonce: void 0 };
}
const InvokeTransactionV1$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.senderAddress !== void 0) {
      FieldElement.encode(message.senderAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.calldata !== void 0 && message.calldata.length !== 0) {
      for (const v of message.calldata) {
        FieldElement.encode(v, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.maxFee !== void 0) {
      FieldElement.encode(message.maxFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.signature !== void 0 && message.signature.length !== 0) {
      for (const v of message.signature) {
        FieldElement.encode(v, writer.uint32(34).fork()).ldelim();
      }
    }
    if (message.nonce !== void 0) {
      FieldElement.encode(message.nonce, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInvokeTransactionV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.senderAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.calldata.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.maxFee = FieldElement.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.signature.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.nonce = FieldElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      senderAddress: isSet$1(object.senderAddress) ? FieldElement.fromJSON(object.senderAddress) : void 0,
      calldata: globalThis.Array.isArray(object?.calldata) ? object.calldata.map((e) => FieldElement.fromJSON(e)) : [],
      maxFee: isSet$1(object.maxFee) ? FieldElement.fromJSON(object.maxFee) : void 0,
      signature: globalThis.Array.isArray(object?.signature) ? object.signature.map((e) => FieldElement.fromJSON(e)) : [],
      nonce: isSet$1(object.nonce) ? FieldElement.fromJSON(object.nonce) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.senderAddress !== void 0) {
      obj.senderAddress = FieldElement.toJSON(message.senderAddress);
    }
    if (message.calldata?.length) {
      obj.calldata = message.calldata.map((e) => FieldElement.toJSON(e));
    }
    if (message.maxFee !== void 0) {
      obj.maxFee = FieldElement.toJSON(message.maxFee);
    }
    if (message.signature?.length) {
      obj.signature = message.signature.map((e) => FieldElement.toJSON(e));
    }
    if (message.nonce !== void 0) {
      obj.nonce = FieldElement.toJSON(message.nonce);
    }
    return obj;
  },
  create(base) {
    return InvokeTransactionV1$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseInvokeTransactionV1();
    message.senderAddress = object.senderAddress !== void 0 && object.senderAddress !== null ? FieldElement.fromPartial(object.senderAddress) : void 0;
    message.calldata = object.calldata?.map((e) => FieldElement.fromPartial(e)) || [];
    message.maxFee = object.maxFee !== void 0 && object.maxFee !== null ? FieldElement.fromPartial(object.maxFee) : void 0;
    message.signature = object.signature?.map((e) => FieldElement.fromPartial(e)) || [];
    message.nonce = object.nonce !== void 0 && object.nonce !== null ? FieldElement.fromPartial(object.nonce) : void 0;
    return message;
  }
};
function createBaseInvokeTransactionV3() {
  return {
    senderAddress: void 0,
    calldata: [],
    signature: [],
    nonce: void 0,
    resourceBounds: void 0,
    tip: BigInt("0"),
    paymasterData: [],
    accountDeploymentData: [],
    nonceDataAvailabilityMode: 0,
    feeDataAvailabilityMode: 0
  };
}
const InvokeTransactionV3$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.senderAddress !== void 0) {
      FieldElement.encode(message.senderAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.calldata !== void 0 && message.calldata.length !== 0) {
      for (const v of message.calldata) {
        FieldElement.encode(v, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.signature !== void 0 && message.signature.length !== 0) {
      for (const v of message.signature) {
        FieldElement.encode(v, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.nonce !== void 0) {
      FieldElement.encode(message.nonce, writer.uint32(34).fork()).ldelim();
    }
    if (message.resourceBounds !== void 0) {
      ResourceBoundsMapping$1.encode(message.resourceBounds, writer.uint32(42).fork()).ldelim();
    }
    if (message.tip !== void 0 && message.tip !== BigInt("0")) {
      if (BigInt.asUintN(64, message.tip) !== message.tip) {
        throw new globalThis.Error("value provided for field message.tip of type uint64 too large");
      }
      writer.uint32(48).uint64(message.tip.toString());
    }
    if (message.paymasterData !== void 0 && message.paymasterData.length !== 0) {
      for (const v of message.paymasterData) {
        FieldElement.encode(v, writer.uint32(58).fork()).ldelim();
      }
    }
    if (message.accountDeploymentData !== void 0 && message.accountDeploymentData.length !== 0) {
      for (const v of message.accountDeploymentData) {
        FieldElement.encode(v, writer.uint32(66).fork()).ldelim();
      }
    }
    if (message.nonceDataAvailabilityMode !== void 0 && message.nonceDataAvailabilityMode !== 0) {
      writer.uint32(72).int32(message.nonceDataAvailabilityMode);
    }
    if (message.feeDataAvailabilityMode !== void 0 && message.feeDataAvailabilityMode !== 0) {
      writer.uint32(80).int32(message.feeDataAvailabilityMode);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInvokeTransactionV3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.senderAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.calldata.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.signature.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.nonce = FieldElement.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.resourceBounds = ResourceBoundsMapping$1.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.tip = longToBigint(reader.uint64());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.paymasterData.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.accountDeploymentData.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }
          message.nonceDataAvailabilityMode = reader.int32();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }
          message.feeDataAvailabilityMode = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      senderAddress: isSet$1(object.senderAddress) ? FieldElement.fromJSON(object.senderAddress) : void 0,
      calldata: globalThis.Array.isArray(object?.calldata) ? object.calldata.map((e) => FieldElement.fromJSON(e)) : [],
      signature: globalThis.Array.isArray(object?.signature) ? object.signature.map((e) => FieldElement.fromJSON(e)) : [],
      nonce: isSet$1(object.nonce) ? FieldElement.fromJSON(object.nonce) : void 0,
      resourceBounds: isSet$1(object.resourceBounds) ? ResourceBoundsMapping$1.fromJSON(object.resourceBounds) : void 0,
      tip: isSet$1(object.tip) ? BigInt(object.tip) : BigInt("0"),
      paymasterData: globalThis.Array.isArray(object?.paymasterData) ? object.paymasterData.map((e) => FieldElement.fromJSON(e)) : [],
      accountDeploymentData: globalThis.Array.isArray(object?.accountDeploymentData) ? object.accountDeploymentData.map((e) => FieldElement.fromJSON(e)) : [],
      nonceDataAvailabilityMode: isSet$1(object.nonceDataAvailabilityMode) ? dataAvailabilityModeFromJSON(object.nonceDataAvailabilityMode) : 0,
      feeDataAvailabilityMode: isSet$1(object.feeDataAvailabilityMode) ? dataAvailabilityModeFromJSON(object.feeDataAvailabilityMode) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.senderAddress !== void 0) {
      obj.senderAddress = FieldElement.toJSON(message.senderAddress);
    }
    if (message.calldata?.length) {
      obj.calldata = message.calldata.map((e) => FieldElement.toJSON(e));
    }
    if (message.signature?.length) {
      obj.signature = message.signature.map((e) => FieldElement.toJSON(e));
    }
    if (message.nonce !== void 0) {
      obj.nonce = FieldElement.toJSON(message.nonce);
    }
    if (message.resourceBounds !== void 0) {
      obj.resourceBounds = ResourceBoundsMapping$1.toJSON(message.resourceBounds);
    }
    if (message.tip !== void 0 && message.tip !== BigInt("0")) {
      obj.tip = message.tip.toString();
    }
    if (message.paymasterData?.length) {
      obj.paymasterData = message.paymasterData.map((e) => FieldElement.toJSON(e));
    }
    if (message.accountDeploymentData?.length) {
      obj.accountDeploymentData = message.accountDeploymentData.map((e) => FieldElement.toJSON(e));
    }
    if (message.nonceDataAvailabilityMode !== void 0 && message.nonceDataAvailabilityMode !== 0) {
      obj.nonceDataAvailabilityMode = dataAvailabilityModeToJSON(message.nonceDataAvailabilityMode);
    }
    if (message.feeDataAvailabilityMode !== void 0 && message.feeDataAvailabilityMode !== 0) {
      obj.feeDataAvailabilityMode = dataAvailabilityModeToJSON(message.feeDataAvailabilityMode);
    }
    return obj;
  },
  create(base) {
    return InvokeTransactionV3$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseInvokeTransactionV3();
    message.senderAddress = object.senderAddress !== void 0 && object.senderAddress !== null ? FieldElement.fromPartial(object.senderAddress) : void 0;
    message.calldata = object.calldata?.map((e) => FieldElement.fromPartial(e)) || [];
    message.signature = object.signature?.map((e) => FieldElement.fromPartial(e)) || [];
    message.nonce = object.nonce !== void 0 && object.nonce !== null ? FieldElement.fromPartial(object.nonce) : void 0;
    message.resourceBounds = object.resourceBounds !== void 0 && object.resourceBounds !== null ? ResourceBoundsMapping$1.fromPartial(object.resourceBounds) : void 0;
    message.tip = object.tip ?? BigInt("0");
    message.paymasterData = object.paymasterData?.map((e) => FieldElement.fromPartial(e)) || [];
    message.accountDeploymentData = object.accountDeploymentData?.map((e) => FieldElement.fromPartial(e)) || [];
    message.nonceDataAvailabilityMode = object.nonceDataAvailabilityMode ?? 0;
    message.feeDataAvailabilityMode = object.feeDataAvailabilityMode ?? 0;
    return message;
  }
};
function createBaseL1HandlerTransaction() {
  return { nonce: BigInt("0"), contractAddress: void 0, entryPointSelector: void 0, calldata: [] };
}
const L1HandlerTransaction$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.nonce !== void 0 && message.nonce !== BigInt("0")) {
      if (BigInt.asUintN(64, message.nonce) !== message.nonce) {
        throw new globalThis.Error("value provided for field message.nonce of type uint64 too large");
      }
      writer.uint32(8).uint64(message.nonce.toString());
    }
    if (message.contractAddress !== void 0) {
      FieldElement.encode(message.contractAddress, writer.uint32(18).fork()).ldelim();
    }
    if (message.entryPointSelector !== void 0) {
      FieldElement.encode(message.entryPointSelector, writer.uint32(26).fork()).ldelim();
    }
    if (message.calldata !== void 0 && message.calldata.length !== 0) {
      for (const v of message.calldata) {
        FieldElement.encode(v, writer.uint32(34).fork()).ldelim();
      }
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseL1HandlerTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.nonce = longToBigint(reader.uint64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.contractAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.entryPointSelector = FieldElement.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.calldata.push(FieldElement.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      nonce: isSet$1(object.nonce) ? BigInt(object.nonce) : BigInt("0"),
      contractAddress: isSet$1(object.contractAddress) ? FieldElement.fromJSON(object.contractAddress) : void 0,
      entryPointSelector: isSet$1(object.entryPointSelector) ? FieldElement.fromJSON(object.entryPointSelector) : void 0,
      calldata: globalThis.Array.isArray(object?.calldata) ? object.calldata.map((e) => FieldElement.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.nonce !== void 0 && message.nonce !== BigInt("0")) {
      obj.nonce = message.nonce.toString();
    }
    if (message.contractAddress !== void 0) {
      obj.contractAddress = FieldElement.toJSON(message.contractAddress);
    }
    if (message.entryPointSelector !== void 0) {
      obj.entryPointSelector = FieldElement.toJSON(message.entryPointSelector);
    }
    if (message.calldata?.length) {
      obj.calldata = message.calldata.map((e) => FieldElement.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return L1HandlerTransaction$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseL1HandlerTransaction();
    message.nonce = object.nonce ?? BigInt("0");
    message.contractAddress = object.contractAddress !== void 0 && object.contractAddress !== null ? FieldElement.fromPartial(object.contractAddress) : void 0;
    message.entryPointSelector = object.entryPointSelector !== void 0 && object.entryPointSelector !== null ? FieldElement.fromPartial(object.entryPointSelector) : void 0;
    message.calldata = object.calldata?.map((e) => FieldElement.fromPartial(e)) || [];
    return message;
  }
};
function createBaseDeployTransaction() {
  return { contractAddressSalt: void 0, constructorCalldata: [], classHash: void 0 };
}
const DeployTransaction$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.contractAddressSalt !== void 0) {
      FieldElement.encode(message.contractAddressSalt, writer.uint32(10).fork()).ldelim();
    }
    if (message.constructorCalldata !== void 0 && message.constructorCalldata.length !== 0) {
      for (const v of message.constructorCalldata) {
        FieldElement.encode(v, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.classHash !== void 0) {
      FieldElement.encode(message.classHash, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeployTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.contractAddressSalt = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.constructorCalldata.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.classHash = FieldElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      contractAddressSalt: isSet$1(object.contractAddressSalt) ? FieldElement.fromJSON(object.contractAddressSalt) : void 0,
      constructorCalldata: globalThis.Array.isArray(object?.constructorCalldata) ? object.constructorCalldata.map((e) => FieldElement.fromJSON(e)) : [],
      classHash: isSet$1(object.classHash) ? FieldElement.fromJSON(object.classHash) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.contractAddressSalt !== void 0) {
      obj.contractAddressSalt = FieldElement.toJSON(message.contractAddressSalt);
    }
    if (message.constructorCalldata?.length) {
      obj.constructorCalldata = message.constructorCalldata.map((e) => FieldElement.toJSON(e));
    }
    if (message.classHash !== void 0) {
      obj.classHash = FieldElement.toJSON(message.classHash);
    }
    return obj;
  },
  create(base) {
    return DeployTransaction$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDeployTransaction();
    message.contractAddressSalt = object.contractAddressSalt !== void 0 && object.contractAddressSalt !== null ? FieldElement.fromPartial(object.contractAddressSalt) : void 0;
    message.constructorCalldata = object.constructorCalldata?.map((e) => FieldElement.fromPartial(e)) || [];
    message.classHash = object.classHash !== void 0 && object.classHash !== null ? FieldElement.fromPartial(object.classHash) : void 0;
    return message;
  }
};
function createBaseDeclareTransactionV0() {
  return { senderAddress: void 0, maxFee: void 0, signature: [], classHash: void 0 };
}
const DeclareTransactionV0$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.senderAddress !== void 0) {
      FieldElement.encode(message.senderAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxFee !== void 0) {
      FieldElement.encode(message.maxFee, writer.uint32(18).fork()).ldelim();
    }
    if (message.signature !== void 0 && message.signature.length !== 0) {
      for (const v of message.signature) {
        FieldElement.encode(v, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.classHash !== void 0) {
      FieldElement.encode(message.classHash, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeclareTransactionV0();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.senderAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.maxFee = FieldElement.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.signature.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.classHash = FieldElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      senderAddress: isSet$1(object.senderAddress) ? FieldElement.fromJSON(object.senderAddress) : void 0,
      maxFee: isSet$1(object.maxFee) ? FieldElement.fromJSON(object.maxFee) : void 0,
      signature: globalThis.Array.isArray(object?.signature) ? object.signature.map((e) => FieldElement.fromJSON(e)) : [],
      classHash: isSet$1(object.classHash) ? FieldElement.fromJSON(object.classHash) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.senderAddress !== void 0) {
      obj.senderAddress = FieldElement.toJSON(message.senderAddress);
    }
    if (message.maxFee !== void 0) {
      obj.maxFee = FieldElement.toJSON(message.maxFee);
    }
    if (message.signature?.length) {
      obj.signature = message.signature.map((e) => FieldElement.toJSON(e));
    }
    if (message.classHash !== void 0) {
      obj.classHash = FieldElement.toJSON(message.classHash);
    }
    return obj;
  },
  create(base) {
    return DeclareTransactionV0$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDeclareTransactionV0();
    message.senderAddress = object.senderAddress !== void 0 && object.senderAddress !== null ? FieldElement.fromPartial(object.senderAddress) : void 0;
    message.maxFee = object.maxFee !== void 0 && object.maxFee !== null ? FieldElement.fromPartial(object.maxFee) : void 0;
    message.signature = object.signature?.map((e) => FieldElement.fromPartial(e)) || [];
    message.classHash = object.classHash !== void 0 && object.classHash !== null ? FieldElement.fromPartial(object.classHash) : void 0;
    return message;
  }
};
function createBaseDeclareTransactionV1() {
  return { senderAddress: void 0, maxFee: void 0, signature: [], nonce: void 0, classHash: void 0 };
}
const DeclareTransactionV1$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.senderAddress !== void 0) {
      FieldElement.encode(message.senderAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxFee !== void 0) {
      FieldElement.encode(message.maxFee, writer.uint32(18).fork()).ldelim();
    }
    if (message.signature !== void 0 && message.signature.length !== 0) {
      for (const v of message.signature) {
        FieldElement.encode(v, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.nonce !== void 0) {
      FieldElement.encode(message.nonce, writer.uint32(34).fork()).ldelim();
    }
    if (message.classHash !== void 0) {
      FieldElement.encode(message.classHash, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeclareTransactionV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.senderAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.maxFee = FieldElement.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.signature.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.nonce = FieldElement.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.classHash = FieldElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      senderAddress: isSet$1(object.senderAddress) ? FieldElement.fromJSON(object.senderAddress) : void 0,
      maxFee: isSet$1(object.maxFee) ? FieldElement.fromJSON(object.maxFee) : void 0,
      signature: globalThis.Array.isArray(object?.signature) ? object.signature.map((e) => FieldElement.fromJSON(e)) : [],
      nonce: isSet$1(object.nonce) ? FieldElement.fromJSON(object.nonce) : void 0,
      classHash: isSet$1(object.classHash) ? FieldElement.fromJSON(object.classHash) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.senderAddress !== void 0) {
      obj.senderAddress = FieldElement.toJSON(message.senderAddress);
    }
    if (message.maxFee !== void 0) {
      obj.maxFee = FieldElement.toJSON(message.maxFee);
    }
    if (message.signature?.length) {
      obj.signature = message.signature.map((e) => FieldElement.toJSON(e));
    }
    if (message.nonce !== void 0) {
      obj.nonce = FieldElement.toJSON(message.nonce);
    }
    if (message.classHash !== void 0) {
      obj.classHash = FieldElement.toJSON(message.classHash);
    }
    return obj;
  },
  create(base) {
    return DeclareTransactionV1$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDeclareTransactionV1();
    message.senderAddress = object.senderAddress !== void 0 && object.senderAddress !== null ? FieldElement.fromPartial(object.senderAddress) : void 0;
    message.maxFee = object.maxFee !== void 0 && object.maxFee !== null ? FieldElement.fromPartial(object.maxFee) : void 0;
    message.signature = object.signature?.map((e) => FieldElement.fromPartial(e)) || [];
    message.nonce = object.nonce !== void 0 && object.nonce !== null ? FieldElement.fromPartial(object.nonce) : void 0;
    message.classHash = object.classHash !== void 0 && object.classHash !== null ? FieldElement.fromPartial(object.classHash) : void 0;
    return message;
  }
};
function createBaseDeclareTransactionV2() {
  return {
    senderAddress: void 0,
    compiledClassHash: void 0,
    maxFee: void 0,
    signature: [],
    nonce: void 0,
    classHash: void 0
  };
}
const DeclareTransactionV2$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.senderAddress !== void 0) {
      FieldElement.encode(message.senderAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.compiledClassHash !== void 0) {
      FieldElement.encode(message.compiledClassHash, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxFee !== void 0) {
      FieldElement.encode(message.maxFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.signature !== void 0 && message.signature.length !== 0) {
      for (const v of message.signature) {
        FieldElement.encode(v, writer.uint32(34).fork()).ldelim();
      }
    }
    if (message.nonce !== void 0) {
      FieldElement.encode(message.nonce, writer.uint32(42).fork()).ldelim();
    }
    if (message.classHash !== void 0) {
      FieldElement.encode(message.classHash, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeclareTransactionV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.senderAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.compiledClassHash = FieldElement.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.maxFee = FieldElement.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.signature.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.nonce = FieldElement.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.classHash = FieldElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      senderAddress: isSet$1(object.senderAddress) ? FieldElement.fromJSON(object.senderAddress) : void 0,
      compiledClassHash: isSet$1(object.compiledClassHash) ? FieldElement.fromJSON(object.compiledClassHash) : void 0,
      maxFee: isSet$1(object.maxFee) ? FieldElement.fromJSON(object.maxFee) : void 0,
      signature: globalThis.Array.isArray(object?.signature) ? object.signature.map((e) => FieldElement.fromJSON(e)) : [],
      nonce: isSet$1(object.nonce) ? FieldElement.fromJSON(object.nonce) : void 0,
      classHash: isSet$1(object.classHash) ? FieldElement.fromJSON(object.classHash) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.senderAddress !== void 0) {
      obj.senderAddress = FieldElement.toJSON(message.senderAddress);
    }
    if (message.compiledClassHash !== void 0) {
      obj.compiledClassHash = FieldElement.toJSON(message.compiledClassHash);
    }
    if (message.maxFee !== void 0) {
      obj.maxFee = FieldElement.toJSON(message.maxFee);
    }
    if (message.signature?.length) {
      obj.signature = message.signature.map((e) => FieldElement.toJSON(e));
    }
    if (message.nonce !== void 0) {
      obj.nonce = FieldElement.toJSON(message.nonce);
    }
    if (message.classHash !== void 0) {
      obj.classHash = FieldElement.toJSON(message.classHash);
    }
    return obj;
  },
  create(base) {
    return DeclareTransactionV2$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDeclareTransactionV2();
    message.senderAddress = object.senderAddress !== void 0 && object.senderAddress !== null ? FieldElement.fromPartial(object.senderAddress) : void 0;
    message.compiledClassHash = object.compiledClassHash !== void 0 && object.compiledClassHash !== null ? FieldElement.fromPartial(object.compiledClassHash) : void 0;
    message.maxFee = object.maxFee !== void 0 && object.maxFee !== null ? FieldElement.fromPartial(object.maxFee) : void 0;
    message.signature = object.signature?.map((e) => FieldElement.fromPartial(e)) || [];
    message.nonce = object.nonce !== void 0 && object.nonce !== null ? FieldElement.fromPartial(object.nonce) : void 0;
    message.classHash = object.classHash !== void 0 && object.classHash !== null ? FieldElement.fromPartial(object.classHash) : void 0;
    return message;
  }
};
function createBaseDeclareTransactionV3() {
  return {
    senderAddress: void 0,
    compiledClassHash: void 0,
    signature: [],
    nonce: void 0,
    classHash: void 0,
    resourceBounds: void 0,
    tip: BigInt("0"),
    paymasterData: [],
    accountDeploymentData: [],
    nonceDataAvailabilityMode: 0,
    feeDataAvailabilityMode: 0
  };
}
const DeclareTransactionV3$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.senderAddress !== void 0) {
      FieldElement.encode(message.senderAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.compiledClassHash !== void 0) {
      FieldElement.encode(message.compiledClassHash, writer.uint32(18).fork()).ldelim();
    }
    if (message.signature !== void 0 && message.signature.length !== 0) {
      for (const v of message.signature) {
        FieldElement.encode(v, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.nonce !== void 0) {
      FieldElement.encode(message.nonce, writer.uint32(34).fork()).ldelim();
    }
    if (message.classHash !== void 0) {
      FieldElement.encode(message.classHash, writer.uint32(42).fork()).ldelim();
    }
    if (message.resourceBounds !== void 0) {
      ResourceBoundsMapping$1.encode(message.resourceBounds, writer.uint32(50).fork()).ldelim();
    }
    if (message.tip !== void 0 && message.tip !== BigInt("0")) {
      if (BigInt.asUintN(64, message.tip) !== message.tip) {
        throw new globalThis.Error("value provided for field message.tip of type uint64 too large");
      }
      writer.uint32(56).uint64(message.tip.toString());
    }
    if (message.paymasterData !== void 0 && message.paymasterData.length !== 0) {
      for (const v of message.paymasterData) {
        FieldElement.encode(v, writer.uint32(66).fork()).ldelim();
      }
    }
    if (message.accountDeploymentData !== void 0 && message.accountDeploymentData.length !== 0) {
      for (const v of message.accountDeploymentData) {
        FieldElement.encode(v, writer.uint32(74).fork()).ldelim();
      }
    }
    if (message.nonceDataAvailabilityMode !== void 0 && message.nonceDataAvailabilityMode !== 0) {
      writer.uint32(80).int32(message.nonceDataAvailabilityMode);
    }
    if (message.feeDataAvailabilityMode !== void 0 && message.feeDataAvailabilityMode !== 0) {
      writer.uint32(88).int32(message.feeDataAvailabilityMode);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeclareTransactionV3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.senderAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.compiledClassHash = FieldElement.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.signature.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.nonce = FieldElement.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.classHash = FieldElement.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.resourceBounds = ResourceBoundsMapping$1.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }
          message.tip = longToBigint(reader.uint64());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.paymasterData.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }
          message.accountDeploymentData.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }
          message.nonceDataAvailabilityMode = reader.int32();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }
          message.feeDataAvailabilityMode = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      senderAddress: isSet$1(object.senderAddress) ? FieldElement.fromJSON(object.senderAddress) : void 0,
      compiledClassHash: isSet$1(object.compiledClassHash) ? FieldElement.fromJSON(object.compiledClassHash) : void 0,
      signature: globalThis.Array.isArray(object?.signature) ? object.signature.map((e) => FieldElement.fromJSON(e)) : [],
      nonce: isSet$1(object.nonce) ? FieldElement.fromJSON(object.nonce) : void 0,
      classHash: isSet$1(object.classHash) ? FieldElement.fromJSON(object.classHash) : void 0,
      resourceBounds: isSet$1(object.resourceBounds) ? ResourceBoundsMapping$1.fromJSON(object.resourceBounds) : void 0,
      tip: isSet$1(object.tip) ? BigInt(object.tip) : BigInt("0"),
      paymasterData: globalThis.Array.isArray(object?.paymasterData) ? object.paymasterData.map((e) => FieldElement.fromJSON(e)) : [],
      accountDeploymentData: globalThis.Array.isArray(object?.accountDeploymentData) ? object.accountDeploymentData.map((e) => FieldElement.fromJSON(e)) : [],
      nonceDataAvailabilityMode: isSet$1(object.nonceDataAvailabilityMode) ? dataAvailabilityModeFromJSON(object.nonceDataAvailabilityMode) : 0,
      feeDataAvailabilityMode: isSet$1(object.feeDataAvailabilityMode) ? dataAvailabilityModeFromJSON(object.feeDataAvailabilityMode) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.senderAddress !== void 0) {
      obj.senderAddress = FieldElement.toJSON(message.senderAddress);
    }
    if (message.compiledClassHash !== void 0) {
      obj.compiledClassHash = FieldElement.toJSON(message.compiledClassHash);
    }
    if (message.signature?.length) {
      obj.signature = message.signature.map((e) => FieldElement.toJSON(e));
    }
    if (message.nonce !== void 0) {
      obj.nonce = FieldElement.toJSON(message.nonce);
    }
    if (message.classHash !== void 0) {
      obj.classHash = FieldElement.toJSON(message.classHash);
    }
    if (message.resourceBounds !== void 0) {
      obj.resourceBounds = ResourceBoundsMapping$1.toJSON(message.resourceBounds);
    }
    if (message.tip !== void 0 && message.tip !== BigInt("0")) {
      obj.tip = message.tip.toString();
    }
    if (message.paymasterData?.length) {
      obj.paymasterData = message.paymasterData.map((e) => FieldElement.toJSON(e));
    }
    if (message.accountDeploymentData?.length) {
      obj.accountDeploymentData = message.accountDeploymentData.map((e) => FieldElement.toJSON(e));
    }
    if (message.nonceDataAvailabilityMode !== void 0 && message.nonceDataAvailabilityMode !== 0) {
      obj.nonceDataAvailabilityMode = dataAvailabilityModeToJSON(message.nonceDataAvailabilityMode);
    }
    if (message.feeDataAvailabilityMode !== void 0 && message.feeDataAvailabilityMode !== 0) {
      obj.feeDataAvailabilityMode = dataAvailabilityModeToJSON(message.feeDataAvailabilityMode);
    }
    return obj;
  },
  create(base) {
    return DeclareTransactionV3$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDeclareTransactionV3();
    message.senderAddress = object.senderAddress !== void 0 && object.senderAddress !== null ? FieldElement.fromPartial(object.senderAddress) : void 0;
    message.compiledClassHash = object.compiledClassHash !== void 0 && object.compiledClassHash !== null ? FieldElement.fromPartial(object.compiledClassHash) : void 0;
    message.signature = object.signature?.map((e) => FieldElement.fromPartial(e)) || [];
    message.nonce = object.nonce !== void 0 && object.nonce !== null ? FieldElement.fromPartial(object.nonce) : void 0;
    message.classHash = object.classHash !== void 0 && object.classHash !== null ? FieldElement.fromPartial(object.classHash) : void 0;
    message.resourceBounds = object.resourceBounds !== void 0 && object.resourceBounds !== null ? ResourceBoundsMapping$1.fromPartial(object.resourceBounds) : void 0;
    message.tip = object.tip ?? BigInt("0");
    message.paymasterData = object.paymasterData?.map((e) => FieldElement.fromPartial(e)) || [];
    message.accountDeploymentData = object.accountDeploymentData?.map((e) => FieldElement.fromPartial(e)) || [];
    message.nonceDataAvailabilityMode = object.nonceDataAvailabilityMode ?? 0;
    message.feeDataAvailabilityMode = object.feeDataAvailabilityMode ?? 0;
    return message;
  }
};
function createBaseDeployAccountTransactionV1() {
  return {
    maxFee: void 0,
    signature: [],
    nonce: void 0,
    contractAddressSalt: void 0,
    constructorCalldata: [],
    classHash: void 0
  };
}
const DeployAccountTransactionV1$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.maxFee !== void 0) {
      FieldElement.encode(message.maxFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.signature !== void 0 && message.signature.length !== 0) {
      for (const v of message.signature) {
        FieldElement.encode(v, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.nonce !== void 0) {
      FieldElement.encode(message.nonce, writer.uint32(26).fork()).ldelim();
    }
    if (message.contractAddressSalt !== void 0) {
      FieldElement.encode(message.contractAddressSalt, writer.uint32(34).fork()).ldelim();
    }
    if (message.constructorCalldata !== void 0 && message.constructorCalldata.length !== 0) {
      for (const v of message.constructorCalldata) {
        FieldElement.encode(v, writer.uint32(42).fork()).ldelim();
      }
    }
    if (message.classHash !== void 0) {
      FieldElement.encode(message.classHash, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeployAccountTransactionV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.maxFee = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.signature.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.nonce = FieldElement.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.contractAddressSalt = FieldElement.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.constructorCalldata.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.classHash = FieldElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      maxFee: isSet$1(object.maxFee) ? FieldElement.fromJSON(object.maxFee) : void 0,
      signature: globalThis.Array.isArray(object?.signature) ? object.signature.map((e) => FieldElement.fromJSON(e)) : [],
      nonce: isSet$1(object.nonce) ? FieldElement.fromJSON(object.nonce) : void 0,
      contractAddressSalt: isSet$1(object.contractAddressSalt) ? FieldElement.fromJSON(object.contractAddressSalt) : void 0,
      constructorCalldata: globalThis.Array.isArray(object?.constructorCalldata) ? object.constructorCalldata.map((e) => FieldElement.fromJSON(e)) : [],
      classHash: isSet$1(object.classHash) ? FieldElement.fromJSON(object.classHash) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.maxFee !== void 0) {
      obj.maxFee = FieldElement.toJSON(message.maxFee);
    }
    if (message.signature?.length) {
      obj.signature = message.signature.map((e) => FieldElement.toJSON(e));
    }
    if (message.nonce !== void 0) {
      obj.nonce = FieldElement.toJSON(message.nonce);
    }
    if (message.contractAddressSalt !== void 0) {
      obj.contractAddressSalt = FieldElement.toJSON(message.contractAddressSalt);
    }
    if (message.constructorCalldata?.length) {
      obj.constructorCalldata = message.constructorCalldata.map((e) => FieldElement.toJSON(e));
    }
    if (message.classHash !== void 0) {
      obj.classHash = FieldElement.toJSON(message.classHash);
    }
    return obj;
  },
  create(base) {
    return DeployAccountTransactionV1$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDeployAccountTransactionV1();
    message.maxFee = object.maxFee !== void 0 && object.maxFee !== null ? FieldElement.fromPartial(object.maxFee) : void 0;
    message.signature = object.signature?.map((e) => FieldElement.fromPartial(e)) || [];
    message.nonce = object.nonce !== void 0 && object.nonce !== null ? FieldElement.fromPartial(object.nonce) : void 0;
    message.contractAddressSalt = object.contractAddressSalt !== void 0 && object.contractAddressSalt !== null ? FieldElement.fromPartial(object.contractAddressSalt) : void 0;
    message.constructorCalldata = object.constructorCalldata?.map((e) => FieldElement.fromPartial(e)) || [];
    message.classHash = object.classHash !== void 0 && object.classHash !== null ? FieldElement.fromPartial(object.classHash) : void 0;
    return message;
  }
};
function createBaseDeployAccountTransactionV3() {
  return {
    signature: [],
    nonce: void 0,
    contractAddressSalt: void 0,
    constructorCalldata: [],
    classHash: void 0,
    resourceBounds: void 0,
    tip: BigInt("0"),
    paymasterData: [],
    nonceDataAvailabilityMode: 0,
    feeDataAvailabilityMode: 0
  };
}
const DeployAccountTransactionV3$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.signature !== void 0 && message.signature.length !== 0) {
      for (const v of message.signature) {
        FieldElement.encode(v, writer.uint32(10).fork()).ldelim();
      }
    }
    if (message.nonce !== void 0) {
      FieldElement.encode(message.nonce, writer.uint32(18).fork()).ldelim();
    }
    if (message.contractAddressSalt !== void 0) {
      FieldElement.encode(message.contractAddressSalt, writer.uint32(26).fork()).ldelim();
    }
    if (message.constructorCalldata !== void 0 && message.constructorCalldata.length !== 0) {
      for (const v of message.constructorCalldata) {
        FieldElement.encode(v, writer.uint32(34).fork()).ldelim();
      }
    }
    if (message.classHash !== void 0) {
      FieldElement.encode(message.classHash, writer.uint32(42).fork()).ldelim();
    }
    if (message.resourceBounds !== void 0) {
      ResourceBoundsMapping$1.encode(message.resourceBounds, writer.uint32(50).fork()).ldelim();
    }
    if (message.tip !== void 0 && message.tip !== BigInt("0")) {
      if (BigInt.asUintN(64, message.tip) !== message.tip) {
        throw new globalThis.Error("value provided for field message.tip of type uint64 too large");
      }
      writer.uint32(56).uint64(message.tip.toString());
    }
    if (message.paymasterData !== void 0 && message.paymasterData.length !== 0) {
      for (const v of message.paymasterData) {
        FieldElement.encode(v, writer.uint32(66).fork()).ldelim();
      }
    }
    if (message.nonceDataAvailabilityMode !== void 0 && message.nonceDataAvailabilityMode !== 0) {
      writer.uint32(72).int32(message.nonceDataAvailabilityMode);
    }
    if (message.feeDataAvailabilityMode !== void 0 && message.feeDataAvailabilityMode !== 0) {
      writer.uint32(80).int32(message.feeDataAvailabilityMode);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeployAccountTransactionV3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.signature.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.nonce = FieldElement.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.contractAddressSalt = FieldElement.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.constructorCalldata.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.classHash = FieldElement.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.resourceBounds = ResourceBoundsMapping$1.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }
          message.tip = longToBigint(reader.uint64());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.paymasterData.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }
          message.nonceDataAvailabilityMode = reader.int32();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }
          message.feeDataAvailabilityMode = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      signature: globalThis.Array.isArray(object?.signature) ? object.signature.map((e) => FieldElement.fromJSON(e)) : [],
      nonce: isSet$1(object.nonce) ? FieldElement.fromJSON(object.nonce) : void 0,
      contractAddressSalt: isSet$1(object.contractAddressSalt) ? FieldElement.fromJSON(object.contractAddressSalt) : void 0,
      constructorCalldata: globalThis.Array.isArray(object?.constructorCalldata) ? object.constructorCalldata.map((e) => FieldElement.fromJSON(e)) : [],
      classHash: isSet$1(object.classHash) ? FieldElement.fromJSON(object.classHash) : void 0,
      resourceBounds: isSet$1(object.resourceBounds) ? ResourceBoundsMapping$1.fromJSON(object.resourceBounds) : void 0,
      tip: isSet$1(object.tip) ? BigInt(object.tip) : BigInt("0"),
      paymasterData: globalThis.Array.isArray(object?.paymasterData) ? object.paymasterData.map((e) => FieldElement.fromJSON(e)) : [],
      nonceDataAvailabilityMode: isSet$1(object.nonceDataAvailabilityMode) ? dataAvailabilityModeFromJSON(object.nonceDataAvailabilityMode) : 0,
      feeDataAvailabilityMode: isSet$1(object.feeDataAvailabilityMode) ? dataAvailabilityModeFromJSON(object.feeDataAvailabilityMode) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.signature?.length) {
      obj.signature = message.signature.map((e) => FieldElement.toJSON(e));
    }
    if (message.nonce !== void 0) {
      obj.nonce = FieldElement.toJSON(message.nonce);
    }
    if (message.contractAddressSalt !== void 0) {
      obj.contractAddressSalt = FieldElement.toJSON(message.contractAddressSalt);
    }
    if (message.constructorCalldata?.length) {
      obj.constructorCalldata = message.constructorCalldata.map((e) => FieldElement.toJSON(e));
    }
    if (message.classHash !== void 0) {
      obj.classHash = FieldElement.toJSON(message.classHash);
    }
    if (message.resourceBounds !== void 0) {
      obj.resourceBounds = ResourceBoundsMapping$1.toJSON(message.resourceBounds);
    }
    if (message.tip !== void 0 && message.tip !== BigInt("0")) {
      obj.tip = message.tip.toString();
    }
    if (message.paymasterData?.length) {
      obj.paymasterData = message.paymasterData.map((e) => FieldElement.toJSON(e));
    }
    if (message.nonceDataAvailabilityMode !== void 0 && message.nonceDataAvailabilityMode !== 0) {
      obj.nonceDataAvailabilityMode = dataAvailabilityModeToJSON(message.nonceDataAvailabilityMode);
    }
    if (message.feeDataAvailabilityMode !== void 0 && message.feeDataAvailabilityMode !== 0) {
      obj.feeDataAvailabilityMode = dataAvailabilityModeToJSON(message.feeDataAvailabilityMode);
    }
    return obj;
  },
  create(base) {
    return DeployAccountTransactionV3$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDeployAccountTransactionV3();
    message.signature = object.signature?.map((e) => FieldElement.fromPartial(e)) || [];
    message.nonce = object.nonce !== void 0 && object.nonce !== null ? FieldElement.fromPartial(object.nonce) : void 0;
    message.contractAddressSalt = object.contractAddressSalt !== void 0 && object.contractAddressSalt !== null ? FieldElement.fromPartial(object.contractAddressSalt) : void 0;
    message.constructorCalldata = object.constructorCalldata?.map((e) => FieldElement.fromPartial(e)) || [];
    message.classHash = object.classHash !== void 0 && object.classHash !== null ? FieldElement.fromPartial(object.classHash) : void 0;
    message.resourceBounds = object.resourceBounds !== void 0 && object.resourceBounds !== null ? ResourceBoundsMapping$1.fromPartial(object.resourceBounds) : void 0;
    message.tip = object.tip ?? BigInt("0");
    message.paymasterData = object.paymasterData?.map((e) => FieldElement.fromPartial(e)) || [];
    message.nonceDataAvailabilityMode = object.nonceDataAvailabilityMode ?? 0;
    message.feeDataAvailabilityMode = object.feeDataAvailabilityMode ?? 0;
    return message;
  }
};
function createBaseTransactionReceipt() {
  return { filterIds: [], meta: void 0, receipt: void 0 };
}
const TransactionReceipt$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.filterIds !== void 0 && message.filterIds.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.filterIds) {
        writer.uint32(v);
      }
      writer.ldelim();
    }
    if (message.meta !== void 0) {
      TransactionReceiptMeta$1.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    switch (message.receipt?.$case) {
      case "invoke":
        InvokeTransactionReceipt$1.encode(message.receipt.invoke, writer.uint32(26).fork()).ldelim();
        break;
      case "l1Handler":
        L1HandlerTransactionReceipt$1.encode(message.receipt.l1Handler, writer.uint32(34).fork()).ldelim();
        break;
      case "declare":
        DeclareTransactionReceipt$1.encode(message.receipt.declare, writer.uint32(42).fork()).ldelim();
        break;
      case "deploy":
        DeployTransactionReceipt$1.encode(message.receipt.deploy, writer.uint32(50).fork()).ldelim();
        break;
      case "deployAccount":
        DeployAccountTransactionReceipt$1.encode(message.receipt.deployAccount, writer.uint32(58).fork()).ldelim();
        break;
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTransactionReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.filterIds.push(reader.uint32());
            continue;
          }
          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.filterIds.push(reader.uint32());
            }
            continue;
          }
          break;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.meta = TransactionReceiptMeta$1.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.receipt = { $case: "invoke", invoke: InvokeTransactionReceipt$1.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.receipt = {
            $case: "l1Handler",
            l1Handler: L1HandlerTransactionReceipt$1.decode(reader, reader.uint32())
          };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.receipt = { $case: "declare", declare: DeclareTransactionReceipt$1.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.receipt = { $case: "deploy", deploy: DeployTransactionReceipt$1.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.receipt = {
            $case: "deployAccount",
            deployAccount: DeployAccountTransactionReceipt$1.decode(reader, reader.uint32())
          };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      filterIds: globalThis.Array.isArray(object?.filterIds) ? object.filterIds.map((e) => globalThis.Number(e)) : [],
      meta: isSet$1(object.meta) ? TransactionReceiptMeta$1.fromJSON(object.meta) : void 0,
      receipt: isSet$1(object.invoke) ? { $case: "invoke", invoke: InvokeTransactionReceipt$1.fromJSON(object.invoke) } : isSet$1(object.l1Handler) ? { $case: "l1Handler", l1Handler: L1HandlerTransactionReceipt$1.fromJSON(object.l1Handler) } : isSet$1(object.declare) ? { $case: "declare", declare: DeclareTransactionReceipt$1.fromJSON(object.declare) } : isSet$1(object.deploy) ? { $case: "deploy", deploy: DeployTransactionReceipt$1.fromJSON(object.deploy) } : isSet$1(object.deployAccount) ? { $case: "deployAccount", deployAccount: DeployAccountTransactionReceipt$1.fromJSON(object.deployAccount) } : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.filterIds?.length) {
      obj.filterIds = message.filterIds.map((e) => Math.round(e));
    }
    if (message.meta !== void 0) {
      obj.meta = TransactionReceiptMeta$1.toJSON(message.meta);
    }
    if (message.receipt?.$case === "invoke") {
      obj.invoke = InvokeTransactionReceipt$1.toJSON(message.receipt.invoke);
    }
    if (message.receipt?.$case === "l1Handler") {
      obj.l1Handler = L1HandlerTransactionReceipt$1.toJSON(message.receipt.l1Handler);
    }
    if (message.receipt?.$case === "declare") {
      obj.declare = DeclareTransactionReceipt$1.toJSON(message.receipt.declare);
    }
    if (message.receipt?.$case === "deploy") {
      obj.deploy = DeployTransactionReceipt$1.toJSON(message.receipt.deploy);
    }
    if (message.receipt?.$case === "deployAccount") {
      obj.deployAccount = DeployAccountTransactionReceipt$1.toJSON(message.receipt.deployAccount);
    }
    return obj;
  },
  create(base) {
    return TransactionReceipt$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTransactionReceipt();
    message.filterIds = object.filterIds?.map((e) => e) || [];
    message.meta = object.meta !== void 0 && object.meta !== null ? TransactionReceiptMeta$1.fromPartial(object.meta) : void 0;
    if (object.receipt?.$case === "invoke" && object.receipt?.invoke !== void 0 && object.receipt?.invoke !== null) {
      message.receipt = { $case: "invoke", invoke: InvokeTransactionReceipt$1.fromPartial(object.receipt.invoke) };
    }
    if (object.receipt?.$case === "l1Handler" && object.receipt?.l1Handler !== void 0 && object.receipt?.l1Handler !== null) {
      message.receipt = {
        $case: "l1Handler",
        l1Handler: L1HandlerTransactionReceipt$1.fromPartial(object.receipt.l1Handler)
      };
    }
    if (object.receipt?.$case === "declare" && object.receipt?.declare !== void 0 && object.receipt?.declare !== null) {
      message.receipt = { $case: "declare", declare: DeclareTransactionReceipt$1.fromPartial(object.receipt.declare) };
    }
    if (object.receipt?.$case === "deploy" && object.receipt?.deploy !== void 0 && object.receipt?.deploy !== null) {
      message.receipt = { $case: "deploy", deploy: DeployTransactionReceipt$1.fromPartial(object.receipt.deploy) };
    }
    if (object.receipt?.$case === "deployAccount" && object.receipt?.deployAccount !== void 0 && object.receipt?.deployAccount !== null) {
      message.receipt = {
        $case: "deployAccount",
        deployAccount: DeployAccountTransactionReceipt$1.fromPartial(object.receipt.deployAccount)
      };
    }
    return message;
  }
};
function createBaseTransactionReceiptMeta() {
  return {
    transactionIndex: 0,
    transactionHash: void 0,
    actualFee: void 0,
    executionResources: void 0,
    executionResult: void 0
  };
}
const TransactionReceiptMeta$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.transactionIndex !== void 0 && message.transactionIndex !== 0) {
      writer.uint32(8).uint32(message.transactionIndex);
    }
    if (message.transactionHash !== void 0) {
      FieldElement.encode(message.transactionHash, writer.uint32(18).fork()).ldelim();
    }
    if (message.actualFee !== void 0) {
      FeePayment$1.encode(message.actualFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.executionResources !== void 0) {
      ExecutionResources$1.encode(message.executionResources, writer.uint32(34).fork()).ldelim();
    }
    switch (message.executionResult?.$case) {
      case "succeeded":
        ExecutionSucceeded$1.encode(message.executionResult.succeeded, writer.uint32(42).fork()).ldelim();
        break;
      case "reverted":
        ExecutionReverted$1.encode(message.executionResult.reverted, writer.uint32(50).fork()).ldelim();
        break;
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTransactionReceiptMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.transactionIndex = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.transactionHash = FieldElement.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.actualFee = FeePayment$1.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.executionResources = ExecutionResources$1.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.executionResult = {
            $case: "succeeded",
            succeeded: ExecutionSucceeded$1.decode(reader, reader.uint32())
          };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.executionResult = { $case: "reverted", reverted: ExecutionReverted$1.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      transactionIndex: isSet$1(object.transactionIndex) ? globalThis.Number(object.transactionIndex) : 0,
      transactionHash: isSet$1(object.transactionHash) ? FieldElement.fromJSON(object.transactionHash) : void 0,
      actualFee: isSet$1(object.actualFee) ? FeePayment$1.fromJSON(object.actualFee) : void 0,
      executionResources: isSet$1(object.executionResources) ? ExecutionResources$1.fromJSON(object.executionResources) : void 0,
      executionResult: isSet$1(object.succeeded) ? { $case: "succeeded", succeeded: ExecutionSucceeded$1.fromJSON(object.succeeded) } : isSet$1(object.reverted) ? { $case: "reverted", reverted: ExecutionReverted$1.fromJSON(object.reverted) } : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.transactionIndex !== void 0 && message.transactionIndex !== 0) {
      obj.transactionIndex = Math.round(message.transactionIndex);
    }
    if (message.transactionHash !== void 0) {
      obj.transactionHash = FieldElement.toJSON(message.transactionHash);
    }
    if (message.actualFee !== void 0) {
      obj.actualFee = FeePayment$1.toJSON(message.actualFee);
    }
    if (message.executionResources !== void 0) {
      obj.executionResources = ExecutionResources$1.toJSON(message.executionResources);
    }
    if (message.executionResult?.$case === "succeeded") {
      obj.succeeded = ExecutionSucceeded$1.toJSON(message.executionResult.succeeded);
    }
    if (message.executionResult?.$case === "reverted") {
      obj.reverted = ExecutionReverted$1.toJSON(message.executionResult.reverted);
    }
    return obj;
  },
  create(base) {
    return TransactionReceiptMeta$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTransactionReceiptMeta();
    message.transactionIndex = object.transactionIndex ?? 0;
    message.transactionHash = object.transactionHash !== void 0 && object.transactionHash !== null ? FieldElement.fromPartial(object.transactionHash) : void 0;
    message.actualFee = object.actualFee !== void 0 && object.actualFee !== null ? FeePayment$1.fromPartial(object.actualFee) : void 0;
    message.executionResources = object.executionResources !== void 0 && object.executionResources !== null ? ExecutionResources$1.fromPartial(object.executionResources) : void 0;
    if (object.executionResult?.$case === "succeeded" && object.executionResult?.succeeded !== void 0 && object.executionResult?.succeeded !== null) {
      message.executionResult = {
        $case: "succeeded",
        succeeded: ExecutionSucceeded$1.fromPartial(object.executionResult.succeeded)
      };
    }
    if (object.executionResult?.$case === "reverted" && object.executionResult?.reverted !== void 0 && object.executionResult?.reverted !== null) {
      message.executionResult = {
        $case: "reverted",
        reverted: ExecutionReverted$1.fromPartial(object.executionResult.reverted)
      };
    }
    return message;
  }
};
function createBaseExecutionSucceeded() {
  return {};
}
const ExecutionSucceeded$1 = {
  encode(_, writer = _m0__default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExecutionSucceeded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return ExecutionSucceeded$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseExecutionSucceeded();
    return message;
  }
};
function createBaseExecutionReverted() {
  return { reason: "" };
}
const ExecutionReverted$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.reason !== void 0 && message.reason !== "") {
      writer.uint32(10).string(message.reason);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExecutionReverted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { reason: isSet$1(object.reason) ? globalThis.String(object.reason) : "" };
  },
  toJSON(message) {
    const obj = {};
    if (message.reason !== void 0 && message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },
  create(base) {
    return ExecutionReverted$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseExecutionReverted();
    message.reason = object.reason ?? "";
    return message;
  }
};
function createBaseInvokeTransactionReceipt() {
  return {};
}
const InvokeTransactionReceipt$1 = {
  encode(_, writer = _m0__default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInvokeTransactionReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return InvokeTransactionReceipt$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseInvokeTransactionReceipt();
    return message;
  }
};
function createBaseL1HandlerTransactionReceipt() {
  return { messageHash: new Uint8Array(0) };
}
const L1HandlerTransactionReceipt$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.messageHash !== void 0 && message.messageHash.length !== 0) {
      writer.uint32(10).bytes(message.messageHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseL1HandlerTransactionReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.messageHash = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { messageHash: isSet$1(object.messageHash) ? bytesFromBase64(object.messageHash) : new Uint8Array(0) };
  },
  toJSON(message) {
    const obj = {};
    if (message.messageHash !== void 0 && message.messageHash.length !== 0) {
      obj.messageHash = base64FromBytes(message.messageHash);
    }
    return obj;
  },
  create(base) {
    return L1HandlerTransactionReceipt$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseL1HandlerTransactionReceipt();
    message.messageHash = object.messageHash ?? new Uint8Array(0);
    return message;
  }
};
function createBaseDeclareTransactionReceipt() {
  return {};
}
const DeclareTransactionReceipt$1 = {
  encode(_, writer = _m0__default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeclareTransactionReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return DeclareTransactionReceipt$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseDeclareTransactionReceipt();
    return message;
  }
};
function createBaseDeployTransactionReceipt() {
  return { contractAddress: void 0 };
}
const DeployTransactionReceipt$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.contractAddress !== void 0) {
      FieldElement.encode(message.contractAddress, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeployTransactionReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.contractAddress = FieldElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      contractAddress: isSet$1(object.contractAddress) ? FieldElement.fromJSON(object.contractAddress) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.contractAddress !== void 0) {
      obj.contractAddress = FieldElement.toJSON(message.contractAddress);
    }
    return obj;
  },
  create(base) {
    return DeployTransactionReceipt$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDeployTransactionReceipt();
    message.contractAddress = object.contractAddress !== void 0 && object.contractAddress !== null ? FieldElement.fromPartial(object.contractAddress) : void 0;
    return message;
  }
};
function createBaseDeployAccountTransactionReceipt() {
  return { contractAddress: void 0 };
}
const DeployAccountTransactionReceipt$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.contractAddress !== void 0) {
      FieldElement.encode(message.contractAddress, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeployAccountTransactionReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.contractAddress = FieldElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      contractAddress: isSet$1(object.contractAddress) ? FieldElement.fromJSON(object.contractAddress) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.contractAddress !== void 0) {
      obj.contractAddress = FieldElement.toJSON(message.contractAddress);
    }
    return obj;
  },
  create(base) {
    return DeployAccountTransactionReceipt$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDeployAccountTransactionReceipt();
    message.contractAddress = object.contractAddress !== void 0 && object.contractAddress !== null ? FieldElement.fromPartial(object.contractAddress) : void 0;
    return message;
  }
};
function createBaseEvent() {
  return {
    filterIds: [],
    address: void 0,
    keys: [],
    data: [],
    eventIndex: 0,
    transactionIndex: 0,
    transactionHash: void 0,
    transactionStatus: 0,
    eventIndexInTransaction: 0
  };
}
const Event$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.filterIds !== void 0 && message.filterIds.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.filterIds) {
        writer.uint32(v);
      }
      writer.ldelim();
    }
    if (message.address !== void 0) {
      FieldElement.encode(message.address, writer.uint32(18).fork()).ldelim();
    }
    if (message.keys !== void 0 && message.keys.length !== 0) {
      for (const v of message.keys) {
        FieldElement.encode(v, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.data !== void 0 && message.data.length !== 0) {
      for (const v of message.data) {
        FieldElement.encode(v, writer.uint32(34).fork()).ldelim();
      }
    }
    if (message.eventIndex !== void 0 && message.eventIndex !== 0) {
      writer.uint32(40).uint32(message.eventIndex);
    }
    if (message.transactionIndex !== void 0 && message.transactionIndex !== 0) {
      writer.uint32(48).uint32(message.transactionIndex);
    }
    if (message.transactionHash !== void 0) {
      FieldElement.encode(message.transactionHash, writer.uint32(58).fork()).ldelim();
    }
    if (message.transactionStatus !== void 0 && message.transactionStatus !== 0) {
      writer.uint32(64).int32(message.transactionStatus);
    }
    if (message.eventIndexInTransaction !== void 0 && message.eventIndexInTransaction !== 0) {
      writer.uint32(72).uint32(message.eventIndexInTransaction);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.filterIds.push(reader.uint32());
            continue;
          }
          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.filterIds.push(reader.uint32());
            }
            continue;
          }
          break;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.address = FieldElement.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.keys.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.data.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.eventIndex = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.transactionIndex = reader.uint32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.transactionHash = FieldElement.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }
          message.transactionStatus = reader.int32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }
          message.eventIndexInTransaction = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      filterIds: globalThis.Array.isArray(object?.filterIds) ? object.filterIds.map((e) => globalThis.Number(e)) : [],
      address: isSet$1(object.address) ? FieldElement.fromJSON(object.address) : void 0,
      keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e) => FieldElement.fromJSON(e)) : [],
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e) => FieldElement.fromJSON(e)) : [],
      eventIndex: isSet$1(object.eventIndex) ? globalThis.Number(object.eventIndex) : 0,
      transactionIndex: isSet$1(object.transactionIndex) ? globalThis.Number(object.transactionIndex) : 0,
      transactionHash: isSet$1(object.transactionHash) ? FieldElement.fromJSON(object.transactionHash) : void 0,
      transactionStatus: isSet$1(object.transactionStatus) ? transactionStatusFromJSON(object.transactionStatus) : 0,
      eventIndexInTransaction: isSet$1(object.eventIndexInTransaction) ? globalThis.Number(object.eventIndexInTransaction) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.filterIds?.length) {
      obj.filterIds = message.filterIds.map((e) => Math.round(e));
    }
    if (message.address !== void 0) {
      obj.address = FieldElement.toJSON(message.address);
    }
    if (message.keys?.length) {
      obj.keys = message.keys.map((e) => FieldElement.toJSON(e));
    }
    if (message.data?.length) {
      obj.data = message.data.map((e) => FieldElement.toJSON(e));
    }
    if (message.eventIndex !== void 0 && message.eventIndex !== 0) {
      obj.eventIndex = Math.round(message.eventIndex);
    }
    if (message.transactionIndex !== void 0 && message.transactionIndex !== 0) {
      obj.transactionIndex = Math.round(message.transactionIndex);
    }
    if (message.transactionHash !== void 0) {
      obj.transactionHash = FieldElement.toJSON(message.transactionHash);
    }
    if (message.transactionStatus !== void 0 && message.transactionStatus !== 0) {
      obj.transactionStatus = transactionStatusToJSON(message.transactionStatus);
    }
    if (message.eventIndexInTransaction !== void 0 && message.eventIndexInTransaction !== 0) {
      obj.eventIndexInTransaction = Math.round(message.eventIndexInTransaction);
    }
    return obj;
  },
  create(base) {
    return Event$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseEvent();
    message.filterIds = object.filterIds?.map((e) => e) || [];
    message.address = object.address !== void 0 && object.address !== null ? FieldElement.fromPartial(object.address) : void 0;
    message.keys = object.keys?.map((e) => FieldElement.fromPartial(e)) || [];
    message.data = object.data?.map((e) => FieldElement.fromPartial(e)) || [];
    message.eventIndex = object.eventIndex ?? 0;
    message.transactionIndex = object.transactionIndex ?? 0;
    message.transactionHash = object.transactionHash !== void 0 && object.transactionHash !== null ? FieldElement.fromPartial(object.transactionHash) : void 0;
    message.transactionStatus = object.transactionStatus ?? 0;
    message.eventIndexInTransaction = object.eventIndexInTransaction ?? 0;
    return message;
  }
};
function createBaseMessageToL1() {
  return {
    filterIds: [],
    fromAddress: void 0,
    toAddress: void 0,
    payload: [],
    messageIndex: 0,
    transactionIndex: 0,
    transactionHash: void 0,
    transactionStatus: 0,
    messageIndexInTransaction: 0
  };
}
const MessageToL1$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.filterIds !== void 0 && message.filterIds.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.filterIds) {
        writer.uint32(v);
      }
      writer.ldelim();
    }
    if (message.fromAddress !== void 0) {
      FieldElement.encode(message.fromAddress, writer.uint32(18).fork()).ldelim();
    }
    if (message.toAddress !== void 0) {
      FieldElement.encode(message.toAddress, writer.uint32(26).fork()).ldelim();
    }
    if (message.payload !== void 0 && message.payload.length !== 0) {
      for (const v of message.payload) {
        FieldElement.encode(v, writer.uint32(34).fork()).ldelim();
      }
    }
    if (message.messageIndex !== void 0 && message.messageIndex !== 0) {
      writer.uint32(40).uint32(message.messageIndex);
    }
    if (message.transactionIndex !== void 0 && message.transactionIndex !== 0) {
      writer.uint32(48).uint32(message.transactionIndex);
    }
    if (message.transactionHash !== void 0) {
      FieldElement.encode(message.transactionHash, writer.uint32(58).fork()).ldelim();
    }
    if (message.transactionStatus !== void 0 && message.transactionStatus !== 0) {
      writer.uint32(64).int32(message.transactionStatus);
    }
    if (message.messageIndexInTransaction !== void 0 && message.messageIndexInTransaction !== 0) {
      writer.uint32(72).uint32(message.messageIndexInTransaction);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMessageToL1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.filterIds.push(reader.uint32());
            continue;
          }
          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.filterIds.push(reader.uint32());
            }
            continue;
          }
          break;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.fromAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.toAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.payload.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.messageIndex = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.transactionIndex = reader.uint32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.transactionHash = FieldElement.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }
          message.transactionStatus = reader.int32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }
          message.messageIndexInTransaction = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      filterIds: globalThis.Array.isArray(object?.filterIds) ? object.filterIds.map((e) => globalThis.Number(e)) : [],
      fromAddress: isSet$1(object.fromAddress) ? FieldElement.fromJSON(object.fromAddress) : void 0,
      toAddress: isSet$1(object.toAddress) ? FieldElement.fromJSON(object.toAddress) : void 0,
      payload: globalThis.Array.isArray(object?.payload) ? object.payload.map((e) => FieldElement.fromJSON(e)) : [],
      messageIndex: isSet$1(object.messageIndex) ? globalThis.Number(object.messageIndex) : 0,
      transactionIndex: isSet$1(object.transactionIndex) ? globalThis.Number(object.transactionIndex) : 0,
      transactionHash: isSet$1(object.transactionHash) ? FieldElement.fromJSON(object.transactionHash) : void 0,
      transactionStatus: isSet$1(object.transactionStatus) ? transactionStatusFromJSON(object.transactionStatus) : 0,
      messageIndexInTransaction: isSet$1(object.messageIndexInTransaction) ? globalThis.Number(object.messageIndexInTransaction) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.filterIds?.length) {
      obj.filterIds = message.filterIds.map((e) => Math.round(e));
    }
    if (message.fromAddress !== void 0) {
      obj.fromAddress = FieldElement.toJSON(message.fromAddress);
    }
    if (message.toAddress !== void 0) {
      obj.toAddress = FieldElement.toJSON(message.toAddress);
    }
    if (message.payload?.length) {
      obj.payload = message.payload.map((e) => FieldElement.toJSON(e));
    }
    if (message.messageIndex !== void 0 && message.messageIndex !== 0) {
      obj.messageIndex = Math.round(message.messageIndex);
    }
    if (message.transactionIndex !== void 0 && message.transactionIndex !== 0) {
      obj.transactionIndex = Math.round(message.transactionIndex);
    }
    if (message.transactionHash !== void 0) {
      obj.transactionHash = FieldElement.toJSON(message.transactionHash);
    }
    if (message.transactionStatus !== void 0 && message.transactionStatus !== 0) {
      obj.transactionStatus = transactionStatusToJSON(message.transactionStatus);
    }
    if (message.messageIndexInTransaction !== void 0 && message.messageIndexInTransaction !== 0) {
      obj.messageIndexInTransaction = Math.round(message.messageIndexInTransaction);
    }
    return obj;
  },
  create(base) {
    return MessageToL1$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseMessageToL1();
    message.filterIds = object.filterIds?.map((e) => e) || [];
    message.fromAddress = object.fromAddress !== void 0 && object.fromAddress !== null ? FieldElement.fromPartial(object.fromAddress) : void 0;
    message.toAddress = object.toAddress !== void 0 && object.toAddress !== null ? FieldElement.fromPartial(object.toAddress) : void 0;
    message.payload = object.payload?.map((e) => FieldElement.fromPartial(e)) || [];
    message.messageIndex = object.messageIndex ?? 0;
    message.transactionIndex = object.transactionIndex ?? 0;
    message.transactionHash = object.transactionHash !== void 0 && object.transactionHash !== null ? FieldElement.fromPartial(object.transactionHash) : void 0;
    message.transactionStatus = object.transactionStatus ?? 0;
    message.messageIndexInTransaction = object.messageIndexInTransaction ?? 0;
    return message;
  }
};
function createBaseResourcePrice() {
  return { priceInFri: void 0, priceInWei: void 0 };
}
const ResourcePrice$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.priceInFri !== void 0) {
      FieldElement.encode(message.priceInFri, writer.uint32(10).fork()).ldelim();
    }
    if (message.priceInWei !== void 0) {
      FieldElement.encode(message.priceInWei, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResourcePrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.priceInFri = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.priceInWei = FieldElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      priceInFri: isSet$1(object.priceInFri) ? FieldElement.fromJSON(object.priceInFri) : void 0,
      priceInWei: isSet$1(object.priceInWei) ? FieldElement.fromJSON(object.priceInWei) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.priceInFri !== void 0) {
      obj.priceInFri = FieldElement.toJSON(message.priceInFri);
    }
    if (message.priceInWei !== void 0) {
      obj.priceInWei = FieldElement.toJSON(message.priceInWei);
    }
    return obj;
  },
  create(base) {
    return ResourcePrice$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseResourcePrice();
    message.priceInFri = object.priceInFri !== void 0 && object.priceInFri !== null ? FieldElement.fromPartial(object.priceInFri) : void 0;
    message.priceInWei = object.priceInWei !== void 0 && object.priceInWei !== null ? FieldElement.fromPartial(object.priceInWei) : void 0;
    return message;
  }
};
function createBaseFeePayment() {
  return { amount: void 0, unit: 0 };
}
const FeePayment$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.amount !== void 0) {
      FieldElement.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.unit !== void 0 && message.unit !== 0) {
      writer.uint32(16).int32(message.unit);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFeePayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.amount = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.unit = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      amount: isSet$1(object.amount) ? FieldElement.fromJSON(object.amount) : void 0,
      unit: isSet$1(object.unit) ? priceUnitFromJSON(object.unit) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.amount !== void 0) {
      obj.amount = FieldElement.toJSON(message.amount);
    }
    if (message.unit !== void 0 && message.unit !== 0) {
      obj.unit = priceUnitToJSON(message.unit);
    }
    return obj;
  },
  create(base) {
    return FeePayment$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseFeePayment();
    message.amount = object.amount !== void 0 && object.amount !== null ? FieldElement.fromPartial(object.amount) : void 0;
    message.unit = object.unit ?? 0;
    return message;
  }
};
function createBaseExecutionResources() {
  return { computation: void 0, dataAvailability: void 0 };
}
const ExecutionResources$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.computation !== void 0) {
      ComputationResources$1.encode(message.computation, writer.uint32(10).fork()).ldelim();
    }
    if (message.dataAvailability !== void 0) {
      DataAvailabilityResources$1.encode(message.dataAvailability, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExecutionResources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.computation = ComputationResources$1.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.dataAvailability = DataAvailabilityResources$1.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      computation: isSet$1(object.computation) ? ComputationResources$1.fromJSON(object.computation) : void 0,
      dataAvailability: isSet$1(object.dataAvailability) ? DataAvailabilityResources$1.fromJSON(object.dataAvailability) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.computation !== void 0) {
      obj.computation = ComputationResources$1.toJSON(message.computation);
    }
    if (message.dataAvailability !== void 0) {
      obj.dataAvailability = DataAvailabilityResources$1.toJSON(message.dataAvailability);
    }
    return obj;
  },
  create(base) {
    return ExecutionResources$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseExecutionResources();
    message.computation = object.computation !== void 0 && object.computation !== null ? ComputationResources$1.fromPartial(object.computation) : void 0;
    message.dataAvailability = object.dataAvailability !== void 0 && object.dataAvailability !== null ? DataAvailabilityResources$1.fromPartial(object.dataAvailability) : void 0;
    return message;
  }
};
function createBaseComputationResources() {
  return {
    steps: BigInt("0"),
    memoryHoles: void 0,
    rangeCheckBuiltinApplications: void 0,
    pedersenBuiltinApplications: void 0,
    poseidonBuiltinApplications: void 0,
    ecOpBuiltinApplications: void 0,
    ecdsaBuiltinApplications: void 0,
    bitwiseBuiltinApplications: void 0,
    keccakBuiltinApplications: void 0,
    segmentArenaBuiltin: void 0
  };
}
const ComputationResources$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.steps !== void 0 && message.steps !== BigInt("0")) {
      if (BigInt.asUintN(64, message.steps) !== message.steps) {
        throw new globalThis.Error("value provided for field message.steps of type uint64 too large");
      }
      writer.uint32(8).uint64(message.steps.toString());
    }
    if (message.memoryHoles !== void 0) {
      if (BigInt.asUintN(64, message.memoryHoles) !== message.memoryHoles) {
        throw new globalThis.Error("value provided for field message.memoryHoles of type uint64 too large");
      }
      writer.uint32(16).uint64(message.memoryHoles.toString());
    }
    if (message.rangeCheckBuiltinApplications !== void 0) {
      if (BigInt.asUintN(64, message.rangeCheckBuiltinApplications) !== message.rangeCheckBuiltinApplications) {
        throw new globalThis.Error(
          "value provided for field message.rangeCheckBuiltinApplications of type uint64 too large"
        );
      }
      writer.uint32(24).uint64(message.rangeCheckBuiltinApplications.toString());
    }
    if (message.pedersenBuiltinApplications !== void 0) {
      if (BigInt.asUintN(64, message.pedersenBuiltinApplications) !== message.pedersenBuiltinApplications) {
        throw new globalThis.Error(
          "value provided for field message.pedersenBuiltinApplications of type uint64 too large"
        );
      }
      writer.uint32(32).uint64(message.pedersenBuiltinApplications.toString());
    }
    if (message.poseidonBuiltinApplications !== void 0) {
      if (BigInt.asUintN(64, message.poseidonBuiltinApplications) !== message.poseidonBuiltinApplications) {
        throw new globalThis.Error(
          "value provided for field message.poseidonBuiltinApplications of type uint64 too large"
        );
      }
      writer.uint32(40).uint64(message.poseidonBuiltinApplications.toString());
    }
    if (message.ecOpBuiltinApplications !== void 0) {
      if (BigInt.asUintN(64, message.ecOpBuiltinApplications) !== message.ecOpBuiltinApplications) {
        throw new globalThis.Error("value provided for field message.ecOpBuiltinApplications of type uint64 too large");
      }
      writer.uint32(48).uint64(message.ecOpBuiltinApplications.toString());
    }
    if (message.ecdsaBuiltinApplications !== void 0) {
      if (BigInt.asUintN(64, message.ecdsaBuiltinApplications) !== message.ecdsaBuiltinApplications) {
        throw new globalThis.Error(
          "value provided for field message.ecdsaBuiltinApplications of type uint64 too large"
        );
      }
      writer.uint32(56).uint64(message.ecdsaBuiltinApplications.toString());
    }
    if (message.bitwiseBuiltinApplications !== void 0) {
      if (BigInt.asUintN(64, message.bitwiseBuiltinApplications) !== message.bitwiseBuiltinApplications) {
        throw new globalThis.Error(
          "value provided for field message.bitwiseBuiltinApplications of type uint64 too large"
        );
      }
      writer.uint32(64).uint64(message.bitwiseBuiltinApplications.toString());
    }
    if (message.keccakBuiltinApplications !== void 0) {
      if (BigInt.asUintN(64, message.keccakBuiltinApplications) !== message.keccakBuiltinApplications) {
        throw new globalThis.Error(
          "value provided for field message.keccakBuiltinApplications of type uint64 too large"
        );
      }
      writer.uint32(72).uint64(message.keccakBuiltinApplications.toString());
    }
    if (message.segmentArenaBuiltin !== void 0) {
      if (BigInt.asUintN(64, message.segmentArenaBuiltin) !== message.segmentArenaBuiltin) {
        throw new globalThis.Error("value provided for field message.segmentArenaBuiltin of type uint64 too large");
      }
      writer.uint32(80).uint64(message.segmentArenaBuiltin.toString());
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseComputationResources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.steps = longToBigint(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.memoryHoles = longToBigint(reader.uint64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.rangeCheckBuiltinApplications = longToBigint(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.pedersenBuiltinApplications = longToBigint(reader.uint64());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.poseidonBuiltinApplications = longToBigint(reader.uint64());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.ecOpBuiltinApplications = longToBigint(reader.uint64());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }
          message.ecdsaBuiltinApplications = longToBigint(reader.uint64());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }
          message.bitwiseBuiltinApplications = longToBigint(reader.uint64());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }
          message.keccakBuiltinApplications = longToBigint(reader.uint64());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }
          message.segmentArenaBuiltin = longToBigint(reader.uint64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      steps: isSet$1(object.steps) ? BigInt(object.steps) : BigInt("0"),
      memoryHoles: isSet$1(object.memoryHoles) ? BigInt(object.memoryHoles) : void 0,
      rangeCheckBuiltinApplications: isSet$1(object.rangeCheckBuiltinApplications) ? BigInt(object.rangeCheckBuiltinApplications) : void 0,
      pedersenBuiltinApplications: isSet$1(object.pedersenBuiltinApplications) ? BigInt(object.pedersenBuiltinApplications) : void 0,
      poseidonBuiltinApplications: isSet$1(object.poseidonBuiltinApplications) ? BigInt(object.poseidonBuiltinApplications) : void 0,
      ecOpBuiltinApplications: isSet$1(object.ecOpBuiltinApplications) ? BigInt(object.ecOpBuiltinApplications) : void 0,
      ecdsaBuiltinApplications: isSet$1(object.ecdsaBuiltinApplications) ? BigInt(object.ecdsaBuiltinApplications) : void 0,
      bitwiseBuiltinApplications: isSet$1(object.bitwiseBuiltinApplications) ? BigInt(object.bitwiseBuiltinApplications) : void 0,
      keccakBuiltinApplications: isSet$1(object.keccakBuiltinApplications) ? BigInt(object.keccakBuiltinApplications) : void 0,
      segmentArenaBuiltin: isSet$1(object.segmentArenaBuiltin) ? BigInt(object.segmentArenaBuiltin) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.steps !== void 0 && message.steps !== BigInt("0")) {
      obj.steps = message.steps.toString();
    }
    if (message.memoryHoles !== void 0) {
      obj.memoryHoles = message.memoryHoles.toString();
    }
    if (message.rangeCheckBuiltinApplications !== void 0) {
      obj.rangeCheckBuiltinApplications = message.rangeCheckBuiltinApplications.toString();
    }
    if (message.pedersenBuiltinApplications !== void 0) {
      obj.pedersenBuiltinApplications = message.pedersenBuiltinApplications.toString();
    }
    if (message.poseidonBuiltinApplications !== void 0) {
      obj.poseidonBuiltinApplications = message.poseidonBuiltinApplications.toString();
    }
    if (message.ecOpBuiltinApplications !== void 0) {
      obj.ecOpBuiltinApplications = message.ecOpBuiltinApplications.toString();
    }
    if (message.ecdsaBuiltinApplications !== void 0) {
      obj.ecdsaBuiltinApplications = message.ecdsaBuiltinApplications.toString();
    }
    if (message.bitwiseBuiltinApplications !== void 0) {
      obj.bitwiseBuiltinApplications = message.bitwiseBuiltinApplications.toString();
    }
    if (message.keccakBuiltinApplications !== void 0) {
      obj.keccakBuiltinApplications = message.keccakBuiltinApplications.toString();
    }
    if (message.segmentArenaBuiltin !== void 0) {
      obj.segmentArenaBuiltin = message.segmentArenaBuiltin.toString();
    }
    return obj;
  },
  create(base) {
    return ComputationResources$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseComputationResources();
    message.steps = object.steps ?? BigInt("0");
    message.memoryHoles = object.memoryHoles ?? void 0;
    message.rangeCheckBuiltinApplications = object.rangeCheckBuiltinApplications ?? void 0;
    message.pedersenBuiltinApplications = object.pedersenBuiltinApplications ?? void 0;
    message.poseidonBuiltinApplications = object.poseidonBuiltinApplications ?? void 0;
    message.ecOpBuiltinApplications = object.ecOpBuiltinApplications ?? void 0;
    message.ecdsaBuiltinApplications = object.ecdsaBuiltinApplications ?? void 0;
    message.bitwiseBuiltinApplications = object.bitwiseBuiltinApplications ?? void 0;
    message.keccakBuiltinApplications = object.keccakBuiltinApplications ?? void 0;
    message.segmentArenaBuiltin = object.segmentArenaBuiltin ?? void 0;
    return message;
  }
};
function createBaseDataAvailabilityResources() {
  return { l1Gas: BigInt("0"), l1DataGas: BigInt("0") };
}
const DataAvailabilityResources$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.l1Gas !== void 0 && message.l1Gas !== BigInt("0")) {
      if (BigInt.asUintN(64, message.l1Gas) !== message.l1Gas) {
        throw new globalThis.Error("value provided for field message.l1Gas of type uint64 too large");
      }
      writer.uint32(8).uint64(message.l1Gas.toString());
    }
    if (message.l1DataGas !== void 0 && message.l1DataGas !== BigInt("0")) {
      if (BigInt.asUintN(64, message.l1DataGas) !== message.l1DataGas) {
        throw new globalThis.Error("value provided for field message.l1DataGas of type uint64 too large");
      }
      writer.uint32(16).uint64(message.l1DataGas.toString());
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDataAvailabilityResources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.l1Gas = longToBigint(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.l1DataGas = longToBigint(reader.uint64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      l1Gas: isSet$1(object.l1Gas) ? BigInt(object.l1Gas) : BigInt("0"),
      l1DataGas: isSet$1(object.l1DataGas) ? BigInt(object.l1DataGas) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.l1Gas !== void 0 && message.l1Gas !== BigInt("0")) {
      obj.l1Gas = message.l1Gas.toString();
    }
    if (message.l1DataGas !== void 0 && message.l1DataGas !== BigInt("0")) {
      obj.l1DataGas = message.l1DataGas.toString();
    }
    return obj;
  },
  create(base) {
    return DataAvailabilityResources$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDataAvailabilityResources();
    message.l1Gas = object.l1Gas ?? BigInt("0");
    message.l1DataGas = object.l1DataGas ?? BigInt("0");
    return message;
  }
};
function createBaseResourceBoundsMapping() {
  return { l1Gas: void 0, l2Gas: void 0 };
}
const ResourceBoundsMapping$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.l1Gas !== void 0) {
      ResourceBounds$1.encode(message.l1Gas, writer.uint32(10).fork()).ldelim();
    }
    if (message.l2Gas !== void 0) {
      ResourceBounds$1.encode(message.l2Gas, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResourceBoundsMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.l1Gas = ResourceBounds$1.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.l2Gas = ResourceBounds$1.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      l1Gas: isSet$1(object.l1Gas) ? ResourceBounds$1.fromJSON(object.l1Gas) : void 0,
      l2Gas: isSet$1(object.l2Gas) ? ResourceBounds$1.fromJSON(object.l2Gas) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.l1Gas !== void 0) {
      obj.l1Gas = ResourceBounds$1.toJSON(message.l1Gas);
    }
    if (message.l2Gas !== void 0) {
      obj.l2Gas = ResourceBounds$1.toJSON(message.l2Gas);
    }
    return obj;
  },
  create(base) {
    return ResourceBoundsMapping$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseResourceBoundsMapping();
    message.l1Gas = object.l1Gas !== void 0 && object.l1Gas !== null ? ResourceBounds$1.fromPartial(object.l1Gas) : void 0;
    message.l2Gas = object.l2Gas !== void 0 && object.l2Gas !== null ? ResourceBounds$1.fromPartial(object.l2Gas) : void 0;
    return message;
  }
};
function createBaseResourceBounds() {
  return { maxAmount: BigInt("0"), maxPricePerUnit: void 0 };
}
const ResourceBounds$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.maxAmount !== void 0 && message.maxAmount !== BigInt("0")) {
      if (BigInt.asUintN(64, message.maxAmount) !== message.maxAmount) {
        throw new globalThis.Error("value provided for field message.maxAmount of type uint64 too large");
      }
      writer.uint32(8).uint64(message.maxAmount.toString());
    }
    if (message.maxPricePerUnit !== void 0) {
      Uint128.encode(message.maxPricePerUnit, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResourceBounds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.maxAmount = longToBigint(reader.uint64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.maxPricePerUnit = Uint128.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      maxAmount: isSet$1(object.maxAmount) ? BigInt(object.maxAmount) : BigInt("0"),
      maxPricePerUnit: isSet$1(object.maxPricePerUnit) ? Uint128.fromJSON(object.maxPricePerUnit) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.maxAmount !== void 0 && message.maxAmount !== BigInt("0")) {
      obj.maxAmount = message.maxAmount.toString();
    }
    if (message.maxPricePerUnit !== void 0) {
      obj.maxPricePerUnit = Uint128.toJSON(message.maxPricePerUnit);
    }
    return obj;
  },
  create(base) {
    return ResourceBounds$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseResourceBounds();
    message.maxAmount = object.maxAmount ?? BigInt("0");
    message.maxPricePerUnit = object.maxPricePerUnit !== void 0 && object.maxPricePerUnit !== null ? Uint128.fromPartial(object.maxPricePerUnit) : void 0;
    return message;
  }
};
function createBaseUint128() {
  return { x0: BigInt("0"), x1: BigInt("0") };
}
const Uint128 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.x0 !== void 0 && message.x0 !== BigInt("0")) {
      if (BigInt.asUintN(64, message.x0) !== message.x0) {
        throw new globalThis.Error("value provided for field message.x0 of type uint64 too large");
      }
      writer.uint32(8).uint64(message.x0.toString());
    }
    if (message.x1 !== void 0 && message.x1 !== BigInt("0")) {
      if (BigInt.asUintN(64, message.x1) !== message.x1) {
        throw new globalThis.Error("value provided for field message.x1 of type uint64 too large");
      }
      writer.uint32(16).uint64(message.x1.toString());
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUint128();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.x0 = longToBigint(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.x1 = longToBigint(reader.uint64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      x0: isSet$1(object.x0) ? BigInt(object.x0) : BigInt("0"),
      x1: isSet$1(object.x1) ? BigInt(object.x1) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.x0 !== void 0 && message.x0 !== BigInt("0")) {
      obj.x0 = message.x0.toString();
    }
    if (message.x1 !== void 0 && message.x1 !== BigInt("0")) {
      obj.x1 = message.x1.toString();
    }
    return obj;
  },
  create(base) {
    return Uint128.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseUint128();
    message.x0 = object.x0 ?? BigInt("0");
    message.x1 = object.x1 ?? BigInt("0");
    return message;
  }
};
function createBaseStorageDiff() {
  return { filterIds: [], contractAddress: void 0, storageEntries: [] };
}
const StorageDiff$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.filterIds !== void 0 && message.filterIds.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.filterIds) {
        writer.uint32(v);
      }
      writer.ldelim();
    }
    if (message.contractAddress !== void 0) {
      FieldElement.encode(message.contractAddress, writer.uint32(18).fork()).ldelim();
    }
    if (message.storageEntries !== void 0 && message.storageEntries.length !== 0) {
      for (const v of message.storageEntries) {
        StorageEntry$1.encode(v, writer.uint32(26).fork()).ldelim();
      }
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStorageDiff();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.filterIds.push(reader.uint32());
            continue;
          }
          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.filterIds.push(reader.uint32());
            }
            continue;
          }
          break;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.contractAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.storageEntries.push(StorageEntry$1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      filterIds: globalThis.Array.isArray(object?.filterIds) ? object.filterIds.map((e) => globalThis.Number(e)) : [],
      contractAddress: isSet$1(object.contractAddress) ? FieldElement.fromJSON(object.contractAddress) : void 0,
      storageEntries: globalThis.Array.isArray(object?.storageEntries) ? object.storageEntries.map((e) => StorageEntry$1.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.filterIds?.length) {
      obj.filterIds = message.filterIds.map((e) => Math.round(e));
    }
    if (message.contractAddress !== void 0) {
      obj.contractAddress = FieldElement.toJSON(message.contractAddress);
    }
    if (message.storageEntries?.length) {
      obj.storageEntries = message.storageEntries.map((e) => StorageEntry$1.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return StorageDiff$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseStorageDiff();
    message.filterIds = object.filterIds?.map((e) => e) || [];
    message.contractAddress = object.contractAddress !== void 0 && object.contractAddress !== null ? FieldElement.fromPartial(object.contractAddress) : void 0;
    message.storageEntries = object.storageEntries?.map((e) => StorageEntry$1.fromPartial(e)) || [];
    return message;
  }
};
function createBaseStorageEntry() {
  return { key: void 0, value: void 0 };
}
const StorageEntry$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.key !== void 0) {
      FieldElement.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== void 0) {
      FieldElement.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStorageEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.key = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.value = FieldElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      key: isSet$1(object.key) ? FieldElement.fromJSON(object.key) : void 0,
      value: isSet$1(object.value) ? FieldElement.fromJSON(object.value) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.key !== void 0) {
      obj.key = FieldElement.toJSON(message.key);
    }
    if (message.value !== void 0) {
      obj.value = FieldElement.toJSON(message.value);
    }
    return obj;
  },
  create(base) {
    return StorageEntry$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseStorageEntry();
    message.key = object.key !== void 0 && object.key !== null ? FieldElement.fromPartial(object.key) : void 0;
    message.value = object.value !== void 0 && object.value !== null ? FieldElement.fromPartial(object.value) : void 0;
    return message;
  }
};
function createBaseContractChange() {
  return { filterIds: [], change: void 0 };
}
const ContractChange$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.filterIds !== void 0 && message.filterIds.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.filterIds) {
        writer.uint32(v);
      }
      writer.ldelim();
    }
    switch (message.change?.$case) {
      case "declaredClass":
        DeclaredClass$1.encode(message.change.declaredClass, writer.uint32(18).fork()).ldelim();
        break;
      case "replacedClass":
        ReplacedClass$1.encode(message.change.replacedClass, writer.uint32(26).fork()).ldelim();
        break;
      case "deployedContract":
        DeployedContract$1.encode(message.change.deployedContract, writer.uint32(34).fork()).ldelim();
        break;
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseContractChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.filterIds.push(reader.uint32());
            continue;
          }
          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.filterIds.push(reader.uint32());
            }
            continue;
          }
          break;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.change = { $case: "declaredClass", declaredClass: DeclaredClass$1.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.change = { $case: "replacedClass", replacedClass: ReplacedClass$1.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.change = {
            $case: "deployedContract",
            deployedContract: DeployedContract$1.decode(reader, reader.uint32())
          };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      filterIds: globalThis.Array.isArray(object?.filterIds) ? object.filterIds.map((e) => globalThis.Number(e)) : [],
      change: isSet$1(object.declaredClass) ? { $case: "declaredClass", declaredClass: DeclaredClass$1.fromJSON(object.declaredClass) } : isSet$1(object.replacedClass) ? { $case: "replacedClass", replacedClass: ReplacedClass$1.fromJSON(object.replacedClass) } : isSet$1(object.deployedContract) ? { $case: "deployedContract", deployedContract: DeployedContract$1.fromJSON(object.deployedContract) } : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.filterIds?.length) {
      obj.filterIds = message.filterIds.map((e) => Math.round(e));
    }
    if (message.change?.$case === "declaredClass") {
      obj.declaredClass = DeclaredClass$1.toJSON(message.change.declaredClass);
    }
    if (message.change?.$case === "replacedClass") {
      obj.replacedClass = ReplacedClass$1.toJSON(message.change.replacedClass);
    }
    if (message.change?.$case === "deployedContract") {
      obj.deployedContract = DeployedContract$1.toJSON(message.change.deployedContract);
    }
    return obj;
  },
  create(base) {
    return ContractChange$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseContractChange();
    message.filterIds = object.filterIds?.map((e) => e) || [];
    if (object.change?.$case === "declaredClass" && object.change?.declaredClass !== void 0 && object.change?.declaredClass !== null) {
      message.change = {
        $case: "declaredClass",
        declaredClass: DeclaredClass$1.fromPartial(object.change.declaredClass)
      };
    }
    if (object.change?.$case === "replacedClass" && object.change?.replacedClass !== void 0 && object.change?.replacedClass !== null) {
      message.change = {
        $case: "replacedClass",
        replacedClass: ReplacedClass$1.fromPartial(object.change.replacedClass)
      };
    }
    if (object.change?.$case === "deployedContract" && object.change?.deployedContract !== void 0 && object.change?.deployedContract !== null) {
      message.change = {
        $case: "deployedContract",
        deployedContract: DeployedContract$1.fromPartial(object.change.deployedContract)
      };
    }
    return message;
  }
};
function createBaseDeclaredClass() {
  return { classHash: void 0, compiledClassHash: void 0 };
}
const DeclaredClass$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.classHash !== void 0) {
      FieldElement.encode(message.classHash, writer.uint32(10).fork()).ldelim();
    }
    if (message.compiledClassHash !== void 0) {
      FieldElement.encode(message.compiledClassHash, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeclaredClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.classHash = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.compiledClassHash = FieldElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      classHash: isSet$1(object.classHash) ? FieldElement.fromJSON(object.classHash) : void 0,
      compiledClassHash: isSet$1(object.compiledClassHash) ? FieldElement.fromJSON(object.compiledClassHash) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.classHash !== void 0) {
      obj.classHash = FieldElement.toJSON(message.classHash);
    }
    if (message.compiledClassHash !== void 0) {
      obj.compiledClassHash = FieldElement.toJSON(message.compiledClassHash);
    }
    return obj;
  },
  create(base) {
    return DeclaredClass$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDeclaredClass();
    message.classHash = object.classHash !== void 0 && object.classHash !== null ? FieldElement.fromPartial(object.classHash) : void 0;
    message.compiledClassHash = object.compiledClassHash !== void 0 && object.compiledClassHash !== null ? FieldElement.fromPartial(object.compiledClassHash) : void 0;
    return message;
  }
};
function createBaseReplacedClass() {
  return { contractAddress: void 0, classHash: void 0 };
}
const ReplacedClass$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.contractAddress !== void 0) {
      FieldElement.encode(message.contractAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.classHash !== void 0) {
      FieldElement.encode(message.classHash, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseReplacedClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.contractAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.classHash = FieldElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      contractAddress: isSet$1(object.contractAddress) ? FieldElement.fromJSON(object.contractAddress) : void 0,
      classHash: isSet$1(object.classHash) ? FieldElement.fromJSON(object.classHash) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.contractAddress !== void 0) {
      obj.contractAddress = FieldElement.toJSON(message.contractAddress);
    }
    if (message.classHash !== void 0) {
      obj.classHash = FieldElement.toJSON(message.classHash);
    }
    return obj;
  },
  create(base) {
    return ReplacedClass$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseReplacedClass();
    message.contractAddress = object.contractAddress !== void 0 && object.contractAddress !== null ? FieldElement.fromPartial(object.contractAddress) : void 0;
    message.classHash = object.classHash !== void 0 && object.classHash !== null ? FieldElement.fromPartial(object.classHash) : void 0;
    return message;
  }
};
function createBaseDeployedContract() {
  return { contractAddress: void 0, classHash: void 0 };
}
const DeployedContract$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.contractAddress !== void 0) {
      FieldElement.encode(message.contractAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.classHash !== void 0) {
      FieldElement.encode(message.classHash, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeployedContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.contractAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.classHash = FieldElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      contractAddress: isSet$1(object.contractAddress) ? FieldElement.fromJSON(object.contractAddress) : void 0,
      classHash: isSet$1(object.classHash) ? FieldElement.fromJSON(object.classHash) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.contractAddress !== void 0) {
      obj.contractAddress = FieldElement.toJSON(message.contractAddress);
    }
    if (message.classHash !== void 0) {
      obj.classHash = FieldElement.toJSON(message.classHash);
    }
    return obj;
  },
  create(base) {
    return DeployedContract$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDeployedContract();
    message.contractAddress = object.contractAddress !== void 0 && object.contractAddress !== null ? FieldElement.fromPartial(object.contractAddress) : void 0;
    message.classHash = object.classHash !== void 0 && object.classHash !== null ? FieldElement.fromPartial(object.classHash) : void 0;
    return message;
  }
};
function createBaseNonceUpdate() {
  return { filterIds: [], contractAddress: void 0, nonce: void 0 };
}
const NonceUpdate$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.filterIds !== void 0 && message.filterIds.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.filterIds) {
        writer.uint32(v);
      }
      writer.ldelim();
    }
    if (message.contractAddress !== void 0) {
      FieldElement.encode(message.contractAddress, writer.uint32(18).fork()).ldelim();
    }
    if (message.nonce !== void 0) {
      FieldElement.encode(message.nonce, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNonceUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.filterIds.push(reader.uint32());
            continue;
          }
          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.filterIds.push(reader.uint32());
            }
            continue;
          }
          break;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.contractAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.nonce = FieldElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      filterIds: globalThis.Array.isArray(object?.filterIds) ? object.filterIds.map((e) => globalThis.Number(e)) : [],
      contractAddress: isSet$1(object.contractAddress) ? FieldElement.fromJSON(object.contractAddress) : void 0,
      nonce: isSet$1(object.nonce) ? FieldElement.fromJSON(object.nonce) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.filterIds?.length) {
      obj.filterIds = message.filterIds.map((e) => Math.round(e));
    }
    if (message.contractAddress !== void 0) {
      obj.contractAddress = FieldElement.toJSON(message.contractAddress);
    }
    if (message.nonce !== void 0) {
      obj.nonce = FieldElement.toJSON(message.nonce);
    }
    return obj;
  },
  create(base) {
    return NonceUpdate$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseNonceUpdate();
    message.filterIds = object.filterIds?.map((e) => e) || [];
    message.contractAddress = object.contractAddress !== void 0 && object.contractAddress !== null ? FieldElement.fromPartial(object.contractAddress) : void 0;
    message.nonce = object.nonce !== void 0 && object.nonce !== null ? FieldElement.fromPartial(object.nonce) : void 0;
    return message;
  }
};
function createBaseTransactionTrace() {
  return { filterIds: [], transactionIndex: 0, transactionHash: void 0, traceRoot: void 0 };
}
const TransactionTrace$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.filterIds !== void 0 && message.filterIds.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.filterIds) {
        writer.uint32(v);
      }
      writer.ldelim();
    }
    if (message.transactionIndex !== void 0 && message.transactionIndex !== 0) {
      writer.uint32(16).uint32(message.transactionIndex);
    }
    if (message.transactionHash !== void 0) {
      FieldElement.encode(message.transactionHash, writer.uint32(26).fork()).ldelim();
    }
    switch (message.traceRoot?.$case) {
      case "invoke":
        InvokeTransactionTrace$1.encode(message.traceRoot.invoke, writer.uint32(34).fork()).ldelim();
        break;
      case "declare":
        DeclareTransactionTrace$1.encode(message.traceRoot.declare, writer.uint32(42).fork()).ldelim();
        break;
      case "deployAccount":
        DeployAccountTransactionTrace$1.encode(message.traceRoot.deployAccount, writer.uint32(50).fork()).ldelim();
        break;
      case "l1Handler":
        L1HandlerTransactionTrace$1.encode(message.traceRoot.l1Handler, writer.uint32(58).fork()).ldelim();
        break;
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTransactionTrace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.filterIds.push(reader.uint32());
            continue;
          }
          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.filterIds.push(reader.uint32());
            }
            continue;
          }
          break;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.transactionIndex = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.transactionHash = FieldElement.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.traceRoot = { $case: "invoke", invoke: InvokeTransactionTrace$1.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.traceRoot = { $case: "declare", declare: DeclareTransactionTrace$1.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.traceRoot = {
            $case: "deployAccount",
            deployAccount: DeployAccountTransactionTrace$1.decode(reader, reader.uint32())
          };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.traceRoot = {
            $case: "l1Handler",
            l1Handler: L1HandlerTransactionTrace$1.decode(reader, reader.uint32())
          };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      filterIds: globalThis.Array.isArray(object?.filterIds) ? object.filterIds.map((e) => globalThis.Number(e)) : [],
      transactionIndex: isSet$1(object.transactionIndex) ? globalThis.Number(object.transactionIndex) : 0,
      transactionHash: isSet$1(object.transactionHash) ? FieldElement.fromJSON(object.transactionHash) : void 0,
      traceRoot: isSet$1(object.invoke) ? { $case: "invoke", invoke: InvokeTransactionTrace$1.fromJSON(object.invoke) } : isSet$1(object.declare) ? { $case: "declare", declare: DeclareTransactionTrace$1.fromJSON(object.declare) } : isSet$1(object.deployAccount) ? { $case: "deployAccount", deployAccount: DeployAccountTransactionTrace$1.fromJSON(object.deployAccount) } : isSet$1(object.l1Handler) ? { $case: "l1Handler", l1Handler: L1HandlerTransactionTrace$1.fromJSON(object.l1Handler) } : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.filterIds?.length) {
      obj.filterIds = message.filterIds.map((e) => Math.round(e));
    }
    if (message.transactionIndex !== void 0 && message.transactionIndex !== 0) {
      obj.transactionIndex = Math.round(message.transactionIndex);
    }
    if (message.transactionHash !== void 0) {
      obj.transactionHash = FieldElement.toJSON(message.transactionHash);
    }
    if (message.traceRoot?.$case === "invoke") {
      obj.invoke = InvokeTransactionTrace$1.toJSON(message.traceRoot.invoke);
    }
    if (message.traceRoot?.$case === "declare") {
      obj.declare = DeclareTransactionTrace$1.toJSON(message.traceRoot.declare);
    }
    if (message.traceRoot?.$case === "deployAccount") {
      obj.deployAccount = DeployAccountTransactionTrace$1.toJSON(message.traceRoot.deployAccount);
    }
    if (message.traceRoot?.$case === "l1Handler") {
      obj.l1Handler = L1HandlerTransactionTrace$1.toJSON(message.traceRoot.l1Handler);
    }
    return obj;
  },
  create(base) {
    return TransactionTrace$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTransactionTrace();
    message.filterIds = object.filterIds?.map((e) => e) || [];
    message.transactionIndex = object.transactionIndex ?? 0;
    message.transactionHash = object.transactionHash !== void 0 && object.transactionHash !== null ? FieldElement.fromPartial(object.transactionHash) : void 0;
    if (object.traceRoot?.$case === "invoke" && object.traceRoot?.invoke !== void 0 && object.traceRoot?.invoke !== null) {
      message.traceRoot = { $case: "invoke", invoke: InvokeTransactionTrace$1.fromPartial(object.traceRoot.invoke) };
    }
    if (object.traceRoot?.$case === "declare" && object.traceRoot?.declare !== void 0 && object.traceRoot?.declare !== null) {
      message.traceRoot = { $case: "declare", declare: DeclareTransactionTrace$1.fromPartial(object.traceRoot.declare) };
    }
    if (object.traceRoot?.$case === "deployAccount" && object.traceRoot?.deployAccount !== void 0 && object.traceRoot?.deployAccount !== null) {
      message.traceRoot = {
        $case: "deployAccount",
        deployAccount: DeployAccountTransactionTrace$1.fromPartial(object.traceRoot.deployAccount)
      };
    }
    if (object.traceRoot?.$case === "l1Handler" && object.traceRoot?.l1Handler !== void 0 && object.traceRoot?.l1Handler !== null) {
      message.traceRoot = {
        $case: "l1Handler",
        l1Handler: L1HandlerTransactionTrace$1.fromPartial(object.traceRoot.l1Handler)
      };
    }
    return message;
  }
};
function createBaseInvokeTransactionTrace() {
  return { validateInvocation: void 0, executeInvocation: void 0, feeTransferInvocation: void 0 };
}
const InvokeTransactionTrace$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.validateInvocation !== void 0) {
      FunctionInvocation.encode(message.validateInvocation, writer.uint32(10).fork()).ldelim();
    }
    switch (message.executeInvocation?.$case) {
      case "success":
        FunctionInvocation.encode(message.executeInvocation.success, writer.uint32(18).fork()).ldelim();
        break;
      case "reverted":
        ExecutionReverted$1.encode(message.executeInvocation.reverted, writer.uint32(26).fork()).ldelim();
        break;
    }
    if (message.feeTransferInvocation !== void 0) {
      FunctionInvocation.encode(message.feeTransferInvocation, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInvokeTransactionTrace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.validateInvocation = FunctionInvocation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.executeInvocation = { $case: "success", success: FunctionInvocation.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.executeInvocation = {
            $case: "reverted",
            reverted: ExecutionReverted$1.decode(reader, reader.uint32())
          };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.feeTransferInvocation = FunctionInvocation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      validateInvocation: isSet$1(object.validateInvocation) ? FunctionInvocation.fromJSON(object.validateInvocation) : void 0,
      executeInvocation: isSet$1(object.success) ? { $case: "success", success: FunctionInvocation.fromJSON(object.success) } : isSet$1(object.reverted) ? { $case: "reverted", reverted: ExecutionReverted$1.fromJSON(object.reverted) } : void 0,
      feeTransferInvocation: isSet$1(object.feeTransferInvocation) ? FunctionInvocation.fromJSON(object.feeTransferInvocation) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.validateInvocation !== void 0) {
      obj.validateInvocation = FunctionInvocation.toJSON(message.validateInvocation);
    }
    if (message.executeInvocation?.$case === "success") {
      obj.success = FunctionInvocation.toJSON(message.executeInvocation.success);
    }
    if (message.executeInvocation?.$case === "reverted") {
      obj.reverted = ExecutionReverted$1.toJSON(message.executeInvocation.reverted);
    }
    if (message.feeTransferInvocation !== void 0) {
      obj.feeTransferInvocation = FunctionInvocation.toJSON(message.feeTransferInvocation);
    }
    return obj;
  },
  create(base) {
    return InvokeTransactionTrace$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseInvokeTransactionTrace();
    message.validateInvocation = object.validateInvocation !== void 0 && object.validateInvocation !== null ? FunctionInvocation.fromPartial(object.validateInvocation) : void 0;
    if (object.executeInvocation?.$case === "success" && object.executeInvocation?.success !== void 0 && object.executeInvocation?.success !== null) {
      message.executeInvocation = {
        $case: "success",
        success: FunctionInvocation.fromPartial(object.executeInvocation.success)
      };
    }
    if (object.executeInvocation?.$case === "reverted" && object.executeInvocation?.reverted !== void 0 && object.executeInvocation?.reverted !== null) {
      message.executeInvocation = {
        $case: "reverted",
        reverted: ExecutionReverted$1.fromPartial(object.executeInvocation.reverted)
      };
    }
    message.feeTransferInvocation = object.feeTransferInvocation !== void 0 && object.feeTransferInvocation !== null ? FunctionInvocation.fromPartial(object.feeTransferInvocation) : void 0;
    return message;
  }
};
function createBaseDeclareTransactionTrace() {
  return { validateInvocation: void 0, feeTransferInvocation: void 0 };
}
const DeclareTransactionTrace$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.validateInvocation !== void 0) {
      FunctionInvocation.encode(message.validateInvocation, writer.uint32(10).fork()).ldelim();
    }
    if (message.feeTransferInvocation !== void 0) {
      FunctionInvocation.encode(message.feeTransferInvocation, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeclareTransactionTrace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.validateInvocation = FunctionInvocation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.feeTransferInvocation = FunctionInvocation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      validateInvocation: isSet$1(object.validateInvocation) ? FunctionInvocation.fromJSON(object.validateInvocation) : void 0,
      feeTransferInvocation: isSet$1(object.feeTransferInvocation) ? FunctionInvocation.fromJSON(object.feeTransferInvocation) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.validateInvocation !== void 0) {
      obj.validateInvocation = FunctionInvocation.toJSON(message.validateInvocation);
    }
    if (message.feeTransferInvocation !== void 0) {
      obj.feeTransferInvocation = FunctionInvocation.toJSON(message.feeTransferInvocation);
    }
    return obj;
  },
  create(base) {
    return DeclareTransactionTrace$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDeclareTransactionTrace();
    message.validateInvocation = object.validateInvocation !== void 0 && object.validateInvocation !== null ? FunctionInvocation.fromPartial(object.validateInvocation) : void 0;
    message.feeTransferInvocation = object.feeTransferInvocation !== void 0 && object.feeTransferInvocation !== null ? FunctionInvocation.fromPartial(object.feeTransferInvocation) : void 0;
    return message;
  }
};
function createBaseDeployAccountTransactionTrace() {
  return { validateInvocation: void 0, constructorInvocation: void 0, feeTransferInvocation: void 0 };
}
const DeployAccountTransactionTrace$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.validateInvocation !== void 0) {
      FunctionInvocation.encode(message.validateInvocation, writer.uint32(10).fork()).ldelim();
    }
    if (message.constructorInvocation !== void 0) {
      FunctionInvocation.encode(message.constructorInvocation, writer.uint32(18).fork()).ldelim();
    }
    if (message.feeTransferInvocation !== void 0) {
      FunctionInvocation.encode(message.feeTransferInvocation, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeployAccountTransactionTrace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.validateInvocation = FunctionInvocation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.constructorInvocation = FunctionInvocation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.feeTransferInvocation = FunctionInvocation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      validateInvocation: isSet$1(object.validateInvocation) ? FunctionInvocation.fromJSON(object.validateInvocation) : void 0,
      constructorInvocation: isSet$1(object.constructorInvocation) ? FunctionInvocation.fromJSON(object.constructorInvocation) : void 0,
      feeTransferInvocation: isSet$1(object.feeTransferInvocation) ? FunctionInvocation.fromJSON(object.feeTransferInvocation) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.validateInvocation !== void 0) {
      obj.validateInvocation = FunctionInvocation.toJSON(message.validateInvocation);
    }
    if (message.constructorInvocation !== void 0) {
      obj.constructorInvocation = FunctionInvocation.toJSON(message.constructorInvocation);
    }
    if (message.feeTransferInvocation !== void 0) {
      obj.feeTransferInvocation = FunctionInvocation.toJSON(message.feeTransferInvocation);
    }
    return obj;
  },
  create(base) {
    return DeployAccountTransactionTrace$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDeployAccountTransactionTrace();
    message.validateInvocation = object.validateInvocation !== void 0 && object.validateInvocation !== null ? FunctionInvocation.fromPartial(object.validateInvocation) : void 0;
    message.constructorInvocation = object.constructorInvocation !== void 0 && object.constructorInvocation !== null ? FunctionInvocation.fromPartial(object.constructorInvocation) : void 0;
    message.feeTransferInvocation = object.feeTransferInvocation !== void 0 && object.feeTransferInvocation !== null ? FunctionInvocation.fromPartial(object.feeTransferInvocation) : void 0;
    return message;
  }
};
function createBaseL1HandlerTransactionTrace() {
  return { functionInvocation: void 0 };
}
const L1HandlerTransactionTrace$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.functionInvocation !== void 0) {
      FunctionInvocation.encode(message.functionInvocation, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseL1HandlerTransactionTrace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }
          message.functionInvocation = FunctionInvocation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      functionInvocation: isSet$1(object.functionInvocation) ? FunctionInvocation.fromJSON(object.functionInvocation) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.functionInvocation !== void 0) {
      obj.functionInvocation = FunctionInvocation.toJSON(message.functionInvocation);
    }
    return obj;
  },
  create(base) {
    return L1HandlerTransactionTrace$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseL1HandlerTransactionTrace();
    message.functionInvocation = object.functionInvocation !== void 0 && object.functionInvocation !== null ? FunctionInvocation.fromPartial(object.functionInvocation) : void 0;
    return message;
  }
};
function createBaseFunctionInvocation() {
  return {
    contractAddress: void 0,
    entryPointSelector: void 0,
    calldata: [],
    callerAddress: void 0,
    classHash: void 0,
    callType: 0,
    result: [],
    calls: [],
    events: [],
    messages: []
  };
}
const FunctionInvocation = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.contractAddress !== void 0) {
      FieldElement.encode(message.contractAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.entryPointSelector !== void 0) {
      FieldElement.encode(message.entryPointSelector, writer.uint32(18).fork()).ldelim();
    }
    if (message.calldata !== void 0 && message.calldata.length !== 0) {
      for (const v of message.calldata) {
        FieldElement.encode(v, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.callerAddress !== void 0) {
      FieldElement.encode(message.callerAddress, writer.uint32(34).fork()).ldelim();
    }
    if (message.classHash !== void 0) {
      FieldElement.encode(message.classHash, writer.uint32(42).fork()).ldelim();
    }
    if (message.callType !== void 0 && message.callType !== 0) {
      writer.uint32(48).int32(message.callType);
    }
    if (message.result !== void 0 && message.result.length !== 0) {
      for (const v of message.result) {
        FieldElement.encode(v, writer.uint32(58).fork()).ldelim();
      }
    }
    if (message.calls !== void 0 && message.calls.length !== 0) {
      for (const v of message.calls) {
        FunctionInvocation.encode(v, writer.uint32(66).fork()).ldelim();
      }
    }
    if (message.events !== void 0 && message.events.length !== 0) {
      writer.uint32(74).fork();
      for (const v of message.events) {
        writer.uint32(v);
      }
      writer.ldelim();
    }
    if (message.messages !== void 0 && message.messages.length !== 0) {
      writer.uint32(82).fork();
      for (const v of message.messages) {
        writer.uint32(v);
      }
      writer.ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFunctionInvocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.contractAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.entryPointSelector = FieldElement.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.calldata.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.callerAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.classHash = FieldElement.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.callType = reader.int32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.result.push(FieldElement.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.calls.push(FunctionInvocation.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag === 72) {
            message.events.push(reader.uint32());
            continue;
          }
          if (tag === 74) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.events.push(reader.uint32());
            }
            continue;
          }
          break;
        case 10:
          if (tag === 80) {
            message.messages.push(reader.uint32());
            continue;
          }
          if (tag === 82) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.messages.push(reader.uint32());
            }
            continue;
          }
          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      contractAddress: isSet$1(object.contractAddress) ? FieldElement.fromJSON(object.contractAddress) : void 0,
      entryPointSelector: isSet$1(object.entryPointSelector) ? FieldElement.fromJSON(object.entryPointSelector) : void 0,
      calldata: globalThis.Array.isArray(object?.calldata) ? object.calldata.map((e) => FieldElement.fromJSON(e)) : [],
      callerAddress: isSet$1(object.callerAddress) ? FieldElement.fromJSON(object.callerAddress) : void 0,
      classHash: isSet$1(object.classHash) ? FieldElement.fromJSON(object.classHash) : void 0,
      callType: isSet$1(object.callType) ? callTypeFromJSON(object.callType) : 0,
      result: globalThis.Array.isArray(object?.result) ? object.result.map((e) => FieldElement.fromJSON(e)) : [],
      calls: globalThis.Array.isArray(object?.calls) ? object.calls.map((e) => FunctionInvocation.fromJSON(e)) : [],
      events: globalThis.Array.isArray(object?.events) ? object.events.map((e) => globalThis.Number(e)) : [],
      messages: globalThis.Array.isArray(object?.messages) ? object.messages.map((e) => globalThis.Number(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.contractAddress !== void 0) {
      obj.contractAddress = FieldElement.toJSON(message.contractAddress);
    }
    if (message.entryPointSelector !== void 0) {
      obj.entryPointSelector = FieldElement.toJSON(message.entryPointSelector);
    }
    if (message.calldata?.length) {
      obj.calldata = message.calldata.map((e) => FieldElement.toJSON(e));
    }
    if (message.callerAddress !== void 0) {
      obj.callerAddress = FieldElement.toJSON(message.callerAddress);
    }
    if (message.classHash !== void 0) {
      obj.classHash = FieldElement.toJSON(message.classHash);
    }
    if (message.callType !== void 0 && message.callType !== 0) {
      obj.callType = callTypeToJSON(message.callType);
    }
    if (message.result?.length) {
      obj.result = message.result.map((e) => FieldElement.toJSON(e));
    }
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => FunctionInvocation.toJSON(e));
    }
    if (message.events?.length) {
      obj.events = message.events.map((e) => Math.round(e));
    }
    if (message.messages?.length) {
      obj.messages = message.messages.map((e) => Math.round(e));
    }
    return obj;
  },
  create(base) {
    return FunctionInvocation.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseFunctionInvocation();
    message.contractAddress = object.contractAddress !== void 0 && object.contractAddress !== null ? FieldElement.fromPartial(object.contractAddress) : void 0;
    message.entryPointSelector = object.entryPointSelector !== void 0 && object.entryPointSelector !== null ? FieldElement.fromPartial(object.entryPointSelector) : void 0;
    message.calldata = object.calldata?.map((e) => FieldElement.fromPartial(e)) || [];
    message.callerAddress = object.callerAddress !== void 0 && object.callerAddress !== null ? FieldElement.fromPartial(object.callerAddress) : void 0;
    message.classHash = object.classHash !== void 0 && object.classHash !== null ? FieldElement.fromPartial(object.classHash) : void 0;
    message.callType = object.callType ?? 0;
    message.result = object.result?.map((e) => FieldElement.fromPartial(e)) || [];
    message.calls = object.calls?.map((e) => FunctionInvocation.fromPartial(e)) || [];
    message.events = object.events?.map((e) => e) || [];
    message.messages = object.messages?.map((e) => e) || [];
    return message;
  }
};
function createBaseFunctionCall() {
  return { contractAddress: void 0, entryPointSelector: void 0, calldata: [] };
}
const FunctionCall = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.contractAddress !== void 0) {
      FieldElement.encode(message.contractAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.entryPointSelector !== void 0) {
      FieldElement.encode(message.entryPointSelector, writer.uint32(18).fork()).ldelim();
    }
    if (message.calldata !== void 0 && message.calldata.length !== 0) {
      for (const v of message.calldata) {
        FieldElement.encode(v, writer.uint32(26).fork()).ldelim();
      }
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFunctionCall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.contractAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.entryPointSelector = FieldElement.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.calldata.push(FieldElement.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      contractAddress: isSet$1(object.contractAddress) ? FieldElement.fromJSON(object.contractAddress) : void 0,
      entryPointSelector: isSet$1(object.entryPointSelector) ? FieldElement.fromJSON(object.entryPointSelector) : void 0,
      calldata: globalThis.Array.isArray(object?.calldata) ? object.calldata.map((e) => FieldElement.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.contractAddress !== void 0) {
      obj.contractAddress = FieldElement.toJSON(message.contractAddress);
    }
    if (message.entryPointSelector !== void 0) {
      obj.entryPointSelector = FieldElement.toJSON(message.entryPointSelector);
    }
    if (message.calldata?.length) {
      obj.calldata = message.calldata.map((e) => FieldElement.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return FunctionCall.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseFunctionCall();
    message.contractAddress = object.contractAddress !== void 0 && object.contractAddress !== null ? FieldElement.fromPartial(object.contractAddress) : void 0;
    message.entryPointSelector = object.entryPointSelector !== void 0 && object.entryPointSelector !== null ? FieldElement.fromPartial(object.entryPointSelector) : void 0;
    message.calldata = object.calldata?.map((e) => FieldElement.fromPartial(e)) || [];
    return message;
  }
};
function bytesFromBase64(b64) {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}
function base64FromBytes(arr) {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}
function toTimestamp(date) {
  const seconds = BigInt(Math.trunc(date.getTime() / 1e3));
  const nanos = date.getTime() % 1e3 * 1e6;
  return { seconds, nanos };
}
function fromTimestamp(t) {
  let millis = (globalThis.Number(t.seconds?.toString()) || 0) * 1e3;
  millis += (t.nanos || 0) / 1e6;
  return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}
function longToBigint(long) {
  return BigInt(long.toString());
}
if (_m0__default.util.Long !== Long__default) {
  _m0__default.util.Long = Long__default;
  _m0__default.configure();
}
function isSet$1(value) {
  return value !== null && value !== void 0;
}

const data = {
  __proto__: null,
  Block: Block$1,
  BlockHeader: BlockHeader$1,
  CallType: CallType$1,
  ComputationResources: ComputationResources$1,
  ContractChange: ContractChange$1,
  DataAvailabilityMode: DataAvailabilityMode$1,
  DataAvailabilityResources: DataAvailabilityResources$1,
  DeclareTransactionReceipt: DeclareTransactionReceipt$1,
  DeclareTransactionTrace: DeclareTransactionTrace$1,
  DeclareTransactionV0: DeclareTransactionV0$1,
  DeclareTransactionV1: DeclareTransactionV1$1,
  DeclareTransactionV2: DeclareTransactionV2$1,
  DeclareTransactionV3: DeclareTransactionV3$1,
  DeclaredClass: DeclaredClass$1,
  DeployAccountTransactionReceipt: DeployAccountTransactionReceipt$1,
  DeployAccountTransactionTrace: DeployAccountTransactionTrace$1,
  DeployAccountTransactionV1: DeployAccountTransactionV1$1,
  DeployAccountTransactionV3: DeployAccountTransactionV3$1,
  DeployTransaction: DeployTransaction$1,
  DeployTransactionReceipt: DeployTransactionReceipt$1,
  DeployedContract: DeployedContract$1,
  Event: Event$1,
  ExecutionResources: ExecutionResources$1,
  ExecutionReverted: ExecutionReverted$1,
  ExecutionStatus: ExecutionStatus,
  ExecutionSucceeded: ExecutionSucceeded$1,
  FeePayment: FeePayment$1,
  FunctionCall: FunctionCall,
  FunctionInvocation: FunctionInvocation,
  InvokeTransactionReceipt: InvokeTransactionReceipt$1,
  InvokeTransactionTrace: InvokeTransactionTrace$1,
  InvokeTransactionV0: InvokeTransactionV0$1,
  InvokeTransactionV1: InvokeTransactionV1$1,
  InvokeTransactionV3: InvokeTransactionV3$1,
  L1DataAvailabilityMode: L1DataAvailabilityMode$1,
  L1HandlerTransaction: L1HandlerTransaction$1,
  L1HandlerTransactionReceipt: L1HandlerTransactionReceipt$1,
  L1HandlerTransactionTrace: L1HandlerTransactionTrace$1,
  MessageToL1: MessageToL1$1,
  NonceUpdate: NonceUpdate$1,
  PriceUnit: PriceUnit$1,
  ReplacedClass: ReplacedClass$1,
  ResourceBounds: ResourceBounds$1,
  ResourceBoundsMapping: ResourceBoundsMapping$1,
  ResourcePrice: ResourcePrice$1,
  StorageDiff: StorageDiff$1,
  StorageEntry: StorageEntry$1,
  Transaction: Transaction$1,
  TransactionMeta: TransactionMeta$1,
  TransactionReceipt: TransactionReceipt$1,
  TransactionReceiptMeta: TransactionReceiptMeta$1,
  TransactionStatus: TransactionStatus$1,
  TransactionTrace: TransactionTrace$1,
  Uint128: Uint128,
  callTypeFromJSON: callTypeFromJSON,
  callTypeToJSON: callTypeToJSON,
  dataAvailabilityModeFromJSON: dataAvailabilityModeFromJSON,
  dataAvailabilityModeToJSON: dataAvailabilityModeToJSON,
  executionStatusFromJSON: executionStatusFromJSON,
  executionStatusToJSON: executionStatusToJSON,
  l1DataAvailabilityModeFromJSON: l1DataAvailabilityModeFromJSON,
  l1DataAvailabilityModeToJSON: l1DataAvailabilityModeToJSON,
  priceUnitFromJSON: priceUnitFromJSON,
  priceUnitToJSON: priceUnitToJSON,
  protobufPackage: protobufPackage$1,
  transactionStatusFromJSON: transactionStatusFromJSON,
  transactionStatusToJSON: transactionStatusToJSON
};

const protobufPackage = "starknet.v2";
var HeaderFilter$1 = /* @__PURE__ */ ((HeaderFilter2) => {
  HeaderFilter2[HeaderFilter2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  HeaderFilter2[HeaderFilter2["ALWAYS"] = 1] = "ALWAYS";
  HeaderFilter2[HeaderFilter2["ON_DATA"] = 2] = "ON_DATA";
  HeaderFilter2[HeaderFilter2["ON_DATA_OR_ON_NEW_BLOCK"] = 3] = "ON_DATA_OR_ON_NEW_BLOCK";
  HeaderFilter2[HeaderFilter2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return HeaderFilter2;
})(HeaderFilter$1 || {});
function headerFilterFromJSON(object) {
  switch (object) {
    case 0:
    case "HEADER_FILTER_UNSPECIFIED":
      return 0 /* UNSPECIFIED */;
    case 1:
    case "HEADER_FILTER_ALWAYS":
      return 1 /* ALWAYS */;
    case 2:
    case "HEADER_FILTER_ON_DATA":
      return 2 /* ON_DATA */;
    case 3:
    case "HEADER_FILTER_ON_DATA_OR_ON_NEW_BLOCK":
      return 3 /* ON_DATA_OR_ON_NEW_BLOCK */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function headerFilterToJSON(object) {
  switch (object) {
    case 0 /* UNSPECIFIED */:
      return "HEADER_FILTER_UNSPECIFIED";
    case 1 /* ALWAYS */:
      return "HEADER_FILTER_ALWAYS";
    case 2 /* ON_DATA */:
      return "HEADER_FILTER_ON_DATA";
    case 3 /* ON_DATA_OR_ON_NEW_BLOCK */:
      return "HEADER_FILTER_ON_DATA_OR_ON_NEW_BLOCK";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var TransactionStatusFilter$1 = /* @__PURE__ */ ((TransactionStatusFilter2) => {
  TransactionStatusFilter2[TransactionStatusFilter2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  TransactionStatusFilter2[TransactionStatusFilter2["SUCCEEDED"] = 1] = "SUCCEEDED";
  TransactionStatusFilter2[TransactionStatusFilter2["REVERTED"] = 2] = "REVERTED";
  TransactionStatusFilter2[TransactionStatusFilter2["ALL"] = 3] = "ALL";
  TransactionStatusFilter2[TransactionStatusFilter2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return TransactionStatusFilter2;
})(TransactionStatusFilter$1 || {});
function transactionStatusFilterFromJSON(object) {
  switch (object) {
    case 0:
    case "TRANSACTION_STATUS_FILTER_UNSPECIFIED":
      return 0 /* UNSPECIFIED */;
    case 1:
    case "TRANSACTION_STATUS_FILTER_SUCCEEDED":
      return 1 /* SUCCEEDED */;
    case 2:
    case "TRANSACTION_STATUS_FILTER_REVERTED":
      return 2 /* REVERTED */;
    case 3:
    case "TRANSACTION_STATUS_FILTER_ALL":
      return 3 /* ALL */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function transactionStatusFilterToJSON(object) {
  switch (object) {
    case 0 /* UNSPECIFIED */:
      return "TRANSACTION_STATUS_FILTER_UNSPECIFIED";
    case 1 /* SUCCEEDED */:
      return "TRANSACTION_STATUS_FILTER_SUCCEEDED";
    case 2 /* REVERTED */:
      return "TRANSACTION_STATUS_FILTER_REVERTED";
    case 3 /* ALL */:
      return "TRANSACTION_STATUS_FILTER_ALL";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseFilter() {
  return {
    header: 0,
    transactions: [],
    events: [],
    messages: [],
    storageDiffs: [],
    contractChanges: [],
    nonceUpdates: []
  };
}
const Filter$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.header !== void 0 && message.header !== 0) {
      writer.uint32(8).int32(message.header);
    }
    if (message.transactions !== void 0 && message.transactions.length !== 0) {
      for (const v of message.transactions) {
        TransactionFilter$1.encode(v, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.events !== void 0 && message.events.length !== 0) {
      for (const v of message.events) {
        EventFilter$1.encode(v, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.messages !== void 0 && message.messages.length !== 0) {
      for (const v of message.messages) {
        MessageToL1Filter$1.encode(v, writer.uint32(34).fork()).ldelim();
      }
    }
    if (message.storageDiffs !== void 0 && message.storageDiffs.length !== 0) {
      for (const v of message.storageDiffs) {
        StorageDiffFilter$1.encode(v, writer.uint32(42).fork()).ldelim();
      }
    }
    if (message.contractChanges !== void 0 && message.contractChanges.length !== 0) {
      for (const v of message.contractChanges) {
        ContractChangeFilter$1.encode(v, writer.uint32(50).fork()).ldelim();
      }
    }
    if (message.nonceUpdates !== void 0 && message.nonceUpdates.length !== 0) {
      for (const v of message.nonceUpdates) {
        NonceUpdateFilter$1.encode(v, writer.uint32(58).fork()).ldelim();
      }
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.header = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.transactions.push(TransactionFilter$1.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.events.push(EventFilter$1.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.messages.push(MessageToL1Filter$1.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.storageDiffs.push(StorageDiffFilter$1.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.contractChanges.push(ContractChangeFilter$1.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.nonceUpdates.push(NonceUpdateFilter$1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      header: isSet(object.header) ? headerFilterFromJSON(object.header) : 0,
      transactions: globalThis.Array.isArray(object?.transactions) ? object.transactions.map((e) => TransactionFilter$1.fromJSON(e)) : [],
      events: globalThis.Array.isArray(object?.events) ? object.events.map((e) => EventFilter$1.fromJSON(e)) : [],
      messages: globalThis.Array.isArray(object?.messages) ? object.messages.map((e) => MessageToL1Filter$1.fromJSON(e)) : [],
      storageDiffs: globalThis.Array.isArray(object?.storageDiffs) ? object.storageDiffs.map((e) => StorageDiffFilter$1.fromJSON(e)) : [],
      contractChanges: globalThis.Array.isArray(object?.contractChanges) ? object.contractChanges.map((e) => ContractChangeFilter$1.fromJSON(e)) : [],
      nonceUpdates: globalThis.Array.isArray(object?.nonceUpdates) ? object.nonceUpdates.map((e) => NonceUpdateFilter$1.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.header !== void 0 && message.header !== 0) {
      obj.header = headerFilterToJSON(message.header);
    }
    if (message.transactions?.length) {
      obj.transactions = message.transactions.map((e) => TransactionFilter$1.toJSON(e));
    }
    if (message.events?.length) {
      obj.events = message.events.map((e) => EventFilter$1.toJSON(e));
    }
    if (message.messages?.length) {
      obj.messages = message.messages.map((e) => MessageToL1Filter$1.toJSON(e));
    }
    if (message.storageDiffs?.length) {
      obj.storageDiffs = message.storageDiffs.map((e) => StorageDiffFilter$1.toJSON(e));
    }
    if (message.contractChanges?.length) {
      obj.contractChanges = message.contractChanges.map((e) => ContractChangeFilter$1.toJSON(e));
    }
    if (message.nonceUpdates?.length) {
      obj.nonceUpdates = message.nonceUpdates.map((e) => NonceUpdateFilter$1.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return Filter$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseFilter();
    message.header = object.header ?? 0;
    message.transactions = object.transactions?.map((e) => TransactionFilter$1.fromPartial(e)) || [];
    message.events = object.events?.map((e) => EventFilter$1.fromPartial(e)) || [];
    message.messages = object.messages?.map((e) => MessageToL1Filter$1.fromPartial(e)) || [];
    message.storageDiffs = object.storageDiffs?.map((e) => StorageDiffFilter$1.fromPartial(e)) || [];
    message.contractChanges = object.contractChanges?.map((e) => ContractChangeFilter$1.fromPartial(e)) || [];
    message.nonceUpdates = object.nonceUpdates?.map((e) => NonceUpdateFilter$1.fromPartial(e)) || [];
    return message;
  }
};
function createBaseEventFilter() {
  return {
    id: 0,
    address: void 0,
    keys: [],
    strict: void 0,
    transactionStatus: void 0,
    includeTransaction: void 0,
    includeReceipt: void 0,
    includeMessages: void 0,
    includeSiblings: void 0,
    includeTransactionTrace: void 0
  };
}
const EventFilter$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.id !== void 0 && message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.address !== void 0) {
      FieldElement.encode(message.address, writer.uint32(18).fork()).ldelim();
    }
    if (message.keys !== void 0 && message.keys.length !== 0) {
      for (const v of message.keys) {
        Key$1.encode(v, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.strict !== void 0) {
      writer.uint32(32).bool(message.strict);
    }
    if (message.transactionStatus !== void 0) {
      writer.uint32(40).int32(message.transactionStatus);
    }
    if (message.includeTransaction !== void 0) {
      writer.uint32(48).bool(message.includeTransaction);
    }
    if (message.includeReceipt !== void 0) {
      writer.uint32(56).bool(message.includeReceipt);
    }
    if (message.includeMessages !== void 0) {
      writer.uint32(64).bool(message.includeMessages);
    }
    if (message.includeSiblings !== void 0) {
      writer.uint32(72).bool(message.includeSiblings);
    }
    if (message.includeTransactionTrace !== void 0) {
      writer.uint32(80).bool(message.includeTransactionTrace);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEventFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.address = FieldElement.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.keys.push(Key$1.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.strict = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.transactionStatus = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.includeTransaction = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }
          message.includeReceipt = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }
          message.includeMessages = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }
          message.includeSiblings = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }
          message.includeTransactionTrace = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      address: isSet(object.address) ? FieldElement.fromJSON(object.address) : void 0,
      keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e) => Key$1.fromJSON(e)) : [],
      strict: isSet(object.strict) ? globalThis.Boolean(object.strict) : void 0,
      transactionStatus: isSet(object.transactionStatus) ? transactionStatusFilterFromJSON(object.transactionStatus) : void 0,
      includeTransaction: isSet(object.includeTransaction) ? globalThis.Boolean(object.includeTransaction) : void 0,
      includeReceipt: isSet(object.includeReceipt) ? globalThis.Boolean(object.includeReceipt) : void 0,
      includeMessages: isSet(object.includeMessages) ? globalThis.Boolean(object.includeMessages) : void 0,
      includeSiblings: isSet(object.includeSiblings) ? globalThis.Boolean(object.includeSiblings) : void 0,
      includeTransactionTrace: isSet(object.includeTransactionTrace) ? globalThis.Boolean(object.includeTransactionTrace) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.id !== void 0 && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.address !== void 0) {
      obj.address = FieldElement.toJSON(message.address);
    }
    if (message.keys?.length) {
      obj.keys = message.keys.map((e) => Key$1.toJSON(e));
    }
    if (message.strict !== void 0) {
      obj.strict = message.strict;
    }
    if (message.transactionStatus !== void 0) {
      obj.transactionStatus = transactionStatusFilterToJSON(message.transactionStatus);
    }
    if (message.includeTransaction !== void 0) {
      obj.includeTransaction = message.includeTransaction;
    }
    if (message.includeReceipt !== void 0) {
      obj.includeReceipt = message.includeReceipt;
    }
    if (message.includeMessages !== void 0) {
      obj.includeMessages = message.includeMessages;
    }
    if (message.includeSiblings !== void 0) {
      obj.includeSiblings = message.includeSiblings;
    }
    if (message.includeTransactionTrace !== void 0) {
      obj.includeTransactionTrace = message.includeTransactionTrace;
    }
    return obj;
  },
  create(base) {
    return EventFilter$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseEventFilter();
    message.id = object.id ?? 0;
    message.address = object.address !== void 0 && object.address !== null ? FieldElement.fromPartial(object.address) : void 0;
    message.keys = object.keys?.map((e) => Key$1.fromPartial(e)) || [];
    message.strict = object.strict ?? void 0;
    message.transactionStatus = object.transactionStatus ?? void 0;
    message.includeTransaction = object.includeTransaction ?? void 0;
    message.includeReceipt = object.includeReceipt ?? void 0;
    message.includeMessages = object.includeMessages ?? void 0;
    message.includeSiblings = object.includeSiblings ?? void 0;
    message.includeTransactionTrace = object.includeTransactionTrace ?? void 0;
    return message;
  }
};
function createBaseKey() {
  return { value: void 0 };
}
const Key$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.value !== void 0) {
      FieldElement.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.value = FieldElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { value: isSet(object.value) ? FieldElement.fromJSON(object.value) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.value !== void 0) {
      obj.value = FieldElement.toJSON(message.value);
    }
    return obj;
  },
  create(base) {
    return Key$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseKey();
    message.value = object.value !== void 0 && object.value !== null ? FieldElement.fromPartial(object.value) : void 0;
    return message;
  }
};
function createBaseMessageToL1Filter() {
  return {
    id: 0,
    fromAddress: void 0,
    toAddress: void 0,
    transactionStatus: void 0,
    includeTransaction: void 0,
    includeReceipt: void 0,
    includeEvents: void 0,
    includeSiblings: void 0,
    includeTransactionTrace: void 0
  };
}
const MessageToL1Filter$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.id !== void 0 && message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.fromAddress !== void 0) {
      FieldElement.encode(message.fromAddress, writer.uint32(18).fork()).ldelim();
    }
    if (message.toAddress !== void 0) {
      FieldElement.encode(message.toAddress, writer.uint32(26).fork()).ldelim();
    }
    if (message.transactionStatus !== void 0) {
      writer.uint32(32).int32(message.transactionStatus);
    }
    if (message.includeTransaction !== void 0) {
      writer.uint32(40).bool(message.includeTransaction);
    }
    if (message.includeReceipt !== void 0) {
      writer.uint32(48).bool(message.includeReceipt);
    }
    if (message.includeEvents !== void 0) {
      writer.uint32(56).bool(message.includeEvents);
    }
    if (message.includeSiblings !== void 0) {
      writer.uint32(64).bool(message.includeSiblings);
    }
    if (message.includeTransactionTrace !== void 0) {
      writer.uint32(72).bool(message.includeTransactionTrace);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMessageToL1Filter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.fromAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.toAddress = FieldElement.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.transactionStatus = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.includeTransaction = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.includeReceipt = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }
          message.includeEvents = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }
          message.includeSiblings = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }
          message.includeTransactionTrace = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      fromAddress: isSet(object.fromAddress) ? FieldElement.fromJSON(object.fromAddress) : void 0,
      toAddress: isSet(object.toAddress) ? FieldElement.fromJSON(object.toAddress) : void 0,
      transactionStatus: isSet(object.transactionStatus) ? transactionStatusFilterFromJSON(object.transactionStatus) : void 0,
      includeTransaction: isSet(object.includeTransaction) ? globalThis.Boolean(object.includeTransaction) : void 0,
      includeReceipt: isSet(object.includeReceipt) ? globalThis.Boolean(object.includeReceipt) : void 0,
      includeEvents: isSet(object.includeEvents) ? globalThis.Boolean(object.includeEvents) : void 0,
      includeSiblings: isSet(object.includeSiblings) ? globalThis.Boolean(object.includeSiblings) : void 0,
      includeTransactionTrace: isSet(object.includeTransactionTrace) ? globalThis.Boolean(object.includeTransactionTrace) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.id !== void 0 && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.fromAddress !== void 0) {
      obj.fromAddress = FieldElement.toJSON(message.fromAddress);
    }
    if (message.toAddress !== void 0) {
      obj.toAddress = FieldElement.toJSON(message.toAddress);
    }
    if (message.transactionStatus !== void 0) {
      obj.transactionStatus = transactionStatusFilterToJSON(message.transactionStatus);
    }
    if (message.includeTransaction !== void 0) {
      obj.includeTransaction = message.includeTransaction;
    }
    if (message.includeReceipt !== void 0) {
      obj.includeReceipt = message.includeReceipt;
    }
    if (message.includeEvents !== void 0) {
      obj.includeEvents = message.includeEvents;
    }
    if (message.includeSiblings !== void 0) {
      obj.includeSiblings = message.includeSiblings;
    }
    if (message.includeTransactionTrace !== void 0) {
      obj.includeTransactionTrace = message.includeTransactionTrace;
    }
    return obj;
  },
  create(base) {
    return MessageToL1Filter$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseMessageToL1Filter();
    message.id = object.id ?? 0;
    message.fromAddress = object.fromAddress !== void 0 && object.fromAddress !== null ? FieldElement.fromPartial(object.fromAddress) : void 0;
    message.toAddress = object.toAddress !== void 0 && object.toAddress !== null ? FieldElement.fromPartial(object.toAddress) : void 0;
    message.transactionStatus = object.transactionStatus ?? void 0;
    message.includeTransaction = object.includeTransaction ?? void 0;
    message.includeReceipt = object.includeReceipt ?? void 0;
    message.includeEvents = object.includeEvents ?? void 0;
    message.includeSiblings = object.includeSiblings ?? void 0;
    message.includeTransactionTrace = object.includeTransactionTrace ?? void 0;
    return message;
  }
};
function createBaseTransactionFilter() {
  return {
    id: 0,
    transactionStatus: void 0,
    includeReceipt: void 0,
    includeEvents: void 0,
    includeMessages: void 0,
    inner: void 0,
    includeTrace: void 0
  };
}
const TransactionFilter$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.id !== void 0 && message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.transactionStatus !== void 0) {
      writer.uint32(16).int32(message.transactionStatus);
    }
    if (message.includeReceipt !== void 0) {
      writer.uint32(24).bool(message.includeReceipt);
    }
    if (message.includeEvents !== void 0) {
      writer.uint32(32).bool(message.includeEvents);
    }
    if (message.includeMessages !== void 0) {
      writer.uint32(40).bool(message.includeMessages);
    }
    switch (message.inner?.$case) {
      case "invokeV0":
        InvokeTransactionV0Filter$1.encode(message.inner.invokeV0, writer.uint32(50).fork()).ldelim();
        break;
      case "invokeV1":
        InvokeTransactionV1Filter$1.encode(message.inner.invokeV1, writer.uint32(58).fork()).ldelim();
        break;
      case "invokeV3":
        InvokeTransactionV3Filter$1.encode(message.inner.invokeV3, writer.uint32(66).fork()).ldelim();
        break;
      case "deploy":
        DeployTransactionFilter$1.encode(message.inner.deploy, writer.uint32(74).fork()).ldelim();
        break;
      case "declareV0":
        DeclareV0TransactionFilter$1.encode(message.inner.declareV0, writer.uint32(82).fork()).ldelim();
        break;
      case "declareV1":
        DeclareV1TransactionFilter$1.encode(message.inner.declareV1, writer.uint32(90).fork()).ldelim();
        break;
      case "declareV2":
        DeclareV2TransactionFilter$1.encode(message.inner.declareV2, writer.uint32(98).fork()).ldelim();
        break;
      case "declareV3":
        DeclareV3TransactionFilter$1.encode(message.inner.declareV3, writer.uint32(106).fork()).ldelim();
        break;
      case "l1Handler":
        L1HandlerTransactionFilter$1.encode(message.inner.l1Handler, writer.uint32(114).fork()).ldelim();
        break;
      case "deployAccountV1":
        DeployAccountV1TransactionFilter$1.encode(message.inner.deployAccountV1, writer.uint32(122).fork()).ldelim();
        break;
      case "deployAccountV3":
        DeployAccountV3TransactionFilter$1.encode(message.inner.deployAccountV3, writer.uint32(130).fork()).ldelim();
        break;
    }
    if (message.includeTrace !== void 0) {
      writer.uint32(136).bool(message.includeTrace);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTransactionFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.transactionStatus = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.includeReceipt = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.includeEvents = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.includeMessages = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.inner = { $case: "invokeV0", invokeV0: InvokeTransactionV0Filter$1.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.inner = { $case: "invokeV1", invokeV1: InvokeTransactionV1Filter$1.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.inner = { $case: "invokeV3", invokeV3: InvokeTransactionV3Filter$1.decode(reader, reader.uint32()) };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }
          message.inner = { $case: "deploy", deploy: DeployTransactionFilter$1.decode(reader, reader.uint32()) };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }
          message.inner = { $case: "declareV0", declareV0: DeclareV0TransactionFilter$1.decode(reader, reader.uint32()) };
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }
          message.inner = { $case: "declareV1", declareV1: DeclareV1TransactionFilter$1.decode(reader, reader.uint32()) };
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }
          message.inner = { $case: "declareV2", declareV2: DeclareV2TransactionFilter$1.decode(reader, reader.uint32()) };
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }
          message.inner = { $case: "declareV3", declareV3: DeclareV3TransactionFilter$1.decode(reader, reader.uint32()) };
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }
          message.inner = { $case: "l1Handler", l1Handler: L1HandlerTransactionFilter$1.decode(reader, reader.uint32()) };
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }
          message.inner = {
            $case: "deployAccountV1",
            deployAccountV1: DeployAccountV1TransactionFilter$1.decode(reader, reader.uint32())
          };
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }
          message.inner = {
            $case: "deployAccountV3",
            deployAccountV3: DeployAccountV3TransactionFilter$1.decode(reader, reader.uint32())
          };
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }
          message.includeTrace = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      transactionStatus: isSet(object.transactionStatus) ? transactionStatusFilterFromJSON(object.transactionStatus) : void 0,
      includeReceipt: isSet(object.includeReceipt) ? globalThis.Boolean(object.includeReceipt) : void 0,
      includeEvents: isSet(object.includeEvents) ? globalThis.Boolean(object.includeEvents) : void 0,
      includeMessages: isSet(object.includeMessages) ? globalThis.Boolean(object.includeMessages) : void 0,
      inner: isSet(object.invokeV0) ? { $case: "invokeV0", invokeV0: InvokeTransactionV0Filter$1.fromJSON(object.invokeV0) } : isSet(object.invokeV1) ? { $case: "invokeV1", invokeV1: InvokeTransactionV1Filter$1.fromJSON(object.invokeV1) } : isSet(object.invokeV3) ? { $case: "invokeV3", invokeV3: InvokeTransactionV3Filter$1.fromJSON(object.invokeV3) } : isSet(object.deploy) ? { $case: "deploy", deploy: DeployTransactionFilter$1.fromJSON(object.deploy) } : isSet(object.declareV0) ? { $case: "declareV0", declareV0: DeclareV0TransactionFilter$1.fromJSON(object.declareV0) } : isSet(object.declareV1) ? { $case: "declareV1", declareV1: DeclareV1TransactionFilter$1.fromJSON(object.declareV1) } : isSet(object.declareV2) ? { $case: "declareV2", declareV2: DeclareV2TransactionFilter$1.fromJSON(object.declareV2) } : isSet(object.declareV3) ? { $case: "declareV3", declareV3: DeclareV3TransactionFilter$1.fromJSON(object.declareV3) } : isSet(object.l1Handler) ? { $case: "l1Handler", l1Handler: L1HandlerTransactionFilter$1.fromJSON(object.l1Handler) } : isSet(object.deployAccountV1) ? {
        $case: "deployAccountV1",
        deployAccountV1: DeployAccountV1TransactionFilter$1.fromJSON(object.deployAccountV1)
      } : isSet(object.deployAccountV3) ? {
        $case: "deployAccountV3",
        deployAccountV3: DeployAccountV3TransactionFilter$1.fromJSON(object.deployAccountV3)
      } : void 0,
      includeTrace: isSet(object.includeTrace) ? globalThis.Boolean(object.includeTrace) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.id !== void 0 && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.transactionStatus !== void 0) {
      obj.transactionStatus = transactionStatusFilterToJSON(message.transactionStatus);
    }
    if (message.includeReceipt !== void 0) {
      obj.includeReceipt = message.includeReceipt;
    }
    if (message.includeEvents !== void 0) {
      obj.includeEvents = message.includeEvents;
    }
    if (message.includeMessages !== void 0) {
      obj.includeMessages = message.includeMessages;
    }
    if (message.inner?.$case === "invokeV0") {
      obj.invokeV0 = InvokeTransactionV0Filter$1.toJSON(message.inner.invokeV0);
    }
    if (message.inner?.$case === "invokeV1") {
      obj.invokeV1 = InvokeTransactionV1Filter$1.toJSON(message.inner.invokeV1);
    }
    if (message.inner?.$case === "invokeV3") {
      obj.invokeV3 = InvokeTransactionV3Filter$1.toJSON(message.inner.invokeV3);
    }
    if (message.inner?.$case === "deploy") {
      obj.deploy = DeployTransactionFilter$1.toJSON(message.inner.deploy);
    }
    if (message.inner?.$case === "declareV0") {
      obj.declareV0 = DeclareV0TransactionFilter$1.toJSON(message.inner.declareV0);
    }
    if (message.inner?.$case === "declareV1") {
      obj.declareV1 = DeclareV1TransactionFilter$1.toJSON(message.inner.declareV1);
    }
    if (message.inner?.$case === "declareV2") {
      obj.declareV2 = DeclareV2TransactionFilter$1.toJSON(message.inner.declareV2);
    }
    if (message.inner?.$case === "declareV3") {
      obj.declareV3 = DeclareV3TransactionFilter$1.toJSON(message.inner.declareV3);
    }
    if (message.inner?.$case === "l1Handler") {
      obj.l1Handler = L1HandlerTransactionFilter$1.toJSON(message.inner.l1Handler);
    }
    if (message.inner?.$case === "deployAccountV1") {
      obj.deployAccountV1 = DeployAccountV1TransactionFilter$1.toJSON(message.inner.deployAccountV1);
    }
    if (message.inner?.$case === "deployAccountV3") {
      obj.deployAccountV3 = DeployAccountV3TransactionFilter$1.toJSON(message.inner.deployAccountV3);
    }
    if (message.includeTrace !== void 0) {
      obj.includeTrace = message.includeTrace;
    }
    return obj;
  },
  create(base) {
    return TransactionFilter$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTransactionFilter();
    message.id = object.id ?? 0;
    message.transactionStatus = object.transactionStatus ?? void 0;
    message.includeReceipt = object.includeReceipt ?? void 0;
    message.includeEvents = object.includeEvents ?? void 0;
    message.includeMessages = object.includeMessages ?? void 0;
    if (object.inner?.$case === "invokeV0" && object.inner?.invokeV0 !== void 0 && object.inner?.invokeV0 !== null) {
      message.inner = { $case: "invokeV0", invokeV0: InvokeTransactionV0Filter$1.fromPartial(object.inner.invokeV0) };
    }
    if (object.inner?.$case === "invokeV1" && object.inner?.invokeV1 !== void 0 && object.inner?.invokeV1 !== null) {
      message.inner = { $case: "invokeV1", invokeV1: InvokeTransactionV1Filter$1.fromPartial(object.inner.invokeV1) };
    }
    if (object.inner?.$case === "invokeV3" && object.inner?.invokeV3 !== void 0 && object.inner?.invokeV3 !== null) {
      message.inner = { $case: "invokeV3", invokeV3: InvokeTransactionV3Filter$1.fromPartial(object.inner.invokeV3) };
    }
    if (object.inner?.$case === "deploy" && object.inner?.deploy !== void 0 && object.inner?.deploy !== null) {
      message.inner = { $case: "deploy", deploy: DeployTransactionFilter$1.fromPartial(object.inner.deploy) };
    }
    if (object.inner?.$case === "declareV0" && object.inner?.declareV0 !== void 0 && object.inner?.declareV0 !== null) {
      message.inner = { $case: "declareV0", declareV0: DeclareV0TransactionFilter$1.fromPartial(object.inner.declareV0) };
    }
    if (object.inner?.$case === "declareV1" && object.inner?.declareV1 !== void 0 && object.inner?.declareV1 !== null) {
      message.inner = { $case: "declareV1", declareV1: DeclareV1TransactionFilter$1.fromPartial(object.inner.declareV1) };
    }
    if (object.inner?.$case === "declareV2" && object.inner?.declareV2 !== void 0 && object.inner?.declareV2 !== null) {
      message.inner = { $case: "declareV2", declareV2: DeclareV2TransactionFilter$1.fromPartial(object.inner.declareV2) };
    }
    if (object.inner?.$case === "declareV3" && object.inner?.declareV3 !== void 0 && object.inner?.declareV3 !== null) {
      message.inner = { $case: "declareV3", declareV3: DeclareV3TransactionFilter$1.fromPartial(object.inner.declareV3) };
    }
    if (object.inner?.$case === "l1Handler" && object.inner?.l1Handler !== void 0 && object.inner?.l1Handler !== null) {
      message.inner = { $case: "l1Handler", l1Handler: L1HandlerTransactionFilter$1.fromPartial(object.inner.l1Handler) };
    }
    if (object.inner?.$case === "deployAccountV1" && object.inner?.deployAccountV1 !== void 0 && object.inner?.deployAccountV1 !== null) {
      message.inner = {
        $case: "deployAccountV1",
        deployAccountV1: DeployAccountV1TransactionFilter$1.fromPartial(object.inner.deployAccountV1)
      };
    }
    if (object.inner?.$case === "deployAccountV3" && object.inner?.deployAccountV3 !== void 0 && object.inner?.deployAccountV3 !== null) {
      message.inner = {
        $case: "deployAccountV3",
        deployAccountV3: DeployAccountV3TransactionFilter$1.fromPartial(object.inner.deployAccountV3)
      };
    }
    message.includeTrace = object.includeTrace ?? void 0;
    return message;
  }
};
function createBaseInvokeTransactionV0Filter() {
  return {};
}
const InvokeTransactionV0Filter$1 = {
  encode(_, writer = _m0__default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInvokeTransactionV0Filter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return InvokeTransactionV0Filter$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseInvokeTransactionV0Filter();
    return message;
  }
};
function createBaseInvokeTransactionV1Filter() {
  return {};
}
const InvokeTransactionV1Filter$1 = {
  encode(_, writer = _m0__default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInvokeTransactionV1Filter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return InvokeTransactionV1Filter$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseInvokeTransactionV1Filter();
    return message;
  }
};
function createBaseInvokeTransactionV3Filter() {
  return {};
}
const InvokeTransactionV3Filter$1 = {
  encode(_, writer = _m0__default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInvokeTransactionV3Filter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return InvokeTransactionV3Filter$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseInvokeTransactionV3Filter();
    return message;
  }
};
function createBaseDeployTransactionFilter() {
  return {};
}
const DeployTransactionFilter$1 = {
  encode(_, writer = _m0__default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeployTransactionFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return DeployTransactionFilter$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseDeployTransactionFilter();
    return message;
  }
};
function createBaseDeclareV0TransactionFilter() {
  return {};
}
const DeclareV0TransactionFilter$1 = {
  encode(_, writer = _m0__default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeclareV0TransactionFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return DeclareV0TransactionFilter$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseDeclareV0TransactionFilter();
    return message;
  }
};
function createBaseDeclareV1TransactionFilter() {
  return {};
}
const DeclareV1TransactionFilter$1 = {
  encode(_, writer = _m0__default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeclareV1TransactionFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return DeclareV1TransactionFilter$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseDeclareV1TransactionFilter();
    return message;
  }
};
function createBaseDeclareV2TransactionFilter() {
  return {};
}
const DeclareV2TransactionFilter$1 = {
  encode(_, writer = _m0__default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeclareV2TransactionFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return DeclareV2TransactionFilter$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseDeclareV2TransactionFilter();
    return message;
  }
};
function createBaseDeclareV3TransactionFilter() {
  return {};
}
const DeclareV3TransactionFilter$1 = {
  encode(_, writer = _m0__default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeclareV3TransactionFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return DeclareV3TransactionFilter$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseDeclareV3TransactionFilter();
    return message;
  }
};
function createBaseL1HandlerTransactionFilter() {
  return {};
}
const L1HandlerTransactionFilter$1 = {
  encode(_, writer = _m0__default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseL1HandlerTransactionFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return L1HandlerTransactionFilter$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseL1HandlerTransactionFilter();
    return message;
  }
};
function createBaseDeployAccountV1TransactionFilter() {
  return {};
}
const DeployAccountV1TransactionFilter$1 = {
  encode(_, writer = _m0__default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeployAccountV1TransactionFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return DeployAccountV1TransactionFilter$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseDeployAccountV1TransactionFilter();
    return message;
  }
};
function createBaseDeployAccountV3TransactionFilter() {
  return {};
}
const DeployAccountV3TransactionFilter$1 = {
  encode(_, writer = _m0__default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeployAccountV3TransactionFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return DeployAccountV3TransactionFilter$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseDeployAccountV3TransactionFilter();
    return message;
  }
};
function createBaseStorageDiffFilter() {
  return { id: 0, contractAddress: void 0 };
}
const StorageDiffFilter$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.id !== void 0 && message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.contractAddress !== void 0) {
      FieldElement.encode(message.contractAddress, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStorageDiffFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.contractAddress = FieldElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      contractAddress: isSet(object.contractAddress) ? FieldElement.fromJSON(object.contractAddress) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.id !== void 0 && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.contractAddress !== void 0) {
      obj.contractAddress = FieldElement.toJSON(message.contractAddress);
    }
    return obj;
  },
  create(base) {
    return StorageDiffFilter$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseStorageDiffFilter();
    message.id = object.id ?? 0;
    message.contractAddress = object.contractAddress !== void 0 && object.contractAddress !== null ? FieldElement.fromPartial(object.contractAddress) : void 0;
    return message;
  }
};
function createBaseContractChangeFilter() {
  return { id: 0, change: void 0 };
}
const ContractChangeFilter$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.id !== void 0 && message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    switch (message.change?.$case) {
      case "declaredClass":
        DeclaredClassFilter$1.encode(message.change.declaredClass, writer.uint32(18).fork()).ldelim();
        break;
      case "replacedClass":
        ReplacedClassFilter$1.encode(message.change.replacedClass, writer.uint32(26).fork()).ldelim();
        break;
      case "deployedContract":
        DeployedContractFilter$1.encode(message.change.deployedContract, writer.uint32(34).fork()).ldelim();
        break;
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseContractChangeFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.change = {
            $case: "declaredClass",
            declaredClass: DeclaredClassFilter$1.decode(reader, reader.uint32())
          };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.change = {
            $case: "replacedClass",
            replacedClass: ReplacedClassFilter$1.decode(reader, reader.uint32())
          };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.change = {
            $case: "deployedContract",
            deployedContract: DeployedContractFilter$1.decode(reader, reader.uint32())
          };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      change: isSet(object.declaredClass) ? { $case: "declaredClass", declaredClass: DeclaredClassFilter$1.fromJSON(object.declaredClass) } : isSet(object.replacedClass) ? { $case: "replacedClass", replacedClass: ReplacedClassFilter$1.fromJSON(object.replacedClass) } : isSet(object.deployedContract) ? { $case: "deployedContract", deployedContract: DeployedContractFilter$1.fromJSON(object.deployedContract) } : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.id !== void 0 && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.change?.$case === "declaredClass") {
      obj.declaredClass = DeclaredClassFilter$1.toJSON(message.change.declaredClass);
    }
    if (message.change?.$case === "replacedClass") {
      obj.replacedClass = ReplacedClassFilter$1.toJSON(message.change.replacedClass);
    }
    if (message.change?.$case === "deployedContract") {
      obj.deployedContract = DeployedContractFilter$1.toJSON(message.change.deployedContract);
    }
    return obj;
  },
  create(base) {
    return ContractChangeFilter$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseContractChangeFilter();
    message.id = object.id ?? 0;
    if (object.change?.$case === "declaredClass" && object.change?.declaredClass !== void 0 && object.change?.declaredClass !== null) {
      message.change = {
        $case: "declaredClass",
        declaredClass: DeclaredClassFilter$1.fromPartial(object.change.declaredClass)
      };
    }
    if (object.change?.$case === "replacedClass" && object.change?.replacedClass !== void 0 && object.change?.replacedClass !== null) {
      message.change = {
        $case: "replacedClass",
        replacedClass: ReplacedClassFilter$1.fromPartial(object.change.replacedClass)
      };
    }
    if (object.change?.$case === "deployedContract" && object.change?.deployedContract !== void 0 && object.change?.deployedContract !== null) {
      message.change = {
        $case: "deployedContract",
        deployedContract: DeployedContractFilter$1.fromPartial(object.change.deployedContract)
      };
    }
    return message;
  }
};
function createBaseDeclaredClassFilter() {
  return {};
}
const DeclaredClassFilter$1 = {
  encode(_, writer = _m0__default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeclaredClassFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return DeclaredClassFilter$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseDeclaredClassFilter();
    return message;
  }
};
function createBaseReplacedClassFilter() {
  return {};
}
const ReplacedClassFilter$1 = {
  encode(_, writer = _m0__default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseReplacedClassFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return ReplacedClassFilter$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseReplacedClassFilter();
    return message;
  }
};
function createBaseDeployedContractFilter() {
  return {};
}
const DeployedContractFilter$1 = {
  encode(_, writer = _m0__default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeployedContractFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return DeployedContractFilter$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseDeployedContractFilter();
    return message;
  }
};
function createBaseNonceUpdateFilter() {
  return { id: 0, contractAddress: void 0 };
}
const NonceUpdateFilter$1 = {
  encode(message, writer = _m0__default.Writer.create()) {
    if (message.id !== void 0 && message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.contractAddress !== void 0) {
      FieldElement.encode(message.contractAddress, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0__default.Reader ? input : _m0__default.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNonceUpdateFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.contractAddress = FieldElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      contractAddress: isSet(object.contractAddress) ? FieldElement.fromJSON(object.contractAddress) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.id !== void 0 && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.contractAddress !== void 0) {
      obj.contractAddress = FieldElement.toJSON(message.contractAddress);
    }
    return obj;
  },
  create(base) {
    return NonceUpdateFilter$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseNonceUpdateFilter();
    message.id = object.id ?? 0;
    message.contractAddress = object.contractAddress !== void 0 && object.contractAddress !== null ? FieldElement.fromPartial(object.contractAddress) : void 0;
    return message;
  }
};
function isSet(value) {
  return value !== null && value !== void 0;
}

const filter = {
  __proto__: null,
  ContractChangeFilter: ContractChangeFilter$1,
  DeclareV0TransactionFilter: DeclareV0TransactionFilter$1,
  DeclareV1TransactionFilter: DeclareV1TransactionFilter$1,
  DeclareV2TransactionFilter: DeclareV2TransactionFilter$1,
  DeclareV3TransactionFilter: DeclareV3TransactionFilter$1,
  DeclaredClassFilter: DeclaredClassFilter$1,
  DeployAccountV1TransactionFilter: DeployAccountV1TransactionFilter$1,
  DeployAccountV3TransactionFilter: DeployAccountV3TransactionFilter$1,
  DeployTransactionFilter: DeployTransactionFilter$1,
  DeployedContractFilter: DeployedContractFilter$1,
  EventFilter: EventFilter$1,
  Filter: Filter$1,
  HeaderFilter: HeaderFilter$1,
  InvokeTransactionV0Filter: InvokeTransactionV0Filter$1,
  InvokeTransactionV1Filter: InvokeTransactionV1Filter$1,
  InvokeTransactionV3Filter: InvokeTransactionV3Filter$1,
  Key: Key$1,
  L1HandlerTransactionFilter: L1HandlerTransactionFilter$1,
  MessageToL1Filter: MessageToL1Filter$1,
  NonceUpdateFilter: NonceUpdateFilter$1,
  ReplacedClassFilter: ReplacedClassFilter$1,
  StorageDiffFilter: StorageDiffFilter$1,
  TransactionFilter: TransactionFilter$1,
  TransactionStatusFilter: TransactionStatusFilter$1,
  headerFilterFromJSON: headerFilterFromJSON,
  headerFilterToJSON: headerFilterToJSON,
  protobufPackage: protobufPackage,
  transactionStatusFilterFromJSON: transactionStatusFilterFromJSON,
  transactionStatusFilterToJSON: transactionStatusFilterToJSON
};

const index = {
  __proto__: null,
  common: common,
  data: data,
  filter: filter
};

const ResourcePrice = codec.MessageCodec({
  priceInFri: codec.OptionalCodec(FieldElement$1),
  priceInWei: codec.OptionalCodec(FieldElement$1)
});
const L1DataAvailabilityMode = {
  encode(x) {
    switch (x) {
      case "calldata":
        return L1DataAvailabilityMode$1.CALLDATA;
      case "blob":
        return L1DataAvailabilityMode$1.BLOB;
      case "unknown":
        return L1DataAvailabilityMode$1.UNSPECIFIED;
      default:
        return L1DataAvailabilityMode$1.UNRECOGNIZED;
    }
  },
  decode(p) {
    const enumMap = {
      [L1DataAvailabilityMode$1.CALLDATA]: "calldata",
      [L1DataAvailabilityMode$1.BLOB]: "blob",
      [L1DataAvailabilityMode$1.UNSPECIFIED]: "unknown",
      [L1DataAvailabilityMode$1.UNRECOGNIZED]: "unknown"
    };
    return enumMap[p] ?? "unknown";
  }
};
const TransactionStatus = {
  encode(x) {
    switch (x) {
      case "succeeded":
        return TransactionStatus$1.SUCCEEDED;
      case "reverted":
        return TransactionStatus$1.REVERTED;
      case "unknown":
        return TransactionStatus$1.UNSPECIFIED;
      default:
        return TransactionStatus$1.UNRECOGNIZED;
    }
  },
  decode(p) {
    const enumMap = {
      [TransactionStatus$1.SUCCEEDED]: "succeeded",
      [TransactionStatus$1.REVERTED]: "reverted",
      [TransactionStatus$1.UNSPECIFIED]: "unknown",
      [TransactionStatus$1.UNRECOGNIZED]: "unknown"
    };
    return enumMap[p] ?? "unknown";
  }
};
const U128 = {
  // TODO: double check if this is correct
  encode(x) {
    const low = x.toString(16).padStart(16, "0");
    const high = (x >> 128n).toString(16).padStart(16, "0");
    return { x0: BigInt(`0x${low}`), x1: BigInt(`0x${high}`) };
  },
  decode(p) {
    const low = (p.x0 ?? 0n).toString(16).padStart(16, "0");
    const high = (p.x1 ?? 0n).toString(16).padStart(16, "0");
    return BigInt(`0x${low}${high}`);
  }
};
const ResourceBounds = codec.MessageCodec({
  maxAmount: codec.RequiredCodec(codec.BigIntCodec),
  maxPricePerUnit: codec.RequiredCodec(U128)
});
const ResourceBoundsMapping = codec.MessageCodec({
  l1Gas: codec.RequiredCodec(ResourceBounds),
  l2Gas: codec.RequiredCodec(ResourceBounds)
});
const DataAvailabilityMode = {
  encode(x) {
    switch (x) {
      case "l1":
        return DataAvailabilityMode$1.L1;
      case "l2":
        return DataAvailabilityMode$1.L2;
      case "unknown":
        return DataAvailabilityMode$1.UNSPECIFIED;
      default:
        return DataAvailabilityMode$1.UNRECOGNIZED;
    }
  },
  decode(p) {
    const enumMap = {
      [DataAvailabilityMode$1.L1]: "l1",
      [DataAvailabilityMode$1.L2]: "l2",
      [DataAvailabilityMode$1.UNSPECIFIED]: "unknown",
      [DataAvailabilityMode$1.UNRECOGNIZED]: "unknown"
    };
    return enumMap[p] ?? "unknown";
  }
};
const BlockHeader = codec.MessageCodec({
  blockHash: codec.OptionalCodec(FieldElement$1),
  parentBlockHash: codec.RequiredCodec(FieldElement$1),
  blockNumber: codec.RequiredCodec(codec.BigIntCodec),
  sequencerAddress: codec.RequiredCodec(FieldElement$1),
  newRoot: codec.OptionalCodec(FieldElement$1),
  timestamp: codec.RequiredCodec(codec.DateCodec),
  starknetVersion: codec.RequiredCodec(codec.StringCodec),
  l1GasPrice: codec.RequiredCodec(ResourcePrice),
  l1DataGasPrice: codec.RequiredCodec(ResourcePrice),
  l1DataAvailabilityMode: codec.RequiredCodec(L1DataAvailabilityMode)
});
const TransactionMeta = codec.MessageCodec({
  transactionIndex: codec.RequiredCodec(codec.NumberCodec),
  transactionHash: codec.RequiredCodec(FieldElement$1),
  transactionStatus: codec.RequiredCodec(TransactionStatus)
});
const InvokeTransactionV0 = codec.MessageCodec({
  maxFee: codec.RequiredCodec(FieldElement$1),
  signature: codec.ArrayCodec(FieldElement$1),
  contractAddress: codec.RequiredCodec(FieldElement$1),
  entryPointSelector: codec.RequiredCodec(FieldElement$1),
  calldata: codec.ArrayCodec(FieldElement$1)
});
const InvokeTransactionV1 = codec.MessageCodec({
  senderAddress: codec.RequiredCodec(FieldElement$1),
  calldata: codec.ArrayCodec(FieldElement$1),
  maxFee: codec.RequiredCodec(FieldElement$1),
  signature: codec.ArrayCodec(FieldElement$1),
  nonce: codec.RequiredCodec(FieldElement$1)
});
const InvokeTransactionV3 = codec.MessageCodec({
  senderAddress: codec.RequiredCodec(FieldElement$1),
  calldata: codec.ArrayCodec(FieldElement$1),
  signature: codec.ArrayCodec(FieldElement$1),
  nonce: codec.RequiredCodec(FieldElement$1),
  resourceBounds: codec.RequiredCodec(ResourceBoundsMapping),
  tip: codec.RequiredCodec(codec.BigIntCodec),
  paymasterData: codec.ArrayCodec(FieldElement$1),
  accountDeploymentData: codec.ArrayCodec(FieldElement$1),
  nonceDataAvailabilityMode: codec.RequiredCodec(DataAvailabilityMode),
  feeDataAvailabilityMode: codec.RequiredCodec(DataAvailabilityMode)
});
const L1HandlerTransaction = codec.MessageCodec({
  nonce: codec.RequiredCodec(codec.BigIntCodec),
  contractAddress: codec.RequiredCodec(FieldElement$1),
  entryPointSelector: codec.RequiredCodec(FieldElement$1),
  calldata: codec.ArrayCodec(FieldElement$1)
});
const DeployTransaction = codec.MessageCodec({
  contractAddressSalt: codec.RequiredCodec(FieldElement$1),
  constructorCalldata: codec.ArrayCodec(FieldElement$1),
  classHash: codec.RequiredCodec(FieldElement$1)
});
const DeclareTransactionV0 = codec.MessageCodec({
  senderAddress: codec.RequiredCodec(FieldElement$1),
  maxFee: codec.RequiredCodec(FieldElement$1),
  signature: codec.ArrayCodec(FieldElement$1),
  classHash: codec.RequiredCodec(FieldElement$1)
});
const DeclareTransactionV1 = codec.MessageCodec({
  senderAddress: codec.RequiredCodec(FieldElement$1),
  maxFee: codec.RequiredCodec(FieldElement$1),
  signature: codec.ArrayCodec(FieldElement$1),
  nonce: codec.RequiredCodec(FieldElement$1),
  classHash: codec.RequiredCodec(FieldElement$1)
});
const DeclareTransactionV2 = codec.MessageCodec({
  senderAddress: codec.RequiredCodec(FieldElement$1),
  compiledClassHash: codec.RequiredCodec(FieldElement$1),
  maxFee: codec.RequiredCodec(FieldElement$1),
  signature: codec.ArrayCodec(FieldElement$1),
  nonce: codec.RequiredCodec(FieldElement$1),
  classHash: codec.RequiredCodec(FieldElement$1)
});
const DeclareTransactionV3 = codec.MessageCodec({
  senderAddress: codec.RequiredCodec(FieldElement$1),
  compiledClassHash: codec.RequiredCodec(FieldElement$1),
  signature: codec.ArrayCodec(FieldElement$1),
  nonce: codec.RequiredCodec(FieldElement$1),
  classHash: codec.RequiredCodec(FieldElement$1),
  resourceBounds: codec.RequiredCodec(ResourceBoundsMapping),
  tip: codec.RequiredCodec(codec.BigIntCodec),
  paymasterData: codec.ArrayCodec(FieldElement$1),
  accountDeploymentData: codec.ArrayCodec(FieldElement$1),
  nonceDataAvailabilityMode: codec.RequiredCodec(DataAvailabilityMode),
  feeDataAvailabilityMode: codec.RequiredCodec(DataAvailabilityMode)
});
const DeployAccountTransactionV1 = codec.MessageCodec({
  maxFee: codec.RequiredCodec(FieldElement$1),
  signature: codec.ArrayCodec(FieldElement$1),
  nonce: codec.RequiredCodec(FieldElement$1),
  contractAddressSalt: codec.RequiredCodec(FieldElement$1),
  constructorCalldata: codec.ArrayCodec(FieldElement$1),
  classHash: codec.RequiredCodec(FieldElement$1)
});
const DeployAccountTransactionV3 = codec.MessageCodec({
  signature: codec.ArrayCodec(FieldElement$1),
  nonce: codec.RequiredCodec(FieldElement$1),
  contractAddressSalt: codec.RequiredCodec(FieldElement$1),
  constructorCalldata: codec.ArrayCodec(FieldElement$1),
  classHash: codec.RequiredCodec(FieldElement$1),
  resourceBounds: codec.RequiredCodec(ResourceBoundsMapping),
  tip: codec.RequiredCodec(codec.BigIntCodec),
  paymasterData: codec.ArrayCodec(FieldElement$1),
  nonceDataAvailabilityMode: codec.RequiredCodec(DataAvailabilityMode),
  feeDataAvailabilityMode: codec.RequiredCodec(DataAvailabilityMode)
});
const Transaction = codec.MessageCodec({
  filterIds: codec.ArrayCodec(codec.NumberCodec),
  meta: codec.RequiredCodec(TransactionMeta),
  transaction: codec.RequiredCodec(
    codec.OneOfCodec({
      invokeV0: InvokeTransactionV0,
      invokeV1: InvokeTransactionV1,
      invokeV3: InvokeTransactionV3,
      l1Handler: L1HandlerTransaction,
      deploy: DeployTransaction,
      declareV0: DeclareTransactionV0,
      declareV1: DeclareTransactionV1,
      declareV2: DeclareTransactionV2,
      declareV3: DeclareTransactionV3,
      deployAccountV1: DeployAccountTransactionV1,
      deployAccountV3: DeployAccountTransactionV3
    })
  )
});
const PriceUnit = {
  encode(x) {
    switch (x) {
      case "wei":
        return PriceUnit$1.WEI;
      case "fri":
        return PriceUnit$1.FRI;
      case "unknown":
        return PriceUnit$1.UNSPECIFIED;
      default:
        return PriceUnit$1.UNRECOGNIZED;
    }
  },
  decode(p) {
    const enumMap = {
      [PriceUnit$1.WEI]: "wei",
      [PriceUnit$1.FRI]: "fri",
      [PriceUnit$1.UNSPECIFIED]: "unknown",
      [PriceUnit$1.UNRECOGNIZED]: "unknown"
    };
    return enumMap[p] ?? "unknown";
  }
};
const FeePayment = codec.MessageCodec({
  amount: codec.RequiredCodec(FieldElement$1),
  unit: codec.RequiredCodec(PriceUnit)
});
const ComputationResources = codec.MessageCodec({
  steps: codec.RequiredCodec(codec.BigIntCodec),
  memoryHoles: codec.OptionalCodec(codec.BigIntCodec),
  rangeCheckBuiltinApplications: codec.OptionalCodec(codec.BigIntCodec),
  pedersenBuiltinApplications: codec.OptionalCodec(codec.BigIntCodec),
  poseidonBuiltinApplications: codec.OptionalCodec(codec.BigIntCodec),
  ecOpBuiltinApplications: codec.OptionalCodec(codec.BigIntCodec),
  ecdsaBuiltinApplications: codec.OptionalCodec(codec.BigIntCodec),
  bitwiseBuiltinApplications: codec.OptionalCodec(codec.BigIntCodec),
  keccakBuiltinApplications: codec.OptionalCodec(codec.BigIntCodec),
  segmentArenaBuiltin: codec.OptionalCodec(codec.BigIntCodec)
});
const DataAvailabilityResources = codec.MessageCodec({
  l1Gas: codec.RequiredCodec(codec.BigIntCodec),
  l1DataGas: codec.RequiredCodec(codec.BigIntCodec)
});
const ExecutionResources = codec.MessageCodec({
  computation: codec.RequiredCodec(ComputationResources),
  dataAvailability: codec.RequiredCodec(DataAvailabilityResources)
});
const ExecutionSucceeded = codec.MessageCodec({});
const ExecutionReverted = codec.MessageCodec({
  reason: codec.OptionalCodec(codec.StringCodec)
});
const TransactionReceiptMeta = codec.MessageCodec({
  transactionIndex: codec.RequiredCodec(codec.NumberCodec),
  transactionHash: codec.RequiredCodec(FieldElement$1),
  actualFee: codec.RequiredCodec(FeePayment),
  executionResources: codec.RequiredCodec(ExecutionResources),
  executionResult: codec.RequiredCodec(
    codec.OneOfCodec({
      succeeded: ExecutionSucceeded,
      reverted: ExecutionReverted
    })
  )
});
const InvokeTransactionReceipt = codec.MessageCodec({});
const L1HandlerTransactionReceipt = codec.MessageCodec({
  messageHash: codec.RequiredCodec(codec.Uint8ArrayCodec)
});
const DeclareTransactionReceipt = codec.MessageCodec({});
const DeployTransactionReceipt = codec.MessageCodec({
  contractAddress: codec.RequiredCodec(FieldElement$1)
});
const DeployAccountTransactionReceipt = codec.MessageCodec({
  contractAddress: codec.RequiredCodec(FieldElement$1)
});
const TransactionReceipt = codec.MessageCodec({
  filterIds: codec.ArrayCodec(codec.NumberCodec),
  meta: codec.RequiredCodec(TransactionReceiptMeta),
  receipt: codec.RequiredCodec(
    codec.OneOfCodec({
      invoke: InvokeTransactionReceipt,
      l1Handler: L1HandlerTransactionReceipt,
      declare: DeclareTransactionReceipt,
      deploy: DeployTransactionReceipt,
      deployAccount: DeployAccountTransactionReceipt
    })
  )
});
const Event = codec.MessageCodec({
  filterIds: codec.ArrayCodec(codec.NumberCodec),
  address: codec.RequiredCodec(FieldElement$1),
  keys: codec.ArrayCodec(FieldElement$1),
  data: codec.ArrayCodec(FieldElement$1),
  eventIndex: codec.RequiredCodec(codec.NumberCodec),
  transactionIndex: codec.RequiredCodec(codec.NumberCodec),
  transactionHash: codec.RequiredCodec(FieldElement$1),
  transactionStatus: codec.RequiredCodec(TransactionStatus),
  eventIndexInTransaction: codec.RequiredCodec(codec.NumberCodec)
});
const MessageToL1 = codec.MessageCodec({
  filterIds: codec.ArrayCodec(codec.NumberCodec),
  fromAddress: codec.RequiredCodec(FieldElement$1),
  toAddress: codec.RequiredCodec(FieldElement$1),
  payload: codec.ArrayCodec(FieldElement$1),
  messageIndex: codec.RequiredCodec(codec.NumberCodec),
  transactionIndex: codec.RequiredCodec(codec.NumberCodec),
  transactionHash: codec.RequiredCodec(FieldElement$1),
  transactionStatus: codec.RequiredCodec(TransactionStatus),
  messageIndexInTransaction: codec.RequiredCodec(codec.NumberCodec)
});
const StorageEntry = codec.MessageCodec({
  key: codec.RequiredCodec(FieldElement$1),
  value: codec.RequiredCodec(FieldElement$1)
});
const StorageDiff = codec.MessageCodec({
  filterIds: codec.ArrayCodec(codec.NumberCodec),
  contractAddress: codec.RequiredCodec(FieldElement$1),
  storageEntries: codec.ArrayCodec(StorageEntry)
});
const DeclaredClass = codec.MessageCodec({
  classHash: codec.OptionalCodec(FieldElement$1),
  compiledClassHash: codec.OptionalCodec(FieldElement$1)
});
const ReplacedClass = codec.MessageCodec({
  contractAddress: codec.OptionalCodec(FieldElement$1),
  classHash: codec.OptionalCodec(FieldElement$1)
});
const DeployedContract = codec.MessageCodec({
  contractAddress: codec.OptionalCodec(FieldElement$1),
  classHash: codec.OptionalCodec(FieldElement$1)
});
const ContractChange = codec.MessageCodec({
  filterIds: codec.ArrayCodec(codec.NumberCodec),
  change: codec.RequiredCodec(
    codec.OneOfCodec({
      declaredClass: DeclaredClass,
      replacedClass: ReplacedClass,
      deployedContract: DeployedContract
    })
  )
});
const NonceUpdate = codec.MessageCodec({
  filterIds: codec.ArrayCodec(codec.NumberCodec),
  contractAddress: codec.RequiredCodec(FieldElement$1),
  nonce: codec.RequiredCodec(FieldElement$1)
});
const CallType = {
  encode(x) {
    switch (x) {
      case "libraryCall":
        return CallType$1.LIBRARY_CALL;
      case "call":
        return CallType$1.CALL;
      case "delegate":
        return CallType$1.DELEGATE;
      case "unknown":
        return CallType$1.UNSPECIFIED;
      default:
        return CallType$1.UNRECOGNIZED;
    }
  },
  decode(p) {
    const enumMap = {
      [CallType$1.LIBRARY_CALL]: "libraryCall",
      [CallType$1.CALL]: "call",
      [CallType$1.DELEGATE]: "delegate",
      [CallType$1.UNSPECIFIED]: "unknown",
      [CallType$1.UNRECOGNIZED]: "unknown"
    };
    return enumMap[p] ?? "unknown";
  }
};
const _FunctionInvocationCodec = codec.MessageCodec({
  contractAddress: codec.RequiredCodec(FieldElement$1),
  entryPointSelector: codec.RequiredCodec(FieldElement$1),
  calldata: codec.ArrayCodec(FieldElement$1),
  callerAddress: codec.RequiredCodec(FieldElement$1),
  classHash: codec.RequiredCodec(FieldElement$1),
  callType: codec.RequiredCodec(CallType),
  result: codec.ArrayCodec(FieldElement$1),
  events: codec.ArrayCodec(codec.NumberCodec),
  messages: codec.ArrayCodec(codec.NumberCodec)
});
const FunctionInvocationCodec = {
  encode(x) {
    const { calls, ...rest } = x;
    const encodedCalls = calls.map(FunctionInvocationCodec.encode);
    const encodedRest = _FunctionInvocationCodec.encode(rest);
    return { calls: encodedCalls, ...encodedRest };
  },
  decode(p) {
    const { calls = [], ...rest } = p;
    const decodedCalls = calls.map(FunctionInvocationCodec.decode);
    const decodedRest = _FunctionInvocationCodec.decode(rest);
    return { ...decodedRest, calls: decodedCalls };
  }
};
const ExecuteInvocationSuccess = FunctionInvocationCodec;
const ExecuteInvocationReverted = codec.MessageCodec({
  reason: codec.OptionalCodec(codec.StringCodec)
});
const InvokeTransactionTrace = codec.MessageCodec({
  validateInvocation: codec.OptionalCodec(FunctionInvocationCodec),
  executeInvocation: codec.RequiredCodec(
    codec.OneOfCodec({
      success: ExecuteInvocationSuccess,
      reverted: ExecuteInvocationReverted
    })
  ),
  feeTransferInvocation: codec.OptionalCodec(FunctionInvocationCodec)
});
const DeclareTransactionTrace = codec.MessageCodec({
  validateInvocation: codec.OptionalCodec(FunctionInvocationCodec),
  feeTransferInvocation: codec.OptionalCodec(FunctionInvocationCodec)
});
const DeployAccountTransactionTrace = codec.MessageCodec({
  validateInvocation: codec.OptionalCodec(FunctionInvocationCodec),
  constructorInvocation: codec.OptionalCodec(FunctionInvocationCodec),
  feeTransferInvocation: codec.OptionalCodec(FunctionInvocationCodec)
});
const L1HandlerTransactionTrace = codec.MessageCodec({
  functionInvocation: codec.OptionalCodec(FunctionInvocationCodec)
});
const TransactionTrace = codec.MessageCodec({
  filterIds: codec.ArrayCodec(codec.NumberCodec),
  transactionIndex: codec.RequiredCodec(codec.NumberCodec),
  transactionHash: codec.RequiredCodec(FieldElement$1),
  traceRoot: codec.RequiredCodec(
    codec.OneOfCodec({
      invoke: InvokeTransactionTrace,
      declare: DeclareTransactionTrace,
      deployAccount: DeployAccountTransactionTrace,
      l1Handler: L1HandlerTransactionTrace
    })
  )
});
const Block = codec.MessageCodec({
  header: codec.RequiredCodec(BlockHeader),
  transactions: codec.ArrayCodec(Transaction),
  receipts: codec.ArrayCodec(TransactionReceipt),
  events: codec.ArrayCodec(Event),
  messages: codec.ArrayCodec(MessageToL1),
  traces: codec.ArrayCodec(TransactionTrace),
  storageDiffs: codec.ArrayCodec(StorageDiff),
  contractChanges: codec.ArrayCodec(ContractChange),
  nonceUpdates: codec.ArrayCodec(NonceUpdate)
});
const BlockFromBytes = {
  encode(x) {
    const block = Block.encode(x);
    return Block$1.encode(block).finish();
  },
  decode(p) {
    const block = Block$1.decode(p);
    return Block.decode(block);
  }
};

const HeaderFilter = {
  encode(x) {
    switch (x) {
      case "always":
        return HeaderFilter$1.ALWAYS;
      case "on_data":
        return HeaderFilter$1.ON_DATA;
      case "on_data_or_on_new_block":
        return HeaderFilter$1.ON_DATA_OR_ON_NEW_BLOCK;
      default:
        return HeaderFilter$1.UNSPECIFIED;
    }
  },
  decode(p) {
    const enumMap = {
      [HeaderFilter$1.ALWAYS]: "always",
      [HeaderFilter$1.ON_DATA]: "on_data",
      [HeaderFilter$1.ON_DATA_OR_ON_NEW_BLOCK]: "on_data_or_on_new_block",
      [HeaderFilter$1.UNSPECIFIED]: "unknown",
      [HeaderFilter$1.UNRECOGNIZED]: "unknown"
    };
    return enumMap[p] ?? "unknown";
  }
};
const Key = {
  encode(x) {
    if (x === null) {
      return { value: void 0 };
    }
    return { value: FieldElement$1.encode(x) };
  },
  decode(p) {
    if (p.value === void 0) {
      return null;
    }
    return FieldElement$1.decode(p.value);
  }
};
const TransactionStatusFilter = {
  encode(x) {
    switch (x) {
      case "succeeded":
        return TransactionStatusFilter$1.SUCCEEDED;
      case "reverted":
        return TransactionStatusFilter$1.REVERTED;
      case "all":
        return TransactionStatusFilter$1.ALL;
      default:
        return TransactionStatusFilter$1.UNSPECIFIED;
    }
  },
  decode(p) {
    const enumMap = {
      [TransactionStatusFilter$1.SUCCEEDED]: "succeeded",
      [TransactionStatusFilter$1.REVERTED]: "reverted",
      [TransactionStatusFilter$1.ALL]: "all",
      [TransactionStatusFilter$1.UNSPECIFIED]: "unknown",
      [TransactionStatusFilter$1.UNRECOGNIZED]: "unknown"
    };
    return enumMap[p] ?? "unknown";
  }
};
const EventFilter = codec.MessageCodec({
  id: codec.OptionalCodec(codec.NumberCodec),
  address: codec.OptionalCodec(FieldElement$1),
  keys: codec.OptionalCodec(codec.ArrayCodec(Key)),
  strict: codec.OptionalCodec(codec.BooleanCodec),
  transactionStatus: codec.OptionalCodec(TransactionStatusFilter),
  includeTransaction: codec.OptionalCodec(codec.BooleanCodec),
  includeReceipt: codec.OptionalCodec(codec.BooleanCodec),
  includeMessages: codec.OptionalCodec(codec.BooleanCodec),
  includeSiblings: codec.OptionalCodec(codec.BooleanCodec),
  includeTransactionTrace: codec.OptionalCodec(codec.BooleanCodec)
});
const MessageToL1Filter = codec.MessageCodec({
  id: codec.OptionalCodec(codec.NumberCodec),
  fromAddress: codec.OptionalCodec(FieldElement$1),
  toAddress: codec.OptionalCodec(FieldElement$1),
  transactionStatus: codec.OptionalCodec(TransactionStatusFilter),
  includeTransaction: codec.OptionalCodec(codec.BooleanCodec),
  includeReceipt: codec.OptionalCodec(codec.BooleanCodec),
  includeEvents: codec.OptionalCodec(codec.BooleanCodec),
  includeTransactionTrace: codec.OptionalCodec(codec.BooleanCodec)
});
const InvokeTransactionV0Filter = codec.MessageCodec({});
const InvokeTransactionV1Filter = codec.MessageCodec({});
const InvokeTransactionV3Filter = codec.MessageCodec({});
const DeployTransactionFilter = codec.MessageCodec({});
const DeclareV0TransactionFilter = codec.MessageCodec({});
const DeclareV1TransactionFilter = codec.MessageCodec({});
const DeclareV2TransactionFilter = codec.MessageCodec({});
const DeclareV3TransactionFilter = codec.MessageCodec({});
const L1HandlerTransactionFilter = codec.MessageCodec({});
const DeployAccountV1TransactionFilter = codec.MessageCodec({});
const DeployAccountV3TransactionFilter = codec.MessageCodec({});
const TransactionFilter = codec.MessageCodec({
  id: codec.OptionalCodec(codec.NumberCodec),
  transactionStatus: codec.OptionalCodec(TransactionStatusFilter),
  includeReceipt: codec.OptionalCodec(codec.BooleanCodec),
  includeMessages: codec.OptionalCodec(codec.BooleanCodec),
  includeEvents: codec.OptionalCodec(codec.BooleanCodec),
  includeTrace: codec.OptionalCodec(codec.BooleanCodec),
  transactionType: codec.OptionalCodec(
    codec.OneOfCodec({
      invokeV0: InvokeTransactionV0Filter,
      invokeV1: InvokeTransactionV1Filter,
      invokeV3: InvokeTransactionV3Filter,
      deploy: DeployTransactionFilter,
      declareV0: DeclareV0TransactionFilter,
      declareV1: DeclareV1TransactionFilter,
      declareV2: DeclareV2TransactionFilter,
      declareV3: DeclareV3TransactionFilter,
      l1Handler: L1HandlerTransactionFilter,
      deployAccountV1: DeployAccountV1TransactionFilter,
      deployAccountV3: DeployAccountV3TransactionFilter
    })
  )
});
const StorageDiffFilter = codec.MessageCodec({
  id: codec.OptionalCodec(codec.NumberCodec),
  contractAddress: codec.OptionalCodec(FieldElement$1)
});
const DeclaredClassFilter = codec.MessageCodec({});
const ReplacedClassFilter = codec.MessageCodec({});
const DeployedContractFilter = codec.MessageCodec({});
const ContractChangeFilter = codec.MessageCodec({
  id: codec.OptionalCodec(codec.NumberCodec),
  change: codec.OptionalCodec(
    codec.OneOfCodec({
      declaredClass: DeclaredClassFilter,
      replacedClass: ReplacedClassFilter,
      deployedContract: DeployedContractFilter
    })
  )
});
const NonceUpdateFilter = codec.MessageCodec({
  id: codec.OptionalCodec(codec.NumberCodec),
  contractAddress: codec.OptionalCodec(FieldElement$1)
});
const Filter = codec.MessageCodec({
  header: codec.OptionalCodec(HeaderFilter),
  transactions: codec.OptionalCodec(codec.ArrayCodec(TransactionFilter)),
  events: codec.OptionalCodec(codec.ArrayCodec(EventFilter)),
  messages: codec.OptionalCodec(codec.ArrayCodec(MessageToL1Filter)),
  storageDiffs: codec.OptionalCodec(codec.ArrayCodec(StorageDiffFilter)),
  contractChanges: codec.OptionalCodec(codec.ArrayCodec(ContractChangeFilter)),
  nonceUpdates: codec.OptionalCodec(codec.ArrayCodec(NonceUpdateFilter))
});
const FilterFromBytes = {
  encode(x) {
    const filter = Filter.encode(x);
    return Filter$1.encode(filter).finish();
  },
  decode(p) {
    const filter = Filter$1.decode(p);
    return Filter.decode(filter);
  }
};
function mergeFilter(a, b) {
  const header = mergeHeaderFilter(a.header, b.header);
  return {
    header,
    transactions: [...a.transactions ?? [], ...b.transactions ?? []],
    events: [...a.events ?? [], ...b.events ?? []],
    messages: [...a.messages ?? [], ...b.messages ?? []],
    storageDiffs: [...a.storageDiffs ?? [], ...b.storageDiffs ?? []],
    contractChanges: [
      ...a.contractChanges ?? [],
      ...b.contractChanges ?? []
    ],
    nonceUpdates: [...a.nonceUpdates ?? [], ...b.nonceUpdates ?? []]
  };
}
function mergeHeaderFilter(a, b) {
  if (a === void 0) {
    return b;
  }
  if (b === void 0) {
    return a;
  }
  if (a === "always" || b === "always") {
    return "always";
  }
  if (a === "on_data_or_on_new_block" || b === "on_data_or_on_new_block") {
    return "on_data_or_on_new_block";
  }
  return "on_data";
}

function getReceipt(transactionIndex, params) {
  const receipts = "receipts" in params ? params.receipts : params;
  return binarySearch(
    transactionIndex,
    receipts,
    (receipt) => receipt.meta?.transactionIndex ?? 0
  );
}
function getTransaction(transactionIndex, params) {
  const transactions = "transactions" in params ? params.transactions : params;
  return binarySearch(
    transactionIndex,
    transactions,
    (transaction) => transaction.meta?.transactionIndex ?? 0
  );
}
function binarySearch(index, arr, getIndex) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const item = arr[mid];
    const itemIndex = getIndex(item);
    if (itemIndex === index) {
      return item;
    }
    if (itemIndex < index) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

function getBigIntSelector(name) {
  const asBytes = new TextEncoder().encode(name);
  return starknet.keccak(asBytes);
}
function getSelector(name) {
  const bn = getBigIntSelector(name);
  return `0x${bn.toString(16).padStart(64, "0")}`;
}
function getEventSelector(name) {
  const parts = name.split("::");
  return getSelector(parts[parts.length - 1]);
}
const PrimitiveTypeParsers = {
  "core::bool": parser.parseBool,
  "core::felt252": parser.parseFelt252,
  "core::integer::u8": parser.parseU8,
  "core::integer::u16": parser.parseU16,
  "core::integer::u32": parser.parseU32,
  "core::integer::u64": parser.parseU64,
  "core::integer::u128": parser.parseU128,
  "core::integer::u256": parser.parseU256,
  "core::bytes_31::bytes31": parser.parseBytes31,
  "core::starknet::contract_address::ContractAddress": parser.parseContractAddress
};
function isPrimitiveType(type) {
  return type in PrimitiveTypeParsers;
}
function isArrayType(type) {
  return type.startsWith("core::array::Array::<") && type.endsWith(">");
}
function getArrayElementType(type) {
  return type.slice("core::array::Array::<".length, -1);
}
function isSpanType(type) {
  return type.startsWith("core::array::Span::<") && type.endsWith(">");
}
function getSpanType(type) {
  return type.slice("core::array::Span::<".length, -1);
}
function isOptionType(type) {
  return type.startsWith("core::option::Option::<") && type.endsWith(">");
}
function getOptionType(type) {
  return type.slice("core::option::Option::<".length, -1);
}
function isEmptyType(type) {
  return type === "()";
}
function isByteArray(type) {
  return type === "core::byte_array::ByteArray";
}

function isEventAbi(item) {
  return item.type === "event";
}
function isStructEventAbi(item) {
  return isEventAbi(item) && item.kind === "struct";
}
function isEnumEventAbi(item) {
  return isEventAbi(item) && item.kind === "enum";
}

class DecodeEventError extends Error {
  constructor(message) {
    super(message);
    this.name = "DecodeEventError";
  }
}
function decodeEvent(args) {
  const { abi, event, eventName, strict = true } = args;
  const eventAbi = abi.find(
    (item) => item.name === eventName && item.type === "event"
  );
  if (!eventAbi || !isEventAbi(eventAbi)) {
    if (strict) {
      throw new DecodeEventError(`Event ${eventName} not found in ABI`);
    }
    return null;
  }
  try {
    if (isStructEventAbi(eventAbi)) {
      return decodeStructEvent(abi, eventAbi, event, eventName);
    }
    if (isEnumEventAbi(eventAbi)) {
      return decodeEnumEvent(abi, eventAbi, event, eventName);
    }
    throw new DecodeEventError(
      `Unsupported event kind: ${eventAbi?.kind}`
    );
  } catch (error) {
    if ((error instanceof DecodeEventError || error instanceof parser.ParseError) && !strict) {
      return null;
    }
    throw error;
  }
}
function decodeStructEvent(abi, eventAbi, event, eventName) {
  const selector = BigInt(getEventSelector(eventName));
  if (event.keys && selector !== BigInt(event.keys[0]) || !event.keys) {
    throw new DecodeEventError(
      `Selector mismatch. Expected ${selector}, got ${event.keys?.[0]}`
    );
  }
  const keysAbi = eventAbi.members.filter((m) => m.kind === "key");
  const dataAbi = eventAbi.members.filter((m) => m.kind === "data");
  const keysParser = compileEventMembers(abi, keysAbi);
  const dataParser = compileEventMembers(abi, dataAbi);
  const keysWithoutSelector = event.keys?.slice(1) ?? [];
  const { out: decodedKeys } = keysParser(keysWithoutSelector, 0);
  const { out: decodedData } = dataParser(event.data ?? [], 0);
  const decoded = {
    ...decodedKeys,
    ...decodedData
  };
  return {
    ...event,
    eventName,
    args: decoded
  };
}
function decodeEnumEvent(abi, eventAbi, event, eventName) {
  if (!event.keys || event.keys.length === 0) {
    throw new DecodeEventError(
      "Event has no keys; cannot determine variant selector"
    );
  }
  const variants = eventAbi.variants;
  const variantSelector = event.keys[0];
  const selectorToVariant = buildVariantSelectorMap(abi, variants);
  const matchingVariant = selectorToVariant[variantSelector];
  if (!matchingVariant) {
    throw new DecodeEventError(
      `No matching variant found for selector: ${variantSelector}`
    );
  }
  const structEventAbi = abi.find(
    (item) => item.name === matchingVariant.variant.type && item.type === "event"
  );
  if (!structEventAbi || !isStructEventAbi(structEventAbi)) {
    throw new DecodeEventError(
      `Nested event type not found or not a struct: ${matchingVariant.variant.type}`
    );
  }
  const decodedStruct = decodeStructEvent(
    abi,
    structEventAbi,
    event,
    matchingVariant.variant.name
  );
  return {
    ...event,
    eventName,
    args: {
      _tag: matchingVariant.variant.name,
      [matchingVariant.variant.name]: decodedStruct.args
    }
  };
}
function buildVariantSelectorMap(abi, variants) {
  const selectorMap = {};
  for (const variant of variants) {
    if (variant.kind === "nested") {
      const selector = getEventSelector(variant.name);
      selectorMap[selector] = { variant, path: [variant.name] };
    } else if (variant.kind === "flat") {
      const flatEventName = variant.type;
      const flatEventAbi = abi.find(
        (item) => item.name === flatEventName && item.type === "event"
      );
      if (!flatEventAbi) {
        continue;
      }
      if (isEnumEventAbi(flatEventAbi)) {
        const nestedMap = buildVariantSelectorMap(abi, flatEventAbi.variants);
        for (const [
          nestedSelector,
          { variant: nestedVariant, path: nestedPath }
        ] of Object.entries(nestedMap)) {
          selectorMap[nestedSelector] = {
            variant: nestedVariant,
            path: [variant.name, ...nestedPath]
          };
        }
      }
    }
  }
  return selectorMap;
}
function compileEventMembers(abi, members) {
  return compileStructParser(abi, members);
}
function compileTypeParser(abi, type) {
  if (isPrimitiveType(type)) {
    return PrimitiveTypeParsers[type];
  }
  if (isArrayType(type)) {
    const elementType = getArrayElementType(type);
    return parser.parseArray(compileTypeParser(abi, elementType));
  }
  if (isSpanType(type)) {
    const elementType = getSpanType(type);
    return parser.parseSpan(compileTypeParser(abi, elementType));
  }
  if (isOptionType(type)) {
    const elementType = getOptionType(type);
    return parser.parseOption(compileTypeParser(abi, elementType));
  }
  if (isEmptyType(type)) {
    return parser.parseEmpty;
  }
  if (isByteArray(type)) {
    return parser.parseByteArray;
  }
  const typeAbi = abi.find((item) => item.name === type);
  if (!typeAbi) {
    throw new DecodeEventError(`Type ${type} not found in ABI`);
  }
  switch (typeAbi.type) {
    case "struct": {
      return compileStructParser(abi, typeAbi.members);
    }
    case "enum": {
      return compileEnumParser(abi, typeAbi);
    }
    default:
      throw new DecodeEventError(`Invalid type ${typeAbi.type}`);
  }
}
function compileStructParser(abi, members) {
  const parsers = {};
  for (const [index, member] of members.entries()) {
    parsers[member.name] = {
      index,
      parser: compileTypeParser(abi, member.type)
    };
  }
  return parser.parseStruct(parsers);
}
function compileEnumParser(abi, enumAbi) {
  const parsers = {};
  for (const [index, variant] of enumAbi.variants.entries()) {
    parsers[variant.name] = {
      index,
      parser: compileTypeParser(abi, variant.type)
    };
  }
  return parser.parseEnum(parsers);
}

const StarknetStream = new protocol.StreamConfig(
  FilterFromBytes,
  BlockFromBytes,
  mergeFilter,
  "starknet"
);

exports.Block = Block;
exports.BlockFromBytes = BlockFromBytes;
exports.BlockHeader = BlockHeader;
exports.CallType = CallType;
exports.ComputationResources = ComputationResources;
exports.ContractChange = ContractChange;
exports.ContractChangeFilter = ContractChangeFilter;
exports.DataAvailabilityMode = DataAvailabilityMode;
exports.DataAvailabilityResources = DataAvailabilityResources;
exports.DeclareTransactionReceipt = DeclareTransactionReceipt;
exports.DeclareTransactionTrace = DeclareTransactionTrace;
exports.DeclareTransactionV0 = DeclareTransactionV0;
exports.DeclareTransactionV1 = DeclareTransactionV1;
exports.DeclareTransactionV2 = DeclareTransactionV2;
exports.DeclareTransactionV3 = DeclareTransactionV3;
exports.DeclareV0TransactionFilter = DeclareV0TransactionFilter;
exports.DeclareV1TransactionFilter = DeclareV1TransactionFilter;
exports.DeclareV2TransactionFilter = DeclareV2TransactionFilter;
exports.DeclareV3TransactionFilter = DeclareV3TransactionFilter;
exports.DeclaredClass = DeclaredClass;
exports.DeclaredClassFilter = DeclaredClassFilter;
exports.DecodeEventError = DecodeEventError;
exports.DeployAccountTransactionReceipt = DeployAccountTransactionReceipt;
exports.DeployAccountTransactionTrace = DeployAccountTransactionTrace;
exports.DeployAccountTransactionV1 = DeployAccountTransactionV1;
exports.DeployAccountTransactionV3 = DeployAccountTransactionV3;
exports.DeployAccountV1TransactionFilter = DeployAccountV1TransactionFilter;
exports.DeployAccountV3TransactionFilter = DeployAccountV3TransactionFilter;
exports.DeployTransaction = DeployTransaction;
exports.DeployTransactionFilter = DeployTransactionFilter;
exports.DeployTransactionReceipt = DeployTransactionReceipt;
exports.DeployedContract = DeployedContract;
exports.DeployedContractFilter = DeployedContractFilter;
exports.Event = Event;
exports.EventFilter = EventFilter;
exports.ExecuteInvocationReverted = ExecuteInvocationReverted;
exports.ExecuteInvocationSuccess = ExecuteInvocationSuccess;
exports.ExecutionResources = ExecutionResources;
exports.ExecutionReverted = ExecutionReverted;
exports.ExecutionSucceeded = ExecutionSucceeded;
exports.FeePayment = FeePayment;
exports.FieldElement = FieldElement$1;
exports.Filter = Filter;
exports.FilterFromBytes = FilterFromBytes;
exports.HeaderFilter = HeaderFilter;
exports.InvokeTransactionReceipt = InvokeTransactionReceipt;
exports.InvokeTransactionTrace = InvokeTransactionTrace;
exports.InvokeTransactionV0 = InvokeTransactionV0;
exports.InvokeTransactionV0Filter = InvokeTransactionV0Filter;
exports.InvokeTransactionV1 = InvokeTransactionV1;
exports.InvokeTransactionV1Filter = InvokeTransactionV1Filter;
exports.InvokeTransactionV3 = InvokeTransactionV3;
exports.InvokeTransactionV3Filter = InvokeTransactionV3Filter;
exports.Key = Key;
exports.L1DataAvailabilityMode = L1DataAvailabilityMode;
exports.L1HandlerTransaction = L1HandlerTransaction;
exports.L1HandlerTransactionFilter = L1HandlerTransactionFilter;
exports.L1HandlerTransactionReceipt = L1HandlerTransactionReceipt;
exports.L1HandlerTransactionTrace = L1HandlerTransactionTrace;
exports.MessageToL1 = MessageToL1;
exports.MessageToL1Filter = MessageToL1Filter;
exports.NonceUpdate = NonceUpdate;
exports.NonceUpdateFilter = NonceUpdateFilter;
exports.PriceUnit = PriceUnit;
exports.ReplacedClass = ReplacedClass;
exports.ReplacedClassFilter = ReplacedClassFilter;
exports.ResourceBounds = ResourceBounds;
exports.ResourceBoundsMapping = ResourceBoundsMapping;
exports.ResourcePrice = ResourcePrice;
exports.StarknetStream = StarknetStream;
exports.StorageDiff = StorageDiff;
exports.StorageDiffFilter = StorageDiffFilter;
exports.StorageEntry = StorageEntry;
exports.Transaction = Transaction;
exports.TransactionFilter = TransactionFilter;
exports.TransactionMeta = TransactionMeta;
exports.TransactionReceipt = TransactionReceipt;
exports.TransactionReceiptMeta = TransactionReceiptMeta;
exports.TransactionStatus = TransactionStatus;
exports.TransactionStatusFilter = TransactionStatusFilter;
exports.TransactionTrace = TransactionTrace;
exports.U128 = U128;
exports.decodeEvent = decodeEvent;
exports.getBigIntSelector = getBigIntSelector;
exports.getEventSelector = getEventSelector;
exports.getReceipt = getReceipt;
exports.getSelector = getSelector;
exports.getTransaction = getTransaction;
exports.mergeFilter = mergeFilter;
exports.proto = index;
//# sourceMappingURL=index.cjs.map
