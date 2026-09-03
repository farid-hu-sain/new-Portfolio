export interface PortfolioProject {
  id: string;
  number: number;

  title: string;
  fullTitle?: string;

  category: string;
  role?: string;
  status?: string;

  description: string;
  details: string;
  highlights: string[];

  technologies: string[];

  visualType: "mobile" | "web" | "backend";
  image?: string;
  imageWidth?: number;
  imageHeight?: number;

  /** Tailwind-safe accent tokens — see PROJECT_ACCENTS in projectAccents.ts */
  accent: "green" | "violet" | "blue" | "teal";

  githubLinks?: {
    label: string;
    url: string;
  }[];
  caseStudy?: string;
}

const projects: PortfolioProject[] = [
  {
    id: "math-for-fun",
    number: 1,
    title: "Math For Fun",
    category: "Fullstack Mobile Application",
    role: "Android / Fullstack Project",
    status: "Completed",
    description:
      "Interactive mathematics learning application combining a Kotlin and Jetpack Compose Android client with a NestJS and PostgreSQL backend.",
    details:
      "A fullstack mobile learning application designed to make mathematics practice more engaging through a native Android client, REST API, backend service, and relational database.",
    highlights: [
      "Interactive quiz system and guided mathematics practice",
      "Progress tracking and answer review",
      "AI-assisted learning support",
      "REST API integration with Retrofit",
      "Dependency injection with Hilt",
      "NestJS backend service",
      "PostgreSQL database",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Hilt", "Retrofit", "NestJS", "PostgreSQL"],
    visualType: "mobile",
    image: "/projects/math-for-fun.png",
    imageWidth: 720,
    imageHeight: 1600,
    accent: "green",
    githubLinks: [
      {
        label: "Android App",
        url: "https://github.com/farid-hu-sain/math-for-fun-Android",
      },
      {
        label: "Backend",
        url: "https://github.com/farid-hu-sain/math-for-fun-Backend",
      },
    ],
  },
  {
    id: "job-finder",
    number: 2,
    title: "Job Finder",
    category: "Cross-Platform Mobile",
    role: "Mobile Developer",
    description:
      "Flutter-based job discovery application with authentication, search, advanced filtering, bookmarks, and search history.",
    details:
      "A cross-platform job discovery application focused on helping users find relevant opportunities quickly through a clean search and filtering flow.",
    highlights: [
      "User authentication and protected application flow",
      "Job search with advanced filtering",
      "Bookmarks for saved opportunities",
      "Job detail experience",
      "Persistent search history",
      "Riverpod state management and GoRouter navigation",
      "Supabase integration",
    ],
    technologies: ["Flutter", "Dart", "Riverpod", "Supabase", "GoRouter", "Dio"],
    visualType: "mobile",
    image: "/projects/job-finder.png",
    imageWidth: 853,
    imageHeight: 1844,
    accent: "violet",
    githubLinks: [
      {
        label: "App",
        url: "https://github.com/farid-hu-sain/jobfinder",
      },
    ],
  },
  {
    id: "money-tracker",
    number: 3,
    title: "Money Tracker",
    category: "Native Android / Offline-first",
    role: "Android Developer",
    status: "Completed",
    description:
      "An offline-first Android finance tracker for managing income, expenses, balances, budgets, financial periods, and transaction history using local storage.",
    details:
      "An offline-first Android personal finance application built with Kotlin for tracking income, expenses, balances, budgets, financial periods, and transaction history without relying on external APIs.",
    highlights: [
      "Offline-first financial tracking",
      "Income, expense, balance, and budget management",
      "Configurable financial periods",
      "Locally stored transaction history",
      "No external API dependency",
    ],
    technologies: ["Kotlin", "Local Database", "Offline-first"],
    visualType: "mobile",
    image: "/projects/money-tracker.png",
    imageWidth: 841,
    imageHeight: 1870,
    accent: "teal",
    githubLinks: [
      {
        label: "App",
        url: "https://github.com/farid-hu-sain/Money_Tracker",
      },
    ],
  },
  {
    id: "crowdfunding",
    number: 4,
    title: "Crowdfunding Platform",
    category: "Frontend Web",
    role: "Frontend Development",
    description:
      "A responsive crowdfunding web application built with reusable frontend components and REST API integration.",
    details:
      "A responsive crowdfunding interface that presents fundraising campaigns clearly and connects reusable React components to backend data through REST APIs.",
    highlights: [
      "Responsive campaign discovery interface",
      "Reusable and maintainable React components",
      "REST API data integration",
      "Type-safe frontend development",
      "Team development workflow",
    ],
    technologies: ["React", "TypeScript", "REST API"],
    visualType: "web",
    accent: "blue",
  },
  {
    id: "simas",
    number: 5,
    title: "SIMAS",
    fullTitle: "Mosque Management Information System",
    category: "Frontend Web / Team Project",
    role: "Frontend Development",
    description:
      "A mosque administration and operations management system developed within a structured team environment.",
    details:
      "An internal information system created with a structured development team to simplify mosque administration and day-to-day operational management.",
    highlights: [
      "Administrative management interface",
      "Reusable frontend component structure",
      "REST API integration",
      "Responsive interface development",
      "Team collaboration",
    ],
    technologies: ["React", "TypeScript", "REST API"],
    visualType: "web",
    image: "/projects/simas.png",
    imageWidth: 1714,
    imageHeight: 918,
    accent: "teal",
    githubLinks: [
      {
        label: "Team Frontend",
        url: "https://github.com/rizkiansyahalfin/simas-fe",
      },
      {
        label: "Team Backend",
        url: "https://github.com/rizkiansyahalfin/simas-be",
      },
    ],
  },
  {
    id: "habit-tracker-api",
    number: 6,
    title: "Habit Tracker API",
    category: "Backend & Database",
    role: "Backend Developer",
    description:
      "A backend REST API for managing users, habits, categories, and habit check-ins.",
    details:
      "A structured backend service for habit tracking, designed around clear resources, relational data, and predictable API operations.",
    highlights: [
      "User, habit, and category management",
      "Daily habit check-in workflow",
      "Relational PostgreSQL data model",
      "Type-safe database access with Prisma",
    ],
    technologies: ["Express.js", "TypeScript", "Prisma", "PostgreSQL"],
    visualType: "backend",
    accent: "green",
    githubLinks: [
      {
        label: "Backend",
        url: "https://github.com/farid-hu-sain/Habbit-Forge-BE",
      },
    ],
  },
  {
    id: "laundry-management",
    number: 7,
    title: "Laundry Management App",
    category: "Fullstack Application",
    role: "Android / Fullstack Project",
    status: "In Development",
    description:
      "Fullstack laundry management system combining a Kotlin and Jetpack Compose Android client with a modular NestJS API and PostgreSQL database.",
    details:
      "A fullstack business management application for laundry owners and employees. It combines a native Android client with a modular backend, secure authentication, role-based access, and centralized operational data.",
    highlights: [
      "Access token and refresh token authentication",
      "Role-based authorization",
      "Business and outlet management",
      "Employee and customer management",
      "Laundry service management",
      "Orders and status tracking",
      "Transactions and payments",
      "Clean Architecture Android client",
      "Modular NestJS backend",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "NestJS", "PostgreSQL", "Prisma", "Retrofit", "Hilt"],
    visualType: "mobile",
    image: "/projects/laundry-management.png",
    imageWidth: 866,
    imageHeight: 1817,
    accent: "teal",
  },
];

const projectOrder = [
  "math-for-fun",
  "laundry-management",
  "habit-tracker-api",
  "crowdfunding",
  "simas",
  "job-finder",
  "money-tracker",
];

export const portfolioProjects: PortfolioProject[] = projectOrder.map((id, index) => {
  const project = projects.find((item) => item.id === id);

  if (!project) {
    throw new Error(`Project data not found for ${id}`);
  }

  return { ...project, number: index + 1 };
});
