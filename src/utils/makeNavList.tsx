import { NavLink } from "@/components/layout/nav-link";
import type { TNavListType, TPath } from "@/lib/types";

export function makeNavList(
	list: TPath[],
	type: TNavListType,
): React.ReactElement<"li">[] | null {
	if (type !== "smScreen" && type !== "lgScreen") return null;

	const className = type === "smScreen" ? "block text-right" : "";

	return list.map((item) => (
		<li key={item.label}>
			<NavLink path={item.path} className={className}>
				{item.label}
			</NavLink>
		</li>
	));
}
