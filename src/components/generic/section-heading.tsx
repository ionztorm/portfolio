type TSectionHeadingProps = {
	children: React.ReactNode;
};
export function SectionHeading({ children }: TSectionHeadingProps) {
	return (
		<header>
			<h2 className="text-3xl font-bold text-slate-800 mb-5">{children}</h2>
		</header>
	);
}
