import type { twScreens } from "@/hooks/useViewport";
import type { StaticImageData } from "next/image";
import type { PropsWithChildren } from "react";
import type { IconType } from "react-icons";
import type { LINKS, SKILLS } from "./constants.data";

// react types

export type TChildrenProps = Readonly<PropsWithChildren>;

// tailwind types

export type TScreenSizes = keyof typeof twScreens;

// paths

export type TLinks = typeof LINKS;
export type TLinksKeys = keyof typeof LINKS;
export type THomepageNavPaths = typeof LINKS.homepageNavPaths;
export type TSocialLinks = typeof LINKS.socials;
export type TProjectLinks = typeof LINKS.projectLinks;

export type TPath = { path: string; label: string; icon?: string };
export type TPaths = Record<string, TPath>;

// skills

export type TSkillsKey = keyof typeof SKILLS;
export type TSkills = typeof SKILLS;

export type TSkill = {
  name: string;
  icon?: IconType;
  brandColour?: string;
  tag?: readonly string[];
};

export type TSkillPillProps = Readonly<{
  skill: TSkill;
  className?: string;
  variant?: TSkillPillVariant;
}>;
export type TSkillPillVariant = "skills" | "projects" | "hero";
export type TSkillListProps = {
  variant: TSkillPillVariant;
  className: string;
  skills: Partial<Record<TSkillsKey, TSkill>>;
  tag?: string;
};

// projects

export type TProject = {
  title: string;
  image: StaticImageData;
  overview: string;
  skills: Partial<Record<TSkillsKey, TSkill>>;
  links?: TPaths;
};
export type TProjects = TProject[];
export type TProjectProps = Readonly<{ project: TProject }>;

// navbar

export type TNavbarProps = Readonly<{ paths: THomepageNavPaths }> &
  TChildrenProps;
export type TNavLinkProps = Readonly<{
  path: THomepageNavPaths[keyof THomepageNavPaths]["path"];
  className?: string;
  onClick?: () => void;
}> &
  TChildrenProps;

// layout components

export type TMainProps = TChildrenProps;

export type TSectionHeadingProps = TChildrenProps;
export type TSectionProps = Readonly<{
  id?: string;
  heading?: string;
  className?: string;
}> &
  TChildrenProps;

export type TComponentProps = Readonly<{ className?: string }> & TChildrenProps;

// ui component props

export type TIconProps = Readonly<{ className?: string }>;
export type TLogoProps = Readonly<{ title: string; subtext?: string }>;
