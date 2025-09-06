import { VcrResult } from '@apibara/indexer/testing';
import { PgDatabase, PgQueryResultHKT } from 'drizzle-orm/pg-core';

declare function getTestDatabase(context: VcrResult): PgDatabase<PgQueryResultHKT>;

export { getTestDatabase };
