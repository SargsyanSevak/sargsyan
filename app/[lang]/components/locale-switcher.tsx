"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n.config";

export default function LocaleSwitcher({
  desktopView,
  lang,
}: {
  desktopView: boolean;
  lang?: string;
}) {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul
      className={`flex ${
        desktopView ? "flex-col gap-y-6" : "mt-6"
      } gap-x-8 items-center justify-center `}
    >
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className={` ${
                desktopView
                  ? "bg-inherit text-black dark:text-white border-none hover:bg-gray-100 dark:hover:bg-[#1E5F74]  transition-all"
                  : "bg-gray-600 text-white border"
              } rounded-md   px-6 uppercase py-2 ${
                locale === lang
                  ? "bg-gray-200 dark:bg-[#1E5F74] dark:hover:bg-[#1E5F74]"
                  : ""
              }`}
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
