type TLogoProps = {
	title: string;
	subtext?: string;
};
export function Logo({ title, subtext }: TLogoProps) {
	return (
		<h1 className="flex flex-col">
			<span className="text-2xl font-bold">{title}</span>
			{subtext && <span>{subtext}</span>}
		</h1>
	);
}
