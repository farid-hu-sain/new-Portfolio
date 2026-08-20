import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { profile } from "../data/profile";
import { GmailIcon, GithubIcon, LinkedinIcon, WhatsappIcon } from "../components/ui/BrandIcons";
import TextReveal from "../components/ui/TextReveal";
import Reveal from "../components/ui/Reveal";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
  { label: "GitHub", href: profile.github, icon: GithubIcon },
  { label: "WhatsApp", href: profile.whatsapp, icon: WhatsappIcon },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-16 border-t border-line px-5 sm:px-8 pt-20 pb-24 sm:pt-24 sm:pb-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -right-[8vw] top-12 pointer-events-none select-none font-mono text-[18vw] leading-none text-ink-primary/[0.025] font-bold whitespace-nowrap"
      >
        09
      </div>

      <div className="relative max-w-content mx-auto">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-5 sm:mb-7">
            Contact / 09
          </p>
        </Reveal>

        <TextReveal
          lines={["LET'S BUILD", "SOMETHING", "GREAT."]}
          lineClassName="text-4xl sm:text-6xl md:text-display-xl font-semibold text-ink-primary"
          stagger={0.12}
        />

        <Reveal delay={0.4} className="max-w-2xl mt-8 mb-12 sm:mb-16">
          <p className="text-ink-secondary text-base sm:text-lg leading-relaxed">
            I'm open to opportunities in Android &amp; Mobile Development,
            software engineering roles, and interesting collaborations.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="relative overflow-hidden rounded-xl border border-line bg-surface/70">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
            />

            <div className="p-6 sm:p-9 md:p-12">
              <div className="flex items-center gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-accent">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                Available for opportunities
              </div>

              <p className="mt-9 sm:mt-12 max-w-xl text-2xl sm:text-3xl md:text-4xl font-medium leading-tight tracking-tight text-ink-primary">
                Have a project, opportunity,
                <br className="hidden sm:block" /> or just want to talk tech?
              </p>

              <div className="mt-10 sm:mt-14 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2.5 text-sm sm:text-base font-medium text-ink-primary break-all hover:text-accent transition-colors"
                >
                  <GmailIcon size={18} className="shrink-0" />
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-live="polite"
                  className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-ink-secondary hover:text-accent transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={15} /> Copied
                    </>
                  ) : (
                    <>
                      <Copy size={15} /> Copy
                    </>
                  )}
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.6} className="mt-8 sm:mt-10">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-primary hover:text-accent transition-colors"
                >
                  <Icon size={16} className="shrink-0" />
                  {link.label}
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              );
            })}
            <a
              href={profile.cv}
              download
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-primary hover:text-accent transition-colors"
            >
              Download CV
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="mt-12 sm:mt-16 pt-6 border-t border-line grid gap-2 sm:grid-cols-2 text-sm">
            <p className="text-ink-secondary">{profile.location}</p>
            <p className="text-ink-secondary sm:text-right">GMT +7</p>
            <p className="text-xs text-ink-muted sm:col-span-2">
              Usually responds within 24–48 hours
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
