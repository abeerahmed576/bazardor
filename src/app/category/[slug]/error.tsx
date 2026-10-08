"use client";

function Error() {
  return (
    <div className="mt-10 max-w-7xl mx-auto p-10 md:p-30 space-y-8 text-center bg-white-off rounded-2xl">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold uppercase">অপ্রত্যাশিত সমস্যা</h1>
        <p className="text-lg text-foreground-light">
          দুঃখিত। ক্যাটেগরির পণ্যগুলো সংগ্রহে সমস্যা হয়েছে
        </p>
      </div>
      <button className="w-fit px-10 py-6 sm:py-5 text-white btn bg-primary rounded-lg">
        আবার চেষ্টা করুন
      </button>
    </div>
  );
}

export default Error;
