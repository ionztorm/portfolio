import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { Section } from "@/components/layout/section";
import { Projects } from "@/components/projects/projects";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <About />
        </Section>
        <Section>
          <Projects />
        </Section>
        <Section>
          <Contact />
        </Section>
      </Main>
      <Footer />
    </>
  );
}
