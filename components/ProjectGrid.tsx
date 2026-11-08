"use client";

import Link from "next/link";
import { FeaturedProject, SecondaryProject } from "@/data/portfolio";
import { ArrowUpRight, Play, Calendar, Users } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectGridProps {
  projects: (FeaturedProject | SecondaryProject)[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, idx) => {
        const liveLink = "liveLink" in project ? project.liveLink : undefined;
        const playStoreLink = "playStoreLink" in project ? project.playStoreLink : undefined;
        const githubLink = "githubLink" in project ? project.githubLink : undefined;

        return (
          <div
            key={project.id}
            className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden hover:border-[#D7F36A] transition-all duration-300 flex flex-col justify-between group shadow-2xs hover:shadow-md"
          >
            {/* Window Header */}
            <div className="px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/80 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400/80"></div>
                <div className="w-2 h-2 rounded-full bg-amber-400/80"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-400/80"></div>
                <span className="ml-1.5 font-mono text-[10px] text-[var(--text-muted)] truncate max-w-[130px]">
                  {project.category}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[var(--text-muted)] font-semibold">
                [0{idx + 1}]
              </span>
            </div>

            {/* Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-2 group-hover:text-[#3b82f6] transition-colors">
                  {project.name}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] line-clamp-3 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)] mb-4 py-1.5 border-y border-[var(--border-subtle)]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{project.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>Team {project.team}</span>
                  </div>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[11px] font-mono rounded-md border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-primary)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-2 pt-3 border-t border-[var(--border-subtle)] flex-wrap">
                {liveLink && (
                  <Link
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#121212] dark:bg-white text-white dark:text-[#121212] text-xs font-semibold"
                  >
                    <span>Visit</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                )}

                {playStoreLink && (
                  <Link
                    href={playStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Play Store</span>
                  </Link>
                )}

                {githubLink && (
                  <Link
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-primary)] text-xs font-mono font-medium hover:border-black dark:hover:border-white transition-colors"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>Code</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
