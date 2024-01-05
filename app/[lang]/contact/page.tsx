import ContactForm from "@/app/[lang]/components/ContactForm";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
};
const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { page } = await getDictionary(lang);
  return (
    <div className="md:py-20 py-16 px-4 flex justify-center items-center">
      <ContactForm lang={lang} contact={page.contact} />
    </div>
  );
};

export default page;
