import { Hero } from "@/app/(homepage)/_components/_hero/hero";
import type { THeaderProps } from "@/lib/types";
import { Wrapper } from "../ui/wrapper";
import { SkillList } from "../ui/skill-list";
import { SKILLS } from "@/lib/constants.data";

export function Header({ className }: THeaderProps) {
  return (
    <header className={className}>
      <Wrapper className="bg-white shadow-lg rounded-xl py-10 sm:py-16 grid place-content-center place-items-center gap-3">
        <Hero />
        <SkillList
          variant="hero"
          className="mx-auto flex items-center justify-center gap-2 md:gap-4 flex-wrap px-10 py-4"
          skills={SKILLS}
        />
      </Wrapper>
    </header>
  );
}
