import _m0 from 'protobufjs/minimal.js';
import { MessageCodec, BigIntCodec, NumberCodec, OptionalCodec, MutableArrayCodec, UndefinedCodec, StringCodec, OneOfCodec, ArrayCodec } from '../codec.mjs';
import { toHex, hexToBytes } from 'viem';
import Long from 'long';

function createBaseDuration() {
  return { seconds: BigInt("0"), nanos: 0 };
}
const Duration = {
  encode(message, writer = _m0.Writer.create()) {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDuration();
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
    return Duration.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDuration();
    message.seconds = object.seconds ?? BigInt("0");
    message.nanos = object.nanos ?? 0;
    return message;
  }
};
function longToBigint$1(long) {
  return BigInt(long.toString());
}
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;
  _m0.configure();
}
function isSet$2(value) {
  return value !== null && value !== void 0;
}

const protobufPackage$1 = "dna.v2.stream";
var DataFinality$1 = /* @__PURE__ */ ((DataFinality2) => {
  DataFinality2[DataFinality2["UNKNOWN"] = 0] = "UNKNOWN";
  DataFinality2[DataFinality2["PENDING"] = 1] = "PENDING";
  DataFinality2[DataFinality2["ACCEPTED"] = 2] = "ACCEPTED";
  DataFinality2[DataFinality2["FINALIZED"] = 3] = "FINALIZED";
  DataFinality2[DataFinality2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return DataFinality2;
})(DataFinality$1 || {});
function dataFinalityFromJSON(object) {
  switch (object) {
    case 0:
    case "DATA_FINALITY_UNKNOWN":
      return 0 /* UNKNOWN */;
    case 1:
    case "DATA_FINALITY_PENDING":
      return 1 /* PENDING */;
    case 2:
    case "DATA_FINALITY_ACCEPTED":
      return 2 /* ACCEPTED */;
    case 3:
    case "DATA_FINALITY_FINALIZED":
      return 3 /* FINALIZED */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function dataFinalityToJSON(object) {
  switch (object) {
    case 0 /* UNKNOWN */:
      return "DATA_FINALITY_UNKNOWN";
    case 1 /* PENDING */:
      return "DATA_FINALITY_PENDING";
    case 2 /* ACCEPTED */:
      return "DATA_FINALITY_ACCEPTED";
    case 3 /* FINALIZED */:
      return "DATA_FINALITY_FINALIZED";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var DataProduction$1 = /* @__PURE__ */ ((DataProduction2) => {
  DataProduction2[DataProduction2["UNKNOWN"] = 0] = "UNKNOWN";
  DataProduction2[DataProduction2["BACKFILL"] = 1] = "BACKFILL";
  DataProduction2[DataProduction2["LIVE"] = 2] = "LIVE";
  DataProduction2[DataProduction2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return DataProduction2;
})(DataProduction$1 || {});
function dataProductionFromJSON(object) {
  switch (object) {
    case 0:
    case "DATA_PRODUCTION_UNKNOWN":
      return 0 /* UNKNOWN */;
    case 1:
    case "DATA_PRODUCTION_BACKFILL":
      return 1 /* BACKFILL */;
    case 2:
    case "DATA_PRODUCTION_LIVE":
      return 2 /* LIVE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function dataProductionToJSON(object) {
  switch (object) {
    case 0 /* UNKNOWN */:
      return "DATA_PRODUCTION_UNKNOWN";
    case 1 /* BACKFILL */:
      return "DATA_PRODUCTION_BACKFILL";
    case 2 /* LIVE */:
      return "DATA_PRODUCTION_LIVE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseCursor() {
  return { orderKey: BigInt("0"), uniqueKey: new Uint8Array(0) };
}
const Cursor$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.orderKey !== void 0 && message.orderKey !== BigInt("0")) {
      if (BigInt.asUintN(64, message.orderKey) !== message.orderKey) {
        throw new globalThis.Error("value provided for field message.orderKey of type uint64 too large");
      }
      writer.uint32(8).uint64(message.orderKey.toString());
    }
    if (message.uniqueKey !== void 0 && message.uniqueKey.length !== 0) {
      writer.uint32(18).bytes(message.uniqueKey);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCursor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.orderKey = longToBigint(reader.uint64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.uniqueKey = reader.bytes();
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
      orderKey: isSet$1(object.orderKey) ? BigInt(object.orderKey) : BigInt("0"),
      uniqueKey: isSet$1(object.uniqueKey) ? bytesFromBase64(object.uniqueKey) : new Uint8Array(0)
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.orderKey !== void 0 && message.orderKey !== BigInt("0")) {
      obj.orderKey = message.orderKey.toString();
    }
    if (message.uniqueKey !== void 0 && message.uniqueKey.length !== 0) {
      obj.uniqueKey = base64FromBytes(message.uniqueKey);
    }
    return obj;
  },
  create(base) {
    return Cursor$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseCursor();
    message.orderKey = object.orderKey ?? BigInt("0");
    message.uniqueKey = object.uniqueKey ?? new Uint8Array(0);
    return message;
  }
};
function createBaseStatusRequest() {
  return {};
}
const StatusRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();
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
    return StatusRequest.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseStatusRequest();
    return message;
  }
};
function createBaseStatusResponse() {
  return { currentHead: void 0, lastIngested: void 0, finalized: void 0, starting: void 0 };
}
const StatusResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.currentHead !== void 0) {
      Cursor$1.encode(message.currentHead, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastIngested !== void 0) {
      Cursor$1.encode(message.lastIngested, writer.uint32(18).fork()).ldelim();
    }
    if (message.finalized !== void 0) {
      Cursor$1.encode(message.finalized, writer.uint32(26).fork()).ldelim();
    }
    if (message.starting !== void 0) {
      Cursor$1.encode(message.starting, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.currentHead = Cursor$1.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.lastIngested = Cursor$1.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.finalized = Cursor$1.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.starting = Cursor$1.decode(reader, reader.uint32());
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
      currentHead: isSet$1(object.currentHead) ? Cursor$1.fromJSON(object.currentHead) : void 0,
      lastIngested: isSet$1(object.lastIngested) ? Cursor$1.fromJSON(object.lastIngested) : void 0,
      finalized: isSet$1(object.finalized) ? Cursor$1.fromJSON(object.finalized) : void 0,
      starting: isSet$1(object.starting) ? Cursor$1.fromJSON(object.starting) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.currentHead !== void 0) {
      obj.currentHead = Cursor$1.toJSON(message.currentHead);
    }
    if (message.lastIngested !== void 0) {
      obj.lastIngested = Cursor$1.toJSON(message.lastIngested);
    }
    if (message.finalized !== void 0) {
      obj.finalized = Cursor$1.toJSON(message.finalized);
    }
    if (message.starting !== void 0) {
      obj.starting = Cursor$1.toJSON(message.starting);
    }
    return obj;
  },
  create(base) {
    return StatusResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseStatusResponse();
    message.currentHead = object.currentHead !== void 0 && object.currentHead !== null ? Cursor$1.fromPartial(object.currentHead) : void 0;
    message.lastIngested = object.lastIngested !== void 0 && object.lastIngested !== null ? Cursor$1.fromPartial(object.lastIngested) : void 0;
    message.finalized = object.finalized !== void 0 && object.finalized !== null ? Cursor$1.fromPartial(object.finalized) : void 0;
    message.starting = object.starting !== void 0 && object.starting !== null ? Cursor$1.fromPartial(object.starting) : void 0;
    return message;
  }
};
function createBaseStreamDataRequest() {
  return { startingCursor: void 0, finality: void 0, filter: [], heartbeatInterval: void 0 };
}
const StreamDataRequest$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.startingCursor !== void 0) {
      Cursor$1.encode(message.startingCursor, writer.uint32(10).fork()).ldelim();
    }
    if (message.finality !== void 0) {
      writer.uint32(16).int32(message.finality);
    }
    if (message.filter !== void 0 && message.filter.length !== 0) {
      for (const v of message.filter) {
        writer.uint32(26).bytes(v);
      }
    }
    if (message.heartbeatInterval !== void 0) {
      Duration.encode(message.heartbeatInterval, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStreamDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.startingCursor = Cursor$1.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.finality = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.filter.push(reader.bytes());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.heartbeatInterval = Duration.decode(reader, reader.uint32());
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
      startingCursor: isSet$1(object.startingCursor) ? Cursor$1.fromJSON(object.startingCursor) : void 0,
      finality: isSet$1(object.finality) ? dataFinalityFromJSON(object.finality) : void 0,
      filter: globalThis.Array.isArray(object?.filter) ? object.filter.map((e) => bytesFromBase64(e)) : [],
      heartbeatInterval: isSet$1(object.heartbeatInterval) ? Duration.fromJSON(object.heartbeatInterval) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.startingCursor !== void 0) {
      obj.startingCursor = Cursor$1.toJSON(message.startingCursor);
    }
    if (message.finality !== void 0) {
      obj.finality = dataFinalityToJSON(message.finality);
    }
    if (message.filter?.length) {
      obj.filter = message.filter.map((e) => base64FromBytes(e));
    }
    if (message.heartbeatInterval !== void 0) {
      obj.heartbeatInterval = Duration.toJSON(message.heartbeatInterval);
    }
    return obj;
  },
  create(base) {
    return StreamDataRequest$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseStreamDataRequest();
    message.startingCursor = object.startingCursor !== void 0 && object.startingCursor !== null ? Cursor$1.fromPartial(object.startingCursor) : void 0;
    message.finality = object.finality ?? void 0;
    message.filter = object.filter?.map((e) => e) || [];
    message.heartbeatInterval = object.heartbeatInterval !== void 0 && object.heartbeatInterval !== null ? Duration.fromPartial(object.heartbeatInterval) : void 0;
    return message;
  }
};
function createBaseStreamDataResponse() {
  return { message: void 0 };
}
const StreamDataResponse$1 = {
  encode(message, writer = _m0.Writer.create()) {
    switch (message.message?.$case) {
      case "data":
        Data$1.encode(message.message.data, writer.uint32(10).fork()).ldelim();
        break;
      case "invalidate":
        Invalidate$1.encode(message.message.invalidate, writer.uint32(18).fork()).ldelim();
        break;
      case "finalize":
        Finalize$1.encode(message.message.finalize, writer.uint32(26).fork()).ldelim();
        break;
      case "heartbeat":
        Heartbeat$1.encode(message.message.heartbeat, writer.uint32(34).fork()).ldelim();
        break;
      case "systemMessage":
        SystemMessage$1.encode(message.message.systemMessage, writer.uint32(42).fork()).ldelim();
        break;
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStreamDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.message = { $case: "data", data: Data$1.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.message = { $case: "invalidate", invalidate: Invalidate$1.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.message = { $case: "finalize", finalize: Finalize$1.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.message = { $case: "heartbeat", heartbeat: Heartbeat$1.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.message = { $case: "systemMessage", systemMessage: SystemMessage$1.decode(reader, reader.uint32()) };
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
      message: isSet$1(object.data) ? { $case: "data", data: Data$1.fromJSON(object.data) } : isSet$1(object.invalidate) ? { $case: "invalidate", invalidate: Invalidate$1.fromJSON(object.invalidate) } : isSet$1(object.finalize) ? { $case: "finalize", finalize: Finalize$1.fromJSON(object.finalize) } : isSet$1(object.heartbeat) ? { $case: "heartbeat", heartbeat: Heartbeat$1.fromJSON(object.heartbeat) } : isSet$1(object.systemMessage) ? { $case: "systemMessage", systemMessage: SystemMessage$1.fromJSON(object.systemMessage) } : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.message?.$case === "data") {
      obj.data = Data$1.toJSON(message.message.data);
    }
    if (message.message?.$case === "invalidate") {
      obj.invalidate = Invalidate$1.toJSON(message.message.invalidate);
    }
    if (message.message?.$case === "finalize") {
      obj.finalize = Finalize$1.toJSON(message.message.finalize);
    }
    if (message.message?.$case === "heartbeat") {
      obj.heartbeat = Heartbeat$1.toJSON(message.message.heartbeat);
    }
    if (message.message?.$case === "systemMessage") {
      obj.systemMessage = SystemMessage$1.toJSON(message.message.systemMessage);
    }
    return obj;
  },
  create(base) {
    return StreamDataResponse$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseStreamDataResponse();
    if (object.message?.$case === "data" && object.message?.data !== void 0 && object.message?.data !== null) {
      message.message = { $case: "data", data: Data$1.fromPartial(object.message.data) };
    }
    if (object.message?.$case === "invalidate" && object.message?.invalidate !== void 0 && object.message?.invalidate !== null) {
      message.message = { $case: "invalidate", invalidate: Invalidate$1.fromPartial(object.message.invalidate) };
    }
    if (object.message?.$case === "finalize" && object.message?.finalize !== void 0 && object.message?.finalize !== null) {
      message.message = { $case: "finalize", finalize: Finalize$1.fromPartial(object.message.finalize) };
    }
    if (object.message?.$case === "heartbeat" && object.message?.heartbeat !== void 0 && object.message?.heartbeat !== null) {
      message.message = { $case: "heartbeat", heartbeat: Heartbeat$1.fromPartial(object.message.heartbeat) };
    }
    if (object.message?.$case === "systemMessage" && object.message?.systemMessage !== void 0 && object.message?.systemMessage !== null) {
      message.message = {
        $case: "systemMessage",
        systemMessage: SystemMessage$1.fromPartial(object.message.systemMessage)
      };
    }
    return message;
  }
};
function createBaseInvalidate() {
  return { cursor: void 0, removed: [] };
}
const Invalidate$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.cursor !== void 0) {
      Cursor$1.encode(message.cursor, writer.uint32(10).fork()).ldelim();
    }
    if (message.removed !== void 0 && message.removed.length !== 0) {
      for (const v of message.removed) {
        Cursor$1.encode(v, writer.uint32(18).fork()).ldelim();
      }
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInvalidate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.cursor = Cursor$1.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.removed.push(Cursor$1.decode(reader, reader.uint32()));
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
      cursor: isSet$1(object.cursor) ? Cursor$1.fromJSON(object.cursor) : void 0,
      removed: globalThis.Array.isArray(object?.removed) ? object.removed.map((e) => Cursor$1.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.cursor !== void 0) {
      obj.cursor = Cursor$1.toJSON(message.cursor);
    }
    if (message.removed?.length) {
      obj.removed = message.removed.map((e) => Cursor$1.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return Invalidate$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseInvalidate();
    message.cursor = object.cursor !== void 0 && object.cursor !== null ? Cursor$1.fromPartial(object.cursor) : void 0;
    message.removed = object.removed?.map((e) => Cursor$1.fromPartial(e)) || [];
    return message;
  }
};
function createBaseFinalize() {
  return { cursor: void 0 };
}
const Finalize$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.cursor !== void 0) {
      Cursor$1.encode(message.cursor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFinalize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.cursor = Cursor$1.decode(reader, reader.uint32());
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
    return { cursor: isSet$1(object.cursor) ? Cursor$1.fromJSON(object.cursor) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.cursor !== void 0) {
      obj.cursor = Cursor$1.toJSON(message.cursor);
    }
    return obj;
  },
  create(base) {
    return Finalize$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseFinalize();
    message.cursor = object.cursor !== void 0 && object.cursor !== null ? Cursor$1.fromPartial(object.cursor) : void 0;
    return message;
  }
};
function createBaseData() {
  return { cursor: void 0, endCursor: void 0, finality: 0, data: [], production: 0 };
}
const Data$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.cursor !== void 0) {
      Cursor$1.encode(message.cursor, writer.uint32(10).fork()).ldelim();
    }
    if (message.endCursor !== void 0) {
      Cursor$1.encode(message.endCursor, writer.uint32(18).fork()).ldelim();
    }
    if (message.finality !== void 0 && message.finality !== 0) {
      writer.uint32(24).int32(message.finality);
    }
    if (message.data !== void 0 && message.data.length !== 0) {
      for (const v of message.data) {
        writer.uint32(34).bytes(v);
      }
    }
    if (message.production !== void 0 && message.production !== 0) {
      writer.uint32(40).int32(message.production);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.cursor = Cursor$1.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.endCursor = Cursor$1.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.finality = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.data.push(reader.bytes());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.production = reader.int32();
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
      cursor: isSet$1(object.cursor) ? Cursor$1.fromJSON(object.cursor) : void 0,
      endCursor: isSet$1(object.endCursor) ? Cursor$1.fromJSON(object.endCursor) : void 0,
      finality: isSet$1(object.finality) ? dataFinalityFromJSON(object.finality) : 0,
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e) => bytesFromBase64(e)) : [],
      production: isSet$1(object.production) ? dataProductionFromJSON(object.production) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.cursor !== void 0) {
      obj.cursor = Cursor$1.toJSON(message.cursor);
    }
    if (message.endCursor !== void 0) {
      obj.endCursor = Cursor$1.toJSON(message.endCursor);
    }
    if (message.finality !== void 0 && message.finality !== 0) {
      obj.finality = dataFinalityToJSON(message.finality);
    }
    if (message.data?.length) {
      obj.data = message.data.map((e) => base64FromBytes(e));
    }
    if (message.production !== void 0 && message.production !== 0) {
      obj.production = dataProductionToJSON(message.production);
    }
    return obj;
  },
  create(base) {
    return Data$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseData();
    message.cursor = object.cursor !== void 0 && object.cursor !== null ? Cursor$1.fromPartial(object.cursor) : void 0;
    message.endCursor = object.endCursor !== void 0 && object.endCursor !== null ? Cursor$1.fromPartial(object.endCursor) : void 0;
    message.finality = object.finality ?? 0;
    message.data = object.data?.map((e) => e) || [];
    message.production = object.production ?? 0;
    return message;
  }
};
function createBaseHeartbeat() {
  return {};
}
const Heartbeat$1 = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHeartbeat();
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
    return Heartbeat$1.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseHeartbeat();
    return message;
  }
};
function createBaseSystemMessage() {
  return { output: void 0 };
}
const SystemMessage$1 = {
  encode(message, writer = _m0.Writer.create()) {
    switch (message.output?.$case) {
      case "stdout":
        writer.uint32(10).string(message.output.stdout);
        break;
      case "stderr":
        writer.uint32(18).string(message.output.stderr);
        break;
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSystemMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.output = { $case: "stdout", stdout: reader.string() };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.output = { $case: "stderr", stderr: reader.string() };
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
      output: isSet$1(object.stdout) ? { $case: "stdout", stdout: globalThis.String(object.stdout) } : isSet$1(object.stderr) ? { $case: "stderr", stderr: globalThis.String(object.stderr) } : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.output?.$case === "stdout") {
      obj.stdout = message.output.stdout;
    }
    if (message.output?.$case === "stderr") {
      obj.stderr = message.output.stderr;
    }
    return obj;
  },
  create(base) {
    return SystemMessage$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseSystemMessage();
    if (object.output?.$case === "stdout" && object.output?.stdout !== void 0 && object.output?.stdout !== null) {
      message.output = { $case: "stdout", stdout: object.output.stdout };
    }
    if (object.output?.$case === "stderr" && object.output?.stderr !== void 0 && object.output?.stderr !== null) {
      message.output = { $case: "stderr", stderr: object.output.stderr };
    }
    return message;
  }
};
const DnaStreamDefinition = {
  name: "DnaStream",
  fullName: "dna.v2.stream.DnaStream",
  methods: {
    /** Stream data from the server. */
    streamData: {
      name: "StreamData",
      requestType: StreamDataRequest$1,
      requestStream: false,
      responseType: StreamDataResponse$1,
      responseStream: true,
      options: {}
    },
    /** Get DNA server status. */
    status: {
      name: "Status",
      requestType: StatusRequest,
      requestStream: false,
      responseType: StatusResponse,
      responseStream: false,
      options: {}
    }
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
function longToBigint(long) {
  return BigInt(long.toString());
}
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;
  _m0.configure();
}
function isSet$1(value) {
  return value !== null && value !== void 0;
}

const stream = {
  __proto__: null,
  Cursor: Cursor$1,
  Data: Data$1,
  DataFinality: DataFinality$1,
  DataProduction: DataProduction$1,
  DnaStreamDefinition: DnaStreamDefinition,
  Finalize: Finalize$1,
  Heartbeat: Heartbeat$1,
  Invalidate: Invalidate$1,
  StatusRequest: StatusRequest,
  StatusResponse: StatusResponse,
  StreamDataRequest: StreamDataRequest$1,
  StreamDataResponse: StreamDataResponse$1,
  SystemMessage: SystemMessage$1,
  dataFinalityFromJSON: dataFinalityFromJSON,
  dataFinalityToJSON: dataFinalityToJSON,
  dataProductionFromJSON: dataProductionFromJSON,
  dataProductionToJSON: dataProductionToJSON,
  protobufPackage: protobufPackage$1
};

const protobufPackage = "dna.v2.testing";
function createBaseMockFilter() {
  return { filter: void 0 };
}
const MockFilter = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.filter !== void 0) {
      writer.uint32(10).string(message.filter);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMockFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.filter = reader.string();
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
    return { filter: isSet(object.filter) ? globalThis.String(object.filter) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.filter !== void 0) {
      obj.filter = message.filter;
    }
    return obj;
  },
  create(base) {
    return MockFilter.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseMockFilter();
    message.filter = object.filter ?? void 0;
    return message;
  }
};
function createBaseMockBlock() {
  return { data: void 0 };
}
const MockBlock = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data !== void 0) {
      writer.uint32(10).string(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMockBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.data = reader.string();
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
    return { data: isSet(object.data) ? globalThis.String(object.data) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.data !== void 0) {
      obj.data = message.data;
    }
    return obj;
  },
  create(base) {
    return MockBlock.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseMockBlock();
    message.data = object.data ?? void 0;
    return message;
  }
};
function isSet(value) {
  return value !== null && value !== void 0;
}

