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

interface ShareProps {
  shareUrl: string;
}
const Share = ({ shareUrl }: ShareProps) => {
  return (
    <div className="w-full flex flex-col gap-2 flex-wrap justify-between items-center p-4 rounded-[2px] mt-4">
      <h1 className="font-semibold text-gray-900 dark:text-gray-300">
        Share with
      </h1>
      <div className="flex justify-end items-center gap-4 text-black dark:text-white">
        <FacebookShareButton url={shareUrl}>
          <FaFacebookF fontSize={20} />
        </FacebookShareButton>
        <TelegramShareButton url={shareUrl}>
          <FaTelegramPlane fontSize={20} />
        </TelegramShareButton>
        <TwitterShareButton url={shareUrl}>
          <FaXTwitter fontSize={20} />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl}>
          <FaLinkedinIn fontSize={20} />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default Share;
