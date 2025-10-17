import {
  CloudIcon,
  BoltIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  SunIcon,
  MapPinIcon,
  BarsArrowUpIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "显示发帖位置",
    description:
      "自动展示其发帖设备 IP 地址所对应的地理位置，提升信息透明度与可信度。",
    icon: MapPinIcon,
  },
  {
    name: "自动折叠引用",
    description: "自动折叠引用的帖子，以保持界面整洁，避免冗长的滚动。",
    icon: BarsArrowUpIcon,
  },
  {
    name: "网址预览",
    description: "通过网址摘要即可快速判断内容是否符合需求，节省浏览时间。",
    icon: BoltIcon,
  },
  {
    name: "主题切换",
    description: "APP 会同步设备系统的颜色模式，实现无缝适配,也可手动切换。",
    icon: SunIcon,
  },
  {
    name: "用户标注／屏蔽",
    description: "可以对用户进行标注。同时，也可以特定用户发布的帖子。",
    icon: CloudIcon,
  },
  {
    name: "生成图片分享",
    description: "可以对帖子进行生成图片分享，方便其他用户查看。",
    icon: CommandLineIcon,
  },
  {
    name: "记录浏览位置",
    description: "记录在帖子中的浏览位置，后续自动跳转查看。",
    icon: RocketLaunchIcon,
  },
  {
    name: "自动保存草稿",
    description: "在发帖时自动保存草稿，后续可以继续编辑。",
    icon: ShieldCheckIcon,
  },
];

export function Features() {
  return (
    <div className="py-4 sm:py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Production Ready
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to build a SaaS
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Start with a complete foundation. All the essential features are
            built-in, so you can focus on what makes your SaaS unique.
          </p>
        </div> */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
