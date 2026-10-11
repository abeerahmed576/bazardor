"use client";

import { TextField, Input, Label, FieldError } from "@heroui/react";
import Link from "next/link";

import { authClient } from "@/utils/auth-client";
import toast from "react-hot-toast";

const SignInPage = () => {
  const handleSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("সাইন ইন সফল হয়েছে!");
    }

    if (error) {
      toast.error("ভুল ই-মেইল অথবা পাসওয়ার্ড!");
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
          <h2 className="text-2xl font-bold">সাইন ইন</h2>
          <p className="text-foreground-light">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-3 p-5 bg-white-main rounded-2xl"
        >
          <fieldset className="space-y-2 fieldset rounded-2xl">
            <TextField
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
              />
              <FieldError className="text-red-500" />
            </TextField>

            <button
              type="submit"
              className="btn py-5 text-white text-base bg-primary rounded-lg"
            >
              সাইন ইন
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
            <img className="size-6" src="/google-icon.png" alt="google logo" />
            Google দিয়ে চালিয়ে যান
          </button>
          <div className="text-center">
            অ্যাকাউন্ট নেই?{" "}
            <Link href="/signup" className="text-primary">
              সাইন আপ করুন
            </Link>
          </div>
        </form>

        <Link href="/" className="text-foreground-light text-center">
          ← হোম পেজে ফিরে যান
        </Link>
      </section>
    </main>
  );
};

export default SignInPage;
