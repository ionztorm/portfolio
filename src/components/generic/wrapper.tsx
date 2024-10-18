import { cn } from "@/utils/cn";
import type { TWrapperProps } from "@/lib/types";

export function Wrapper({ children, className }: TWrapperProps) {
  return (
    <div className={cn("w-full max-w-[70rem] mx-auto", className)}>
      {children}
    </div>
  );
}
