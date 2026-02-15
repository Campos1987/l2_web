// src/db/index.ts
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schemaWeb from '../../drizzle/web/schema';

const poolWeb = mysql.createPool(process.env.DATABASE_WEB_URL!);

export const dbWeb = drizzle(poolWeb, {
  schema: schemaWeb,
  mode: 'default',
});
