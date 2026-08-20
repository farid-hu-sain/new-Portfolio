import { motion } from "framer-motion";
import {
  siAndroid,
  siAndroidstudio,
  siDart,
  siExpress,
  siFigma,
  siFlutter,
  siGit,
  siGithub,
  siIntellijidea,
  siJavascript,
  siJetpackcompose,
  siKotlin,
  siNestjs,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPrisma,
  siReact,
  siReactrouter,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVscodium,
  type SimpleIcon,
} from "simple-icons";
import { primaryTech, secondaryTechRow1, secondaryTechRow2 } from "../data/skills";
import { SectionHeader } from "../components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "../components/ui/Stagger";

const TECH_ICONS: Record<string, SimpleIcon> = {
  Kotlin: siKotlin,
  "Jetpack Compose": siJetpackcompose,
  Flutter: siFlutter,
  NestJS: siNestjs,
  PostgreSQL: siPostgresql,
  "Android SDK": siAndroid,
  Hilt: siAndroid,
  Retrofit: siAndroid,
  Moshi: siKotlin,
  DataStore: siAndroid,
  Dart: siDart,
  React: siReact,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  "Tailwind CSS": siTailwindcss,
  "React Router": siReactrouter,
  "Express.js": siExpress,
  "Node.js": siNodedotjs,
  Prisma: siPrisma,
  Supabase: siSupabase,
  Git: siGit,
  GitHub: siGithub,
  "Android Studio": siAndroidstudio,
  "IntelliJ IDEA": siIntellijidea,
  "VS Code": siVscodium,
  Postman: siPostman,
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

function MarqueeRow({ items, direction, speed = 28 }: { items: string[]; direction: "left" | "right"; speed?: number }) {
  // Triple the list so the loop has enough width to never show a gap, in either direction.
  const tripled = [...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-3 shrink-0 py-1.5 motion-reduce:!transform-none"
        animate={{ x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {tripled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 inline-flex items-center gap-2.5 px-4 py-2 rounded-md border border-line bg-surface text-sm text-ink-secondary whitespace-nowrap"
          >
            <SkillLogo name={item} />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-content mx-auto">
        <SectionHeader
          eyebrow="Skills"
          title="Technology I've Worked With"
          description="Tools and technologies I have used across mobile, frontend, backend, and application development."
        />

        <p className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-5">
          Primary stack
        </p>
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-16">
          {primaryTech.map((tech) => (
            <StaggerItem key={tech}>
              <div className="group px-4 py-6 rounded-lg border border-line bg-surface hover:bg-surface-hover hover:border-accent/40 transition-all duration-200 text-center">
                <div className="h-9 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <SkillLogo name={tech} size={30} />
                </div>
                <p className="text-sm sm:text-base font-medium text-ink-primary transition-transform duration-200 group-hover:translate-y-[-2px]">
                  {tech}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <p className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-5">
          Also working with
        </p>
        <div className="space-y-3 motion-reduce:hidden">
          <MarqueeRow items={secondaryTechRow1} direction="right" />
          <MarqueeRow items={secondaryTechRow2} direction="left" />
        </div>
        <div className="hidden motion-reduce:flex flex-wrap gap-2">
          {[...secondaryTechRow1, ...secondaryTechRow2].map((t) => (
            <span key={t} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-line bg-surface text-sm text-ink-secondary">
              <SkillLogo name={t} />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
