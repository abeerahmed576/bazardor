"use client";

import { authClient } from "@/utils/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignout = async () => {
    const { data, error } = await authClient.signOut({
      callbackURL: "/",
    });

    if (data) {
      toast.success("সাইন আউট সফল হয়েছে!");
      redirect("/");
    }

    if (error) {
      toast.error("কিছু একটা সমস্যা হয়েছে!");
    }
  };

  return (
    <main className="py-5 sm:pt-30 flex-1 bg-background-body space-y-6">
      <section className="sm:w-full space-y-5 max-w-lg mx-4 sm:mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">আমার প্রোফাইল</h2>
            <p className="text-foreground-light">
              আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন
            </p>
          </div>
          <Link href="/profile/edit">
            <button className="btn text-white bg-primary rounded-lg">
              🖉 ইডিট
            </button>
          </Link>
        </div>
        <div className="p-3 sm:p-5 bg-white-main rounded-2xl flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-5">
            <div className="p-2 w-9 sm:w-15 overflow-hidden rounded-xl">
              {user?.image ? (
                <Image
                  src={user?.image as string}
                  alt="User Avatar"
                  width={70}
                  height={70}
                />
              ) : (
                <span>{user?.name[0]}</span>
              )}
            </div>
            <div>
              <h2 className="font-semibold text-lg sm:text-2xl">
                {user?.name}
              </h2>
              <p className="text-xs sm:text-base">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleSignout}
            className="text-[13px] sm:text-base pt-1 px-2 btn btn-outline text-red-500 border-red-500"
          >
            ↩ সাইন আউট
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
