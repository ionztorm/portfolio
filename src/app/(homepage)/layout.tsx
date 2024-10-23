"use client";
import { Logo } from "@/components/ui/logo";
import { Footer } from "@/app/(homepage)/_components/_layout/footer";
import { Navbar } from "@/app/(homepage)/_components/_navigation/navbar";
import { HOMEPAGE_NAV_PATHS } from "@/lib/constants.data";

type THomepageLayoutProps = {
  children: React.ReactNode;
};
export default function HomepageLayout({ children }: THomepageLayoutProps) {
  return (
    <>
      <Navbar paths={HOMEPAGE_NAV_PATHS}>
        <Logo title="Leon Lonsdale" />
      </Navbar>
      {children}
      <Footer />
    </>
  );
}
