import type { TPaths, TProjects, TSkills } from "./types";
import {
  RiJavascriptFill,
  RiHtml5Fill,
  RiTailwindCssFill,
  RiReactjsFill,
  RiNextjsFill,
  RiNodejsFill,
  RiCss3Fill,
  RiSupabaseFill,
} from "react-icons/ri";
import { BiLogoTypescript, BiLogoGoLang } from "react-icons/bi";
import { VscJson } from "react-icons/vsc";
import { SiExpress, SiShadcnui, SiVercel } from "react-icons/si";
import { DiSass, DiMongodb, DiPostgresql } from "react-icons/di";
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
    icon: RiCss3Fill,
    brandColour: "#2965f1",
  },
  tailwind: {
    name: "Tailwind",
    icon: RiTailwindCssFill,
    brandColour: "#44a8b3",
    tag: ["hero"],
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
    tag: ["hero"],
  },
  typescript: {
    name: "TypeScript",
    icon: BiLogoTypescript,
    brandColour: "#2f75c1",
    tag: ["hero"],
  },
  reactjs: {
    name: "React JS",
    icon: RiReactjsFill,
    brandColour: "#18d3f8",
    tag: ["hero"],
  },
  nextjs: { name: "Next JS", icon: RiNextjsFill, tag: ["hero"] },
  convex: { name: "Convex", icon: ConvexIcon, tag: ["hero"] },
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
    tag: ["hero"],
  },
  shadcn: {
    name: "Shadcn",
    icon: SiShadcnui,
    tag: ["hero"],
  },
  json: {
    name: "JSON",
    icon: VscJson,
  },
  postgres: {
    name: "PostgreSQL",
    icon: DiPostgresql,
    brandColour: "#336791",
  },
  supabase: {
    name: "Supabase",
    icon: RiSupabaseFill,
    brandColour: "#3FCF8E",
  },
  vercel: {
    name: "Vercel",
    icon: SiVercel,
    brandColour: "#000000",
    tag: ["hero"],
  },
};
export const PROJECTS: TProjects = [
  {
    title: "VS Code Theme",
    image: vscodetheme,
    overview:
      "A dark VS Code theme using greens and purples so that your code is easy to read day and night",
    skills: {
      json: SKILLS.json,
    },
    links: {
      github: {
        path: "https://github.com/ionztorm/ionztorm-theme",
        label: "Github",
      },
      url: {
        path: "https://marketplace.visualstudio.com/items?itemName=ionztorm.ionztorm-theme",
        label: "Marketplace",
      },
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
      tailwind: SKILLS.tailwind,
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
      tailwind: SKILLS.tailwind,
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
