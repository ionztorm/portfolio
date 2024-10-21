import type { twScreens } from "@/hooks/useViewport";
import type { StaticImageData } from "next/image";
import type { PropsWithChildren } from "react";
import type { IconType } from "react-icons";

// paths

export type TPath = { path: string; label: string; icon?: string };
export type TPaths = Record<string, TPath>;

// skills

export type TSkill = { name: string; icon?: IconType; brandColour?: string };
export type TSkills = Record<string, TSkill>;
export type TSkillPillProps = Readonly<{
  skill: TSkill;
  className?: string;
  variant?: TSkillPillVariant;
}>;
export type TSkillPillVariant = "skills" | "projects" | "hero";
export type TSkillListProps = {
  variant: TSkillPillVariant;
  className: string;
  skills: TSkills;
};

// projects

export type TProject = {
  title: string;
  image: StaticImageData;
  overview: string;
  skills: TSkills;
  links?: TPaths;
};
export type TProjects = TProject[];

// react types

export type TChildrenProps = Readonly<PropsWithChildren>;

// tailwind types

export type TScreenSizes = keyof typeof twScreens;

// component props

export type TProjectProps = Readonly<{ project: TProject }>;
export type TIconProps = Readonly<{ className?: string }>;
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
  path: TPath["path"];
  className?: string;
}> &
  TChildrenProps;
