'use strict';

const indexer = require('@apibara/indexer');
const plugins = require('@apibara/indexer/plugins');
const internal = require('@apibara/indexer/internal');
const plugins$1 = require('@apibara/indexer/internal/plugins');
const protocol = require('@apibara/protocol');

class SqliteStorageError extends Error {
  constructor(message, options) {
    super(message, options);
    this.name = "SqliteStorageError";
  }
}
async function withTransaction(db, cb) {
  db.prepare("BEGIN TRANSACTION").run();
  try {
    await cb(db);
  } catch (error) {
    db.prepare("ROLLBACK TRANSACTION").run();
    throw error;
  }
  db.prepare("COMMIT TRANSACTION").run();
}
function assertInTransaction(db) {
  if (!db.inTransaction) {
    throw new SqliteStorageError("Database is not in transaction");
  }
}
function deserialize(str) {
  return JSON.parse(
    str,
    (_, value) => typeof value === "string" && value.match(/^\d+n$/) ? BigInt(value.slice(0, -1)) : value
  );
}
function serialize(obj) {
  return JSON.stringify(
    obj,
    (_, value) => typeof value === "bigint" ? `${value.toString()}n` : value,
    "	"
  );
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function initializeKeyValueStore(db) {
  assertInTransaction(db);
  db.exec(statements$1.createTable);
}
class KeyValueStore {
  constructor(db, endCursor, finality, serialize, deserialize, indexerId) {
    this.db = db;
    this.endCursor = endCursor;
    this.finality = finality;
    this.serialize = serialize;
    this.deserialize = deserialize;
    this.indexerId = indexerId;
    assertInTransaction(db);
  }
  get(key) {
    const row = this.db.prepare(statements$1.get).get(key, this.indexerId);
    return row ? this.deserialize(row.v) : void 0;
  }
  put(key, value) {
    this.db.prepare(statements$1.updateToBlock).run(Number(this.endCursor.orderKey), key, this.indexerId);
    this.db.prepare(
      statements$1.insertIntoKvs
    ).run(
      Number(this.endCursor.orderKey),
      key,
      this.serialize(value),
      this.indexerId
    );
  }
  del(key) {
    this.db.prepare(statements$1.del).run(Number(this.endCursor.orderKey), key, this.indexerId);
  }
}
function finalizeKV(db, cursor, indexerId) {
  assertInTransaction(db);
  db.prepare(statements$1.finalize).run(
    Number(cursor.orderKey),
    indexerId
  );
}
function invalidateKV(db, cursor, indexerId) {
  assertInTransaction(db);
  db.prepare(statements$1.invalidateDelete).run(
    Number(cursor.orderKey),
    indexerId
  );
  db.prepare(statements$1.invalidateUpdate).run(
    Number(cursor.orderKey),
    indexerId
  );
}
function cleanupKV(db, indexerId) {
  assertInTransaction(db);
  db.prepare(statements$1.cleanup).run(indexerId);
}
const statements$1 = {
  createTable: `
    CREATE TABLE IF NOT EXISTS kvs (
      from_block INTEGER NOT NULL,
      to_block INTEGER,
      k TEXT NOT NULL,
      v BLOB NOT NULL,
      id TEXT NOT NULL,
      PRIMARY KEY (from_block, k, id)
      );`,
  get: `
    SELECT v
    FROM kvs
    WHERE k = ? AND id = ? AND to_block IS NULL`,
  updateToBlock: `
    UPDATE kvs
    SET to_block = ?
    WHERE k = ? AND id = ? AND to_block IS NULL`,
  insertIntoKvs: `
    INSERT INTO kvs (from_block, to_block, k, v, id)
    VALUES (?, NULL, ?, ?, ?)`,
  del: `
    UPDATE kvs
    SET to_block = ?
    WHERE k = ? AND id = ? AND to_block IS NULL`,
  finalize: `
    DELETE FROM kvs
    WHERE to_block <= ? AND id = ?`,
  invalidateDelete: `
    DELETE FROM kvs
    WHERE from_block > ? AND id = ?`,
  invalidateUpdate: `
    UPDATE kvs
    SET to_block = NULL
    WHERE to_block > ? AND id = ?`,
  cleanup: `
    DELETE FROM kvs
    WHERE id = ?`
};

function initializePersistentState(db) {
  assertInTransaction(db);
  db.exec(statements.createCheckpointsTable);
  db.exec(statements.createFiltersTable);
}
function persistState(props) {
  const { db, endCursor, filter, indexerId } = props;
  assertInTransaction(db);
  db.prepare(statements.putCheckpoint).run(
    indexerId,
    Number(endCursor.orderKey),
    endCursor.uniqueKey
  );
  if (filter) {
    db.prepare(statements.updateFilterToBlock).run(
      Number(endCursor.orderKey),
      indexerId
    );
    db.prepare(statements.insertFilter).run(
      indexerId,
      serialize(filter),
      Number(endCursor.orderKey)
    );
  }
}
function getState(props) {
  const { db, indexerId } = props;
  assertInTransaction(db);
  const storedCursor = db.prepare(
    statements.getCheckpoint
  ).get(indexerId);
  const storedFilter = db.prepare(statements.getFilter).get(indexerId);
  let cursor;
  let filter;
  if (storedCursor?.order_key) {
    cursor = protocol.normalizeCursor({
      orderKey: BigInt(storedCursor.order_key),
      uniqueKey: storedCursor.unique_key ? storedCursor.unique_key : null
    });
  }
  if (storedFilter) {
    filter = deserialize(storedFilter.filter);
  }
  return { cursor, filter };
}
function finalizeState(props) {
  const { cursor, db, indexerId } = props;
  assertInTransaction(db);
  db.prepare(statements.finalizeFilter).run(
    indexerId,
    Number(cursor.orderKey)
  );
}
function invalidateState(props) {
  const { cursor, db, indexerId } = props;
  assertInTransaction(db);
  db.prepare(statements.invalidateFilterDelete).run(
    indexerId,
    Number(cursor.orderKey)
  );
  db.prepare(statements.invalidateFilterUpdate).run(
    indexerId,
    Number(cursor.orderKey)
  );
}
function resetPersistence(props) {
  const { db, indexerId } = props;
  assertInTransaction(db);
  db.prepare(statements.resetCheckpoint).run(indexerId);
  db.prepare(statements.resetFilter).run(indexerId);
}
const statements = {
  createCheckpointsTable: `
    CREATE TABLE IF NOT EXISTS checkpoints (
      id TEXT NOT NULL PRIMARY KEY,
      order_key INTEGER,
      unique_key TEXT
    );`,
  createFiltersTable: `
    CREATE TABLE IF NOT EXISTS filters (
      id TEXT NOT NULL,
      filter BLOB NOT NULL,
      from_block INTEGER NOT NULL,
      to_block INTEGER,
      PRIMARY KEY (id, from_block)
    );`,
  getCheckpoint: `
    SELECT *
    FROM checkpoints
    WHERE id = ?`,
  putCheckpoint: `
    INSERT INTO checkpoints (id, order_key, unique_key)
    VALUES (?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      order_key = excluded.order_key,
      unique_key = excluded.unique_key`,
  delCheckpoint: `
    DELETE FROM checkpoints
    WHERE id = ?`,
  getFilter: `
    SELECT *
    FROM filters
    WHERE id = ? AND to_block IS NULL`,
  updateFilterToBlock: `
    UPDATE filters
    SET to_block = ?
    WHERE id = ? AND to_block IS NULL`,
  insertFilter: `
    INSERT INTO filters (id, filter, from_block)
    VALUES (?, ?, ?)
    ON CONFLICT(id, from_block) DO UPDATE SET
      filter = excluded.filter,
      from_block = excluded.from_block`,
  delFilter: `
    DELETE FROM filters
    WHERE id = ?`,
  finalizeFilter: `
    DELETE FROM filters
    WHERE id = ? AND to_block <= ?`,
  invalidateFilterDelete: `
    DELETE FROM filters
    WHERE id = ? AND from_block > ?`,
  invalidateFilterUpdate: `
    UPDATE filters
    SET to_block = NULL
    WHERE id = ? AND to_block > ?`,
  resetCheckpoint: `
    DELETE FROM checkpoints
    WHERE id = ?`,
  resetFilter: `
    DELETE FROM filters
    WHERE id = ?`
};

const KV_PROPERTY = "_kv_sqlite";
const MAX_RETRIES = 5;
function useSqliteKeyValueStore() {
  const kv = indexer.useIndexerContext()[KV_PROPERTY];
  if (!kv) {
    throw new SqliteStorageError(
      "SQLite key-value store is not available. Did you forget to enable it?"
    );
  }
  return kv;
}
function sqliteStorage({
  database,
  persistState: enablePersistState = true,
  keyValueStore: enableKeyValueStore = true,
  serialize: serializeFn = serialize,
  deserialize: deserializeFn = deserialize,
  indexerName: identifier = "default"
}) {
  return plugins.defineIndexerPlugin((indexer) => {
    let indexerId = "";
    let prevFinality;
    const alwaysReindex = process.env["APIBARA_ALWAYS_REINDEX"] === "true";
    indexer.hooks.hook("run:before", async () => {
      const { indexerName: indexerFileName, availableIndexers } = plugins$1.useInternalContext();
      const logger = plugins.useLogger();
      indexerId = internal.generateIndexerId(indexerFileName, identifier);
      let retries = 0;
      let cleanupApplied = false;
      while (retries <= MAX_RETRIES) {
        try {
          await withTransaction(database, async (db) => {
            if (enablePersistState) {
              initializePersistentState(db);
            }
            if (enableKeyValueStore) {
              initializeKeyValueStore(db);
            }
            if (alwaysReindex && !cleanupApplied) {
              if (enableKeyValueStore) {
                logger.warn("Reindexing: Cleaning up key-value store");
                cleanupKV(db, indexerId);
              }
              if (enablePersistState) {
                logger.warn("Reindexing: Resetting persistence state");
                resetPersistence({ db, indexerId });
              }
              cleanupApplied = true;
              logger.success("All data has been cleaned up for reindexing");
            }
          });
          break;
        } catch (error) {
          if (retries === MAX_RETRIES) {
            throw new SqliteStorageError(
              "Initialization failed after 5 retries",
              {
                cause: error
              }
            );
          }
          await sleep(retries * 1e3);
          retries++;
        }
      }
    });
    indexer.hooks.hook("connect:before", async ({ request }) => {
      if (!enablePersistState) {
        return;
      }
      return await withTransaction(database, async (db) => {
        const { cursor, filter } = getState({ db, indexerId });
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
      await withTransaction(database, async (db) => {
        if (enablePersistState) {
          invalidateState({ db, cursor, indexerId });
        }
        if (enableKeyValueStore) {
          invalidateKV(db, cursor, indexerId);
        }
      });
    });
    indexer.hooks.hook("connect:factory", ({ request, endCursor }) => {
      if (!enablePersistState) {
        return;
      }
      assertInTransaction(database);
      if (endCursor && request.filter[1]) {
        persistState({
          db: database,
          endCursor,
          indexerId,
          filter: request.filter[1]
        });
      }
    });
    indexer.hooks.hook("message:finalize", async ({ message }) => {
      const { cursor } = message;
      if (!cursor) {
        throw new SqliteStorageError("finalized cursor is undefined");
      }
      await withTransaction(database, async (db) => {
        if (enablePersistState) {
          finalizeState({ db, cursor, indexerId });
        }
        if (enableKeyValueStore) {
          finalizeKV(db, cursor, indexerId);
        }
      });
    });
    indexer.hooks.hook("message:invalidate", async ({ message }) => {
      const { cursor } = message;
      if (!cursor) {
        throw new SqliteStorageError("invalidate cursor is undefined");
      }
      await withTransaction(database, async (db) => {
        if (enablePersistState) {
          invalidateState({ db, cursor, indexerId });
        }
        if (enableKeyValueStore) {
          invalidateKV(db, cursor, indexerId);
        }
      });
    });
    indexer.hooks.hook("handler:middleware", ({ use }) => {
      use(async (ctx, next) => {
        const { endCursor, finality, cursor } = ctx;
        if (!finality) {
          throw new SqliteStorageError("finality is undefined");
        }
        if (!endCursor) {
          throw new SqliteStorageError(
            "endCursor is undefined or not a cursor"
          );
        }
        await withTransaction(database, async (db) => {
          if (prevFinality === "pending") {
            if (enableKeyValueStore) {
              invalidateKV(db, cursor, indexerId);
            }
          }
          if (enableKeyValueStore) {
            ctx[KV_PROPERTY] = new KeyValueStore(
              db,
              endCursor,
              finality,
              serializeFn,
              deserializeFn,
              indexerId
            );
          }
          await next();
          if (enablePersistState && finality !== "pending") {
            persistState({ db, endCursor, indexerId });
          }
          if (enableKeyValueStore) {
            delete ctx[KV_PROPERTY];
          }
          prevFinality = finality;
        });
      });
    });
  });
}

exports.KeyValueStore = KeyValueStore;
exports.sqliteStorage = sqliteStorage;
exports.useSqliteKeyValueStore = useSqliteKeyValueStore;
//# sourceMappingURL=index.cjs.map
