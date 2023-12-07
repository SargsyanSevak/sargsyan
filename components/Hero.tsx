import React from "react";
import GsapMagnetic from "./Gsap";
const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 dark:text-white">
      <h1 className="sm:text-[70px] text-[44px] font-extrabold">
        Hi, I'm Sevak.
      </h1>
      <p className="sm:text-[20px] text-[16px] md:w-[60%] w-full text-center">
        I'm currently at Snap, where I design experiences around finding and
        using AR Lenses on Snapchat 👻
      </p>
      <GsapMagnetic>
        <button className="rounded-[24px] border-[1px] py-4 px-10 hover:bg-gray-100 dark:bg-[#133B5C] transition-colors duration-300 text-[20px]">
          About me
        </button>
      </GsapMagnetic>
    </div>
  );
};

export default Hero;
