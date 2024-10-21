import type { TSkillPillProps } from "@/lib/types";
import { cn } from "@/utils/cn";

export function SkillPill({
  skill,
  className,
  kind = "skills",
}: TSkillPillProps) {
  const textSize =
    kind === "skills" ? "text-base md:text-md xl:text-lg" : "text-sm";

  const iconSize = kind === "skills" ? "size-5" : "size-4";

  const Icon = skill.icon;

  return (
    <li
      key={skill.name}
      className={cn(
        "flex items-center flex-shrink-0 border rounded-full max-w-max",
        className
      )}
    >
      <span style={{ color: skill.brandColour }}>
        {Icon ? <Icon className={iconSize} /> : null}
      </span>
      <span className={textSize}>{skill.name}</span>
    </li>
  );
}
