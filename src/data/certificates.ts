export interface Certificate {
  title: string;
  issuer: string;
  issueDate: string;
  status?: "Completed";
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}

// Real certificate data is not complete yet — replace/extend below.
export const certificates: Certificate[] = [
  {
    title: "Kotlin for Java Developers",
    issuer: "JetBrains via Coursera",
    issueDate: "August 11, 2026",
    status: "Completed",
    credentialId: "SPV0NHNW1B15",
    credentialUrl: "https://coursera.org/verify/SPV0NHNW1B15",
    skills: ["Kotlin", "Null Safety", "Extension Functions", "Functional Programming"],
    image: "/certificates/kotlin-for-java-developers.png",
    imageWidth: 1584,
    imageHeight: 1224,
  },
  {
    title: "Software Development Bootcamp",
    issuer: "Rumah IT Hub / Rumah IT Indonesia",
    issueDate: "July 2025 — July 2026",
    status: "Completed",
    skills: ["JavaScript", "React", "React Native", "Express.js", "PostgreSQL", "REST API", "Docker", "CI/CD"],
    image: "/certificates/rumah-it-software-development-bootcamp.png",
    imageWidth: 1492,
    imageHeight: 1054,
    // TODO: Add credential ID and verification URL if available.
  },
];
