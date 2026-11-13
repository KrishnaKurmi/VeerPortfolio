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
import { motion } from "framer-motion";

interface CategoryMeta {
  key: keyof typeof portfolio.skills;
  label: string;
  icon: typeof Code2;
  description: string;
}

const categories: CategoryMeta[] = [
  {
    key: "languages",
    label: "Languages & Core",
    icon: Code2,
    description: "Core algorithms, data structures, and typed programming languages.",
  },
  {
    key: "backend",
    label: "Backend & Distributed Systems",
    icon: Server,
    description: "Enterprise Java, Spring ecosystem, microservices, and secure APIs.",
  },
  {
    key: "frontend",
    label: "Frontend & User Interfaces",
    icon: Layout,
    description: "Component architecture, reactive state, and modern CSS frameworks.",
  },
  {
    key: "databases",
    label: "Databases & Data Storage",
    icon: Database,
    description: "Relational schemas, ACID transactions, and document stores.",
  },
  {
    key: "ai_ml",
    label: "AI & Generative Systems",
    icon: BrainCircuit,
    description: "RAG pipelines, vector search, embeddings, and autonomous agent loops.",
  },
  {
    key: "tools",
    label: "Tools, Security & Protocols",
    icon: Wrench,
    description: "Version control, API testing, WebSockets, OAuth2, and JWT tokens.",
  },
];

export default function TechStack() {
  const allSkills = Object.values(portfolio.skills).flat();

  return (
    <section
      id="stack"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <div className="inline-block px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-[11px] font-bold tracking-wider uppercase mb-3">
            03 // TECHNICAL PROFICIENCY
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-zinc-950 dark:text-zinc-100 tracking-hero">
            Capabilities &amp; Tech Stack
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-xs sm:text-right">
          ENTERPRISE BACKEND + MODERN WEB + AI
        </p>
      </div>

      {/* Grid: 6 Categorized Stack Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {categories.map((cat, idx) => {
          const items = portfolio.skills[cat.key];
          const Icon = cat.icon;

          return (
            <motion.div
              key={cat.key}
              className="p-6 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-all flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
              }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#F9F9F6] dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-950 dark:group-hover:bg-zinc-100 group-hover:text-white dark:group-hover:text-zinc-950 group-hover:border-zinc-950 dark:group-hover:border-zinc-100 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-sm text-zinc-950 dark:text-zinc-100">
                      {cat.label}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 px-2 py-0.5 rounded bg-[#F9F9F6] dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md border border-zinc-200/80 dark:border-zinc-700 bg-[#F9F9F6] dark:bg-zinc-800 text-xs font-mono text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                <span>Verified modules</span>
                <span className="font-semibold text-zinc-950 dark:text-zinc-200">
                  {items.length} technologies
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Smooth Marquee Bar */}
      <motion.div
        className="p-4 sm:p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 mb-3 px-2">
          <Check className="w-3.5 h-3.5 text-zinc-800 dark:text-zinc-200" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Skills Overview &middot; Active Ecosystem
          </span>
        </div>

        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-2.5 py-1 animate-marquee whitespace-nowrap">
            {allSkills.concat(allSkills).map((item, idx) => (
              <span
                key={`${item}-${idx}`}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200/80 dark:border-zinc-700 bg-[#F9F9F6] dark:bg-zinc-800 text-xs font-mono text-zinc-800 dark:text-zinc-200 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D7F36A] border border-[#121212]/30 dark:border-zinc-950/40"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
