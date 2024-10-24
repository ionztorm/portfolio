import { NavLink } from "@/components/ui/nav-link";
import type { TCVNavPaths, THomepageNavPaths, TScreenSizes } from "@/lib/types";

export function makeNavList(
  pathList: THomepageNavPaths | TCVNavPaths,
  screenSize: TScreenSizes,
  onClick?: () => void
): React.ReactElement<"li">[] | null {
  if (screenSize !== "sm" && screenSize !== "lg") return null;

  const className =
    screenSize === "sm"
      ? "w-full flex justify-center items-center"
      : "inline-block hover:scale-105 hover:-rotate-6 transform px-4";

  return Object.values(pathList).map((item) => (
    <li
      key={item.label}
      className={screenSize === "sm" ? "w-full text-center" : ""}
    >
      <NavLink path={item.path} className={className} onClick={onClick}>
        {item.label}
      </NavLink>
    </li>
  ));
}
