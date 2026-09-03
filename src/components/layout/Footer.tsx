import { motion } from "framer-motion";
import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-line px-5 sm:px-8 py-10"
    >
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-mono text-sm font-semibold text-ink-primary mb-2">
            MFH<span className="text-accent">.</span>
          </p>
          <p className="text-sm text-ink-secondary">{profile.name}</p>
          <p className="text-xs text-ink-muted">{profile.role} · {profile.secondaryRole} · {profile.location}</p>
        </div>

        <div className="flex flex-col sm:items-end gap-2">
          <div className="flex gap-4 text-sm">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-ink-secondary hover:text-accent transition-colors">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-ink-secondary hover:text-accent transition-colors">LinkedIn</a>
          </div>
          <p className="text-xs text-ink-muted">© 2026 {profile.name}</p>
        </div>
      </div>
    </motion.footer>
  );
}
