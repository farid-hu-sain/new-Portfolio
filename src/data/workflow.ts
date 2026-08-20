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
    points: ["Problem", "User need", "Feature requirements"],
  },
  {
    number: "02",
    title: "Plan",
    points: ["Application flow", "Technology", "Data model", "API requirements", "Component structure"],
  },
  {
    number: "03",
    title: "Structure",
    points: ["Architecture", "Application state", "Repository boundaries", "Dependencies", "Presentation / domain / data separation"],
  },
  {
    number: "04",
    title: "Build",
    points: ["UI", "Business logic", "State management", "API integration", "Authentication", "Database interaction"],
  },
  {
    number: "05",
    title: "Test & Debug",
    points: ["Application behavior", "API response", "UI state", "Error handling", "Edge cases", "Integration issues"],
  },
  {
    number: "06",
    title: "Improve",
    points: ["Code structure", "Duplication", "UI", "UX", "Performance", "Readability", "Maintainability"],
  },
];
