import { runWithReconnect } from "@apibara/indexer";
import { createAuthenticatedClient } from "@apibara/protocol";
import {
  checkForUnknownArgs,
  getProcessedRuntimeConfig,
  getRuntimeDataFromEnv
} from "apibara/common";
import { defineCommand, runMain } from "citty";
import consola from "consola";
import { blueBright } from "picocolors";
import { register } from "#apibara-internal-virtual/instrumentation";
import {
  preset as originalPreset,
  presets,
  runtimeConfig,
  userEnvRuntimeConfig
} from "#apibara-internal-virtual/static-config";
import { createIndexer } from "./internal/app.mjs";
const startCommand = defineCommand({
  meta: {
    name: "start",
    description: "Start the indexer"
  },
  args: {
    indexer: {
      type: "string",
      description: "Indexer name",
      required: true
    },
    preset: {
      type: "string",
      description: "Preset name"
    },
    standalone: {
      type: "boolean",
      default: true,
      description: "--standalone: can run the indexer just with node and without apibara cli \n			  --no-standalone: must run the indexer with apibara cli"
    }
  },
  async run({ args, cmd }) {
    const { indexer, preset: argPreset, standalone } = args;
    await checkForUnknownArgs(args, cmd);
    let preset;
    let processedRuntimeConfig;
    if (standalone) {
      preset = argPreset ?? originalPreset;
      processedRuntimeConfig = getProcessedRuntimeConfig({
        preset,
        presets,
        runtimeConfig,
        userEnvRuntimeConfig
      });
    } else {
      const envResult = getRuntimeDataFromEnv();
      preset = envResult.preset;
      processedRuntimeConfig = envResult.processedRuntimeConfig;
    }
    const { indexer: indexerInstance, logger } = createIndexer({
      indexerName: indexer,
      processedRuntimeConfig,
      preset
    }) ?? {};
    if (!indexerInstance) {
      consola.error(`Specified indexer "${indexer}" but it was not defined`);
      process.exit(1);
    }
    const client = createAuthenticatedClient(
      indexerInstance.streamConfig,
      indexerInstance.options.streamUrl,
      indexerInstance.options.clientOptions
    );
    if (register) {
      consola.start("Registering from instrumentation");
      await register();
      consola.success("Registered from instrumentation");
    }
    if (logger) {
      logger.info(`Indexer ${blueBright(indexer)} started`);
    }
    await runWithReconnect(client, indexerInstance);
  }
});
export const mainCli = defineCommand({
  meta: {
    name: "indexer-runner",
    description: "Run an indexer"
  },
  subCommands: {
    start: () => startCommand
  }
});
runMain(mainCli);
export default {};
