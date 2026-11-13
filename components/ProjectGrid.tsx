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
            className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.5)] hover:-translate-y-0.5"
          >
            {/* Window Header */}
            <div className="px-4 py-3 border-b border-zinc-200/80 dark:border-zinc-800 bg-[#F9F9F6] dark:bg-zinc-950 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                <span className="ml-2 font-mono text-[10px] text-zinc-500 dark:text-zinc-400 truncate max-w-[130px]">
                  {project.category}
                </span>
              </div>
              <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold">
                [0{idx + 1}]
              </span>
            </div>

            {/* Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-xl text-zinc-950 dark:text-zinc-100 mb-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                  {project.name}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-4 py-1.5 border-y border-zinc-200/80 dark:border-zinc-800">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-zinc-500 dark:text-zinc-400" />
                    <span>{project.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-zinc-500 dark:text-zinc-400" />
                    <span>Team: {project.team}</span>
                  </div>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[11px] font-mono rounded-md border border-zinc-200/80 dark:border-zinc-700 bg-[#F9F9F6] dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-2 pt-3 border-t border-zinc-200/80 dark:border-zinc-800 flex-wrap">
                {liveLink && (
                  <Link
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
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
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                  >
                    <Play className="w-3 h-3 fill-[#D7F36A] text-[#D7F36A] dark:fill-emerald-600 dark:text-emerald-600" />
                    <span>Play Store</span>
                  </Link>
                )}

                {githubLink && (
                  <Link
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-zinc-200/80 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-medium hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
                  >
                    <GithubIcon className="w-3 h-3 text-zinc-800 dark:text-zinc-200" />
                    <span>Code</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
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
