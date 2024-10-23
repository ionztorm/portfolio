import { Hero } from "@/app/(homepage)/_components/_hero/hero";
import { SkillList } from "../_ui/skill-list";
import { HOMEPAGE_NAV_PATHS, SKILLS } from "@/lib/constants.data";
import { StyledLink } from "@/components/ui/styled-link";

export function Header() {
  return (
    <header className="px-4 mb-10 sm:mb-14 xl:mb-20 mx-auto max-w-5xl w-full  py-10 sm:py-16 grid place-content-center place-items-center gap-3">
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
    </header>
  );
}
