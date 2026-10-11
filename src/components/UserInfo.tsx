"use client";

import { authClient } from "@/utils/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

function UserInfo() {
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
    <>
      {user ? (
        <div className="ms-auto flex items-center gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm gap-2 sm:btn-md"
              aria-label="ব্যবহারকারীর মেনু"
            >
              <span className="avatar avatar-placeholder">
                <span className="w-7 sm:w-9">
                  {user?.image ? (
                    <img
                      className="rounded-full"
                      alt="User Avatar"
                      src={user?.image as string}
                    />
                  ) : (
                    <span>{user?.name[0]}</span>
                  )}
                </span>
              </span>
              <span className="hidden max-w-32 truncate text-sm font-medium sm:inline">
                {user?.name.split(" ")[0]}
              </span>
              <span aria-hidden="true" className="text-xs opacity-60">
                ▾
              </span>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-2 w-64 rounded-xl border border-base-300 bg-white-main p-2 shadow-lg"
            >
              <li className="menu-title">
                <span className="block truncate">{user?.name}</span>
                <span className="block truncate">{user?.email}</span>
              </li>
              <li>
                <a href="/profile">👤 আমার প্রোফাইল</a>
              </li>
              <li>
                <button
                  onClick={handleSignout}
                  type="button"
                  className="text-red-500"
                >
                  ↩︎ সাইন আউট
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="space-x-2">
          <Link href="/signin">
            <button className="btn px-2 py-1 sm:px-4 sm:py-3 rounded-lg font-semibold btn-ghost">
              সাইন ইন
            </button>
          </Link>
          <Link href="/signup">
            <button className="btn px-2 py-1 sm:px-4 sm:py-3 rounded-lg font-semibold text-white bg-primary">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default UserInfo;
