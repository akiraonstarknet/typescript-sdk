import { BytesFromUint8Array, StreamConfig } from '@apibara/protocol';
import { MessageCodec, RequiredCodec, BigIntCodec, OptionalCodec, DateCodec, ArrayCodec, NumberCodec, BooleanCodec, OneOfCodec, StringCodec } from '@apibara/protocol/codec';
import Long from 'long';
import _m0 from 'protobufjs/minimal.js';

const MAX_U64 = 0xffffffffffffffffn;
const MAX_U32 = 0xffffffffn;
const Address$1 = {
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
const B256$1 = {
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
const U256$1 = {
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
const U128$1 = {
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

const protobufPackage$2 = "evm.v2";
function createBaseAddress() {
  return { x0: BigInt("0"), x1: BigInt("0"), x2: 0 };
}
const Address = {
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
    return Address.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseAddress();
    message.x0 = object.x0 ?? BigInt("0");
    message.x1 = object.x1 ?? BigInt("0");
    message.x2 = object.x2 ?? 0;
    return message;
  }
};
function createBaseBloom() {
  return { value: new Uint8Array(0) };
}
const Bloom$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.value !== void 0 && message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBloom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.value = reader.bytes();
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
    return { value: isSet$3(object.value) ? bytesFromBase64$1(object.value) : new Uint8Array(0) };
  },
  toJSON(message) {
    const obj = {};
    if (message.value !== void 0 && message.value.length !== 0) {
      obj.value = base64FromBytes$1(message.value);
    }
    return obj;
  },
  create(base) {
    return Bloom$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseBloom();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  }
};
function createBaseU128() {
  return { x0: BigInt("0"), x1: BigInt("0") };
}
const U128 = {
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
    return U128.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseU128();
    message.x0 = object.x0 ?? BigInt("0");
    message.x1 = object.x1 ?? BigInt("0");
    return message;
  }
};
function createBaseU256() {
  return { x0: BigInt("0"), x1: BigInt("0"), x2: BigInt("0"), x3: BigInt("0") };
}
const U256 = {
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
    return U256.fromPartial(base ?? {});
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
const B256 = {
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
    return B256.fromPartial(base ?? {});
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
function bytesFromBase64$1(b64) {
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
function base64FromBytes$1(arr) {
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
  Address: Address,
  B256: B256,
  Bloom: Bloom$1,
  U128: U128,
  U256: U256,
  protobufPackage: protobufPackage$2
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

const protobufPackage$1 = "evm.v2";
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
var CallType$1 = /* @__PURE__ */ ((CallType2) => {
  CallType2[CallType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CallType2[CallType2["CALL"] = 1] = "CALL";
  CallType2[CallType2["CALL_CODE"] = 2] = "CALL_CODE";
  CallType2[CallType2["DELEGATE_CALL"] = 3] = "DELEGATE_CALL";
  CallType2[CallType2["STATIC_CALL"] = 4] = "STATIC_CALL";
  CallType2[CallType2["AUTH_CALL"] = 5] = "AUTH_CALL";
  CallType2[CallType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return CallType2;
})(CallType$1 || {});
function callTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "CALL_TYPE_UNSPECIFIED":
      return 0 /* UNSPECIFIED */;
    case 1:
    case "CALL_TYPE_CALL":
      return 1 /* CALL */;
    case 2:
    case "CALL_TYPE_CALL_CODE":
      return 2 /* CALL_CODE */;
    case 3:
    case "CALL_TYPE_DELEGATE_CALL":
      return 3 /* DELEGATE_CALL */;
    case 4:
    case "CALL_TYPE_STATIC_CALL":
      return 4 /* STATIC_CALL */;
    case 5:
    case "CALL_TYPE_AUTH_CALL":
      return 5 /* AUTH_CALL */;
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
    case 1 /* CALL */:
      return "CALL_TYPE_CALL";
    case 2 /* CALL_CODE */:
      return "CALL_TYPE_CALL_CODE";
    case 3 /* DELEGATE_CALL */:
      return "CALL_TYPE_DELEGATE_CALL";
    case 4 /* STATIC_CALL */:
      return "CALL_TYPE_STATIC_CALL";
    case 5 /* AUTH_CALL */:
      return "CALL_TYPE_AUTH_CALL";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var CreationMethod$1 = /* @__PURE__ */ ((CreationMethod2) => {
  CreationMethod2[CreationMethod2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CreationMethod2[CreationMethod2["CREATE"] = 1] = "CREATE";
  CreationMethod2[CreationMethod2["CREATE2"] = 2] = "CREATE2";
  CreationMethod2[CreationMethod2["EOF_CREATE"] = 3] = "EOF_CREATE";
  CreationMethod2[CreationMethod2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return CreationMethod2;
})(CreationMethod$1 || {});
function creationMethodFromJSON(object) {
  switch (object) {
    case 0:
    case "CREATION_METHOD_UNSPECIFIED":
      return 0 /* UNSPECIFIED */;
    case 1:
    case "CREATION_METHOD_CREATE":
      return 1 /* CREATE */;
    case 2:
    case "CREATION_METHOD_CREATE2":
      return 2 /* CREATE2 */;
    case 3:
    case "CREATION_METHOD_EOF_CREATE":
      return 3 /* EOF_CREATE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function creationMethodToJSON(object) {
  switch (object) {
    case 0 /* UNSPECIFIED */:
      return "CREATION_METHOD_UNSPECIFIED";
    case 1 /* CREATE */:
      return "CREATION_METHOD_CREATE";
    case 2 /* CREATE2 */:
      return "CREATION_METHOD_CREATE2";
    case 3 /* EOF_CREATE */:
      return "CREATION_METHOD_EOF_CREATE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var RewardType$1 = /* @__PURE__ */ ((RewardType2) => {
  RewardType2[RewardType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RewardType2[RewardType2["BLOCK"] = 1] = "BLOCK";
  RewardType2[RewardType2["UNCLE"] = 2] = "UNCLE";
  RewardType2[RewardType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return RewardType2;
})(RewardType$1 || {});
function rewardTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "REWARD_TYPE_UNSPECIFIED":
      return 0 /* UNSPECIFIED */;
    case 1:
    case "REWARD_TYPE_BLOCK":
      return 1 /* BLOCK */;
    case 2:
    case "REWARD_TYPE_UNCLE":
      return 2 /* UNCLE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function rewardTypeToJSON(object) {
  switch (object) {
    case 0 /* UNSPECIFIED */:
      return "REWARD_TYPE_UNSPECIFIED";
    case 1 /* BLOCK */:
      return "REWARD_TYPE_BLOCK";
    case 2 /* UNCLE */:
      return "REWARD_TYPE_UNCLE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseBlock() {
  return { header: void 0, withdrawals: [], transactions: [], receipts: [], logs: [], traces: [] };
}
const Block$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.header !== void 0) {
      BlockHeader$1.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.withdrawals !== void 0 && message.withdrawals.length !== 0) {
      for (const v of message.withdrawals) {
        Withdrawal$1.encode(v, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.transactions !== void 0 && message.transactions.length !== 0) {
      for (const v of message.transactions) {
        Transaction$1.encode(v, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.receipts !== void 0 && message.receipts.length !== 0) {
      for (const v of message.receipts) {
        TransactionReceipt$1.encode(v, writer.uint32(34).fork()).ldelim();
      }
    }
    if (message.logs !== void 0 && message.logs.length !== 0) {
      for (const v of message.logs) {
        Log$1.encode(v, writer.uint32(42).fork()).ldelim();
      }
    }
    if (message.traces !== void 0 && message.traces.length !== 0) {
      for (const v of message.traces) {
        TransactionTrace$1.encode(v, writer.uint32(50).fork()).ldelim();
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
          message.withdrawals.push(Withdrawal$1.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.transactions.push(Transaction$1.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.receipts.push(TransactionReceipt$1.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.logs.push(Log$1.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
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
      withdrawals: globalThis.Array.isArray(object?.withdrawals) ? object.withdrawals.map((e) => Withdrawal$1.fromJSON(e)) : [],
      transactions: globalThis.Array.isArray(object?.transactions) ? object.transactions.map((e) => Transaction$1.fromJSON(e)) : [],
      receipts: globalThis.Array.isArray(object?.receipts) ? object.receipts.map((e) => TransactionReceipt$1.fromJSON(e)) : [],
      logs: globalThis.Array.isArray(object?.logs) ? object.logs.map((e) => Log$1.fromJSON(e)) : [],
      traces: globalThis.Array.isArray(object?.traces) ? object.traces.map((e) => TransactionTrace$1.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.header !== void 0) {
      obj.header = BlockHeader$1.toJSON(message.header);
    }
    if (message.withdrawals?.length) {
      obj.withdrawals = message.withdrawals.map((e) => Withdrawal$1.toJSON(e));
    }
    if (message.transactions?.length) {
      obj.transactions = message.transactions.map((e) => Transaction$1.toJSON(e));
    }
    if (message.receipts?.length) {
      obj.receipts = message.receipts.map((e) => TransactionReceipt$1.toJSON(e));
    }
    if (message.logs?.length) {
      obj.logs = message.logs.map((e) => Log$1.toJSON(e));
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
    message.withdrawals = object.withdrawals?.map((e) => Withdrawal$1.fromPartial(e)) || [];
    message.transactions = object.transactions?.map((e) => Transaction$1.fromPartial(e)) || [];
    message.receipts = object.receipts?.map((e) => TransactionReceipt$1.fromPartial(e)) || [];
    message.logs = object.logs?.map((e) => Log$1.fromPartial(e)) || [];
    message.traces = object.traces?.map((e) => TransactionTrace$1.fromPartial(e)) || [];
    return message;
  }
};
function createBaseBlockHeader() {
  return {
    blockNumber: BigInt("0"),
    blockHash: void 0,
    parentBlockHash: void 0,
    unclesHash: void 0,
    miner: void 0,
    stateRoot: void 0,
    transactionsRoot: void 0,
    receiptsRoot: void 0,
    logsBloom: void 0,
    difficulty: void 0,
    gasLimit: void 0,
    gasUsed: void 0,
    timestamp: void 0,
    extraData: new Uint8Array(0),
    mixHash: void 0,
    nonce: void 0,
    baseFeePerGas: void 0,
    withdrawalsRoot: void 0,
    totalDifficulty: void 0,
    blobGasUsed: void 0,
    excessBlobGas: void 0,
    parentBeaconBlockRoot: void 0,
    requestsHash: void 0
  };
}
const BlockHeader$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.blockNumber !== void 0 && message.blockNumber !== BigInt("0")) {
      if (BigInt.asUintN(64, message.blockNumber) !== message.blockNumber) {
        throw new globalThis.Error("value provided for field message.blockNumber of type uint64 too large");
      }
      writer.uint32(8).uint64(message.blockNumber.toString());
    }
    if (message.blockHash !== void 0) {
      B256.encode(message.blockHash, writer.uint32(18).fork()).ldelim();
    }
    if (message.parentBlockHash !== void 0) {
      B256.encode(message.parentBlockHash, writer.uint32(26).fork()).ldelim();
    }
    if (message.unclesHash !== void 0) {
      B256.encode(message.unclesHash, writer.uint32(34).fork()).ldelim();
    }
    if (message.miner !== void 0) {
      Address.encode(message.miner, writer.uint32(42).fork()).ldelim();
    }
    if (message.stateRoot !== void 0) {
      B256.encode(message.stateRoot, writer.uint32(50).fork()).ldelim();
    }
    if (message.transactionsRoot !== void 0) {
      B256.encode(message.transactionsRoot, writer.uint32(58).fork()).ldelim();
    }
    if (message.receiptsRoot !== void 0) {
      B256.encode(message.receiptsRoot, writer.uint32(66).fork()).ldelim();
    }
    if (message.logsBloom !== void 0) {
      Bloom$1.encode(message.logsBloom, writer.uint32(74).fork()).ldelim();
    }
    if (message.difficulty !== void 0) {
      U256.encode(message.difficulty, writer.uint32(82).fork()).ldelim();
    }
    if (message.gasLimit !== void 0) {
      U128.encode(message.gasLimit, writer.uint32(90).fork()).ldelim();
    }
    if (message.gasUsed !== void 0) {
      U128.encode(message.gasUsed, writer.uint32(98).fork()).ldelim();
    }
    if (message.timestamp !== void 0) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(106).fork()).ldelim();
    }
    if (message.extraData !== void 0 && message.extraData.length !== 0) {
      writer.uint32(114).bytes(message.extraData);
    }
    if (message.mixHash !== void 0) {
      B256.encode(message.mixHash, writer.uint32(122).fork()).ldelim();
    }
    if (message.nonce !== void 0) {
      if (BigInt.asUintN(64, message.nonce) !== message.nonce) {
        throw new globalThis.Error("value provided for field message.nonce of type uint64 too large");
      }
      writer.uint32(128).uint64(message.nonce.toString());
    }
    if (message.baseFeePerGas !== void 0) {
      U128.encode(message.baseFeePerGas, writer.uint32(138).fork()).ldelim();
    }
    if (message.withdrawalsRoot !== void 0) {
      B256.encode(message.withdrawalsRoot, writer.uint32(146).fork()).ldelim();
    }
    if (message.totalDifficulty !== void 0) {
      U256.encode(message.totalDifficulty, writer.uint32(154).fork()).ldelim();
    }
    if (message.blobGasUsed !== void 0) {
      U128.encode(message.blobGasUsed, writer.uint32(162).fork()).ldelim();
    }
    if (message.excessBlobGas !== void 0) {
      U128.encode(message.excessBlobGas, writer.uint32(170).fork()).ldelim();
    }
    if (message.parentBeaconBlockRoot !== void 0) {
      B256.encode(message.parentBeaconBlockRoot, writer.uint32(178).fork()).ldelim();
    }
    if (message.requestsHash !== void 0) {
      B256.encode(message.requestsHash, writer.uint32(186).fork()).ldelim();
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
          message.blockNumber = longToBigint(reader.uint64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.blockHash = B256.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.parentBlockHash = B256.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.unclesHash = B256.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.miner = Address.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.stateRoot = B256.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.transactionsRoot = B256.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.receiptsRoot = B256.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }
          message.logsBloom = Bloom$1.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }
          message.difficulty = U256.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }
          message.gasLimit = U128.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }
          message.gasUsed = U128.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }
          message.extraData = reader.bytes();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }
          message.mixHash = B256.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }
          message.nonce = longToBigint(reader.uint64());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }
          message.baseFeePerGas = U128.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }
          message.withdrawalsRoot = B256.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }
          message.totalDifficulty = U256.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }
          message.blobGasUsed = U128.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }
          message.excessBlobGas = U128.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }
          message.parentBeaconBlockRoot = B256.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }
          message.requestsHash = B256.decode(reader, reader.uint32());
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
      blockNumber: isSet$1(object.blockNumber) ? BigInt(object.blockNumber) : BigInt("0"),
      blockHash: isSet$1(object.blockHash) ? B256.fromJSON(object.blockHash) : void 0,
      parentBlockHash: isSet$1(object.parentBlockHash) ? B256.fromJSON(object.parentBlockHash) : void 0,
      unclesHash: isSet$1(object.unclesHash) ? B256.fromJSON(object.unclesHash) : void 0,
      miner: isSet$1(object.miner) ? Address.fromJSON(object.miner) : void 0,
      stateRoot: isSet$1(object.stateRoot) ? B256.fromJSON(object.stateRoot) : void 0,
      transactionsRoot: isSet$1(object.transactionsRoot) ? B256.fromJSON(object.transactionsRoot) : void 0,
      receiptsRoot: isSet$1(object.receiptsRoot) ? B256.fromJSON(object.receiptsRoot) : void 0,
      logsBloom: isSet$1(object.logsBloom) ? Bloom$1.fromJSON(object.logsBloom) : void 0,
      difficulty: isSet$1(object.difficulty) ? U256.fromJSON(object.difficulty) : void 0,
      gasLimit: isSet$1(object.gasLimit) ? U128.fromJSON(object.gasLimit) : void 0,
      gasUsed: isSet$1(object.gasUsed) ? U128.fromJSON(object.gasUsed) : void 0,
      timestamp: isSet$1(object.timestamp) ? fromJsonTimestamp(object.timestamp) : void 0,
      extraData: isSet$1(object.extraData) ? bytesFromBase64(object.extraData) : new Uint8Array(0),
      mixHash: isSet$1(object.mixHash) ? B256.fromJSON(object.mixHash) : void 0,
      nonce: isSet$1(object.nonce) ? BigInt(object.nonce) : void 0,
      baseFeePerGas: isSet$1(object.baseFeePerGas) ? U128.fromJSON(object.baseFeePerGas) : void 0,
      withdrawalsRoot: isSet$1(object.withdrawalsRoot) ? B256.fromJSON(object.withdrawalsRoot) : void 0,
      totalDifficulty: isSet$1(object.totalDifficulty) ? U256.fromJSON(object.totalDifficulty) : void 0,
      blobGasUsed: isSet$1(object.blobGasUsed) ? U128.fromJSON(object.blobGasUsed) : void 0,
      excessBlobGas: isSet$1(object.excessBlobGas) ? U128.fromJSON(object.excessBlobGas) : void 0,
      parentBeaconBlockRoot: isSet$1(object.parentBeaconBlockRoot) ? B256.fromJSON(object.parentBeaconBlockRoot) : void 0,
      requestsHash: isSet$1(object.requestsHash) ? B256.fromJSON(object.requestsHash) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.blockNumber !== void 0 && message.blockNumber !== BigInt("0")) {
      obj.blockNumber = message.blockNumber.toString();
    }
    if (message.blockHash !== void 0) {
      obj.blockHash = B256.toJSON(message.blockHash);
    }
    if (message.parentBlockHash !== void 0) {
      obj.parentBlockHash = B256.toJSON(message.parentBlockHash);
    }
    if (message.unclesHash !== void 0) {
      obj.unclesHash = B256.toJSON(message.unclesHash);
    }
    if (message.miner !== void 0) {
      obj.miner = Address.toJSON(message.miner);
    }
    if (message.stateRoot !== void 0) {
      obj.stateRoot = B256.toJSON(message.stateRoot);
    }
    if (message.transactionsRoot !== void 0) {
      obj.transactionsRoot = B256.toJSON(message.transactionsRoot);
    }
    if (message.receiptsRoot !== void 0) {
      obj.receiptsRoot = B256.toJSON(message.receiptsRoot);
    }
    if (message.logsBloom !== void 0) {
      obj.logsBloom = Bloom$1.toJSON(message.logsBloom);
    }
    if (message.difficulty !== void 0) {
      obj.difficulty = U256.toJSON(message.difficulty);
    }
    if (message.gasLimit !== void 0) {
      obj.gasLimit = U128.toJSON(message.gasLimit);
    }
    if (message.gasUsed !== void 0) {
      obj.gasUsed = U128.toJSON(message.gasUsed);
    }
    if (message.timestamp !== void 0) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.extraData !== void 0 && message.extraData.length !== 0) {
      obj.extraData = base64FromBytes(message.extraData);
    }
    if (message.mixHash !== void 0) {
      obj.mixHash = B256.toJSON(message.mixHash);
    }
    if (message.nonce !== void 0) {
      obj.nonce = message.nonce.toString();
    }
    if (message.baseFeePerGas !== void 0) {
      obj.baseFeePerGas = U128.toJSON(message.baseFeePerGas);
    }
    if (message.withdrawalsRoot !== void 0) {
      obj.withdrawalsRoot = B256.toJSON(message.withdrawalsRoot);
    }
    if (message.totalDifficulty !== void 0) {
      obj.totalDifficulty = U256.toJSON(message.totalDifficulty);
    }
    if (message.blobGasUsed !== void 0) {
      obj.blobGasUsed = U128.toJSON(message.blobGasUsed);
    }
    if (message.excessBlobGas !== void 0) {
      obj.excessBlobGas = U128.toJSON(message.excessBlobGas);
    }
    if (message.parentBeaconBlockRoot !== void 0) {
      obj.parentBeaconBlockRoot = B256.toJSON(message.parentBeaconBlockRoot);
    }
    if (message.requestsHash !== void 0) {
      obj.requestsHash = B256.toJSON(message.requestsHash);
    }
    return obj;
  },
  create(base) {
    return BlockHeader$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseBlockHeader();
    message.blockNumber = object.blockNumber ?? BigInt("0");
    message.blockHash = object.blockHash !== void 0 && object.blockHash !== null ? B256.fromPartial(object.blockHash) : void 0;
    message.parentBlockHash = object.parentBlockHash !== void 0 && object.parentBlockHash !== null ? B256.fromPartial(object.parentBlockHash) : void 0;
    message.unclesHash = object.unclesHash !== void 0 && object.unclesHash !== null ? B256.fromPartial(object.unclesHash) : void 0;
    message.miner = object.miner !== void 0 && object.miner !== null ? Address.fromPartial(object.miner) : void 0;
    message.stateRoot = object.stateRoot !== void 0 && object.stateRoot !== null ? B256.fromPartial(object.stateRoot) : void 0;
    message.transactionsRoot = object.transactionsRoot !== void 0 && object.transactionsRoot !== null ? B256.fromPartial(object.transactionsRoot) : void 0;
    message.receiptsRoot = object.receiptsRoot !== void 0 && object.receiptsRoot !== null ? B256.fromPartial(object.receiptsRoot) : void 0;
    message.logsBloom = object.logsBloom !== void 0 && object.logsBloom !== null ? Bloom$1.fromPartial(object.logsBloom) : void 0;
    message.difficulty = object.difficulty !== void 0 && object.difficulty !== null ? U256.fromPartial(object.difficulty) : void 0;
    message.gasLimit = object.gasLimit !== void 0 && object.gasLimit !== null ? U128.fromPartial(object.gasLimit) : void 0;
    message.gasUsed = object.gasUsed !== void 0 && object.gasUsed !== null ? U128.fromPartial(object.gasUsed) : void 0;
    message.timestamp = object.timestamp ?? void 0;
    message.extraData = object.extraData ?? new Uint8Array(0);
    message.mixHash = object.mixHash !== void 0 && object.mixHash !== null ? B256.fromPartial(object.mixHash) : void 0;
    message.nonce = object.nonce ?? void 0;
    message.baseFeePerGas = object.baseFeePerGas !== void 0 && object.baseFeePerGas !== null ? U128.fromPartial(object.baseFeePerGas) : void 0;
    message.withdrawalsRoot = object.withdrawalsRoot !== void 0 && object.withdrawalsRoot !== null ? B256.fromPartial(object.withdrawalsRoot) : void 0;
    message.totalDifficulty = object.totalDifficulty !== void 0 && object.totalDifficulty !== null ? U256.fromPartial(object.totalDifficulty) : void 0;
    message.blobGasUsed = object.blobGasUsed !== void 0 && object.blobGasUsed !== null ? U128.fromPartial(object.blobGasUsed) : void 0;
    message.excessBlobGas = object.excessBlobGas !== void 0 && object.excessBlobGas !== null ? U128.fromPartial(object.excessBlobGas) : void 0;
    message.parentBeaconBlockRoot = object.parentBeaconBlockRoot !== void 0 && object.parentBeaconBlockRoot !== null ? B256.fromPartial(object.parentBeaconBlockRoot) : void 0;
    message.requestsHash = object.requestsHash !== void 0 && object.requestsHash !== null ? B256.fromPartial(object.requestsHash) : void 0;
    return message;
  }
};
function createBaseWithdrawal() {
  return {
    filterIds: [],
    withdrawalIndex: 0,
    index: BigInt("0"),
    validatorIndex: 0,
    address: void 0,
    amount: BigInt("0")
  };
}
const Withdrawal$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.filterIds !== void 0 && message.filterIds.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.filterIds) {
        writer.uint32(v);
      }
      writer.ldelim();
    }
    if (message.withdrawalIndex !== void 0 && message.withdrawalIndex !== 0) {
      writer.uint32(16).uint32(message.withdrawalIndex);
    }
    if (message.index !== void 0 && message.index !== BigInt("0")) {
      if (BigInt.asUintN(64, message.index) !== message.index) {
        throw new globalThis.Error("value provided for field message.index of type uint64 too large");
      }
      writer.uint32(24).uint64(message.index.toString());
    }
    if (message.validatorIndex !== void 0 && message.validatorIndex !== 0) {
      writer.uint32(32).uint32(message.validatorIndex);
    }
    if (message.address !== void 0) {
      Address.encode(message.address, writer.uint32(42).fork()).ldelim();
    }
    if (message.amount !== void 0 && message.amount !== BigInt("0")) {
      if (BigInt.asUintN(64, message.amount) !== message.amount) {
        throw new globalThis.Error("value provided for field message.amount of type uint64 too large");
      }
      writer.uint32(48).uint64(message.amount.toString());
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseWithdrawal();
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
          message.withdrawalIndex = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.index = longToBigint(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.validatorIndex = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.address = Address.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.amount = longToBigint(reader.uint64());
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
      withdrawalIndex: isSet$1(object.withdrawalIndex) ? globalThis.Number(object.withdrawalIndex) : 0,
      index: isSet$1(object.index) ? BigInt(object.index) : BigInt("0"),
      validatorIndex: isSet$1(object.validatorIndex) ? globalThis.Number(object.validatorIndex) : 0,
      address: isSet$1(object.address) ? Address.fromJSON(object.address) : void 0,
      amount: isSet$1(object.amount) ? BigInt(object.amount) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.filterIds?.length) {
      obj.filterIds = message.filterIds.map((e) => Math.round(e));
    }
    if (message.withdrawalIndex !== void 0 && message.withdrawalIndex !== 0) {
      obj.withdrawalIndex = Math.round(message.withdrawalIndex);
    }
    if (message.index !== void 0 && message.index !== BigInt("0")) {
      obj.index = message.index.toString();
    }
    if (message.validatorIndex !== void 0 && message.validatorIndex !== 0) {
      obj.validatorIndex = Math.round(message.validatorIndex);
    }
    if (message.address !== void 0) {
      obj.address = Address.toJSON(message.address);
    }
    if (message.amount !== void 0 && message.amount !== BigInt("0")) {
      obj.amount = message.amount.toString();
    }
    return obj;
  },
  create(base) {
    return Withdrawal$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseWithdrawal();
    message.filterIds = object.filterIds?.map((e) => e) || [];
    message.withdrawalIndex = object.withdrawalIndex ?? 0;
    message.index = object.index ?? BigInt("0");
    message.validatorIndex = object.validatorIndex ?? 0;
    message.address = object.address !== void 0 && object.address !== null ? Address.fromPartial(object.address) : void 0;
    message.amount = object.amount ?? BigInt("0");
    return message;
  }
};
function createBaseTransaction() {
  return {
    filterIds: [],
    transactionIndex: 0,
    transactionHash: void 0,
    nonce: BigInt("0"),
    from: void 0,
    to: void 0,
    value: void 0,
    gasPrice: void 0,
    gas: void 0,
    maxFeePerGas: void 0,
    maxPriorityFeePerGas: void 0,
    input: new Uint8Array(0),
    signature: void 0,
    chainId: void 0,
    accessList: [],
    transactionType: BigInt("0"),
    maxFeePerBlobGas: void 0,
    blobVersionedHashes: [],
    transactionStatus: 0
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
    if (message.transactionIndex !== void 0 && message.transactionIndex !== 0) {
      writer.uint32(16).uint32(message.transactionIndex);
    }
    if (message.transactionHash !== void 0) {
      B256.encode(message.transactionHash, writer.uint32(26).fork()).ldelim();
    }
    if (message.nonce !== void 0 && message.nonce !== BigInt("0")) {
      if (BigInt.asUintN(64, message.nonce) !== message.nonce) {
        throw new globalThis.Error("value provided for field message.nonce of type uint64 too large");
      }
      writer.uint32(32).uint64(message.nonce.toString());
    }
    if (message.from !== void 0) {
      Address.encode(message.from, writer.uint32(42).fork()).ldelim();
    }
    if (message.to !== void 0) {
      Address.encode(message.to, writer.uint32(50).fork()).ldelim();
    }
    if (message.value !== void 0) {
      U256.encode(message.value, writer.uint32(58).fork()).ldelim();
    }
    if (message.gasPrice !== void 0) {
      U128.encode(message.gasPrice, writer.uint32(66).fork()).ldelim();
    }
    if (message.gas !== void 0) {
      U128.encode(message.gas, writer.uint32(74).fork()).ldelim();
    }
    if (message.maxFeePerGas !== void 0) {
      U128.encode(message.maxFeePerGas, writer.uint32(82).fork()).ldelim();
    }
    if (message.maxPriorityFeePerGas !== void 0) {
      U128.encode(message.maxPriorityFeePerGas, writer.uint32(90).fork()).ldelim();
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
      U128.encode(message.maxFeePerBlobGas, writer.uint32(138).fork()).ldelim();
    }
    if (message.blobVersionedHashes !== void 0 && message.blobVersionedHashes.length !== 0) {
      for (const v of message.blobVersionedHashes) {
        B256.encode(v, writer.uint32(146).fork()).ldelim();
      }
    }
    if (message.transactionStatus !== void 0 && message.transactionStatus !== 0) {
      writer.uint32(152).int32(message.transactionStatus);
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
          if (tag !== 16) {
            break;
          }
          message.transactionIndex = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.transactionHash = B256.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.nonce = longToBigint(reader.uint64());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.from = Address.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.to = Address.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.value = U256.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.gasPrice = U128.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }
          message.gas = U128.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }
          message.maxFeePerGas = U128.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }
          message.maxPriorityFeePerGas = U128.decode(reader, reader.uint32());
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
          message.maxFeePerBlobGas = U128.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }
          message.blobVersionedHashes.push(B256.decode(reader, reader.uint32()));
          continue;
        case 19:
          if (tag !== 152) {
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
      filterIds: globalThis.Array.isArray(object?.filterIds) ? object.filterIds.map((e) => globalThis.Number(e)) : [],
      transactionIndex: isSet$1(object.transactionIndex) ? globalThis.Number(object.transactionIndex) : 0,
      transactionHash: isSet$1(object.transactionHash) ? B256.fromJSON(object.transactionHash) : void 0,
      nonce: isSet$1(object.nonce) ? BigInt(object.nonce) : BigInt("0"),
      from: isSet$1(object.from) ? Address.fromJSON(object.from) : void 0,
      to: isSet$1(object.to) ? Address.fromJSON(object.to) : void 0,
      value: isSet$1(object.value) ? U256.fromJSON(object.value) : void 0,
      gasPrice: isSet$1(object.gasPrice) ? U128.fromJSON(object.gasPrice) : void 0,
      gas: isSet$1(object.gas) ? U128.fromJSON(object.gas) : void 0,
      maxFeePerGas: isSet$1(object.maxFeePerGas) ? U128.fromJSON(object.maxFeePerGas) : void 0,
      maxPriorityFeePerGas: isSet$1(object.maxPriorityFeePerGas) ? U128.fromJSON(object.maxPriorityFeePerGas) : void 0,
      input: isSet$1(object.input) ? bytesFromBase64(object.input) : new Uint8Array(0),
      signature: isSet$1(object.signature) ? Signature$1.fromJSON(object.signature) : void 0,
      chainId: isSet$1(object.chainId) ? BigInt(object.chainId) : void 0,
      accessList: globalThis.Array.isArray(object?.accessList) ? object.accessList.map((e) => AccessListItem$1.fromJSON(e)) : [],
      transactionType: isSet$1(object.transactionType) ? BigInt(object.transactionType) : BigInt("0"),
      maxFeePerBlobGas: isSet$1(object.maxFeePerBlobGas) ? U128.fromJSON(object.maxFeePerBlobGas) : void 0,
      blobVersionedHashes: globalThis.Array.isArray(object?.blobVersionedHashes) ? object.blobVersionedHashes.map((e) => B256.fromJSON(e)) : [],
      transactionStatus: isSet$1(object.transactionStatus) ? transactionStatusFromJSON(object.transactionStatus) : 0
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
      obj.transactionHash = B256.toJSON(message.transactionHash);
    }
    if (message.nonce !== void 0 && message.nonce !== BigInt("0")) {
      obj.nonce = message.nonce.toString();
    }
    if (message.from !== void 0) {
      obj.from = Address.toJSON(message.from);
    }
    if (message.to !== void 0) {
      obj.to = Address.toJSON(message.to);
    }
    if (message.value !== void 0) {
      obj.value = U256.toJSON(message.value);
    }
    if (message.gasPrice !== void 0) {
      obj.gasPrice = U128.toJSON(message.gasPrice);
    }
    if (message.gas !== void 0) {
      obj.gas = U128.toJSON(message.gas);
    }
    if (message.maxFeePerGas !== void 0) {
      obj.maxFeePerGas = U128.toJSON(message.maxFeePerGas);
    }
    if (message.maxPriorityFeePerGas !== void 0) {
      obj.maxPriorityFeePerGas = U128.toJSON(message.maxPriorityFeePerGas);
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
      obj.maxFeePerBlobGas = U128.toJSON(message.maxFeePerBlobGas);
    }
    if (message.blobVersionedHashes?.length) {
      obj.blobVersionedHashes = message.blobVersionedHashes.map((e) => B256.toJSON(e));
    }
    if (message.transactionStatus !== void 0 && message.transactionStatus !== 0) {
      obj.transactionStatus = transactionStatusToJSON(message.transactionStatus);
    }
    return obj;
  },
  create(base) {
    return Transaction$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTransaction();
    message.filterIds = object.filterIds?.map((e) => e) || [];
    message.transactionIndex = object.transactionIndex ?? 0;
    message.transactionHash = object.transactionHash !== void 0 && object.transactionHash !== null ? B256.fromPartial(object.transactionHash) : void 0;
    message.nonce = object.nonce ?? BigInt("0");
    message.from = object.from !== void 0 && object.from !== null ? Address.fromPartial(object.from) : void 0;
    message.to = object.to !== void 0 && object.to !== null ? Address.fromPartial(object.to) : void 0;
    message.value = object.value !== void 0 && object.value !== null ? U256.fromPartial(object.value) : void 0;
    message.gasPrice = object.gasPrice !== void 0 && object.gasPrice !== null ? U128.fromPartial(object.gasPrice) : void 0;
    message.gas = object.gas !== void 0 && object.gas !== null ? U128.fromPartial(object.gas) : void 0;
    message.maxFeePerGas = object.maxFeePerGas !== void 0 && object.maxFeePerGas !== null ? U128.fromPartial(object.maxFeePerGas) : void 0;
    message.maxPriorityFeePerGas = object.maxPriorityFeePerGas !== void 0 && object.maxPriorityFeePerGas !== null ? U128.fromPartial(object.maxPriorityFeePerGas) : void 0;
    message.input = object.input ?? new Uint8Array(0);
    message.signature = object.signature !== void 0 && object.signature !== null ? Signature$1.fromPartial(object.signature) : void 0;
    message.chainId = object.chainId ?? void 0;
    message.accessList = object.accessList?.map((e) => AccessListItem$1.fromPartial(e)) || [];
    message.transactionType = object.transactionType ?? BigInt("0");
    message.maxFeePerBlobGas = object.maxFeePerBlobGas !== void 0 && object.maxFeePerBlobGas !== null ? U128.fromPartial(object.maxFeePerBlobGas) : void 0;
    message.blobVersionedHashes = object.blobVersionedHashes?.map((e) => B256.fromPartial(e)) || [];
    message.transactionStatus = object.transactionStatus ?? 0;
    return message;
  }
};
function createBaseTransactionReceipt() {
  return {
    filterIds: [],
    transactionIndex: 0,
    transactionHash: void 0,
    cumulativeGasUsed: void 0,
    gasUsed: void 0,
    effectiveGasPrice: void 0,
    from: void 0,
    to: void 0,
    contractAddress: void 0,
    logsBloom: void 0,
    transactionType: BigInt("0"),
    blobGasUsed: void 0,
    blobGasPrice: void 0,
    transactionStatus: 0
  };
}
const TransactionReceipt$1 = {
  encode(message, writer = _m0.Writer.create()) {
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
      B256.encode(message.transactionHash, writer.uint32(26).fork()).ldelim();
    }
    if (message.cumulativeGasUsed !== void 0) {
      U128.encode(message.cumulativeGasUsed, writer.uint32(34).fork()).ldelim();
    }
    if (message.gasUsed !== void 0) {
      U128.encode(message.gasUsed, writer.uint32(42).fork()).ldelim();
    }
    if (message.effectiveGasPrice !== void 0) {
      U128.encode(message.effectiveGasPrice, writer.uint32(50).fork()).ldelim();
    }
    if (message.from !== void 0) {
      Address.encode(message.from, writer.uint32(58).fork()).ldelim();
    }
    if (message.to !== void 0) {
      Address.encode(message.to, writer.uint32(66).fork()).ldelim();
    }
    if (message.contractAddress !== void 0) {
      Address.encode(message.contractAddress, writer.uint32(74).fork()).ldelim();
    }
    if (message.logsBloom !== void 0) {
      Bloom$1.encode(message.logsBloom, writer.uint32(82).fork()).ldelim();
    }
    if (message.transactionType !== void 0 && message.transactionType !== BigInt("0")) {
      if (BigInt.asUintN(64, message.transactionType) !== message.transactionType) {
        throw new globalThis.Error("value provided for field message.transactionType of type uint64 too large");
      }
      writer.uint32(88).uint64(message.transactionType.toString());
    }
    if (message.blobGasUsed !== void 0) {
      U128.encode(message.blobGasUsed, writer.uint32(98).fork()).ldelim();
    }
    if (message.blobGasPrice !== void 0) {
      U128.encode(message.blobGasPrice, writer.uint32(106).fork()).ldelim();
    }
    if (message.transactionStatus !== void 0 && message.transactionStatus !== 0) {
      writer.uint32(112).int32(message.transactionStatus);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
          if (tag !== 16) {
            break;
          }
          message.transactionIndex = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.transactionHash = B256.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.cumulativeGasUsed = U128.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.gasUsed = U128.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.effectiveGasPrice = U128.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.from = Address.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.to = Address.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }
          message.contractAddress = Address.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }
          message.logsBloom = Bloom$1.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }
          message.transactionType = longToBigint(reader.uint64());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }
          message.blobGasUsed = U128.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }
          message.blobGasPrice = U128.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 112) {
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
      filterIds: globalThis.Array.isArray(object?.filterIds) ? object.filterIds.map((e) => globalThis.Number(e)) : [],
      transactionIndex: isSet$1(object.transactionIndex) ? globalThis.Number(object.transactionIndex) : 0,
      transactionHash: isSet$1(object.transactionHash) ? B256.fromJSON(object.transactionHash) : void 0,
      cumulativeGasUsed: isSet$1(object.cumulativeGasUsed) ? U128.fromJSON(object.cumulativeGasUsed) : void 0,
      gasUsed: isSet$1(object.gasUsed) ? U128.fromJSON(object.gasUsed) : void 0,
      effectiveGasPrice: isSet$1(object.effectiveGasPrice) ? U128.fromJSON(object.effectiveGasPrice) : void 0,
      from: isSet$1(object.from) ? Address.fromJSON(object.from) : void 0,
      to: isSet$1(object.to) ? Address.fromJSON(object.to) : void 0,
      contractAddress: isSet$1(object.contractAddress) ? Address.fromJSON(object.contractAddress) : void 0,
      logsBloom: isSet$1(object.logsBloom) ? Bloom$1.fromJSON(object.logsBloom) : void 0,
      transactionType: isSet$1(object.transactionType) ? BigInt(object.transactionType) : BigInt("0"),
      blobGasUsed: isSet$1(object.blobGasUsed) ? U128.fromJSON(object.blobGasUsed) : void 0,
      blobGasPrice: isSet$1(object.blobGasPrice) ? U128.fromJSON(object.blobGasPrice) : void 0,
      transactionStatus: isSet$1(object.transactionStatus) ? transactionStatusFromJSON(object.transactionStatus) : 0
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
      obj.transactionHash = B256.toJSON(message.transactionHash);
    }
    if (message.cumulativeGasUsed !== void 0) {
      obj.cumulativeGasUsed = U128.toJSON(message.cumulativeGasUsed);
    }
    if (message.gasUsed !== void 0) {
      obj.gasUsed = U128.toJSON(message.gasUsed);
    }
    if (message.effectiveGasPrice !== void 0) {
      obj.effectiveGasPrice = U128.toJSON(message.effectiveGasPrice);
    }
    if (message.from !== void 0) {
      obj.from = Address.toJSON(message.from);
    }
    if (message.to !== void 0) {
      obj.to = Address.toJSON(message.to);
    }
    if (message.contractAddress !== void 0) {
      obj.contractAddress = Address.toJSON(message.contractAddress);
    }
    if (message.logsBloom !== void 0) {
      obj.logsBloom = Bloom$1.toJSON(message.logsBloom);
    }
    if (message.transactionType !== void 0 && message.transactionType !== BigInt("0")) {
      obj.transactionType = message.transactionType.toString();
    }
    if (message.blobGasUsed !== void 0) {
      obj.blobGasUsed = U128.toJSON(message.blobGasUsed);
    }
    if (message.blobGasPrice !== void 0) {
      obj.blobGasPrice = U128.toJSON(message.blobGasPrice);
    }
    if (message.transactionStatus !== void 0 && message.transactionStatus !== 0) {
      obj.transactionStatus = transactionStatusToJSON(message.transactionStatus);
    }
    return obj;
  },
  create(base) {
    return TransactionReceipt$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTransactionReceipt();
    message.filterIds = object.filterIds?.map((e) => e) || [];
    message.transactionIndex = object.transactionIndex ?? 0;
    message.transactionHash = object.transactionHash !== void 0 && object.transactionHash !== null ? B256.fromPartial(object.transactionHash) : void 0;
    message.cumulativeGasUsed = object.cumulativeGasUsed !== void 0 && object.cumulativeGasUsed !== null ? U128.fromPartial(object.cumulativeGasUsed) : void 0;
    message.gasUsed = object.gasUsed !== void 0 && object.gasUsed !== null ? U128.fromPartial(object.gasUsed) : void 0;
    message.effectiveGasPrice = object.effectiveGasPrice !== void 0 && object.effectiveGasPrice !== null ? U128.fromPartial(object.effectiveGasPrice) : void 0;
    message.from = object.from !== void 0 && object.from !== null ? Address.fromPartial(object.from) : void 0;
    message.to = object.to !== void 0 && object.to !== null ? Address.fromPartial(object.to) : void 0;
    message.contractAddress = object.contractAddress !== void 0 && object.contractAddress !== null ? Address.fromPartial(object.contractAddress) : void 0;
    message.logsBloom = object.logsBloom !== void 0 && object.logsBloom !== null ? Bloom$1.fromPartial(object.logsBloom) : void 0;
    message.transactionType = object.transactionType ?? BigInt("0");
    message.blobGasUsed = object.blobGasUsed !== void 0 && object.blobGasUsed !== null ? U128.fromPartial(object.blobGasUsed) : void 0;
    message.blobGasPrice = object.blobGasPrice !== void 0 && object.blobGasPrice !== null ? U128.fromPartial(object.blobGasPrice) : void 0;
    message.transactionStatus = object.transactionStatus ?? 0;
    return message;
  }
};
function createBaseLog() {
  return {
    filterIds: [],
    logIndex: 0,
    address: void 0,
    topics: [],
    data: new Uint8Array(0),
    transactionIndex: 0,
    transactionHash: void 0,
    transactionStatus: 0,
    logIndexInTransaction: 0
  };
}
const Log$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.filterIds !== void 0 && message.filterIds.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.filterIds) {
        writer.uint32(v);
      }
      writer.ldelim();
    }
    if (message.logIndex !== void 0 && message.logIndex !== 0) {
      writer.uint32(16).uint32(message.logIndex);
    }
    if (message.address !== void 0) {
      Address.encode(message.address, writer.uint32(26).fork()).ldelim();
    }
    if (message.topics !== void 0 && message.topics.length !== 0) {
      for (const v of message.topics) {
        B256.encode(v, writer.uint32(34).fork()).ldelim();
      }
    }
    if (message.data !== void 0 && message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    if (message.transactionIndex !== void 0 && message.transactionIndex !== 0) {
      writer.uint32(48).uint32(message.transactionIndex);
    }
    if (message.transactionHash !== void 0) {
      B256.encode(message.transactionHash, writer.uint32(58).fork()).ldelim();
    }
    if (message.transactionStatus !== void 0 && message.transactionStatus !== 0) {
      writer.uint32(64).int32(message.transactionStatus);
    }
    if (message.logIndexInTransaction !== void 0 && message.logIndexInTransaction !== 0) {
      writer.uint32(72).uint32(message.logIndexInTransaction);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLog();
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
          message.logIndex = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.address = Address.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.topics.push(B256.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.data = reader.bytes();
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
          message.transactionHash = B256.decode(reader, reader.uint32());
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
          message.logIndexInTransaction = reader.uint32();
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
      logIndex: isSet$1(object.logIndex) ? globalThis.Number(object.logIndex) : 0,
      address: isSet$1(object.address) ? Address.fromJSON(object.address) : void 0,
      topics: globalThis.Array.isArray(object?.topics) ? object.topics.map((e) => B256.fromJSON(e)) : [],
      data: isSet$1(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      transactionIndex: isSet$1(object.transactionIndex) ? globalThis.Number(object.transactionIndex) : 0,
      transactionHash: isSet$1(object.transactionHash) ? B256.fromJSON(object.transactionHash) : void 0,
      transactionStatus: isSet$1(object.transactionStatus) ? transactionStatusFromJSON(object.transactionStatus) : 0,
      logIndexInTransaction: isSet$1(object.logIndexInTransaction) ? globalThis.Number(object.logIndexInTransaction) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.filterIds?.length) {
      obj.filterIds = message.filterIds.map((e) => Math.round(e));
    }
    if (message.logIndex !== void 0 && message.logIndex !== 0) {
      obj.logIndex = Math.round(message.logIndex);
    }
    if (message.address !== void 0) {
      obj.address = Address.toJSON(message.address);
    }
    if (message.topics?.length) {
      obj.topics = message.topics.map((e) => B256.toJSON(e));
    }
    if (message.data !== void 0 && message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.transactionIndex !== void 0 && message.transactionIndex !== 0) {
      obj.transactionIndex = Math.round(message.transactionIndex);
    }
    if (message.transactionHash !== void 0) {
      obj.transactionHash = B256.toJSON(message.transactionHash);
    }
    if (message.transactionStatus !== void 0 && message.transactionStatus !== 0) {
      obj.transactionStatus = transactionStatusToJSON(message.transactionStatus);
    }
    if (message.logIndexInTransaction !== void 0 && message.logIndexInTransaction !== 0) {
      obj.logIndexInTransaction = Math.round(message.logIndexInTransaction);
    }
    return obj;
  },
  create(base) {
    return Log$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseLog();
    message.filterIds = object.filterIds?.map((e) => e) || [];
    message.logIndex = object.logIndex ?? 0;
    message.address = object.address !== void 0 && object.address !== null ? Address.fromPartial(object.address) : void 0;
    message.topics = object.topics?.map((e) => B256.fromPartial(e)) || [];
    message.data = object.data ?? new Uint8Array(0);
    message.transactionIndex = object.transactionIndex ?? 0;
    message.transactionHash = object.transactionHash !== void 0 && object.transactionHash !== null ? B256.fromPartial(object.transactionHash) : void 0;
    message.transactionStatus = object.transactionStatus ?? 0;
    message.logIndexInTransaction = object.logIndexInTransaction ?? 0;
    return message;
  }
};
function createBaseSignature() {
  return { r: void 0, s: void 0, v: void 0, yParity: void 0 };
}
const Signature$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.r !== void 0) {
      U256.encode(message.r, writer.uint32(10).fork()).ldelim();
    }
    if (message.s !== void 0) {
      U256.encode(message.s, writer.uint32(18).fork()).ldelim();
    }
    if (message.v !== void 0) {
      U256.encode(message.v, writer.uint32(26).fork()).ldelim();
    }
    if (message.yParity !== void 0) {
      writer.uint32(32).bool(message.yParity);
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
          message.r = U256.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.s = U256.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.v = U256.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.yParity = reader.bool();
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
      r: isSet$1(object.r) ? U256.fromJSON(object.r) : void 0,
      s: isSet$1(object.s) ? U256.fromJSON(object.s) : void 0,
      v: isSet$1(object.v) ? U256.fromJSON(object.v) : void 0,
      yParity: isSet$1(object.yParity) ? globalThis.Boolean(object.yParity) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.r !== void 0) {
      obj.r = U256.toJSON(message.r);
    }
    if (message.s !== void 0) {
      obj.s = U256.toJSON(message.s);
    }
    if (message.v !== void 0) {
      obj.v = U256.toJSON(message.v);
    }
    if (message.yParity !== void 0) {
      obj.yParity = message.yParity;
    }
    return obj;
  },
  create(base) {
    return Signature$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseSignature();
    message.r = object.r !== void 0 && object.r !== null ? U256.fromPartial(object.r) : void 0;
    message.s = object.s !== void 0 && object.s !== null ? U256.fromPartial(object.s) : void 0;
    message.v = object.v !== void 0 && object.v !== null ? U256.fromPartial(object.v) : void 0;
    message.yParity = object.yParity ?? void 0;
    return message;
  }
};
function createBaseAccessListItem() {
  return { address: void 0, storageKeys: [] };
}
const AccessListItem$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== void 0) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.storageKeys !== void 0 && message.storageKeys.length !== 0) {
      for (const v of message.storageKeys) {
        B256.encode(v, writer.uint32(18).fork()).ldelim();
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
          message.address = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.storageKeys.push(B256.decode(reader, reader.uint32()));
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
      address: isSet$1(object.address) ? Address.fromJSON(object.address) : void 0,
      storageKeys: globalThis.Array.isArray(object?.storageKeys) ? object.storageKeys.map((e) => B256.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.address !== void 0) {
      obj.address = Address.toJSON(message.address);
    }
    if (message.storageKeys?.length) {
      obj.storageKeys = message.storageKeys.map((e) => B256.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return AccessListItem$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseAccessListItem();
    message.address = object.address !== void 0 && object.address !== null ? Address.fromPartial(object.address) : void 0;
    message.storageKeys = object.storageKeys?.map((e) => B256.fromPartial(e)) || [];
    return message;
  }
};
function createBaseTransactionTrace() {
  return { filterIds: [], transactionIndex: 0, transactionHash: void 0, traces: [] };
}
const TransactionTrace$1 = {
  encode(message, writer = _m0.Writer.create()) {
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
      B256.encode(message.transactionHash, writer.uint32(26).fork()).ldelim();
    }
    if (message.traces !== void 0 && message.traces.length !== 0) {
      for (const v of message.traces) {
        Trace$1.encode(v, writer.uint32(34).fork()).ldelim();
      }
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
          message.transactionHash = B256.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.traces.push(Trace$1.decode(reader, reader.uint32()));
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
      transactionHash: isSet$1(object.transactionHash) ? B256.fromJSON(object.transactionHash) : void 0,
      traces: globalThis.Array.isArray(object?.traces) ? object.traces.map((e) => Trace$1.fromJSON(e)) : []
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
      obj.transactionHash = B256.toJSON(message.transactionHash);
    }
    if (message.traces?.length) {
      obj.traces = message.traces.map((e) => Trace$1.toJSON(e));
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
    message.transactionHash = object.transactionHash !== void 0 && object.transactionHash !== null ? B256.fromPartial(object.transactionHash) : void 0;
    message.traces = object.traces?.map((e) => Trace$1.fromPartial(e)) || [];
    return message;
  }
};
function createBaseTrace() {
  return { action: void 0, error: void 0, output: void 0, subtraces: 0, traceAddress: [] };
}
const Trace$1 = {
  encode(message, writer = _m0.Writer.create()) {
    switch (message.action?.$case) {
      case "call":
        CallAction$1.encode(message.action.call, writer.uint32(10).fork()).ldelim();
        break;
      case "create":
        CreateAction$1.encode(message.action.create, writer.uint32(18).fork()).ldelim();
        break;
      case "selfDestruct":
        SelfDestructAction$1.encode(message.action.selfDestruct, writer.uint32(26).fork()).ldelim();
        break;
      case "reward":
        RewardAction$1.encode(message.action.reward, writer.uint32(34).fork()).ldelim();
        break;
    }
    if (message.error !== void 0) {
      writer.uint32(42).string(message.error);
    }
    switch (message.output?.$case) {
      case "callOutput":
        CallOutput$1.encode(message.output.callOutput, writer.uint32(50).fork()).ldelim();
        break;
      case "createOutput":
        CreateOutput$1.encode(message.output.createOutput, writer.uint32(58).fork()).ldelim();
        break;
    }
    if (message.subtraces !== void 0 && message.subtraces !== 0) {
      writer.uint32(64).uint32(message.subtraces);
    }
    if (message.traceAddress !== void 0 && message.traceAddress.length !== 0) {
      writer.uint32(74).fork();
      for (const v of message.traceAddress) {
        writer.uint32(v);
      }
      writer.ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTrace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.action = { $case: "call", call: CallAction$1.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.action = { $case: "create", create: CreateAction$1.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.action = { $case: "selfDestruct", selfDestruct: SelfDestructAction$1.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.action = { $case: "reward", reward: RewardAction$1.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.error = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.output = { $case: "callOutput", callOutput: CallOutput$1.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.output = { $case: "createOutput", createOutput: CreateOutput$1.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }
          message.subtraces = reader.uint32();
          continue;
        case 9:
          if (tag === 72) {
            message.traceAddress.push(reader.uint32());
            continue;
          }
          if (tag === 74) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.traceAddress.push(reader.uint32());
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
      action: isSet$1(object.call) ? { $case: "call", call: CallAction$1.fromJSON(object.call) } : isSet$1(object.create) ? { $case: "create", create: CreateAction$1.fromJSON(object.create) } : isSet$1(object.selfDestruct) ? { $case: "selfDestruct", selfDestruct: SelfDestructAction$1.fromJSON(object.selfDestruct) } : isSet$1(object.reward) ? { $case: "reward", reward: RewardAction$1.fromJSON(object.reward) } : void 0,
      error: isSet$1(object.error) ? globalThis.String(object.error) : void 0,
      output: isSet$1(object.callOutput) ? { $case: "callOutput", callOutput: CallOutput$1.fromJSON(object.callOutput) } : isSet$1(object.createOutput) ? { $case: "createOutput", createOutput: CreateOutput$1.fromJSON(object.createOutput) } : void 0,
      subtraces: isSet$1(object.subtraces) ? globalThis.Number(object.subtraces) : 0,
      traceAddress: globalThis.Array.isArray(object?.traceAddress) ? object.traceAddress.map((e) => globalThis.Number(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.action?.$case === "call") {
      obj.call = CallAction$1.toJSON(message.action.call);
    }
    if (message.action?.$case === "create") {
      obj.create = CreateAction$1.toJSON(message.action.create);
    }
    if (message.action?.$case === "selfDestruct") {
      obj.selfDestruct = SelfDestructAction$1.toJSON(message.action.selfDestruct);
    }
    if (message.action?.$case === "reward") {
      obj.reward = RewardAction$1.toJSON(message.action.reward);
    }
    if (message.error !== void 0) {
      obj.error = message.error;
    }
    if (message.output?.$case === "callOutput") {
      obj.callOutput = CallOutput$1.toJSON(message.output.callOutput);
    }
    if (message.output?.$case === "createOutput") {
      obj.createOutput = CreateOutput$1.toJSON(message.output.createOutput);
    }
    if (message.subtraces !== void 0 && message.subtraces !== 0) {
      obj.subtraces = Math.round(message.subtraces);
    }
    if (message.traceAddress?.length) {
      obj.traceAddress = message.traceAddress.map((e) => Math.round(e));
    }
    return obj;
  },
  create(base) {
    return Trace$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTrace();
    if (object.action?.$case === "call" && object.action?.call !== void 0 && object.action?.call !== null) {
      message.action = { $case: "call", call: CallAction$1.fromPartial(object.action.call) };
    }
    if (object.action?.$case === "create" && object.action?.create !== void 0 && object.action?.create !== null) {
      message.action = { $case: "create", create: CreateAction$1.fromPartial(object.action.create) };
    }
    if (object.action?.$case === "selfDestruct" && object.action?.selfDestruct !== void 0 && object.action?.selfDestruct !== null) {
      message.action = {
        $case: "selfDestruct",
        selfDestruct: SelfDestructAction$1.fromPartial(object.action.selfDestruct)
      };
    }
    if (object.action?.$case === "reward" && object.action?.reward !== void 0 && object.action?.reward !== null) {
      message.action = { $case: "reward", reward: RewardAction$1.fromPartial(object.action.reward) };
    }
    message.error = object.error ?? void 0;
    if (object.output?.$case === "callOutput" && object.output?.callOutput !== void 0 && object.output?.callOutput !== null) {
      message.output = { $case: "callOutput", callOutput: CallOutput$1.fromPartial(object.output.callOutput) };
    }
    if (object.output?.$case === "createOutput" && object.output?.createOutput !== void 0 && object.output?.createOutput !== null) {
      message.output = { $case: "createOutput", createOutput: CreateOutput$1.fromPartial(object.output.createOutput) };
    }
    message.subtraces = object.subtraces ?? 0;
    message.traceAddress = object.traceAddress?.map((e) => e) || [];
    return message;
  }
};
function createBaseCallAction() {
  return {
    fromAddress: void 0,
    type: 0,
    gas: BigInt("0"),
    input: new Uint8Array(0),
    toAddress: void 0,
    value: void 0
  };
}
const CallAction$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fromAddress !== void 0) {
      Address.encode(message.fromAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== void 0 && message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.gas !== void 0 && message.gas !== BigInt("0")) {
      if (BigInt.asUintN(64, message.gas) !== message.gas) {
        throw new globalThis.Error("value provided for field message.gas of type uint64 too large");
      }
      writer.uint32(24).uint64(message.gas.toString());
    }
    if (message.input !== void 0 && message.input.length !== 0) {
      writer.uint32(34).bytes(message.input);
    }
    if (message.toAddress !== void 0) {
      Address.encode(message.toAddress, writer.uint32(42).fork()).ldelim();
    }
    if (message.value !== void 0) {
      U256.encode(message.value, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCallAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.fromAddress = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.type = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.gas = longToBigint(reader.uint64());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.input = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.toAddress = Address.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.value = U256.decode(reader, reader.uint32());
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
      fromAddress: isSet$1(object.fromAddress) ? Address.fromJSON(object.fromAddress) : void 0,
      type: isSet$1(object.type) ? callTypeFromJSON(object.type) : 0,
      gas: isSet$1(object.gas) ? BigInt(object.gas) : BigInt("0"),
      input: isSet$1(object.input) ? bytesFromBase64(object.input) : new Uint8Array(0),
      toAddress: isSet$1(object.toAddress) ? Address.fromJSON(object.toAddress) : void 0,
      value: isSet$1(object.value) ? U256.fromJSON(object.value) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.fromAddress !== void 0) {
      obj.fromAddress = Address.toJSON(message.fromAddress);
    }
    if (message.type !== void 0 && message.type !== 0) {
      obj.type = callTypeToJSON(message.type);
    }
    if (message.gas !== void 0 && message.gas !== BigInt("0")) {
      obj.gas = message.gas.toString();
    }
    if (message.input !== void 0 && message.input.length !== 0) {
      obj.input = base64FromBytes(message.input);
    }
    if (message.toAddress !== void 0) {
      obj.toAddress = Address.toJSON(message.toAddress);
    }
    if (message.value !== void 0) {
      obj.value = U256.toJSON(message.value);
    }
    return obj;
  },
  create(base) {
    return CallAction$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseCallAction();
    message.fromAddress = object.fromAddress !== void 0 && object.fromAddress !== null ? Address.fromPartial(object.fromAddress) : void 0;
    message.type = object.type ?? 0;
    message.gas = object.gas ?? BigInt("0");
    message.input = object.input ?? new Uint8Array(0);
    message.toAddress = object.toAddress !== void 0 && object.toAddress !== null ? Address.fromPartial(object.toAddress) : void 0;
    message.value = object.value !== void 0 && object.value !== null ? U256.fromPartial(object.value) : void 0;
    return message;
  }
};
function createBaseCreateAction() {
  return { fromAddress: void 0, gas: BigInt("0"), init: new Uint8Array(0), value: void 0, creationMethod: 0 };
}
const CreateAction$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fromAddress !== void 0) {
      Address.encode(message.fromAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.gas !== void 0 && message.gas !== BigInt("0")) {
      if (BigInt.asUintN(64, message.gas) !== message.gas) {
        throw new globalThis.Error("value provided for field message.gas of type uint64 too large");
      }
      writer.uint32(16).uint64(message.gas.toString());
    }
    if (message.init !== void 0 && message.init.length !== 0) {
      writer.uint32(26).bytes(message.init);
    }
    if (message.value !== void 0) {
      U256.encode(message.value, writer.uint32(34).fork()).ldelim();
    }
    if (message.creationMethod !== void 0 && message.creationMethod !== 0) {
      writer.uint32(40).int32(message.creationMethod);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCreateAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.fromAddress = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.gas = longToBigint(reader.uint64());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.init = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.value = U256.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.creationMethod = reader.int32();
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
      fromAddress: isSet$1(object.fromAddress) ? Address.fromJSON(object.fromAddress) : void 0,
      gas: isSet$1(object.gas) ? BigInt(object.gas) : BigInt("0"),
      init: isSet$1(object.init) ? bytesFromBase64(object.init) : new Uint8Array(0),
      value: isSet$1(object.value) ? U256.fromJSON(object.value) : void 0,
      creationMethod: isSet$1(object.creationMethod) ? creationMethodFromJSON(object.creationMethod) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.fromAddress !== void 0) {
      obj.fromAddress = Address.toJSON(message.fromAddress);
    }
    if (message.gas !== void 0 && message.gas !== BigInt("0")) {
      obj.gas = message.gas.toString();
    }
    if (message.init !== void 0 && message.init.length !== 0) {
      obj.init = base64FromBytes(message.init);
    }
    if (message.value !== void 0) {
      obj.value = U256.toJSON(message.value);
    }
    if (message.creationMethod !== void 0 && message.creationMethod !== 0) {
      obj.creationMethod = creationMethodToJSON(message.creationMethod);
    }
    return obj;
  },
  create(base) {
    return CreateAction$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseCreateAction();
    message.fromAddress = object.fromAddress !== void 0 && object.fromAddress !== null ? Address.fromPartial(object.fromAddress) : void 0;
    message.gas = object.gas ?? BigInt("0");
    message.init = object.init ?? new Uint8Array(0);
    message.value = object.value !== void 0 && object.value !== null ? U256.fromPartial(object.value) : void 0;
    message.creationMethod = object.creationMethod ?? 0;
    return message;
  }
};
function createBaseSelfDestructAction() {
  return { address: void 0, balance: void 0, refundAddress: void 0 };
}
const SelfDestructAction$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== void 0) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== void 0) {
      U256.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    if (message.refundAddress !== void 0) {
      Address.encode(message.refundAddress, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSelfDestructAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.address = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.balance = U256.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.refundAddress = Address.decode(reader, reader.uint32());
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
      address: isSet$1(object.address) ? Address.fromJSON(object.address) : void 0,
      balance: isSet$1(object.balance) ? U256.fromJSON(object.balance) : void 0,
      refundAddress: isSet$1(object.refundAddress) ? Address.fromJSON(object.refundAddress) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.address !== void 0) {
      obj.address = Address.toJSON(message.address);
    }
    if (message.balance !== void 0) {
      obj.balance = U256.toJSON(message.balance);
    }
    if (message.refundAddress !== void 0) {
      obj.refundAddress = Address.toJSON(message.refundAddress);
    }
    return obj;
  },
  create(base) {
    return SelfDestructAction$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseSelfDestructAction();
    message.address = object.address !== void 0 && object.address !== null ? Address.fromPartial(object.address) : void 0;
    message.balance = object.balance !== void 0 && object.balance !== null ? U256.fromPartial(object.balance) : void 0;
    message.refundAddress = object.refundAddress !== void 0 && object.refundAddress !== null ? Address.fromPartial(object.refundAddress) : void 0;
    return message;
  }
};
function createBaseRewardAction() {
  return { author: void 0, type: 0, value: void 0 };
}
const RewardAction$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.author !== void 0) {
      Address.encode(message.author, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== void 0 && message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.value !== void 0) {
      U256.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRewardAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.author = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.type = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.value = U256.decode(reader, reader.uint32());
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
      author: isSet$1(object.author) ? Address.fromJSON(object.author) : void 0,
      type: isSet$1(object.type) ? rewardTypeFromJSON(object.type) : 0,
      value: isSet$1(object.value) ? U256.fromJSON(object.value) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.author !== void 0) {
      obj.author = Address.toJSON(message.author);
    }
    if (message.type !== void 0 && message.type !== 0) {
      obj.type = rewardTypeToJSON(message.type);
    }
    if (message.value !== void 0) {
      obj.value = U256.toJSON(message.value);
    }
    return obj;
  },
  create(base) {
    return RewardAction$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRewardAction();
    message.author = object.author !== void 0 && object.author !== null ? Address.fromPartial(object.author) : void 0;
    message.type = object.type ?? 0;
    message.value = object.value !== void 0 && object.value !== null ? U256.fromPartial(object.value) : void 0;
    return message;
  }
};
function createBaseCallOutput() {
  return { gasUsed: BigInt("0"), output: new Uint8Array(0) };
}
const CallOutput$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.gasUsed !== void 0 && message.gasUsed !== BigInt("0")) {
      if (BigInt.asUintN(64, message.gasUsed) !== message.gasUsed) {
        throw new globalThis.Error("value provided for field message.gasUsed of type uint64 too large");
      }
      writer.uint32(8).uint64(message.gasUsed.toString());
    }
    if (message.output !== void 0 && message.output.length !== 0) {
      writer.uint32(18).bytes(message.output);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCallOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.gasUsed = longToBigint(reader.uint64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.output = reader.bytes();
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
      gasUsed: isSet$1(object.gasUsed) ? BigInt(object.gasUsed) : BigInt("0"),
      output: isSet$1(object.output) ? bytesFromBase64(object.output) : new Uint8Array(0)
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.gasUsed !== void 0 && message.gasUsed !== BigInt("0")) {
      obj.gasUsed = message.gasUsed.toString();
    }
    if (message.output !== void 0 && message.output.length !== 0) {
      obj.output = base64FromBytes(message.output);
    }
    return obj;
  },
  create(base) {
    return CallOutput$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseCallOutput();
    message.gasUsed = object.gasUsed ?? BigInt("0");
    message.output = object.output ?? new Uint8Array(0);
    return message;
  }
};
function createBaseCreateOutput() {
  return { address: void 0, code: new Uint8Array(0), gasUsed: BigInt("0") };
}
const CreateOutput$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== void 0) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.code !== void 0 && message.code.length !== 0) {
      writer.uint32(18).bytes(message.code);
    }
    if (message.gasUsed !== void 0 && message.gasUsed !== BigInt("0")) {
      if (BigInt.asUintN(64, message.gasUsed) !== message.gasUsed) {
        throw new globalThis.Error("value provided for field message.gasUsed of type uint64 too large");
      }
      writer.uint32(24).uint64(message.gasUsed.toString());
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCreateOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.address = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.code = reader.bytes();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.gasUsed = longToBigint(reader.uint64());
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
      address: isSet$1(object.address) ? Address.fromJSON(object.address) : void 0,
      code: isSet$1(object.code) ? bytesFromBase64(object.code) : new Uint8Array(0),
      gasUsed: isSet$1(object.gasUsed) ? BigInt(object.gasUsed) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.address !== void 0) {
      obj.address = Address.toJSON(message.address);
    }
    if (message.code !== void 0 && message.code.length !== 0) {
      obj.code = base64FromBytes(message.code);
    }
    if (message.gasUsed !== void 0 && message.gasUsed !== BigInt("0")) {
      obj.gasUsed = message.gasUsed.toString();
    }
    return obj;
  },
  create(base) {
    return CreateOutput$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseCreateOutput();
    message.address = object.address !== void 0 && object.address !== null ? Address.fromPartial(object.address) : void 0;
    message.code = object.code ?? new Uint8Array(0);
    message.gasUsed = object.gasUsed ?? BigInt("0");
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
  Block: Block$1,
  BlockHeader: BlockHeader$1,
  CallAction: CallAction$1,
  CallOutput: CallOutput$1,
  CallType: CallType$1,
  CreateAction: CreateAction$1,
  CreateOutput: CreateOutput$1,
  CreationMethod: CreationMethod$1,
  Log: Log$1,
  RewardAction: RewardAction$1,
  RewardType: RewardType$1,
  SelfDestructAction: SelfDestructAction$1,
  Signature: Signature$1,
  Trace: Trace$1,
  Transaction: Transaction$1,
  TransactionReceipt: TransactionReceipt$1,
  TransactionStatus: TransactionStatus$1,
  TransactionTrace: TransactionTrace$1,
  Withdrawal: Withdrawal$1,
  callTypeFromJSON: callTypeFromJSON,
  callTypeToJSON: callTypeToJSON,
  creationMethodFromJSON: creationMethodFromJSON,
  creationMethodToJSON: creationMethodToJSON,
  protobufPackage: protobufPackage$1,
  rewardTypeFromJSON: rewardTypeFromJSON,
  rewardTypeToJSON: rewardTypeToJSON,
  transactionStatusFromJSON: transactionStatusFromJSON,
  transactionStatusToJSON: transactionStatusToJSON
};

