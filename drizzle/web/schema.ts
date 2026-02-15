import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  int,
  varchar,
  text,
  datetime,
  unique,
  tinyint,
} from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm';

export const gkAbout = mysqlTable('gk_about', {
  id: int().autoincrement().notNull(),
  title: varchar({ length: 191 }).notNull(),
  description: text().default('NULL'),
  isActive: tinyint('is_active').default(1).notNull(),
  createdAt: datetime('created_at', { mode: 'string', fsp: 3 })
    .default('current_timestamp(3)')
    .notNull(),
  image: varchar({ length: 191 }).notNull(),
});

export const gkEvent = mysqlTable(
  'gk_event',
  {
    id: int().autoincrement().notNull(),
    schedule: varchar({ length: 191 }).default('NULL'),
    title: varchar({ length: 191 }).notNull(),
    content: text().default('NULL'),
    slug: varchar({ length: 191 }).notNull(),
    isActive: tinyint('is_active').default(0).notNull(),
    type: varchar({ length: 191 }).default('NULL'),
    createdAt: datetime('created_at', { mode: 'string', fsp: 3 })
      .default('current_timestamp(3)')
      .notNull(),
  },
  table => [unique('gk_event_slug_key').on(table.slug)],
);

export const gkNews = mysqlTable(
  'gk_news',
  {
    id: int().autoincrement().notNull(),
    schedule: varchar({ length: 191 }).default('NULL'),
    title: varchar({ length: 191 }).notNull(),
    content: text().default('NULL'),
    slug: varchar({ length: 191 }).notNull(),
    isActive: tinyint('is_active').default(1).notNull(),
    type: varchar({ length: 191 }).default('NULL'),
    createdAt: datetime('created_at', { mode: 'string', fsp: 3 })
      .default('current_timestamp(3)')
      .notNull(),
  },
  table => [unique('gk_news_slug_key').on(table.slug)],
);
