export type ArchitectureStageId = "client" | "api" | "backend" | "data";

export interface ArchitectureStage {
  id: ArchitectureStageId;
  label: string;
  summary: string;
  technologies: string[];
  responsibilities: string[];
}

export const architectureStages: ArchitectureStage[] = [
  {
    id: "client",
    label: "Frontend / Mobile",
    summary: "User-facing experiences for web and mobile products.",
    technologies: ["React", "React Native", "Jetpack Compose", "Flutter"],
    responsibilities: ["Responsive interfaces", "Application state", "User experience"],
  },
  {
    id: "api",
    label: "API Layer",
    summary: "Clear contracts connecting clients to application services.",
    technologies: ["REST API", "Retrofit", "Dio"],
    responsibilities: ["Request and response models", "Authentication flow", "Error handling"],
  },
  {
    id: "backend",
    label: "Backend / Business Logic",
    summary: "Services that coordinate application rules and secure data access.",
    technologies: ["NestJS", "Express.js", "Node.js"],
    responsibilities: ["Business logic", "Authorization", "Service boundaries"],
  },
  {
    id: "data",
    label: "Database / Data",
    summary: "Relational and application data designed around product requirements.",
    technologies: ["PostgreSQL", "Prisma", "Supabase"],
    responsibilities: ["Data modeling", "Persistence", "Reliable data flow"],
  },
];

export const engineeringPrinciples = [
  "Separation of concerns",
  "Repository pattern",
  "Dependency injection",
  "State management",
  "Authentication",
  "Error handling",
  "Maintainability",
];
