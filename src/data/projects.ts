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
  moreCount?: number;

  visualType: "mobile" | "web" | "backend";
  image?: string;

  /** Tailwind-safe accent tokens — see PROJECT_ACCENTS in ProjectVisuals.tsx */
  accent: "green" | "violet" | "blue" | "teal";

  github?: string;
  demo?: string;
  caseStudy?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "math-for-fun",
    number: 1,
    title: "Math For Fun",
    category: "Full-Stack App",
    role: "Android Developer",
    status: "Completed",
    description:
      "Interactive mathematics learning application with quizzes, progress tracking, answer review, and AI-assisted learning.",
    details:
      "An Android learning experience designed to make mathematics practice more engaging while keeping each learner's progress organized and easy to review.",
    highlights: [
      "Interactive quizzes and guided mathematics practice",
      "Progress tracking and answer review",
      "AI-assisted learning support",
      "Modular Android architecture backed by a REST API",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Hilt", "Retrofit", "NestJS", "PostgreSQL"],
    moreCount: 4,
    visualType: "mobile",
    image: "/projects/math-for-fun.png",
    accent: "green",
  },
  {
    id: "job-finder",
    number: 2,
    title: "Job Finder",
    category: "Flutter App",
    role: "Mobile Developer",
    description:
      "Flutter-based job discovery application with authentication, search, advanced filtering, bookmarks, and search history.",
    details:
      "A cross-platform job discovery application focused on helping users find relevant opportunities quickly through a clean search and filtering flow.",
    highlights: [
      "User authentication and protected application flow",
      "Job search with advanced filtering",
      "Bookmarks for saved opportunities",
      "Persistent search history",
    ],
    technologies: ["Flutter", "Dart", "Riverpod", "Supabase", "GoRouter", "Dio"],
    moreCount: 2,
    visualType: "mobile",
    image: "/projects/job-finder.png",
    accent: "violet",
  },
  {
    id: "money-tracker",
    number: 3,
    title: "Money Tracker",
    category: "Native Android Application",
    role: "Android Developer",
    status: "Completed",
    description:
      "An offline-first Android finance tracker for managing income, expenses, balances, and transaction history using local storage without external APIs.",
    details:
      "An offline-first Android personal finance application built with Kotlin for tracking income, expenses, balances, and transaction history using local data storage without relying on external APIs.",
    highlights: [
      "Offline-first financial tracking",
      "Income, expense, and balance management",
      "Locally stored transaction history",
      "No external API dependency",
    ],
    technologies: ["Kotlin", "Local Database", "Offline First"],
    visualType: "mobile",
    image: "/projects/money-tracker.png",
    accent: "teal",
  },
  {
    id: "crowdfunding",
    number: 4,
    title: "Crowdfunding Platform",
    category: "Web App",
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
    category: "Web App",
    role: "Frontend Development",
    description:
      "An internal system for managing mosque administrative operations, built by a structured team at Pondok IT Indonesia.",
    details:
      "An internal information system created with a structured development team to simplify mosque administration and day-to-day operational management.",
    highlights: [
      "Administrative management interface",
      "Reusable frontend component structure",
      "REST API integration",
      "Team-based product development workflow",
    ],
    technologies: ["React", "TypeScript", "REST API"],
    visualType: "web",
    image: "/projects/simas.png",
    accent: "teal",
  },
  {
    id: "habit-tracker-api",
    number: 6,
    title: "Habit Tracker API",
    category: "Backend API",
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
  },
  {
    id: "laundry-management",
    number: 7,
    title: "Laundry Management App",
    category: "Android / Full-Stack App",
    role: "Full-Stack Android Developer",
    status: "In Development",
    description:
      "A full-stack Android laundry management application built with Kotlin and Jetpack Compose, supported by a NestJS backend with Prisma and PostgreSQL. Designed to manage outlets, employees, customers, laundry services, orders, transactions, and business operations through a centralized system.",
    details:
      "An Android-first business management application for laundry owners and employees, combining a native Kotlin and Jetpack Compose client with a modular NestJS REST API. The system is being designed for multi-business operations, secure authentication, role-based access, centralized operational data, and scalable outlet management.",
    highlights: [
      "Access and refresh token authentication with role-based authorization",
      "Multi-business, outlet, employee, and customer management",
      "Laundry services, orders, status tracking, transactions, and payments",
      "Clean Architecture Android client integrated with a modular NestJS REST API",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "NestJS", "PostgreSQL", "Prisma", "Retrofit", "Hilt"],
    visualType: "mobile",
    image: "/projects/laundry-management.png",
    accent: "teal",
  },
];
