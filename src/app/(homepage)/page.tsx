"use client";
import { Header } from "@/app/(homepage)/_components/_layout/header";
import { Main } from "@/components/layout/main";

import { Projects } from "@/app/(homepage)/_components/_projects/projects";

import { Section } from "@/components/ui/section";
import { Skills } from "@/app/(homepage)//_components/_skills/skills";
import { About } from "./_components/_about/about";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr]">
      <Header />
      <Main>
        <Section id="about">
          <About />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        {/* 
        <Section id="contact">
          <Contact />
        </Section> */}
      </Main>
    </div>
  );
}
