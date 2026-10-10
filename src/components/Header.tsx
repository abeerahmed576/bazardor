import Image from "next/image";
import Link from "next/link";
import TodaysDate from "./shared/TodaysDate";

function Header() {
  return (
    <header className="py-3 border-b border-b-white-off">
      <div className="max-w-7xl xl:mx-auto mx-3 flex justify-between items-center">
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
        {/* <div className="ms-auto flex items-center gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm gap-2 sm:btn-md"
              aria-label="ব্যবহারকারীর মেনু"
            >
              <span className="avatar avatar-placeholder">
                <span className="w-7 sm:w-9">
                  <span>a</span>
                </span>
              </span>
              <span className="hidden max-w-32 truncate text-sm font-medium sm:inline">
                asdf
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
                <span className="block truncate">asdf</span>
                <span className="block truncate">asdf@email.com</span>
              </li>
              <li>
                <a href="/profile">👤 আমার প্রোফাইল</a>
              </li>
              <li>
                <button type="button" className="text-red-500">
                  ↩︎ সাইন আউট
                </button>
              </li>
            </ul>
          </div>
        </div> */}
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
