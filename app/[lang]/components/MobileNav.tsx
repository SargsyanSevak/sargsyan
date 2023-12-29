import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react"; // Import useEffect and useRef
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

const MobileNav = ({ lang, navigation, setOpenNav }: any) => {
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to handle clicks outside the mobile menu
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileNavRef.current &&
        !(mobileNavRef.current as any).contains(event.target)
      ) {
        setOpenNav(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setOpenNav]);

  return (
    <div
      ref={mobileNavRef} // Set the ref for the mobile menu container
      className="absolute top-20 right-0 w-[300px] min-h-44 bg-white dark:bg-[#133B5C] shadow-2xl rounded-[24px] p-4"
    >
      <ul className="flex flex-col justify-center items-center gap-2 w-full h-full ">
        {menuItems.map((el: any) => (
          <GsapMagnetic key={el.title}>
            <li
              className={`${
                pathname.includes(el.href)
                  ? "bg-gray-100 dark:bg-[#1E5F74] rounded-[24px] w-full text-center"
                  : ""
              } py-[10px] px-6`}
            >
              <Link
                href={`/${lang}${el.href}`}
                onClick={() => setOpenNav(false)}
                className="text-[20px] dark:text-white"
              >
                {navigation[el.title]}
              </Link>
            </li>
          </GsapMagnetic>
        ))}
      </ul>
      <div className="pb-4 justify-center items-center">
        <LocaleSwitcher desktopView={false} />
      </div>
    </div>
  );
};

export default MobileNav;
