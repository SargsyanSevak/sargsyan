import { posts } from "@/blogs";
import BlogCard from "./BlogCard";

export default function Blogs({ page, lang }: any) {
  return (
    <div className="">
      <div className="mx-auto max-w-full px-0 lg:px-2">
        <div className="mx-auto mt-4 grid max-w-7xl grid-cols-1 gap-x-8 md:gap-y-16 gap-y-8  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, i) => (
            <BlogCard post={post} key={i} page={page} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  );
}
