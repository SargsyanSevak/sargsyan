import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import GsapMagnetic from "./Gsap";
import FramerMagnetic from "./Framer";

const Footer = () => {
  return (
    <div className="w-full sm:h-[200px] h-[160px] bg-[#EDEFF1] dark:bg-[#133B5C] rounded-s-[24px] rounded-e-[24px]">
      <footer className="max-w-[1280px] px-4 h-full mx-auto flex flex-col justify-evenly items-center">
        <div className="icons flex items-center sm:text-[50px] text-[38px] text-gray-500 dark:text-white sm:gap-20 gap-14">
          <GsapMagnetic>
            <a href="">
              <FaGithub className="transition-fill duration-200 hover:text-black" />
            </a>
          </GsapMagnetic>
          <GsapMagnetic>
            <a href="">
              <FaLinkedin className="transition-fill duration-200 hover:text-[#0284c7]" />
            </a>
          </GsapMagnetic>
          <GsapMagnetic>
            <a href="">
              <FaWhatsapp className="transition-fill duration-200 hover:text-[#4ade80]" />
            </a>
          </GsapMagnetic>
        </div>
        <p className="text-gray-600 dark:text-white sm:text-[18px] text-[14px] text-center">
          Copyright © 2023 Sevak Sargsyan. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
