import Reveal from "../components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "../components/ui/Stagger";

const journey = [
  "I started by learning how software works.",
  "Then I started building web and mobile applications.",
  "I expanded into backend systems and databases.",
  "Today I build across the full application stack.",
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-line px-5 py-24 sm:px-8 sm:py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035] font-mono text-xs leading-6 whitespace-pre pointer-events-none select-none px-5 sm:px-8 pt-16"
      >
{`interface Application {
  client: Web | Mobile
  api: REST
  service: Backend
  data: Database
}`}
      </div>

      <div className="relative max-w-content mx-auto">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">About</p>
            <h2 className="text-display-sm sm:text-display font-semibold text-ink-primary mb-6">
              Building Across the Application Stack
            </h2>
            <div className="space-y-4 text-ink-secondary text-base leading-relaxed">
              <p>
                I am a Fullstack Developer with experience building web, backend, and mobile applications using React, TypeScript, NestJS, PostgreSQL, Kotlin, Flutter, and React Native.
              </p>
              <p>
                During my professional experience, I contributed to SIMAS and a Crowdfunding Platform by building reusable frontend components, responsive interfaces, REST API integrations, and application improvements within a team environment.
              </p>
              <p>
                Beyond professional work, I build projects across frontend, backend, databases, Android, and Flutter to deepen my understanding of architecture, API design, authentication, state management, and maintainable development.
              </p>
              <p className="text-ink-primary">
                My goal is to become a well-rounded Software Engineer capable of contributing across the full application lifecycle.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid gap-3 sm:grid-cols-2" staggerDelay={0.1}>
            {journey.map((item, index) => (
              <StaggerItem key={item} className="h-full">
                <div className="h-full rounded-xl border border-line bg-surface/60 p-5 sm:p-6">
                  <span className="font-mono text-xs text-accent">0{index + 1}</span>
                  <p className="mt-8 text-lg sm:text-xl font-medium leading-snug text-ink-primary">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
