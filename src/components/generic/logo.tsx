import Link from "next/link";
import type { TLogoProps } from "@/lib/types";

export function Logo({ title, subtext }: TLogoProps) {
	return (
		<p className="grid">
			<Link href="#">
				<span className="text-xl md:text-2xl font-bold">{title}</span>
			</Link>
			{subtext && <span>{subtext}</span>}
		</p>
	);
}
