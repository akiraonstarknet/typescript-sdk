import * as _apibara_indexer_plugins from '@apibara/indexer/plugins';
import { Db, ClientSession, Document, CollectionOptions, Collection, OptionalUnlessRequiredId, InsertOneOptions, InsertOneResult, BulkWriteOptions, InsertManyResult, Filter, UpdateFilter, UpdateOptions, UpdateResult, DeleteOptions, FindOptions, WithId, FindCursor, MongoClient, DbOptions } from 'mongodb';
import { Cursor } from '@apibara/protocol';

declare class MongoStorage {
    private db;
    private session;
    private endCursor?;
    constructor(db: Db, session: ClientSession, endCursor?: Cursor | undefined);
    collection<TSchema extends Document = Document>(name: string, options?: CollectionOptions): MongoCollection<TSchema>;
}
declare class MongoCollection<TSchema extends Document> {
    private session;
    private collection;
    private endCursor?;
    constructor(session: ClientSession, collection: Collection<TSchema>, endCursor?: Cursor | undefined);
    insertOne(doc: OptionalUnlessRequiredId<TSchema>, options?: InsertOneOptions): Promise<InsertOneResult<TSchema>>;
    insertMany(docs: ReadonlyArray<OptionalUnlessRequiredId<TSchema>>, options?: BulkWriteOptions): Promise<InsertManyResult<TSchema>>;
    updateOne(filter: Filter<TSchema>, update: UpdateFilter<TSchema>, options?: UpdateOptions): Promise<UpdateResult<TSchema>>;
    updateMany(filter: Filter<TSchema>, update: UpdateFilter<TSchema>, options?: UpdateOptions): Promise<UpdateResult<TSchema>>;
    deleteOne(filter: Filter<TSchema>, options?: DeleteOptions): Promise<UpdateResult<TSchema>>;
    deleteMany(filter?: Filter<TSchema>, options?: DeleteOptions): Promise<UpdateResult<TSchema>>;
    findOne(filter: Filter<TSchema>, options?: Omit<FindOptions, "timeoutMode">): Promise<WithId<TSchema> | null>;
    find(filter: Filter<TSchema>, options?: FindOptions): FindCursor<WithId<TSchema>>;
}

declare function useMongoStorage(): MongoStorage;
interface MongoStorageOptions {
    client: MongoClient;
    dbName: string;
    dbOptions?: DbOptions;
    collections: string[];
    persistState?: boolean;
    indexerName?: string;
}
/**
 * Creates a plugin that uses MongoDB as the storage layer.
 *
 * Supports storing the indexer's state and provides a simple Key-Value store.
 * @param options.client - The MongoDB client instance.
 * @param options.dbName - The name of the database.
 * @param options.dbOptions - The database options.
 * @param options.collections - The collections to use.
 * @param options.persistState - Whether to persist the indexer's state. Defaults to true.
 * @param options.indexerName - The name of the indexer. Defaults value is 'default'.
 */
declare function mongoStorage<TFilter, TBlock>({ client, dbName, dbOptions, collections, persistState: enablePersistence, indexerName: identifier, }: MongoStorageOptions): _apibara_indexer_plugins.IndexerPlugin<TFilter, TBlock>;

export { MongoCollection, MongoStorage, type MongoStorageOptions, mongoStorage, useMongoStorage };
