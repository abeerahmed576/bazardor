import numToBn from "@/lib/numToBn";
import units from "@/lib/unitToBn";
import { IProduct } from "@/types/Product.type";
import Link from "next/link";
import ChangePct from "./ChangePct";

function ProductCard({ product }: { product: IProduct }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white-main rounded-2xl card-xl shadow-sm">
        <div className="p-4 space-y-4">
          <div className="flex items-center gap-2">
            <span className="p-3 bg-white-off text-2xl rounded-2xl">
              {product.image}
            </span>
            <div>
              <h2 className="font-medium text-xl">{product.nameBn}</h2>
              <p>প্রতি {units[product.unit]}</p>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p>আজকের দাম</p>
              <p>
                <span className="text-2xl font-extrabold">
                  {numToBn(product.today)}
                </span>{" "}
                টাকা
              </p>
            </div>
            <span className="px-2 py-1 bg-white-off rounded-full">
              <ChangePct dir={product.change.dir} pct={product.change.pct} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
