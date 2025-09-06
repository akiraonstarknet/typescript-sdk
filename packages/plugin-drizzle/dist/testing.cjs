'use strict';

const constants = require('./shared/plugin-drizzle.cae20704.cjs');

function getTestDatabase(context) {
  const db = context[constants.DRIZZLE_STORAGE_DB_PROPERTY];
  if (!db) {
    throw new Error("Drizzle database not found in context");
  }
  return db;
}

exports.getTestDatabase = getTestDatabase;
//# sourceMappingURL=testing.cjs.map
