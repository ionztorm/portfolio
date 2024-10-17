type TLogoProps = {
	title: string;
	subtext?: string;
};
export function Logo({ title, subtext }: TLogoProps) {
	return (
		<p className="grid">
			<span className="text-lg sm:text-2xl lg:text-3xl font-bold">{title}</span>
			{subtext && <span>{subtext}</span>}
		</p>
	);
}
