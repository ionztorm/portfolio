import { Hero } from "@/app/(homepage)/_components/_hero/hero";
import type { THeaderProps } from "@/lib/types";
import { Wrapper } from "../generic/wrapper";

export function Header({ className }: THeaderProps) {
	return (
		<header className={className}>
			<Wrapper className="bg-white shadow-lg rounded-3xl py-10 sm:py-16 grid place-content-center place-items-center gap-3">
				<Hero />
			</Wrapper>
		</header>
	);
}
