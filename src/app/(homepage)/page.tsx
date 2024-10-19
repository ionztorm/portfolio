import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";

import { About } from "@/app/(homepage)/_components/_about/about";
import { Projects } from "@/app/(homepage)/_components/_projects/projects";
import { Contact } from "@/app/(homepage)/_components/_contact/contact";

import { Section } from "@/components/generic/section";
import { Skills } from "./_components/_skills/skills";

export default function Home() {
  return (
    <div className="relative mx-auto min-h-[100dvh] lg:flex lg:gap-4 max-w-screen-2xl">
      <div
        className="
        flex items-center justify-center
        lg:w-1/2 lg:pl-20 lg:py-20 lg:sticky lg:top-0 lg:max-h-[100vh]"
      >
        <Header
          className="
          flex flex-col items-center justify-center
          px-6 py-12 h-[45vh]
          lg:sticky lg:top-[80px] lg:py-20 lg:justify-between lg:h-full"
        />
      </div>

      <Main className="lg:w-1/2 grid lg:pr-20 lg:py-20">
        <Section id="about">
          <About />
        </Section>
        <Section id="projects" heading="Projects">
          <Projects />
        </Section>
        <Section id="skills" heading="Skills">
          <Skills />
        </Section>
        <Section id="contact" heading="Get in touch">
          <Contact />
        </Section>
      </Main>
    </div>
  );
}
