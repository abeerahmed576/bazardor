"use client";

import Link from "next/link";
// import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";

import { FieldError, Form, Input, Label, TextField } from "@heroui/react";

export function SignUpPage() {
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user: Record<string, string> = {};

    formData.forEach((value, key) => {
      user[key] = value.toString();
    });

    //   const { data, error } = await authClient.signUp.email({
    //     ...user,
    //     callbackURL: "/",
    //   });

    //   if (data) {
    //     console.log(data);
    //     redirect("/");
    //   }

    //   if (error) {
    //     console.log(error);
    //   }
    // };

    // const handleGoogleSignIn = async () => {
    //   await authClient.signIn.social({
    //     provider: "google",
    //   });
    // };

    // const handleGithubSignIn = async () => {
    //   await authClient.signIn.social({
    //     provider: "github",
    //   });
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
        <Form
          className="space-y-3 p-5 bg-white-main rounded-2xl"
          onSubmit={onSubmit}
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
        </Form>
        <Link href="/" className="text-foreground-light text-center">
          ← হোম পেজে ফিরে যান
        </Link>
      </section>
    </main>
  );
}

// const SignUpPage = () => {
//   const validateEmail = (form: HTMLFormElement) => {
//     const emailInput = form.elements.namedItem("email") as HTMLInputElement;

//     if (!emailInput.value) {
//       emailInput.setCustomValidity("ই-মেইল  দিন");
//       return;
//     }
//   };

//   const validatePassword = (form: HTMLFormElement) => {
//     const passwordInput = form.elements.namedItem(
//       "password",
//     ) as HTMLInputElement;

//     if (!passwordInput.value) {
//       passwordInput.setCustomValidity("কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড দিন");
//       return;
//     }

//     passwordInput.setCustomValidity(
//       passwordInput.value.length < passwordInput.minLength
//         ? ""
//         : `পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে। আপনার পাসওয়ার্ড এখন ${numToBn(passwordInput.value.length)} অক্ষরের`,
//     );
//   };

//   const validatePasswordConfirmation = (form: HTMLFormElement) => {
//     const passwordInput = form.elements.namedItem(
//       "password",
//     ) as HTMLInputElement;
//     const confirmationInput = form.elements.namedItem(
//       "password-confirm",
//     ) as HTMLInputElement;

//     if (!confirmationInput.value) {
//       confirmationInput.setCustomValidity("");
//       return;
//     }

//     confirmationInput.setCustomValidity(
//       passwordInput.value === confirmationInput.value
//         ? ""
//         : "পাসওয়ার্ড দুটি মিলছে না।",
//     );
//   };

//   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const form = e.currentTarget;
//     validateEmail(form);
//     validatePasswordConfirmation(form);

//     if (!form.reportValidity()) return;

//     const formData = new FormData(form);
//     const user = {
//       name: String(formData.get("name") ?? "").trim(),
//       email: String(formData.get("email") ?? "").trim(),
//       password: String(formData.get("password") ?? ""),
//     };

//     // const { data, error } = await authClient.signUp.email({
//     //   ...user,
//     //   callbackURL: "/",
//     // });

//     // if (data) {
//     //   console.log(data);
//     //   redirect("/");
//     // }

//     // if (error) {
//     //   console.log(error);
//     // }
//     // };

//     //   const handleGoogleSignIn = async () => {
//     //  await authClient.signIn.social({
//     //       provider: "google",
//     //     });
//     //   };

//     //   const handleGithubSignIn = async () => {
//     //  await authClient.signIn.social({
//     //       provider: "github",
//     //     });
//   };

//   return (
//     <main className="space-y-5 py-10 bg-background-body flex flex-col items-center justify-center">
//       <div className="text-center">
//         <h2 className="text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h2>
//         <p className="text-foreground-light">
//           বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন
//         </p>
//       </div>
//       <form
//         onSubmit={onSubmit}
//         className="space-y-3 sm:w-md mx-3 sm:mx-0 p-5 bg-white-main rounded-2xl"
//       >
//         <fieldset className="space-y-2 fieldset rounded-2xl">
//           <TextField
//             label="নাম"
//             name="name"
//             type="text"
//             placeholder="যেমনঃ রহিম উদ্দিন"
//             required
//             minLength={2}
//             autoComplete="name"
//           />

//           <TextField
//             label="ইমেইল"
//             name="email"
//             type="email"
//             placeholder="you@example.com"
//             required
//             autoComplete="email"
//             onChange={(e) => validateEmail(e.currentTarget.form!)}
//           />

//           <TextField
//             label="পাসওয়ার্ড"
//             name="password"
//             type="password"
//             placeholder="কমপক্ষে ৮ অক্ষর"
//             required
//             minLength={8}
//             autoComplete="new-password"
//             onChange={(e) => validatePassword(e.currentTarget.form!)}
//           />

//           <TextField
//             label="পাসওয়ার্ড নিশ্চিত করুন"
//             name="password-confirm"
//             type="password"
//             placeholder="আবার লিখুন"
//             required
//             minLength={8}
//             autoComplete="new-password"
//             onChange={(e) =>
//               validatePasswordConfirmation(e.currentTarget.form!)
//             }
//           />

//           <button
//             type="submit"
//             className="btn py-5 text-white bg-primary rounded-lg"
//           >
//             অ্যাকাউন্ট তৈরি করুন
//           </button>
//         </fieldset>
//         <div className="text-center">
//           অ্যাকাউন্ট আছে?{" "}
//           <Link href="/signin" className="text-primary">
//             সাইন ইন করুন
//           </Link>
//         </div>
//       </form>

//       <Link href="/" className="text-foreground-light text-sm">
//         ← হোম পেজে ফিরে যান
//       </Link>

//       {/* <button onClick={handleGoogleSignIn} className="btn ">Sign In With Google</button>
//       <button onClick={handleGithubSignIn} className="btn ">Sign In With Github</button> */}
//     </main>
//   );
// };

export default SignUpPage;
