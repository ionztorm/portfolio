import { NavLink } from "@/components/layout/nav-link";
import type { TPaths, TScreenSizes } from "@/lib/types";

export function makeNavList(
  pathList: TPaths,
  screenSize: TScreenSizes,
): React.ReactElement<"li">[] | null {
  if (screenSize !== "sm" && screenSize !== "lg") return null;

  const className =
    screenSize === "sm"
      ? "w-full flex justify-center items-center py-4"
      : "inline-block hover:scale-105 hover:-rotate-6 transform px-4 py-2";

  return Object.values(pathList).map((item) => (
    <li
      key={item.label}
      className={screenSize === "sm" ? "w-full text-center" : ""}
    >
      <NavLink path={item.path} className={className}>
        {item.label}
      </NavLink>
    </li>
  ));
}
