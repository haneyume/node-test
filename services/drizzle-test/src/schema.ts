import { sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  nickname: text('nickname').notNull(),
  age: integer('age'),
  created_at: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
