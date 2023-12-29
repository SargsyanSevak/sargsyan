import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/[lang]/components/Navbar";
import Footer from "@/app/[lang]/components/Footer";
import { siteMetadata } from "@/utils/siteMetaData";
import { Locale, i18n } from "@/i18n.config";
export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      {
        url: siteMetadata.socialBanner,
        width: 1200,
        height: 630,
        alt: "My custom alt",
      },
    ],
    locale: "hy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    site: siteMetadata.twitter,
    images: [
      {
        url: siteMetadata.socialBanner,
        width: 1200,
        height: 630,
        alt: "My custom alt",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className="bg-[#f6f6f6] dark:bg-[#1D2D50]">
        <main className="max-w-[1280px] min-h-screen mx-auto border-l-[1px] border-r-[1px] relative">
          <Navbar lang={params.lang} />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
