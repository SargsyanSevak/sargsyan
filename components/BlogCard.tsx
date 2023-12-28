import YoutubeEmbed from "./YouTubeEmbed";

const BlogCard = ({ post }: any) => {
  return (
    <article
      key={post.id}
      className="flex max-w-full flex-col items-start justify-between shadow-xl hover:shadow-2xl p-4 rounded-xl transition-all duration-300 hover:bg-[#EDEFF1] dark:bg-[#133B5C] dark:hover:bg-[#1E5F74]"
    >
      <div className="w-full min-h-20">
        <YoutubeEmbed embedId={post.embedId} />
      </div>
      <div className="flex items-center gap-x-4 text-xs mt-2">
        <time dateTime={post.datetime} className="text-gray-500">
          {post.date}
        </time>
        <a
          href={post.category.href}
          className="relative z-10 rounded-full  px-3 py-1.5 font-medium text-gray-500 "
        >
          {post.category.title}
        </a>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-white">
          <a href={post.href} className="line-clamp-2">
            <span className="absolute inset-0" />
            {post.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
          {post.description}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img
          src={post.author.imageUrl}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-50"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900 dark:text-gray-300">
            <a href={post.author.href}>
              <span className="absolute inset-0" />
              {post.author.name}
            </a>
          </p>
          <p className="text-gray-600 dark:text-gray-400">{post.author.role}</p>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
