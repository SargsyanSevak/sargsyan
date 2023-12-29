import Blogs from "@/components/Blogs";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sevak Sargsyan",
};
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-4 py-20">
      <Hero />
      <div className="w-full h-fit md:mt-[120px] mt-[60px] flex flex-col md:gap-[120px] gap-[40px]">
        {[1, 2, 3, 4, 5].map((i) => (
          <Card key={i} />
        ))}
      </div>
      <div>
        <Blogs />
      </div>
    </main>
  );
}
