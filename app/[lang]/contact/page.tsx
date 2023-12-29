import ContactForm from "@/app/[lang]/components/ContactForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
};
const page = () => {
  return (
    <div className="md:py-20 py-16 px-4 flex justify-center items-center">
      <ContactForm />
    </div>
  );
};

export default page;
