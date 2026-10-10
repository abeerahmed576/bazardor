"use client";

function Error() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center bg-background-body space-y-6 text-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold uppercase">অপ্রত্যাশিত সমস্যা</h1>
        <p className="text-lg text-foreground-light">
          দুঃখিত। পণ্যের বিবরণ সংগ্রহে সমস্যা হয়েছে
        </p>
      </div>
      <button className="w-fit px-10 py-6 sm:py-5 text-white btn bg-primary rounded-lg">
        আবার চেষ্টা করুন
      </button>
    </div>
  );
}

export default Error;
