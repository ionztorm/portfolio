type TMainProps = {
	children: React.ReactNode;
	className: string;
};
export function Main({ children, className }: TMainProps) {
	return <main className={className}>{children}</main>;
}
