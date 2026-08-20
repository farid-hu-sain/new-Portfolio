import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../components/ui/BrandIcons";
import { portfolioProjects, type PortfolioProject } from "../data/projects";
import { PROJECT_ACCENTS, ProjectVisual } from "../components/ui/ProjectVisuals";
import { TechTag } from "../components/ui/SectionHeader";
import Reveal from "../components/ui/Reveal";
import ProjectDetailModal from "../components/ui/ProjectDetailModal";

const DRAG_DISTANCE_THRESHOLD = 120;
const DRAG_VELOCITY_THRESHOLD = 500;
const total = portfolioProjects.length;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

function GhostCard({
  depth,
}: {
  project: PortfolioProject;
  depth: 1 | 2;
}) {
  const scale = depth === 1 ? 0.98 : 0.96;
  const translateY = depth === 1 ? 14 : 28;
  const opacity = depth === 1 ? 0.7 : 0.45;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 rounded-2xl border border-line bg-surface/60"
      style={{
        transform: `scale(${scale}) translateY(${translateY}px)`,
        opacity,
        zIndex: 10 - depth,
      }}
    />
  );
}

function ActionButton({ project }: { project: PortfolioProject }) {
  const accent = PROJECT_ACCENTS[project.accent];
  const hasCaseStudy = Boolean(project.caseStudy);
  const hasGithub = Boolean(project.github);

  if (!hasCaseStudy && !hasGithub) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3" onClick={(event) => event.stopPropagation()}>
      {hasCaseStudy && (
        <a
          href={project.caseStudy}
          className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border ${accent.border} ${accent.text} text-sm font-medium ${accent.hoverBg} transition-colors`}
        >
          View Case Study
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      )}
      {hasGithub && (
        <a
          href={project.github}
          className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-line text-ink-primary text-sm font-medium hover:border-ink-secondary/50 hover:bg-surface transition-colors"
        >
          <GithubIcon size={15} /> GitHub
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const transitionLockRef = useRef(false);
  const didDragRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  const project = portfolioProjects[index];
  const accent = PROJECT_ACCENTS[project.accent];
  const next1 = portfolioProjects[mod(index + 1, total)];
  const next2 = portfolioProjects[mod(index + 2, total)];

  const paginate = useCallback((dir: 1 | -1) => {
    if (transitionLockRef.current) return;
    transitionLockRef.current = true;
    setIsTransitioning(true);
    setDirection(dir);
    setIndex((i) => mod(i + dir, total));
    setHasInteracted(true);
  }, []);

  const closeProjectDetails = useCallback(() => setSelectedProject(null), []);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_DISTANCE_THRESHOLD || velocity < -DRAG_VELOCITY_THRESHOLD) {
      paginate(1);
    } else if (offset > DRAG_DISTANCE_THRESHOLD || velocity > DRAG_VELOCITY_THRESHOLD) {
      paginate(-1);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        paginate(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        paginate(1);
      }
    };
    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
  }, [paginate]);

  const exitVariants = {
    exit: (dir: 1 | -1) =>
      prefersReducedMotion
        ? { opacity: 0, transition: { duration: 0.2 } }
        : { x: dir * -320, opacity: 0, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] as const } },
    enter: prefersReducedMotion
      ? { opacity: 0 }
      : { scale: 0.97, y: 16, opacity: 0 },
    center: prefersReducedMotion
      ? { opacity: 1, transition: { duration: 0.25 } }
      : { scale: 1, y: 0, opacity: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <>
    <section id="projects" className="border-t border-line px-5 sm:px-8 py-24 sm:py-32 overflow-hidden">
      <div className="max-w-content mx-auto">
        <div className="flex items-start justify-between flex-wrap gap-6 mb-14 sm:mb-16">
          <Reveal className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
              07 / Selected Work
            </p>
            <h2 className="text-display-sm sm:text-display font-semibold text-ink-primary mb-4">
              Things I've Built
            </h2>
            <p className="text-ink-secondary text-base sm:text-lg leading-relaxed">
              Selected projects that represent my experience across mobile, web, and backend development.
            </p>
          </Reveal>

          <AnimatePresence>
            {!hasInteracted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="hidden lg:flex flex-col items-end gap-2 text-right"
              >
                <p className="text-xs text-ink-muted">
                  Drag / swipe left or right
                  <br />
                  to explore projects
                </p>
                <div className="flex items-center gap-2 text-ink-muted">
                  <ArrowLeft size={14} />
                  <span className="w-8 h-px bg-line" />
                  <ArrowRight size={14} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* carousel */}
        <div
          ref={containerRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Selected projects"
          className="relative outline-none"
        >
          <div className="relative mx-auto" style={{ maxWidth: 1180 }}>
            <div className="relative" style={{ minHeight: 640 }}>
              <GhostCard project={next2} depth={2} />
              <GhostCard project={next1} depth={1} />

              <AnimatePresence
                mode="wait"
                custom={direction}
                onExitComplete={() => {
                  transitionLockRef.current = false;
                  setIsTransitioning(false);
                }}
              >
                <motion.div
                  key={project.id}
                  custom={direction}
                  variants={exitVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag={isTransitioning ? false : "x"}
                  dragElastic={0.18}
                  dragMomentum={false}
                  dragConstraints={{ left: 0, right: 0 }}
                  style={{ touchAction: "pan-y" }}
                  onDragStart={() => {
                    didDragRef.current = true;
                  }}
                  onDragEnd={handleDragEnd}
                  onPointerDown={() => {
                    didDragRef.current = false;
                    setHasInteracted(true);
                  }}
                  onClick={() => {
                    if (!didDragRef.current && !isTransitioning) {
                      setSelectedProject(project);
                    }
                  }}
                  className="relative z-20 rounded-2xl border border-line bg-surface cursor-grab active:cursor-grabbing"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ boxShadow: `0 0 80px -20px ${accent.glow}` }}
                  />

                  <div className="relative px-6 sm:px-12 py-8 sm:py-12">
                    <div className="flex items-center justify-between mb-8 sm:mb-10">
                      <p className="font-mono text-sm">
                        <span className={`${accent.text} font-semibold`}>
                          {String(project.number).padStart(2, "0")}
                        </span>
                        <span className="text-ink-muted"> / {String(total).padStart(2, "0")}</span>
                      </p>
                      <span className={`px-3 py-1 rounded-md border ${accent.border} ${accent.bg} ${accent.text} font-mono text-[11px] uppercase tracking-wider`}>
                        {project.category}
                      </span>
                    </div>

                    <div className="text-center mb-3">
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink-primary tracking-tight">
                        {project.title}
                      </h3>
                      {project.status && (
                        <span className={`inline-block mt-3 px-2.5 py-0.5 rounded text-xs font-mono ${accent.bg} ${accent.text} border ${accent.border}`}>
                          {project.status}
                        </span>
                      )}
                    </div>

                    <p className="text-ink-secondary text-center text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-10 sm:mb-12">
                      {project.description}
                    </p>

                    <div className="mb-10 sm:mb-12 select-none">
                      <ProjectVisual project={project} />
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                      {project.technologies.map((t) => (
                        <TechTag key={t}>{t}</TechTag>
                      ))}
                      {project.moreCount ? (
                        <TechTag className="text-ink-muted">+{project.moreCount}</TechTag>
                      ) : null}
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                      <button
                        type="button"
                        className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border ${accent.border} ${accent.text} text-sm font-medium ${accent.hoverBg} transition-colors`}
                      >
                        View Project Details
                        <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                      <ActionButton project={project} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* pagination */}
          <div className="flex flex-col items-center gap-6 mt-10">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-ink-muted">{String(index + 1).padStart(2, "0")}</span>
              <div className="flex items-center gap-1.5">
                {portfolioProjects.map((p, i) => (
                  <span
                    key={p.id}
                    className="h-1 rounded-full transition-all duration-300"
                    style={{
                      width: i === index ? 24 : 8,
                      backgroundColor: i === index ? PROJECT_ACCENTS[p.accent].solid : "rgba(255,255,255,0.12)",
                    }}
                  />
                ))}
              </div>
              <span className="font-mono text-xs text-ink-muted">{String(total).padStart(2, "0")}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => paginate(-1)}
                disabled={isTransitioning}
                aria-label="Previous project"
                className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-ink-primary hover:border-accent/50 hover:bg-surface transition-colors disabled:opacity-40 disabled:pointer-events-none"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => paginate(1)}
                disabled={isTransitioning}
                aria-label="Next project"
                className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-ink-primary hover:border-accent/50 hover:bg-surface transition-colors disabled:opacity-40 disabled:pointer-events-none"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ProjectDetailModal project={selectedProject} onClose={closeProjectDetails} />
    </>
  );
}
