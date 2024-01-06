import React from "react";
import GsapMagnetic from "./Gsap";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
const Hero = ({ lang, page }: any) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 dark:text-white md:min-h-[86vh] min-h-[86vh]">
      <h1 className="sm:text-[70px] text-[44px] font-extrabold text-center">
        {page.home.title}
      </h1>
      <p className="sm:text-[20px] text-[16px] md:w-[60%] w-full text-center">
        {page.home.description}
      </p>
      <Link href={`/${lang}/about`}>
        <GsapMagnetic>
          <button className="rounded-[24px] border-[1px] py-4 px-10 hover:bg-gray-100 dark:bg-[#133B5C] dark:hover:bg-[#1E5F74] transition-colors duration-300 text-[20px] flex items-center gap-4">
            {page.home.button}
            <MdArrowOutward />
          </button>
        </GsapMagnetic>
      </Link>
    </div>
  );
};

export default Hero;
