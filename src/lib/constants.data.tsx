import type { TPaths, TProjects, TSkills } from "./types";
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
import vscodetheme from "@/../../public/vscodetheme.png";

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

export const SKILLS: TSkills = {
  html: {
    name: "HTML5",
    icon: RiHtml5Fill,
    brandColour: "#f06529",
  },
  css: {
    name: "CSS",
    icon: SiCss3,
    brandColour: "#2965f1",
  },
  tailwind: {
    name: "TailwindCSS",
    icon: RiTailwindCssFill,
    brandColour: "#44a8b3",
  },
  sass: {
    name: "SaSS",
    icon: DiSass,
    brandColour: "#cc6699",
  },
  javascript: {
    name: "JavaScript",
    icon: RiJavascriptFill,
    brandColour: "#F0DB4F",
  },
  typescript: {
    name: "TypeScript",
    icon: BiLogoTypescript,
    brandColour: "#2f75c1",
  },
  reactjs: {
    name: "React JS",
    icon: RiReactjsFill,
    brandColour: "#18d3f8",
  },
  nextjs: { name: "Next JS", icon: RiNextjsFill },
  convex: { name: "Convex", icon: ConvexIcon },
  express: {
    name: "ExpressJS",
    icon: SiExpress,
  },
  mongodb: {
    name: "Mongo DB",
    icon: DiMongodb,
    brandColour: "#69a747",
  },
  golang: {
    name: "GoLang",
    icon: BiLogoGoLang,
    brandColour: "#13a7d1",
  },
  node: {
    name: "Node JS",
    icon: RiNodejsFill,
    brandColour: "#6cc24a",
  },
  bun: {
    name: "Bun JS",
    icon: BunIcon,
  },
};
export const PROJECTS: TProjects = [
  {
    title: "VS Code Theme",
    image: vscodetheme,
    overview:
      "A dark VS Code theme using greens and purples so that your code is easy to read day and night",
    skills: {
      javascript: SKILLS.javascript,
    },
  },
  {
    title: "Slack Clone",
    image: vscodetheme,
    overview:
      "A dark VS Code theme using greens and purples so that your code is easy to read day and night",
    skills: {
      nextjs: SKILLS.nextjs,
      convex: SKILLS.convex,
      typescript: SKILLS.typescript,
    },
  },
  {
    title: "Portfolio",
    image: vscodetheme,
    overview:
      "A dark VS Code theme using greens and purples so that your code is easy to read day and night",
    skills: {
      nextjs: SKILLS.nextjs,
      javascript: SKILLS.javascript,
    },
  },
  {
    title: "Petsoft",
    image: vscodetheme,
    overview:
      "A dark VS Code theme using greens and purples so that your code is easy to read day and night",
    skills: {
      nextjs: SKILLS.nextjs,
      javascript: SKILLS.javascript,
    },
  },
];
