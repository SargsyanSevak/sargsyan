"use client";
import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import {
  TwitterShareButton,
  FacebookShareButton,
  TelegramShareButton,
  LinkedinShareButton,
} from "next-share";
import { useParams } from "next/navigation";

interface ShareProps {
  shareUrl: string;
  imageUrl?: string;
}
const Share = ({ shareUrl }: ShareProps) => {
  const { lang } = useParams();

  return (
    <div className="w-full flex  gap-2 flex-wrap justify-between items-start rounded-[2px] max-w-[900px] mx-auto">
      <h1 className="font-semibold dark:text-gray-400 text-gray-700">
        {lang === "hy" ? "Կիսվել" : "Share with"}
      </h1>
      <div className="flex justify-end items-center gap-4 text-gray-700 dark:text-gray-400 ">
        <FacebookShareButton url={shareUrl}>
          <FaFacebookF
            fontSize={20}
            className="hover:text-[#316FF6] transition-all duration-300 cursor-pointer"
          />
        </FacebookShareButton>
        <TelegramShareButton url={shareUrl}>
          <FaTelegramPlane
            fontSize={20}
            className="hover:text-[#0088CC] transition-all duration-300 cursor-pointer"
          />
        </TelegramShareButton>
        <TwitterShareButton url={shareUrl}>
          <FaXTwitter
            fontSize={20}
            className="hover:text-black transition-all duration-300 cursor-pointer"
          />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl}>
          <FaLinkedinIn
            fontSize={20}
            className="hover:text-[#0077B5] transition-all duration-300 cursor-pointer"
          />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default Share;
