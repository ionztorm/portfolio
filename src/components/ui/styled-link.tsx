import type { TPath } from "@/lib/types";
import Link from "next/link";

type TStyledLinkProps = {
  path: TPath;
  lowerCase?: boolean;
};

export function StyledLink({ path, lowerCase }: TStyledLinkProps) {
  const label = lowerCase ? path.label.toLowerCase() : path.label;
  return (
    <Link
      href={path.path}
      className="font-semibold text-[#2ac3de] transform hover:scale-105 inline-block duration-300 hover:-rotate-6"
    >
      {label}
    </Link>
  );
}
