'use strict';

const indexer = require('@apibara/indexer');
const plugins = require('@apibara/indexer/plugins');
const internal = require('@apibara/indexer/internal');
const plugins$1 = require('@apibara/indexer/internal/plugins');
const protocol = require('@apibara/protocol');

async function invalidate(db, session, cursor, collections) {
  const orderKeyValue = Number(cursor.orderKey);
  for (const collection of collections) {
    await db.collection(collection).deleteMany(
      {
        "_cursor.from": {
          $gt: orderKeyValue
        }
      },
      { session }
    );
    await db.collection(collection).updateMany(
      { "_cursor.to": { $gt: orderKeyValue } },
      {
        $set: {
          "_cursor.to": null
        }
      },
      { session }
    );
  }
}
async function finalize(db, session, cursor, collections) {
  const orderKeyValue = Number(cursor.orderKey);
  for (const collection of collections) {
    await db.collection(collection).deleteMany(
      {
        "_cursor.to": { $lte: orderKeyValue }
      },
      { session }
    );
  }
}
async function cleanupStorage(db, session, collections) {
  for (const collection of collections) {
    try {
      await db.collection(collection).deleteMany({}, { session });
    } catch (error) {
      throw new Error(`Failed to clean up collection ${collection}`, {
        cause: error
      });
    }
  }
}

class MongoStorageError extends Error {
  constructor(message, options) {
    super(message, options);
    this.name = "MongoStorageError";
  }
}
async function withTransaction(client, cb) {
  return await client.withSession(async (session) => {
    return await session.withTransaction(
      async (session2) => {
        return await cb(session2);
      },
      {
        retryWrites: false
      }
    );
  });
}

const checkpointCollectionName = "checkpoints";
const filterCollectionName = "filters";
async function initializePersistentState(db, session) {
  const checkpoint = db.collection(checkpointCollectionName);
  const filter = db.collection(filterCollectionName);
  await checkpoint.createIndex({ id: 1 }, { session });
  await filter.createIndex({ id: 1, fromBlock: 1 }, { session });
}
async function persistState(props) {
  const { db, session, endCursor, filter, indexerId } = props;
  if (endCursor) {
    await db.collection(checkpointCollectionName).updateOne(
      { id: indexerId },
      {
        $set: {
          orderKey: Number(endCursor.orderKey),
          uniqueKey: endCursor.uniqueKey ? endCursor.uniqueKey : null
        }
      },
      { upsert: true, session }
    );
    if (filter) {
      await db.collection(filterCollectionName).updateMany(
        { id: indexerId, toBlock: null },
        { $set: { toBlock: Number(endCursor.orderKey) } },
        { session }
      );
      await db.collection(filterCollectionName).updateOne(
        {
          id: indexerId,
          fromBlock: Number(endCursor.orderKey)
        },
        {
          $set: {
            filter,
            fromBlock: Number(endCursor.orderKey),
            toBlock: null
          }
        },
        { upsert: true, session }
      );
    }
  }
}
async function getState(props) {
  const { db, session, indexerId } = props;
  let cursor;
  let filter;
  const checkpointRow = await db.collection(checkpointCollectionName).findOne({ id: indexerId }, { session });
  if (checkpointRow) {
    cursor = protocol.normalizeCursor({
      orderKey: BigInt(checkpointRow.orderKey),
      uniqueKey: checkpointRow.uniqueKey
    });
  }
  const filterRow = await db.collection(filterCollectionName).findOne(
    {
      id: indexerId,
      toBlock: null
    },
    { session }
  );
  if (filterRow) {
    filter = filterRow.filter;
  }
  return { cursor, filter };
}
async function invalidateState(props) {
  const { db, session, cursor, indexerId } = props;
  await db.collection(filterCollectionName).deleteMany(
    { id: indexerId, fromBlock: { $gt: Number(cursor.orderKey) } },
    { session }
  );
  await db.collection(filterCollectionName).updateMany(
    { id: indexerId, toBlock: { $gt: Number(cursor.orderKey) } },
    { $set: { toBlock: null } },
    { session }
  );
}
async function finalizeState(props) {
  const { db, session, cursor, indexerId } = props;
  await db.collection(filterCollectionName).deleteMany(
    {
      id: indexerId,
      toBlock: { $lte: Number(cursor.orderKey) }
    },
    { session }
  );
}
async function resetPersistence(props) {
  const { db, session, indexerId } = props;
  try {
    await db.collection(checkpointCollectionName).deleteMany({ id: indexerId }, { session });
    await db.collection(filterCollectionName).deleteMany({ id: indexerId }, { session });
  } catch (error) {
    throw new MongoStorageError("Failed to reset persistence state", {
      cause: error
    });
  }
}

