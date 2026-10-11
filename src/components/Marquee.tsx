import getData from "@/lib/getData";
import numToBn from "@/lib/numToBn";
import units, { type Unit } from "@/lib/unitToBn";
import { IProduct } from "@/types/Product.type";
import { Suspense } from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import ChangePct from "./shared/ChangePct";

const Marquee = async () => {
  const products = await getData<IProduct[]>(
    `${process.env.BAZARDOR_DATA_URL}/products`,
  ).catch(() => null);

  const jsx = products ? (
    <div className="border-y border-y-white-off">
      <MarqueeText direction="right" duration={8}>
        {products.map((product) => (
          <div className="px-3 py-2 border-l border-l-white-off">
            <div className="space-x-2">
              <span>{product.image}</span>
              <span className="font-medium">{product.nameBn}</span>
              <span className="font-light">{`${numToBn(product.today)} টাকা/${units[product.unit]}`}</span>
              <ChangePct dir={product.change.dir} pct={product.change.pct} />
            </div>
          </div>
        ))}
      </MarqueeText>
    </div>
  ) : (
    <div className="py-2 text-xl font-medium text-center border-y border-y-white-off">
      দুঃখিত। বাজারদর তথ্য সংগ্রহ ব্যর্থ হয়েছে
    </div>
  );

  return (
    <Suspense
      fallback={
        <div className="space-x-3 text-center">
          <span className="mb-2 loading loading-spinner"></span>
          <span className="text-2xl">তথ্য সংগ্রহ করা হচ্ছে...</span>
        </div>
      }
    >
      {jsx}
    </Suspense>
  );
};

export default Marquee;
