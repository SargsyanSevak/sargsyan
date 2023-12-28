import BlogDetails from ".";
import { posts } from "@/blogs";
import { siteMetadata } from "@/utils/siteMetaData";

export async function generateMetadata({ params }: any) {
  const id = params.id;

  try {
    const post: any = posts.find((el) => {
      return el.id === Number(id);
    });

    return {
      title: post.title,
      description: post.description,
      keywords: ["Web dev", "Front-end development", "React", "Next"],
      alternates: {
        canonical: `/blog/${id}`,
      },
      openGraph: {
        title: post.title,
        description: post.description,
        url: siteMetadata.siteUrl + `/blog/${id}`,
        siteName: siteMetadata.title,
        locale: "en",
        type: "website",
        images: [
          {
            url: post.ogImage || siteMetadata.socialBanner,
            width: 1200,
            height: 630,
            alt: "Blog single page image",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: [
          {
            url: post.ogImage || siteMetadata.socialBanner,
            width: 1200,
            height: 630,
            alt: "Blog single page image",
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: "Not found",
    };
  }
}

const SingleBlogReview = async () => {
  return (
    <div>
      <BlogDetails />
    </div>
  );
};

export default SingleBlogReview;
