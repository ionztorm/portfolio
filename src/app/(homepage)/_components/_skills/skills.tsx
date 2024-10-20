import { SkillPill } from "@/components/ui/skill-pill";
import { SKILLS } from "@/lib/constants";

export function Skills() {
  return (
    <>
      <ul
        id="#skills"
        className="mx-auto flex items-center justify-center gap-4 flex-wrap px-10 py-4"
      >
        {Object.values(SKILLS).map((skill) => (
          <SkillPill
            skill={skill}
            key={skill.name}
            className="gap-2 border px-3 py-1 hover:scale-110 transition duration-300"
          />
        ))}
      </ul>
    </>
  );
}
