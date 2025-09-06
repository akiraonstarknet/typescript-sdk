import * as _apibara_indexer_plugins from '@apibara/indexer/plugins';
import { Database } from 'better-sqlite3';
import { Cursor, DataFinality } from '@apibara/protocol';

type SerializeFn = <T>(value: T) => string;
type DeserializeFn = <T>(value: string) => T;

declare class KeyValueStore {
    private readonly db;
    private readonly endCursor;
    private readonly finality;
    private readonly serialize;
    private readonly deserialize;
    private readonly indexerId;
    constructor(db: Database, endCursor: Cursor, finality: DataFinality, serialize: SerializeFn, deserialize: DeserializeFn, indexerId: string);
    get<T>(key: string): T | undefined;
    put<T>(key: string, value: T): void;
    del(key: string): void;
}

declare function useSqliteKeyValueStore(): KeyValueStore;
type SqliteStorageOptions = {
    database: Database;
    keyValueStore?: boolean;
    persistState?: boolean;
    indexerName?: string;
    serialize?: SerializeFn;
    deserialize?: DeserializeFn;
};
/**
 * Creates a plugin that uses SQLite as the storage layer.
 *
 * Supports storing the indexer's state and provides a simple Key-Value store.
 * @param options.database - The SQLite database instance.
 * @param options.persistState - Whether to persist the indexer's state. Defaults to true.
 * @param options.keyValueStore - Whether to enable the Key-Value store. Defaults to true.
 * @param options.serialize - A function to serialize the value to the KV.
 * @param options.deserialize - A function to deserialize the value from the KV.
 * @param options.indexerName - The name of the indexer. Defaults value is 'default'.
 */
declare function sqliteStorage<TFilter, TBlock>({ database, persistState: enablePersistState, keyValueStore: enableKeyValueStore, serialize: serializeFn, deserialize: deserializeFn, indexerName: identifier, }: SqliteStorageOptions): _apibara_indexer_plugins.IndexerPlugin<TFilter, TBlock>;

export { KeyValueStore, type SqliteStorageOptions, sqliteStorage, useSqliteKeyValueStore };
