import { Metadata } from "next";

import { SITE_DESCRIPTION } from "@/constants";
import LetterGlitch from "@/components/letter-glitch";
import { HomeHero } from "@/components/home/hero";

export const metadata: Metadata = {
  title: "SimpleStone Ltd",
  description: SITE_DESCRIPTION,
};

export default function Home() {
  return (
    <main>
      <HomeHero />
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex justify-center md:w-full md:h-[292px] size-[290px] pt-3 md:pt-9">
          <LetterGlitch
            glitchColor={["#5e4491", "#A476FF", "#241a38"]}
            glitchSpeed={3}
            centerVignette={false}
            outerVignette={true}
            smooth={true}
          />
        </div>
      </div>
    </main>
  );
}
