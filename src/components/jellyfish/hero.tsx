import { Button } from "@/components/ui/button";
import Link from "next/link";
import LineText from "../lineText";
import { SiApple, SiAndroid } from "@icons-pack/react-simple-icons";
import { RoughNotation } from "react-rough-notation";

export function Hero() {
  return (
    <div className="relative isolate pt-14 dark:bg-gray-900">
      <div className="pt-20 pb-4 sm:pt-20 sm:pb-2 lg:pb-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl sm:text-6xl bg-clip-text ">
              最好用且无广告的
            </h1>
            <h1 className="text-4xl font-bold sm:text-6xl bg-clip-text p-6">
              <LineText>水木社区客户端</LineText>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              帖子原汁原味，连
              <RoughNotation type="circle" show={true} color="#2563EB">
                签名
                {/* <span className="text-white"></span> */}
              </RoughNotation>
              都完美呈现 ，除了基本的
              <RoughNotation type="circle" show={true} color="#2563EB">
                看帖
              </RoughNotation>
              、
              <RoughNotation type="circle" show={true} color="#2563EB">
                发帖
              </RoughNotation>
              还提供额外的特色功能。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4 md:gap-x-6">
              <a href="https://app.adjust.com/8mq63al" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full hover:bg-blue-700 hover:text-white"
                >
                  <SiApple className="h-4 w-4" />
                  App Store
                </Button>
              </a>
              <Link href="https://www.pgyer.com/jellyfish" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full hover:bg-blue-700 hover:text-white"
                >
                  <SiAndroid className="h-4 w-4" />
                  下载安装包
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
