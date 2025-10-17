import { Metadata } from "next";
import { Hero } from "@/components/jellyfish/hero";
import { Features } from "@/components/landing/features";
import { SITE_NAME, SITE_DESCRIPTION } from "@/constants";
import ScrollingScreenshot from "@/components/scrollingScreenshot";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

export default function Home() {
  const SCREENSHOTS = [
    { image: "/images/jellyfish-home.png", name: "首页" },
    { image: "/images/jellyfish-board.png", name: "版块" },
    { image: "/images/jellyfish-setting.png", name: "设置" },
    { image: "/images/jellyfish-signature.png", name: "签名" },
  ];
  return (
    <main>
      <Hero />
      <Features />
      <ScrollingScreenshot imgs={SCREENSHOTS} />
      {/* <FAQ /> */}
    </main>
  );
}
