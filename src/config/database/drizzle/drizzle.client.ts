import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './index'; // exports all your module-level schemas
import * as dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  Casing: 'snake_case',
});

export const db = drizzle(pool, { schema });
