// "use client";

import Image from "next/image";
import Link from "next/link";
import TodaysDate from "./shared/TodaysDate";
import NavLinks from "./homepage/NavLinks";
import UserInfo from "./UserInfo";

function Header() {
  return (
    <header className="bg-white-main sticky top-0 z-50">
      <div className="py-4 max-w-7xl xl:mx-auto mx-3 border-b border-b-white-off flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-fit bg-primary p-2.5 rounded-xl">
            <Image
              className="w-6 h-6 rounded-2xl"
              src="/logo-icon.png"
              alt="bangla news 24 logo"
              height={10}
              width={10}
            />
          </div>
          <div className="">
            <h1 className="text-lg sm:text-xl font-semibold">বাজার দর</h1>
            <TodaysDate styles="text-xs sm:text-sm" />
          </div>
        </Link>
        <UserInfo />
      </div>
      <NavLinks />
    </header>
  );
}

export default Header;
