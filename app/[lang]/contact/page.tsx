import ContactForm from "@/app/[lang]/components/ContactForm";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";
import BackInUp from "../components/BackInUp";
export const metadata: Metadata = {
  title: "Contact",
};
const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { page } = await getDictionary(lang);
  return (
    <BackInUp>
      <div className="md:py-20 py-4 px-4 flex justify-center items-center">
        <ContactForm lang={lang} contact={page.contact} />
      </div>
    </BackInUp>
  );
};

export default page;
