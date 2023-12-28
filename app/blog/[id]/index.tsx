"use client";

import { posts } from "@/blogs";
import { notFound, useParams, usePathname } from "next/navigation";
import { useEffect } from "react";
import { FacebookShareButton, FacebookIcon } from "next-share";
import Share from "@/components/Share";
import YoutubeEmbed from "@/components/YouTubeEmbed";

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
      <h1 className="md:text-[40px] sm:text-[32px] text-[24px] font-bold text-center dark:text-white">
        {post.title}
      </h1>

      <div className="max-w-[900px]  mt-10 mx-auto">
        <YoutubeEmbed embedId={post.embedId} />
      </div>
      <p className="mt-10 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
        {post.description}
      </p>
      <div className="flex items-center justify-between sm:flex-row flex-col">
        <div className="relative mt-8 flex items-center gap-x-4">
          <img
            src={post.author.imageUrl}
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <div className="font-semibold text-gray-900 dark:text-gray-300">
              <div>
                <span className="absolute inset-0" />
                {post.author.name}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {post.author.role}
            </p>
          </div>
        </div>
        <div className="flex items-center mt-5">
          <Share shareUrl={shareURL} />
        </div>
      </div>
    </article>
  );
};

export default BlogDetails;
