import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { Footer } from "@/components/layout/footer";

import { About } from "@/app/(homepage)/_components/_about/about";
import { Projects } from "@/app/(homepage)/_components/_projects/projects";
import { Contact } from "@/app/(homepage)/_components/_contact/contact";

import { Wrapper } from "@/components/generic/wrapper";
import { Section } from "@/components/generic/section";

export default function Home() {
	return (
		<Wrapper className="grid grid-rows-[auto_1fr_auto] gap-10 px-4 min-h-screen">
			<Header />
			<Main>
				<Section id="about" heading="About">
					<About />
				</Section>
				<Section id="projects" heading="Projects">
					<Projects />
				</Section>
				<Section id="contact" heading="Get in touch">
					<Contact />
				</Section>
			</Main>
			<Footer />
		</Wrapper>
	);
}
