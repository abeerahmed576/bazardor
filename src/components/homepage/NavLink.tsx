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
    <li>
      <Link
        href={`/category/${category.slug}`}
        className={`btn btn-ghost rounded-lg ${`/category/${category.slug}` === currentPath ? "text-white-main bg-primary" : ""}`}
      >
        <span>{category.icon}</span>
        {category.nameBn}
      </Link>
    </li>
  );
}

export default NavLink;
