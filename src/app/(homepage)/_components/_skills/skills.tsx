import { SectionHeading } from "@/components/generic/section-heading";
import { SKILLS } from "@/lib/constants";

export function Skills() {
  return (
    <>
      <ul className="mx-auto flex items-center justify-center gap-4 flex-wrap px-10 py-4">
        {Object.values(SKILLS).map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-2 flex-shrink-0 border rounded-full px-3 py-1"
          >
            <span>{skill.icon}</span>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
