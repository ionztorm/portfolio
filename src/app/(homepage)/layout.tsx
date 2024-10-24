"use client";
import { Logo } from "@/components/ui/logo";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { LINKS } from "@/lib/constants.data";

type THomepageLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export default function HomepageLayout({ children }: THomepageLayoutProps) {
  return (
    <>
      <Navbar paths={LINKS.homepageNavPaths}>
        <Logo title="Leon Lonsdale" />
      </Navbar>
      {children}
      <Footer />
    </>
  );
}
