import { SectionHeading } from "@/components/ui/section-heading";
import { SkillList } from "@/components/ui/skill-list";
import { SKILLS } from "@/lib/constants.data";

export function Skills() {
  return (
    <>
      <SectionHeading>Skills</SectionHeading>

      <SkillList
        variant="skills"
        className="mx-auto flex items-center justify-center gap-2 md:gap-5 flex-wrap py-4"
        skills={SKILLS}
      />
    </>
  );
}
