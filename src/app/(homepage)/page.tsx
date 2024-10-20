"use client";
import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";

import { About } from "@/app/(homepage)/_components/_about/about";
import { Projects } from "@/app/(homepage)/_components/_projects/projects";
import { Contact } from "@/app/(homepage)/_components/_contact/contact";

import { Section } from "@/components/generic/section";
import { Skills } from "./_components/_skills/skills";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_auto_1fr_auto]">
      <Header className="px-4 mb-10 sm:mb-14 xl:mb-20 p-6 sm:p-14" />
      <Main>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </Main>
    </div>
  );
}
