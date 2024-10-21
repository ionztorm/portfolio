import { SectionHeading } from "@/components/ui/section-heading";

import { Project } from "./project";
import { PROJECTS } from "@/lib/constants.data";

export function Projects() {
  return (
    <>
      <SectionHeading>Projects</SectionHeading>
      <div className="grid gap-3 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}
