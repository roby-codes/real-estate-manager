import postgres from "postgres";

import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

import { env } from "@/env";

const postgresClient = postgres(env.POSTGRES_URI, { max: 1 });
const migrationClient = drizzle(postgresClient);

migrate(migrationClient, {
  migrationsFolder: "./",
});

postgresClient.end();
