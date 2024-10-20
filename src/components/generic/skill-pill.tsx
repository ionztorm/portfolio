import type { TSkillPillProps } from "@/lib/types";
import { cn } from "@/utils/cn";

export function SkillPill({ skill, className }: TSkillPillProps) {
  return (
    <li
      key={skill.name}
      className={cn(
        "flex items-center flex-shrink-0 border rounded-full",
        className
      )}
    >
      <span style={{ color: skill.brandColour }}>{skill.icon}</span>
      <span className="text-sm md:text-base xl:text-lg">{skill.name}</span>
    </li>
  );
}
