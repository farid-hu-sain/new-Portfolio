export const architectureKnowledge = [
  "MVVM",
  "Repository Pattern",
  "Clean Architecture",
  "Dependency Injection",
  "REST API Architecture",
];

export interface ArchNode {
  id: string;
  label: string;
  detail: string[];
}

export const archStages: ArchNode[][] = [
  [{ id: "ui", label: "Compose UI", detail: ["Declarative UI", "Recomposition on state change"] }],
  [
    { id: "ui", label: "Compose UI", detail: ["Declarative UI", "Recomposition on state change"] },
    { id: "vm", label: "ViewModel", detail: ["StateFlow", "UI State", "Business logic coordination"] },
  ],
  [
    { id: "ui", label: "Compose UI", detail: ["Declarative UI", "Recomposition on state change"] },
    { id: "vm", label: "ViewModel", detail: ["StateFlow", "UI State", "Business logic coordination"] },
    { id: "repo", label: "Repository", detail: ["Data abstraction", "Remote / local source"] },
  ],
  [
    { id: "ui", label: "Compose UI", detail: ["Declarative UI", "Recomposition on state change"] },
    { id: "vm", label: "ViewModel", detail: ["StateFlow", "UI State", "Business logic coordination"] },
    { id: "repo", label: "Repository", detail: ["Data abstraction", "Remote / local source"] },
    { id: "api", label: "Remote API", detail: ["Retrofit", "REST API"] },
    { id: "local", label: "Local Storage", detail: ["DataStore", "Local storage"] },
  ],
];

export const stateManagement = [
  { platform: "Android", tools: ["ViewModel", "StateFlow", "Compose State"] },
  { platform: "Flutter", tools: ["Riverpod"] },
  { platform: "React", tools: ["Context API", "Redux Toolkit"] },
];
