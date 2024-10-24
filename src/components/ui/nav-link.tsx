import { cn } from "@/utils/cn";
import Link from "next/link";
import type { TNavLinkProps } from "@/lib/types";

export function NavLink({ children, path, className, onClick }: TNavLinkProps) {
  return (
    <Link
      className={cn(
        "py-3 font-semibold hover:bg-[#73daca] hover:text-slate-800 rounded-lg transition duration-400",
        className
      )}
      href={path}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
