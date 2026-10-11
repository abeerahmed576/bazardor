"use client";

import { authClient } from "@/utils/auth-client";
// import { authClient } from "@/lib/auth-client";
import { TextField, Input, Label, FieldError } from "@heroui/react";
import { redirect } from "next/navigation";

function EditProfile() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
    };

    const { data, error } = await authClient.updateUser({
      ...newUserData,
    });

    if (data) {
      redirect("/profile");
    }

    if (error) {
      console.log(error);
    }
  };

  return (
    <main className="py-5 sm:pt-30 flex-1 bg-background-body">
      {/* <main className="min-h-[75vh] pt-15 sm:pt-25 pb-10 bg-background-body gap-2"> */}
      <section className="sm:w-full space-y-5 max-w-xl mx-4 sm:mx-auto">
        <div>
          <h2 className="text-2xl font-bold">আপডেট প্রোফাইল</h2>
          <p className="text-foreground-light">
            আপনার অ্যাকাউন্টের তথ্য এখানে আপডেট করুন
          </p>
        </div>

        <form
          onSubmit={handleUpdateProfile}
          className="p-5 bg-white-main rounded-2xl"
        >
          <fieldset className="fieldset rounded-box">
            <TextField
              name="name"
              type="text"
              validate={(value) => {
                if (!value) {
                  return "নতুন নাম লিখুন";
                }

                return null;
              }}
            >
              <Label className="text-base">নাম</Label>
              <Input className="input rounded-lg w-full" />
              <FieldError className="text-red-500" />
            </TextField>

            <button type="submit" className="btn text-white bg-primary mt-4 ">
              আপডেট
            </button>
          </fieldset>
        </form>
      </section>
    </main>
  );
}

export default EditProfile;
