"use client";

import { Footer } from "@/components/layout/footer";
import { Logo } from "@/components/ui/logo";
import { Navbar } from "@/components/layout/navbar";
import { LINKS } from "@/lib/constants.data";

type TCVLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function CVLayout({ children }: TCVLayoutProps) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-[100dvh]">
      <Navbar paths={LINKS.cvNavPaths}>
        <Logo title="Leon Lonsdale" />
      </Navbar>
      {children}
      <Footer />
    </div>
  );
}
