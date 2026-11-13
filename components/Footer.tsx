"use client";

import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolio } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-[#0f0f0f] py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-[#D7F36A] text-[#121212] flex items-center justify-center font-mono font-bold text-xs border border-[#121212]/10 shadow-2xs">
            V
          </div>
          <div>
            <div className="font-mono text-xs font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
              VEER SINGH LODHI
            </div>
            <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
              &copy; {currentYear} &middot; All systems operational.
            </div>
          </div>
        </div>

        {/* Tech Credits */}
        <div className="text-center md:text-left text-xs font-mono text-zinc-500 dark:text-zinc-400">
          Engineered with <span className="text-zinc-950 dark:text-zinc-200 font-semibold">Next.js</span>,{" "}
          <span className="text-zinc-950 dark:text-zinc-200 font-semibold">Tailwind CSS</span>, &amp;{" "}
          <span className="text-zinc-950 dark:text-zinc-200 font-semibold">Lenis</span>.
        </div>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-4">
          <Link
            href={portfolio.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors p-1"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </Link>

          <Link
            href={portfolio.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors p-1"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </Link>

          <a
            href={`mailto:${portfolio.personal.email}`}
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors p-1"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-[#F9F9F6] dark:bg-zinc-900 text-xs font-mono text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
