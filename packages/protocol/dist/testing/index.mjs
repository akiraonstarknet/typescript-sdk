import { MessageCodec, OptionalCodec, StringCodec } from '../codec.mjs';
import { l as StreamConfig, M as MockFilter$1, m as MockBlock, S as StreamDataResponse } from '../shared/protocol.68fdd897.mjs';
import 'protobufjs/minimal.js';
import 'viem';
import 'long';

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

const MockFilter = MessageCodec({
  filter: OptionalCodec(StringCodec)
});
const MockFilterFromBytes = {
  decode(value) {
    return MockFilter$1.decode(value);
  },
  encode(value) {
    return MockFilter$1.encode(value).finish();
  }
};
const MockBlockFromBytes = {
  decode(value) {
    if (value.length === 0) {
      return null;
    }
    return MockBlock.decode(value);
  },
  encode(value) {
    if (value === null) {
      return new Uint8Array();
    }
    return MockBlock.encode(value).finish();
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
const MockStream = new StreamConfig(
  MockFilterFromBytes,
  MockBlockFromBytes,
  mergeMockFilter,
  "mock"
);
const MockStreamResponse = StreamDataResponse(MockBlockFromBytes);

export { MockBlockFromBytes, MockClient, MockFilter, MockFilterFromBytes, MockStream, MockStreamResponse, StreamDataIterable };
//# sourceMappingURL=index.mjs.map