const testing = {
  __proto__: null,
  MockBlock: MockBlock,
  MockFilter: MockFilter,
  protobufPackage: protobufPackage
};

const BytesFromUint8Array = {
  decode(value) {
    if (!value || value?.length === 0) {
      return void 0;
    }
    return toHex(value);
  },
  encode(value) {
    if (value === void 0) {
      return new Uint8Array(0);
    }
    return hexToBytes(value);
  }
};
const Cursor = {
  decode(value) {
    const { orderKey, uniqueKey } = value;
    return {
      orderKey: orderKey ?? 0n,
      uniqueKey: BytesFromUint8Array.decode(uniqueKey)
    };
  },
  encode(value) {
    const { orderKey, uniqueKey } = value;
    return {
      orderKey,
      uniqueKey: BytesFromUint8Array.encode(uniqueKey)
    };
  }
};
const createCursor = (props) => props;
const CursorFromBytes = {
  encode(value) {
    const { orderKey, uniqueKey } = value;
    return Cursor$1.encode({
      orderKey,
      uniqueKey: BytesFromUint8Array.encode(uniqueKey)
    }).finish();
  },
  decode(value) {
    const { orderKey, uniqueKey } = Cursor$1.decode(value);
    return {
      orderKey: orderKey ?? 0n,
      uniqueKey: BytesFromUint8Array.decode(uniqueKey)
    };
  }
};
function isCursor(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const { orderKey, uniqueKey } = value;
  return typeof orderKey === "bigint" && (uniqueKey === null || uniqueKey === void 0 || typeof uniqueKey === "string" && uniqueKey.startsWith("0x"));
}
function normalizeCursor(cursor) {
  if (cursor.uniqueKey !== null && cursor.uniqueKey.length > 0) {
    const uniqueKey = cursor.uniqueKey;
    return {
      orderKey: BigInt(cursor.orderKey),
      uniqueKey
    };
  }
  return {
    orderKey: BigInt(cursor.orderKey)
  };
}

