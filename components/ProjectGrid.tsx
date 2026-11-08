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
            className="rounded-2xl border border-[#E8E9E5] bg-white overflow-hidden hover:border-[#121212] transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_20px_rgba(29,37,18,0.03)] hover:shadow-[0_16px_36px_rgba(29,37,18,0.06)] hover:-translate-y-0.5"
          >
            {/* Window Header */}
            <div className="px-4 py-3 border-b border-[#E8E9E5] bg-[#F9F9F6] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#121212]/20"></div>
                <div className="w-2 h-2 rounded-full bg-[#121212]/20"></div>
                <div className="w-2 h-2 rounded-full bg-[#121212]/20"></div>
                <span className="ml-2 font-mono text-[10px] text-[#73766F] truncate max-w-[130px]">
                  {project.category}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#73766F] font-semibold">
                [0{idx + 1}]
              </span>
            </div>

            {/* Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-xl text-[#121212] mb-2 group-hover:text-[#3B4330] transition-colors">
                  {project.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#42463F] line-clamp-3 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-3 text-xs font-mono text-[#73766F] mb-4 py-1.5 border-y border-[#E8E9E5]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{project.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>Team: {project.team}</span>
                  </div>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[11px] font-mono rounded-md border border-[#E8E9E5] bg-[#F9F9F6] text-[#121212]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-2 pt-3 border-t border-[#E8E9E5] flex-wrap">
                {liveLink && (
                  <Link
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#121212] text-white text-xs font-semibold hover:bg-[#3B4330] transition-colors"
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
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#121212] text-white text-xs font-semibold hover:bg-[#3B4330] transition-colors"
                  >
                    <Play className="w-3 h-3 fill-[#D7F36A] text-[#D7F36A]" />
                    <span>Play Store</span>
                  </Link>
                )}

                {githubLink && (
                  <Link
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#E8E9E5] bg-white text-[#121212] text-xs font-mono font-medium hover:border-[#121212] hover:bg-[#F9F9F6] transition-colors"
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
