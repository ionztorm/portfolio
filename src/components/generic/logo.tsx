import Link from "next/link";

type TLogoProps = {
	title: string;
	subtext?: string;
};
export function Logo({ title, subtext }: TLogoProps) {
	return (
		<p className="grid">
			<Link href="#">
				<span className="text-slate-100 text-lg font-bold">{title}</span>
			</Link>
			{subtext && <span>{subtext}</span>}
		</p>
	);
}
