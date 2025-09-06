import { commonArgs, checkForUnknownArgs } from 'apibara/common';
import { createApibara, writeTypes } from 'apibara/core';
import { defineCommand } from 'citty';
import { resolve } from 'pathe';

const prepare = defineCommand({
  meta: {
    name: "prepare",
    description: "Generate types for the project"
  },
  args: {
    ...commonArgs
  },
  async run({ args, cmd }) {
    await checkForUnknownArgs(args, cmd);
    const rootDir = resolve(args.dir || ".");
    const apibara = await createApibara({ rootDir });
    await writeTypes(apibara);
  }
});

export { prepare as default };
//# sourceMappingURL=prepare.mjs.map
