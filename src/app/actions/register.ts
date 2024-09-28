"use server";

import { db } from "@/db";
import { accounts } from "@/db/schema";
import { LoginFormType } from "@/schemas/login-schema";
import z from "zod";
import bcrypt from "bcrypt";

export const register = async ({ email, password }: z.infer<LoginFormType>) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  await db.insert(accounts).values({
    email,
    password: hashedPassword,
    name: "Slep Sluzpula",
  });
};
