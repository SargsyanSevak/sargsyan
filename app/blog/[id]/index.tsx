"use client";

import { useParams } from "next/navigation";

const BlogDetails = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default BlogDetails;
