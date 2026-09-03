import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import {
  architectureStages,
  engineeringPrinciples,
  type ArchitectureStageId,
} from "../data/architecture";
import { SectionHeader, TechTag } from "../components/ui/SectionHeader";
import Reveal from "../components/ui/Reveal";

export default function Architecture() {
  const [selected, setSelected] = useState<ArchitectureStageId>("client");
  const activeStage = architectureStages.find((stage) => stage.id === selected) ?? architectureStages[0];

  return (
    <section id="architecture" className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
      <div className="max-w-content mx-auto">
        <SectionHeader
          eyebrow="Application Architecture"
          title="How I Structure Applications"
          description="A general view of how I separate user experiences, API contracts, business logic, and data. Each project uses only the layers and tools it needs."
        />

        <Reveal>
          <div className="grid gap-3 lg:grid-cols-4" aria-label="Application architecture layers">
            {architectureStages.map((stage, index) => {
              const isActive = stage.id === selected;

              return (
                <div key={stage.id} className="relative flex flex-col lg:block">
                  <button
                    type="button"
                    onClick={() => setSelected(stage.id)}
                    aria-pressed={isActive}
                    className={`w-full min-h-40 rounded-xl border p-5 text-left transition-colors ${
                      isActive
                        ? "border-accent/60 bg-accent/10"
                        : "border-line bg-surface/50 hover:border-accent/30 hover:bg-surface"
                    }`}
                  >
                    <span className={`font-mono text-xs ${isActive ? "text-accent" : "text-ink-muted"}`}>
                      0{index + 1}
                    </span>
                    <h3 className="mt-7 text-base font-semibold text-ink-primary">{stage.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{stage.summary}</p>
                  </button>

                  {index < architectureStages.length - 1 && (
                    <>
                      <ArrowDown aria-hidden="true" size={16} className="mx-auto my-1 text-accent lg:hidden" />
                      <ArrowRight aria-hidden="true" size={16} className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-accent lg:block" />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-6">
          <div className="rounded-xl border border-line bg-surface/60 p-6 sm:p-8 min-h-56">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Selected layer</p>
                <div className="mt-4 grid gap-7 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-semibold text-ink-primary">{activeStage.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{activeStage.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {activeStage.technologies.map((technology) => (
                        <TechTag key={technology}>{technology}</TechTag>
                      ))}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {activeStage.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3 text-sm text-ink-secondary">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.18} className="mt-8 flex flex-wrap gap-2">
          {engineeringPrinciples.map((principle) => (
            <span key={principle} className="rounded-md border border-line bg-surface/40 px-3 py-2 text-sm text-ink-secondary">
              {principle}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
