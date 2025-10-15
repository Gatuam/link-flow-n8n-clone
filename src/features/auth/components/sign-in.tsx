"use client";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email("Please enter valid email"),
  password: z.string().min(6, "Password is required, 6 characters"),
});

export const SignInForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isPending = form.formState.isSubmitting;
  const isDisable = form;

  async function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submit a form please wait", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <p className=" animate-pulse">Submitting the from...</p>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
    console.log(data);
    await authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });
  }

  return (
    <Card className="w-full md:max-w-3xl md:min-w-lg sm:max-w-md px-3 py-8">
      <CardHeader className=" text-center">
        <CardTitle className=" text-2xl">Sign-In</CardTitle>
        <CardDescription>Sign-in to get start with n8n</CardDescription>
      </CardHeader>
      <div className="border-b py-3 pb-7 text-center">
        <CardContent>
          <Field
            className="flex justify-center items-center text-center gap-4"
            orientation="horizontal"
          >
            <Button
              disabled={isPending}
              className="w-1/2"
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              GitHub
            </Button>

            <Button className="w-1/2" type="submit" form="form-rhf-demo">
              Google
            </Button>
          </Field>
        </CardContent>
      </div>

      <div className=" gap-y-8 flex flex-col">
        <CardContent>
          <form
            className=" flex flex-col gap-y-5"
            id="form-rhf-demo"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FieldGroup className=" flex flex-col gap-y-4">
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">Email</FieldLabel>
                    <Input
                      disabled={isPending}
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="sagar@gmail.com"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Password
                    </FieldLabel>
                    <Input
                      disabled={isPending}
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="******"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field
            className=" text-center flex justify-center items-center"
            orientation="horizontal"
          >
            <Button
              disabled={isPending}
              className=" w-1/2"
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button className=" w-1/2" type="submit" form="form-rhf-demo">
              Submit
            </Button>
          </Field>
        </CardFooter>
        <CardFooter>
          <Field
            className=" text-center flex justify-center items-center"
            orientation="horizontal"
          >
            <Button
              disabled={isPending}
              className=" w-1/2 text-muted-foreground/50"
              type="button"
              variant="link"
            >
              <Link href={"/auth/sign-up"}></Link>
              Dont have an account yet?
            </Button>
          </Field>
        </CardFooter>
      </div>
    </Card>
  );
};
