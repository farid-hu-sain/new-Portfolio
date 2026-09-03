import {
  siDart,
  siDocker,
  siExpress,
  siFigma,
  siFlutter,
  siGit,
  siGithub,
  siJavascript,
  siJetpackcompose,
  siKotlin,
  siNestjs,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPrisma,
  siReact,
  siSupabase,
  siSwagger,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";
import { primaryTech, skillGroups } from "../data/skills";
import { SectionHeader } from "../components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "../components/ui/Stagger";

const TECH_ICONS: Record<string, SimpleIcon> = {
  React: siReact,
  "React Native": siReact,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Kotlin: siKotlin,
  Dart: siDart,
  "Tailwind CSS": siTailwindcss,
  "Jetpack Compose": siJetpackcompose,
  Flutter: siFlutter,
  NestJS: siNestjs,
  "Node.js": siNodedotjs,
  "Express.js": siExpress,
  PostgreSQL: siPostgresql,
  Prisma: siPrisma,
  Supabase: siSupabase,
  Git: siGit,
  GitHub: siGithub,
  Postman: siPostman,
  Docker: siDocker,
  Swagger: siSwagger,
  Figma: siFigma,
};

function SkillLogo({ name, size = 19 }: { name: string; size?: number }) {
  const icon = TECH_ICONS[name];

  if (!icon) return null;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className="shrink-0"
      style={{ color: `#${icon.hex}` }}
    >
      <path fill="currentColor" d={icon.path} />
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
      <div className="max-w-content mx-auto">
        <SectionHeader
          eyebrow="Skills"
          title="Fullstack Toolkit"
          description="A focused stack for building web interfaces, backend services, databases, and mobile applications."
        />

        <p className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-5">
          Primary stack
        </p>
        <StaggerContainer className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 mb-16">
          {primaryTech.map((tech) => (
            <StaggerItem key={tech}>
              <div className="group px-4 py-6 rounded-lg border border-line bg-surface hover:bg-surface-hover hover:border-accent/40 transition-all duration-200 text-center">
                <div className="h-9 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <SkillLogo name={tech} size={30} />
                </div>
                <p className="text-sm sm:text-base font-medium text-ink-primary transition-transform duration-200 group-hover:-translate-y-0.5">
                  {tech}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <p className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-5">
          Supporting capabilities
        </p>
        <StaggerContainer className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.06}>
          {skillGroups.map((group) => (
            <StaggerItem key={group.category} className="h-full">
              <div className="h-full rounded-xl border border-line bg-surface/40 p-5 sm:p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-5">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-md border border-line bg-bg/35 px-3 py-2 text-sm text-ink-secondary"
                    >
                      <SkillLogo name={item} size={16} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
