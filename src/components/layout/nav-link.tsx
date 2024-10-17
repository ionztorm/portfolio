import { cn } from "@/utils/cn";
import Link from "next/link";

type TNavLinkProps = {
	children: React.ReactNode;
	path: string;
	className?: string;
};

export function NavLink({ children, path, className }: TNavLinkProps) {
	return (
		<Link className={cn("text-slate-700", className)} href={path}>
			{children}
		</Link>
	);
}
