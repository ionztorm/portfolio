import { cn } from "@/utils/cn";
import type { TSectionProps } from "@/lib/types";

export function Section({ children, id, className }: TSectionProps) {
	return (
		<section
			id={id}
			className={cn(
				"mb-10 sm:mb-14 xl:mb-20 px-4 mx-auto max-w-5xl ",
				className,
			)}
		>
			{children}
		</section>
	);
}