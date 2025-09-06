import { createAuthenticatedClient } from '@apibara/protocol';
import ci from 'ci-info';
import { u as useIndexerContext } from '../shared/indexer.75773ef1.mjs';
import { createIndexer } from '../index.mjs';
import { internalContext } from '../internal/plugins.mjs';
import { l as logger } from '../shared/indexer.cc5002a1.mjs';
import { isCassetteAvailable, record, replay } from '../vcr/index.mjs';
import 'node:async_hooks';
import 'unctx';
import 'consola';
import 'hookable';
import 'node:assert';
import '@opentelemetry/api';
import 'node:fs/promises';
import 'node:path';
import 'node:fs';
import '@apibara/protocol/testing';

function createVcr() {
  let result;
  return {
    async run(cassetteName, indexerConfig, range) {
      const vcrConfig = {
        cassetteDir: "cassettes"
      };
      const cassetteOptions = {
        name: cassetteName,
        startingCursor: {
          orderKey: range.fromBlock
        },
        endingCursor: {
          orderKey: range.toBlock
        }
      };
      indexerConfig.plugins = [
        internalContext({
          indexerName: cassetteName,
          availableIndexers: [cassetteName]
        }),
        logger(),
        ...indexerConfig.plugins ?? []
      ];
      const indexer = createIndexer(indexerConfig);
      indexer.hooks.hook("run:after", () => {
        result = useIndexerContext();
      });
      if (!isCassetteAvailable(vcrConfig, cassetteName)) {
        if (ci.isCI) {
          throw new Error("Cannot record cassette in CI");
        }
        const client = createAuthenticatedClient(
          indexer.streamConfig,
          indexer.options.streamUrl
        );
        await record(vcrConfig, client, indexer, cassetteOptions);
      } else {
        await replay(vcrConfig, indexer, cassetteName);
      }
      return result;
    }
  };
}

export { createVcr };
//# sourceMappingURL=index.mjs.map
