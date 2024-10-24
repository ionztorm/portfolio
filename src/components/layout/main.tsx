import type { TMainProps } from "@/lib/types";
import { cn } from "@/utils/cn";

export function Main({ children, className }: TMainProps) {
  return (
    <main
      className={cn(
        "px-4 mb-10 sm:mb-14 xl:mb-20 mx-auto max-w-5xl w-full",
        className
      )}
    >
      {children}
    </main>
  );
}
