import NavFooterLayout from "@/layouts/NavFooterLayout";
import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerChildren = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
      {/* Legal Links */}
      <div className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
        <h3 className="text-sm font-semibold text-foreground text-center md:text-left">
          用户资质
        </h3>
        <ul className="space-y-2 flex flex-col items-center md:items-start">
          <li>
            <Link
              target="_blank"
              href="/jellyfish/eula.html"
              className="text-sm text-muted-foreground hover:text-foreground text-center md:text-left"
            >
              水木社区管理规则
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="/jellyfish/privacy.html"
              className="text-sm text-muted-foreground hover:text-foreground text-center md:text-left"
            >
              隐私政策
            </Link>
          </li>
        </ul>
      </div>

      {/* Company Info */}
      <div className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
        <h3 className="text-sm font-semibold text-foreground text-center md:text-left">
          资源
        </h3>
        <ul className="space-y-2 flex flex-col items-center md:items-start">
          <li>
            <Link
              target="_blank"
              href="/jellyfish/changelog.html"
              className="text-sm text-muted-foreground hover:text-foreground text-center md:text-left"
            >
              更新日志
            </Link>
          </li>
        </ul>
      </div>

      {/* Social Links and Theme Switch */}
    </div>
  );
  return (
    <NavFooterLayout
      logoImg="/jellyfish.png"
      logoText="快看水母"
      logoWidth={48}
      logoHeight={60}
      footerChildren={footerChildren}
    >
      {children}
    </NavFooterLayout>
  );
}
