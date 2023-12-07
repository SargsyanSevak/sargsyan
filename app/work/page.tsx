import Card from "@/components/Card";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Work",
};
const page = () => {
  return (
    <div className="md:py-20 py-16 px-4 flex justify-center items-center">
      <div className="w-full h-fit flex flex-col md:gap-[120px] gap-[40px]">
        {[1, 2, 3, 4, 5].map((i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
};

export default page;
