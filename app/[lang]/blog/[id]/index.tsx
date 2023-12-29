"use client";

import { posts } from "@/blogs";
import { notFound, useParams, usePathname } from "next/navigation";
import { useEffect } from "react";
import { FacebookShareButton, FacebookIcon } from "next-share";
import Share from "@/app/[lang]/components/Share";
import YoutubeEmbed from "@/app/[lang]/components/YouTubeEmbed";

const BlogDetails = () => {
  const { id } = useParams();
  const pathname = usePathname();
  const shareURL = `https://sargsyan.vercel.app/${pathname}`;
  const post: any = posts.find((el) => {
    return el.id === Number(id);
  });
  useEffect(() => {
    if (!post) {
      return notFound;
    }
  }, [post]);

  return (
    <article className="px-6 md:py-20 py-[64px]">
      <h1 className="md:text-[40px] sm:text-[32px] text-[24px] font-bold text-center dark:text-white max-w-[1000px] mx-auto">
        {post.title}
      </h1>
      <div className="flex justify-between items-center w-full h-fit mt-10 flex-wrap max-w-[900px] mx-auto">
        <div className="flex  items-center gap-x-4 text-xs font-semibold">
          <time dateTime={post.datetime} className="text-gray-500">
            {post.date}
          </time>
          <p className="relative z-10 rounded-full  py-1.5 font-medium text-gray-500 ">
            {post.category.title}
          </p>
        </div>
      </div>
      <div className="max-w-[900px]  mt-10 mx-auto">
        <YoutubeEmbed embedId={post.embedId} />
      </div>
      <p className="mt-10 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300 max-w-[900px] mx-auto">
        {post.description}
      </p>
      <div className="flex items-center justify-center flex-wrap mt-6">
        <div className="relative mt-8 flex items-center justify-center gap-x-4 flex-col">
          <img
            src={post.author.imageUrl}
            alt=""
            className="h-20 w-20 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <div className="font-semibold text-gray-900 dark:text-gray-300 w-full">
              <div className="w-full flex justify-center items-center">
                <span className="absolute inset-0 text-center mx-auto" />
                {post.author.name}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {post.author.role}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-[#EDEFF1] dark:bg-[#133B5C] p-4 mt-10 rounded-[16px] max-w-[900px] mx-auto">
        <Share shareUrl={shareURL} imageUrl={post.ogImage} />
      </div>
    </article>
  );
};

export default BlogDetails;
