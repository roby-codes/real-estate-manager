"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { LoginSchema, LoginFormType } from "@/schemas/login-schema";
import { login } from "@/app/actions/login";

const LoginForm = () => {
  const form = useForm<z.infer<LoginFormType>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<LoginFormType>) {
    if (!form.formState.isSubmitting) {
      await login(values);
    }
  }

  return (
    <div className="bg-white shadow-sm rounded-lg p-8 flex flex-col gap-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-sm font-semibold">
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="info@domain.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-sm font-semibold">
                  Password
                </FormLabel>
                <FormControl>
                  <Input placeholder="••••••••" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>

      <span className="self-center">
        <Link href="/register" className="group relative duration-300 text-sm">
          Don&apos;t have an account?
          <div className="absolute left-0 border-b group-hover:border-black/50 w-full top-4 border-transparent transition-colors duration-300"></div>
        </Link>
      </span>
    </div>
  );
};

export { LoginForm };
