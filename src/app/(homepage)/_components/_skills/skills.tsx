import { SectionHeading } from "@/components/ui/section-heading";
import { SkillList } from "@/app/(homepage)/_components/_ui/skill-list";
import { SKILLS } from "@/lib/constants.data";

export function Skills() {
  return (
    <>
      <SectionHeading>Skills</SectionHeading>

      <SkillList
        variant="skills"
        className="flex items-center justify-center sm:justify-between w-full gap-5 md:gap-6 flex-wrap py-4"
        skills={SKILLS}
      />
    </>
  );
}
