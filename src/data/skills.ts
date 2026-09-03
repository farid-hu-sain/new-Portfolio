export interface SkillGroup {
  category: string;
  items: string[];
}

export const primaryTech = ["React", "TypeScript", "NestJS", "PostgreSQL", "Kotlin"];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Kotlin", "Dart"],
  },
  {
    category: "Frontend & Mobile",
    items: ["React", "React Native", "Tailwind CSS", "Jetpack Compose", "Flutter"],
  },
  {
    category: "Backend & APIs",
    items: ["NestJS", "Node.js", "Express.js", "REST API", "Authentication"],
  },
  {
    category: "Database & Data",
    items: ["PostgreSQL", "Prisma", "Supabase", "Local Database"],
  },
  {
    category: "Architecture & Engineering",
    items: ["Clean Architecture", "MVVM", "Repository Pattern", "Dependency Injection", "State Management", "API Integration", "Offline-first"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Docker", "Swagger", "Figma"],
  },
];
