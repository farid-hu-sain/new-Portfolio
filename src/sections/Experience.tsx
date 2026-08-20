import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "../data/experience";
import { SectionHeader } from "../components/ui/SectionHeader";
import { TechTag } from "../components/ui/SectionHeader";
import Reveal from "../components/ui/Reveal";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="border-t border-line px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-content mx-auto">
        <SectionHeader
          eyebrow="Experience"
          title="Experience"
          description="My journey building, learning, and working with software."
        />

        <div ref={ref} className="relative pl-8 sm:pl-10">
          <div className="absolute left-[3px] sm:left-[5px] top-2 bottom-2 w-px bg-line" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[3px] sm:left-[5px] top-2 w-px bg-accent"
          />

          {experience.map((e, i) => (
            <Reveal key={i} className="relative mb-14 last:mb-0" y={30}>
              <span className="absolute -left-8 sm:-left-10 top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-accent/15" />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <h3 className="text-lg sm:text-xl font-semibold text-ink-primary">{e.role}</h3>
                <span className="font-mono text-xs text-ink-muted">{e.period}</span>
              </div>
              <p className="text-accent text-sm font-medium mb-0.5">{e.organization}</p>
              <div className="flex flex-wrap gap-x-3 text-xs text-ink-muted font-mono mb-4">
                {e.program && <span>{e.program}</span>}
                <span>·</span>
                <span>{e.location}</span>
              </div>

              <p className="text-ink-secondary text-sm sm:text-base leading-relaxed mb-4 max-w-2xl">
                {e.description}
              </p>

              <ul className="space-y-1.5 mb-6">
                {e.responsibilities.map((r, j) => (
                  <li
                    key={j}
                    className="text-sm text-ink-secondary leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ink-muted"
                  >
                    {r}
                  </li>
                ))}
              </ul>

              {e.projectsInvolved.length > 0 && (
                <div className="space-y-3">
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                    Projects involved
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {e.projectsInvolved.map((p) => (
                      <div
                        key={p.name}
                        className="px-4 py-3 rounded-lg border border-line bg-surface/60"
                      >
                        <p className="text-sm font-medium text-ink-primary">{p.name}</p>
                        {p.fullName && <p className="text-xs text-ink-muted mb-2">{p.fullName}</p>}
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {p.stack.map((s) => (
                            <TechTag key={s} className="text-xs px-2 py-0.5">
                              {s}
                            </TechTag>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
