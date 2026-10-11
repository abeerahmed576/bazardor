import CategoryProductList from "@/components/category/CategoryProductList";
import getData from "@/lib/getData";
import numToBn from "@/lib/numToBn";
import { IProduct } from "@/types/Product.type";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type SlugProps = {
  params: Promise<{ slug: number }>;
};

export async function generateMetadata({
  params,
}: SlugProps): Promise<Metadata> {
  const { slug: category } = await params;
  const categoryProducts = await getData<IProduct[]>(
    `${process.env.BAZARDOR_DATA_URL}/products?category=${category}`,
  );

  return {
    title: `${categoryProducts[0].categoryNameBn ? ` ${categoryProducts[0].categoryNameBn} এর আজকের দাম | বাজার দর` : "বাজার দর"}`,
  };
}

async function CategoryProducts({ params }: SlugProps) {
  const { slug: category } = await params;
  const categoryProducts: IProduct[] = await getData<IProduct[]>(
    `${process.env.BAZARDOR_DATA_URL}/products?category=${category}`,
  ).catch((err) => err.message);

  if (categoryProducts.length === 0) notFound();

  const currentCategoryName = categoryProducts[0].categoryNameBn;
  const currentCategoryIcon = categoryProducts[0].categoryIcon;

  return (
    <main className="flex-1 bg-background-body">
      <div className="w-full max-w-7xl mx-auto px-4 py-6 flex flex-col gap-6">
        <header className="space-x-3 p-5 bg-white-main rounded-2xl border border-gray-300 flex items-center gap-2">
          <span className="text-4xl">{currentCategoryIcon}</span>
          <div>
            <h2 className="font-extrabold text-3xl">{currentCategoryName}</h2>
            <p className="text-foreground-light">
              {numToBn(categoryProducts.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </header>

        <CategoryProductList list={categoryProducts} />
      </div>
    </main>
  );
}

export default CategoryProducts;
