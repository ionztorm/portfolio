import { cn } from "@/utils/cn";
import type { TWrapperProps } from "@/lib/types";

export function Container({ children, className }: TWrapperProps) {
  return (
    <div className={cn("w-full max-w-5xl mx-auto", className)}>{children}</div>
  );
}
