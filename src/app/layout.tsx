import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import "server-only";

import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/constants";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/providers";
import { TooltipProvider } from "@/components/ui/tooltip";

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: ["jellyfish", "simplestone", "快看水母"],
  authors: [{ name: "范特西" }],
  creator: "范特西",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: "@hifans",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSansSC.variable}  antialiased`}>
        <NextTopLoader
          initialPosition={0.15}
          shadow="0 0 10px #000, 0 0 5px #000"
          height={4}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider delayDuration={100} skipDelayDuration={50}>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
