"use client";

import { portfolio } from "@/data/portfolio";
import { Award, BookOpen, Cpu, Sparkles, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border-subtle)]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <div className="text-xs font-mono font-semibold text-[#D7F36A] dark:text-[#D7F36A] uppercase tracking-widest mb-2">
            02 // BACKGROUND &amp; PHILOSOPHY
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] tracking-tight">
            Engineering for reliability. <br />
            <span className="text-[var(--text-muted)] font-normal">Architecting for scale.</span>
          </h2>
        </div>

        <div className="text-xs font-mono text-[var(--text-muted)] sm:text-right max-w-xs">
          B.TECH AI/ML &middot; SPRING BOOT &middot; REACT
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative & Credentials (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xs">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] mb-4">
              Hello, I&apos;m Veer Singh Lodhi.
            </h3>
            <p className="text-[var(--text-primary)] text-base sm:text-lg leading-relaxed mb-4">
              {portfolio.about.bio}
            </p>
            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              {portfolio.about.background}
            </p>
          </div>

          {/* Achievement Spotlight Card */}
          <div className="p-6 rounded-2xl border border-[#D7F36A]/50 bg-[#121212] text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D7F36A]/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#D7F36A] text-[#121212] flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-mono tracking-widest text-[#D7F36A] uppercase font-semibold">
                  Competency Milestone
                </div>
                <div className="font-display font-bold text-lg sm:text-xl text-white">
                  {portfolio.about.achievement}
                </div>
                <p className="text-xs text-gray-300 leading-relaxed pt-1">
                  Demonstrated fast algorithmic problem solving, clean architecture implementation, and high-pressure execution among collegiate peers.
                </p>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex-shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase mb-1">
                Academic Background &middot; 2023 — 2027
              </div>
              <div className="font-semibold text-sm sm:text-base text-[var(--text-primary)]">
                B.Tech in Machine Learning &amp; Artificial Intelligence
              </div>
              <div className="text-xs sm:text-sm text-[var(--text-muted)] mt-0.5">
                Babulal Tarabai Institute of Research and Technology (BTIRT), Sagar, MP
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: GenAI Explorations & Engineering Principles (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Active Exploration Card */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#D7F36A]" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                Currently Exploring &middot; GenAI Focus
              </h3>
            </div>

            <p className="text-xs text-[var(--text-muted)] mb-5">
              Bridging classical backend engineering with modern AI primitives to build intelligent, autonomous services:
            </p>

            <div className="flex flex-wrap gap-2">
              {portfolio.about.exploring.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-xs font-mono text-[var(--text-primary)] hover:border-[#D7F36A] hover:bg-[#D7F36A]/10 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering Tenets Card */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-4 h-4 text-emerald-500" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                Engineering Tenets
              </h3>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-[var(--text-muted)]">
                  <strong className="text-[var(--text-primary)]">Clean Domain Boundaries:</strong> Separation of controller, service layer, and data access for testable logic.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-[var(--text-muted)]">
                  <strong className="text-[var(--text-primary)]">Secure by Design:</strong> Role-based access control, token expiration, sanitized endpoints with Spring Security.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-[var(--text-muted)]">
                  <strong className="text-[var(--text-primary)]">Pragmatic Full-Stack:</strong> Coupling robust Spring backends with responsive, accessible React interfaces.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
