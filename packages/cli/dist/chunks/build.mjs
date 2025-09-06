import { commonArgs, checkForUnknownArgs } from 'apibara/common';
import { createApibara, prepare, writeTypes, build as build$1 } from 'apibara/core';
import { runtimeDir } from 'apibara/runtime/meta';
import { defineCommand } from 'citty';
import { resolve, join } from 'pathe';

const build = defineCommand({
  meta: {
    name: "build",
    description: "Build indexer"
  },
  args: {
    ...commonArgs
  },
  async run({ args, cmd }) {
    await checkForUnknownArgs(args, cmd);
    const rootDir = resolve(args.dir || args._dir || ".");
    const apibara = await createApibara({
      rootDir
    });
    apibara.options.entry = join(runtimeDir, "start.mjs");
    await prepare(apibara);
    await writeTypes(apibara);
    await build$1(apibara);
    await apibara.close();
  }
});

export { build as default };
//# sourceMappingURL=build.mjs.map
