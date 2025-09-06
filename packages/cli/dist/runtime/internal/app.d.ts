export declare const availableIndexers: any;
export declare function createIndexer({ indexerName, processedRuntimeConfig, preset, }: {
    indexerName: string;
    /**
     * Final processed runtime config to be used by the indexer
     */
    processedRuntimeConfig: Record<string, unknown>;
    /**
     * Preset name which was used to generate the runtime config
     */
    preset?: string;
}): {
    indexer: import("@apibara/indexer").Indexer<unknown, unknown>;
    logger: any;
} | undefined;
