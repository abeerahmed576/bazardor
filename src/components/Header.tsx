import Image from "next/image";
import Link from "next/link";
import TodaysDate from "./shared/TodaysDate";

function Header() {
  return (
    <header className="py-3 border-b border-b-white-off">
      <div className="max-w-7xl sm:mx-auto mx-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="w-fit bg-primary p-2.5 rounded-xl">
            <Image
              className="w-6 h-6 rounded-2xl"
              src="/logo-icon.png"
              alt="bangla news 24 logo"
              height={10}
              width={10}
            />
          </Link>
          <div className="">
            <h1 className="text-lg sm:text-xl font-semibold">বাজার দর</h1>
            <TodaysDate styles="text-xs sm:text-sm" />
          </div>
        </div>
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
      </div>
    </header>
  );
}

export default Header;
