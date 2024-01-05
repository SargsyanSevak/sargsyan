"use client";
import Hamburger from "hamburger-react";
import Switcher from "./Switcher";
import GsapMagnetic from "./Gsap";
import MenuItems from "./TabMenu";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileNav";
import DropDown from "./DropDown";
import { CiGlobe } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = ({ lang, navigation }: any) => {
  const [openNav, setOpenNav] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const toggleNav = () => {
    setOpenNav((cur) => !cur);
  };
  const toggleDropDown = () => {
    setOpenDropDown((cur: boolean) => !cur);
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

      <div className="px-2 h-16 bg-[#EDEFF1] text-black dark:text-white dark:bg-[#133B5C] shadow-xl rounded-l-full rounded-r-full lg:block hidden -mr-[140px]">
        <MenuItems lang={lang} navigation={navigation} />
      </div>
      <div className="flex items-center gap-6">
        <GsapMagnetic>
          <div className="w-16 h-16 border-[0.5px] dark:border-0 rounded-full bg-[#f1f3f4] dark:bg-[#133B5C] shadow-2xl">
            <Switcher />
          </div>
        </GsapMagnetic>
        <div className="lg:block hidden">
          <div
            className="px-6 h-12 border-[0.5px] dark:border-0 rounded-full bg-[#f1f3f4] dark:bg-[#133B5C] shadow-2xl flex justify-center items-center gap-4 cursor-pointer"
            onClick={toggleDropDown}
          >
            <IoMenuOutline fontSize={30} className="dark:text-white" />

            <CiGlobe fontSize={30} className="dark:text-white" />

            <DropDown
              lang={lang}
              openDropDown={openDropDown}
              toggleDropDown={toggleDropDown}
            />
          </div>
        </div>

        <div className="lg:hidden block relative">
          <GsapMagnetic>
            <div className="w-16 h-16 border-[0.5px] dark:border-0 rounded-full bg-[#f1f3f4] dark:bg-[#133B5C] shadow-2xl flex justify-center items-center">
              <Hamburger toggled={openNav} toggle={toggleNav} color="orange" />
            </div>
          </GsapMagnetic>
          {openNav && (
            <MobileNav
              lang={lang}
              navigation={navigation}
              setOpenNav={setOpenNav}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
