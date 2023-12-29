import { usePathname } from "next/navigation";
import LocaleSwitcher from "./locale-switcher";
import Link from "next/link";
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
const MobileNav = ({ lang, navigation }: any) => {
  const pathname = usePathname();
  return (
    <div className="absolute top-20 right-0 w-[300px] min-h-44 bg-white shadow-2xl rounded-[24px] p-4">
      <ul className="flex flex-col justify-center items-center gap-4 w-full h-full ">
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
      <div className="pb-4 justify-center items-center">
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default MobileNav;
