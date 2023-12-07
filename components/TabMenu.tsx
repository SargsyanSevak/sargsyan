import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import GsapMagnetic from "./Gsap";
const menuItems = [
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];
const MenuItems = () => {
  const pathname = usePathname();
  return (
    <ul className="flex justify-center items-center gap-4 w-full h-full py-6">
      {menuItems.map((el: any) => (
        <GsapMagnetic key={el.title}>
          <li
            className={`${
              pathname.includes(el.href)
                ? "bg-gray-100 dark:bg-[#1E5F74] rounded-l-full rounded-r-full shadow-md"
                : ""
            } py-[14px] px-6`}
          >
            <Link href={el.href}>{el.title}</Link>
          </li>
        </GsapMagnetic>
      ))}
    </ul>
  );
};

export default MenuItems;
