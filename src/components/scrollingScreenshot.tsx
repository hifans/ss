"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface Props {
  imgs: { image: string; name: string }[];
}
const ScrollingScreenshot = ({ imgs }: Props) => {
  const { theme } = useTheme();
  return (
    <section className="w-full h-[400px] md:h-[840px]  overflow-hidden  border-border  py-5">
      <Marquee direction="left" autoFill pauseOnHover>
        {imgs.map((image, index) => (
          <div className="mx-6 text-gray-500" key={index}>
            <Image
              src={image.image}
              alt={image.name}
              width={450}
              height={800}
              style={{
                objectFit: "cover", // cover, contain, none
              }}
              className={`${
                theme === "dark" ? "filter dark:invert grayscale" : ""
              } hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ScrollingScreenshot;
