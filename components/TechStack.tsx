"use client";

import { portfolio } from "@/data/portfolio";
import {
  Code2,
  Server,
  Layout,
  Database,
  BrainCircuit,
  Wrench,
  Check,
} from "lucide-react";

interface CategoryMeta {
  key: keyof typeof portfolio.skills;
  label: string;
  index: string;
  icon: typeof Code2;
  description: string;
}

const categories: CategoryMeta[] = [
  {
    key: "languages",
    label: "Languages & Core",
    index: "01",
    icon: Code2,
    description: "Core algorithmic foundations and multi-paradigm programming.",
  },
  {
    key: "backend",
    label: "Backend & Systems",
    index: "02",
    icon: Server,
    description: "Enterprise Java, Spring ecosystem, microservices, and secure APIs.",
  },
  {
    key: "frontend",
    label: "Frontend & UI",
    index: "03",
    icon: Layout,
    description: "Modern component-driven web interfaces, SPAs, and design systems.",
  },
  {
    key: "databases",
    label: "Databases & Storage",
    index: "04",
    icon: Database,
    description: "Relational modeling, document stores, indexing, and transactional integrity.",
  },
  {
    key: "ai_ml",
    label: "AI & Generative Systems",
    index: "05",
    icon: BrainCircuit,
    description: "Retrieval-Augmented Generation, vector embeddings, and autonomous agent loops.",
  },
  {
    key: "tools",
    label: "Tools & Protocols",
    index: "06",
    icon: Wrench,
    description: "Version control, API testing, real-time protocols, and authentication.",
  },
];

export default function TechStack() {
  const allSkills = Object.values(portfolio.skills).flat();

  return (
    <section
      id="stack"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border-subtle)]"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <div className="text-xs font-mono font-semibold text-[#D7F36A] dark:text-[#D7F36A] uppercase tracking-widest mb-2">
            03 // TECHNICAL PROFICIENCY
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] tracking-tight">
            Capabilities &amp; Tech Stack
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-[var(--text-muted)] max-w-xs sm:text-right">
          ENTERPRISE ARCHITECTURE + GENERATIVE AI
        </p>
      </div>

      {/* Bento Grid: 6 Categorized Stack Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {categories.map((cat) => {
          const items = portfolio.skills[cat.key];
          const Icon = cat.icon;

          return (
            <div
              key={cat.key}
              className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[#D7F36A] transition-all duration-300 flex flex-col justify-between group shadow-2xs hover:shadow-md"
            >
              <div>
                {/* Header within card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] group-hover:bg-[#D7F36A] group-hover:text-[#121212] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                      {cat.label}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">
                    {cat.index}
                  </span>
                </div>

                <p className="text-xs text-[var(--text-muted)] mb-5">
                  {cat.description}
                </p>

                {/* Pill Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-xs font-mono text-[var(--text-primary)] hover:border-[#D7F36A] hover:bg-[#D7F36A]/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Counter */}
              <div className="pt-4 mt-6 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                <span>Verified skills</span>
                <span className="font-semibold text-[var(--text-primary)]">
                  {items.length} technologies
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Infinite Ticker Bar across the bottom */}
      <div className="p-4 sm:p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden">
        <div className="flex items-center gap-2 mb-3 px-2">
          <Check className="w-3.5 h-3.5 text-[#D7F36A]" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
            Continuous Ingestion &middot; Skills Stream
          </span>
        </div>

        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-3 py-1 animate-marquee whitespace-nowrap">
            {allSkills.concat(allSkills).map((item, idx) => (
              <span
                key={`${item}-${idx}`}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-xs font-mono text-[var(--text-primary)] font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D7F36A]"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
