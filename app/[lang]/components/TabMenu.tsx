import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import GsapMagnetic from "./Gsap";
const menuItems = [
  {
    title: "work",
    href: "/work",
  },
  {
    title: "about",
    href: "/about",
  },
  {
    title: "contact",
    href: "/contact",
  },
  {
    title: "blog",
    href: "/blog",
  },
];
const MenuItems = ({ lang, navigation }: any) => {
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
            <Link href={`/${lang}${el.href}`}>{navigation[el.title]}</Link>
          </li>
        </GsapMagnetic>
      ))}
    </ul>
  );
};

export default MenuItems;
