import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getAndValidateUser } from "@/data/user";
import { LoginSchema } from "@/schemas/login-schema";

export const authConfig = {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) return null;

        return await getAndValidateUser(validatedFields.data);
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
} satisfies NextAuthConfig;
