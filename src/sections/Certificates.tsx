import { Award, ArrowUpRight } from "lucide-react";
import { certificates } from "../data/certificates";
import { SectionHeader } from "../components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "../components/ui/Stagger";

export default function Certificates() {
  return (
    <section className="border-t border-line px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-content mx-auto">
        <SectionHeader
          eyebrow="Certificates"
          title="Certificates & Learning"
          description="Courses and credentials that support my continuous development as a software engineer."
        />

        <StaggerContainer
          className={`grid gap-4 ${certificates.length > 1 ? "sm:grid-cols-2" : "max-w-md"}`}
          staggerDelay={0.08}
        >
          {certificates.map((cert) => (
            <StaggerItem key={cert.title} className="h-full">
              <div className="group h-full p-6 rounded-xl border border-line bg-surface/40 hover:-translate-y-1 hover:border-accent/30 transition-all duration-200">
                {cert.image && (
                  <div className="mb-5 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg border border-line bg-white">
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate issued by ${cert.issuer}`}
                      loading="lazy"
                      className="block h-full w-full object-contain"
                    />
                  </div>
                )}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/25 flex items-center justify-center">
                    <Award size={18} className="text-accent" />
                  </div>
                  {cert.status && (
                    <span className="px-2.5 py-1 rounded-md border border-accent/25 bg-accent/10 font-mono text-[10px] uppercase tracking-wider text-accent">
                      {cert.status}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-semibold text-ink-primary mb-1">{cert.title}</h3>
                <p className="text-xs text-ink-muted font-mono mb-3">
                  {cert.issuer} · {cert.issueDate}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded text-xs border border-line text-ink-secondary">
                      {s}
                    </span>
                  ))}
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-ink-primary hover:text-accent transition-colors"
                  >
                    View Credential <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
