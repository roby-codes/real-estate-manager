import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

import { env } from "@/env";

const postgresClient = postgres(env.POSTGRES_URI);
const databaseClient = drizzle(postgresClient);

export { databaseClient as db };
