import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react"; // Import useEffect and useRef
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
];

const DropDown = ({ lang, openDropDown, toggleDropDown }: any) => {
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileNavRef.current &&
        !(mobileNavRef.current as any).contains(event.target)
      ) {
        toggleDropDown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openDropDown]);

  return (
    <>
      {openDropDown && (
        <div
          ref={mobileNavRef} // Set the ref for the mobile menu container
          className="absolute top-20 right-0 w-[100px] min-h-fit bg-white dark:bg-[#133B5C] shadow-2xl rounded-[24px] py-6 px-4"
        >
          <div className="flex justify-center items-center">
            <LocaleSwitcher desktopView={true} lang={lang} />
          </div>
        </div>
      )}
    </>
  );
};

export default DropDown;
