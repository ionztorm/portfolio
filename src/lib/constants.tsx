import type { TPaths, TSkills } from "./types";
import {
  RiJavascriptFill,
  RiHtml5Fill,
  RiTailwindCssFill,
  RiReactjsFill,
  RiNextjsFill,
  RiNodejsFill,
} from "react-icons/ri";
import { BiLogoTypescript, BiLogoGoLang } from "react-icons/bi";
import { SiCss3, SiExpress } from "react-icons/si";
import { DiSass, DiMongodb } from "react-icons/di";
import { ConvexIcon } from "@/components/icon/convex";
import { BunIcon } from "@/components/icon/bun";

export const HOMEPAGE_NAV_PATHS: TPaths = {
  about: { path: "#about", label: "About", icon: "" },
  projects: { path: "#projects", label: "Projects", icon: "" },
  skills: { path: "#skills", label: "Skills", icon: "" },
  contact: { path: "#contact", label: "Contact", icon: "" },
};

export const SOCIAL_LINKS: TPaths = {
  github: { path: "https://github.com/ionztorm", label: "github", icon: "" },
  X: { path: "", label: "X", icon: "" },
  instagram: { path: "", label: "instagram", icon: "" },
  discord: { path: "", label: "Discord", icon: "" },
};

const iconClasses = "size-6";
export const SKILLS: TSkills = {
  html: {
    name: "HTML5",
    icon: <RiHtml5Fill className={iconClasses} />,
    brandColour: "#f06529",
  },
  css: {
    name: "CSS",
    icon: <SiCss3 className={iconClasses} />,
    brandColour: "#2965f1",
  },
  tailwind: {
    name: "TailwindCSS",
    icon: <RiTailwindCssFill className={iconClasses} />,
    brandColour: "#44a8b3",
  },
  sass: {
    name: "SaSS",
    icon: <DiSass className={iconClasses} />,
    brandColour: "#cc6699",
  },
  javascript: {
    name: "JavaScript",
    icon: <RiJavascriptFill className={iconClasses} />,
    brandColour: "#F0DB4F",
  },
  typescript: {
    name: "TypeScript",
    icon: <BiLogoTypescript className={iconClasses} />,
    brandColour: "#2f75c1",
  },
  reactjs: {
    name: "React JS",
    icon: <RiReactjsFill className={iconClasses} />,
    brandColour: "#18d3f8",
  },
  nextjs: { name: "Next JS", icon: <RiNextjsFill className={iconClasses} /> },
  convex: { name: "Convex", icon: <ConvexIcon className={iconClasses} /> },
  express: {
    name: "ExpressJS",
    icon: <SiExpress className={iconClasses} />,
  },
  mongodb: {
    name: "Mongo DB",
    icon: <DiMongodb className={iconClasses} />,
    brandColour: "#69a747",
  },
  golang: {
    name: "GoLang",
    icon: <BiLogoGoLang className={iconClasses} />,
    brandColour: "#13a7d1",
  },
  node: {
    name: "Node JS",
    icon: <RiNodejsFill className={iconClasses} />,
    brandColour: "#6cc24a",
  },
  bun: {
    name: "Bun JS",
    icon: <BunIcon className={iconClasses} />,
  },
};
