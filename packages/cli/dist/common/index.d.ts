import { ArgsDef, ParsedArgs, CommandDef } from 'citty';

declare const ENV_INTERNAL_APIBARA_RUNTIME = "_APIBARA_RUNTIME";
declare const ENV_INTERNAL_APIBARA_PRESET = "_APIBARA_PRESET";
declare const ENV_INTERNAL_APIBARA_PRESETS = "_APIBARA_PRESETS";
declare const ENV_INTERNAL_APIBARA_PROCESSED_RUNTIME = "_APIBARA_PROCESSED_RUNTIME";
declare const USER_ENV_APIBARA_RUNTIME_CONFIG = "APIBARA_RUNTIME_CONFIG";

declare function getRuntimeDataFromEnv(): {
    userEnvRuntimeConfig: Record<string, unknown> | undefined;
    processedRuntimeConfig: Record<string, unknown>;
    preset: string | undefined;
    presets: Record<string, unknown> | undefined;
    runtimeConfig: Record<string, unknown> | undefined;
};
/**
 * Get the merged runtime config from the user env overrided runtime config, presets and defaults.
 * Priority (Highest to lowest):
 * 1. User env overrided runtime config
 * 2. Preset
 * 3. Defaults
 */
declare function getProcessedRuntimeConfig({ preset, presets, runtimeConfig, userEnvRuntimeConfig, }: {
    preset?: string;
    presets?: Record<string, unknown>;
    runtimeConfig?: Record<string, unknown>;
    userEnvRuntimeConfig?: Record<string, unknown>;
}): Record<string, unknown>;

declare const commonArgs: ArgsDef;
declare const checkForUnknownArgs: <T extends ArgsDef = ArgsDef>(args: ParsedArgs<T>, cmd: CommandDef<T>) => Promise<void>;

export { ENV_INTERNAL_APIBARA_PRESET, ENV_INTERNAL_APIBARA_PRESETS, ENV_INTERNAL_APIBARA_PROCESSED_RUNTIME, ENV_INTERNAL_APIBARA_RUNTIME, USER_ENV_APIBARA_RUNTIME_CONFIG, checkForUnknownArgs, commonArgs, getProcessedRuntimeConfig, getRuntimeDataFromEnv };
