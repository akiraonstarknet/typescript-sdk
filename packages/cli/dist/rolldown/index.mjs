import { existsSync } from 'node:fs';
import { builtinModules } from 'node:module';
import defu from 'defu';
import { join as join$1 } from 'pathe';
import virtual from '@rollup/plugin-virtual';
import { hash } from 'ohash';
import { join } from 'node:path';
import { USER_ENV_APIBARA_RUNTIME_CONFIG } from 'apibara/common';

function indexers(apibara) {
  const indexers2 = [...new Set(apibara.indexers)];
  return virtual({
    "#apibara-internal-virtual/indexers": `
    ${indexers2.map((i) => `import * as _${hash(i)} from '${i.indexer}';`).join("\n")}

    export const indexers = [
      ${indexers2.map((i) => `{ name: "${i.name}", indexer: _${hash(i)} }`).join(",\n")}
    ];
    `
  });
}

function instrumentation(apibara) {
  const instrumentationPath = join(
    apibara.options._c12.cwd,
    `instrumentation.${apibara.options._c12.configFile?.endsWith(".ts") ? "ts" : apibara.options._c12.configFile?.endsWith(".mjs") ? "mjs" : "js"}`
  );
  if (!existsSync(instrumentationPath)) {
    return virtual({
      "#apibara-internal-virtual/instrumentation": `
      let register = undefined;
      let logger = undefined;
  
      export { register, logger };
      `
    });
  }
  return virtual({
    "#apibara-internal-virtual/instrumentation": `
    let register = undefined;
    let logger = undefined;

    try {
      const instrumentation = require('${instrumentationPath}');
      
      if (instrumentation?.register && typeof instrumentation.register === "function") {
        register = instrumentation.register;
      }
      
      if (instrumentation?.logger && typeof instrumentation.logger === "function") {
        logger = instrumentation.logger;
      }
    } catch {
      // Silently handle any require errors
    }

    export { register, logger };
    `
  });
}

function staticConfig(apibara) {
  const presetString = apibara.options.preset ?? "";
  const presetsStringified = JSON.stringify(apibara.options.presets ?? {});
  const runtimeConfigStringified = JSON.stringify(
    apibara.options.runtimeConfig ?? {}
  );
  return virtual({
    "#apibara-internal-virtual/static-config": `
    export const preset = ${presetString ? `"${presetString}"` : "undefined"};
    export const presets = ${presetsStringified};
    export const runtimeConfig = ${runtimeConfigStringified};
    export const userEnvRuntimeConfig = JSON.parse(process.env.${USER_ENV_APIBARA_RUNTIME_CONFIG} ?? "{}");
    `
  });
}

const runtimeDependencies = [
  "better-sqlite3",
  "@electric-sql/pglite",
  "pg",
  // https://socket.io/docs/v4/server-installation/#additional-packages
  "utf-8-validate",
  "bufferutil",
  // was giving unresolved import warnings from `node-fetch` library.
  "encoding"
];
function getRolldownConfig(apibara) {
  const extensions = [
    ".ts",
    ".mjs",
    ".js",
    ".json",
    ".node",
    ".tsx",
    ".jsx"
  ];
  const tsConfigExists = existsSync(
    join$1(apibara.options.rootDir, "tsconfig.json")
  );
  const rolldownConfig = defu(
    // biome-ignore lint/suspicious/noExplicitAny: apibara.options.rolldownConfig is typed
    apibara.options.rolldownConfig,
    {
      platform: "node",
      input: apibara.options.entry,
      output: {
        dir: join$1(apibara.options.outputDir || "./.apibara/build"),
        format: "esm",
        entryFileNames: "[name].mjs",
        chunkFileNames: "chunks/[name]-[hash].mjs",
        sourcemap: true
      },
      plugins: [],
      onwarn(warning, rolldownWarn) {
        if (!["CIRCULAR_DEPENDENCY", "EVAL", "THIS_IS_UNDEFINED"].includes(
          warning.code || ""
        ) && !warning.message.includes("Unsupported source map comment") && !warning.message.includes("@__PURE__") && !warning.message.includes("/*#__PURE__*/")) {
          rolldownWarn(warning);
        }
      },
      resolve: {
        extensions,
        preferBuiltins: !!apibara.options.node,
        mainFields: ["main"],
        exportConditions: apibara.options.exportConditions,
        tsconfigFilename: tsConfigExists ? "tsconfig.json" : void 0
      },
      treeshake: true,
      external: [...builtinModules, ...runtimeDependencies]
    }
  );
  rolldownConfig.plugins?.push(staticConfig(apibara));
  rolldownConfig.plugins?.push(instrumentation(apibara));
  rolldownConfig.plugins?.push(indexers(apibara));
  return rolldownConfig;
}

export { getRolldownConfig };
//# sourceMappingURL=index.mjs.map
