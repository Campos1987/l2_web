import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  unique,
  varchar,
  mysqlEnum,
  timestamp,
  char,
  tinyint,
  bigint,
} from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm';

export const accounts = mysqlTable(
  'accounts',
  {
    login: varchar({ length: 12 }).default("'").notNull(),
    password: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull(),
    loginRetryCount: tinyint('login_retry_count').default(0).notNull(),
    name: varchar({ length: 50 }).default('NULL'),
    activeStatus: mysqlEnum('active_status', [
      'PENDING',
      'ACTIVE',
      'LOCKED',
      'BANNED',
    ]).notNull(),
    createdTime: timestamp('created_time', { mode: 'string' })
      .default('current_timestamp()')
      .notNull(),
    lastactive: bigint({ mode: 'number' }).notNull(),
    accessLevel: tinyint().default(0).notNull(),
    lastIp: char({ length: 15 }).default('NULL'),
    lastServer: tinyint().default(1),
    pcIp: char({ length: 15 }).default('NULL'),
    hop1: char({ length: 15 }).default('NULL'),
    hop2: char({ length: 15 }).default('NULL'),
    hop3: char({ length: 15 }).default('NULL'),
    hop4: char({ length: 15 }).default('NULL'),
  },
  table => [unique('login').on(table.login), unique('email').on(table.email)],
);
