"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface ICategory {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

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
