import Card from "@/components/Card";
import { Metadata } from "next";
import Work from ".";
export const metadata: Metadata = {
  title: "Work",
};
const page = () => {
  return <Work />;
};

export default page;
