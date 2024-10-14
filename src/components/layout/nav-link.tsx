import Link from "next/link";

type TNavLinkProps = {
  children: React.ReactNode;
  path: string;
};

export function NavLink({ children, path }: TNavLinkProps) {
  return (
    <Link className="font-semibold" href={path}>
      {children}
    </Link>
  );
}
