import { BytesFromUint8Array, StreamConfig } from '@apibara/protocol';
import { MessageCodec, RequiredCodec, BigIntCodec, DateCodec, NumberCodec, OptionalCodec, ArrayCodec, BooleanCodec } from '@apibara/protocol/codec';
import Long from 'long';
import _m0 from 'protobufjs/minimal.js';

const protobufPackage$2 = "beaconchain.v2";
var ValidatorStatus$1 = /* @__PURE__ */ ((ValidatorStatus2) => {
  ValidatorStatus2[ValidatorStatus2["UNKNOWN"] = 0] = "UNKNOWN";
  ValidatorStatus2[ValidatorStatus2["PENDING_INITIALIZED"] = 1] = "PENDING_INITIALIZED";
  ValidatorStatus2[ValidatorStatus2["PENDING_QUEUED"] = 2] = "PENDING_QUEUED";
  ValidatorStatus2[ValidatorStatus2["ACTIVE_ONGOING"] = 3] = "ACTIVE_ONGOING";
  ValidatorStatus2[ValidatorStatus2["ACTIVE_EXITING"] = 4] = "ACTIVE_EXITING";
  ValidatorStatus2[ValidatorStatus2["ACTIVE_SLASHED"] = 5] = "ACTIVE_SLASHED";
  ValidatorStatus2[ValidatorStatus2["EXITED_UNSLASHED"] = 6] = "EXITED_UNSLASHED";
  ValidatorStatus2[ValidatorStatus2["EXITED_SLASHED"] = 7] = "EXITED_SLASHED";
  ValidatorStatus2[ValidatorStatus2["WITHDRAWAL_POSSIBLE"] = 8] = "WITHDRAWAL_POSSIBLE";
  ValidatorStatus2[ValidatorStatus2["WITHDRAWAL_DONE"] = 9] = "WITHDRAWAL_DONE";
  ValidatorStatus2[ValidatorStatus2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ValidatorStatus2;
})(ValidatorStatus$1 || {});
function validatorStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "VALIDATOR_STATUS_UNKNOWN":
      return 0 /* UNKNOWN */;
    case 1:
    case "VALIDATOR_STATUS_PENDING_INITIALIZED":
      return 1 /* PENDING_INITIALIZED */;
    case 2:
    case "VALIDATOR_STATUS_PENDING_QUEUED":
      return 2 /* PENDING_QUEUED */;
    case 3:
    case "VALIDATOR_STATUS_ACTIVE_ONGOING":
      return 3 /* ACTIVE_ONGOING */;
    case 4:
    case "VALIDATOR_STATUS_ACTIVE_EXITING":
      return 4 /* ACTIVE_EXITING */;
    case 5:
    case "VALIDATOR_STATUS_ACTIVE_SLASHED":
      return 5 /* ACTIVE_SLASHED */;
    case 6:
    case "VALIDATOR_STATUS_EXITED_UNSLASHED":
      return 6 /* EXITED_UNSLASHED */;
    case 7:
    case "VALIDATOR_STATUS_EXITED_SLASHED":
      return 7 /* EXITED_SLASHED */;
    case 8:
    case "VALIDATOR_STATUS_WITHDRAWAL_POSSIBLE":
      return 8 /* WITHDRAWAL_POSSIBLE */;
    case 9:
    case "VALIDATOR_STATUS_WITHDRAWAL_DONE":
      return 9 /* WITHDRAWAL_DONE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function validatorStatusToJSON(object) {
  switch (object) {
    case 0 /* UNKNOWN */:
      return "VALIDATOR_STATUS_UNKNOWN";
    case 1 /* PENDING_INITIALIZED */:
      return "VALIDATOR_STATUS_PENDING_INITIALIZED";
    case 2 /* PENDING_QUEUED */:
      return "VALIDATOR_STATUS_PENDING_QUEUED";
    case 3 /* ACTIVE_ONGOING */:
      return "VALIDATOR_STATUS_ACTIVE_ONGOING";
    case 4 /* ACTIVE_EXITING */:
      return "VALIDATOR_STATUS_ACTIVE_EXITING";
    case 5 /* ACTIVE_SLASHED */:
      return "VALIDATOR_STATUS_ACTIVE_SLASHED";
    case 6 /* EXITED_UNSLASHED */:
      return "VALIDATOR_STATUS_EXITED_UNSLASHED";
    case 7 /* EXITED_SLASHED */:
      return "VALIDATOR_STATUS_EXITED_SLASHED";
    case 8 /* WITHDRAWAL_POSSIBLE */:
      return "VALIDATOR_STATUS_WITHDRAWAL_POSSIBLE";
    case 9 /* WITHDRAWAL_DONE */:
      return "VALIDATOR_STATUS_WITHDRAWAL_DONE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseAddress() {
  return { x0: BigInt("0"), x1: BigInt("0"), x2: 0 };
}
const Address$1 = {
  encode(message, writer = _m0.Writer.create()) {
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
    if (message.x2 !== void 0 && message.x2 !== 0) {
      writer.uint32(29).fixed32(message.x2);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAddress();
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
          if (tag !== 29) {
            break;
          }
          message.x2 = reader.fixed32();
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
      x2: isSet$3(object.x2) ? globalThis.Number(object.x2) : 0
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
    if (message.x2 !== void 0 && message.x2 !== 0) {
      obj.x2 = Math.round(message.x2);
    }
    return obj;
  },
  create(base) {
    return Address$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseAddress();
    message.x0 = object.x0 ?? BigInt("0");
    message.x1 = object.x1 ?? BigInt("0");
    message.x2 = object.x2 ?? 0;
    return message;
  }
};
function createBaseU256() {
  return { x0: BigInt("0"), x1: BigInt("0"), x2: BigInt("0"), x3: BigInt("0") };
}
const U256$1 = {
  encode(message, writer = _m0.Writer.create()) {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseU256();
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
    return U256$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseU256();
    message.x0 = object.x0 ?? BigInt("0");
    message.x1 = object.x1 ?? BigInt("0");
    message.x2 = object.x2 ?? BigInt("0");
    message.x3 = object.x3 ?? BigInt("0");
    return message;
  }
};
function createBaseB256() {
  return { x0: BigInt("0"), x1: BigInt("0"), x2: BigInt("0"), x3: BigInt("0") };
}
const B256$1 = {
  encode(message, writer = _m0.Writer.create()) {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseB256();
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
    return B256$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseB256();
    message.x0 = object.x0 ?? BigInt("0");
    message.x1 = object.x1 ?? BigInt("0");
    message.x2 = object.x2 ?? BigInt("0");
    message.x3 = object.x3 ?? BigInt("0");
    return message;
  }
};
function createBaseB384() {
  return { x0: BigInt("0"), x1: BigInt("0"), x2: BigInt("0"), x3: BigInt("0"), x4: BigInt("0"), x5: BigInt("0") };
}
const B384$1 = {
  encode(message, writer = _m0.Writer.create()) {
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
    if (message.x4 !== void 0 && message.x4 !== BigInt("0")) {
      if (BigInt.asUintN(64, message.x4) !== message.x4) {
        throw new globalThis.Error("value provided for field message.x4 of type fixed64 too large");
      }
      writer.uint32(41).fixed64(message.x4.toString());
    }
    if (message.x5 !== void 0 && message.x5 !== BigInt("0")) {
      if (BigInt.asUintN(64, message.x5) !== message.x5) {
        throw new globalThis.Error("value provided for field message.x5 of type fixed64 too large");
      }
      writer.uint32(49).fixed64(message.x5.toString());
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseB384();
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
        case 5:
          if (tag !== 41) {
            break;
          }
          message.x4 = longToBigint$2(reader.fixed64());
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }
          message.x5 = longToBigint$2(reader.fixed64());
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
      x3: isSet$3(object.x3) ? BigInt(object.x3) : BigInt("0"),
      x4: isSet$3(object.x4) ? BigInt(object.x4) : BigInt("0"),
      x5: isSet$3(object.x5) ? BigInt(object.x5) : BigInt("0")
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
    if (message.x4 !== void 0 && message.x4 !== BigInt("0")) {
      obj.x4 = message.x4.toString();
    }
    if (message.x5 !== void 0 && message.x5 !== BigInt("0")) {
      obj.x5 = message.x5.toString();
    }
    return obj;
  },
  create(base) {
    return B384$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseB384();
    message.x0 = object.x0 ?? BigInt("0");
    message.x1 = object.x1 ?? BigInt("0");
    message.x2 = object.x2 ?? BigInt("0");
    message.x3 = object.x3 ?? BigInt("0");
    message.x4 = object.x4 ?? BigInt("0");
    message.x5 = object.x5 ?? BigInt("0");
    return message;
  }
};
function createBaseU128() {
  return { x0: BigInt("0"), x1: BigInt("0") };
}
const U128$1 = {
  encode(message, writer = _m0.Writer.create()) {
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
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseU128();
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
      x1: isSet$3(object.x1) ? BigInt(object.x1) : BigInt("0")
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
    return U128$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseU128();
    message.x0 = object.x0 ?? BigInt("0");
    message.x1 = object.x1 ?? BigInt("0");
    return message;
  }
};
function longToBigint$2(long) {
  return BigInt(long.toString());
}
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;
  _m0.configure();
}
function isSet$3(value) {
  return value !== null && value !== void 0;
}

