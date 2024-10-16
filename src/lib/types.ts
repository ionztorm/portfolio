import type { twScreens } from "@/hooks/useViewport";
// paths

export type TPath = { path: string; label: string };
export type TNavListType = "lgScreen" | "smScreen";

// tailwind types

export type TBreakpointOptions = keyof typeof twScreens;
