import type { TPaths, TSkills } from "./types";

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
	html: { name: "HTML", icon: "" },
	css: { name: "CSS", icon: "" },
	tailwind: { name: "TailwindCSS", icon: "" },
	sass: { name: "SaSS", icon: "" },
	javascript: { name: "JavaScript", icon: "" },
	typescript: { name: "TypeScript", icon: "" },
	reactjs: { name: "React JS", icon: "" },
	nextjs: { name: "Next JS", icon: "" },
	convex: { name: "Convex", icon: "" },
	express: { name: "ExpressJS", icon: "" },
	mongodb: { name: "Mongo DB", icon: "" },
	golang: { name: "GoLang", icon: "" },
};
