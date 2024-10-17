import { NavLink } from "@/components/layout/nav-link";
import type { TNavListType, TPath } from "@/lib/types";

export function makeNavList(
	list: TPath[],
	type: TNavListType,
): React.ReactElement<"li">[] | null {
	if (type !== "smScreen" && type !== "lgScreen") return null;

	const className =
		type === "smScreen"
			? "w-full flex justify-center items-center py-4"
			: "inline-block hover:scale-105 hover:-rotate-6 transform px-4 py-2";

	return list.map((item) => (
		<li
			key={item.label}
			className={type === "smScreen" ? "w-full text-center" : ""}
		>
			<NavLink path={item.path} className={className}>
				{item.label}
			</NavLink>
		</li>
	));
}
