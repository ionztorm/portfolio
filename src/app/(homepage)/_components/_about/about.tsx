import { SectionHeading } from "@/components/ui/section-heading";
import { StyledLink } from "@/components/ui/styled-link";
import { HOMEPAGE_NAV_PATHS } from "@/lib/constants.data";

export function About() {
  return (
    <>
      <SectionHeading>Get to know me</SectionHeading>
      <article className="grid gap-4">
        <p>
          Hey, I&apos;m Leon. I&apos;m a <strong>fullstack</strong> web
          developer with a <strong>passion</strong> for <strong>modern</strong>{" "}
          technologies and developing <strong>clean</strong>,{" "}
          <strong>responsive user experiences</strong>.
        </p>
        <p>
          I&apos;m self taught, which has allowed me to choose the technologies
          I have a passion for. Check out my{" "}
          <StyledLink path={HOMEPAGE_NAV_PATHS.skills} lowerCase={true} /> below
          to see what I&apos;ve been spending my time on.
        </p>
        <p>
          When I&apos;m not studying, I enjoy watching Formula 1, and have a
          collection of model F1 cars and helmets (15 cars and 3 helmets, and
          counting). I like to keep myself active with either a 25km indoor
          cycle or 6km outdoor walk every day, weather permitting.
        </p>
      </article>
    </>
  );
}
