import { ConsolaInstance } from 'consola';
import { NestedHooks, Hookable } from 'hookable';
import { ConsolaReporter } from '@apibara/indexer/plugins';
import { C12InputConfig, WatchConfigOptions, ResolvedConfig, ConfigWatcher } from 'c12';
import { RolldownOptions, WatchOptions, InputOptions, OutputOptions } from 'rolldown';

type DeepPartial<T> = T extends Record<string, any> ? {
    [P in keyof T]?: DeepPartial<T[P]> | T[P];
} : T;

interface ApibaraHooks {
    "rolldown:before": (apibara: Apibara, rolldownConfig: RolldownOptions) => void;
    compiled: (apibara: Apibara) => void;
    "dev:restart": () => Promise<void>;
    "dev:reload": () => Promise<void>;
    "rolldown:reload": () => Promise<void>;
    restart: () => void;
    close: () => void;
}

type RegisterFn = () => Promise<void>;
type LoggerFactoryFn = ({ indexer, indexers, preset, }: LoggerFactoryArgs) => ConsolaReporter;
type LoggerFactoryArgs = {
    indexer: string;
    indexers: string[];
    preset?: string;
};
/**
 * Apibara Config type (apibara.config)
 */
interface ApibaraConfig<T extends Record<string, DeepPartial<Pick<ApibaraConfig<T, R>, "runtimeConfig">>> = Record<string, never>, R extends Record<string, unknown> = Record<string, never>> extends Partial<Omit<ApibaraOptions<T, R>, "preset" | "presets" | "dev">>, C12InputConfig<ApibaraConfig<T, R>> {
    runtimeConfig?: R;
    presets?: T;
    preset?: keyof T;
}
type ApibaraDynamicConfig = Pick<ApibaraConfig, "runtimeConfig" | "preset" | "presets">;
/**
 * Config loader options
 */
interface LoadConfigOptions {
    watch?: boolean;
    c12?: WatchConfigOptions;
}
interface ApibaraOptions<T extends Record<string, DeepPartial<Pick<ApibaraConfig<T, R>, "runtimeConfig">>> = Record<string, never>, R extends Record<string, unknown> = Record<string, never>> {
    _config: ApibaraConfig<T, R>;
    _c12: ResolvedConfig<ApibaraConfig<T, R>> | ConfigWatcher<ApibaraConfig<T, R>>;
    presets?: T;
    preset?: keyof T;
    debug: boolean;
    runtimeConfig: R;
    rootDir: string;
    buildDir: string;
    outputDir: string;
    indexersDir: string;
    disableLogs?: boolean;
    dev: boolean;
    watchOptions: WatchOptions["watch"];
    hooks: NestedHooks<ApibaraHooks>;
    rolldownConfig?: Partial<RolldownOptions>;
    /**
     * @deprecated Use rolldownConfig instead. This option will be removed in future releases.
     */
    rollupConfig?: unknown;
    sourceMap?: boolean;
    entry: string;
    node: boolean;
    exportConditions?: string[];
    typescript: {
        strict?: boolean;
        internalPaths?: boolean;
        generateRuntimeConfigTypes?: boolean;
    };
}

type IndexerDefinition = {
    name: string;
    indexer: string;
};
interface Apibara {
    options: ApibaraOptions;
    hooks: Hookable<ApibaraHooks>;
    indexers: IndexerDefinition[];
    logger: ConsolaInstance;
    close: () => Promise<void>;
    updateConfig: (config: ApibaraDynamicConfig) => void | Promise<void>;
}

type RolldownConfig = InputOptions & {
    output: OutputOptions;
};

type ApibaraRuntimeConfig = Record<string, unknown>;

export type { Apibara, ApibaraConfig, ApibaraDynamicConfig, ApibaraHooks, ApibaraOptions, ApibaraRuntimeConfig, DeepPartial, IndexerDefinition, LoadConfigOptions, LoggerFactoryArgs, LoggerFactoryFn, RegisterFn, RolldownConfig };
