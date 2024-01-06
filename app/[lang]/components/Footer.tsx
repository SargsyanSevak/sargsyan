"use client";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import GsapMagnetic from "./Gsap";

const URL = "https://wa.me";
const NUMBER = "+380966695103".replace(/[^\w\s]/gi, "").replace(/ /g, "");

const Footer = ({ lang, footer }: { lang: string; footer: any }) => {
  let url = `${URL}/${NUMBER}`;
  let message = "Helooo";
  if (message) {
    url += `?text=${encodeURI(message)}`;
  }
  return (
    <div className="w-full sm:h-[200px] h-[160px] bg-[#EDEFF1] dark:bg-[#133B5C] rounded-tl-[24px] rounded-tr-[24px]">
      <footer className="max-w-[1280px] px-4 h-full mx-auto flex flex-col justify-evenly items-center">
        <div className="icons flex items-center sm:text-[50px] text-[38px] text-gray-500 dark:text-white sm:gap-20 gap-14">
          <GsapMagnetic>
            <a href="https://github.com/SargsyanSevak" target="_blank">
              <FaGithub className="transition-fill duration-200 hover:text-black" />
            </a>
          </GsapMagnetic>
          <GsapMagnetic>
            <a
              href="https://www.linkedin.com/in/sargsyansevak/"
              target="_blank"
            >
              <FaLinkedin className="transition-fill duration-200 hover:text-[#0284c7]" />
            </a>
          </GsapMagnetic>
          <GsapMagnetic>
            <button
              onClick={() => {
                window.open(url);
              }}
            >
              <FaWhatsapp className="transition-fill duration-200 hover:text-[#4ade80]" />
            </button>
          </GsapMagnetic>
        </div>
        <div className="text-gray-600 dark:text-white sm:text-[18px] text-[14px] text-center flex justify-center items-center flex-wrap gap-2">
          <span> {footer.copyright}</span>{" "}
          <span>{new Date().getFullYear()}</span>
          <span>{footer.author}</span>
          <span>{footer.rights}</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
