"use client";
import { HOMEPAGE_NAV_PATHS } from "@/lib/constants";
import { Navbar } from "./navbar";
import { Logo } from "../generic/logo";

export function Header() {
	return (
		<header className="flex flex-col">
			<Navbar paths={HOMEPAGE_NAV_PATHS}>
				<Logo title="Leon Lonsdale" subtext="Learning through video" />
			</Navbar>
			<div className="w-full aspect-video border border-dashed rounded-md flex items-center justify-center shadow-md overflow-hidden">
				I&apos;m a photo
			</div>
		</header>
	);
}
