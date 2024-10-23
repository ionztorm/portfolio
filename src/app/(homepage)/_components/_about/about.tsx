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
          <strong>responsive user experiences</strong>. I&apos;m also bald -
          this is very important information.
        </p>
        <p>
          Being self taught has allowed me to pursue the technologies that I
          find interesting - and I&apos;m not finished yet! You can check out
          the topic I&apos; learned and used in my{" "}
          <StyledLink path={HOMEPAGE_NAV_PATHS.skills} lowerCase={true} />{" "}
          section.
        </p>
        <p>
          I&apos;m an avid Formula 1 fan and will sink my spare time into the TV
          whenever it&apos;s on and my head isn&apos; in the books, and I
          collect models of the cars and helmets too 🤓. But I can&apos;t spend
          all my time sitting in a seat looking at screens, so I like to keep
          myself active with either a 25km indoor cycle or 6km outdoor walk
          every day, weather permitting - but, as I say, I&apos;m bald, so the
          rain doesn&apos; bother me much.
        </p>
      </article>
    </>
  );
}
