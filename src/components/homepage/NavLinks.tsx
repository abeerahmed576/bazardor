import getData from "@/lib/getData";
import NavLink from "./NavLink";
import { ICategory } from "@/types/Category.type";

async function NavLinks() {
  const categories = await getData<ICategory[]>(
    `${process.env.BAJARDOR_DATA_URL}/categories`,
  ).catch(() => null);

  return categories ? (
    <div className="max-w-7xl sm:mx-auto flex gap-4 py-2">
      {categories.map((category) => (
        <NavLink key={category.id} category={category} />
      ))}
    </div>
  ) : (
    <div className="my-2 max-w-7xl mx-auto font-medium">
      দুঃখিত। ক্যাটেগরিগুলো সংগ্রহ করা যায়নি।
    </div>
  );
}

export default NavLinks;
