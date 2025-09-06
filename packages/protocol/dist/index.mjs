import { s as stream, t as testing, C as Cursor, D as DnaStreamDefinition, S as StreamDataResponse } from './shared/protocol.68fdd897.mjs';
export { B as BytesFromUint8Array, a as CursorFromBytes, k as Data, b as DataFinality, d as DataProduction, e as DurationCodec, F as Finalize, H as Heartbeat, I as Invalidate, R as ResponseWithoutData, h as StdErr, g as StdOut, l as StreamConfig, f as StreamDataRequest, j as SystemMessage, c as createCursor, i as isCursor, n as normalizeCursor } from './shared/protocol.68fdd897.mjs';
import { MessageCodec, OptionalCodec } from './codec.mjs';
import assert from 'node:assert';
import consola from 'consola';
import { createChannel, createClient as createClient$1, Metadata } from 'nice-grpc';
export { ClientError, Metadata, ServerError, Status } from 'nice-grpc';
import 'protobufjs/minimal.js';
import 'viem';
import 'long';

const index = {
  __proto__: null,
  stream: stream,
  testing: testing
};

const StatusRequest = MessageCodec({});
const StatusResponse = MessageCodec({
  currentHead: OptionalCodec(Cursor),
  lastIngested: OptionalCodec(Cursor),
  finalized: OptionalCodec(Cursor),
  starting: OptionalCodec(Cursor)
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
function createClient(config, streamUrl, options = {}) {
  const channel = createChannel(
    streamUrl,
    options?.credentials,
    options?.channelOptions
  );
  const client = createClient$1(
    DnaStreamDefinition,
    channel,
    options?.defaultCallOptions
  );
  return new GrpcClient(config, client);
}
function createAuthenticatedClient(config, streamUrl, options) {
  const dnaToken = process.env.DNA_TOKEN;
  if (!dnaToken) {
    consola.warn(
      "DNA_TOKEN environment variable is not set. Trying to connect without authentication."
    );
  }
  return createClient(config, streamUrl, {
    ...options,
    defaultCallOptions: {
      ...options?.defaultCallOptions ?? {},
      "*": {
        metadata: Metadata({
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
    const schema = StreamDataResponse(this.schema);
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
            assert(value.message.$case === "data");
            assert(decodedMessage._tag === "data");
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

export { Cursor, DnaStreamDefinition, GrpcClient, RateGauge, StatusRequest, StatusResponse, StreamDataIterable, StreamDataResponse, TimeoutError, createAuthenticatedClient, createClient, index as proto };
//# sourceMappingURL=index.mjs.map
