import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, type MotionValue } from "framer-motion";
import { workflowSteps } from "../data/workflow";

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

function StepItem({
  step,
  progress,
  index,
  total,
  onActive,
}: {
  step: (typeof workflowSteps)[number];
  progress: MotionValue<number>;
  index: number;
  total: number;
  onActive: (i: number) => void;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const range: [number, number, number, number] = [
    clamp01(start - 0.05),
    clamp01(start + 0.05),
    clamp01(end - 0.08),
    clamp01(end),
  ];
  for (let i = 1; i < range.length; i++) {
    if (range[i] < range[i - 1]) range[i] = range[i - 1];
  }
  const opacity = useTransform(progress, range, [0.3, 1, 1, 0.3]);

  useMotionValueEvent(progress, "change", (v) => {
    if (v >= start && v < end) onActive(index);
  });

  return (
    <motion.div style={{ opacity }} className="py-8 border-b border-line last:border-0">
      <div className="flex items-baseline gap-4 mb-3">
        <span className="font-mono text-sm text-accent">{step.number}</span>
        <h3 className="text-xl sm:text-2xl font-semibold text-ink-primary">{step.title}</h3>
      </div>
      {step.question && (
        <p className="text-ink-secondary italic text-sm mb-3">"{step.question}"</p>
      )}
      <div className="flex flex-wrap gap-2">
        {step.points.map((p) => (
          <span key={p} className="px-2.5 py-1 rounded text-xs border border-line text-ink-secondary">
            {p}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Workflow() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="border-t border-line px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-content mx-auto">
        <div ref={ref} className="relative lg:grid lg:grid-cols-2 lg:gap-16" style={{ minHeight: "180vh" }}>
          <div className="lg:sticky lg:top-32 lg:h-fit mb-12 lg:mb-0">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
              How I Work
            </p>
            <h2 className="text-display-sm sm:text-display font-semibold text-ink-primary mb-4 max-w-md">
              A structured process from problem to production.
            </h2>
            <p className="text-ink-secondary text-base leading-relaxed max-w-sm mb-8">
              A simple workflow I follow when turning an idea or requirement
              into working software.
            </p>

            <div className="relative pl-1 hidden lg:block">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-line" />
              <motion.div style={{ height: lineHeight }} className="absolute left-0 top-0 w-px bg-accent" />
              <div className="flex flex-col gap-6 pl-5">
                {workflowSteps.map((s, i) => (
                  <span
                    key={s.number}
                    className={`font-mono text-xs transition-colors ${
                      activeIndex === i ? "text-accent" : "text-ink-muted"
                    }`}
                  >
                    {s.number} {s.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            {workflowSteps.map((step, i) => (
              <StepItem
                key={step.number}
                step={step}
                progress={scrollYProgress}
                index={i}
                total={workflowSteps.length}
                onActive={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
