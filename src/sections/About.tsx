import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const sentences = [
  "I started by learning how software works.",
  "Then I started building applications.",
  "Mobile development became the area I wanted to explore deeper.",
  "Today I focus primarily on Android.",
];

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

function StoryLine({ text, progress, index, total }: { text: string; progress: MotionValue<number>; index: number; total: number }) {
  const start = index / total;
  const end = (index + 1) / total;
  const range: [number, number, number, number] = [
    clamp01(start - 0.08),
    clamp01(start + 0.05),
    clamp01(end - 0.05),
    clamp01(end + 0.08),
  ];
  // ensure strictly non-decreasing after clamping
  for (let i = 1; i < range.length; i++) {
    if (range[i] < range[i - 1]) range[i] = range[i - 1];
  }
  const opacity = useTransform(progress, range, [0.25, 1, 1, 0.3]);

  return (
    <motion.p style={{ opacity }} className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug text-ink-primary mb-8">
      {text}
    </motion.p>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="about" className="relative border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8 pt-24 pb-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">About</p>
        <h2 className="text-display-sm sm:text-display font-semibold text-ink-primary max-w-2xl mb-6">
          My Journey Into Software Development
        </h2>
        <p className="text-ink-secondary text-base sm:text-lg leading-relaxed max-w-2xl">
          Along the way I've explored Android, Flutter, React, backend
          development, and database design — and increasingly focused on
          Android &amp; Mobile Development. My interest isn't only in writing
          UI, but in understanding application structure, state, repository
          patterns, APIs, authentication, and data flow.
        </p>
      </div>

      <div ref={ref} className="relative h-[220vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.05] font-mono text-xs leading-6 whitespace-pre pointer-events-none select-none px-5 sm:px-8 pt-10"
          >
{`fun buildSoftware() {
    understand()
    design()
    build()
    test()
    improve()
}`}
          </div>
          <div className="max-w-content mx-auto px-5 sm:px-8 w-full">
            <div className="max-w-2xl">
              {sentences.map((s, i) => (
                <StoryLine key={i} text={s} progress={scrollYProgress} index={i} total={sentences.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
