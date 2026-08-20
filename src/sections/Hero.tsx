import { motion } from "framer-motion";
import { ArrowUpRight, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/ui/BrandIcons";
import { profile } from "../data/profile";
import TextReveal from "../components/ui/TextReveal";

const badges = ["Kotlin", "Compose", "Android", "Flutter"];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-5 sm:px-8 overflow-hidden"
    >
      <div className="max-w-content mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* left column */}
        <div>
          <motion.p
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.45 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6"
          >
            Hello, I'm
          </motion.p>

          <h1 className="mb-3 text-4xl sm:text-5xl md:text-display-xl font-semibold text-ink-primary">
            {profile.name.toUpperCase()}
          </h1>

          <TextReveal
            lines={["Android & Mobile Developer"]}
            className="mb-7"
            lineClassName="text-xl sm:text-2xl font-medium text-accent"
            delayStart={0.35}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-ink-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-3"
          >
            I build modern mobile applications with a strong focus on clean
            architecture, maintainable code, scalable application structure,
            and user experience.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-ink-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-8"
          >
            My primary focus is Android development using Kotlin and Jetpack
            Compose, with additional experience in Flutter, frontend
            development, backend systems, and REST API integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-sm text-ink-secondary">{profile.status}</span>
            <span className="text-ink-muted">·</span>
            <span className="text-sm text-ink-secondary">{profile.location}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-bg text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              View My Projects
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-line text-ink-primary text-sm font-medium hover:border-accent/50 hover:bg-surface transition-colors"
            >
              <FileDown size={16} /> Download Resume
            </a>
            <div className="flex items-center gap-3 ml-1">
              <a href={profile.github} aria-label="GitHub" className="text-ink-secondary hover:text-accent transition-colors">
                <GithubIcon size={19} />
              </a>
              <a href={profile.linkedin} aria-label="LinkedIn" className="text-ink-secondary hover:text-accent transition-colors">
                <LinkedinIcon size={19} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* right column — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-10 rounded-full bg-accent/10 blur-3xl"
          />
          <div className="relative aspect-[4/5] rounded-2xl border border-line bg-surface overflow-hidden">
            <img
              src="/profile/muhammad-farid-husain.png"
              alt="Portrait of Muhammad Farid Husain"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {badges.map((b, i) => {
            const positions = [
              "top-4 -left-6",
              "top-1/3 -right-8",
              "bottom-24 -left-10",
              "bottom-6 -right-4",
            ];
            return (
              <motion.span
                key={b}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: 1 + i * 0.1 },
                  y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 },
                }}
                className={`hidden sm:block absolute ${positions[i]} px-3 py-1.5 rounded-md bg-surface/90 backdrop-blur border border-line text-xs font-mono text-ink-secondary`}
              >
                {b}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
