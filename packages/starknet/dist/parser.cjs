'use strict';

class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}
function assertInBounds(data, offset) {
  if (offset >= data.length) {
    throw new ParseError(
      `Offset out of bounds. Data length ${data.length}, offset ${offset}`
    );
  }
}
function parseBool(data, offset) {
  assertInBounds(data, offset);
  return { out: BigInt(data[offset]) > 0n, offset: offset + 1 };
}
function parseAsBigInt(data, offset) {
  assertInBounds(data, offset);
  return { out: BigInt(data[offset]), offset: offset + 1 };
}
const parseU8 = parseAsBigInt;
const parseU16 = parseAsBigInt;
const parseU32 = parseAsBigInt;
const parseU64 = parseAsBigInt;
const parseU128 = parseAsBigInt;
const parseUsize = parseAsBigInt;
function parseU256(data, offset) {
  assertInBounds(data, offset + 1);
  return {
    out: BigInt(data[offset]) + (BigInt(data[offset + 1]) << 128n),
    offset: offset + 2
  };
}
function parseAsHex(data, offset) {
  assertInBounds(data, offset);
  return {
    out: data[offset],
    offset: offset + 1
  };
}
const parseContractAddress = parseAsHex;
const parseEthAddress = parseAsHex;
const parseStorageAddress = parseAsHex;
const parseClassHash = parseAsHex;
const parseBytes31 = parseAsHex;
function parseFelt252(data, offset) {
  assertInBounds(data, offset);
  return {
    out: BigInt(data[offset]),
    offset: offset + 1
  };
}
function parseEmpty(_data, offset) {
  return { out: null, offset };
}
function parseArray(type) {
  return (data, startingOffset) => {
    let offset = startingOffset;
    const length = BigInt(data[offset]);
    offset++;
    const out = [];
    for (let i = 0; i < length; i++) {
      const { out: item, offset: newOffset } = type(data, offset);
      out.push(item);
      offset = newOffset;
    }
    return { out, offset };
  };
}
const parseSpan = parseArray;
function parseOption(type) {
  return (data, offset) => {
    const hasValue = BigInt(data[offset]) === 1n;
    if (hasValue) {
      return type(data, offset + 1);
    }
    return { out: null, offset: offset + 1 };
  };
}
function parseStruct(parsers) {
  const sortedParsers = Object.entries(parsers).sort(
    (a, b) => a[1].index - b[1].index
  );
  const parser = (data, startingOffset) => {
    let offset = startingOffset;
    const out = {};
    for (const [key, { parser: parser2 }] of sortedParsers) {
      const { out: value, offset: newOffset } = parser2(data, offset);
      out[key] = value;
      offset = newOffset;
    }
    return { out, offset };
  };
  return parser;
}
function parseEnum(parsers) {
  return (data, startingOffset) => {
    const selectorFelt = data[startingOffset];
    const selector = Number(BigInt(selectorFelt));
    const parserEntry = Object.entries(parsers).find(
      ([, { index }]) => index === selector
    );
    if (!parserEntry) {
      throw new ParseError(`Unknown enum variant selector: ${selector}`);
    }
    const [variantName, { parser }] = parserEntry;
    const { out, offset: newOffset } = parser(data, startingOffset + 1);
    return {
      out: { _tag: variantName, [variantName]: out },
      offset: newOffset
    };
  };
}
function parseTuple(...parsers) {
  return (data, startingOffset) => {
    let offset = startingOffset;
    const out = [];
    for (const parser of parsers) {
      const { out: value, offset: newOffset } = parser(data, offset);
      out.push(value);
      offset = newOffset;
    }
    return { out, offset };
  };
}
const parseByteArrayStruct = parseStruct({
  data: {
    index: 0,
    parser: parseArray(parseBytes31)
  },
  pendingWord: { index: 1, parser: parseFelt252 },
  pendingWordLen: { index: 2, parser: parseU32 }
});
function parseByteArray(data, offset) {
  const { out, offset: offsetOut } = parseByteArrayStruct(data, offset);
  const dataBytes = out.data.map((bytes2) => bytes2.slice(2).padStart(62, "0")).join("");
  let pending = out.pendingWord.toString(16);
  const pendingWordLength = Number(out.pendingWordLen);
  if (pending.length < pendingWordLength * 2) {
    pending = pending.padStart(pendingWordLength * 2, "0");
  }
  const pendingBytes = pending.slice(pending.length - 2 * pendingWordLength);
  const bytes = removeLeadingZeros(dataBytes + pendingBytes);
  return { out: `0x${bytes}`, offset: offsetOut };
}
function removeLeadingZeros(bytes) {
  for (let i = 0; i < bytes.length; i++) {
    if (bytes[i] !== "0") {
      let j = i;
      if (i % 2 !== 0) {
        j -= 1;
      }
      return bytes.slice(j);
    }
  }
  return "00";
}

exports.ParseError = ParseError;
exports.parseArray = parseArray;
exports.parseAsBigInt = parseAsBigInt;
exports.parseAsHex = parseAsHex;
exports.parseBool = parseBool;
exports.parseByteArray = parseByteArray;
exports.parseBytes31 = parseBytes31;
exports.parseClassHash = parseClassHash;
exports.parseContractAddress = parseContractAddress;
exports.parseEmpty = parseEmpty;
exports.parseEnum = parseEnum;
exports.parseEthAddress = parseEthAddress;
exports.parseFelt252 = parseFelt252;
exports.parseOption = parseOption;
exports.parseSpan = parseSpan;
exports.parseStorageAddress = parseStorageAddress;
exports.parseStruct = parseStruct;
exports.parseTuple = parseTuple;
exports.parseU128 = parseU128;
exports.parseU16 = parseU16;
exports.parseU256 = parseU256;
exports.parseU32 = parseU32;
exports.parseU64 = parseU64;
exports.parseU8 = parseU8;
exports.parseUsize = parseUsize;
//# sourceMappingURL=parser.cjs.map
