"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolio, FeaturedProject, SecondaryProject } from "@/data/portfolio";
import {
  ArrowUpRight,
  ExternalLink,
  Play,
  Users,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp,
  FolderGit2,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <section
      id="work"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border-subtle)]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <div className="text-xs font-mono font-semibold text-[#D7F36A] dark:text-[#D7F36A] uppercase tracking-widest mb-2">
            04 // FEATURED ENGAGEMENTS
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] tracking-tight">
            Selected Work &amp; Systems
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-[var(--text-muted)] max-w-xs sm:text-right">
          ENTERPRISE BACKENDS &middot; PRODUCTION APPS
        </p>
      </div>

      {/* Featured Projects Grid: 2x2 Clean Bento Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {portfolio.featured_projects.map((project: FeaturedProject, idx: number) => {
          const isJaldi = project.id === "jaldi-store";
          const isHealth = project.id === "health-saathi";
          const isHon = project.id === "hotornot";
          const isSamvaad = project.id === "samvaad";

          return (
            <div
              key={project.id}
              className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden hover:border-[#D7F36A] transition-all duration-300 flex flex-col justify-between group shadow-2xs hover:shadow-lg"
            >
              {/* Window Header Chrome */}
              <div className="px-5 py-3.5 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
                  <span className="ml-2 font-mono text-[11px] text-[var(--text-muted)] truncate max-w-[180px] sm:max-w-xs">
                    {project.liveLink || project.playStoreLink || `github.com/veer/${project.id}`}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-bold text-[var(--text-muted)]">
                    [0{idx + 1}]
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {project.liveLink ? "LIVE" : project.playStoreLink ? "PLAY STORE" : "DEPLOYED"}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Pill */}
                  <div className="text-[11px] font-mono tracking-wider text-[#D7F36A] dark:text-[#D7F36A] uppercase font-bold mb-2">
                    {project.category}
                  </div>

                  {/* Project Name */}
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[var(--text-primary)] mb-3 group-hover:text-[#3b82f6] transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metadata Chips: Period & Team */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)] mb-6 py-2 border-y border-[var(--border-subtle)]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      <span>Team of {project.team}</span>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-xs font-mono text-[var(--text-primary)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#121212] dark:bg-white text-white dark:text-[#121212] text-xs font-semibold hover:bg-[#3B4330] dark:hover:bg-[#E8E9E5] transition-colors shadow-2xs"
                    >
                      <span>Visit Live Store</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}

                  {project.playStoreLink && (
                    <Link
                      href={project.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-2xs"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Google Play Store</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  )}

                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] text-xs font-semibold hover:border-black dark:hover:border-white transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View Code</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Secondary Projects / Archive Accordion Section */}
      <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
              <FolderGit2 className="w-5 h-5 text-[#D7F36A]" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[var(--text-primary)]">
                Additional Projects &amp; Software Archive
              </h3>
              <p className="text-xs text-[var(--text-muted)] font-mono">
                {portfolio.secondary_projects.length} repository projects &middot; Java Swing, WebSockets, DB Systems
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowSecondary(!showSecondary)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] hover:border-[#D7F36A] text-xs font-mono font-semibold text-[var(--text-primary)] transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>{showSecondary ? "Hide Archive" : "Expand Archive"}</span>
            {showSecondary ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        {showSecondary && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[var(--border-subtle)] animate-in fade-in duration-300">
            {portfolio.secondary_projects.map((proj: SecondaryProject) => (
              <div
                key={proj.id}
                className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] flex flex-col justify-between hover:border-[#D7F36A] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#D7F36A] uppercase font-bold tracking-wider">
                      {proj.category}
                    </span>
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      {proj.period}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base text-[var(--text-primary)] mb-2">
                    {proj.name}
                  </h4>

                  <p className="text-xs text-[var(--text-muted)] mb-4 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[10px] font-mono text-[var(--text-primary)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={proj.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-2 border-t border-[var(--border-subtle)]"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