class MongoStorage {
  constructor(db, session, endCursor) {
    this.db = db;
    this.session = session;
    this.endCursor = endCursor;
  }
  collection(name, options) {
    const collection = this.db.collection(name, options);
    return new MongoCollection(
      this.session,
      collection,
      this.endCursor
    );
  }
}
class MongoCollection {
  constructor(session, collection, endCursor) {
    this.session = session;
    this.collection = collection;
    this.endCursor = endCursor;
  }
  async insertOne(doc, options) {
    return await this.collection.insertOne(
      {
        ...doc,
        _cursor: {
          from: Number(this.endCursor?.orderKey),
          to: null
        }
      },
      { ...options, session: this.session }
    );
  }
  async insertMany(docs, options) {
    return await this.collection.insertMany(
      docs.map((doc) => ({
        ...doc,
        _cursor: {
          from: Number(this.endCursor?.orderKey),
          to: null
        }
      })),
      { ...options, session: this.session }
    );
  }
  async updateOne(filter, update, options) {
    const oldDoc = await this.collection.findOneAndUpdate(
      {
        ...filter,
        "_cursor.to": null
      },
      {
        ...update,
        $set: {
          ...update.$set,
          "_cursor.from": Number(this.endCursor?.orderKey)
        }
      },
      {
        ...options,
        session: this.session,
        returnDocument: "before"
      }
    );
    if (oldDoc) {
      const { _id, ...doc } = oldDoc;
      await this.collection.insertOne(
        {
          ...doc,
          _cursor: {
            ...oldDoc._cursor,
            to: Number(this.endCursor?.orderKey)
          }
        },
        { session: this.session }
      );
    }
    return {
      acknowledged: true,
      modifiedCount: oldDoc ? 1 : 0,
      upsertedId: null,
      upsertedCount: 0,
      matchedCount: oldDoc ? 1 : 0
    };
  }
  async updateMany(filter, update, options) {
    const oldDocs = await this.collection.find(
      {
        ...filter,
        "_cursor.to": null
      },
      { session: this.session }
    ).toArray();
    const updateResult = await this.collection.updateMany(
      {
        ...filter,
        "_cursor.to": null
      },
      {
        ...update,
        $set: {
          ...update.$set,
          "_cursor.from": Number(this.endCursor?.orderKey)
        }
      },
      { ...options, session: this.session }
    );
    const oldDocsWithUpdatedCursor = oldDocs.map(({ _id, ...doc }) => ({
      ...doc,
      _cursor: {
        ...doc._cursor,
        to: Number(this.endCursor?.orderKey)
      }
    }));
    if (oldDocsWithUpdatedCursor.length > 0) {
      await this.collection.insertMany(
        oldDocsWithUpdatedCursor,
        { session: this.session }
      );
    }
    return updateResult;
  }
  async deleteOne(filter, options) {
    return await this.collection.updateOne(
      {
        ...filter,
        "_cursor.to": null
      },
      {
        $set: {
          "_cursor.to": Number(this.endCursor?.orderKey)
        }
      },
      { ...options, session: this.session }
    );
  }
  async deleteMany(filter, options) {
    return await this.collection.updateMany(
      {
        ...filter ?? {},
        "_cursor.to": null
      },
      {
        $set: {
          "_cursor.to": Number(this.endCursor?.orderKey)
        }
      },
      { ...options, session: this.session }
    );
  }
  async findOne(filter, options) {
    return await this.collection.findOne(
      {
        ...filter,
        "_cursor.to": null
      },
      { ...options, session: this.session }
    );
  }
  find(filter, options) {
    return this.collection.find(
      {
        ...filter,
        "_cursor.to": null
      },
      { ...options, session: this.session }
    );
  }
}

