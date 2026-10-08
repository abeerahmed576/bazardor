import Image from "next/image";
import Link from "next/link";
import TodaysDate from "./shared/TodaysDate";

function Header() {
  return (
    <header className="py-3 border-b border-b-white-off">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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
            <h1 className="text-xl font-semibold">বাজার দর</h1>
            <TodaysDate styles="text-sm" />
          </div>
        </div>
        <div className="space-x-2">
          <button className="btn px-4 py-3 rounded-lg font-semibold btn-ghost">
            সাইন ইন
          </button>
          <Link href="/signup">
            <button className="btn px-4 py-3 rounded-lg font-semibold text-white bg-primary">
              সাইন আপ
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
