import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

import { env } from "@/env";

const postgresClient = postgres(env.POSTGRES_URI, { max: 1 });
const drizzleClient = drizzle(postgresClient);

migrate(drizzleClient, {
  migrationsFolder: "./migrations",
});
