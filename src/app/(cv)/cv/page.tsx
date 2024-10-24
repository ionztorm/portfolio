import { Main } from "@/components/layout/main";
import { Section } from "@/components/ui/section";
import { Profile } from "@/app/(cv)/cv/_components/_profile/profile";

export default function CVPage() {
  return (
    <Main>
      <Section id="profile">
        <Profile />
      </Section>
    </Main>
  );
}
