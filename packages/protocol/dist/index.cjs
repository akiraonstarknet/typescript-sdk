'use strict';

const config = require('./shared/protocol.53f81a1e.cjs');
const codec = require('./codec.cjs');
const assert = require('node:assert');
const consola = require('consola');
const niceGrpc = require('nice-grpc');
require('protobufjs/minimal.js');
require('viem');
require('long');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const assert__default = /*#__PURE__*/_interopDefaultCompat(assert);
const consola__default = /*#__PURE__*/_interopDefaultCompat(consola);

const index = {
  __proto__: null,
  stream: config.stream,
  testing: config.testing
};

const StatusRequest = codec.MessageCodec({});
const StatusResponse = codec.MessageCodec({
  currentHead: codec.OptionalCodec(config.Cursor),
  lastIngested: codec.OptionalCodec(config.Cursor),
  finalized: codec.OptionalCodec(config.Cursor),
  starting: codec.OptionalCodec(config.Cursor)
});

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const DEFAULT_TIMEOUT_MS = 45e3;
class TimeoutError extends Error {
  constructor(timeout) {
    super(`No message received in ${timeout}ms`);
    this.name = "TimeoutError";
  }
}
function createClient(config$1, streamUrl, options = {}) {
  const channel = niceGrpc.createChannel(
    streamUrl,
    options?.credentials,
    options?.channelOptions
  );
  const client = niceGrpc.createClient(
    config.DnaStreamDefinition,
    channel,
    options?.defaultCallOptions
  );
  return new GrpcClient(config$1, client);
}
function createAuthenticatedClient(config, streamUrl, options) {
  const dnaToken = process.env.DNA_TOKEN;
  if (!dnaToken) {
    consola__default.warn(
      "DNA_TOKEN environment variable is not set. Trying to connect without authentication."
    );
  }
  return createClient(config, streamUrl, {
    ...options,
    defaultCallOptions: {
      ...options?.defaultCallOptions ?? {},
      "*": {
        metadata: niceGrpc.Metadata({
          Authorization: `Bearer ${dnaToken}`
        }),
        // metadata cant be overrided with spread as its a class so we override it fully if user provided it.
        ...options?.defaultCallOptions?.["*"] ?? {}
      }
    }
  });
}
class GrpcClient {
  constructor(config, client) {
    this.config = config;
    this.client = client;
    __publicField$1(this, "encodeRequest");
    this.encodeRequest = config.Request.encode;
  }
  async status(request, options) {
    const response = await this.client.status(
      StatusRequest.encode(request ?? {}),
      options
    );
    return StatusResponse.decode(response);
  }
  streamData(request, options) {
    const it = this.client.streamData(this.encodeRequest(request), options);
    return new StreamDataIterable(it, this.config.Block, options);
  }
}
class StreamDataIterable {
  constructor(it, schema, options) {
    this.it = it;
    this.schema = schema;
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    const inner = this.it[Symbol.asyncIterator]();
    const schema = config.StreamDataResponse(this.schema);
    const decoder = schema.decode;
    const { endingCursor, timeout = DEFAULT_TIMEOUT_MS } = this.options ?? {};
    let shouldStop = false;
    let clock;
    return {
      async next() {
        if (shouldStop) {
          return { done: true, value: void 0 };
        }
        const t = new Promise(
          (_, reject) => {
            clock = setTimeout(() => {
              reject(new TimeoutError(timeout));
            }, timeout);
          }
        );
        try {
          const { done, value } = await Promise.race([inner.next(), t]);
          clearTimeout(clock);
          if (done || value.message === void 0) {
            return { done: true, value: void 0 };
          }
          const decodedMessage = decoder(value.message);
          if (endingCursor) {
            assert__default(value.message.$case === "data");
            assert__default(decodedMessage._tag === "data");
            const { orderKey, uniqueKey } = endingCursor;
            const endCursor = decodedMessage.data.endCursor;
            if (orderKey === endCursor?.orderKey) {
              if (!uniqueKey || uniqueKey === endCursor.uniqueKey) {
                shouldStop = true;
                return { done: false, value: decodedMessage };
              }
            }
          }
          return {
            done: false,
            value: decodedMessage
          };
        } finally {
          clearTimeout(clock);
        }
      }
    };
  }
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class RateGauge {
  constructor(intervalSeconds) {
    __publicField(this, "interval");
    __publicField(this, "prev");
    __publicField(this, "rateMs");
    __publicField(this, "var");
    this.interval = intervalSeconds * 1e3;
    this.var = 0;
  }
  record(items) {
    const prev = this.prev;
    const now = process.hrtime.bigint();
    this.prev = now;
    if (!prev) {
      return;
    }
    const deltaMs = Number(now - prev) / 1e6;
    const rateMs = items / deltaMs;
    if (this.rateMs === void 0) {
      this.rateMs = rateMs;
      this.var = 0;
      return;
    }
    const alpha = 1 - Math.exp(-deltaMs / this.interval);
    this.rateMs = alpha * rateMs + (1 - alpha) * this.rateMs;
    const diff = rateMs - this.rateMs;
    const incr = alpha * diff;
    this.var = (1 - alpha) * (this.var + incr * diff);
  }
  /** Returns the average rate per second. */
  average() {
    if (this.rateMs === void 0) {
      return void 0;
    }
    return this.rateMs * 1e3;
  }
  /** Returns the variance. */
  variance() {
    return this.var;
  }
}

exports.BytesFromUint8Array = config.BytesFromUint8Array;
exports.Cursor = config.Cursor;
exports.CursorFromBytes = config.CursorFromBytes;
exports.Data = config.Data;
exports.DataFinality = config.DataFinality;
exports.DataProduction = config.DataProduction;
exports.DnaStreamDefinition = config.DnaStreamDefinition;
exports.DurationCodec = config.DurationCodec;
exports.Finalize = config.Finalize;
exports.Heartbeat = config.Heartbeat;
exports.Invalidate = config.Invalidate;
exports.ResponseWithoutData = config.ResponseWithoutData;
exports.StdErr = config.StdErr;
exports.StdOut = config.StdOut;
exports.StreamConfig = config.StreamConfig;
exports.StreamDataRequest = config.StreamDataRequest;
exports.StreamDataResponse = config.StreamDataResponse;
exports.SystemMessage = config.SystemMessage;
exports.createCursor = config.createCursor;
exports.isCursor = config.isCursor;
exports.normalizeCursor = config.normalizeCursor;
exports.ClientError = niceGrpc.ClientError;
exports.Metadata = niceGrpc.Metadata;
exports.ServerError = niceGrpc.ServerError;
exports.Status = niceGrpc.Status;
exports.GrpcClient = GrpcClient;
exports.RateGauge = RateGauge;
exports.StatusRequest = StatusRequest;
exports.StatusResponse = StatusResponse;
exports.StreamDataIterable = StreamDataIterable;
exports.TimeoutError = TimeoutError;
exports.createAuthenticatedClient = createAuthenticatedClient;
exports.createClient = createClient;
exports.proto = index;
//# sourceMappingURL=index.cjs.map
