import type { TSkillPillProps } from "@/lib/types";
import { cn } from "@/utils/cn";

export function SkillPill({
  skill,
  className,
  variant = "skills",
}: TSkillPillProps) {
  const Icon = skill.icon;

  const variants = {
    iconSize: {
      hero: "size-6",
      skills: "size-8 sm:size-16",
      projects: "size-4",
    },
    pillShape: {
      hero: "flex items-center flex-shrink-0 border rounded-full max-w-max gap-2 px-3 py-2 bg-white shadow-sm",
      skills:
        "flex flex-col items-center flex-shrink-0 border rounded-2xl gap-2  px-2 py-4 shadow-md bg-white min-w-24 sm:min-w-36 aspect-square",
      projects:
        "flex items-center flex-shrink-0 border rounded-full max-w-max gap-1 px-3 py-1",
    },
    textSize: {
      hero: "text-base md:text-md xl:text-lg",
      skills: "text-xs md:text-md xl:text-lg",
      projects: "text-xs",
    },
  };

  return (
    <li key={skill.name} className={cn(variants.pillShape[variant], className)}>
      <span style={{ color: skill.brandColour }}>
        {Icon ? <Icon className={variants.iconSize[variant]} /> : null}
      </span>
      <span className={variants.textSize[variant]}>{skill.name}</span>
    </li>
  );
}
