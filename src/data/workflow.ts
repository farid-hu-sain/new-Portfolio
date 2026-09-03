export interface WorkflowStep {
  number: string;
  title: string;
  question?: string;
  points: string[];
}

export const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    title: "Understand",
    question: "What problem should this feature solve?",
    points: ["User needs", "Requirements"],
  },
  {
    number: "02",
    title: "Plan",
    points: ["Application flow", "Data model", "API requirements", "Component structure"],
  },
  {
    number: "03",
    title: "Structure",
    points: ["Architecture", "State", "Dependencies", "Backend boundaries"],
  },
  {
    number: "04",
    title: "Build",
    points: ["UI", "API", "Business logic", "Database", "Authentication"],
  },
  {
    number: "05",
    title: "Test & Debug",
    points: ["UI behavior", "API responses", "Edge cases", "Integration"],
  },
  {
    number: "06",
    title: "Improve",
    points: ["Maintainability", "Performance", "Readability", "UX"],
  },
];
