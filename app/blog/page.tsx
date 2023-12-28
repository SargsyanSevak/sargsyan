import Blogs from "@/components/Blogs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blogs",
};
const page = () => {
  return (
    <div className="mb-20 ">
      <Blogs />
    </div>
  );
};

export default page;
