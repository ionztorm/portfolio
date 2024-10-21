import { SectionHeading } from "@/components/ui/section-heading";

import { Project } from "./project";
import { PROJECTS } from "@/lib/constants.data";

export function Projects() {
  return (
    <>
      <SectionHeading>Projects</SectionHeading>
      <div className="grid gap-4 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}
