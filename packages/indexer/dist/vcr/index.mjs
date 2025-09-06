import fs$1 from 'node:fs/promises';
import path from 'node:path';
import { run } from '../index.mjs';
import assert from 'node:assert';
import fs from 'node:fs';
import { MockClient } from '@apibara/protocol/testing';
import '@apibara/protocol';
import 'consola';
import 'hookable';
import '../shared/indexer.75773ef1.mjs';
import 'node:async_hooks';
import 'unctx';
import '@opentelemetry/api';
import '../internal/plugins.mjs';

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
  const filePath = path.join(vcrConfig.cassetteDir, `${cassetteName}.json`);
  return fs.existsSync(filePath);
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
      await fs$1.mkdir(vcrConfig.cassetteDir, { recursive: true });
      const filePath = path.join(
        vcrConfig.cassetteDir,
        `${cassetteOptions.name}.json`
      );
      await fs$1.writeFile(filePath, serialize(output), { flag: "w" });
    }
  });
  await run(client, indexer);
}

async function replay(vcrConfig, indexer, cassetteName) {
  const client = loadCassette(vcrConfig, cassetteName);
  await run(client, indexer);
}
function loadCassette(vcrConfig, cassetteName) {
  const filePath = path.join(vcrConfig.cassetteDir, `${cassetteName}.json`);
  const data = fs.readFileSync(filePath, "utf8");
  const cassetteData = deserialize(data);
  const { filter, messages } = cassetteData;
  return new MockClient((request, options) => {
    assert.deepStrictEqual(
      request.filter,
      [filter],
      "Indexer and cassette filter mismatch. Hint: delete the cassette and run again."
    );
    return messages;
  });
}

export { deserialize, isCassetteAvailable, loadCassette, record, replay, serialize };
//# sourceMappingURL=index.mjs.map
