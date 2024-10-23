import { cn } from "@/utils/cn";
import type { TComponentProps } from "@/lib/types";

export function Container({ children, className }: TComponentProps) {
  return (
    <div className={cn("w-full max-w-5xl mx-auto", className)}>{children}</div>
  );
}
