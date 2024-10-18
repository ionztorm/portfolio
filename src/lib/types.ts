import type { twScreens } from "@/hooks/useViewport";
// paths

export type TPath = Record<
	string,
	{ path: string; label: string; icon: string }
>;

// tailwind types

export type TScreenSizes = keyof typeof twScreens;
