"use client";
import React, { useState } from "react";
import Switcher from "./Switcher";
import GsapMagnetic from "./Gsap";
import MenuItems from "./TabMenu";
import Link from "next/link";
const Navbar = () => {
  const [changedMode, setIsChangedMode] = useState<boolean>(false);
  return (
    <div className="w-full h-20 rounded-lg mt-6 flex justify-between items-center px-4 sticky top-4 right-0 left-0">
      <Link href="/">
        <GsapMagnetic>
          <div className="w-16 h-16 rounded-full bg-white dark:bg-[#133B5C] shadow-2xl  flex justify-center items-center cursor-pointer">
            <img src="/main-logo.png" alt="logo" className="-mt-2 w-12 h-12" />
          </div>
        </GsapMagnetic>
      </Link>

      <nav className="px-2 h-16 bg-[#EDEFF1] text-black dark:text-white dark:bg-[#133B5C] shadow-xl rounded-l-full rounded-r-full md:block hidden">
        <MenuItems />
      </nav>
      <GsapMagnetic>
        <div className="w-16 h-16 rounded-full bg-white dark:bg-[#133B5C] shadow-2xl">
          <Switcher setIsChangedMode={setIsChangedMode} />
        </div>
      </GsapMagnetic>
    </div>
  );
};

export default Navbar;
