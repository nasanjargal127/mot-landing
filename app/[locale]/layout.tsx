import "../../src/styles/globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer, Header, ReadyToStartSection } from "@/src/sections/Layout";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MOTFX - Money never sleeps",
  description: "Landing page of Motforex broker",
  icons: {
    icon: "/icon.ico",
  },
};

async function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const externalMetadata = {
    siteName: "MOTFX",
    url: "https://motforex.com",
    type: "website",
    robots: "follow, index",
    author: "Dashpuntsag Oidov",
    image:
      "https://firebasestorage.googleapis.com/v0/b/motfxacademy.appspot.com/o/bigThumbnail.jpg?alt=media&token=867aaa4a-e476-43ce-aa5d-4a114c1da398",
  };

  let messages;

  try {
    messages = (await import(`../../locales/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <head>
        <title>{`${metadata.title}`}</title>
        <meta content={`${metadata.description}`} name="description" />
        <meta property="og:type" content={externalMetadata.type} />
        <meta property="og:site_name" content={externalMetadata.siteName} />
        <meta property="og:description" content={`${metadata.description}`} />
        <meta property="og:title" content={`${metadata.title}`} />
        <meta property="og:image" content={externalMetadata.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@F2aldi" />
        <meta name="twitter:title" content={`${metadata.title}`} />
        <meta name="twitter:description" content={`${metadata.description}`} />
        <meta name="twitter:image" content={externalMetadata.image} />
      </head>
      <body className={manrope.className}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Header />
          {children}
          <ReadyToStartSection />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;

export function getStaticParams() {
  return [{ locale: "en" }, { locale: "mn" }];
}
