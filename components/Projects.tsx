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
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E8E9E5]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <div className="inline-block px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 font-mono text-[11px] font-bold tracking-wider uppercase mb-3">
            04 // FEATURED ENGAGEMENTS
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-zinc-950 tracking-tight">
            Selected Work &amp; <span className="font-serif italic font-normal text-zinc-700">Systems</span>
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-[#73766F] max-w-xs sm:text-right">
          ENTERPRISE BACKENDS &middot; PRODUCTION APPS
        </p>
      </div>

      {/* Featured Projects Grid: 2x2 Clean Bento Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {portfolio.featured_projects.map((project: FeaturedProject, idx: number) => {
          return (
            <div
              key={project.id}
              className="rounded-2xl border border-[#E8E9E5] bg-white overflow-hidden hover:border-[#121212] transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_24px_rgba(29,37,18,0.03)] hover:shadow-[0_20px_50px_rgba(29,37,18,0.08)] hover:-translate-y-0.5"
            >
              {/* Window Header Chrome */}
              <div className="px-5 py-3.5 border-b border-[#E8E9E5] bg-[#F9F9F6] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#121212]/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#121212]/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#121212]/20"></div>
                  </div>
                  <span className="ml-2 font-mono text-[11px] text-[#73766F] truncate max-w-[180px] sm:max-w-xs">
                    {project.liveLink || project.playStoreLink || `github.com/veer/${project.id}`}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-bold text-[#73766F]">
                    [0{idx + 1}]
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[#121212] font-mono text-[10px] font-bold border border-[#E8E9E5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D7F36A] border border-[#121212]/20"></span>
                    {project.liveLink ? "LIVE" : project.playStoreLink ? "PLAY STORE" : "DEPLOYED"}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Pill */}
                  <div className="text-[11px] font-mono tracking-wider text-[#73766F] uppercase font-bold mb-2">
                    {project.category}
                  </div>

                  {/* Project Name */}
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121212] mb-3 group-hover:text-[#3B4330] transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#42463F] leading-[1.8] mb-6">
                    {project.description}
                  </p>

                  {/* Metadata Chips: Period & Team */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#73766F] mb-6 py-2 border-y border-[#E8E9E5]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      <span>Team: {project.team}</span>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md border border-[#E8E9E5] bg-[#F9F9F6] text-xs font-mono text-[#121212]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E8E9E5]">
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#121212] text-white text-xs font-semibold hover:bg-[#3B4330] hover:-translate-y-0.5 transition-all shadow-xs"
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
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#121212] text-white text-xs font-semibold hover:bg-[#3B4330] hover:-translate-y-0.5 transition-all shadow-xs"
                    >
                      <Play className="w-3.5 h-3.5 fill-[#D7F36A] text-[#D7F36A]" />
                      <span>Google Play Store</span>
                      <ArrowUpRight className="w-3 h-3 text-[#E8E9E5]" />
                    </Link>
                  )}

                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#E8E9E5] bg-white text-[#121212] text-xs font-semibold hover:border-[#121212] hover:bg-[#F9F9F6] hover:-translate-y-0.5 transition-all shadow-2xs"
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

      {/* Secondary Projects Accordion Archive */}
      <div className="rounded-2xl border border-[#E8E9E5] bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(29,37,18,0.03)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#F9F9F6] border border-[#E8E9E5] text-[#121212]">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#121212]">
                Additional Projects &amp; Software Archive
              </h3>
              <p className="text-xs text-[#73766F] font-mono">
                {portfolio.secondary_projects.length} repository projects &middot; Java Swing, WebSockets, DB Systems
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowSecondary(!showSecondary)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E8E9E5] bg-[#F9F9F6] hover:bg-white hover:border-[#121212] text-xs font-mono font-semibold text-[#121212] transition-all self-start sm:self-auto cursor-pointer"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#E8E9E5] animate-in fade-in duration-300">
            {portfolio.secondary_projects.map((proj: SecondaryProject) => (
              <div
                key={proj.id}
                className="p-5 rounded-xl border border-[#E8E9E5] bg-[#F9F9F6]/60 flex flex-col justify-between hover:border-[#121212] hover:bg-white transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-[#73766F] uppercase font-bold tracking-wider">
                      {proj.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#73766F]">
                      {proj.period}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base text-[#121212] mb-2">
                    {proj.name}
                  </h4>

                  <p className="text-xs text-[#42463F] mb-4 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md border border-[#E8E9E5] bg-white text-[11px] font-mono text-[#121212]"
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
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#121212] hover:text-[#3B4330] pt-3 border-t border-[#E8E9E5]"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-[#73766F]" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
