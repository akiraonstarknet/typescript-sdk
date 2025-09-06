import consola from 'consola';
import { createHooks } from 'hookable';
import { watchConfig, loadConfig } from 'c12';
import { klona } from 'klona/full';
import { resolve, join, basename, isAbsolute, relative, dirname } from 'pathe';
import { ENV_INTERNAL_APIBARA_RUNTIME, ENV_INTERNAL_APIBARA_PRESET, ENV_INTERNAL_APIBARA_PRESETS, USER_ENV_APIBARA_RUNTIME_CONFIG, ENV_INTERNAL_APIBARA_PROCESSED_RUNTIME, getProcessedRuntimeConfig } from 'apibara/common';
import fse from 'fs-extra';
import { getRolldownConfig } from 'apibara/rolldown';
import { colors } from 'consola/utils';
import { watch } from 'chokidar';
import defu from 'defu';
import { debounce } from 'perfect-debounce';
import * as rolldown from 'rolldown';
import fsp from 'node:fs/promises';
import { generateTypes, resolveSchema } from 'untyped';

const ApibaraDefaults = {
  rootDir: ".",
  indexersDir: "indexers",
  runtimeConfig: {},
  hooks: {},
  buildDir: ".apibara",
  typescript: {
    strict: false,
    generateRuntimeConfigTypes: true,
    internalPaths: false
  },
  node: true,
  exportConditions: ["node"]
};

async function resolvePathOptions(options) {
  options.rootDir = resolve(options.rootDir || ".");
  for (const key of ["buildDir"]) {
    options[key] = resolve(options.rootDir, options[key]);
  }
  if (!options.outputDir) {
    options.outputDir = resolve(options.rootDir, ".apibara/build");
  }
}

function runtimeConfigResolver(options) {
  try {
    const { runtimeConfig, preset, presets } = options;
    if (runtimeConfig) {
      process.env[ENV_INTERNAL_APIBARA_RUNTIME] = JSON.stringify(runtimeConfig);
    }
    if (preset) {
      process.env[ENV_INTERNAL_APIBARA_PRESET] = preset;
    }
    if (presets) {
      process.env[ENV_INTERNAL_APIBARA_PRESETS] = JSON.stringify(presets);
    }
    const userEnvRuntimeConfig = JSON.parse(
      process.env[USER_ENV_APIBARA_RUNTIME_CONFIG] ?? "{}"
    );
    process.env[ENV_INTERNAL_APIBARA_PROCESSED_RUNTIME] = JSON.stringify(
      getProcessedRuntimeConfig({
        preset,
        presets,
        runtimeConfig,
        userEnvRuntimeConfig
      })
    );
  } catch (error) {
    throw new Error("Failed to process & set runtime environment variables", {
      cause: error
    });
  }
}

const configResolvers = [resolvePathOptions, runtimeConfigResolver];
async function loadOptions(configOverrides = {}, opts = {}, dev = false) {
  const options = await _loadUserConfig(configOverrides, opts, dev);
  try {
    JSON.stringify(options.runtimeConfig);
  } catch (error) {
    throw new Error(
      "Non-serializable runtimeConfig. Please ensure the config is serializable.",
      { cause: error }
    );
  }
  for (const resolver of configResolvers) {
    await resolver(options);
  }
  return options;
}
async function _loadUserConfig(configOverrides = {}, opts = {}, dev = false) {
  configOverrides = klona(configOverrides);
  const loadedConfig = await (opts.watch ? watchConfig : loadConfig)({
    name: "apibara",
    dotenv: dev,
    cwd: configOverrides.rootDir,
    overrides: {
      ...configOverrides
    },
    defaults: { ...ApibaraDefaults },
    ...opts.c12
  });
  const options = klona(loadedConfig.config);
  options._config = configOverrides;
  options._c12 = loadedConfig;
  if (dev) {
    options.dev = dev;
  }
  return options;
}

async function updateApibaraConfig(apibara, newConfig) {
  runtimeConfigResolver(newConfig);
  apibara.logger.success("Apibara config hot reloaded!");
  await apibara.hooks.callHook("dev:reload");
}

