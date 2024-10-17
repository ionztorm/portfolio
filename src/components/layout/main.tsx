import { Wrapper } from "../generic/wrapper";

type TMainProps = {
	children: React.ReactNode;
	className: string;
};
export function Main({ children, className }: TMainProps) {
	return (
		<main className={className}>
			<Wrapper className="grid gap-10">{children}</Wrapper>
		</main>
	);
}
