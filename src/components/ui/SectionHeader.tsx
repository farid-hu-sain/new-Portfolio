import { type ReactNode } from "react";
import Reveal from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={`mb-14 sm:mb-16 ${align === "center" ? "text-center mx-auto" : ""} max-w-2xl`}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-display-sm sm:text-display font-semibold text-ink-primary mb-4">
        {title}
      </h2>
      {description && <p className="text-ink-secondary text-base sm:text-lg leading-relaxed">{description}</p>}
    </Reveal>
  );
}

export function TechTag({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`px-3 py-1.5 rounded-md text-sm border border-line bg-surface text-ink-secondary ${className}`}
    >
      {children}
    </span>
  );
}
