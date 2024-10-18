import { useViweport } from "@/hooks/useViewport";
import { useState } from "react";
import type { TPath } from "@/lib/types";
import { makeNavList } from "@/utils/makeNavList";

type TNavbarProps = {
	children: React.ReactNode;
	paths: TPath;
};

export function Navbar({ paths, children }: TNavbarProps) {
	const [isOpen, setIsOpen] = useState(false);
	const isMobile = useViweport("sm");

	const navListLG = makeNavList(paths, "lg");
	const navListSM = makeNavList(paths, "sm");

	return (
		<nav className="relative">
			<div className="flex items-center justify-between">
				{children}

				{/* md+ menu */}
				{!isMobile && (
					<ul className="hidden sm:flex sm:gap-5 md:gap-12 lg:gap-20 ">
						{navListLG}
					</ul>
				)}

				{/* burger button */}
				{isMobile && (
					<button
						type="button"
						onClick={() => setIsOpen(!isOpen)}
						className="relative w-8 h-8 flex items-center justify-center group sm:hidden"
						aria-label="Toggle Menu"
						aria-expanded={isOpen}
					>
						<div
							className={`w-6 h-0.5 bg-slate-100 transition-transform duration-300 ease-in-out before:content-[''] before:block before:absolute before:w-6 before:h-0.5 before:bg-slate-100 before:transition-transform before:duration-300 before:ease-in-out after:content-[''] after:block after:absolute after:w-6 after:h-0.5 after:bg-slate-100 after:transition-transform after:duration-300 after:ease-in-out ${
								isOpen
									? "rotate-45 before:rotate-90 before:-translate-y-0 after:-rotate-90 after:-translate-y-0"
									: "before:-translate-y-2 after:translate-y-2"
							}`}
						/>
					</button>
				)}
			</div>
			{/* mobile menu */}
			{isMobile && isOpen && (
				<ul className="sm:hidden absolute w-full mt-4 flex flex-col items-center gap-8 rounded-sm shadow-lg p-5 z-10 bg-white">
					{navListSM}
				</ul>
			)}
		</nav>
	);
}
