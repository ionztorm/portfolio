import { SectionHeading } from "@/components/ui/section-heading";

import vscodetheme from "@/../../public/vscodetheme.png";
import { Project } from "./project";
import { SKILLS } from "@/lib/constants";

const projects = [
  {
    title: "VS Code Theme",
    image: vscodetheme,
    overview:
      "A dark VS Code theme using greens and purples so that your code is easy to read day and night",
    skills: {
      javascript: SKILLS.javascript,
    },
  },
  {
    title: "Slack Clone",
    image: vscodetheme,
    overview:
      "A dark VS Code theme using greens and purples so that your code is easy to read day and night",
    skills: {
      nextjs: SKILLS.nextjs,
      javascript: SKILLS.convex,
      typescript: SKILLS.typescript,
    },
  },
  {
    title: "Portfolio",
    image: vscodetheme,
    overview:
      "A dark VS Code theme using greens and purples so that your code is easy to read day and night",
    skills: {
      nextjs: SKILLS.nextjs,
      javascript: SKILLS.javascript,
    },
  },
  {
    title: "Petsoft",
    image: vscodetheme,
    overview:
      "A dark VS Code theme using greens and purples so that your code is easy to read day and night",
    skills: {
      nextjs: SKILLS.nextjs,
      javascript: SKILLS.javascript,
    },
  },
];

export function Projects() {
  return (
    <>
      <SectionHeading>Projects</SectionHeading>
      <div className="grid gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}
