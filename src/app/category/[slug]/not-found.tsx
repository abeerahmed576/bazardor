"use client";

import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center bg-background-body space-y-6 text-center">
      <div className="space-y-2">
        <h1 className="text-4xl text-primary font-bold ">
          ৪০৪ - খুঁজে পাওয়া যায়নি
        </h1>
        <p className="text-lg text-foreground-light">
          আপনি যে ক্যাটেগরির পণ্য খুঁজছেন, সেটি বর্তমানে খুঁজে পাওয়া যাচ্ছে না।
        </p>
      </div>
      <Link href="/">
        <button className="w-fit px-10 py-6 sm:py-5 text-white btn bg-primary rounded-lg">
          হোমপেজে ফিরে যান
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
