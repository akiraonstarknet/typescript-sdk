import * as _apibara_indexer_plugins from '@apibara/indexer/plugins';
import { DrizzleConfig, TablesRelationalConfig, ExtractTablesWithRelations } from 'drizzle-orm';
import { PgQueryResultHKT, PgTransaction, PgDatabase } from 'drizzle-orm/pg-core';
import { PGliteOptions, PGlite } from '@electric-sql/pglite';
import { MigrationConfig } from 'drizzle-orm/migrator';
import { NodePgDatabase as NodePgDatabase$1 } from 'drizzle-orm/node-postgres';
import { PgliteDatabase as PgliteDatabase$1 } from 'drizzle-orm/pglite';
import pg from 'pg';

/**
 * Union type of all possible drizzle database options
 */
type DrizzleOptions = PgliteDrizzleOptions | NodePgDrizzleOptions;
/**
 * Configuration options for Node-Postgres database connection
 */
type NodePgDrizzleOptions = {
    /**
     * Type of database to use -
     * - "pglite" - PGLite database
     * - "node-postgres" - Node-Postgres database
     * @default "pglite"
     */
    type: "node-postgres";
    /**
     * Connection string to use for the database
     * @default ""
     */
    connectionString?: string;
    /**
     * Pool configuration options for Node-Postgres
     */
    poolConfig?: pg.PoolConfig;
    /**
     * Additional drizzle configuration options
     */
    config?: Omit<DrizzleConfig, "schema">;
};
/**
 * Configuration options for PGLite database connection
 */
type PgliteDrizzleOptions = {
    /**
     * Type of database to use -
     * - "pglite" - PGLite database
     * - "node-postgres" - Node-Postgres database
     */
    type?: "pglite";
    /**
     * Connection string to use for the database
     * @default process.env["POSTGRES_CONNECTION_STRING"] ?? "memory://pglite"
     */
    connectionString?: string;
    /**
     * Pool configuration is not supported for PGLite
     */
    poolConfig?: never;
    /**
     * Additional drizzle configuration options with PGLite specific connection options
     */
    config?: Omit<DrizzleConfig, "schema"> & {
        connection?: (PGliteOptions & {
            dataDir?: string;
        }) | string;
    };
};
/**
 * Extended PGLite database type with client information
 */
type PgliteDatabase<TSchema extends Record<string, unknown>> = PgliteDatabase$1<TSchema> & {
    $client: PGlite;
};
/**
 * Extended Node-Postgres database type with client information
 */
type NodePgDatabase<TSchema extends Record<string, unknown>> = NodePgDatabase$1<TSchema> & {
    $client: pg.Pool;
};
type Database<TOptions extends DrizzleOptions, TSchema extends Record<string, unknown>> = TOptions extends PgliteDrizzleOptions ? PgliteDatabase<TSchema> : NodePgDatabase<TSchema>;
/**
 * Creates a new Drizzle database instance based on the provided options
 *
 * @important connectionString defaults to process.env["POSTGRES_CONNECTION_STRING"], if not set, it defaults to "memory://" (in-memory pglite)
 *
 * @param options - Configuration options for the database connection
 * @returns A configured Drizzle database instance
 * @throws {Error} If an invalid database type is specified
 */
declare function drizzle<TSchema extends Record<string, unknown>, TOptions extends DrizzleOptions>(options?: TOptions & {
    /**
     * Schema to use for the database
     * @default {}
     */
    schema?: TSchema;
}): Database<TOptions, TSchema>;
/**
 * Options for database migration
 */
type MigrateOptions = MigrationConfig;
/**
 * Performs database migration based on the provided configuration
 * @param db - The database instance to migrate
 * @param options - Migration configuration options
 *
 * @important This function runs migrations on the database instance provided to the `drizzleStorage` plugin.
 * It automatically detects the type of database and runs the appropriate migrate function
 * (PGLite or Node-Postgres).
 *
 * @example
 * ```ts
 * await migrate(db, { migrationsFolder: "./drizzle" });
 * ```
 */
declare function migrate<TSchema extends Record<string, unknown>>(db: PgliteDatabase<TSchema> | NodePgDatabase<TSchema>, options: MigrateOptions): Promise<void>;

