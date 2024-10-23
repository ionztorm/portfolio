import { Hero } from "@/app/(homepage)/_components/_hero/hero";
import { HeroSkills } from "../_hero/hero-skills";

export function Header() {
  return (
    <header className="px-4 mb-10 sm:mb-14 xl:mb-20 mx-auto max-w-5xl w-full  py-10 sm:py-16 grid place-content-center place-items-center gap-3">
      <Hero />
      <HeroSkills />
    </header>
  );
}
