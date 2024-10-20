import { SkillPill } from "@/components/ui/skill-pill";
import type { TProjectProps } from "@/lib/types";
import Image from "next/image";

export function Project({ project }: TProjectProps) {
  return (
    <article className="border rounded-md shadow-md bg-white space-y-4">
      <h3 className="font-semibold px-4 pt-4">{project.title}</h3>
      <div className="px-4">
        <Image
          src={project.image}
          alt="VS Code Theme"
          className="rounded-md overflow-hidden aspect-video object-cover"
        />
      </div>
      <p className="px-4">{project.overview}</p>
      <ul className="border-t p-4 flex gap-2 flex-wrap">
        {Object.values(project.skills).map((skill) => (
          <SkillPill
            key={skill.name}
            skill={skill}
            className="px-2 py-1 gap-1"
          />
        ))}
      </ul>
    </article>
  );
}
