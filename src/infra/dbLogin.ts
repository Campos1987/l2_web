// src/db/index.ts
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schemaLogin from '../../drizzle/login/schema';

const poolLogin = mysql.createPool(process.env.DATABASE_LOGIN_URL!);

export const dbLogin = drizzle(poolLogin, {
  schema: schemaLogin,
  mode: 'default',
});
