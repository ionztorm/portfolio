"use client";
import { HOMEPAGE_NAV_PATHS } from "@/lib/constants";
import { Navbar } from "./navbar";
import { Logo } from "../generic/logo";
import { Wrapper } from "../generic/wrapper";
import type { THeaderProps } from "@/lib/types";

export function Header({ className }: THeaderProps) {
  return (
    <header className={className}>
      <Wrapper>
        <Navbar paths={HOMEPAGE_NAV_PATHS}>
          <Logo title="Leon Lonsdale" />
        </Navbar>
        {/* <div className="w-full aspect-video border border-dashed rounded-md flex items-center justify-center shadow-md overflow-hidden">
				I&apos;m a photo
        </div> */}
      </Wrapper>
    </header>
  );
}
