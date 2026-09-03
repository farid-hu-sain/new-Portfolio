import { type PortfolioProject } from "../../data/projects";
import { PROJECT_ACCENTS } from "./projectAccents";

function DotGrid({ color }: { color: string }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.15]"
      style={{
        backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
        backgroundSize: "18px 18px",
      }}
    />
  );
}

export function MobileProjectVisual({ project }: { project: PortfolioProject }) {
  const accent = PROJECT_ACCENTS[project.accent];
  return (
    <div className="relative w-[210px] sm:w-[230px] mx-auto">
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full blur-3xl"
        style={{ background: accent.glow }}
      />
      <div className="relative rounded-[2rem] border-4 border-[#1c1f1d] bg-bg shadow-2xl overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} application screenshot`}
            width={project.imageWidth}
            height={project.imageHeight}
            className="block aspect-[9/19] w-full object-cover object-top"
          />
        ) : (
          <>
            <div className="absolute top-0 inset-x-0 h-6 flex items-center justify-center z-10">
              <div className="w-16 h-4 bg-[#1c1f1d] rounded-b-xl" />
            </div>
            <div className="relative aspect-[9/19] bg-surface pt-6 px-3 pb-3 flex flex-col gap-2.5">
              <div className="flex items-center justify-between pt-1">
                <div className="h-2 w-16 rounded bg-ink-primary/70" />
                <div className={`w-5 h-5 rounded-full ${accent.bg} border ${accent.border}`} />
              </div>
              <div className={`h-16 rounded-lg ${accent.bg} border ${accent.border} p-2.5 flex flex-col justify-between`}>
                <div className="h-1.5 w-10 rounded bg-ink-secondary/50" />
                <div className={`h-2.5 w-14 rounded ${accent.bgStrong}`} />
              </div>
              <div className="grid grid-cols-2 gap-2 flex-1">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="rounded-lg border border-line bg-bg/60 p-2 flex flex-col gap-1.5">
                    <div className="h-6 w-6 rounded bg-ink-muted/20" />
                    <div className="h-1.5 w-8 rounded bg-ink-secondary/40" />
                  </div>
                ))}
              </div>
              <div className="h-9 rounded-lg border-t border-line flex items-center justify-around">
                {[0, 1, 2].map((i) => (
                  <div key={i} className={`h-1.5 w-1.5 rounded-full ${i === 0 ? accent.bgSolid : "bg-ink-muted/30"}`} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function WebProjectVisual({ project }: { project: PortfolioProject }) {
  const accent = PROJECT_ACCENTS[project.accent];
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full blur-3xl"
        style={{ background: accent.glow }}
      />
      <div className="relative rounded-xl border border-line bg-surface shadow-2xl overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-line bg-bg/60">
          <span className="w-2 h-2 rounded-full bg-ink-muted/30" />
          <span className="w-2 h-2 rounded-full bg-ink-muted/30" />
          <span className="w-2 h-2 rounded-full bg-ink-muted/30" />
          <div className="ml-3 h-4 flex-1 max-w-[160px] rounded bg-bg/80 border border-line" />
        </div>
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} website screenshot`}
            width={project.imageWidth}
            height={project.imageHeight}
            className="block aspect-[15/8] w-full object-cover object-top"
          />
        ) : (
          <div className="relative flex" style={{ minHeight: 220 }}>
            <div className="w-14 border-r border-line bg-bg/40 py-3 flex flex-col items-center gap-3">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`w-6 h-6 rounded ${i === 0 ? `${accent.bg} border ${accent.border}` : "bg-ink-muted/10"}`} />
              ))}
            </div>
            <div className="flex-1 p-4 flex flex-col gap-3">
              <div className="h-3 w-24 rounded bg-ink-primary/60" />
              <div className="grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className={`h-12 rounded-md ${accent.bg} border ${accent.border}`} />
                ))}
              </div>
              <div className="flex-1 rounded-md border border-line bg-bg/40 p-2.5 flex flex-col gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-2 rounded bg-ink-secondary/25" style={{ width: `${80 - i * 15}%` }} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const endpoints = [
  { method: "GET", path: "/habits", status: "200 OK" },
  { method: "POST", path: "/habits", status: "201 Created" },
  { method: "PATCH", path: "/habits/:id", status: "200 OK" },
  { method: "POST", path: "/check-ins", status: "201 Created" },
];

const methodColor: Record<string, string> = {
  GET: "text-sky-400",
  POST: "text-accent",
  PATCH: "text-amber-400",
  DELETE: "text-rose-400",
};

export function BackendProjectVisual({ project }: { project: PortfolioProject }) {
  const accent = PROJECT_ACCENTS[project.accent];
  return (
    <div className="relative w-full max-w-[440px] mx-auto">
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full blur-3xl"
        style={{ background: accent.glow }}
      />
      <div className="relative rounded-xl border border-line bg-surface shadow-2xl overflow-hidden">
        <DotGrid color={accent.solid} />
        <div className="relative flex items-center gap-1.5 px-4 py-2.5 border-b border-line bg-bg/60">
          <span className="w-2 h-2 rounded-full bg-ink-muted/30" />
          <span className="w-2 h-2 rounded-full bg-ink-muted/30" />
          <span className="w-2 h-2 rounded-full bg-ink-muted/30" />
          <span className="ml-3 font-mono text-xs text-ink-muted">api/{project.id}</span>
        </div>
        <div className="relative p-5 space-y-2.5 font-mono text-xs sm:text-sm">
          {endpoints.map((e) => (
            <div key={e.method + e.path} className="flex items-center justify-between gap-3 py-1.5 border-b border-line/50 last:border-0">
              <div className="flex items-center gap-3 min-w-0">
                <span className={`w-14 shrink-0 font-semibold ${methodColor[e.method]}`}>{e.method}</span>
                <span className="text-ink-secondary truncate">{e.path}</span>
              </div>
              <span className="shrink-0 text-ink-muted">{e.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectVisual({ project }: { project: PortfolioProject }) {
  if (project.visualType === "mobile") return <MobileProjectVisual project={project} />;
  if (project.visualType === "web") return <WebProjectVisual project={project} />;
  return <BackendProjectVisual project={project} />;
}

export function ProjectPreview({ project }: { project: PortfolioProject }) {
  const accent = PROJECT_ACCENTS[project.accent];

  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-bg/50">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          width={project.imageWidth}
          height={project.imageHeight}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-surface to-transparent" />
        <div aria-hidden="true" className="absolute inset-0" style={{ boxShadow: `inset 0 0 70px ${accent.glow}` }} />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-bg/45 p-5">
      <div className="w-full origin-center scale-[0.82] sm:scale-90">
        <ProjectVisual project={project} />
      </div>
    </div>
  );
}