const common = {
  __proto__: null,
  Address: Address$1,
  B256: B256$1,
  B384: B384$1,
  U128: U128$1,
  U256: U256$1,
  ValidatorStatus: ValidatorStatus$1,
  protobufPackage: protobufPackage$2,
  validatorStatusFromJSON: validatorStatusFromJSON,
  validatorStatusToJSON: validatorStatusToJSON
};

function createBaseTimestamp() {
  return { seconds: BigInt("0"), nanos: 0 };
}
const Timestamp = {
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
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;
  _m0.configure();
}
function isSet$2(value) {
  return value !== null && value !== void 0;
}

const protobufPackage$1 = "beaconchain.v2";
function createBaseBlock() {
  return { header: void 0, transactions: [], validators: [], blobs: [] };
}
const Block$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.header !== void 0) {
      BlockHeader$1.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.transactions !== void 0 && message.transactions.length !== 0) {
      for (const v of message.transactions) {
        Transaction$1.encode(v, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.validators !== void 0 && message.validators.length !== 0) {
      for (const v of message.validators) {
        Validator$1.encode(v, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.blobs !== void 0 && message.blobs.length !== 0) {
      for (const v of message.blobs) {
        Blob$1.encode(v, writer.uint32(34).fork()).ldelim();
      }
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
          message.validators.push(Validator$1.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.blobs.push(Blob$1.decode(reader, reader.uint32()));
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
      validators: globalThis.Array.isArray(object?.validators) ? object.validators.map((e) => Validator$1.fromJSON(e)) : [],
      blobs: globalThis.Array.isArray(object?.blobs) ? object.blobs.map((e) => Blob$1.fromJSON(e)) : []
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
    if (message.validators?.length) {
      obj.validators = message.validators.map((e) => Validator$1.toJSON(e));
    }
    if (message.blobs?.length) {
      obj.blobs = message.blobs.map((e) => Blob$1.toJSON(e));
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
    message.validators = object.validators?.map((e) => Validator$1.fromPartial(e)) || [];
    message.blobs = object.blobs?.map((e) => Blob$1.fromPartial(e)) || [];
    return message;
  }
};
function createBaseBlockHeader() {
  return {
    slot: BigInt("0"),
    proposerIndex: 0,
    parentRoot: void 0,
    stateRoot: void 0,
    randaoReveal: new Uint8Array(0),
    depositCount: BigInt("0"),
    depositRoot: void 0,
    blockHash: void 0,
    graffiti: void 0,
    executionPayload: void 0,
    blobKzgCommitments: []
  };
}
const BlockHeader$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.slot !== void 0 && message.slot !== BigInt("0")) {
      if (BigInt.asUintN(64, message.slot) !== message.slot) {
        throw new globalThis.Error("value provided for field message.slot of type uint64 too large");
      }
      writer.uint32(8).uint64(message.slot.toString());
    }
    if (message.proposerIndex !== void 0 && message.proposerIndex !== 0) {
      writer.uint32(16).uint32(message.proposerIndex);
    }
    if (message.parentRoot !== void 0) {
      B256$1.encode(message.parentRoot, writer.uint32(26).fork()).ldelim();
    }
    if (message.stateRoot !== void 0) {
      B256$1.encode(message.stateRoot, writer.uint32(34).fork()).ldelim();
    }
    if (message.randaoReveal !== void 0 && message.randaoReveal.length !== 0) {
      writer.uint32(42).bytes(message.randaoReveal);
    }
    if (message.depositCount !== void 0 && message.depositCount !== BigInt("0")) {
      if (BigInt.asUintN(64, message.depositCount) !== message.depositCount) {
        throw new globalThis.Error("value provided for field message.depositCount of type uint64 too large");
      }
      writer.uint32(48).uint64(message.depositCount.toString());
    }
    if (message.depositRoot !== void 0) {
      B256$1.encode(message.depositRoot, writer.uint32(58).fork()).ldelim();
    }
    if (message.blockHash !== void 0) {
      B256$1.encode(message.blockHash, writer.uint32(66).fork()).ldelim();
    }
    if (message.graffiti !== void 0) {
      B256$1.encode(message.graffiti, writer.uint32(74).fork()).ldelim();
    }
    if (message.executionPayload !== void 0) {
      ExecutionPayload$1.encode(message.executionPayload, writer.uint32(82).fork()).ldelim();
    }
    if (message.blobKzgCommitments !== void 0 && message.blobKzgCommitments.length !== 0) {
      for (const v of message.blobKzgCommitments) {
        B384$1.encode(v, writer.uint32(90).fork()).ldelim();
      }
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlockHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.slot = longToBigint(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.proposerIndex = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.parentRoot = B256$1.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.stateRoot = B256$1.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.randaoReveal = reader.bytes();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.depositCount = longToBigint(reader.uint64());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.depositRoot = B256$1.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.blockHash = B256$1.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }
          message.graffiti = B256$1.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }
          message.executionPayload = ExecutionPayload$1.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }
          message.blobKzgCommitments.push(B384$1.decode(reader, reader.uint32()));
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
      slot: isSet$1(object.slot) ? BigInt(object.slot) : BigInt("0"),
      proposerIndex: isSet$1(object.proposerIndex) ? globalThis.Number(object.proposerIndex) : 0,
      parentRoot: isSet$1(object.parentRoot) ? B256$1.fromJSON(object.parentRoot) : void 0,
      stateRoot: isSet$1(object.stateRoot) ? B256$1.fromJSON(object.stateRoot) : void 0,
      randaoReveal: isSet$1(object.randaoReveal) ? bytesFromBase64(object.randaoReveal) : new Uint8Array(0),
      depositCount: isSet$1(object.depositCount) ? BigInt(object.depositCount) : BigInt("0"),
      depositRoot: isSet$1(object.depositRoot) ? B256$1.fromJSON(object.depositRoot) : void 0,
      blockHash: isSet$1(object.blockHash) ? B256$1.fromJSON(object.blockHash) : void 0,
      graffiti: isSet$1(object.graffiti) ? B256$1.fromJSON(object.graffiti) : void 0,
      executionPayload: isSet$1(object.executionPayload) ? ExecutionPayload$1.fromJSON(object.executionPayload) : void 0,
      blobKzgCommitments: globalThis.Array.isArray(object?.blobKzgCommitments) ? object.blobKzgCommitments.map((e) => B384$1.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.slot !== void 0 && message.slot !== BigInt("0")) {
      obj.slot = message.slot.toString();
    }
    if (message.proposerIndex !== void 0 && message.proposerIndex !== 0) {
      obj.proposerIndex = Math.round(message.proposerIndex);
    }
    if (message.parentRoot !== void 0) {
      obj.parentRoot = B256$1.toJSON(message.parentRoot);
    }
    if (message.stateRoot !== void 0) {
      obj.stateRoot = B256$1.toJSON(message.stateRoot);
    }
    if (message.randaoReveal !== void 0 && message.randaoReveal.length !== 0) {
      obj.randaoReveal = base64FromBytes(message.randaoReveal);
    }
    if (message.depositCount !== void 0 && message.depositCount !== BigInt("0")) {
      obj.depositCount = message.depositCount.toString();
    }
    if (message.depositRoot !== void 0) {
      obj.depositRoot = B256$1.toJSON(message.depositRoot);
    }
    if (message.blockHash !== void 0) {
      obj.blockHash = B256$1.toJSON(message.blockHash);
    }
    if (message.graffiti !== void 0) {
      obj.graffiti = B256$1.toJSON(message.graffiti);
    }
    if (message.executionPayload !== void 0) {
      obj.executionPayload = ExecutionPayload$1.toJSON(message.executionPayload);
    }
    if (message.blobKzgCommitments?.length) {
      obj.blobKzgCommitments = message.blobKzgCommitments.map((e) => B384$1.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return BlockHeader$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseBlockHeader();
    message.slot = object.slot ?? BigInt("0");
    message.proposerIndex = object.proposerIndex ?? 0;
    message.parentRoot = object.parentRoot !== void 0 && object.parentRoot !== null ? B256$1.fromPartial(object.parentRoot) : void 0;
    message.stateRoot = object.stateRoot !== void 0 && object.stateRoot !== null ? B256$1.fromPartial(object.stateRoot) : void 0;
    message.randaoReveal = object.randaoReveal ?? new Uint8Array(0);
    message.depositCount = object.depositCount ?? BigInt("0");
    message.depositRoot = object.depositRoot !== void 0 && object.depositRoot !== null ? B256$1.fromPartial(object.depositRoot) : void 0;
    message.blockHash = object.blockHash !== void 0 && object.blockHash !== null ? B256$1.fromPartial(object.blockHash) : void 0;
    message.graffiti = object.graffiti !== void 0 && object.graffiti !== null ? B256$1.fromPartial(object.graffiti) : void 0;
    message.executionPayload = object.executionPayload !== void 0 && object.executionPayload !== null ? ExecutionPayload$1.fromPartial(object.executionPayload) : void 0;
    message.blobKzgCommitments = object.blobKzgCommitments?.map((e) => B384$1.fromPartial(e)) || [];
    return message;
  }
};
function createBaseTransaction() {
  return {
    filterIds: [],
    transactionHash: void 0,
    nonce: BigInt("0"),
    transactionIndex: 0,
    from: void 0,
    to: void 0,
    value: void 0,
    gasPrice: void 0,
    gasLimit: void 0,
    maxFeePerGas: void 0,
    maxPriorityFeePerGas: void 0,
    input: new Uint8Array(0),
    signature: void 0,
    chainId: void 0,
    accessList: [],
    transactionType: BigInt("0"),
    maxFeePerBlobGas: void 0,
    blobVersionedHashes: []
  };
}
const Transaction$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.filterIds !== void 0 && message.filterIds.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.filterIds) {
        writer.uint32(v);
      }
      writer.ldelim();
    }
    if (message.transactionHash !== void 0) {
      B256$1.encode(message.transactionHash, writer.uint32(18).fork()).ldelim();
    }
    if (message.nonce !== void 0 && message.nonce !== BigInt("0")) {
      if (BigInt.asUintN(64, message.nonce) !== message.nonce) {
        throw new globalThis.Error("value provided for field message.nonce of type uint64 too large");
      }
      writer.uint32(24).uint64(message.nonce.toString());
    }
    if (message.transactionIndex !== void 0 && message.transactionIndex !== 0) {
      writer.uint32(32).uint32(message.transactionIndex);
    }
    if (message.from !== void 0) {
      Address$1.encode(message.from, writer.uint32(42).fork()).ldelim();
    }
    if (message.to !== void 0) {
      Address$1.encode(message.to, writer.uint32(50).fork()).ldelim();
    }
    if (message.value !== void 0) {
      U256$1.encode(message.value, writer.uint32(58).fork()).ldelim();
    }
    if (message.gasPrice !== void 0) {
      U128$1.encode(message.gasPrice, writer.uint32(66).fork()).ldelim();
    }
    if (message.gasLimit !== void 0) {
      U128$1.encode(message.gasLimit, writer.uint32(74).fork()).ldelim();
    }
    if (message.maxFeePerGas !== void 0) {
      U128$1.encode(message.maxFeePerGas, writer.uint32(82).fork()).ldelim();
    }
    if (message.maxPriorityFeePerGas !== void 0) {
      U128$1.encode(message.maxPriorityFeePerGas, writer.uint32(90).fork()).ldelim();
    }
    if (message.input !== void 0 && message.input.length !== 0) {
      writer.uint32(98).bytes(message.input);
    }
    if (message.signature !== void 0) {
      Signature$1.encode(message.signature, writer.uint32(106).fork()).ldelim();
    }
    if (message.chainId !== void 0) {
      if (BigInt.asUintN(64, message.chainId) !== message.chainId) {
        throw new globalThis.Error("value provided for field message.chainId of type uint64 too large");
      }
      writer.uint32(112).uint64(message.chainId.toString());
    }
    if (message.accessList !== void 0 && message.accessList.length !== 0) {
      for (const v of message.accessList) {
        AccessListItem$1.encode(v, writer.uint32(122).fork()).ldelim();
      }
    }
    if (message.transactionType !== void 0 && message.transactionType !== BigInt("0")) {
      if (BigInt.asUintN(64, message.transactionType) !== message.transactionType) {
        throw new globalThis.Error("value provided for field message.transactionType of type uint64 too large");
      }
      writer.uint32(128).uint64(message.transactionType.toString());
    }
    if (message.maxFeePerBlobGas !== void 0) {
      U128$1.encode(message.maxFeePerBlobGas, writer.uint32(138).fork()).ldelim();
    }
    if (message.blobVersionedHashes !== void 0 && message.blobVersionedHashes.length !== 0) {
      for (const v of message.blobVersionedHashes) {
        B256$1.encode(v, writer.uint32(146).fork()).ldelim();
      }
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
          message.transactionHash = B256$1.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.nonce = longToBigint(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.transactionIndex = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.from = Address$1.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.to = Address$1.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.value = U256$1.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.gasPrice = U128$1.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }
          message.gasLimit = U128$1.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }
          message.maxFeePerGas = U128$1.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }
          message.maxPriorityFeePerGas = U128$1.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }
          message.input = reader.bytes();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }
          message.signature = Signature$1.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }
          message.chainId = longToBigint(reader.uint64());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }
          message.accessList.push(AccessListItem$1.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }
          message.transactionType = longToBigint(reader.uint64());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }
          message.maxFeePerBlobGas = U128$1.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }
          message.blobVersionedHashes.push(B256$1.decode(reader, reader.uint32()));
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
      transactionHash: isSet$1(object.transactionHash) ? B256$1.fromJSON(object.transactionHash) : void 0,
      nonce: isSet$1(object.nonce) ? BigInt(object.nonce) : BigInt("0"),
      transactionIndex: isSet$1(object.transactionIndex) ? globalThis.Number(object.transactionIndex) : 0,
      from: isSet$1(object.from) ? Address$1.fromJSON(object.from) : void 0,
      to: isSet$1(object.to) ? Address$1.fromJSON(object.to) : void 0,
      value: isSet$1(object.value) ? U256$1.fromJSON(object.value) : void 0,
      gasPrice: isSet$1(object.gasPrice) ? U128$1.fromJSON(object.gasPrice) : void 0,
      gasLimit: isSet$1(object.gasLimit) ? U128$1.fromJSON(object.gasLimit) : void 0,
      maxFeePerGas: isSet$1(object.maxFeePerGas) ? U128$1.fromJSON(object.maxFeePerGas) : void 0,
      maxPriorityFeePerGas: isSet$1(object.maxPriorityFeePerGas) ? U128$1.fromJSON(object.maxPriorityFeePerGas) : void 0,
      input: isSet$1(object.input) ? bytesFromBase64(object.input) : new Uint8Array(0),
      signature: isSet$1(object.signature) ? Signature$1.fromJSON(object.signature) : void 0,
      chainId: isSet$1(object.chainId) ? BigInt(object.chainId) : void 0,
      accessList: globalThis.Array.isArray(object?.accessList) ? object.accessList.map((e) => AccessListItem$1.fromJSON(e)) : [],
      transactionType: isSet$1(object.transactionType) ? BigInt(object.transactionType) : BigInt("0"),
      maxFeePerBlobGas: isSet$1(object.maxFeePerBlobGas) ? U128$1.fromJSON(object.maxFeePerBlobGas) : void 0,
      blobVersionedHashes: globalThis.Array.isArray(object?.blobVersionedHashes) ? object.blobVersionedHashes.map((e) => B256$1.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.filterIds?.length) {
      obj.filterIds = message.filterIds.map((e) => Math.round(e));
    }
    if (message.transactionHash !== void 0) {
      obj.transactionHash = B256$1.toJSON(message.transactionHash);
    }
    if (message.nonce !== void 0 && message.nonce !== BigInt("0")) {
      obj.nonce = message.nonce.toString();
    }
    if (message.transactionIndex !== void 0 && message.transactionIndex !== 0) {
      obj.transactionIndex = Math.round(message.transactionIndex);
    }
    if (message.from !== void 0) {
      obj.from = Address$1.toJSON(message.from);
    }
    if (message.to !== void 0) {
      obj.to = Address$1.toJSON(message.to);
    }
    if (message.value !== void 0) {
      obj.value = U256$1.toJSON(message.value);
    }
    if (message.gasPrice !== void 0) {
      obj.gasPrice = U128$1.toJSON(message.gasPrice);
    }
    if (message.gasLimit !== void 0) {
      obj.gasLimit = U128$1.toJSON(message.gasLimit);
    }
    if (message.maxFeePerGas !== void 0) {
      obj.maxFeePerGas = U128$1.toJSON(message.maxFeePerGas);
    }
    if (message.maxPriorityFeePerGas !== void 0) {
      obj.maxPriorityFeePerGas = U128$1.toJSON(message.maxPriorityFeePerGas);
    }
    if (message.input !== void 0 && message.input.length !== 0) {
      obj.input = base64FromBytes(message.input);
    }
    if (message.signature !== void 0) {
      obj.signature = Signature$1.toJSON(message.signature);
    }
    if (message.chainId !== void 0) {
      obj.chainId = message.chainId.toString();
    }
    if (message.accessList?.length) {
      obj.accessList = message.accessList.map((e) => AccessListItem$1.toJSON(e));
    }
    if (message.transactionType !== void 0 && message.transactionType !== BigInt("0")) {
      obj.transactionType = message.transactionType.toString();
    }
    if (message.maxFeePerBlobGas !== void 0) {
      obj.maxFeePerBlobGas = U128$1.toJSON(message.maxFeePerBlobGas);
    }
    if (message.blobVersionedHashes?.length) {
      obj.blobVersionedHashes = message.blobVersionedHashes.map((e) => B256$1.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return Transaction$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTransaction();
    message.filterIds = object.filterIds?.map((e) => e) || [];
    message.transactionHash = object.transactionHash !== void 0 && object.transactionHash !== null ? B256$1.fromPartial(object.transactionHash) : void 0;
    message.nonce = object.nonce ?? BigInt("0");
    message.transactionIndex = object.transactionIndex ?? 0;
    message.from = object.from !== void 0 && object.from !== null ? Address$1.fromPartial(object.from) : void 0;
    message.to = object.to !== void 0 && object.to !== null ? Address$1.fromPartial(object.to) : void 0;
    message.value = object.value !== void 0 && object.value !== null ? U256$1.fromPartial(object.value) : void 0;
    message.gasPrice = object.gasPrice !== void 0 && object.gasPrice !== null ? U128$1.fromPartial(object.gasPrice) : void 0;
    message.gasLimit = object.gasLimit !== void 0 && object.gasLimit !== null ? U128$1.fromPartial(object.gasLimit) : void 0;
    message.maxFeePerGas = object.maxFeePerGas !== void 0 && object.maxFeePerGas !== null ? U128$1.fromPartial(object.maxFeePerGas) : void 0;
    message.maxPriorityFeePerGas = object.maxPriorityFeePerGas !== void 0 && object.maxPriorityFeePerGas !== null ? U128$1.fromPartial(object.maxPriorityFeePerGas) : void 0;
    message.input = object.input ?? new Uint8Array(0);
    message.signature = object.signature !== void 0 && object.signature !== null ? Signature$1.fromPartial(object.signature) : void 0;
    message.chainId = object.chainId ?? void 0;
    message.accessList = object.accessList?.map((e) => AccessListItem$1.fromPartial(e)) || [];
    message.transactionType = object.transactionType ?? BigInt("0");
    message.maxFeePerBlobGas = object.maxFeePerBlobGas !== void 0 && object.maxFeePerBlobGas !== null ? U128$1.fromPartial(object.maxFeePerBlobGas) : void 0;
    message.blobVersionedHashes = object.blobVersionedHashes?.map((e) => B256$1.fromPartial(e)) || [];
    return message;
  }
};
function createBaseValidator() {
  return {
    filterIds: [],
    validatorIndex: 0,
    balance: BigInt("0"),
    status: 0,
    pubkey: void 0,
    withdrawalCredentials: void 0,
    effectiveBalance: BigInt("0"),
    slashed: false,
    activationEligibilityEpoch: BigInt("0"),
    activationEpoch: BigInt("0"),
    exitEpoch: BigInt("0"),
    withdrawableEpoch: BigInt("0")
  };
}
const Validator$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.filterIds !== void 0 && message.filterIds.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.filterIds) {
        writer.uint32(v);
      }
      writer.ldelim();
    }
    if (message.validatorIndex !== void 0 && message.validatorIndex !== 0) {
      writer.uint32(16).uint32(message.validatorIndex);
    }
    if (message.balance !== void 0 && message.balance !== BigInt("0")) {
      if (BigInt.asUintN(64, message.balance) !== message.balance) {
        throw new globalThis.Error("value provided for field message.balance of type uint64 too large");
      }
      writer.uint32(24).uint64(message.balance.toString());
    }
    if (message.status !== void 0 && message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.pubkey !== void 0) {
      B384$1.encode(message.pubkey, writer.uint32(42).fork()).ldelim();
    }
    if (message.withdrawalCredentials !== void 0) {
      B256$1.encode(message.withdrawalCredentials, writer.uint32(50).fork()).ldelim();
    }
    if (message.effectiveBalance !== void 0 && message.effectiveBalance !== BigInt("0")) {
      if (BigInt.asUintN(64, message.effectiveBalance) !== message.effectiveBalance) {
        throw new globalThis.Error("value provided for field message.effectiveBalance of type uint64 too large");
      }
      writer.uint32(56).uint64(message.effectiveBalance.toString());
    }
    if (message.slashed !== void 0 && message.slashed !== false) {
      writer.uint32(64).bool(message.slashed);
    }
    if (message.activationEligibilityEpoch !== void 0 && message.activationEligibilityEpoch !== BigInt("0")) {
      if (BigInt.asUintN(64, message.activationEligibilityEpoch) !== message.activationEligibilityEpoch) {
        throw new globalThis.Error(
          "value provided for field message.activationEligibilityEpoch of type uint64 too large"
        );
      }
      writer.uint32(72).uint64(message.activationEligibilityEpoch.toString());
    }
    if (message.activationEpoch !== void 0 && message.activationEpoch !== BigInt("0")) {
      if (BigInt.asUintN(64, message.activationEpoch) !== message.activationEpoch) {
        throw new globalThis.Error("value provided for field message.activationEpoch of type uint64 too large");
      }
      writer.uint32(80).uint64(message.activationEpoch.toString());
    }
    if (message.exitEpoch !== void 0 && message.exitEpoch !== BigInt("0")) {
      if (BigInt.asUintN(64, message.exitEpoch) !== message.exitEpoch) {
        throw new globalThis.Error("value provided for field message.exitEpoch of type uint64 too large");
      }
      writer.uint32(88).uint64(message.exitEpoch.toString());
    }
    if (message.withdrawableEpoch !== void 0 && message.withdrawableEpoch !== BigInt("0")) {
      if (BigInt.asUintN(64, message.withdrawableEpoch) !== message.withdrawableEpoch) {
        throw new globalThis.Error("value provided for field message.withdrawableEpoch of type uint64 too large");
      }
      writer.uint32(96).uint64(message.withdrawableEpoch.toString());
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidator();
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
          message.validatorIndex = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.balance = longToBigint(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.status = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.pubkey = B384$1.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.withdrawalCredentials = B256$1.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }
          message.effectiveBalance = longToBigint(reader.uint64());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }
          message.slashed = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }
          message.activationEligibilityEpoch = longToBigint(reader.uint64());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }
          message.activationEpoch = longToBigint(reader.uint64());
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }
          message.exitEpoch = longToBigint(reader.uint64());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }
          message.withdrawableEpoch = longToBigint(reader.uint64());
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
      validatorIndex: isSet$1(object.validatorIndex) ? globalThis.Number(object.validatorIndex) : 0,
      balance: isSet$1(object.balance) ? BigInt(object.balance) : BigInt("0"),
      status: isSet$1(object.status) ? validatorStatusFromJSON(object.status) : 0,
      pubkey: isSet$1(object.pubkey) ? B384$1.fromJSON(object.pubkey) : void 0,
      withdrawalCredentials: isSet$1(object.withdrawalCredentials) ? B256$1.fromJSON(object.withdrawalCredentials) : void 0,
      effectiveBalance: isSet$1(object.effectiveBalance) ? BigInt(object.effectiveBalance) : BigInt("0"),
      slashed: isSet$1(object.slashed) ? globalThis.Boolean(object.slashed) : false,
      activationEligibilityEpoch: isSet$1(object.activationEligibilityEpoch) ? BigInt(object.activationEligibilityEpoch) : BigInt("0"),
      activationEpoch: isSet$1(object.activationEpoch) ? BigInt(object.activationEpoch) : BigInt("0"),
      exitEpoch: isSet$1(object.exitEpoch) ? BigInt(object.exitEpoch) : BigInt("0"),
      withdrawableEpoch: isSet$1(object.withdrawableEpoch) ? BigInt(object.withdrawableEpoch) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.filterIds?.length) {
      obj.filterIds = message.filterIds.map((e) => Math.round(e));
    }
    if (message.validatorIndex !== void 0 && message.validatorIndex !== 0) {
      obj.validatorIndex = Math.round(message.validatorIndex);
    }
    if (message.balance !== void 0 && message.balance !== BigInt("0")) {
      obj.balance = message.balance.toString();
    }
    if (message.status !== void 0 && message.status !== 0) {
      obj.status = validatorStatusToJSON(message.status);
    }
    if (message.pubkey !== void 0) {
      obj.pubkey = B384$1.toJSON(message.pubkey);
    }
    if (message.withdrawalCredentials !== void 0) {
      obj.withdrawalCredentials = B256$1.toJSON(message.withdrawalCredentials);
    }
    if (message.effectiveBalance !== void 0 && message.effectiveBalance !== BigInt("0")) {
      obj.effectiveBalance = message.effectiveBalance.toString();
    }
    if (message.slashed !== void 0 && message.slashed !== false) {
      obj.slashed = message.slashed;
    }
    if (message.activationEligibilityEpoch !== void 0 && message.activationEligibilityEpoch !== BigInt("0")) {
      obj.activationEligibilityEpoch = message.activationEligibilityEpoch.toString();
    }
    if (message.activationEpoch !== void 0 && message.activationEpoch !== BigInt("0")) {
      obj.activationEpoch = message.activationEpoch.toString();
    }
    if (message.exitEpoch !== void 0 && message.exitEpoch !== BigInt("0")) {
      obj.exitEpoch = message.exitEpoch.toString();
    }
    if (message.withdrawableEpoch !== void 0 && message.withdrawableEpoch !== BigInt("0")) {
      obj.withdrawableEpoch = message.withdrawableEpoch.toString();
    }
    return obj;
  },
  create(base) {
    return Validator$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseValidator();
    message.filterIds = object.filterIds?.map((e) => e) || [];
    message.validatorIndex = object.validatorIndex ?? 0;
    message.balance = object.balance ?? BigInt("0");
    message.status = object.status ?? 0;
    message.pubkey = object.pubkey !== void 0 && object.pubkey !== null ? B384$1.fromPartial(object.pubkey) : void 0;
    message.withdrawalCredentials = object.withdrawalCredentials !== void 0 && object.withdrawalCredentials !== null ? B256$1.fromPartial(object.withdrawalCredentials) : void 0;
    message.effectiveBalance = object.effectiveBalance ?? BigInt("0");
    message.slashed = object.slashed ?? false;
    message.activationEligibilityEpoch = object.activationEligibilityEpoch ?? BigInt("0");
    message.activationEpoch = object.activationEpoch ?? BigInt("0");
    message.exitEpoch = object.exitEpoch ?? BigInt("0");
    message.withdrawableEpoch = object.withdrawableEpoch ?? BigInt("0");
    return message;
  }
};
function createBaseBlob() {
  return {
    filterIds: [],
    blobIndex: 0,
    blob: new Uint8Array(0),
    kzgCommitment: void 0,
    kzgProof: void 0,
    kzgCommitmentInclusionProof: [],
    blobHash: void 0,
    transactionIndex: 0,
    transactionHash: void 0
  };
}
const Blob$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.filterIds !== void 0 && message.filterIds.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.filterIds) {
        writer.uint32(v);
      }
      writer.ldelim();
    }
    if (message.blobIndex !== void 0 && message.blobIndex !== 0) {
      writer.uint32(16).uint32(message.blobIndex);
    }
    if (message.blob !== void 0 && message.blob.length !== 0) {
      writer.uint32(26).bytes(message.blob);
    }
    if (message.kzgCommitment !== void 0) {
      B384$1.encode(message.kzgCommitment, writer.uint32(34).fork()).ldelim();
    }
    if (message.kzgProof !== void 0) {
      B384$1.encode(message.kzgProof, writer.uint32(42).fork()).ldelim();
    }
    if (message.kzgCommitmentInclusionProof !== void 0 && message.kzgCommitmentInclusionProof.length !== 0) {
      for (const v of message.kzgCommitmentInclusionProof) {
        B256$1.encode(v, writer.uint32(50).fork()).ldelim();
      }
    }
    if (message.blobHash !== void 0) {
      B256$1.encode(message.blobHash, writer.uint32(58).fork()).ldelim();
    }
    if (message.transactionIndex !== void 0 && message.transactionIndex !== 0) {
      writer.uint32(64).uint32(message.transactionIndex);
    }
    if (message.transactionHash !== void 0) {
      B256$1.encode(message.transactionHash, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlob();
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
          message.blobIndex = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.blob = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.kzgCommitment = B384$1.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.kzgProof = B384$1.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.kzgCommitmentInclusionProof.push(B256$1.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.blobHash = B256$1.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }
          message.transactionIndex = reader.uint32();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }
          message.transactionHash = B256$1.decode(reader, reader.uint32());
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
      blobIndex: isSet$1(object.blobIndex) ? globalThis.Number(object.blobIndex) : 0,
      blob: isSet$1(object.blob) ? bytesFromBase64(object.blob) : new Uint8Array(0),
      kzgCommitment: isSet$1(object.kzgCommitment) ? B384$1.fromJSON(object.kzgCommitment) : void 0,
      kzgProof: isSet$1(object.kzgProof) ? B384$1.fromJSON(object.kzgProof) : void 0,
      kzgCommitmentInclusionProof: globalThis.Array.isArray(object?.kzgCommitmentInclusionProof) ? object.kzgCommitmentInclusionProof.map((e) => B256$1.fromJSON(e)) : [],
      blobHash: isSet$1(object.blobHash) ? B256$1.fromJSON(object.blobHash) : void 0,
      transactionIndex: isSet$1(object.transactionIndex) ? globalThis.Number(object.transactionIndex) : 0,
      transactionHash: isSet$1(object.transactionHash) ? B256$1.fromJSON(object.transactionHash) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.filterIds?.length) {
      obj.filterIds = message.filterIds.map((e) => Math.round(e));
    }
    if (message.blobIndex !== void 0 && message.blobIndex !== 0) {
      obj.blobIndex = Math.round(message.blobIndex);
    }
    if (message.blob !== void 0 && message.blob.length !== 0) {
      obj.blob = base64FromBytes(message.blob);
    }
    if (message.kzgCommitment !== void 0) {
      obj.kzgCommitment = B384$1.toJSON(message.kzgCommitment);
    }
    if (message.kzgProof !== void 0) {
      obj.kzgProof = B384$1.toJSON(message.kzgProof);
    }
    if (message.kzgCommitmentInclusionProof?.length) {
      obj.kzgCommitmentInclusionProof = message.kzgCommitmentInclusionProof.map((e) => B256$1.toJSON(e));
    }
    if (message.blobHash !== void 0) {
      obj.blobHash = B256$1.toJSON(message.blobHash);
    }
    if (message.transactionIndex !== void 0 && message.transactionIndex !== 0) {
      obj.transactionIndex = Math.round(message.transactionIndex);
    }
    if (message.transactionHash !== void 0) {
      obj.transactionHash = B256$1.toJSON(message.transactionHash);
    }
    return obj;
  },
  create(base) {
    return Blob$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseBlob();
    message.filterIds = object.filterIds?.map((e) => e) || [];
    message.blobIndex = object.blobIndex ?? 0;
    message.blob = object.blob ?? new Uint8Array(0);
    message.kzgCommitment = object.kzgCommitment !== void 0 && object.kzgCommitment !== null ? B384$1.fromPartial(object.kzgCommitment) : void 0;
    message.kzgProof = object.kzgProof !== void 0 && object.kzgProof !== null ? B384$1.fromPartial(object.kzgProof) : void 0;
    message.kzgCommitmentInclusionProof = object.kzgCommitmentInclusionProof?.map((e) => B256$1.fromPartial(e)) || [];
    message.blobHash = object.blobHash !== void 0 && object.blobHash !== null ? B256$1.fromPartial(object.blobHash) : void 0;
    message.transactionIndex = object.transactionIndex ?? 0;
    message.transactionHash = object.transactionHash !== void 0 && object.transactionHash !== null ? B256$1.fromPartial(object.transactionHash) : void 0;
    return message;
  }
};
function createBaseExecutionPayload() {
  return {
    parentHash: void 0,
    feeRecipient: void 0,
    stateRoot: void 0,
    receiptsRoot: void 0,
    logsBloom: new Uint8Array(0),
    prevRandao: void 0,
    blockNumber: BigInt("0"),
    timestamp: void 0
  };
}
const ExecutionPayload$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.parentHash !== void 0) {
      B256$1.encode(message.parentHash, writer.uint32(10).fork()).ldelim();
    }
    if (message.feeRecipient !== void 0) {
      Address$1.encode(message.feeRecipient, writer.uint32(18).fork()).ldelim();
    }
    if (message.stateRoot !== void 0) {
      B256$1.encode(message.stateRoot, writer.uint32(26).fork()).ldelim();
    }
    if (message.receiptsRoot !== void 0) {
      B256$1.encode(message.receiptsRoot, writer.uint32(34).fork()).ldelim();
    }
    if (message.logsBloom !== void 0 && message.logsBloom.length !== 0) {
      writer.uint32(42).bytes(message.logsBloom);
    }
    if (message.prevRandao !== void 0) {
      B256$1.encode(message.prevRandao, writer.uint32(50).fork()).ldelim();
    }
    if (message.blockNumber !== void 0 && message.blockNumber !== BigInt("0")) {
      if (BigInt.asUintN(64, message.blockNumber) !== message.blockNumber) {
        throw new globalThis.Error("value provided for field message.blockNumber of type uint64 too large");
      }
      writer.uint32(56).uint64(message.blockNumber.toString());
    }
    if (message.timestamp !== void 0) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExecutionPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.parentHash = B256$1.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.feeRecipient = Address$1.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.stateRoot = B256$1.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.receiptsRoot = B256$1.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.logsBloom = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.prevRandao = B256$1.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }
          message.blockNumber = longToBigint(reader.uint64());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      parentHash: isSet$1(object.parentHash) ? B256$1.fromJSON(object.parentHash) : void 0,
      feeRecipient: isSet$1(object.feeRecipient) ? Address$1.fromJSON(object.feeRecipient) : void 0,
      stateRoot: isSet$1(object.stateRoot) ? B256$1.fromJSON(object.stateRoot) : void 0,
      receiptsRoot: isSet$1(object.receiptsRoot) ? B256$1.fromJSON(object.receiptsRoot) : void 0,
      logsBloom: isSet$1(object.logsBloom) ? bytesFromBase64(object.logsBloom) : new Uint8Array(0),
      prevRandao: isSet$1(object.prevRandao) ? B256$1.fromJSON(object.prevRandao) : void 0,
      blockNumber: isSet$1(object.blockNumber) ? BigInt(object.blockNumber) : BigInt("0"),
      timestamp: isSet$1(object.timestamp) ? fromJsonTimestamp(object.timestamp) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.parentHash !== void 0) {
      obj.parentHash = B256$1.toJSON(message.parentHash);
    }
    if (message.feeRecipient !== void 0) {
      obj.feeRecipient = Address$1.toJSON(message.feeRecipient);
    }
    if (message.stateRoot !== void 0) {
      obj.stateRoot = B256$1.toJSON(message.stateRoot);
    }
    if (message.receiptsRoot !== void 0) {
      obj.receiptsRoot = B256$1.toJSON(message.receiptsRoot);
    }
    if (message.logsBloom !== void 0 && message.logsBloom.length !== 0) {
      obj.logsBloom = base64FromBytes(message.logsBloom);
    }
    if (message.prevRandao !== void 0) {
      obj.prevRandao = B256$1.toJSON(message.prevRandao);
    }
    if (message.blockNumber !== void 0 && message.blockNumber !== BigInt("0")) {
      obj.blockNumber = message.blockNumber.toString();
    }
    if (message.timestamp !== void 0) {
      obj.timestamp = message.timestamp.toISOString();
    }
    return obj;
  },
  create(base) {
    return ExecutionPayload$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseExecutionPayload();
    message.parentHash = object.parentHash !== void 0 && object.parentHash !== null ? B256$1.fromPartial(object.parentHash) : void 0;
    message.feeRecipient = object.feeRecipient !== void 0 && object.feeRecipient !== null ? Address$1.fromPartial(object.feeRecipient) : void 0;
    message.stateRoot = object.stateRoot !== void 0 && object.stateRoot !== null ? B256$1.fromPartial(object.stateRoot) : void 0;
    message.receiptsRoot = object.receiptsRoot !== void 0 && object.receiptsRoot !== null ? B256$1.fromPartial(object.receiptsRoot) : void 0;
    message.logsBloom = object.logsBloom ?? new Uint8Array(0);
    message.prevRandao = object.prevRandao !== void 0 && object.prevRandao !== null ? B256$1.fromPartial(object.prevRandao) : void 0;
    message.blockNumber = object.blockNumber ?? BigInt("0");
    message.timestamp = object.timestamp ?? void 0;
    return message;
  }
};
function createBaseSignature() {
  return { r: void 0, s: void 0 };
}
const Signature$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.r !== void 0) {
      U256$1.encode(message.r, writer.uint32(10).fork()).ldelim();
    }
    if (message.s !== void 0) {
      U256$1.encode(message.s, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.r = U256$1.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.s = U256$1.decode(reader, reader.uint32());
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
      r: isSet$1(object.r) ? U256$1.fromJSON(object.r) : void 0,
      s: isSet$1(object.s) ? U256$1.fromJSON(object.s) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.r !== void 0) {
      obj.r = U256$1.toJSON(message.r);
    }
    if (message.s !== void 0) {
      obj.s = U256$1.toJSON(message.s);
    }
    return obj;
  },
  create(base) {
    return Signature$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseSignature();
    message.r = object.r !== void 0 && object.r !== null ? U256$1.fromPartial(object.r) : void 0;
    message.s = object.s !== void 0 && object.s !== null ? U256$1.fromPartial(object.s) : void 0;
    return message;
  }
};
function createBaseAccessListItem() {
  return { address: void 0, storageKeys: [] };
}
const AccessListItem$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== void 0) {
      Address$1.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.storageKeys !== void 0 && message.storageKeys.length !== 0) {
      for (const v of message.storageKeys) {
        B256$1.encode(v, writer.uint32(18).fork()).ldelim();
      }
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAccessListItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.address = Address$1.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.storageKeys.push(B256$1.decode(reader, reader.uint32()));
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
      address: isSet$1(object.address) ? Address$1.fromJSON(object.address) : void 0,
      storageKeys: globalThis.Array.isArray(object?.storageKeys) ? object.storageKeys.map((e) => B256$1.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.address !== void 0) {
      obj.address = Address$1.toJSON(message.address);
    }
    if (message.storageKeys?.length) {
      obj.storageKeys = message.storageKeys.map((e) => B256$1.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return AccessListItem$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseAccessListItem();
    message.address = object.address !== void 0 && object.address !== null ? Address$1.fromPartial(object.address) : void 0;
    message.storageKeys = object.storageKeys?.map((e) => B256$1.fromPartial(e)) || [];
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
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;
  _m0.configure();
}
function isSet$1(value) {
  return value !== null && value !== void 0;
}

const data = {
  __proto__: null,
  AccessListItem: AccessListItem$1,
  Blob: Blob$1,
  Block: Block$1,
  BlockHeader: BlockHeader$1,
  ExecutionPayload: ExecutionPayload$1,
  Signature: Signature$1,
  Transaction: Transaction$1,
  Validator: Validator$1,
  protobufPackage: protobufPackage$1
};

const protobufPackage = "beaconchain.v2";
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
function createBaseFilter() {
  return { header: 0, transactions: [], validators: [], blobs: [] };
}
const Filter$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.header !== void 0 && message.header !== 0) {
      writer.uint32(8).int32(message.header);
    }
    if (message.transactions !== void 0 && message.transactions.length !== 0) {
      for (const v of message.transactions) {
        TransactionFilter$1.encode(v, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.validators !== void 0 && message.validators.length !== 0) {
      for (const v of message.validators) {
        ValidatorFilter$1.encode(v, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.blobs !== void 0 && message.blobs.length !== 0) {
      for (const v of message.blobs) {
        BlobFilter$1.encode(v, writer.uint32(34).fork()).ldelim();
      }
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
          message.validators.push(ValidatorFilter$1.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.blobs.push(BlobFilter$1.decode(reader, reader.uint32()));
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
      validators: globalThis.Array.isArray(object?.validators) ? object.validators.map((e) => ValidatorFilter$1.fromJSON(e)) : [],
      blobs: globalThis.Array.isArray(object?.blobs) ? object.blobs.map((e) => BlobFilter$1.fromJSON(e)) : []
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
    if (message.validators?.length) {
      obj.validators = message.validators.map((e) => ValidatorFilter$1.toJSON(e));
    }
    if (message.blobs?.length) {
      obj.blobs = message.blobs.map((e) => BlobFilter$1.toJSON(e));
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
    message.validators = object.validators?.map((e) => ValidatorFilter$1.fromPartial(e)) || [];
    message.blobs = object.blobs?.map((e) => BlobFilter$1.fromPartial(e)) || [];
    return message;
  }
};
function createBaseTransactionFilter() {
  return { id: 0, from: void 0, to: void 0, create: void 0, includeBlob: void 0 };
}
const TransactionFilter$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== void 0 && message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.from !== void 0) {
      Address$1.encode(message.from, writer.uint32(18).fork()).ldelim();
    }
    if (message.to !== void 0) {
      Address$1.encode(message.to, writer.uint32(26).fork()).ldelim();
    }
    if (message.create !== void 0) {
      writer.uint32(32).bool(message.create);
    }
    if (message.includeBlob !== void 0) {
      writer.uint32(40).bool(message.includeBlob);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
          if (tag !== 18) {
            break;
          }
          message.from = Address$1.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.to = Address$1.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.create = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.includeBlob = reader.bool();
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
      from: isSet(object.from) ? Address$1.fromJSON(object.from) : void 0,
      to: isSet(object.to) ? Address$1.fromJSON(object.to) : void 0,
      create: isSet(object.create) ? globalThis.Boolean(object.create) : void 0,
      includeBlob: isSet(object.includeBlob) ? globalThis.Boolean(object.includeBlob) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.id !== void 0 && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.from !== void 0) {
      obj.from = Address$1.toJSON(message.from);
    }
    if (message.to !== void 0) {
      obj.to = Address$1.toJSON(message.to);
    }
    if (message.create !== void 0) {
      obj.create = message.create;
    }
    if (message.includeBlob !== void 0) {
      obj.includeBlob = message.includeBlob;
    }
    return obj;
  },
  create(base) {
    return TransactionFilter$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTransactionFilter();
    message.id = object.id ?? 0;
    message.from = object.from !== void 0 && object.from !== null ? Address$1.fromPartial(object.from) : void 0;
    message.to = object.to !== void 0 && object.to !== null ? Address$1.fromPartial(object.to) : void 0;
    message.create = object.create ?? void 0;
    message.includeBlob = object.includeBlob ?? void 0;
    return message;
  }
};
function createBaseValidatorFilter() {
  return { id: 0, validatorIndex: void 0, status: void 0 };
}
const ValidatorFilter$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== void 0 && message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.validatorIndex !== void 0) {
      writer.uint32(16).uint32(message.validatorIndex);
    }
    if (message.status !== void 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorFilter();
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
          message.validatorIndex = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.status = reader.int32();
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
      validatorIndex: isSet(object.validatorIndex) ? globalThis.Number(object.validatorIndex) : void 0,
      status: isSet(object.status) ? validatorStatusFromJSON(object.status) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.id !== void 0 && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.validatorIndex !== void 0) {
      obj.validatorIndex = Math.round(message.validatorIndex);
    }
    if (message.status !== void 0) {
      obj.status = validatorStatusToJSON(message.status);
    }
    return obj;
  },
  create(base) {
    return ValidatorFilter$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseValidatorFilter();
    message.id = object.id ?? 0;
    message.validatorIndex = object.validatorIndex ?? void 0;
    message.status = object.status ?? void 0;
    return message;
  }
};
function createBaseBlobFilter() {
  return { id: 0, includeTransaction: void 0 };
}
const BlobFilter$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== void 0 && message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.includeTransaction !== void 0) {
      writer.uint32(16).bool(message.includeTransaction);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlobFilter();
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
          message.includeTransaction = reader.bool();
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
      includeTransaction: isSet(object.includeTransaction) ? globalThis.Boolean(object.includeTransaction) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.id !== void 0 && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.includeTransaction !== void 0) {
      obj.includeTransaction = message.includeTransaction;
    }
    return obj;
  },
  create(base) {
    return BlobFilter$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseBlobFilter();
    message.id = object.id ?? 0;
    message.includeTransaction = object.includeTransaction ?? void 0;
    return message;
  }
};
function isSet(value) {
  return value !== null && value !== void 0;
}

