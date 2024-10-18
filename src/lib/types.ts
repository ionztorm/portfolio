import type { twScreens } from "@/hooks/useViewport";
import type { PropsWithChildren } from "react";

// paths

export type TPathItem = { path: string; label: string; icon?: string };
export type TPaths = Record<string, TPathItem>;

// react types

export type TChildrenProps = Readonly<PropsWithChildren>;

// tailwind types

export type TScreenSizes = keyof typeof twScreens;

// component props

export type TLogoProps = Readonly<{ title: string; subtext?: string }>;
export type TSectionHeadingProps = TChildrenProps;
export type TSectionProps = Readonly<{
  id?: string;
  heading?: string;
  className?: string;
}> &
  TChildrenProps;
export type TWrapperProps = Readonly<{ className?: string }> & TChildrenProps;
export type THeaderProps = Readonly<{ className?: string }>;
export type TFooterProps = Readonly<{ className?: string }>;
export type TMainProps = Readonly<{ className?: string }> & TChildrenProps;
export type TNavbarProps = Readonly<{ paths: TPaths }> & TChildrenProps;
export type TNavLinkProps = Readonly<{
  path: TPathItem["path"];
  className?: string;
}> &
  TChildrenProps;
