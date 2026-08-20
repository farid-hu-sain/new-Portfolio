export interface ExperienceEntry {
  organization: string;
  program?: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  projectsInvolved: {
    name: string;
    fullName?: string;
    stack: string[];
  }[];
}

export const experience: ExperienceEntry[] = [
  {
    organization: "Pondok IT Indonesia",
    program: "Rumah IT Program",
    role: "Front-End Developer",
    period: "January 2026 — July 2026",
    location: "Bekasi, Indonesia",
    description:
      "Frontend application development using React, TypeScript, and REST API integration within a structured team.",
    responsibilities: [
      "Build reusable frontend components",
      "Develop responsive user interfaces",
      "Integrate frontend applications with REST APIs",
      "Debug and test application behavior",
      "Improve maintainability and UI consistency",
    ],
    projectsInvolved: [
      {
        name: "Crowdfunding Platform",
        stack: ["React", "TypeScript", "REST API"],
      },
      {
        name: "SIMAS",
        fullName: "Mosque Management Information System",
        stack: ["React", "TypeScript", "REST API"],
      },
    ],
  },
];
