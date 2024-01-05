"use client";
import Card from "@/app/[lang]/components/Card";
import { useState } from "react";
import GsapMagnetic from "../components/Gsap";

const Work = ({ lang, portfolio }: { lang: string; portfolio: any }) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const itemsPerRow = 6;
  const [next, setNext] = useState(itemsPerRow);
  const handleMoreWorks = () => {
    setNext(next + 6);
  };
  return (
    <>
      <div className="md:py-20 py-16 px-4 flex justify-center items-center">
        <div className="w-full h-fit flex flex-col md:gap-[120px] gap-[40px]">
          {data.slice(0, next)?.map((i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
      {next < data.length && (
        <div className="flex items-center justify-center md:mb-20 mb-16 -mt-8  mx-auto  w-full">
          <GsapMagnetic>
            <button
              className="rounded-[24px] text-gray-600 dark:text-gray-100 border-[1px] py-4 px-10 hover:bg-gray-100 dark:bg-[#133B5C] transition-colors duration-300 text-[20px] flex items-center gap-4"
              onClick={handleMoreWorks}
            >
              {portfolio["Load more"]}
            </button>
          </GsapMagnetic>
        </div>
      )}
    </>
  );
};

export default Work;
