import { cn } from "@/utils/cn";
import Link from "next/link";
import type { TNavLinkProps } from "@/lib/types";

export function NavLink({ children, path, className }: TNavLinkProps) {
	return (
		<Link
			className={cn(
				"text-[#73daca] font-semibold hover:bg-[#73daca] hover:text-[#16161e] rounded-lg transition duration-400",
				className,
			)}
			href={path}
		>
			{children}
		</Link>
	);
}
