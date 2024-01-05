import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";
import Work from ".";
import { Locale } from "@/i18n.config";

export const metadata: Metadata = {
  title: "Work",
};
const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { page } = await getDictionary(lang);
  return <Work portfolio={page.portfolio} lang={lang} />;
};

export default page;
