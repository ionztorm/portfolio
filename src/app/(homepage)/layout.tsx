"use client";
import { Logo } from "@/components/generic/logo";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { HOMEPAGE_NAV_PATHS } from "@/lib/constants";

type THomepageLayoutProps = {
	children: React.ReactNode;
};
export default function HomepageLayout({ children }: THomepageLayoutProps) {
	return (
		<>
			<Navbar paths={HOMEPAGE_NAV_PATHS}>
				<Logo title="Leon Lonsdale" />
			</Navbar>
			{children}

			<Footer />
		</>
	);
}
