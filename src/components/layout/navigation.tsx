import { Wrapper } from "@/components/generic/wrapper";
import { NavLink } from "@/components/layout/nav-link";
import { Logo } from "@/components/generic/logo";

export function Navbar() {
  const navPaths = [
    { path: "#about", label: "About" },
    { path: "#projects", label: "Projects" },
    { path: "#contact", label: "Contact" },
  ];

  const navList = navPaths.map((path) => (
    <li key={path.label}>
      <NavLink path={path.path}>{path.label}</NavLink>
    </li>
  ));

  return (
    <nav className="flex items-center justify-between mb-5 py-8 border-b border-b-slate-100">
      <Logo />
      <ul className="flex flex-col items-end gap-3 mx-5 pt-5 md:flex-row md:justify-end">
        {navList}
      </ul>
    </nav>
  );
}
