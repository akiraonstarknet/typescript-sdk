'use strict';

const protocol = require('@apibara/protocol');
const ci = require('ci-info');
const config = require('../shared/indexer.479ae593.cjs');
const index = require('../index.cjs');
const internal_plugins = require('../internal/plugins.cjs');
const logger = require('../shared/indexer.99798ac7.cjs');
const vcr_index = require('../vcr/index.cjs');
require('node:async_hooks');
require('unctx');
require('consola');
require('hookable');
require('node:assert');
require('@opentelemetry/api');
require('node:fs/promises');
require('node:path');
require('node:fs');
require('@apibara/protocol/testing');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const ci__default = /*#__PURE__*/_interopDefaultCompat(ci);

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
        internal_plugins.internalContext({
          indexerName: cassetteName,
          availableIndexers: [cassetteName]
        }),
        logger.logger(),
        ...indexerConfig.plugins ?? []
      ];
      const indexer = index.createIndexer(indexerConfig);
      indexer.hooks.hook("run:after", () => {
        result = config.useIndexerContext();
      });
      if (!vcr_index.isCassetteAvailable(vcrConfig, cassetteName)) {
        if (ci__default.isCI) {
          throw new Error("Cannot record cassette in CI");
        }
        const client = protocol.createAuthenticatedClient(
          indexer.streamConfig,
          indexer.options.streamUrl
        );
        await vcr_index.record(vcrConfig, client, indexer, cassetteOptions);
      } else {
        await vcr_index.replay(vcrConfig, indexer, cassetteName);
      }
      return result;
    }
  };
}

exports.createVcr = createVcr;
//# sourceMappingURL=index.cjs.map
