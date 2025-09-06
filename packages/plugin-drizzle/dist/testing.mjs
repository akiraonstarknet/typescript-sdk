import { a as DRIZZLE_STORAGE_DB_PROPERTY } from './shared/plugin-drizzle.2d226351.mjs';

function getTestDatabase(context) {
  const db = context[DRIZZLE_STORAGE_DB_PROPERTY];
  if (!db) {
    throw new Error("Drizzle database not found in context");
  }
  return db;
}

export { getTestDatabase };
//# sourceMappingURL=testing.mjs.map
