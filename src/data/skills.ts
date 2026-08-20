export interface SkillGroup {
  category: string;
  items: string[];
}

export const primaryTech = ["Kotlin", "Jetpack Compose", "Flutter", "NestJS", "PostgreSQL"];

export const skillGroups: SkillGroup[] = [
  {
    category: "Android",
    items: ["Kotlin", "Jetpack Compose", "Android SDK", "Hilt", "Retrofit", "Moshi", "DataStore"],
  },
  {
    category: "Cross Platform",
    items: ["Flutter", "Dart"],
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "React Router"],
  },
  {
    category: "Backend",
    items: ["NestJS", "Express.js", "Node.js"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Prisma", "Supabase"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Android Studio", "IntelliJ IDEA", "VS Code", "Postman", "Figma"],
  },
];

const secondaryTech = skillGroups
  .flatMap((g) => g.items)
  .filter((tech, index, allTech) => allTech.indexOf(tech) === index)
  .filter((tech) => !primaryTech.includes(tech));

const splitAt = Math.ceil(secondaryTech.length / 2);

export const secondaryTechRow1 = secondaryTech.slice(0, splitAt);
export const secondaryTechRow2 = secondaryTech.slice(splitAt);
