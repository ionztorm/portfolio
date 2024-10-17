import { cn } from "@/utils/cn";

type TWrapper = {
	children: React.ReactNode;
	className?: string;
};

export function Wrapper({ children, className }: TWrapper) {
	return (
		<div className={cn("w-full max-w-[70rem] mx-auto", className)}>
			{children}
		</div>
	);
}
