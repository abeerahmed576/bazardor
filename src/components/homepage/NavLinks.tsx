import getData from "@/lib/getData";
import NavLink from "./NavLink";
import { ICategory } from "@/types/Category.type";

async function NavLinks() {
  const categories = await getData<ICategory[]>(
    `${process.env.BAZARDOR_DATA_URL}/categories`,
  ).catch(() => null);

  return categories ? (
    <nav className="w-full max-w-7xl xl:mx-auto py-2">
      <ul className="flex items-center gap-3 overflow-x-auto">
        {categories.map((category) => (
          <NavLink key={category.id} category={category} />
        ))}
      </ul>
    </nav>
  ) : (
    <div className="my-2 max-w-7xl mx-auto font-medium">
      দুঃখিত। ক্যাটেগরিগুলো সংগ্রহ করা যায়নি।
    </div>
  );
}

export default NavLinks;
