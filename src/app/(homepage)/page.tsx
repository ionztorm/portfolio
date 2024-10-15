import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Wrapper } from "@/components/generic/wrapper";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { Section } from "@/components/layout/section";
import { Projects } from "@/components/projects/projects";

export default function Home() {
  return (
    <Wrapper className="grid grid-rows-[auto_1fr_auto] gap-10 px-4 min-h-screen">
      <Header />
      <Main>
        <Section id="about">
          <About />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </Main>
      <Footer />
    </Wrapper>
  );
}
