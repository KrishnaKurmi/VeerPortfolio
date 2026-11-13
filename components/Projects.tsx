"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolio, FeaturedProject, SecondaryProject } from "@/data/portfolio";
import {
  ArrowUpRight,
  Play,
  Users,
  Calendar,
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
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <div className="inline-block px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-[11px] font-bold tracking-wider uppercase mb-3">
            04 // FEATURED ENGAGEMENTS
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-zinc-950 dark:text-zinc-100 tracking-tight">
            Selected Work &amp; <span className="font-serif italic font-normal text-zinc-700 dark:text-zinc-300">Systems</span>
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-xs sm:text-right">
          ENTERPRISE BACKENDS &middot; PRODUCTION APPS
        </p>
      </div>

      {/* Featured Projects Grid: 2x2 Clean Bento Cards */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {portfolio.featured_projects.map((project: FeaturedProject, idx: number) => {
          return (
            <motion.div
              key={project.id}
              className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
              }}
              viewport={{ once: true }}
            >
              {/* Window Header Chrome */}
              <div className="px-5 py-3.5 border-b border-zinc-200/80 dark:border-zinc-800 bg-[#F9F9F6] dark:bg-zinc-950 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                  </div>
                  <span className="ml-2 font-mono text-[11px] text-zinc-500 dark:text-zinc-400 truncate max-w-[180px] sm:max-w-xs">
                    {project.liveLink || project.playStoreLink || `github.com/veer/${project.id}`}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-bold text-zinc-500 dark:text-zinc-400">
                    [0{idx + 1}]
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-[10px] font-bold border border-zinc-200/80 dark:border-zinc-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D7F36A] border border-[#121212]/20 dark:border-zinc-950/40"></span>
                    {project.liveLink ? "LIVE" : project.playStoreLink ? "PLAY STORE" : "DEPLOYED"}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Pill */}
                  <div className="text-[11px] font-mono tracking-wider text-zinc-500 dark:text-zinc-400 uppercase font-bold mb-2">
                    {project.category}
                  </div>

                  {/* Project Name */}
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-950 dark:text-zinc-100 mb-3 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-[1.8] mb-6">
                    {project.description}
                  </p>

                  {/* Metadata Chips: Period & Team */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-6 py-2 border-y border-zinc-200/80 dark:border-zinc-800">
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
                        className="px-2.5 py-1 rounded-md border border-zinc-200/80 dark:border-zinc-700 bg-[#F9F9F6] dark:bg-zinc-800 text-xs font-mono text-zinc-800 dark:text-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-200/80 dark:border-zinc-800">
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:-translate-y-0.5 transition-all shadow-xs cursor-pointer"
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
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:-translate-y-0.5 transition-all shadow-xs cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-[#D7F36A] text-[#D7F36A] dark:fill-emerald-600 dark:text-emerald-600" />
                      <span>Google Play Store</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-400 dark:text-zinc-600" />
                    </Link>
                  )}

                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:-translate-y-0.5 transition-all shadow-2xs cursor-pointer"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-zinc-800 dark:text-zinc-200" />
                      <span>View Code</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Secondary Projects Accordion Archive */}
      <motion.div
        className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#F9F9F6] dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200">
              <FolderGit2 className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-950 dark:text-zinc-100">
                Additional Projects &amp; Software Archive
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                {portfolio.secondary_projects.length} repository projects &middot; Java Swing, WebSockets, DB Systems
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowSecondary(!showSecondary)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200/80 dark:border-zinc-700 bg-[#F9F9F6] dark:bg-zinc-800 hover:bg-white dark:hover:bg-zinc-700 text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200 transition-all self-start sm:self-auto cursor-pointer"
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
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-zinc-200/80 dark:border-zinc-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {portfolio.secondary_projects.map((proj: SecondaryProject, idx: number) => (
              <motion.div
                key={proj.id}
                className="p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-[#F9F9F6]/60 dark:bg-zinc-800/40 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-white dark:hover:bg-zinc-800 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.08,
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase font-bold tracking-wider">
                      {proj.category}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                      {proj.period}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base text-zinc-950 dark:text-zinc-100 mb-2">
                    {proj.name}
                  </h4>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md border border-zinc-200/80 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-[11px] font-mono text-zinc-800 dark:text-zinc-200"
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
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white pt-3 border-t border-zinc-200/80 dark:border-zinc-800"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-800 dark:text-zinc-200" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
