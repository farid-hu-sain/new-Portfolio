export interface ExperienceEntry {
  organization: string;
  program?: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
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
    role: "Frontend Developer",
    period: "January 2026 — July 2026",
    location: "Bekasi, Indonesia",
    description:
      "Contributed to frontend application development using React, TypeScript, and REST API integration within a structured team environment.",
    responsibilities: [
      "Built reusable frontend components using React and TypeScript",
      "Developed responsive and consistent web interfaces",
      "Integrated frontend features with REST APIs",
      "Debugged and tested application behavior",
      "Improved component maintainability and UI consistency",
      "Collaborated within a structured team development workflow",
    ],
    technologies: ["React", "TypeScript", "REST API"],
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
