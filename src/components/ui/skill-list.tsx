import type { TSkillListProps } from "@/lib/types";
import { SkillPill } from "./skill-pill";

export function SkillList({ variant, className, skills }: TSkillListProps) {
  return (
    <>
      <ul className={className}>
        {Object.values(skills).map((skill) => (
          <SkillPill
            skill={skill}
            key={skill.name}
            className="hover:scale-110 transition duration-300"
            variant={variant}
          />
        ))}
      </ul>
    </>
  );
}
