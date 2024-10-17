import { cn } from "@/utils/cn";
import Link from "next/link";

type TNavLinkProps = {
	children: React.ReactNode;
	path: string;
	className?: string;
};

export function NavLink({ children, path, className }: TNavLinkProps) {
	return (
		<Link
			className={cn(
				"text-slate-700 sm:text-slate-100 font-semibold hover:bg-violet-500 hover:text-white rounded-lg transition duration-400",
				className,
			)}
			href={path}
		>
			{children}
		</Link>
	);
}
