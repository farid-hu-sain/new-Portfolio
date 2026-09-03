import { type PortfolioProject } from "../../data/projects";

type ProjectAccent = {
  text: string;
  border: string;
  bg: string;
  bgStrong: string;
  bgSolid: string;
  hoverBg: string;
  glow: string;
  solid: string;
};

export const PROJECT_ACCENTS: Record<PortfolioProject["accent"], ProjectAccent> = {
  green: {
    text: "text-accent",
    border: "border-accent/30",
    bg: "bg-accent/10",
    bgStrong: "bg-accent/70",
    bgSolid: "bg-accent",
    hoverBg: "hover:bg-accent/10",
    glow: "rgba(61,220,132,0.18)",
    solid: "#3DDC84",
  },
  violet: {
    text: "text-violet-400",
    border: "border-violet-400/30",
    bg: "bg-violet-400/10",
    bgStrong: "bg-violet-400/70",
    bgSolid: "bg-violet-400",
    hoverBg: "hover:bg-violet-400/10",
    glow: "rgba(167,139,250,0.18)",
    solid: "#A78BFA",
  },
  blue: {
    text: "text-sky-400",
    border: "border-sky-400/30",
    bg: "bg-sky-400/10",
    bgStrong: "bg-sky-400/70",
    bgSolid: "bg-sky-400",
    hoverBg: "hover:bg-sky-400/10",
    glow: "rgba(56,189,248,0.18)",
    solid: "#38BDF8",
  },
  teal: {
    text: "text-teal-400",
    border: "border-teal-400/30",
    bg: "bg-teal-400/10",
    bgStrong: "bg-teal-400/70",
    bgSolid: "bg-teal-400",
    hoverBg: "hover:bg-teal-400/10",
    glow: "rgba(45,212,191,0.18)",
    solid: "#2DD4BF",
  },
};
