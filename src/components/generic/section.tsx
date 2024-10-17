import { SectionHeading } from "./section-heading";

type TSectionProps = {
	children: React.ReactNode;
	id?: string;
	heading?: string;
};
export function Section({ children, id, heading }: TSectionProps) {
	return (
		<section id={id}>
			{!!heading && <SectionHeading>{heading}</SectionHeading>}
			{children}
		</section>
	);
}
