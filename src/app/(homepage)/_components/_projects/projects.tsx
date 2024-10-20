import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  return (
    <>
      <SectionHeading>Projects</SectionHeading>
      <div className="grid gap-3 md:grid-cols-2">
        <article className="border rounded-md p-2 shadow-sm bg-white">
          <h3 className="font-semibold">VS Code Theme</h3>
          <img src="" alt="" />
          <p>
            As a person with vision issues, having a theme that is clean and
            easy to read is important; so I designed one. The theme uses a dark
            background with contrasting shades of purple and green that make
            coding easy to look at day and night.
          </p>
          <ul>skills</ul>
        </article>
        <article className="border rounded-md p-2 shadow-sm bg-white">
          <h3>VS Code Theme</h3>
          <img src="" alt="" />
          <p>About</p>
          <ul>skills</ul>
        </article>
        <article className="border rounded-md p-2 shadow-sm bg-white">
          <h3>VS Code Theme</h3>
          <img src="" alt="" />
          <p>About</p>
          <ul>skills</ul>
        </article>
      </div>
    </>
  );
}
