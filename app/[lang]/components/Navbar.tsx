"use client";
import Hamburger from "hamburger-react";
import Switcher from "./Switcher";
import GsapMagnetic from "./Gsap";
import MenuItems from "./TabMenu";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Navbar = ({ lang, navigation }: any) => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((cur) => !cur);
  };
  return (
    <div className="w-full h-20 rounded-lg mt-6 flex justify-between items-center px-4 sticky top-4 right-0 left-0 z-50">
      <Link href={`/${lang}`}>
        <GsapMagnetic>
          <div className="w-16 h-16 border-[0.5px] dark:border-0  rounded-full bg-[#f1f3f4] dark:bg-[#133B5C] shadow-2xl  flex justify-center items-center cursor-pointer">
            <img src="/main-logo.png" alt="logo" className="-mt-2 w-12 h-12" />
          </div>
        </GsapMagnetic>
      </Link>

      <div className="px-2 h-16 bg-[#EDEFF1] text-black dark:text-white dark:bg-[#133B5C] shadow-xl rounded-l-full rounded-r-full md:block hidden">
        <MenuItems lang={lang} navigation={navigation} />
      </div>
      <div className="flex items-center gap-6">
        <GsapMagnetic>
          <div className="w-16 h-16 border-[0.5px] dark:border-0 rounded-full bg-[#f1f3f4] dark:bg-[#133B5C] shadow-2xl">
            <Switcher />
          </div>
        </GsapMagnetic>
        {/* <GsapMagnetic>
          <div className="w-16 h-16 border-[0.5px] dark:border-0 rounded-full bg-[#f1f3f4] dark:bg-[#133B5C] shadow-2xl">
            <LanguageSwitcher />
          </div>
        </GsapMagnetic> */}
        <div className="md:hidden block relative">
          <GsapMagnetic>
            <div className="w-16 h-16 border-[0.5px] dark:border-0 rounded-full bg-[#f1f3f4] dark:bg-[#133B5C] shadow-2xl flex justify-center items-center">
              <Hamburger toggled={openNav} toggle={toggleNav} color="orange" />
            </div>
          </GsapMagnetic>
          {openNav && <MobileNav lang={lang} navigation={navigation} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
