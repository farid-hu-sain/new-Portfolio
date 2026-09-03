import { type PortfolioProject } from "../../data/projects";
import { StaggerContainer, StaggerItem } from "./Stagger";
import ProjectCard from "./ProjectCard";

type ProjectGridProps = {
  projects: PortfolioProject[];
  onViewDetails: (project: PortfolioProject) => void;
};

export default function ProjectGrid({ projects, onViewDetails }: ProjectGridProps) {
  return (
    <StaggerContainer className="grid gap-5 lg:grid-cols-2" staggerDelay={0.06}>
      {projects.map((project) => (
        <StaggerItem key={project.id} className="h-full">
          <ProjectCard project={project} totalProjects={projects.length} onViewDetails={onViewDetails} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
