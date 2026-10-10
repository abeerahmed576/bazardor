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
    <div className="flex flex-col gap-4">
      {/* <div className="p-4 w-full bg-white-main text-end rounded-2xl">
        <div>
          <span className="mr-2">সাজান</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as TSortBy)}
            className="p-1 w-full bg-white max-w-30 rounded-lg border-2 border-gray-300"
          >
            <option value="default">ডিফল্ট</option>
            <option value="lth">দামঃ ছোট থেকে বড়</option>
            <option value="htl">দামঃ বড় থেকে ছোট</option>
          </select>
        </div>
      </div> */}
      <div className="flex flex-wrap justify-between gap-2">
        <p>মোট {numToBn(list.length)}টি পণ্য দেখানো হচ্ছে</p>
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2">
            সাজান
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as TSortBy)}
              id="sort-products"
              className="p-2 bg-white border border-mist-400 rounded-lg"
            >
              <option value="default">ডিফল্ট</option>
              <option value="lth">দাম: কম থেকে বেশি</option>
              <option value="htl">দাম: বেশি থেকে কম</option>
            </select>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {sortedList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryProductList;
