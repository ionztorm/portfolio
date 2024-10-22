import { Hero } from "@/app/(homepage)/_components/_hero/hero";
import type { THeaderProps } from "@/lib/types";
import { Wrapper } from "../ui/wrapper";
import { SkillList } from "../ui/skill-list";
import { HOMEPAGE_NAV_PATHS, SKILLS } from "@/lib/constants.data";
import { StyledLink } from "../ui/styled-link";

export function Header({ className }: THeaderProps) {
  return (
    <header className={className}>
      <Wrapper className="bg-white shadow-lg rounded-xl py-10 px-4 sm:py-16 grid place-content-center place-items-center gap-3">
        <Hero />
        <SkillList
          variant="hero"
          className="mx-auto flex items-center justify-center gap-2 md:gap-4 flex-wrap py-4"
          skills={SKILLS}
          tag="hero"
        />
        <p className="text-sm">
          To see all tech I&apos;m familiar with, see my{" "}
          <StyledLink path={HOMEPAGE_NAV_PATHS.skills} />
        </p>
      </Wrapper>
    </header>
  );
}
