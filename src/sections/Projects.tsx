import { useCallback, useState } from "react";
import { portfolioProjects, type PortfolioProject } from "../data/projects";
import Reveal from "../components/ui/Reveal";
import ProjectGrid from "../components/ui/ProjectGrid";
import ProjectDetailModal from "../components/ui/ProjectDetailModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const closeProjectDetails = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      <section id="projects" className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
        <div className="max-w-content mx-auto">
          <Reveal className="mb-14 max-w-2xl sm:mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
              Selected Work
            </p>
            <h2 className="text-display-sm sm:text-display font-semibold text-ink-primary mb-4">
              Applications Across the Stack
            </h2>
            <p className="text-ink-secondary text-base sm:text-lg leading-relaxed">
              Fullstack, backend, frontend, and mobile projects that demonstrate how I work across application layers.
            </p>
          </Reveal>

          <ProjectGrid projects={portfolioProjects} onViewDetails={setSelectedProject} />
        </div>
      </section>

      <ProjectDetailModal project={selectedProject} onClose={closeProjectDetails} />
    </>
  );
}
