import { db } from "@/db";
import { accounts } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import { z } from "zod";
import { LoginFormType } from "@/schemas/login-schema";

export const getUserByEmail = async (email: string) =>
  await db
    .select()
    .from(accounts)
    .where(eq(accounts.email, email))
    .then((data) => data[0]);

export const getAndValidateUser = async ({
  email,
  password,
}: z.infer<LoginFormType>) => {
  const user = await getUserByEmail(email);

  if (!user || !user.password) return null;

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) return user;

  return null;
};
