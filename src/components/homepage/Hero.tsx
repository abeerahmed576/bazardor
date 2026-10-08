import Image from "next/image";
import Link from "next/link";
import TodaysDate from "@/components/shared/TodaysDate";

function Hero() {
  return (
    <section
      className="
      bg-white-main rounded-2xl
      max-w-7xl w-11/12 sm:mx-auto mx-4 p-7
      flex flex-col sm:flex-row justify-between items-center gap-7"
    >
      <div className="space-y-7 text-center sm:text-start">
        <TodaysDate styles="w-fit px-3 py-1 text-primary bg-primary-shade rounded-full" />
        <h1
          className="
        text-2xl md:text-3xl lg:text-[2.7em]
        font-extrabold"
        >
          আজকের বাজারের দাম এক নজরে
        </h1>
        <p className="text-sm sm:text-lg text-foreground-light md:w-[65%]">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <Link href="/#all-products">
          <button className="w-70 sm:w-fit px-8 py-6 sm:py-5 text-white btn bg-primary rounded-lg">
            সব পণ্য দেখুন
          </button>
        </Link>
      </div>

      <Image
        className="xl:mr-10 h-50 w-60 sm:h-65 sm:w-75"
        src="/bazar-hero.png"
        alt="fitlog banner"
        loading="eager"
        width={200}
        height={200}
      />
    </section>
  );
}

export default Hero;
