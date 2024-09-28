"use server";

import { signIn } from "@/auth";
import { LoginFormType } from "@/schemas/login-schema";
import { AuthError } from "next-auth";
import z from "zod";

export const login = async ({ email, password }: z.infer<LoginFormType>) => {
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "An error has occurred!" };
      }
    }

    throw error;
  }
};
