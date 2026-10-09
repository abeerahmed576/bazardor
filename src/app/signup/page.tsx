"use client";

import TextField from "@/components/shared/TextField";
import Link from "next/link";
// import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    // const { data, error } = await authClient.signUp.email({
    //   ...user,
    //   callbackURL: "/",
    // });

    // if (data) {
    //   console.log(data);
    //   redirect("/");
    // }

    // if (error) {
    //   console.log(error);
    // }
    // };

    //   const handleGoogleSignIn = async () => {
    //  await authClient.signIn.social({
    //       provider: "google",
    //     });
    //   };

    //   const handleGithubSignIn = async () => {
    //  await authClient.signIn.social({
    //       provider: "github",
    //     });
  };

  return (
    <main className="space-y-5 py-10 bg-background-body flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h2>
        <p className="text-foreground-light">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="space-y-3 sm:w-md mx-3 sm:mx-0 p-5 bg-white-main rounded-2xl"
      >
        <fieldset className="space-y-2 fieldset rounded-2xl">
          <TextField
            label="নাম"
            name="name"
            type="text"
            placeholder="যেমনঃ রহিম উদ্দিন"
          />

          <TextField
            label="ইমেইল"
            name="email"
            type="email"
            placeholder="you@example.com"
          />

          <TextField
            label="পাসওয়ার্ড"
            name="password"
            type="password"
            placeholder="কমপক্ষে ৮ অক্ষর"
          />

          <TextField
            label="পাসওয়ার্ড নিশ্চিত করুন"
            name="password-confirm"
            type="password"
            placeholder="আবার লিখুন"
          />

          <button
            type="submit"
            className="btn py-5 text-white bg-primary rounded-lg"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </fieldset>
        <div className="text-center">
          অ্যাকাউন্ট আছে?{" "}
          <Link href="/signin" className="text-primary">
            সাইন ইন করুন
          </Link>
        </div>
      </form>

      <Link href="/" className="text-foreground-light text-sm">
        ← হোম পেজে ফিরে যান
      </Link>

      {/* <button onClick={handleGoogleSignIn} className="btn ">Sign In With Google</button>
      <button onClick={handleGithubSignIn} className="btn ">Sign In With Github</button> */}
    </main>
  );
};

export default SignUpPage;
