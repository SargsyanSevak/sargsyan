import Blogs from "@/app/[lang]/components/Blogs";
import { Metadata } from "next";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
export const metadata: Metadata = {
  title: "Blogs",
};
const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { page } = await getDictionary(lang);
  return (
    <div className="mb-20 ">
      <Blogs page={page} lang={lang} />
    </div>
  );
};

export default page;
