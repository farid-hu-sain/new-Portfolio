export interface Certificate {
  title: string;
  issuer: string;
  issueDate: string;
  status?: "Completed";
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  image?: string;
}

// Real certificate data is not complete yet — replace/extend below.
export const certificates: Certificate[] = [
  {
    title: "Kotlin for Java Developers",
    issuer: "JetBrains via Coursera",
    issueDate: "Aug 11, 2026",
    status: "Completed",
    credentialId: "SPV0NHNW1B15",
    credentialUrl: "https://coursera.org/verify/SPV0NHNW1B15",
    skills: ["Kotlin", "Null Safety", "Extension Functions", "Functional Programming"],
    image: "/certificates/kotlin-for-java-developers.png",
  },
  {
    title: "Software Development Bootcamp",
    issuer: "Rumah IT Hub",
    issueDate: "2025 — 2026",
    status: "Completed",
    skills: ["Software Development", "Web Development", "Mobile Development", "REST API"],
    image: "/certificates/rumah-it-software-development-bootcamp.png",
    // TODO: Add credential ID and verification URL if available.
  },
];
