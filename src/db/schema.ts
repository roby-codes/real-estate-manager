import { UserRoleType } from "@/types";

import {
  boolean,
  integer,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  emailVerificationToken: varchar("emailVerificationToken", { length: 255 }),
  refresh_token: varchar("refresh_token", { length: 255 }),
  access_token: varchar("access_token", { length: 255 }),
  twoFactorAuth: boolean("twoFactorAuth").default(false),
  twoFactorAuthToken: integer("twoFactorAuthToken"),
});

export const users = pgTable("users", {
  userId: uuid("userId")
    .notNull()
    .references(() => accounts.id, {
      onDelete: "cascade",
    }),
  name: varchar("name", { length: 255 }),
  role: varchar("role").$type<UserRoleType>().default("CUSTOMER"),
});
