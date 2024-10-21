import { SkillList } from "@/components/ui/skill-list";
import type { TProjectProps } from "@/lib/types";
import Image from "next/image";

export function Project({ project }: TProjectProps) {
  return (
    <article className="border rounded-md shadow-md bg-white transition duration-300 hover:scale-[1.02] hover:shadow-lg text-sm">
      <h3 className="font-semibold px-2 py-2">{project.title}</h3>
      <div className="px-2">
        <Image
          src={project.image}
          alt="VS Code Theme"
          className="rounded-md overflow-hidden aspect-video object-cover"
        />
      </div>
      <p className="px-2 py-2">{project.overview}</p>
      <div className="border-t flex w-full justify-end gap-1 p-2 items-center">
        <p>links</p>
      </div>
      <SkillList
        variant="projects"
        className="border-t p-2 flex gap-1 flex-wrap"
        skills={project.skills}
      />
    </article>
  );
}
