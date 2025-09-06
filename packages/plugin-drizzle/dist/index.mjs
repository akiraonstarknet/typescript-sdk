import { useIndexerContext } from '@apibara/indexer';
import { defineIndexerPlugin, useLogger } from '@apibara/indexer/plugins';
import { generateIndexerId } from '@apibara/indexer/internal';
import { useInternalContext } from '@apibara/indexer/internal/plugins';
import { S as SCHEMA_NAME, D as DRIZZLE_PROPERTY, a as DRIZZLE_STORAGE_DB_PROPERTY } from './shared/plugin-drizzle.2d226351.mjs';
import { entityKind, sql, eq, and, isNull, gt, lt } from 'drizzle-orm';
import { normalizeCursor } from '@apibara/protocol';
import { pgSchema, text, integer, primaryKey, serial, char, jsonb } from 'drizzle-orm/pg-core';

class DrizzleStorageError extends Error {
  constructor(message, options) {
    super(message, options);
    this.name = "DrizzleStorageError";
  }
}
async function withTransaction(db, cb) {
  return await db.transaction(async (txnDb) => {
    return await cb(txnDb);
  });
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
const getIdColumnForTable = (tableName, idColumn) => {
  if (idColumn[tableName]) {
    return idColumn[tableName];
  }
  return idColumn["*"];
};

function drizzle(options) {
  const {
    connectionString = process.env["POSTGRES_CONNECTION_STRING"] ?? "memory://",
    schema,
    type = "pglite",
    config,
    poolConfig
  } = options ?? {};
  if (isPgliteConnectionString(connectionString) && type === "pglite") {
    const { drizzle: drizzlePGLite } = require("drizzle-orm/pglite");
    return drizzlePGLite({
      schema,
      connection: {
        dataDir: connectionString || "memory://pglite"
      },
      ...config || {}
    });
  }
  const { Pool } = require("pg");
  const { drizzle: drizzleNode } = require("drizzle-orm/node-postgres");
  const pool = new Pool({
    connectionString,
    ...poolConfig || {}
  });
  return drizzleNode(pool, { schema, ...config || {} });
}
async function migrate(db, options) {
  const isPglite = isDrizzleKind(db, "PgliteDatabase");
  try {
    if (isPglite) {
      const { migrate: migratePGLite } = require("drizzle-orm/pglite/migrator");
      await migratePGLite(db, options);
    } else {
      const {
        migrate: migrateNode
      } = require("drizzle-orm/node-postgres/migrator");
      await migrateNode(db, options);
    }
  } catch (error) {
    throw new DrizzleStorageError(
      "Failed to apply migrations! Please check if you have generated migrations using drizzle:generate",
      {
        cause: error
      }
    );
  }
}
function isPgliteConnectionString(conn) {
  return conn.startsWith("memory://") || conn.startsWith("file://") || conn.startsWith("idb://");
}
function isDrizzleKind(value, entityKindValue) {
  if (!value || typeof value !== "object") {
    return false;
  }
  let cls = Object.getPrototypeOf(value).constructor;
  if (cls) {
    while (cls) {
      if (entityKind in cls && cls[entityKind] === entityKindValue) {
        return true;
      }
      cls = Object.getPrototypeOf(cls);
    }
  }
  return false;
}

const CHECKPOINTS_TABLE_NAME = "checkpoints";
const FILTERS_TABLE_NAME = "filters";
const SCHEMA_VERSION_TABLE_NAME = "schema_version";
const schema$1 = pgSchema(SCHEMA_NAME);
const checkpoints = schema$1.table(CHECKPOINTS_TABLE_NAME, {
  id: text("id").notNull().primaryKey(),
  orderKey: integer("order_key").notNull(),
  uniqueKey: text("unique_key")
});
const filters = schema$1.table(
  FILTERS_TABLE_NAME,
  {
    id: text("id").notNull(),
    filter: text("filter").notNull(),
    fromBlock: integer("from_block").notNull(),
    toBlock: integer("to_block").$type().default(null)
  },
  (table) => [
    {
      pk: primaryKey({ columns: [table.id, table.fromBlock] })
    }
  ]
);
const schemaVersion = schema$1.table(SCHEMA_VERSION_TABLE_NAME, {
  k: integer("k").notNull().primaryKey(),
  version: integer("version").notNull()
});
const CURRENT_SCHEMA_VERSION = 0;
const MIGRATIONS = [
  // migrations[0]: v0 -> v1 (for future use)
  []
  // Add more migration arrays for future versions
];
async function initializePersistentState(tx) {
  await tx.execute(
    sql.raw(`
      CREATE SCHEMA IF NOT EXISTS ${SCHEMA_NAME};
  `)
  );
  await tx.execute(
    sql.raw(`
    CREATE TABLE IF NOT EXISTS ${SCHEMA_NAME}.${SCHEMA_VERSION_TABLE_NAME} (
      k INTEGER PRIMARY KEY,
      version INTEGER NOT NULL
    );
  `)
  );
  const versionRows = await tx.select().from(schemaVersion).where(eq(schemaVersion.k, 0));
  const storedVersion = versionRows[0]?.version ?? -1;
  if (storedVersion > CURRENT_SCHEMA_VERSION) {
    throw new DrizzleStorageError(
      `Database Persistence schema version v${storedVersion} is newer than supported version v${CURRENT_SCHEMA_VERSION}`
    );
  }
  try {
    if (storedVersion === -1) {
      await tx.execute(
        sql.raw(`
        CREATE TABLE IF NOT EXISTS ${SCHEMA_NAME}.${CHECKPOINTS_TABLE_NAME} (
          id TEXT PRIMARY KEY,
          order_key INTEGER NOT NULL,
          unique_key TEXT
        );
      `)
      );
      await tx.execute(
        sql.raw(`
        CREATE TABLE IF NOT EXISTS ${SCHEMA_NAME}.${FILTERS_TABLE_NAME} (
          id TEXT NOT NULL,
          filter TEXT NOT NULL,
          from_block INTEGER NOT NULL,
          to_block INTEGER DEFAULT NULL,
          PRIMARY KEY (id, from_block)
        );
      `)
      );
      await tx.insert(schemaVersion).values({
        k: 0,
        version: CURRENT_SCHEMA_VERSION
      });
    } else {
      let currentVersion = storedVersion;
      while (currentVersion < CURRENT_SCHEMA_VERSION) {
        const migrationStatements = MIGRATIONS[currentVersion];
        for (const statement of migrationStatements) {
          await tx.execute(statement);
        }
        currentVersion++;
      }
      await tx.update(schemaVersion).set({ version: CURRENT_SCHEMA_VERSION }).where(eq(schemaVersion.k, 0));
    }
  } catch (error) {
    throw new DrizzleStorageError(
      "Failed to initialize or migrate database schema",
      { cause: error }
    );
  }
}
async function persistState(props) {
  const { tx, endCursor, filter, indexerId } = props;
  try {
    if (endCursor) {
      await tx.insert(checkpoints).values({
        id: indexerId,
        orderKey: Number(endCursor.orderKey),
        uniqueKey: endCursor.uniqueKey
      }).onConflictDoUpdate({
        target: checkpoints.id,
        set: {
          orderKey: Number(endCursor.orderKey),
          // Explicitly set the unique key to `null` to indicate that it has been deleted
          // Otherwise drizzle will not update its value.
          uniqueKey: endCursor.uniqueKey ? endCursor.uniqueKey : null
        }
      });
      if (filter) {
        await tx.update(filters).set({ toBlock: Number(endCursor.orderKey) }).where(and(eq(filters.id, indexerId), isNull(filters.toBlock)));
        await tx.insert(filters).values({
          id: indexerId,
          filter: serialize(filter),
          fromBlock: Number(endCursor.orderKey),
          toBlock: null
        }).onConflictDoUpdate({
          target: [filters.id, filters.fromBlock],
          set: {
            filter: serialize(filter),
            fromBlock: Number(endCursor.orderKey),
            toBlock: null
          }
        });
      }
    }
  } catch (error) {
    throw new DrizzleStorageError("Failed to persist state", {
      cause: error
    });
  }
}
async function getState(props) {
  const { tx, indexerId } = props;
  try {
    const checkpointRows = await tx.select().from(checkpoints).where(eq(checkpoints.id, indexerId));
    const cursor = checkpointRows[0] ? normalizeCursor({
      orderKey: BigInt(checkpointRows[0].orderKey),
      uniqueKey: checkpointRows[0].uniqueKey
    }) : void 0;
    const filterRows = await tx.select().from(filters).where(and(eq(filters.id, indexerId), isNull(filters.toBlock)));
    const filter = filterRows[0] ? deserialize(filterRows[0].filter) : void 0;
    return { cursor, filter };
  } catch (error) {
    throw new DrizzleStorageError("Failed to get persistent state", {
      cause: error
    });
  }
}
async function invalidateState(props) {
  const { tx, cursor, indexerId } = props;
  try {
    await tx.delete(filters).where(
      and(
        eq(filters.id, indexerId),
        gt(filters.fromBlock, Number(cursor.orderKey))
      )
    );
    await tx.update(filters).set({ toBlock: null }).where(
      and(
        eq(filters.id, indexerId),
        gt(filters.toBlock, Number(cursor.orderKey))
      )
    );
  } catch (error) {
    throw new DrizzleStorageError("Failed to invalidate state", {
      cause: error
    });
  }
}
async function finalizeState(props) {
  const { tx, cursor, indexerId } = props;
  try {
    await tx.delete(filters).where(
      and(
        eq(filters.id, indexerId),
        lt(filters.toBlock, Number(cursor.orderKey))
      )
    );
  } catch (error) {
    throw new DrizzleStorageError("Failed to finalize state", {
      cause: error
    });
  }
}
async function resetPersistence(props) {
  const { tx, indexerId } = props;
  try {
    await tx.delete(checkpoints).where(eq(checkpoints.id, indexerId));
    await tx.delete(filters).where(eq(filters.id, indexerId));
  } catch (error) {
    throw new DrizzleStorageError("Failed to reset persistence state", {
      cause: error
    });
  }
}

const ROLLBACK_TABLE_NAME = "reorg_rollback";
const schema = pgSchema(SCHEMA_NAME);
function getReorgTriggerName(table, indexerId) {
  return `${table}_reorg_${indexerId}`;
}
schema.table(ROLLBACK_TABLE_NAME, {
  n: serial("n").primaryKey(),
  op: char("op", { length: 1 }).$type().notNull(),
  table_name: text("table_name").notNull(),
  cursor: integer("cursor").notNull(),
  row_id: text("row_id"),
  row_value: jsonb("row_value"),
  indexer_id: text("indexer_id").notNull()
});
async function initializeReorgRollbackTable(tx, indexerId) {
  try {
    await tx.execute(`
    CREATE SCHEMA IF NOT EXISTS ${SCHEMA_NAME};
    `);
    await tx.execute(
      sql.raw(`
        CREATE TABLE IF NOT EXISTS ${SCHEMA_NAME}.${ROLLBACK_TABLE_NAME}(
          n SERIAL PRIMARY KEY,
          op CHAR(1) NOT NULL,
          table_name TEXT NOT NULL,
          cursor INTEGER NOT NULL,
          row_id TEXT,
          row_value JSONB,
          indexer_id TEXT NOT NULL
        );
      `)
    );
    await tx.execute(
      sql.raw(`
        CREATE INDEX IF NOT EXISTS idx_reorg_rollback_indexer_id_cursor ON ${SCHEMA_NAME}.${ROLLBACK_TABLE_NAME}(indexer_id, cursor);
      `)
    );
  } catch (error) {
    throw new DrizzleStorageError("Failed to initialize reorg rollback table", {
      cause: error
    });
  }
  try {
    await tx.execute(
      sql.raw(`
      CREATE OR REPLACE FUNCTION ${SCHEMA_NAME}.reorg_checkpoint()
      RETURNS TRIGGER AS $$
      DECLARE
        table_name TEXT := TG_ARGV[0]::TEXT;
        id_col TEXT := TG_ARGV[1]::TEXT;
        order_key INTEGER := TG_ARGV[2]::INTEGER;
        indexer_id TEXT := TG_ARGV[3]::TEXT;
        new_id_value TEXT := row_to_json(NEW.*)->>id_col;
        old_id_value TEXT := row_to_json(OLD.*)->>id_col;
      BEGIN
        IF (TG_OP = 'DELETE') THEN
          INSERT INTO ${SCHEMA_NAME}.${ROLLBACK_TABLE_NAME}(op, table_name, cursor, row_id, row_value, indexer_id)
            SELECT 'D', table_name, order_key, old_id_value, row_to_json(OLD.*), indexer_id;
        ELSIF (TG_OP = 'UPDATE') THEN
          INSERT INTO ${SCHEMA_NAME}.${ROLLBACK_TABLE_NAME}(op, table_name, cursor, row_id, row_value, indexer_id)
            SELECT 'U', table_name, order_key, new_id_value, row_to_json(OLD.*), indexer_id;
        ELSIF (TG_OP = 'INSERT') THEN
          INSERT INTO ${SCHEMA_NAME}.${ROLLBACK_TABLE_NAME}(op, table_name, cursor, row_id, row_value, indexer_id)
            SELECT 'I', table_name, order_key, new_id_value, null, indexer_id;
        END IF;
        RETURN NULL;
      END;
      $$ LANGUAGE plpgsql;
    `)
    );
  } catch (error) {
    throw new DrizzleStorageError(
      "Failed to create reorg checkpoint function",
      {
        cause: error
      }
    );
  }
}
async function registerTriggers(tx, tables, endCursor, idColumnMap, indexerId) {
  try {
    for (const table of tables) {
      const tableIdColumn = getIdColumnForTable(table, idColumnMap);
      await tx.execute(
        sql.raw(
          `DROP TRIGGER IF EXISTS ${getReorgTriggerName(table, indexerId)} ON ${table};`
        )
      );
      await tx.execute(
        sql.raw(`
          CREATE CONSTRAINT TRIGGER ${getReorgTriggerName(table, indexerId)}
          AFTER INSERT OR UPDATE OR DELETE ON ${table}
          DEFERRABLE INITIALLY DEFERRED
          FOR EACH ROW EXECUTE FUNCTION ${SCHEMA_NAME}.reorg_checkpoint('${table}', '${tableIdColumn}', ${Number(endCursor.orderKey)}, '${indexerId}');
        `)
      );
    }
  } catch (error) {
    throw new DrizzleStorageError("Failed to register triggers", {
      cause: error
    });
  }
}
async function removeTriggers(db, tables, indexerId) {
  try {
    for (const table of tables) {
      await db.execute(
        sql.raw(
          `DROP TRIGGER IF EXISTS ${getReorgTriggerName(table, indexerId)} ON ${table};`
        )
      );
    }
  } catch (error) {
    throw new DrizzleStorageError("Failed to remove triggers", {
      cause: error
    });
  }
}
async function invalidate(tx, cursor, idColumnMap, indexerId) {
  const { rows: result } = await tx.execute(
    sql.raw(`
      WITH deleted AS (
        DELETE FROM ${SCHEMA_NAME}.${ROLLBACK_TABLE_NAME}
        WHERE cursor > ${Number(cursor.orderKey)}
        AND indexer_id = '${indexerId}'
        RETURNING *
      )
      SELECT * FROM deleted ORDER BY n DESC;
    `)
  );
  if (!Array.isArray(result)) {
    throw new DrizzleStorageError(
      "Invalid result format from reorg_rollback query"
    );
  }
  for (const op of result) {
    const tableIdColumn = getIdColumnForTable(op.table_name, idColumnMap);
    switch (op.op) {
      case "I":
        try {
          if (!op.row_id) {
            throw new DrizzleStorageError("Insert operation has no row_id");
          }
          await tx.execute(
            sql.raw(`
                DELETE FROM ${op.table_name}
                WHERE ${tableIdColumn} = '${op.row_id}'
              `)
          );
        } catch (error) {
          throw new DrizzleStorageError(
            "Failed to invalidate | Operation - I",
            {
              cause: error
            }
          );
        }
        break;
      case "D":
        try {
          if (!op.row_value) {
            throw new DrizzleStorageError("Delete operation has no row_value");
          }
          await tx.execute(
            sql.raw(`
              INSERT INTO ${op.table_name}
              SELECT * FROM json_populate_record(null::${op.table_name}, '${JSON.stringify(op.row_value)}'::json)
            `)
          );
        } catch (error) {
          throw new DrizzleStorageError(
            "Failed to invalidate | Operation - D",
            {
              cause: error
            }
          );
        }
        break;
      case "U":
        try {
          if (!op.row_value || !op.row_id) {
            throw new DrizzleStorageError(
              "Update operation has no row_value or row_id"
            );
          }
          const rowValue = typeof op.row_value === "string" ? JSON.parse(op.row_value) : op.row_value;
          const nonIdKeys = Object.keys(rowValue).filter(
            (k) => k !== tableIdColumn
          );
          const fields = nonIdKeys.map((c) => `${c} = prev.${c}`).join(", ");
          const query = sql.raw(`
              UPDATE ${op.table_name}
              SET ${fields}
              FROM (
                SELECT * FROM json_populate_record(null::${op.table_name}, '${JSON.stringify(op.row_value)}'::json)
              ) as prev
              WHERE ${op.table_name}.${tableIdColumn} = '${op.row_id}'
              `);
          await tx.execute(query);
        } catch (error) {
          throw new DrizzleStorageError(
            "Failed to invalidate | Operation - U",
            {
              cause: error
            }
          );
        }
        break;
      default: {
        throw new DrizzleStorageError(`Unknown operation: ${op.op}`);
      }
    }
  }
}
async function finalize(tx, cursor, indexerId) {
  try {
    await tx.execute(
      sql.raw(`
      DELETE FROM ${SCHEMA_NAME}.${ROLLBACK_TABLE_NAME}
      WHERE cursor <= ${Number(cursor.orderKey)}
      AND indexer_id = '${indexerId}'
    `)
    );
  } catch (error) {
    throw new DrizzleStorageError("Failed to finalize", {
      cause: error
    });
  }
}
async function cleanupStorage(tx, tables, indexerId) {
  try {
    for (const table of tables) {
      await tx.execute(
        sql.raw(
          `DROP TRIGGER IF EXISTS ${getReorgTriggerName(table, indexerId)} ON ${table};`
        )
      );
    }
    await tx.execute(
      sql.raw(`
        DELETE FROM ${SCHEMA_NAME}.${ROLLBACK_TABLE_NAME}
        WHERE indexer_id = '${indexerId}'
      `)
    );
    for (const table of tables) {
      try {
        await tx.execute(sql.raw(`TRUNCATE TABLE ${table} CASCADE;`));
      } catch (error) {
        throw new DrizzleStorageError(`Failed to truncate table ${table}`, {
          cause: error
        });
      }
    }
  } catch (error) {
    throw new DrizzleStorageError("Failed to clean up storage", {
      cause: error
    });
  }
}

const MAX_RETRIES = 5;
function useDrizzleStorage(_db) {
  const context = useIndexerContext();
  if (!context[DRIZZLE_PROPERTY]) {
    throw new DrizzleStorageError(
      "drizzle storage is not available. Did you register the plugin?"
    );
  }
  return context[DRIZZLE_PROPERTY];
}
function drizzleStorage({
  db,
  persistState: enablePersistence = true,
  indexerName: identifier = "default",
  schema: _schema,
  idColumn,
  migrate: migrateOptions
}) {
  return defineIndexerPlugin((indexer) => {
    let tableNames = [];
    let indexerId = "";
    const alwaysReindex = process.env["APIBARA_ALWAYS_REINDEX"] === "true";
    let prevFinality;
    const schema = _schema ?? db._.schema ?? {};
    const idColumnMap = {
      "*": typeof idColumn === "string" ? idColumn : "id",
      ...typeof idColumn === "object" ? idColumn : {}
    };
    try {
      tableNames = Object.values(schema).map((table) => table.dbName);
    } catch (error) {
      throw new DrizzleStorageError("Failed to get table names from schema", {
        cause: error
      });
    }
    for (const table of Object.values(schema)) {
      const columns = table.columns;
      const tableIdColumn = getIdColumnForTable(table.dbName, idColumnMap);
      const columnExists = Object.values(columns).some(
        (column) => column.name === tableIdColumn
      );
      if (!columnExists) {
        throw new DrizzleStorageError(
          `Column \`"${tableIdColumn}"\` does not exist in table \`"${table.dbName}"\`. Make sure the table has the specified column or provide a valid \`idColumn\` mapping to \`drizzleStorage\`.`
        );
      }
    }
    indexer.hooks.hook("run:before", async () => {
      const internalContext = useInternalContext();
      const context = useIndexerContext();
      const logger = useLogger();
      context[DRIZZLE_STORAGE_DB_PROPERTY] = db;
      const { indexerName: indexerFileName, availableIndexers } = internalContext;
      indexerId = generateIndexerId(indexerFileName, identifier);
      let retries = 0;
      let migrationsApplied = false;
      let cleanupApplied = false;
      while (retries <= MAX_RETRIES) {
        try {
          if (migrateOptions && !migrationsApplied) {
            await migrate(db, migrateOptions);
            migrationsApplied = true;
            logger.success("Migrations applied");
          }
          await withTransaction(db, async (tx) => {
            await initializeReorgRollbackTable(tx, indexerId);
            if (enablePersistence) {
              await initializePersistentState(tx);
            }
            if (alwaysReindex && !cleanupApplied) {
              logger.warn(
                `Reindexing: Deleting all data from tables - ${tableNames.join(", ")}`
              );
              await cleanupStorage(tx, tableNames, indexerId);
              if (enablePersistence) {
                await resetPersistence({ tx, indexerId });
              }
              cleanupApplied = true;
              logger.success("Tables have been cleaned up for reindexing");
            }
          });
          break;
        } catch (error) {
          if (retries === MAX_RETRIES) {
            if (error instanceof DrizzleStorageError) {
              throw error;
            }
            throw new DrizzleStorageError(
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
      if (!enablePersistence) {
        return;
      }
      await withTransaction(db, async (tx) => {
        const { cursor, filter } = await getState({
          tx,
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
      await withTransaction(db, async (tx) => {
        await invalidate(tx, cursor, idColumnMap, indexerId);
        if (enablePersistence) {
          await invalidateState({ tx, cursor, indexerId });
        }
      });
    });
    indexer.hooks.hook("connect:factory", async ({ request, endCursor }) => {
      if (!enablePersistence) {
        return;
      }
      const { db: tx } = useDrizzleStorage();
      if (endCursor && request.filter[1]) {
        await persistState({
          tx,
          endCursor,
          filter: request.filter[1],
          indexerId
        });
      }
    });
    indexer.hooks.hook("message:finalize", async ({ message }) => {
      const { cursor } = message;
      if (!cursor) {
        throw new DrizzleStorageError("Finalized Cursor is undefined");
      }
      await withTransaction(db, async (tx) => {
        await finalize(tx, cursor, indexerId);
        if (enablePersistence) {
          await finalizeState({ tx, cursor, indexerId });
        }
      });
    });
    indexer.hooks.hook("message:invalidate", async ({ message }) => {
      const { cursor } = message;
      if (!cursor) {
        throw new DrizzleStorageError("Invalidate Cursor is undefined");
      }
      await withTransaction(db, async (tx) => {
        await invalidate(tx, cursor, idColumnMap, indexerId);
        if (enablePersistence) {
          await invalidateState({ tx, cursor, indexerId });
        }
      });
    });
    indexer.hooks.hook("handler:middleware", async ({ use }) => {
      use(async (context, next) => {
        try {
          const { endCursor, finality, cursor } = context;
          if (!endCursor) {
            throw new DrizzleStorageError("End Cursor is undefined");
          }
          await withTransaction(db, async (tx) => {
            context[DRIZZLE_PROPERTY] = { db: tx };
            if (prevFinality === "pending") {
              await invalidate(tx, cursor, idColumnMap, indexerId);
            }
            if (finality !== "finalized") {
              await registerTriggers(
                tx,
                tableNames,
                endCursor,
                idColumnMap,
                indexerId
              );
            }
            delete context[DRIZZLE_PROPERTY];
          });
          await withTransaction(db, async (tx) => {
            context[DRIZZLE_PROPERTY] = { db: tx };
            await next();
            delete context[DRIZZLE_PROPERTY];
            if (enablePersistence && finality !== "pending") {
              await persistState({
                tx,
                endCursor,
                indexerId
              });
            }
            prevFinality = finality;
          });
          if (finality !== "finalized") {
            await removeTriggers(db, tableNames, indexerId);
          }
        } catch (error) {
          await removeTriggers(db, tableNames, indexerId);
          throw new DrizzleStorageError("Failed to run handler:middleware", {
            cause: error
          });
        }
      });
    });
  });
}

export { drizzle, drizzleStorage, migrate, useDrizzleStorage };
//# sourceMappingURL=index.mjs.map
