import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { UserRoleType } from "@/types/user";

const accounts = pgTable("accounts", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
});

const users = pgTable("users", {
  userId: uuid("id").references(() => accounts.id),
  name: varchar("name", { length: 255 }),
  role: varchar("role").$type<UserRoleType>().default("VISITOR"),
});

export { accounts, users };
