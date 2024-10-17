import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { Footer } from "@/components/layout/footer";

import { About } from "@/app/(homepage)/_components/_about/about";
import { Projects } from "@/app/(homepage)/_components/_projects/projects";
import { Contact } from "@/app/(homepage)/_components/_contact/contact";

import { Section } from "@/components/generic/section";
import { Skills } from "./_components/_skills/skills";
import { Hero } from "./_components/_hero/hero";

export default function Home() {
	return (
		// <Wrapper className="grid grid-rows-[auto_1fr_auto] gap-10 px-4 min-h-screen">
		<>
			<Header className="px-4 py-4 border-b mb-4 bg-violet-950 shadow-sm" />
			<Main className="grid">
				<Section id="hero">
					<Hero />
				</Section>
				<Section id="about">
					<About />
				</Section>
				<Section id="projects" heading="Projects">
					<Projects />
				</Section>
				<Section id="skills" heading="Skills">
					<Skills />
				</Section>
				<Section
					id="contact"
					heading="Get in touch"
					className="bg-[#73daca]/50"
				>
					<Contact />
				</Section>
			</Main>
			<Footer className="text-slate-200 text-sm flex justify-center items-center py-4 px-4 border-t bg-violet-950" />
		</>
		// </Wrapper>
	);
}
