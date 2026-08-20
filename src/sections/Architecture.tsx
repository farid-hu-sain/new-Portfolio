import { useState } from "react";
import { motion } from "framer-motion";
import { architectureKnowledge, stateManagement } from "../data/architecture";
import { SectionHeader } from "../components/ui/SectionHeader";
import Reveal from "../components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "../components/ui/Stagger";

type NodeId = "ui" | "vm" | "repo" | "api" | "local";

const nodeDetails: Record<NodeId, { label: string; points: string[] }> = {
  ui: { label: "Compose UI", points: ["Declarative UI", "Recomposition on state change"] },
  vm: { label: "ViewModel", points: ["StateFlow", "UI State", "Business logic coordination"] },
  repo: { label: "Repository", points: ["Data abstraction", "Remote / local source"] },
  api: { label: "Remote API", points: ["Retrofit", "REST API"] },
  local: { label: "Local Storage", points: ["DataStore", "Local storage"] },
};

function DiagramNode({
  id,
  label,
  x,
  y,
  w,
  active,
  onSelect,
  delay,
}: {
  id: NodeId;
  label: string;
  x: number;
  y: number;
  w: number;
  active: boolean;
  onSelect: (id: NodeId) => void;
  delay: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay }}
      onClick={() => onSelect(id)}
      className="cursor-pointer"
      role="button"
      aria-label={`View details for ${label}`}
      tabIndex={0}
    >
      <rect
        x={x}
        y={y}
        width={w}
        height={44}
        rx={8}
        fill={active ? "rgba(61,220,132,0.12)" : "#121513"}
        stroke={active ? "#3DDC84" : "rgba(255,255,255,0.08)"}
        strokeWidth={1.5}
      />
      <text
        x={x + w / 2}
        y={y + 27}
        textAnchor="middle"
        fill={active ? "#3DDC84" : "#F5F7F5"}
        fontSize="13"
        fontFamily="JetBrains Mono, monospace"
      >
        {label}
      </text>
    </motion.g>
  );
}

export default function Architecture() {
  const [selected, setSelected] = useState<NodeId>("vm");
  const detail = nodeDetails[selected];

  return (
    <section className="border-t border-line px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-content mx-auto">
        <SectionHeader
          eyebrow="Architecture"
          title="Architecture & State Management"
          description="I care about how applications are structured, how state flows through the UI, and how data moves between layers."
        />

        <Reveal className="flex flex-wrap gap-2 mb-14">
          {architectureKnowledge.map((k) => (
            <span key={k} className="px-3 py-1.5 rounded-md border border-line bg-surface text-sm text-ink-secondary">
              {k}
            </span>
          ))}
        </Reveal>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start mb-16">
          {/* diagram */}
          <Reveal>
            <svg viewBox="0 0 420 300" className="w-full h-auto">
              {/* connectors */}
              <motion.path
                d="M 190 44 L 190 84"
                stroke="#3DDC84"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.path
                d="M 190 128 L 190 168"
                stroke="#3DDC84"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              <motion.path
                d="M 190 212 C 190 234, 100 234, 100 256"
                stroke="#3DDC84"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
              <motion.path
                d="M 190 212 C 190 234, 290 234, 290 256"
                stroke="#3DDC84"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.65 }}
              />

              <DiagramNode id="ui" label="Compose UI" x={100} y={0} w={180} active={selected === "ui"} onSelect={setSelected} delay={0} />
              <DiagramNode id="vm" label="ViewModel · StateFlow" x={70} y={84} w={240} active={selected === "vm"} onSelect={setSelected} delay={0.25} />
              <DiagramNode id="repo" label="Repository" x={100} y={168} w={180} active={selected === "repo"} onSelect={setSelected} delay={0.45} />
              <DiagramNode id="api" label="Remote API" x={20} y={256} w={160} active={selected === "api"} onSelect={setSelected} delay={0.65} />
              <DiagramNode id="local" label="Local Storage" x={210} y={256} w={160} active={selected === "local"} onSelect={setSelected} delay={0.7} />
            </svg>
          </Reveal>

          {/* detail panel */}
          <Reveal delay={0.15} className="p-6 rounded-xl border border-line bg-surface/60 min-h-[180px]">
            <p className="font-mono text-xs uppercase tracking-wider text-accent mb-3">
              {detail.label}
            </p>
            <ul className="space-y-2">
              {detail.points.map((p) => (
                <li key={p} className="text-sm text-ink-secondary leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ink-muted">
                  {p}
                </li>
              ))}
            </ul>
            <p className="text-xs text-ink-muted mt-6">Click a node in the diagram to inspect it.</p>
          </Reveal>
        </div>

        {/* state management by platform */}
        <StaggerContainer className="grid sm:grid-cols-3 gap-4">
          {stateManagement.map((s) => (
            <StaggerItem key={s.platform}>
              <div className="p-5 rounded-lg border border-line bg-surface/40">
                <p className="font-mono text-xs uppercase tracking-wider text-accent mb-3">{s.platform}</p>
                <ul className="space-y-1.5">
                  {s.tools.map((t) => (
                    <li key={t} className="text-sm text-ink-primary">{t}</li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
