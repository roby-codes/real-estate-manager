import z from "zod";

export const LoginSchema = z.object({
  email: z.string({ message: "Email is required." }).email({
    message: "Enter a valid email.",
  }),
  password: z
    .string({ message: "Password is required." })
    .min(8, { message: "Enter a password with at least 8 characters." }),
});

export type LoginFormType = typeof LoginSchema;
