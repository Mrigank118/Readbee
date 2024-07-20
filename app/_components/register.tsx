"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input"; // Adjust import based on your setup
import { Button } from "@/components/ui/button"; // Adjust import based on your setup

// Validation schema for Sign-Up
const SignUpSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(8, "Password must have at least 8 characters"),
  confirmPassword: z.string().min(1, "Password confirmation is required"),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match",
});

// Validation schema for Sign-In
const SignInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(8, "Password must have at least 8 characters"),
});

export const Register = () => {
  const signUpForm = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const signInForm = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSignUpSubmit = (values: z.infer<typeof SignUpSchema>) => {
    console.log("Sign-Up Values:", values);
  };

  const onSignInSubmit = (values: z.infer<typeof SignInSchema>) => {
    console.log("Sign-In Values:", values);
  };

  return (
    <div className="flex justify-center items-center m-10 w-full">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <Tabs defaultValue="signIn" className="w-full">
          <TabsList>
            <TabsTrigger className="" value="signIn">Sign In</TabsTrigger>
            <TabsTrigger value="signUp">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signIn">
            <form onSubmit={signInForm.handleSubmit(onSignInSubmit)} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="mail@example.com"
                  {...signInForm.register("email")}
                />
                {signInForm.formState.errors.email && (
                  <p className="text-red-600 text-sm">{signInForm.formState.errors.email.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...signInForm.register("password")}
                />
                {signInForm.formState.errors.password && (
                  <p className="text-red-600 text-sm">{signInForm.formState.errors.password.message}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800"
              >
                Sign In
              </Button>
              <div className="flex items-center my-4">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="mx-2 text-gray-500">or</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>
              <Button
                type="button"
                className="w-full bg-red-500 text-white hover:bg-red-600"
              >
                Sign in with Google
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signUp">
            <form onSubmit={signUpForm.handleSubmit(onSignUpSubmit)} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <Input
                  id="username"
                  placeholder="johndoe"
                  {...signUpForm.register("username")}
                />
                {signUpForm.formState.errors.username && (
                  <p className="text-red-600 text-sm">{signUpForm.formState.errors.username.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="mail@example.com"
                  {...signUpForm.register("email")}
                />
                {signUpForm.formState.errors.email && (
                  <p className="text-red-600 text-sm">{signUpForm.formState.errors.email.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...signUpForm.register("password")}
                />
                {signUpForm.formState.errors.password && (
                  <p className="text-red-600 text-sm">{signUpForm.formState.errors.password.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  {...signUpForm.register("confirmPassword")}
                />
                {signUpForm.formState.errors.confirmPassword && (
                  <p className="text-red-600 text-sm">{signUpForm.formState.errors.confirmPassword.message}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800"
              >
                Sign Up
              </Button>
              <div className="flex items-center my-4">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="mx-2 text-gray-500">or</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>
              <Button
                type="button"
                className="w-full bg-red-500 text-white hover:bg-red-600"
              >
                Sign in with Google
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Register;