const filter = {
  __proto__: null,
  BlobFilter: BlobFilter$1,
  Filter: Filter$1,
  HeaderFilter: HeaderFilter$1,
  TransactionFilter: TransactionFilter$1,
  ValidatorFilter: ValidatorFilter$1,
  headerFilterFromJSON: headerFilterFromJSON,
  headerFilterToJSON: headerFilterToJSON,
  protobufPackage: protobufPackage
};

const index = {
  __proto__: null,
  common: common,
  data: data,
  filter: filter
};

const MAX_U64 = 0xffffffffffffffffn;
const MAX_U32 = 0xffffffffn;
const Address = {
  encode(x) {
    const bn = BigInt(x);
    const x2 = bn & MAX_U32;
    const x1 = bn >> 32n & MAX_U64;
    const x0 = bn >> 96n & MAX_U64;
    return { x0, x1, x2: Number(x2) };
  },
  decode(p) {
    const x0 = p.x0 ?? 0n;
    const x1 = p.x1 ?? 0n;
    const x2 = BigInt(p.x2 ?? 0);
    const bn = x2 + (x1 << 32n) + (x0 << 96n);
    return `0x${bn.toString(16).padStart(40, "0")}`;
  }
};
const B256 = {
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
const U256 = {
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
    return x3 + (x2 << 64n) + (x1 << 128n) + (x0 << 192n);
  }
};
const U128 = {
  encode(x) {
    const x1 = x & MAX_U64;
    const x0 = x >> 64n & MAX_U64;
    return { x0, x1 };
  },
  decode(p) {
    const x0 = p.x0 ?? 0n;
    const x1 = p.x1 ?? 0n;
    return x1 + (x0 << 64n);
  }
};
const B384 = {
  encode(x) {
    const bn = BigInt(x);
    const x5 = bn & MAX_U64;
    const x4 = bn >> 64n & MAX_U64;
    const x3 = bn >> 128n & MAX_U64;
    const x2 = bn >> 192n & MAX_U64;
    const x1 = bn >> 256n & MAX_U64;
    const x0 = bn >> 320n & MAX_U64;
    return { x0, x1, x2, x3, x4, x5 };
  },
  decode(p) {
    const x0 = p.x0 ?? 0n;
    const x1 = p.x1 ?? 0n;
    const x2 = p.x2 ?? 0n;
    const x3 = p.x3 ?? 0n;
    const x4 = p.x4 ?? 0n;
    const x5 = p.x5 ?? 0n;
    const bn = x5 + (x4 << 64n) + (x3 << 128n) + (x2 << 192n) + (x1 << 256n) + (x0 << 320n);
    return `0x${bn.toString(16).padStart(96, "0")}`;
  }
};
const ValidatorStatus = {
  encode(x) {
    const enumMap = {
      pending_initialized: ValidatorStatus$1.PENDING_INITIALIZED,
      pending_queued: ValidatorStatus$1.PENDING_QUEUED,
      active_ongoing: ValidatorStatus$1.ACTIVE_ONGOING,
      active_exiting: ValidatorStatus$1.ACTIVE_EXITING,
      active_slashed: ValidatorStatus$1.ACTIVE_SLASHED,
      exited_unslashed: ValidatorStatus$1.EXITED_UNSLASHED,
      exited_slashed: ValidatorStatus$1.EXITED_SLASHED,
      withdrawal_possible: ValidatorStatus$1.WITHDRAWAL_POSSIBLE,
      withdrawal_done: ValidatorStatus$1.WITHDRAWAL_DONE,
      unknown: ValidatorStatus$1.UNKNOWN
    };
    return enumMap[x] ?? ValidatorStatus$1.UNKNOWN;
  },
  decode(p) {
    const enumMap = {
      [ValidatorStatus$1.PENDING_INITIALIZED]: "pending_initialized",
      [ValidatorStatus$1.PENDING_QUEUED]: "pending_queued",
      [ValidatorStatus$1.ACTIVE_ONGOING]: "active_ongoing",
      [ValidatorStatus$1.ACTIVE_EXITING]: "active_exiting",
      [ValidatorStatus$1.ACTIVE_SLASHED]: "active_slashed",
      [ValidatorStatus$1.EXITED_UNSLASHED]: "exited_unslashed",
      [ValidatorStatus$1.EXITED_SLASHED]: "exited_slashed",
      [ValidatorStatus$1.WITHDRAWAL_POSSIBLE]: "withdrawal_possible",
      [ValidatorStatus$1.WITHDRAWAL_DONE]: "withdrawal_done",
      [ValidatorStatus$1.UNKNOWN]: "unknown",
      [ValidatorStatus$1.UNRECOGNIZED]: "unknown"
    };
    return enumMap[p] ?? "unknown";
  }
};

