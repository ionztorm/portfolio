import type { TMainProps } from "@/lib/types";

export function Main({ children, className }: TMainProps) {
  return <main className={className}>{children}</main>;
}
