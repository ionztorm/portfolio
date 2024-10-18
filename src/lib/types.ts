import type { twScreens } from "@/hooks/useViewport";
// paths

export type TPath = { path: string; label: string; icon: string };

// tailwind types

export type TScreenSizes = keyof typeof twScreens;
