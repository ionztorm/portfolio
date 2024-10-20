import type { TPaths, TSkills } from "./types";
import {
  RiJavascriptFill,
  RiHtml5Fill,
  RiTailwindCssFill,
  RiReactjsFill,
  RiNextjsFill,
} from "react-icons/ri";
import { BiLogoTypescript, BiLogoGoLang } from "react-icons/bi";
import { SiCss3, SiExpress } from "react-icons/si";
import { DiSass, DiMongodb } from "react-icons/di";
import { ConvexIcon } from "@/components/icon/convex";

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
  html: { name: "HTML5", icon: <RiHtml5Fill className={iconClasses} /> },
  css: { name: "CSS", icon: <SiCss3 className={iconClasses} /> },
  tailwind: {
    name: "TailwindCSS",
    icon: <RiTailwindCssFill className={iconClasses} />,
  },
  sass: { name: "SaSS", icon: <DiSass className={iconClasses} /> },
  javascript: {
    name: "JavaScript",
    icon: <RiJavascriptFill className={iconClasses} />,
  },
  typescript: {
    name: "TypeScript",
    icon: <BiLogoTypescript className={iconClasses} />,
  },
  reactjs: {
    name: "React JS",
    icon: <RiReactjsFill className={iconClasses} />,
  },
  nextjs: { name: "Next JS", icon: <RiNextjsFill className={iconClasses} /> },
  convex: { name: "Convex", icon: <ConvexIcon className={iconClasses} /> },
  express: { name: "ExpressJS", icon: <SiExpress className={iconClasses} /> },
  mongodb: { name: "Mongo DB", icon: <DiMongodb className={iconClasses} /> },
  golang: { name: "GoLang", icon: <BiLogoGoLang className={iconClasses} /> },
};
