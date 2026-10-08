"use client";

import Link from "next/link";

function NotFound() {
  return (
    <div className="mt-10 max-w-7xl mx-auto p-10 md:p-30 space-y-8 text-center bg-white-off rounded-2xl">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold uppercase">
          ৪০৪ - খুঁজে পাওয়া যায়নি
        </h1>
        <p className="text-lg text-foreground-light">
          আপনি যে পেজটি খুঁজছেন, সেটি বর্তমানে খুঁজে পাওয়া যাচ্ছে না।
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
