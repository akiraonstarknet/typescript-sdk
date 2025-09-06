import { spawn } from 'node:child_process';
import { commonArgs, checkForUnknownArgs } from 'apibara/common';
import { createApibara, prepare, writeTypes, build } from 'apibara/core';
import { runtimeDir } from 'apibara/runtime/meta';
import { defineCommand } from 'citty';
import { colors } from 'consola/utils';
import { resolve, join } from 'pathe';
import { b as blueBright, g as gray } from '../shared/apibara.730bb1e4.mjs';
import 'picocolors';

const hmrKeyRe = /^(runtimeConfig\.|presets\.|preset$)/;
const dev = defineCommand({
  meta: {
    name: "dev",
    description: "Start the development server"
  },
  args: {
    ...commonArgs,
    indexers: {
      type: "string",
      description: "Comma-separated list of indexers to run"
    },
    preset: {
      type: "string",
      description: "Preset to use"
    },
    "always-reindex": {
      type: "boolean",
      default: false,
      description: "Reindex the indexers from the starting block on every restart | default: `false`"
    }
  },
  async run({ args, data, cmd, rawArgs }) {
    await checkForUnknownArgs(args, cmd);
    const rootDir = resolve(args.dir || args._dir || ".");
    if (args["always-reindex"]) {
      process.env.APIBARA_ALWAYS_REINDEX = "true";
    }
    const selectedIndexers = new Set(
      args.indexers?.split(",").map((i) => i.trim()).sort() ?? []
    );
    let apibara;
    let childProcess;
    const reload = async () => {
      if (apibara) {
        apibara.logger.info("Restarting dev server");
        if ("unwatch" in apibara.options._c12) {
          await apibara.options._c12.unwatch();
        }
        await apibara.close();
      }
      apibara = await createApibara(
        {
          rootDir,
          preset: args.preset
        },
        {
          watch: true,
          c12: {
            async onUpdate({ getDiff, newConfig }) {
              const diff = getDiff();
              if (diff.length === 0) {
                return;
              }
              apibara.logger.info(
                `Config updated: 
${diff.map((entry) => `  ${entry.toString()}`).join("\n")}`
              );
              await (diff.every((e) => hmrKeyRe.test(e.key)) ? (
                // in hot reload we only update the runtime values & restart indexers,no build step, apibara instance remains the same
                apibara.updateConfig(newConfig.config || {})
              ) : reload());
            }
          }
        },
        true
      );
      apibara.hooks.hookOnce("restart", async () => {
        await reload();
      });
      apibara.options.entry = join(runtimeDir, "dev.mjs");
      await prepare(apibara);
      await writeTypes(apibara);
      await build(apibara);
      apibara.hooks.hook("dev:restart", async () => {
        if (childProcess) {
          apibara.logger.info("Change detected, stopping indexers to restart");
          await killProcess(childProcess);
          childProcess = void 0;
        }
      });
      apibara.hooks.hook("dev:reload", async () => {
        if (childProcess) {
          await killProcess(childProcess);
          childProcess = void 0;
          apibara.logger.info("Restarting indexers");
        } else {
          apibara.logger.info("Starting indexers");
          const indexersText = apibara.indexers.map(
            (i) => selectedIndexers.has(i.name) || selectedIndexers.size === 0 ? blueBright(i.name) : gray(i.name)
          ).join(", ");
          apibara.logger.info("Indexers:", indexersText);
        }
        const childArgs = [
          resolve(apibara.options.outputDir || "./.apibara/build", "dev.mjs"),
          "start",
          ...args.indexers ? ["--indexers", args.indexers] : []
        ];
        childProcess = spawn("node", childArgs, {
          stdio: "inherit"
        });
        childProcess.on("close", (code, signal) => {
          childProcess = void 0;
          console.log();
          apibara.logger.info(
            `Indexers process exited${code !== null ? ` with code ${colors.red(code)}` : ""}`
          );
        });
      });
    };
    await reload();
  }
});
async function killProcess(childProcess) {
  if (childProcess) {
    await new Promise((resolve2) => {
      childProcess.once("exit", resolve2);
      childProcess.kill();
    });
  }
}

export { dev as default };
//# sourceMappingURL=dev.mjs.map