const DataFinality = {
  encode(x) {
    const enumMap = {
      finalized: DataFinality$1.FINALIZED,
      accepted: DataFinality$1.ACCEPTED,
      pending: DataFinality$1.PENDING,
      unknown: DataFinality$1.UNKNOWN
    };
    return enumMap[x] ?? DataFinality$1.UNKNOWN;
  },
  decode(p) {
    const enumMap = {
      [DataFinality$1.FINALIZED]: "finalized",
      [DataFinality$1.ACCEPTED]: "accepted",
      [DataFinality$1.PENDING]: "pending",
      [DataFinality$1.UNKNOWN]: "unknown",
      [DataFinality$1.UNRECOGNIZED]: "unknown"
    };
    return enumMap[p] ?? "unknown";
  }
};
const DataProduction = {
  encode(x) {
    switch (x) {
      case "backfill":
        return DataProduction$1.BACKFILL;
      case "live":
        return DataProduction$1.LIVE;
      case "unknown":
        return DataProduction$1.UNKNOWN;
      default:
        return DataProduction$1.UNRECOGNIZED;
    }
  },
  decode(p) {
    const enumMap = {
      [DataProduction$1.BACKFILL]: "backfill",
      [DataProduction$1.LIVE]: "live",
      [DataProduction$1.UNKNOWN]: "unknown",
      [DataProduction$1.UNRECOGNIZED]: "unknown"
    };
    return enumMap[p] ?? "unknown";
  }
};
const DurationCodec = MessageCodec({
  seconds: BigIntCodec,
  nanos: NumberCodec
});
const StreamDataRequest = (filter) => MessageCodec({
  finality: OptionalCodec(DataFinality),
  startingCursor: OptionalCodec(Cursor),
  filter: MutableArrayCodec(filter),
  heartbeatInterval: OptionalCodec(DurationCodec)
});
const Invalidate = MessageCodec({
  cursor: OptionalCodec(Cursor)
});
const Finalize = MessageCodec({
  cursor: OptionalCodec(Cursor)
});
const Heartbeat = UndefinedCodec;
const StdOut = StringCodec;
const StdErr = StringCodec;
const SystemMessage = MessageCodec({
  output: OneOfCodec({
    stdout: StdOut,
    stderr: StdErr
  })
});
const _DataOrNull = (schema) => ({
  encode(x) {
    if (x === null) {
      return new Uint8Array();
    }
    return schema.encode(x);
  },
  decode(p) {
    if (p.length === 0) {
      return null;
    }
    return schema.decode(p);
  }
});
const Data = (schema) => MessageCodec({
  cursor: OptionalCodec(Cursor),
  endCursor: Cursor,
  finality: DataFinality,
  production: DataProduction,
  data: ArrayCodec(_DataOrNull(schema))
});
const StreamDataResponse = (schema) => OneOfCodec({
  data: Data(schema),
  invalidate: Invalidate,
  finalize: Finalize,
  heartbeat: Heartbeat,
  systemMessage: SystemMessage
});
const ResponseWithoutData = OneOfCodec({
  invalidate: Invalidate,
  finalize: Finalize,
  heartbeat: Heartbeat,
  systemMessage: SystemMessage
});

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class StreamConfig {
  constructor(filter, block, mergeFilter, name) {
    this.filter = filter;
    this.block = block;
    this.mergeFilter = mergeFilter;
    this.name = name;
    __publicField(this, "request");
    __publicField(this, "response");
    this.request = StreamDataRequest(this.filter);
    this.response = StreamDataResponse(this.block);
  }
  /** Filter schema. */
  get Filter() {
    return this.filter;
  }
  /** Block schema. */
  get Block() {
    return this.block;
  }
  /** Stream data request schema. */
  get Request() {
    return this.request;
  }
  /** Stream data response schema. */
  get Response() {
    return this.response;
  }
}

export { BytesFromUint8Array as B, Cursor as C, DnaStreamDefinition as D, Finalize as F, Heartbeat as H, Invalidate as I, MockFilter as M, ResponseWithoutData as R, StreamDataResponse as S, CursorFromBytes as a, DataFinality as b, createCursor as c, DataProduction as d, DurationCodec as e, StreamDataRequest as f, StdOut as g, StdErr as h, isCursor as i, SystemMessage as j, Data as k, StreamConfig as l, MockBlock as m, normalizeCursor as n, stream as s, testing as t };
//# sourceMappingURL=protocol.68fdd897.mjs.map