const INDEXER_EXTENSIONS = [".indexer.ts", ".indexer.js", ".indexer.mjs"];
async function scanIndexers(apibara) {
  apibara.logger.debug("Scanning indexers");
  const indexersDir = join(
    apibara.options.rootDir,
    apibara.options.indexersDir
  );
  if (!fse.existsSync(indexersDir)) {
    throw new Error(`Indexers directory not found: ${indexersDir}`);
  }
  apibara.indexers = [];
  for (const file of fse.readdirSync(indexersDir)) {
    const indexerName = indexerNameFromFile(file);
    if (indexerName) {
      apibara.indexers.push({
        name: indexerName,
        indexer: join(indexersDir, file)
      });
    }
  }
  apibara.logger.debug(`Found ${apibara.indexers.length} indexers`);
}
function indexerNameFromFile(file) {
  for (const extension of INDEXER_EXTENSIONS) {
    if (file.endsWith(extension)) {
      return basename(file, extension);
    }
  }
}

async function createApibara(config = {}, opts = {}, dev = false) {
  const options = await loadOptions(config, opts, dev);
  process.env.NODE_OPTIONS = process.env.NODE_OPTIONS ? `${process.env.NODE_OPTIONS} --enable-source-maps` : "--enable-source-maps";
  const apibara = {
    options,
    indexers: [],
    hooks: createHooks(),
    close: () => apibara.hooks.callHook("close"),
    logger: consola.withTag("apibara"),
    async updateConfig(newConfig) {
      updateApibaraConfig(apibara, newConfig);
    }
  };
  apibara.hooks.addHooks(apibara.options.hooks);
  await scanIndexers(apibara);
  return apibara;
}

function formatRolldownError(_error) {
  try {
    const logs = [_error.toString()];
    const errors = _error?.errors || [_error];
    for (const error of errors) {
      const id = error.path || error.id || _error.id;
      let path = isAbsolute(id) ? relative(process.cwd(), id) : id;
      const location = error.loc;
      if (location) {
        path += `:${location.line}:${location.column}`;
      }
      const text = error.frame;
      logs.push(
        `Rolldown error while processing \`${path}\`` + text ? "\n\n" + text : ""
      );
    }
    return logs.join("\n");
  } catch {
    return _error?.toString();
  }
}

async function watchDev(apibara, rolldownConfig) {
  let rolldownWatcher;
  async function load() {
    apibara.logger.start("Setting up a dev server");
    if (rolldownWatcher) {
      await rolldownWatcher.close();
    }
    rolldownWatcher = startRolldownWatcher(apibara, rolldownConfig);
  }
  const reload = debounce(async () => await load());
  const watchPatterns = getWatchPatterns(apibara);
  const watchReloadEvents = /* @__PURE__ */ new Set(["add", "addDir", "unlink", "unlinkDir"]);
  const reloadWatcher = watch(watchPatterns, { ignoreInitial: true }).on(
    "all",
    async (event) => {
      if (watchReloadEvents.has(event)) {
        await reload();
      }
    }
  );
  apibara.hooks.hook("close", () => {
    rolldownWatcher.close();
    reloadWatcher.close();
  });
  apibara.hooks.hook("rolldown:reload", async () => await reload());
  await load();
}
function startRolldownWatcher(apibara, rolldownConfig) {
  const ignorePatterns = getIgnorePatterns();
  const watcher = rolldown.watch(
    defu(rolldownConfig, {
      watch: {
        exclude: ignorePatterns,
        ...apibara.options.watchOptions ?? {}
      }
    })
  );
  let start;
  watcher.on("event", async (event) => {
    switch (event.code) {
      case "START": {
        await apibara.hooks.callHook("dev:restart");
        return;
      }
      case "BUNDLE_START": {
        start = Date.now();
        return;
      }
      case "END": {
        apibara.hooks.callHook("compiled", apibara);
        apibara.logger.success(
          "Indexers built",
          start ? `in ${Date.now() - start} ms` : ""
        );
        await apibara.hooks.callHook("dev:reload");
        return;
      }
      case "ERROR": {
        apibara.logger.error(formatRolldownError(event.error));
      }
    }
  });
  return watcher;
}
const getWatchPatterns = (apibara) => [
  join(apibara.options.rootDir, "indexers")
];
const getIgnorePatterns = (apibara) => [
  "**/.apibara/**",
  "**/.git/**",
  "**/.DS_Store",
  "**/node_modules/**",
  "**/dist/**",
  "**/.turbo/**",
  // changes to apibara.config is handled by c12 itself so we dont need rolldown to handle this
  "**/apibara.config?(.ts|.js|.mjs)"
];

