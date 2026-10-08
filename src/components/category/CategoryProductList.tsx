"use client";

import numToBn from "@/lib/numToBn";
import ProductCard from "../shared/ProductCard";
import { useState } from "react";
import { IProduct } from "@/types/Product.type";
import sortList from "@/lib/sortList";

export type TSortBy = "default" | "lth" | "htl";

function CategoryProductList({ list }: { list: IProduct[] }) {
  const [sortBy, setSortBy] = useState<TSortBy>("default");

  const sortedList = sortList(sortBy, list);
  return (
    <div className="space-y-5">
      <p>মোট {numToBn(list.length)}টি পণ্য দেখানো হচ্ছে</p>
      <label className="w-full p-5 bg-white-main justify-end rounded-2xl flex items-center gap-2">
        <span>সাজান</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as TSortBy)}
          className="select w-fit max-w-40 rounded-xl"
        >
          <option value="default">ডিফল্ট</option>
          <option value="lth">দামঃ ছোট থেকে বড়</option>
          <option value="htl">দামঃ বড় থেকে ছোট</option>
        </select>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {sortedList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryProductList;
