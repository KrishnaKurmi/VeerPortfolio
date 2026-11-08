"use client";

import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { ArrowDown, ArrowUpRight, Award, MapPin, Sparkles, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] flex flex-col justify-between pt-6 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-b border-zinc-200/80 pb-4 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-zinc-700" />
          <span>Sagar, Madhya Pradesh, India</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 font-semibold border border-amber-200/90 text-[11px] shadow-2xs">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            1st Prize &middot; Code Rush Winner
          </span>
          <span className="hidden sm:inline-block text-zinc-400">B.Tech AI/ML &apos;27</span>
        </div>
      </div>

      {/* Main Hero Stage */}
      <div className="py-14 md:py-20 lg:py-24 flex flex-col justify-center">
        {/* Role Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-200 bg-white text-zinc-700 text-xs font-mono font-medium w-fit mb-6 shadow-2xs">
          <Terminal className="w-3.5 h-3.5 text-emerald-600" />
          <span>Java Full-Stack Architect &middot; AI/ML Technologist</span>
        </div>

        {/* Editorial Headline with Serif Accent */}
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.96] text-zinc-950 mb-7">
          Veer Singh <br />
          <span className="font-serif italic font-normal tracking-normal text-zinc-800">
            Lodhi.
          </span>
        </h1>

        {/* Narrative Tagline */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-600 font-normal leading-relaxed mb-9">
          Engineering reliable enterprise systems with{" "}
          <strong className="text-zinc-950 font-semibold">Java</strong>,{" "}
          <strong className="text-zinc-950 font-semibold">Spring Boot</strong>, and reactive{" "}
          <strong className="text-zinc-950 font-semibold">React</strong> interfaces — bridging scalable microservices with modern Generative AI.
        </p>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-950 text-white font-semibold text-sm hover:bg-zinc-800 transition-all shadow-sm active:scale-98 group"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>

          <a
            href={portfolio.personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-zinc-200 bg-white text-zinc-800 font-semibold text-sm hover:border-zinc-300 hover:bg-zinc-50 transition-all shadow-2xs active:scale-98"
          >
            <span>View Resume</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400" />
          </a>

          <div className="flex items-center gap-2 pl-1 sm:pl-2">
            <Link
              href={portfolio.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-zinc-200 bg-white text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 hover:bg-zinc-50 transition-all shadow-2xs"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </Link>

            <Link
              href={portfolio.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-zinc-200 bg-white text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 hover:bg-zinc-50 transition-all shadow-2xs"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Technical Bento Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-zinc-200/80">
        <div className="p-5 rounded-2xl border border-zinc-200/80 bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] hover:border-zinc-300 transition-all">
          <div className="text-[11px] font-mono font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">
            01 &middot; Architecture
          </div>
          <div className="font-display font-bold text-sm text-zinc-950 mb-1">
            Backend Systems &amp; Microservices
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Spring Boot 3, Spring Security, JWT, PostgreSQL, MySQL, and Docker fundamentals.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-zinc-200/80 bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] hover:border-zinc-300 transition-all">
          <div className="text-[11px] font-mono font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">
            02 &middot; Current Role
          </div>
          <div className="font-display font-bold text-sm text-zinc-950 mb-1">
            Software Developer Intern
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Xansa IT Solutions &middot; Delivering core backend APIs across 4 production projects.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-zinc-200/80 bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] hover:border-zinc-300 transition-all">
          <div className="text-[11px] font-mono font-semibold text-zinc-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>03 &middot; Active Research</span>
          </div>
          <div className="font-display font-bold text-sm text-zinc-950 mb-1">
            RAG &amp; Autonomous Agents
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Semantic vector embeddings, Hugging Face Transformers, and tool-calling agent loops.
          </p>
        </div>
      </div>
    </section>
  );
}
