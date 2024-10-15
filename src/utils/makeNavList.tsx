import { NavLink } from "@/components/layout/nav-link";
import type { TNavListType, TPath } from "@/lib/types";

export function makeNavList(
  list: TPath[],
  type: TNavListType,
): JSX.Element[] | null {
  if (type !== "mobileMainNav" && type !== "desktopMainNav") return null;

  const className = type === "mobileMainNav" ? "block text-right" : "";

  return list.map((item) => (
    <li key={item.label}>
      <NavLink path={item.path} className={className}>
        {item.label}
      </NavLink>
    </li>
  ));
}
