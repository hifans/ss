import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default async function NavFooterLayout({
  children,
  // renderFooter = true,
  footerChildren,
  logoImg = "/logo.png",
  logoText = "SimpleStone",
  logoWidth = 48,
  logoHeight = 60,
}: Readonly<{
  children: React.ReactNode;
  // renderFooter?: boolean;
  footerChildren?: React.ReactNode;
  logoImg?: string;
  logoText?: string;
  logoWidth?: number;
  logoHeight?: number;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation
        logoImg={logoImg}
        logoText={logoText}
        logoWidth={logoWidth}
        logoHeight={logoHeight}
      />
      <main className="flex-1">{children}</main>
      {/* {footerChildren !== undefined ? footerChildren : null} */}
      <Footer footerChildren={footerChildren} />
    </div>
  );
}