async function buildProduction(apibara, rolldownConfig) {
  if (!apibara.options.disableLogs) {
    apibara.logger.start(
      `Building ${colors.cyan(apibara.indexers.length)} indexers`
    );
  }
  const startTime = Date.now();
  try {
    const bundle = await rolldown.rolldown(rolldownConfig);
    if (Array.isArray(rolldownConfig.output)) {
      for (const outputOptions of rolldownConfig.output) {
        await bundle.write(outputOptions);
      }
    } else if (rolldownConfig.output) {
      await bundle.write(rolldownConfig.output);
    } else {
      throw new Error("No output options specified in Rolldown config");
    }
    await bundle.close();
    const endTime = Date.now();
    const duration = endTime - startTime;
    if (!apibara.options.disableLogs) {
      apibara.logger.success(`Build succeeded in ${duration}ms`);
      apibara.logger.info(
        `You can start the indexers with ${colors.cyan("apibara start")}`
      );
    }
  } catch (error) {
    apibara.logger.error("Build failed", error);
    throw error;
  }
}

async function build(apibara) {
  const rolldownConfig = getRolldownConfig(apibara);
  await apibara.hooks.callHook("rolldown:before", apibara, rolldownConfig);
  if (apibara.options.rollupConfig) {
    apibara.logger.error(
      `
${colors.cyan("apibara.config:")} rollupConfig is deprecated. Use rolldownConfig instead`
    );
    process.exit(1);
  }
  return apibara.options.dev ? await watchDev(apibara, rolldownConfig) : await buildProduction(apibara, rolldownConfig);
}

function prettyPath(path, highlight = true) {
  const rel = relative(process.cwd(), path);
  return highlight ? colors.cyan(rel) : rel;
}

async function prepare(apibara) {
  await prepareDir(apibara.options.buildDir);
  await prepareDir(apibara.options.outputDir);
  if (!apibara.options.disableLogs) {
    apibara.logger.success(
      `Output directory ${prettyPath(apibara.options.outputDir)} cleaned`
    );
  }
}
async function prepareDir(dir) {
  await fsp.mkdir(dir, { recursive: true });
  await fse.emptyDir(dir);
}

async function writeTypes(apibara) {
  const isTypeScript = apibara.options._c12.configFile?.endsWith(".ts");
  if (!isTypeScript) {
    return;
  }
  const typesDir = resolve(apibara.options.buildDir, "types");
  const config = [
    "// Generated by apibara",
    `
declare module "apibara/types" {`,
    apibara.options.typescript.generateRuntimeConfigTypes ? generateTypes(
      await resolveSchema(
        Object.fromEntries(
          Object.entries(apibara.options.runtimeConfig)
        )
      ),
      {
        interfaceName: "ApibaraRuntimeConfig",
        addExport: false,
        addDefaults: false,
        allowExtraKeys: false,
        indentation: 2
      }
    ) : "",
    "}",
    // Makes this a module for augmentation purposes
    "export type {};"
  ];
  const buildFiles = [];
  buildFiles.push({
    path: join(typesDir, "apibara-config.d.ts"),
    contents: config.join("\n")
  });
  await Promise.all(
    buildFiles.map(async (file) => {
      const _file = resolve(apibara.options.buildDir, file.path);
      await fsp.mkdir(dirname(_file), { recursive: true });
      await fsp.writeFile(_file, file.contents);
    })
  );
  if (!apibara.options.disableLogs) {
    apibara.logger.success(`Types written to ${prettyPath(typesDir)}`);
  }
}

export { build, createApibara, prepare, writeTypes };
//# sourceMappingURL=index.mjs.map
