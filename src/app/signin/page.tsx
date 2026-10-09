"use client";

import TextField from "@/components/shared/TextField";
import Link from "next/link";

// import { authClient } from "@/lib/auth-client";
// import toast from "react-hot-toast";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    console.log(user);

    // const { data, error } = await authClient.signIn.email({
    //   ...user,
    //   callbackURL: "/",
    // });

    // if (data) {
    //   toast.success("Sign In successfull!");
    //   console.log(data);
    // }

    // if (error) {
    //   toast.error("Something went error!");
    //   console.log(error);
    // }
  };

  // const handleGoogleSignIn = async () => {
  //   await authClient.signIn.social({
  //     provider: "google",
  //   });
  // };

  // const handleGithubSignIn = async () => {
  //   await authClient.signIn.social({
  //     provider: "github",
  //   });
  // };

  return (
    <main className="space-y-5 py-10 bg-background-body flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">সাইন ইন</h2>
        <p className="text-foreground-light">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="space-y-3 sm:w-md mx-3 sm:mx-0 p-5 bg-white-main rounded-2xl flex flex-col"
      >
        <fieldset className="space-y-2 fieldset rounded-2xl">
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
            placeholder="পাসওয়ার্ড"
          />

          <button
            type="submit"
            className="btn py-5 text-white bg-primary rounded-lg"
          >
            সাইন ইন
          </button>
        </fieldset>
        <div className="text-center">
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/signup" className="text-primary">
            সাইন আপ করুন
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

export default SignInPage;
