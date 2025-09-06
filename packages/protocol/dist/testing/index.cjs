'use strict';

const codec = require('../codec.cjs');
const config = require('../shared/protocol.53f81a1e.cjs');
require('protobufjs/minimal.js');
require('viem');
require('long');

class MockClient {
  constructor(messageFactory) {
    this.messageFactory = messageFactory;
  }
  async status(request, options) {
    throw new Error("Client.status is not implemented for VcrClient");
  }
  streamData(request, options) {
    const messages = this.messageFactory(request, options);
    return new StreamDataIterable(messages);
  }
}
class StreamDataIterable {
  constructor(messages) {
    this.messages = messages;
  }
  [Symbol.asyncIterator]() {
    let index = 0;
    const messages = this.messages;
    return {
      async next() {
        if (index >= messages.length) {
          return { done: true, value: void 0 };
        }
        const message = messages[index++];
        if (message instanceof Error) {
          throw message;
        }
        return { done: false, value: message };
      }
    };
  }
}

const MockFilter = codec.MessageCodec({
  filter: codec.OptionalCodec(codec.StringCodec)
});
const MockFilterFromBytes = {
  decode(value) {
    return config.MockFilter.decode(value);
  },
  encode(value) {
    return config.MockFilter.encode(value).finish();
  }
};
const MockBlockFromBytes = {
  decode(value) {
    if (value.length === 0) {
      return null;
    }
    return config.MockBlock.decode(value);
  },
  encode(value) {
    if (value === null) {
      return new Uint8Array();
    }
    return config.MockBlock.encode(value).finish();
  }
};
function mergeMockFilter(a, b) {
  let filter = "";
  if (a.filter) {
    filter += a.filter;
  }
  if (b.filter) {
    filter += b.filter;
  }
  return { filter };
}
const MockStream = new config.StreamConfig(
  MockFilterFromBytes,
  MockBlockFromBytes,
  mergeMockFilter,
  "mock"
);
const MockStreamResponse = config.StreamDataResponse(MockBlockFromBytes);

exports.MockBlockFromBytes = MockBlockFromBytes;
exports.MockClient = MockClient;
exports.MockFilter = MockFilter;
exports.MockFilterFromBytes = MockFilterFromBytes;
exports.MockStream = MockStream;
exports.MockStreamResponse = MockStreamResponse;
exports.StreamDataIterable = StreamDataIterable;
//# sourceMappingURL=index.cjs.map