const protobufPackage = "evm.v2";
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
  return { header: 0, withdrawals: [], transactions: [], logs: [] };
}
const Filter$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.header !== void 0 && message.header !== 0) {
      writer.uint32(8).int32(message.header);
    }
    if (message.withdrawals !== void 0 && message.withdrawals.length !== 0) {
      for (const v of message.withdrawals) {
        WithdrawalFilter$1.encode(v, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.transactions !== void 0 && message.transactions.length !== 0) {
      for (const v of message.transactions) {
        TransactionFilter$1.encode(v, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.logs !== void 0 && message.logs.length !== 0) {
      for (const v of message.logs) {
        LogFilter$1.encode(v, writer.uint32(34).fork()).ldelim();
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
          message.withdrawals.push(WithdrawalFilter$1.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.transactions.push(TransactionFilter$1.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.logs.push(LogFilter$1.decode(reader, reader.uint32()));
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
      withdrawals: globalThis.Array.isArray(object?.withdrawals) ? object.withdrawals.map((e) => WithdrawalFilter$1.fromJSON(e)) : [],
      transactions: globalThis.Array.isArray(object?.transactions) ? object.transactions.map((e) => TransactionFilter$1.fromJSON(e)) : [],
      logs: globalThis.Array.isArray(object?.logs) ? object.logs.map((e) => LogFilter$1.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.header !== void 0 && message.header !== 0) {
      obj.header = headerFilterToJSON(message.header);
    }
    if (message.withdrawals?.length) {
      obj.withdrawals = message.withdrawals.map((e) => WithdrawalFilter$1.toJSON(e));
    }
    if (message.transactions?.length) {
      obj.transactions = message.transactions.map((e) => TransactionFilter$1.toJSON(e));
    }
    if (message.logs?.length) {
      obj.logs = message.logs.map((e) => LogFilter$1.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return Filter$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseFilter();
    message.header = object.header ?? 0;
    message.withdrawals = object.withdrawals?.map((e) => WithdrawalFilter$1.fromPartial(e)) || [];
    message.transactions = object.transactions?.map((e) => TransactionFilter$1.fromPartial(e)) || [];
    message.logs = object.logs?.map((e) => LogFilter$1.fromPartial(e)) || [];
    return message;
  }
};
function createBaseWithdrawalFilter() {
  return { id: 0, validatorIndex: void 0, address: void 0 };
}
const WithdrawalFilter$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== void 0 && message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.validatorIndex !== void 0) {
      writer.uint32(16).uint32(message.validatorIndex);
    }
    if (message.address !== void 0) {
      Address.encode(message.address, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseWithdrawalFilter();
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
          if (tag !== 26) {
            break;
          }
          message.address = Address.decode(reader, reader.uint32());
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
      address: isSet(object.address) ? Address.fromJSON(object.address) : void 0
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
    if (message.address !== void 0) {
      obj.address = Address.toJSON(message.address);
    }
    return obj;
  },
  create(base) {
    return WithdrawalFilter$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseWithdrawalFilter();
    message.id = object.id ?? 0;
    message.validatorIndex = object.validatorIndex ?? void 0;
    message.address = object.address !== void 0 && object.address !== null ? Address.fromPartial(object.address) : void 0;
    return message;
  }
};
function createBaseTransactionFilter() {
  return {
    id: 0,
    from: void 0,
    to: void 0,
    create: void 0,
    transactionStatus: void 0,
    includeReceipt: void 0,
    includeLogs: void 0,
    includeTransactionTrace: void 0
  };
}
const TransactionFilter$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== void 0 && message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.from !== void 0) {
      Address.encode(message.from, writer.uint32(18).fork()).ldelim();
    }
    if (message.to !== void 0) {
      Address.encode(message.to, writer.uint32(26).fork()).ldelim();
    }
    if (message.create !== void 0) {
      writer.uint32(32).bool(message.create);
    }
    if (message.transactionStatus !== void 0) {
      writer.uint32(40).int32(message.transactionStatus);
    }
    if (message.includeReceipt !== void 0) {
      writer.uint32(48).bool(message.includeReceipt);
    }
    if (message.includeLogs !== void 0) {
      writer.uint32(56).bool(message.includeLogs);
    }
    if (message.includeTransactionTrace !== void 0) {
      writer.uint32(64).bool(message.includeTransactionTrace);
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
          message.from = Address.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.to = Address.decode(reader, reader.uint32());
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
          message.transactionStatus = reader.int32();
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
          message.includeLogs = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
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
      from: isSet(object.from) ? Address.fromJSON(object.from) : void 0,
      to: isSet(object.to) ? Address.fromJSON(object.to) : void 0,
      create: isSet(object.create) ? globalThis.Boolean(object.create) : void 0,
      transactionStatus: isSet(object.transactionStatus) ? transactionStatusFilterFromJSON(object.transactionStatus) : void 0,
      includeReceipt: isSet(object.includeReceipt) ? globalThis.Boolean(object.includeReceipt) : void 0,
      includeLogs: isSet(object.includeLogs) ? globalThis.Boolean(object.includeLogs) : void 0,
      includeTransactionTrace: isSet(object.includeTransactionTrace) ? globalThis.Boolean(object.includeTransactionTrace) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.id !== void 0 && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.from !== void 0) {
      obj.from = Address.toJSON(message.from);
    }
    if (message.to !== void 0) {
      obj.to = Address.toJSON(message.to);
    }
    if (message.create !== void 0) {
      obj.create = message.create;
    }
    if (message.transactionStatus !== void 0) {
      obj.transactionStatus = transactionStatusFilterToJSON(message.transactionStatus);
    }
    if (message.includeReceipt !== void 0) {
      obj.includeReceipt = message.includeReceipt;
    }
    if (message.includeLogs !== void 0) {
      obj.includeLogs = message.includeLogs;
    }
    if (message.includeTransactionTrace !== void 0) {
      obj.includeTransactionTrace = message.includeTransactionTrace;
    }
    return obj;
  },
  create(base) {
    return TransactionFilter$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTransactionFilter();
    message.id = object.id ?? 0;
    message.from = object.from !== void 0 && object.from !== null ? Address.fromPartial(object.from) : void 0;
    message.to = object.to !== void 0 && object.to !== null ? Address.fromPartial(object.to) : void 0;
    message.create = object.create ?? void 0;
    message.transactionStatus = object.transactionStatus ?? void 0;
    message.includeReceipt = object.includeReceipt ?? void 0;
    message.includeLogs = object.includeLogs ?? void 0;
    message.includeTransactionTrace = object.includeTransactionTrace ?? void 0;
    return message;
  }
};
function createBaseLogFilter() {
  return {
    id: 0,
    address: void 0,
    topics: [],
    strict: void 0,
    transactionStatus: void 0,
    includeTransaction: void 0,
    includeReceipt: void 0,
    includeSiblings: void 0,
    includeTransactionTrace: void 0
  };
}
const LogFilter$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== void 0 && message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.address !== void 0) {
      Address.encode(message.address, writer.uint32(18).fork()).ldelim();
    }
    if (message.topics !== void 0 && message.topics.length !== 0) {
      for (const v of message.topics) {
        Topic$1.encode(v, writer.uint32(26).fork()).ldelim();
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
    if (message.includeSiblings !== void 0) {
      writer.uint32(64).bool(message.includeSiblings);
    }
    if (message.includeTransactionTrace !== void 0) {
      writer.uint32(72).bool(message.includeTransactionTrace);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLogFilter();
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
          message.address = Address.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.topics.push(Topic$1.decode(reader, reader.uint32()));
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
      address: isSet(object.address) ? Address.fromJSON(object.address) : void 0,
      topics: globalThis.Array.isArray(object?.topics) ? object.topics.map((e) => Topic$1.fromJSON(e)) : [],
      strict: isSet(object.strict) ? globalThis.Boolean(object.strict) : void 0,
      transactionStatus: isSet(object.transactionStatus) ? transactionStatusFilterFromJSON(object.transactionStatus) : void 0,
      includeTransaction: isSet(object.includeTransaction) ? globalThis.Boolean(object.includeTransaction) : void 0,
      includeReceipt: isSet(object.includeReceipt) ? globalThis.Boolean(object.includeReceipt) : void 0,
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
      obj.address = Address.toJSON(message.address);
    }
    if (message.topics?.length) {
      obj.topics = message.topics.map((e) => Topic$1.toJSON(e));
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
    if (message.includeSiblings !== void 0) {
      obj.includeSiblings = message.includeSiblings;
    }
    if (message.includeTransactionTrace !== void 0) {
      obj.includeTransactionTrace = message.includeTransactionTrace;
    }
    return obj;
  },
  create(base) {
    return LogFilter$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseLogFilter();
    message.id = object.id ?? 0;
    message.address = object.address !== void 0 && object.address !== null ? Address.fromPartial(object.address) : void 0;
    message.topics = object.topics?.map((e) => Topic$1.fromPartial(e)) || [];
    message.strict = object.strict ?? void 0;
    message.transactionStatus = object.transactionStatus ?? void 0;
    message.includeTransaction = object.includeTransaction ?? void 0;
    message.includeReceipt = object.includeReceipt ?? void 0;
    message.includeSiblings = object.includeSiblings ?? void 0;
    message.includeTransactionTrace = object.includeTransactionTrace ?? void 0;
    return message;
  }
};
function createBaseTopic() {
  return { value: void 0 };
}
const Topic$1 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.value !== void 0) {
      B256.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTopic();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.value = B256.decode(reader, reader.uint32());
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
    return { value: isSet(object.value) ? B256.fromJSON(object.value) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.value !== void 0) {
      obj.value = B256.toJSON(message.value);
    }
    return obj;
  },
  create(base) {
    return Topic$1.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTopic();
    message.value = object.value !== void 0 && object.value !== null ? B256.fromPartial(object.value) : void 0;
    return message;
  }
};
function isSet(value) {
  return value !== null && value !== void 0;
}

const filter = {
  __proto__: null,
  Filter: Filter$1,
  HeaderFilter: HeaderFilter$1,
  LogFilter: LogFilter$1,
  Topic: Topic$1,
  TransactionFilter: TransactionFilter$1,
  TransactionStatusFilter: TransactionStatusFilter$1,
  WithdrawalFilter: WithdrawalFilter$1,
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

const Bloom = {
  encode(x) {
    return { value: BytesFromUint8Array.encode(x) };
  },
  decode({ value }) {
    return BytesFromUint8Array.decode(value);
  }
};
const TransactionStatus = {
  encode(x) {
    const enumMap = {
      unknown: TransactionStatus$1.UNSPECIFIED,
      succeeded: TransactionStatus$1.SUCCEEDED,
      reverted: TransactionStatus$1.REVERTED
    };
    return enumMap[x] ?? TransactionStatus$1.UNSPECIFIED;
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
const BlockHeader = MessageCodec({
  blockNumber: RequiredCodec(BigIntCodec),
  blockHash: OptionalCodec(B256$1),
  parentBlockHash: RequiredCodec(B256$1),
  unclesHash: RequiredCodec(B256$1),
  miner: RequiredCodec(Address$1),
  stateRoot: RequiredCodec(B256$1),
  transactionsRoot: RequiredCodec(B256$1),
  receiptsRoot: RequiredCodec(B256$1),
  logsBloom: RequiredCodec(Bloom),
  difficulty: RequiredCodec(U256$1),
  gasLimit: RequiredCodec(U128$1),
  gasUsed: RequiredCodec(U128$1),
  timestamp: RequiredCodec(DateCodec),
  extraData: RequiredCodec(BytesFromUint8Array),
  mixHash: OptionalCodec(B256$1),
  nonce: OptionalCodec(BigIntCodec),
  baseFeePerGas: OptionalCodec(U128$1),
  withdrawalsRoot: OptionalCodec(B256$1),
  totalDifficulty: OptionalCodec(U256$1),
  blobGasUsed: OptionalCodec(U128$1),
  excessBlobGas: OptionalCodec(U128$1),
  parentBeaconBlockRoot: OptionalCodec(B256$1),
  requestsHash: OptionalCodec(B256$1)
});
const Withdrawal = MessageCodec({
  filterIds: ArrayCodec(NumberCodec),
  withdrawalIndex: RequiredCodec(NumberCodec),
  index: RequiredCodec(BigIntCodec),
  validatorIndex: RequiredCodec(NumberCodec),
  address: RequiredCodec(Address$1),
  amount: RequiredCodec(BigIntCodec)
});
const AccessListItem = MessageCodec({
  address: RequiredCodec(Address$1),
  storageKeys: ArrayCodec(B256$1)
});
const Signature = MessageCodec({
  r: RequiredCodec(U256$1),
  s: RequiredCodec(U256$1),
  v: OptionalCodec(U256$1),
  YParity: OptionalCodec(BooleanCodec)
});
const Transaction = MessageCodec({
  filterIds: ArrayCodec(NumberCodec),
  transactionIndex: RequiredCodec(NumberCodec),
  transactionHash: RequiredCodec(B256$1),
  nonce: RequiredCodec(BigIntCodec),
  from: RequiredCodec(Address$1),
  to: OptionalCodec(Address$1),
  value: RequiredCodec(U256$1),
  gasPrice: OptionalCodec(U128$1),
  gas: RequiredCodec(U128$1),
  maxFeePerGas: OptionalCodec(U128$1),
  maxPriorityFeePerGas: OptionalCodec(U128$1),
  input: RequiredCodec(BytesFromUint8Array),
  signature: OptionalCodec(Signature),
  chainId: OptionalCodec(BigIntCodec),
  accessList: ArrayCodec(AccessListItem),
  transactionType: RequiredCodec(BigIntCodec),
  maxFeePerBlobGas: OptionalCodec(U128$1),
  blobVersionedHashes: ArrayCodec(B256$1),
  transactionStatus: RequiredCodec(TransactionStatus)
});
const TransactionReceipt = MessageCodec({
  filterIds: ArrayCodec(NumberCodec),
  transactionIndex: RequiredCodec(NumberCodec),
  transactionHash: RequiredCodec(B256$1),
  cumulativeGasUsed: RequiredCodec(U128$1),
  gasUsed: RequiredCodec(U128$1),
  effectiveGasPrice: RequiredCodec(U128$1),
  from: RequiredCodec(Address$1),
  to: OptionalCodec(Address$1),
  contractAddress: OptionalCodec(Address$1),
  logsBloom: RequiredCodec(Bloom),
  transactionType: RequiredCodec(BigIntCodec),
  blobGasUsed: OptionalCodec(U128$1),
  blobGasPrice: OptionalCodec(U128$1),
  transactionStatus: RequiredCodec(TransactionStatus)
});
const Log = MessageCodec({
  filterIds: ArrayCodec(NumberCodec),
  address: RequiredCodec(Address$1),
  topics: ArrayCodec(B256$1),
  data: RequiredCodec(BytesFromUint8Array),
  logIndex: RequiredCodec(NumberCodec),
  logIndexInTransaction: RequiredCodec(NumberCodec),
  transactionIndex: RequiredCodec(NumberCodec),
  transactionHash: RequiredCodec(B256$1),
  transactionStatus: RequiredCodec(TransactionStatus)
});
const CallType = {
  encode(x) {
    const enumMap = {
      unknown: CallType$1.UNSPECIFIED,
      call: CallType$1.CALL,
      callCode: CallType$1.CALL_CODE,
      delegateCall: CallType$1.DELEGATE_CALL,
      staticCall: CallType$1.STATIC_CALL,
      authCall: CallType$1.AUTH_CALL
    };
    return enumMap[x] ?? CallType$1.UNSPECIFIED;
  },
  decode(p) {
    const enumMap = {
      [CallType$1.CALL]: "call",
      [CallType$1.CALL_CODE]: "callCode",
      [CallType$1.DELEGATE_CALL]: "delegateCall",
      [CallType$1.STATIC_CALL]: "staticCall",
      [CallType$1.AUTH_CALL]: "authCall",
      [CallType$1.UNSPECIFIED]: "unknown",
      [CallType$1.UNRECOGNIZED]: "unknown"
    };
    return enumMap[p] ?? "unknown";
  }
};
const CreationMethod = {
  encode(x) {
    const enumMap = {
      unknown: CreationMethod$1.UNSPECIFIED,
      create: CreationMethod$1.CREATE,
      create2: CreationMethod$1.CREATE2,
      eofCreate: CreationMethod$1.EOF_CREATE
    };
    return enumMap[x] ?? CreationMethod$1.UNSPECIFIED;
  },
  decode(p) {
    const enumMap = {
      [CreationMethod$1.CREATE]: "create",
      [CreationMethod$1.CREATE2]: "create2",
      [CreationMethod$1.EOF_CREATE]: "eofCreate",
      [CreationMethod$1.UNSPECIFIED]: "unknown",
      [CreationMethod$1.UNRECOGNIZED]: "unknown"
    };
    return enumMap[p] ?? "unknown";
  }
};
const CallAction = MessageCodec({
  fromAddress: RequiredCodec(Address$1),
  type: RequiredCodec(CallType),
  gas: RequiredCodec(BigIntCodec),
  input: RequiredCodec(BytesFromUint8Array),
  toAddress: RequiredCodec(Address$1),
  value: RequiredCodec(U256$1)
});
const CreateAction = MessageCodec({
  fromAddress: RequiredCodec(Address$1),
  gas: RequiredCodec(BigIntCodec),
  init: RequiredCodec(BytesFromUint8Array),
  value: RequiredCodec(U256$1),
  creationMethod: RequiredCodec(CreationMethod)
});
const SelfDestructAction = MessageCodec({
  address: RequiredCodec(Address$1),
  balance: RequiredCodec(U256$1),
  refundAddress: RequiredCodec(Address$1)
});
const RewardType = {
  encode(x) {
    const enumMap = {
      unknown: RewardType$1.UNSPECIFIED,
      block: RewardType$1.BLOCK,
      uncle: RewardType$1.UNCLE
    };
    return enumMap[x] ?? RewardType$1.UNSPECIFIED;
  },
  decode(p) {
    const enumMap = {
      [RewardType$1.BLOCK]: "block",
      [RewardType$1.UNCLE]: "uncle",
      [RewardType$1.UNSPECIFIED]: "unknown",
      [RewardType$1.UNRECOGNIZED]: "unknown"
    };
    return enumMap[p] ?? "unknown";
  }
};
const RewardAction = MessageCodec({
  author: RequiredCodec(Address$1),
  type: RequiredCodec(RewardType),
  value: RequiredCodec(U256$1)
});
const CallOutput = MessageCodec({
  gasUsed: RequiredCodec(BigIntCodec),
  output: RequiredCodec(BytesFromUint8Array)
});
const CreateOutput = MessageCodec({
  address: RequiredCodec(Address$1),
  code: RequiredCodec(BytesFromUint8Array),
  gasUsed: RequiredCodec(BigIntCodec)
});
const Trace = MessageCodec({
  action: RequiredCodec(
    OneOfCodec({
      call: CallAction,
      create: CreateAction,
      selfDestruct: SelfDestructAction,
      reward: RewardAction
    })
  ),
  error: OptionalCodec(StringCodec),
  output: OptionalCodec(
    OneOfCodec({
      callOutput: CallOutput,
      createOutput: CreateOutput
    })
  ),
  subtraces: RequiredCodec(NumberCodec),
  traceAddress: ArrayCodec(NumberCodec)
});
const TransactionTrace = MessageCodec({
  filterIds: ArrayCodec(NumberCodec),
  transactionIndex: RequiredCodec(NumberCodec),
  transactionHash: RequiredCodec(B256$1),
  traces: ArrayCodec(Trace)
});
const Block = MessageCodec({
  header: RequiredCodec(BlockHeader),
  withdrawals: ArrayCodec(Withdrawal),
  transactions: ArrayCodec(Transaction),
  receipts: ArrayCodec(TransactionReceipt),
  logs: ArrayCodec(Log),
  traces: ArrayCodec(TransactionTrace)
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
const WithdrawalFilter = MessageCodec({
  id: OptionalCodec(NumberCodec),
  validatorIndex: OptionalCodec(NumberCodec),
  address: OptionalCodec(Address$1)
});
const TransactionStatusFilter = {
  decode(value) {
    const enumMap = {
      [TransactionStatusFilter$1.SUCCEEDED]: "succeeded",
      [TransactionStatusFilter$1.REVERTED]: "reverted",
      [TransactionStatusFilter$1.ALL]: "all",
      [TransactionStatusFilter$1.UNSPECIFIED]: "unknown",
      [TransactionStatusFilter$1.UNRECOGNIZED]: "unknown"
    };
    return enumMap[value] ?? "unknown";
  },
  encode(value) {
    switch (value) {
      case "succeeded":
        return TransactionStatusFilter$1.SUCCEEDED;
      case "reverted":
        return TransactionStatusFilter$1.REVERTED;
      case "all":
        return TransactionStatusFilter$1.ALL;
      default:
        return TransactionStatusFilter$1.UNSPECIFIED;
    }
  }
};
const Topic = {
  encode(x) {
    if (x === null) {
      return { value: void 0 };
    }
    return { value: B256$1.encode(x) };
  },
  decode({ value }) {
    if (value === void 0) {
      return null;
    }
    return B256$1.decode(value);
  }
};
const LogFilter = MessageCodec({
  id: OptionalCodec(NumberCodec),
  address: OptionalCodec(Address$1),
  topics: OptionalCodec(ArrayCodec(Topic)),
  strict: OptionalCodec(BooleanCodec),
  transactionStatus: OptionalCodec(TransactionStatusFilter),
  includeTransaction: OptionalCodec(BooleanCodec),
  includeReceipt: OptionalCodec(BooleanCodec),
  includeTransactionTrace: OptionalCodec(BooleanCodec)
});
const TransactionFilter = MessageCodec({
  id: OptionalCodec(NumberCodec),
  from: OptionalCodec(Address$1),
  to: OptionalCodec(Address$1),
  create: OptionalCodec(BooleanCodec),
  transactionStatus: OptionalCodec(TransactionStatusFilter),
  includeReceipt: OptionalCodec(BooleanCodec),
  includeLogs: OptionalCodec(BooleanCodec),
  includeTransactionTrace: OptionalCodec(BooleanCodec)
});
const Filter = MessageCodec({
  header: OptionalCodec(HeaderFilter),
  withdrawals: OptionalCodec(ArrayCodec(WithdrawalFilter)),
  transactions: OptionalCodec(ArrayCodec(TransactionFilter)),
  logs: OptionalCodec(ArrayCodec(LogFilter))
});
const FilterFromBytes = {
  encode(x) {
    return Filter$1.encode(Filter.encode(x)).finish();
  },
  decode(p) {
    return Filter.decode(Filter$1.decode(p));
  }
};
function mergeFilter(a, b) {
  const header = mergeHeaderFilter(a.header, b.header);
  return {
    header,
    withdrawals: [...a.withdrawals ?? [], ...b.withdrawals ?? []],
    logs: [...a.logs ?? [], ...b.logs ?? []],
    transactions: [...a.transactions ?? [], ...b.transactions ?? []]
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

const EvmStream = new StreamConfig(
  FilterFromBytes,
  BlockFromBytes,
  mergeFilter,
  "evm"
);

export { AccessListItem, Address$1 as Address, B256$1 as B256, Block, BlockFromBytes, BlockHeader, Bloom, CallAction, CallOutput, CallType, CreateAction, CreateOutput, CreationMethod, EvmStream, Filter, FilterFromBytes, HeaderFilter, Log, LogFilter, RewardAction, RewardType, SelfDestructAction, Signature, Topic, Trace, Transaction, TransactionFilter, TransactionReceipt, TransactionStatus, TransactionStatusFilter, TransactionTrace, U128$1 as U128, U256$1 as U256, Withdrawal, WithdrawalFilter, mergeFilter, index as proto };
//# sourceMappingURL=index.mjs.map
