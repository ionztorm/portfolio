import type { TSkillPillProps } from "@/lib/types";
import { cn } from "@/utils/cn";

export function SkillPill({ skill, className }: TSkillPillProps) {
  return (
    <li
      key={skill.name}
      className={cn(
        "flex items-center flex-shrink-0 border rounded-full max-w-max",
        className
      )}
    >
      <span style={{ color: skill.brandColour }}>{skill.icon}</span>
      <span className="text-base md:text-md xl:text-lg">{skill.name}</span>
    </li>
  );
}
