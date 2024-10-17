import { SectionHeading } from "./section-heading";
import { Wrapper } from "./wrapper";

type TSectionProps = {
	children: React.ReactNode;
	id?: string;
	heading?: string;
};
export function Section({ children, id, heading }: TSectionProps) {
	return (
		<section id={id}>
			<Wrapper>
				{!!heading && <SectionHeading>{heading}</SectionHeading>}
				{children}
			</Wrapper>
		</section>
	);
}
