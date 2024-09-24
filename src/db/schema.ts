import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

import { UserRoleType } from "@/types/user";

export const accounts = pgTable("accounts", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
});

export const users = pgTable("users", {
  userId: uuid("userId").references(() => accounts.id, {
    onDelete: "cascade",
  }),
  name: varchar("name", { length: 255 }),
  role: varchar("role").$type<UserRoleType>().default("VISITOR"),
});
