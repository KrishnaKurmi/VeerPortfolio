"use client";

import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { ArrowDown, ArrowUpRight, Award, MapPin, Sparkles, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] flex flex-col justify-between pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Top Meta Kicker */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-b border-[var(--border-subtle)] pb-4 text-xs font-mono text-[var(--text-muted)]">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>SAGAR, MADHYA PRADESH, INDIA</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D7F36A]/20 dark:bg-[#D7F36A]/10 text-[#121212] dark:text-[#D7F36A] font-semibold border border-[#D7F36A]/40 text-[11px]">
            <Award className="w-3 h-3 text-[#121212] dark:text-[#D7F36A]" />
            1ST PRIZE &middot; CODE RUSH
          </span>
          <span className="hidden sm:inline-block">B.TECH AI/ML &apos;27</span>
        </div>
      </div>

      {/* Center Main Stage */}
      <div className="py-12 md:py-16 lg:py-20 flex flex-col justify-center">
        {/* Sub-kicker */}
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[var(--text-muted)]">
            Full-Stack Backend Architect &middot; AI Enthusiast
          </span>
        </div>

        {/* Massive Editorial Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[var(--text-primary)] mb-6">
          Veer Singh <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[var(--text-primary)] to-[var(--text-muted)]">
            Lodhi.
          </span>
        </h1>

        {/* Editorial Tagline */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[var(--text-muted)] leading-relaxed mb-8">
          I build robust, production-grade applications with <strong className="text-[var(--text-primary)] font-semibold">Java</strong>,{" "}
          <strong className="text-[var(--text-primary)] font-semibold">Spring Boot</strong>, and{" "}
          <strong className="text-[var(--text-primary)] font-semibold">React</strong>. From distributed microservices to Generative AI pipelines, I engineer systems that are maintainable, resilient, and fast.
        </p>

        {/* Action Button Row */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#121212] dark:bg-white text-white dark:text-[#121212] font-semibold text-sm hover:bg-[#3B4330] dark:hover:bg-[#E8E9E5] transition-all shadow-sm active:scale-98 group"
          >
            <span>Explore Selected Work</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>

          <a
            href={portfolio.personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] font-semibold text-sm hover:border-[#D7F36A] hover:bg-[#D7F36A]/10 transition-all active:scale-98"
          >
            <span>View Resume</span>
            <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)]" />
          </a>

          <div className="flex items-center gap-2 pl-2">
            <Link
              href={portfolio.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-black dark:hover:border-white transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>

            <Link
              href={portfolio.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-black dark:hover:border-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Technical Bento Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-[var(--border-subtle)]">
        {/* Bento 1 */}
        <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[#D7F36A] transition-colors">
          <div className="text-[10px] font-mono font-semibold text-[#D7F36A] dark:text-[#D7F36A] uppercase tracking-wider mb-1">
            01 &middot; Architecture
          </div>
          <div className="font-semibold text-sm text-[var(--text-primary)] mb-1">
            Backend Systems & Microservices
          </div>
          <p className="text-xs text-[var(--text-muted)] line-clamp-2">
            Spring Boot 3, Spring Security, REST APIs, PostgreSQL & MySQL, Docker fundamentals.
          </p>
        </div>

        {/* Bento 2 */}
        <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[#D7F36A] transition-colors">
          <div className="text-[10px] font-mono font-semibold text-[#D7F36A] dark:text-[#D7F36A] uppercase tracking-wider mb-1">
            02 &middot; Current Role
          </div>
          <div className="font-semibold text-sm text-[var(--text-primary)] mb-1">
            Software Developer Intern
          </div>
          <p className="text-xs text-[var(--text-muted)] line-clamp-2">
            Xansa IT Solutions &middot; Building production backends across 4 team projects.
          </p>
        </div>

        {/* Bento 3 */}
        <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[#D7F36A] transition-colors">
          <div className="text-[10px] font-mono font-semibold text-[#D7F36A] dark:text-[#D7F36A] uppercase tracking-wider mb-1">
            03 &middot; Active Research
          </div>
          <div className="font-semibold text-sm text-[var(--text-primary)] mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D7F36A]" />
            <span>Generative AI & Agents</span>
          </div>
          <p className="text-xs text-[var(--text-muted)] line-clamp-2">
            RAG pipelines, vector embeddings, Hugging Face Transformers, and autonomous agents.
          </p>
        </div>
      </div>
    </section>
  );
}
