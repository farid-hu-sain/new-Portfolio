import { ArrowUpRight } from "lucide-react";
import { type PortfolioProject } from "../../data/projects";
import { GithubIcon } from "./BrandIcons";
import { ProjectPreview } from "./ProjectVisuals";
import { PROJECT_ACCENTS } from "./projectAccents";
import { TechTag } from "./SectionHeader";

type ProjectCardProps = {
  project: PortfolioProject;
  totalProjects: number;
  onViewDetails: (project: PortfolioProject) => void;
};

export default function ProjectCard({ project, totalProjects, onViewDetails }: ProjectCardProps) {
  const accent = PROJECT_ACCENTS[project.accent];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25">
      <div className="border-b border-line">
        <ProjectPreview project={project} />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs text-ink-muted">
            <span className={accent.text}>{String(project.number).padStart(2, "0")}</span>
            <span> / {String(totalProjects).padStart(2, "0")}</span>
          </span>
          <div className="flex flex-wrap items-center justify-end gap-2">
            <span className={`rounded-md border px-2.5 py-1 font-mono text-xs uppercase tracking-wider ${accent.border} ${accent.bg} ${accent.text}`}>
              {project.category}
            </span>
            {project.status && (
              <span className="rounded-md border border-line px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-ink-secondary">
                {project.status}
              </span>
            )}
          </div>
        </div>

        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink-primary">{project.title}</h3>
        {project.fullTitle && <p className="mt-1 text-sm text-ink-muted">{project.fullTitle}</p>}
        <p className="mt-4 text-sm leading-relaxed text-ink-secondary">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechTag key={technology} className="px-2.5 py-1 text-xs">
              {technology}
            </TechTag>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-7">
          <button
            type="button"
            onClick={() => onViewDetails(project)}
            className={`group/button inline-flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-sm font-medium transition-colors ${accent.border} ${accent.text} ${accent.hoverBg}`}
          >
            View Details
            <ArrowUpRight size={15} className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
          </button>

          {project.githubLinks?.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-3.5 py-2.5 text-sm font-medium text-ink-primary transition-colors hover:border-ink-secondary/50 hover:bg-surface"
            >
              <GithubIcon size={15} /> {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
