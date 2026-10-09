"use client";

import TextField from "@/components/shared/TextField";
import Image from "next/image";
// import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
  // const { data: session } = authClient.useSession();
  // const user = session?.user;

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
    };

    // await authClient.updateUser({
    //     ...newUserData
    // })
  };

  return (
    <main className="space-y-5 pt-15 sm:pt-25 pb-10 bg-background-body gap-2">
      <section className="space-y-5 max-w-2xl sm:mx-auto mx-4">
        <div>
          <div>
            <h2 className="text-2xl font-bold">আমার প্রোফাইল</h2>
            <p className="text-foreground-light">
              আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন
            </p>
          </div>
        </div>
        <div className="p-3 sm:p-5 bg-white-main rounded-2xl flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-5">
            <div className="p-2 w-9 sm:w-15 rounded-xl">
              <Image src="/user.png" alt="User Avatar" width={70} height={70} />
            </div>
            <div>
              {/* <h2>{user?.name}</h2>
        <p>{user?.email}</p> */}
              <h2 className="font-semibold text-lg sm:text-[22px]">
                Rezwan Ahmed
              </h2>
              <p className="text-xs">rezwanahmed@gmail.com</p>
            </div>
          </div>
          <button className="text-[13px] sm:text-base pt-1 px-2 btn btn-outline text-red-500 border-red-500">
            ↩ সাইন আউট
          </button>
        </div>

        <form
          onSubmit={handleUpdateProfile}
          className="p-5 bg-white-main rounded-2xl"
        >
          <fieldset className="fieldset rounded-box">
            <TextField label="নাম" name="name" type="text" />

            <button type="submit" className="btn text-white bg-primary mt-4 ">
              আপডেট
            </button>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default ProfilePage;
