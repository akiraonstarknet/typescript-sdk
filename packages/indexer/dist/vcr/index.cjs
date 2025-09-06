'use strict';

const fs$1 = require('node:fs/promises');
const path = require('node:path');
const index = require('../index.cjs');
const assert = require('node:assert');
const fs = require('node:fs');
const testing = require('@apibara/protocol/testing');
require('@apibara/protocol');
require('consola');
require('hookable');
require('../shared/indexer.479ae593.cjs');
require('node:async_hooks');
require('unctx');
require('@opentelemetry/api');
require('../internal/plugins.cjs');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const fs__default$1 = /*#__PURE__*/_interopDefaultCompat(fs$1);
const path__default = /*#__PURE__*/_interopDefaultCompat(path);
const assert__default = /*#__PURE__*/_interopDefaultCompat(assert);
const fs__default = /*#__PURE__*/_interopDefaultCompat(fs);

function deserialize(str) {
  return JSON.parse(
    str,
    (_, value) => typeof value === "string" && value.match(/^\d+n$/) ? BigInt(value.slice(0, -1)) : value
  );
}
function serialize(obj) {
  return JSON.stringify(
    obj,
    (_, value) => typeof value === "bigint" ? `${value.toString()}n` : value,
    "	"
  );
}
function isCassetteAvailable(vcrConfig, cassetteName) {
  const filePath = path__default.join(vcrConfig.cassetteDir, `${cassetteName}.json`);
  return fs__default.existsSync(filePath);
}

async function record(vcrConfig, client, indexer, cassetteOptions) {
  const messages = [];
  indexer.hooks.addHooks({
    "connect:before"({ options, request }) {
      request.startingCursor = cassetteOptions.startingCursor;
      options.endingCursor = cassetteOptions.endingCursor;
    },
    message({ message }) {
      messages.push(message);
    },
    async "run:after"() {
      const output = {
        filter: indexer.options.filter,
        messages
      };
      await fs__default$1.mkdir(vcrConfig.cassetteDir, { recursive: true });
      const filePath = path__default.join(
        vcrConfig.cassetteDir,
        `${cassetteOptions.name}.json`
      );
      await fs__default$1.writeFile(filePath, serialize(output), { flag: "w" });
    }
  });
  await index.run(client, indexer);
}

async function replay(vcrConfig, indexer, cassetteName) {
  const client = loadCassette(vcrConfig, cassetteName);
  await index.run(client, indexer);
}
function loadCassette(vcrConfig, cassetteName) {
  const filePath = path__default.join(vcrConfig.cassetteDir, `${cassetteName}.json`);
  const data = fs__default.readFileSync(filePath, "utf8");
  const cassetteData = deserialize(data);
  const { filter, messages } = cassetteData;
  return new testing.MockClient((request, options) => {
    assert__default.deepStrictEqual(
      request.filter,
      [filter],
      "Indexer and cassette filter mismatch. Hint: delete the cassette and run again."
    );
    return messages;
  });
}

exports.deserialize = deserialize;
exports.isCassetteAvailable = isCassetteAvailable;
exports.loadCassette = loadCassette;
exports.record = record;
exports.replay = replay;
exports.serialize = serialize;
//# sourceMappingURL=index.cjs.map
