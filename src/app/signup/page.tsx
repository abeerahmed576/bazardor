"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FieldError, Input, Label, TextField } from "@heroui/react";
import { authClient } from "@/utils/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export function SignUpPage() {
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("সাইন ইন সফল হয়েছে!");
      redirect("/");
    }

    if (error) {
      if (error.message?.includes("User already exists"))
        toast.error("ইউজার ইতোমধ্যে আছে! ভিন্ন ই-মেইল ব্যবহার করুন।");
      else toast.error("কিছু একটা সমস্যা হয়েছে!");
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <main className="space-y-5 py-5 sm:pt-10 flex-1 bg-background-body">
      <section className="sm:w-full space-y-5 max-w-lg mx-4 sm:mx-auto flex flex-col">
        <div className="text-center">
          <h2 className="text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h2>
          <p className="text-foreground-light">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন
          </p>
        </div>
        <form
          className="space-y-3 p-5 bg-white-main rounded-2xl"
          onSubmit={handleSubmit}
        >
          <fieldset className="space-y-2 fieldset rounded-2xl">
            <TextField
              isRequired
              name="name"
              type="text"
              validate={(value) => {
                if (!value) {
                  return "আপনার নাম লিখুন";
                }

                return null;
              }}
            >
              <Label className="text-base">নাম</Label>
              <Input
                className="input rounded-lg w-full"
                placeholder="যেমনঃ রহিম উদ্দিন"
              />
              <FieldError className="text-red-500" />
            </TextField>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "ই-মেইল অ্যাড্রেস সঠিকভাবে লিখুন";
                }

                return null;
              }}
            >
              <Label className="text-base">ই-মেইল</Label>
              <Input
                className="input rounded-lg w-full"
                placeholder="you@example.com"
              />
              <FieldError className="text-red-500" />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
                }

                return null;
              }}
            >
              <Label className="text-base">পাসওয়ার্ড</Label>
              <Input
                className="input rounded-lg w-full"
                placeholder="কমপক্ষে ৮ অক্ষর"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FieldError className="text-red-500" />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password-confirm"
              type="password"
              validate={(value) => {
                if (!value) {
                  return "পাসওয়ার্ড নিশ্চিত করুন";
                }

                if (value !== password) {
                  return "পাসওয়ার্ড দুটি মিলছে না।";
                }

                return null;
              }}
            >
              <Label className="text-base">পাসওয়ার্ড নিশ্চিত করুন</Label>
              <Input
                className="input rounded-lg w-full"
                placeholder="আবার লিখুন"
              />
              <FieldError className="text-red-500" />
            </TextField>

            <button
              type="submit"
              className="btn py-5 text-white text-base bg-primary rounded-lg"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </fieldset>
          <div className="flex items-center gap-3">
            <div className="h-0.5 flex-1 bg-gray-200"></div>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              অথবা
            </span>
            <div className="h-0.5 flex-1 bg-gray-200"></div>
          </div>
          <button
            onClick={handleGoogleSignIn}
            className="w-full py-5 text-base btn btn-outline rounded-lg border-gray-200"
          >
            Google দিয়ে চালিয়ে যান
          </button>
          <div className="text-center">
            অ্যাকাউন্ট আছে?{" "}
            <Link href="/signin" className="text-primary">
              সাইন ইন করুন
            </Link>
          </div>
        </form>
        <Link href="/" className="text-foreground-light text-center">
          ← হোম পেজে ফিরে যান
        </Link>
      </section>
    </main>
  );
}

export default SignUpPage;
