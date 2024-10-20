import { cn } from "@/utils/cn";
import Link from "next/link";
import type { TNavLinkProps } from "@/lib/types";

export function NavLink({ children, path, className }: TNavLinkProps) {
  return (
    <Link
      className={cn(
        "py-3 font-semibold hover:bg-[#73daca] rounded-lg transition duration-400",
        className
      )}
      href={path}
    >
      {children}
    </Link>
  );
}
