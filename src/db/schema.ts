import { sql } from "drizzle-orm";
import {
  boolean,
  pgPolicy,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const orders = pgTable(
  "orders",
  {
    id: uuid().defaultRandom().primaryKey().notNull(),
    name: varchar("name", { length: 128 }),
    email: varchar("email", { length: 64 }),
    phone: varchar("phone", { length: 20 }),
    company: varchar("company", { length: 128 }),
    project: varchar("project", { length: 256 }),
    position: varchar("position", { length: 128 }),
    services: varchar("services", { length: 256 }),
    budget: varchar("budget", { length: 64 }),
    brief: varchar("brief", { length: 256 }),
    additional: varchar("additional", { length: 256 }),
    question: varchar("question", { length: 256 }),
  },
  (table) => {
    return {
      enableInsertForAllUsers: pgPolicy("enable insert for all users", {
        as: "permissive",
        for: "insert",
        to: ["public"],
        withCheck: sql`true`,
      }),
    };
  }
);

export const feedbacks = pgTable(
  "feedbacks",
  {
    id: uuid().defaultRandom().primaryKey().notNull(),
    name: varchar("name", { length: 128 }),
    company: varchar("company", { length: 128 }),
    position: varchar("position", { length: 128 }),
    testimony: varchar("testimony", { length: 512 }),
    instagram: varchar("instagram", { length: 64 }),
    x: varchar("x", { length: 64 }),
    public: boolean("public"),
  },
  (table) => {
    return {
      enableInsertForAllUsers: pgPolicy("enable insert for all users", {
        as: "permissive",
        for: "insert",
        to: ["public"],
        withCheck: sql`true`,
      }),
    };
  }
);

export const keepAlives = pgTable(
  "keep_alives",
  {
    id: uuid().defaultRandom().primaryKey().notNull(),
    createdAt: timestamp({ mode: "string" }).defaultNow(),
  },
  (table) => {
    return {
      enableInsertForAllUsers: pgPolicy("enable insert for all users", {
        as: "permissive",
        for: "insert",
        to: ["public"],
        withCheck: sql`true`,
      }),
    };
  }
);

export type InsertOrdersType = typeof orders.$inferInsert;
export type InsertFeedbacksType = typeof feedbacks.$inferInsert;
export type KeepAlivesType = typeof keepAlives.$inferInsert;
