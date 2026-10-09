import CategoryProductList from "@/components/category/CategoryProductList";
import getData from "@/lib/getData";
import numToBn from "@/lib/numToBn";
import { IProduct } from "@/types/Product.type";

interface IProductsSection {
  params: {
    slug: string;
  };
}

async function CategoryProducts({ params }: IProductsSection) {
  const { slug: category } = await params;
  const categoryProducts = await getData<IProduct[]>(
    `${process.env.BAZARDOR_DATA_URL}/products?category=${category}`,
  );
  const currentCategoryName = categoryProducts[0].categoryNameBn;
  const currentCategoryIcon = categoryProducts[0].categoryIcon;

  return (
    <main className="min-h-[80vh] bg-background-body py-8">
      <section className="space-y-5 max-w-7xl mx-auto">
        <div className="px-3 py-5 bg-white-main rounded-2xl border border-gray-300 flex items-center gap-2">
          <span className="text-4xl">{currentCategoryIcon}</span>
          <div>
            <h2 className="font-extrabold text-3xl">{currentCategoryName}</h2>
            <p className="text-foreground-light">
              {numToBn(categoryProducts.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        <CategoryProductList list={categoryProducts} />
      </section>
    </main>
  );
}

export default CategoryProducts;
