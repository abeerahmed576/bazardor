import getData from "@/lib/getData";
import { IProduct } from "@/types/Product.type";
import Link from "next/link";
import units from "@/lib/unitToBn";
import numToBn from "@/lib/numToBn";
import ChangePct from "@/components/shared/ChangePct";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type SlugProps = {
  params: Promise<{ slug: number }>;
};

export async function generateMetadata({
  params,
}: SlugProps): Promise<Metadata> {
  const { slug: id } = await params;
  const product = await getData<IProduct>(
    `${process.env.BAZARDOR_DATA_URL}/products/${id}`,
  );

  return {
    title: `${product.nameBn} এর আজকের দাম | বাজার দর`,
  };
}

function PriceCard({
  header,
  price,
  priceStyle,
  footer,
}: {
  header: string;
  price: string;
  priceStyle: string;
  footer: string;
}) {
  return (
    <div className="p-5 rounded-xl border border-base-300">
      <div className="">{header}</div>
      <div className={`stat-value text-2xl ${priceStyle}`}>
        {price}
        <span className="text-sm font-medium"> টাকা</span>
      </div>
      <div className="text-foreground-light">{footer}</div>
    </div>
  );
}

async function ProductsDetails({ params }: SlugProps) {
  const { slug: id } = await params;
  const product: IProduct | "404" = await getData<IProduct>(
    `${process.env.BAZARDOR_DATA_URL}/products/${id}`,
  ).catch((err) => err.message);

  if (product === "404") notFound();

  const sortedMarkets = product.markets.sort((a, b) => a.min - b.min);
  const lowestPrice = sortedMarkets[0].min;
  const highestPrice = sortedMarkets[sortedMarkets.length - 1].max;

  return (
    <main className="flex-1 bg-background-body">
      <div className="space-y-6 mx-auto max-w-7xl px-4 py-6">
        <nav aria-label="breadcrumb" className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link href="/">হোম</Link>
            </li>
            <li>
              <Link href={`/category/${product.category}`}>
                {product.categoryNameBn}
              </Link>
            </li>
            <li>{product.nameBn}</li>
          </ul>
        </nav>
        <header className="rounded-2xl border border-base-300 bg-white-main p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex justify-between gap-3">
              <span className="grid size-20 shrink-0 place-items-center rounded-2xl bg-white-off text-4xl">
                {product.image}
              </span>
              <div className="space-y-1 text-end sm:text-start">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  {product.nameBn}
                </h1>
                <p className="text-sm text-base-content/70">
                  প্রতি {units[product.unit]} · {product.categoryNameBn}
                </p>
                <p className="text-sm text-base-content/70">
                  গতকালের তুলনায় আজ দাম{" "}
                  <span className="font-semibold">
                    {product.change.dir === "down" ? "কমেছে" : "বেড়েছে"}
                  </span>{" "}
                  <span className="font-light">
                    {numToBn(Math.abs(product.change.pct))}%
                  </span>
                </p>
              </div>
            </div>
            <div className="rounded-box bg-white-off px-5 py-4 text-center">
              <p className="text-sm text-base-content/70">আজকের দাম</p>
              <p className="text-3xl font-bold">{numToBn(product.today)}</p>
              <p className="text-sm text-base-content/70">
                টাকা / {units[product.unit]}
              </p>
              <ChangePct dir={product.change.dir} pct={product.change.pct} />
            </div>
          </div>
        </header>
        <div className="rounded-2xl border border-base-300 bg-white-main p-5">
          <div className="flex flex-col gap-6">
            <section>
              <h2 className="mb-3 text-lg font-semibold">দামের সারসংক্ষেপ</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <PriceCard
                  header="সর্বনিম্ন দাম"
                  price={numToBn(lowestPrice)}
                  priceStyle="text-green-600"
                  footer="সবচেয়ে কম দামের বাজার"
                />
                <PriceCard
                  header="সর্বাধিক দাম"
                  price={numToBn(highestPrice)}
                  priceStyle="text-red-600"
                  footer="সবচেয়ে বেশি দামের বাজার"
                />
                <PriceCard
                  header="গড় দাম"
                  price={numToBn(Math.floor((lowestPrice + highestPrice) / 2))}
                  priceStyle="text-green-700"
                  footer={`প্রতি ${units[product.unit]} এর হিসাব`}
                />
              </div>
            </section>
            <section>
              <h2 className="mb-3 text-lg font-semibold">
                বাজারভিত্তিক আজকের দাম
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-base-300 bg-base-100">
                <table className="table table-zebra bg-white-main">
                  <thead>
                    <tr>
                      <th>বাজার</th>
                      <th>বিভাগ</th>
                      <th className="text-right">সর্বনিম্ন</th>
                      <th className="text-right">সর্বাধিক</th>
                      <th className="text-right">গড়</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedMarkets.map((market, i) => (
                      <tr key={i}>
                        <td className="font-medium">{market.market}</td>
                        <td>{market.division}</td>
                        <td className="text-right font-light">
                          {numToBn(market.min)} টাকা
                        </td>
                        <td className="text-right font-light">
                          {numToBn(market.max)} টাকা
                        </td>
                        <td className="text-right font-bold">
                          {numToBn((market.min + market.max) / 2)} টাকা
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductsDetails;