const ExecutionPayload = MessageCodec({
  parentHash: RequiredCodec(B256),
  feeRecipient: RequiredCodec(Address),
  stateRoot: RequiredCodec(B256),
  receiptsRoot: RequiredCodec(B256),
  logsBloom: RequiredCodec(BytesFromUint8Array),
  prevRandao: RequiredCodec(B256),
  blockNumber: RequiredCodec(BigIntCodec),
  timestamp: RequiredCodec(DateCodec)
});
const BlockHeader = MessageCodec({
  slot: RequiredCodec(BigIntCodec),
  proposerIndex: RequiredCodec(NumberCodec),
  parentRoot: RequiredCodec(B256),
  stateRoot: RequiredCodec(B256),
  randaoReveal: RequiredCodec(BytesFromUint8Array),
  depositCount: RequiredCodec(BigIntCodec),
  depositRoot: RequiredCodec(B256),
  blockHash: OptionalCodec(B256),
  graffiti: RequiredCodec(B256),
  executionPayload: OptionalCodec(ExecutionPayload),
  blobKzgCommitments: ArrayCodec(B384)
});
const Validator = MessageCodec({
  filterIds: ArrayCodec(NumberCodec),
  validatorIndex: RequiredCodec(NumberCodec),
  balance: RequiredCodec(BigIntCodec),
  status: RequiredCodec(ValidatorStatus),
  pubkey: RequiredCodec(B384),
  withdrawalCredentials: RequiredCodec(B256),
  effectiveBalance: RequiredCodec(BigIntCodec),
  slashed: RequiredCodec(BooleanCodec),
  activationEligibilityEpoch: RequiredCodec(BigIntCodec),
  activationEpoch: RequiredCodec(BigIntCodec),
  exitEpoch: RequiredCodec(BigIntCodec),
  withdrawableEpoch: RequiredCodec(BigIntCodec)
});
const Blob = MessageCodec({
  filterIds: ArrayCodec(NumberCodec),
  blobIndex: RequiredCodec(NumberCodec),
  blob: RequiredCodec(BytesFromUint8Array),
  kzgCommitment: RequiredCodec(B384),
  kzgProof: RequiredCodec(B384),
  kzgCommitmentInclusionProof: ArrayCodec(B256),
  blobHash: RequiredCodec(B256),
  transactionIndex: RequiredCodec(NumberCodec),
  transactionHash: RequiredCodec(B256)
});
const Signature = MessageCodec({
  r: OptionalCodec(U256),
  s: OptionalCodec(U256),
  v: OptionalCodec(U256),
  YParity: OptionalCodec(BooleanCodec)
});
const AccessListItem = MessageCodec({
  address: RequiredCodec(Address),
  storageKeys: ArrayCodec(B256)
});
const Transaction = MessageCodec({
  filterIds: ArrayCodec(NumberCodec),
  transactionHash: RequiredCodec(B256),
  nonce: RequiredCodec(BigIntCodec),
  transactionIndex: RequiredCodec(NumberCodec),
  from: RequiredCodec(Address),
  to: OptionalCodec(Address),
  value: RequiredCodec(U256),
  gasPrice: OptionalCodec(U128),
  gasLimit: OptionalCodec(U128),
  maxFeePerGas: OptionalCodec(U128),
  maxPriorityFeePerGas: OptionalCodec(U128),
  input: RequiredCodec(BytesFromUint8Array),
  signature: OptionalCodec(Signature),
  chainId: OptionalCodec(BigIntCodec),
  accessList: ArrayCodec(AccessListItem),
  transactionType: RequiredCodec(BigIntCodec),
  maxFeePerBlobGas: OptionalCodec(U128),
  blobVersionedHashes: ArrayCodec(B256)
});
const Block = MessageCodec({
  header: RequiredCodec(BlockHeader),
  validators: ArrayCodec(Validator),
  blobs: ArrayCodec(Blob),
  transactions: ArrayCodec(Transaction)
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
const TransactionFilter = MessageCodec({
  id: OptionalCodec(NumberCodec),
  from: OptionalCodec(Address),
  to: OptionalCodec(Address),
  create: OptionalCodec(BooleanCodec),
  includeBlob: OptionalCodec(BooleanCodec)
});
const ValidatorFilter = MessageCodec({
  id: OptionalCodec(NumberCodec),
  validatorIndex: OptionalCodec(NumberCodec),
  status: OptionalCodec(ValidatorStatus)
});
const BlobFilter = MessageCodec({
  id: OptionalCodec(NumberCodec),
  includeTransaction: OptionalCodec(BooleanCodec)
});
const Filter = MessageCodec({
  header: OptionalCodec(HeaderFilter),
  transactions: OptionalCodec(ArrayCodec(TransactionFilter)),
  validators: OptionalCodec(ArrayCodec(ValidatorFilter)),
  blobs: OptionalCodec(ArrayCodec(BlobFilter))
});
const FilterFromBytes = {
  encode(value) {
    const filter = Filter.encode(value);
    return Filter$1.encode(filter).finish();
  },
  decode(value) {
    const filter = Filter$1.decode(value);
    return Filter.decode(filter);
  }
};
function mergeFilter(a, b) {
  const header = mergeHeaderFilter(a.header, b.header);
  return {
    header,
    transactions: [...a.transactions ?? [], ...b.transactions ?? []],
    validators: [...a.validators ?? [], ...b.validators ?? []],
    blobs: [...a.blobs ?? [], ...b.blobs ?? []]
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

const BeaconChainStream = new StreamConfig(
  FilterFromBytes,
  BlockFromBytes,
  mergeFilter,
  "beaconchain"
);

export { AccessListItem, Address, B256, B384, BeaconChainStream, Blob, BlobFilter, Block, BlockFromBytes, BlockHeader, ExecutionPayload, Filter, FilterFromBytes, HeaderFilter, Signature, Transaction, TransactionFilter, U128, U256, Validator, ValidatorFilter, ValidatorStatus, mergeFilter, index as proto };
//# sourceMappingURL=index.mjs.map
