import defu from 'defu';
import { renderUsage } from 'citty';
import consola from 'consola';

const ENV_INTERNAL_APIBARA_RUNTIME = "_APIBARA_RUNTIME";
const ENV_INTERNAL_APIBARA_PRESET = "_APIBARA_PRESET";
const ENV_INTERNAL_APIBARA_PRESETS = "_APIBARA_PRESETS";
const ENV_INTERNAL_APIBARA_PROCESSED_RUNTIME = "_APIBARA_PROCESSED_RUNTIME";
const USER_ENV_APIBARA_RUNTIME_CONFIG = "APIBARA_RUNTIME_CONFIG";

function getRuntimeDataFromEnv() {
  const processedRuntimeConfig = JSON.parse(
    process.env[ENV_INTERNAL_APIBARA_PROCESSED_RUNTIME] ?? "{}"
  );
  const preset = process.env[ENV_INTERNAL_APIBARA_PRESET];
  const presets = JSON.parse(
    process.env[ENV_INTERNAL_APIBARA_PRESETS] ?? "{}"
  );
  const runtimeConfig = JSON.parse(
    process.env[ENV_INTERNAL_APIBARA_RUNTIME] ?? "{}"
  );
  const userEnvRuntimeConfig = JSON.parse(
    process.env[USER_ENV_APIBARA_RUNTIME_CONFIG] ?? "{}"
  );
  return {
    userEnvRuntimeConfig,
    processedRuntimeConfig,
    preset,
    presets,
    runtimeConfig
  };
}
function getProcessedRuntimeConfig({
  preset,
  presets,
  runtimeConfig,
  userEnvRuntimeConfig
}) {
  let _runtimeConfig = { ...runtimeConfig };
  if (preset) {
    if (presets === void 0) {
      throw new Error(
        `Specified preset "${preset}" but no presets were defined`
      );
    }
    if (presets[preset] === void 0) {
      throw new Error(`Specified preset "${preset}" but it was not defined`);
    }
    const presetValue = presets[preset];
    _runtimeConfig = defu(presetValue.runtimeConfig, _runtimeConfig);
  }
  if (userEnvRuntimeConfig) {
    try {
      _runtimeConfig = defu(userEnvRuntimeConfig, _runtimeConfig);
    } catch (error) {
      throw new Error(
        "Failed to parse runtime config from process.env.APIBARA_RUNTIME_CONFIG. Please ensure it is a valid JSON string.",
        { cause: error }
      );
    }
  }
  return _runtimeConfig;
}

const commonArgs = {
  dir: {
    type: "string",
    description: "project root directory"
  }
};
const checkForUnknownArgs = async (args, cmd) => {
  const definedArgs = [];
  if (cmd.args) {
    for (const [argName, argDef] of Object.entries(cmd.args)) {
      definedArgs.push(argName);
      if (argDef.alias) {
        definedArgs.push(argDef.alias);
      }
    }
  }
  const providedArgs = Object.keys(args).filter((arg) => arg !== "_");
  const wrongArgs = providedArgs.filter((arg) => !definedArgs.includes(arg));
  if (wrongArgs.length > 0) {
    consola.error(`Unknown arguments: ${wrongArgs.join(", ")}`);
    consola.info(await renderUsage(cmd));
    process.exit(1);
  }
};

export { ENV_INTERNAL_APIBARA_PRESET, ENV_INTERNAL_APIBARA_PRESETS, ENV_INTERNAL_APIBARA_PROCESSED_RUNTIME, ENV_INTERNAL_APIBARA_RUNTIME, USER_ENV_APIBARA_RUNTIME_CONFIG, checkForUnknownArgs, commonArgs, getProcessedRuntimeConfig, getRuntimeDataFromEnv };
//# sourceMappingURL=index.mjs.map
