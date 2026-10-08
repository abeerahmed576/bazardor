import getData from "@/lib/getData";
import numToBn from "@/lib/numToBn";
import units, { type Unit } from "@/lib/unitToBn";
import { Suspense } from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface IProduct {
  id: string;
  nameBn: string;
  unit: Unit;
  image: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
}

const Marquee = async () => {
  const products = await getData<IProduct[]>(
    `${process.env.BAJARDOR_DATA_URL}/products`,
  ).catch(() => null);

  const jsx = products ? (
    <div className="border-y border-y-white-off">
      <MarqueeText direction="right" duration={15}>
        {products.map((product) => (
          <div className="px-3 py-2 border-l border-l-white-off">
            <div className="space-x-2">
              <span>{product.image}</span>
              <span className="font-medium">{product.nameBn}</span>
              <span>{`${numToBn(product.today)} টাকা/${units[product.unit]}`}</span>
              {product.change.dir === "up" ? (
                <span className="text-red-600">{`▲ ${numToBn(Math.abs(product.change.pct))}%`}</span>
              ) : (
                <span className="text-green-600">{`▼ ${numToBn(Math.abs(product.change.pct))}%`}</span>
              )}
            </div>
          </div>
        ))}
      </MarqueeText>
    </div>
  ) : (
    <div className="py-2 text-xl font-medium text-center border-y border-y-white-off">
      দুঃখিত। তথ্য সংগ্রহ ব্যর্থ হয়েছে
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
