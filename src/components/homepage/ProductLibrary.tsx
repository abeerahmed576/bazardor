import getData from "@/lib/getData";
import numToBn from "@/lib/numToBn";
import { IProduct } from "@/types/Product.type";
import ProductCard from "../shared/ProductCard";
import { JSX, Suspense } from "react";

interface IProductsSection {
  products: IProduct[];
  title: string;
  dir?: "up" | "down";
  id?: string;
}

function ProductsSection({ products, title, dir, id }: IProductsSection) {
  let dirIcon = <span></span>;

  if (dir === "up") dirIcon = <span className="text-red-600">▲</span>;
  else if (dir === "down") dirIcon = <span className="text-green-600">▼</span>;

  return (
    <section
      id={`${id ? id : ""}`}
      className="mt-10 space-y-3 max-w-7xl mx-auto"
    >
      <h2 className="text-2xl font-semibold">
        {dirIcon} {title}
      </h2>

      <p className={`text-foreground-light ${dir ? "hidden" : ""}`}>
        মোট {numToBn(products.length)}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

async function ProductLibrary() {
  const allProducts = await getData<IProduct[]>(
    `${process.env.BAZARDOR_DATA_URL}/products`,
  ).catch(() => null);

  let top6UppedProducts: IProduct[] = [];
  let top6LoweredProducts: IProduct[] = [];

  if (allProducts) {
    top6UppedProducts = allProducts
      .filter((products) => products.change.dir === "up")
      .sort((a, b) => b.change.pct - a.change.pct)
      .slice(0, 6);
    top6LoweredProducts = allProducts
      .filter((products) => products.change.dir === "down")
      .sort((a, b) => a.change.pct - b.change.pct)
      .slice(0, 6);
  }

  const jsx = allProducts ? (
    <div className="mx-3 xl:mx-0">
      <ProductsSection
        products={top6UppedProducts}
        title="আজকে দাম বেড়েছে"
        dir="up"
      />
      <ProductsSection
        products={top6LoweredProducts}
        title="আজকে দাম কমেছে"
        dir="down"
      />
      <ProductsSection
        id="all-products"
        products={allProducts}
        title="সব পণ্য"
      />
    </div>
  ) : (
    <div className="mt-10 max-w-7xl mx-4 xl:mx-auto p-10 md:p-30 space-y-8 text-center bg-white-off rounded-2xl">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold uppercase">অপ্রত্যাশিত সমস্যা</h1>
        <p className="text-lg text-foreground-light">
          দুঃখিত। বাজারদর তথ্য সংগ্রহে সমস্যা হয়েছে।
        </p>
      </div>
      <button className="w-fit px-10 py-6 sm:py-5 text-white btn bg-primary rounded-lg">
        আবার চেষ্টা করুন
      </button>
    </div>
  );

  return (
    <Suspense
      fallback={
        <div className="space-x-3 my-30 text-center">
          <span className="mb-2 loading loading-spinner"></span>
          <span className="text-2xl">তথ্য সংগ্রহ করা হচ্ছে...</span>
        </div>
      }
    >
      {jsx}
    </Suspense>
  );
}

export default ProductLibrary;
