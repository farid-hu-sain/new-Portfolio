import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { type PortfolioProject } from "../../data/projects";
import { GithubIcon } from "./BrandIcons";
import { PROJECT_ACCENTS, ProjectVisual } from "./ProjectVisuals";
import { TechTag } from "./SectionHeader";

type ProjectDetailModalProps = {
  project: PortfolioProject | null;
  onClose: () => void;
};

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={onClose}
        >
          <div className="absolute inset-0 bg-bg/85 backdrop-blur-md" aria-hidden="true" />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-detail-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onMouseDown={(event) => event.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-line bg-surface shadow-2xl"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${PROJECT_ACCENTS[project.accent].solid}, transparent)` }}
            />

            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 py-4 sm:px-7 border-b border-line bg-surface/90 backdrop-blur-lg">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
                <span className={PROJECT_ACCENTS[project.accent].text}>
                  {String(project.number).padStart(2, "0")}
                </span>
                <span> / Project details</span>
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink-secondary hover:border-accent/40 hover:text-ink-primary transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid gap-10 p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:p-10">
              <div className="rounded-xl border border-line bg-bg/35 p-5 sm:p-7 flex items-center justify-center min-h-[320px]">
                <ProjectVisual project={project} />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className={`px-3 py-1 rounded-md border ${PROJECT_ACCENTS[project.accent].border} ${PROJECT_ACCENTS[project.accent].bg} ${PROJECT_ACCENTS[project.accent].text} font-mono text-[11px] uppercase tracking-wider`}>
                    {project.category}
                  </span>
                  {project.status && (
                    <span className="px-3 py-1 rounded-md border border-line text-ink-secondary font-mono text-[11px] uppercase tracking-wider">
                      {project.status}
                    </span>
                  )}
                </div>

                <h3 id="project-detail-title" className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-primary">
                  {project.title}
                </h3>
                {project.fullTitle && (
                  <p className="mt-2 text-sm text-ink-muted">{project.fullTitle}</p>
                )}

                {project.role && (
                  <div className="mt-7 pb-7 border-b border-line">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted mb-2">My role</p>
                    <p className="text-sm font-medium text-ink-primary">{project.role}</p>
                  </div>
                )}

                <div className="mt-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted mb-3">About the project</p>
                  <p className="text-sm sm:text-base leading-relaxed text-ink-secondary">{project.details}</p>
                </div>

                <div className="mt-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted mb-3">Key features</p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-ink-secondary">
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${PROJECT_ACCENTS[project.accent].bgSolid}`} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted mb-3">Technology stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <TechTag key={technology}>{technology}</TechTag>
                    ))}
                  </div>
                </div>

                {(project.githubLinks?.length || project.caseStudy) && (
                  <div className="flex flex-wrap gap-3 mt-9 pt-7 border-t border-line">
                    {project.githubLinks?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-line text-sm font-medium text-ink-primary hover:border-accent/40 transition-colors"
                      >
                        <GithubIcon size={16} /> GitHub {link.label}
                        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ))}
                    {project.caseStudy && (
                      <a
                        href={project.caseStudy}
                        target="_blank"
                        rel="noreferrer"
                        className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border ${PROJECT_ACCENTS[project.accent].border} ${PROJECT_ACCENTS[project.accent].text} text-sm font-medium ${PROJECT_ACCENTS[project.accent].hoverBg} transition-colors`}
                      >
                        View Case Study
                        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
