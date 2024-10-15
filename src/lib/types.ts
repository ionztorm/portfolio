import { twScreens } from "@/hooks/useViewport";
// paths

export type TPath = { path: string; label: string };
export type TNavListType = "desktopMainNav" | "mobileMainNav";

// tailwind types

export type TBreakpointOptions = keyof typeof twScreens;
