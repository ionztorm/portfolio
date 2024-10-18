import { cn } from "@/utils/cn";
import Link from "next/link";
import type { TNavLinkProps } from "@/lib/types";

export function NavLink({ children, path, className }: TNavLinkProps) {
  return (
    <Link
      className={cn(
        "text-slate-700 sm:text-slate-100 font-semibold hover:bg-violet-500 hover:text-white rounded-lg transition duration-400",
        className,
      )}
      href={path}
    >
      {children}
    </Link>
  );
}
