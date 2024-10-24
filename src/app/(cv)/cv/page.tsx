import { Main } from "@/components/layout/main";
import { Section } from "@/components/ui/section";
import { Profile } from "@/app/(cv)/cv/_components/_profile/profile";
import { Experience } from "./_components/_experience/experience";
import { Education } from "./_components/_education/education";
import { Skills } from "./_components/_skills/skills";

export default function CVPage() {
  return (
    <Main>
      <Section id="profile">
        <Profile />
      </Section>
      <Section id="experience">
        <Experience />
      </Section>
      <Section id="education">
        <Education />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
    </Main>
  );
}
