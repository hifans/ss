import Link from "next/link";
import ThemeSwitch from "@/components/theme-switch";

export function Footer({
  footerChildren,
}: {
  footerChildren?: React.ReactNode;
}) {
  return (
    <footer className="border-t dark:bg-muted/30 bg-muted/60 shadow">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="py-6 md:py-8">
          {footerChildren !== undefined ? footerChildren : null}

          {/* Copyright - Optimized for mobile */}
          <div className="mt-6 pt-6 md:mt-8 md:pt-8 ">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {new Date().getFullYear()} 北京新图思道科技有限公司 All rights
                reserved.
              </p>

              <div className="flex flex-col md:flex-row items-center gap-4 md:space-x-4">
                <Link href="https://beian.miit.gov.cn/">
                  <p className="text-sm text-muted-foreground text-center md:text-left">
                    京ICP备2022018826号-1
                  </p>
                </Link>

                <div className="flex items-center gap-4">
                  <ThemeSwitch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
