import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

import { users, User, InsertUser } from './schema';

const sqlite = new Database('sqlite.db');

const db = drizzle(sqlite);

// const result: User[] = db.select().from(users).all();

const insertUser = (user: InsertUser) => {
  return db.insert(users).values(user).run();
};

insertUser({
  id: '1',
  nickname: 'test',
  age: 20,
});
