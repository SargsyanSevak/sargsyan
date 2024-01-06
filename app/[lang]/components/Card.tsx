"use client";
import GsapMagnetic from "./Gsap";
import { MdArrowOutward } from "react-icons/md";
import { transliator } from "@/utils/transliator";
import { useParams } from "next/navigation";
import { portfoliosItems } from "@/portfolios";

const Card = ({ data }: { data: portfoliosItems }) => {
  const { lang } = useParams();
  return (
    <div className="bg-[#EDEFF1] flex md:flex-row flex-col gap-4 hover:bg-[#f1f1f1] dark:bg-[#133B5C] dark:hover:bg-[#1E5F74] transition-all duration-500 hover:shadow-lg md:w-[80%] w-full mx-auto md:h-[400px] h-fit rounded-[24px]">
      <div className="md:w-1/2 w-full h-full flex flex-col items-start justify-center pl-6 md:pt-0 pt-6 gap-4">
        <h1 className="font-bold text-[30px] dark:text-white">
          {transliator(data, lang, "title")}
        </h1>
        <p className="text-[14px] text-gray-500 dark:text-gray-300">
          {transliator(data, lang, "description")}
        </p>
        <GsapMagnetic>
          <button className="rounded-[24px] border-[1px] py-4 px-10 hover:bg-gray-100 dark:bg-[#133B5C] dark:hover:bg-[#1E5F74]  dark:text-white transition-colors duration-300 text-[20px] flex items-center gap-2">
            {lang === "hy" ? "Դեմո & կոդ" : "Demo & code"}
            <span>
              <MdArrowOutward />
            </span>
          </button>
        </GsapMagnetic>
      </div>
      <div className="md:w-1/2 w-full h-full ">
        <img src={data.image} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Card;
