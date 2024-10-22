import { cn } from "@/utils/cn";
import type { TSectionProps } from "@/lib/types";

export function Section({ children, id, className }: TSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "mb-10 sm:mb-14 xl:mb-20 mx-auto max-w-5xl scroll-mt-8 sm:scroll-mt-28",
        className
      )}
    >
      {children}
    </section>
  );
}
