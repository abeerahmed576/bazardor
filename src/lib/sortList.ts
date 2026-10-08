import { TSortBy } from "@/components/category/CategoryProductList";
import { IProduct } from "@/types/Product.type";

const sortList = (sortBy: TSortBy, list: IProduct[]) => {
  const toSort = [...list];
  if (sortBy === "lth") toSort.sort((a, b) => a.today - b.today);
  else if (sortBy === "htl") toSort.sort((a, b) => b.today - a.today);

  return toSort;
};

export default sortList;
