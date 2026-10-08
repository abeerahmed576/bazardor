"use client";

import { ICategory } from "@/types/Category.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  category: ICategory;
}

function NavLink({ category }: NavLinkProps) {
  const currentPath = usePathname();

  return (
    <div
      className={`space-x-1 px-4 py-2 rounded-xl ${`/category/${category.slug}` === currentPath ? "bg-primary" : ""}`}
    >
      <span>{category.icon}</span>
      <Link
        href={`/category/${category.slug}`}
        className={`${`/category/${category.slug}` === currentPath ? "text-white-main" : ""}`}
      >
        {category.nameBn}
      </Link>
    </div>
  );
}

export default NavLink;