const MONGO_PROPERTY = "_mongo";
function useMongoStorage() {
  const context = indexer.useIndexerContext();
  if (!context[MONGO_PROPERTY]) {
    throw new MongoStorageError(
      "mongo storage is not available. Did you register the plugin?"
    );
  }
  return context[MONGO_PROPERTY];
}
function mongoStorage({
  client,
  dbName,
  dbOptions,
  collections,
  persistState: enablePersistence = true,
  indexerName: identifier = "default"
}) {
  return plugins.defineIndexerPlugin((indexer) => {
    let indexerId = "";
    const alwaysReindex = process.env["APIBARA_ALWAYS_REINDEX"] === "true";
    let prevFinality;
    indexer.hooks.hook("run:before", async () => {
      const { indexerName } = plugins$1.useInternalContext();
      indexerId = internal.generateIndexerId(indexerName, identifier);
      const logger = plugins.useLogger();
      await withTransaction(client, async (session) => {
        const db = client.db(dbName, dbOptions);
        if (enablePersistence) {
          await initializePersistentState(db, session);
        }
        if (alwaysReindex) {
          logger.warn(
            `Reindexing: Deleting all data from collections - ${collections.join(", ")}`
          );
          await cleanupStorage(db, session, collections);
          if (enablePersistence) {
            await resetPersistence({ db, session, indexerId });
          }
          logger.success("All data has been cleaned up for reindexing");
        }
      });
    });
    indexer.hooks.hook("connect:before", async ({ request }) => {
      if (!enablePersistence) {
        return;
      }
      await withTransaction(client, async (session) => {
        const db = client.db(dbName, dbOptions);
        const { cursor, filter } = await getState({
          db,
          session,
          indexerId
        });
        if (cursor) {
          request.startingCursor = cursor;
        }
        if (filter) {
          request.filter[1] = filter;
        }
      });
    });
    indexer.hooks.hook("connect:after", async ({ request }) => {
      const cursor = request.startingCursor;
      if (!cursor) {
        return;
      }
      await withTransaction(client, async (session) => {
        const db = client.db(dbName, dbOptions);
        await invalidate(db, session, cursor, collections);
        if (enablePersistence) {
          await invalidateState({ db, session, cursor, indexerId });
        }
      });
    });
    indexer.hooks.hook("connect:factory", async ({ request, endCursor }) => {
      if (!enablePersistence) {
        return;
      }
      await withTransaction(client, async (session) => {
        const db = client.db(dbName, dbOptions);
        if (endCursor && request.filter[1]) {
          await persistState({
            db,
            endCursor,
            session,
            filter: request.filter[1],
            indexerId
          });
        }
      });
    });
    indexer.hooks.hook("message:finalize", async ({ message }) => {
      const { cursor } = message;
      if (!cursor) {
        throw new MongoStorageError("finalized cursor is undefined");
      }
      await withTransaction(client, async (session) => {
        const db = client.db(dbName, dbOptions);
        await finalize(db, session, cursor, collections);
        if (enablePersistence) {
          await finalizeState({ db, session, cursor, indexerId });
        }
      });
    });
    indexer.hooks.hook("message:invalidate", async ({ message }) => {
      const { cursor } = message;
      if (!cursor) {
        throw new MongoStorageError("invalidate cursor is undefined");
      }
      await withTransaction(client, async (session) => {
        const db = client.db(dbName, dbOptions);
        await invalidate(db, session, cursor, collections);
        if (enablePersistence) {
          await invalidateState({ db, session, cursor, indexerId });
        }
      });
    });
    indexer.hooks.hook("handler:middleware", async ({ use }) => {
      use(async (context, next) => {
        const { endCursor, finality, cursor } = context;
        if (!endCursor) {
          throw new MongoStorageError("end cursor is undefined");
        }
        await withTransaction(client, async (session) => {
          const db = client.db(dbName, dbOptions);
          context[MONGO_PROPERTY] = new MongoStorage(db, session, endCursor);
          if (prevFinality === "pending") {
            await invalidate(db, session, cursor, collections);
          }
          await next();
          delete context[MONGO_PROPERTY];
          if (enablePersistence && finality !== "pending") {
            await persistState({
              db,
              endCursor,
              session,
              indexerId
            });
          }
          prevFinality = finality;
        });
      });
    });
  });
}

exports.MongoCollection = MongoCollection;
exports.MongoStorage = MongoStorage;
exports.mongoStorage = mongoStorage;
exports.useMongoStorage = useMongoStorage;
//# sourceMappingURL=index.cjs.map
