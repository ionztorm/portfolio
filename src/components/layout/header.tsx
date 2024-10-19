"use client";
import { SOCIAL_LINKS } from "@/lib/constants";
import type { THeaderProps } from "@/lib/types";
import { Hero } from "@/app/(homepage)/_components/_hero/hero";
import { StyledLink } from "../generic/styled-link";

export function Header({ className }: THeaderProps) {
  return (
    <header className={className}>
      <Hero />
      <ul className="flex gap-3">
        <li>
          <StyledLink path={SOCIAL_LINKS.github} />
        </li>
        <li>
          <StyledLink path={SOCIAL_LINKS.X} />
        </li>
        <li>
          <StyledLink path={SOCIAL_LINKS.instagram} />
        </li>
        <li>
          <StyledLink path={SOCIAL_LINKS.discord} />
        </li>
      </ul>
      {/* 
        <Navbar paths={HOMEPAGE_NAV_PATHS}>
          <Logo title="Leon Lonsdale" />
        </Navbar>
        <div className="w-full aspect-video border border-dashed rounded-md flex items-center justify-center shadow-md overflow-hidden">
				I&apos;m a photo
        </div> */}
    </header>
  );
}