interface IdColumnMap extends Record<string, string> {
    /**
     * Wildcard mapping for all tables.
     */
    "*": string;
}

type DrizzleStorage<TQueryResult extends PgQueryResultHKT, TFullSchema extends Record<string, unknown> = Record<string, never>, TSchema extends TablesRelationalConfig = ExtractTablesWithRelations<TFullSchema>> = {
    db: PgTransaction<TQueryResult, TFullSchema, TSchema>;
};
declare function useDrizzleStorage<TQueryResult extends PgQueryResultHKT, TFullSchema extends Record<string, unknown> = Record<string, never>, TSchema extends TablesRelationalConfig = ExtractTablesWithRelations<TFullSchema>>(_db?: PgDatabase<TQueryResult, TFullSchema, TSchema>): DrizzleStorage<TQueryResult, TFullSchema, TSchema>;
interface DrizzleStorageOptions<TQueryResult extends PgQueryResultHKT, TFullSchema extends Record<string, unknown> = Record<string, never>, TSchema extends TablesRelationalConfig = ExtractTablesWithRelations<TFullSchema>> {
    /**
     * The Drizzle database instance.
     */
    db: PgDatabase<TQueryResult, TFullSchema, TSchema>;
    /**
     * Whether to persist the indexer's state. Defaults to true.
     */
    persistState?: boolean;
    /**
     * The name of the indexer. Default value is 'default'.
     */
    indexerName?: string;
    /**
     * The schema of the database.
     */
    schema?: Record<string, unknown>;
    /**
     * The column to use as the primary identifier for each table.
     *
     * This identifier is used for tracking changes during reorgs and rollbacks.
     *
     * Can be specified in two ways:
     *
     * 1. As a single string that applies to all tables:
     * ```ts
     * idColumn: "_id" // Uses "_id" column for all tables
     * ```
     *
     * 2. As an object mapping table names to their ID columns:
     * ```ts
     * idColumn: {
     *   transfers: "transaction_hash",    // Use "transaction_hash" for transfers table
     *   blocks: "block_number",           // Use "block_number" for blocks table
     *   "*": "_id"                        // Use "_id" for all other tables | defaults to "id"
     * }
     * ```
     *
     * The special "*" key acts as a fallback for any tables not explicitly mapped.
     *
     * @default "id"
     * @type {string | Partial<IdColumnMap>}
     */
    idColumn?: string | Partial<IdColumnMap>;
    /**
     * The options for the database migration. When provided, the database will automatically run migrations before the indexer runs.
     */
    migrate?: MigrateOptions;
}
/**
 * Creates a plugin that uses Drizzle as the storage layer.
 *
 * Supports storing the indexer's state and provides a simple Key-Value store.
 * @param options.db - The Drizzle database instance.
 * @param options.persistState - Whether to persist the indexer's state. Defaults to true.
 * @param options.indexerName - The name of the indexer. Defaults value is 'default'.
 * @param options.schema - The schema of the database.
 * @param options.idColumn - The column to use as the id. Defaults to 'id'.
 * @param options.migrate - The options for the database migration. when provided, the database will automatically run migrations before the indexer runs.
 */
declare function drizzleStorage<TFilter, TBlock, TQueryResult extends PgQueryResultHKT, TFullSchema extends Record<string, unknown> = Record<string, never>, TSchema extends TablesRelationalConfig = ExtractTablesWithRelations<TFullSchema>>({ db, persistState: enablePersistence, indexerName: identifier, schema: _schema, idColumn, migrate: migrateOptions, }: DrizzleStorageOptions<TQueryResult, TFullSchema, TSchema>): _apibara_indexer_plugins.IndexerPlugin<TFilter, TBlock>;

export { type Database, type DrizzleOptions, type DrizzleStorage, type DrizzleStorageOptions, type IdColumnMap, type MigrateOptions, type NodePgDatabase, type NodePgDrizzleOptions, type PgliteDatabase, type PgliteDrizzleOptions, drizzle, drizzleStorage, migrate, useDrizzleStorage };
