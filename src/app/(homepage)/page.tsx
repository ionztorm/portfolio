import { About } from "@/components/about/about";
import { Footer } from "@/components/layout/footer";
import { Main } from "@/components/layout/main";
import { Section } from "@/components/layout/section";
import { Projects } from "@/components/projects/projects";

export default function Home() {
  return (
    <Main>
      <Section>
        <About />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Footer />
    </Main>
  );
}
