import { workflowSteps } from "../data/workflow";
import Reveal from "../components/ui/Reveal";

export default function Workflow() {
  return (
    <section id="workflow" className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
      <div className="max-w-content mx-auto lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="mb-12 lg:sticky lg:top-28 lg:h-fit lg:mb-0">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            How I Work
          </p>
          <h2 className="text-display-sm sm:text-display font-semibold text-ink-primary mb-4 max-w-md">
            From Requirement to Working Software
          </h2>
          <p className="text-ink-secondary text-base leading-relaxed max-w-md">
            A practical workflow for building and improving features across frontend, backend, database, and mobile applications.
          </p>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {workflowSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.05} className="h-full">
              <article className="h-full rounded-xl border border-line bg-surface/40 p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-xs text-accent">{step.number}</span>
                  <h3 className="text-lg font-semibold text-ink-primary">{step.title}</h3>
                </div>
                {step.question && (
                  <p className="text-ink-secondary italic text-sm mb-4">“{step.question}”</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {step.points.map((point) => (
                    <span key={point} className="rounded border border-line px-2.5 py-1 text-xs text-ink-secondary">
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
