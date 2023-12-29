import Blogs from "@/app/[lang]/components/Blogs";
import Card from "@/app/[lang]/components/Card";
import Hero from "@/app/[lang]/components/Hero";
import { Metadata } from "next";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export const metadata: Metadata = {
  title: "Sevak Sargsyan",
};
export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <main className="flex flex-col items-center justify-between px-4 py-20">
      <Hero lang={lang} page={page} />
      <div className="w-full h-fit md:mt-[120px] mt-[60px] flex flex-col md:gap-[120px] gap-[40px]">
        {[1, 2, 3, 4, 5].map((i) => (
          <Card key={i} />
        ))}
      </div>
      <div>
        <Blogs page={page} lang={lang} />
      </div>
    </main>
  );
}
