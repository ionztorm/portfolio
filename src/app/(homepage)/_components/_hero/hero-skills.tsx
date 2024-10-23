import { StyledLink } from "@/components/ui/styled-link";
import { SKILLS, HOMEPAGE_NAV_PATHS } from "@/lib/constants.data";
import { SkillList } from "../_ui/skill-list";

export function HeroSkills() {
  return (
    <>
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
    </>
  );
}
