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
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-card)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-[#121212] dark:bg-white text-white dark:text-[#121212] flex items-center justify-center font-mono font-bold text-xs border border-[#D7F36A]/40">
            V
          </div>
          <div>
            <div className="font-mono text-xs font-bold tracking-tight text-[var(--text-primary)]">
              VEER SINGH LODHI
            </div>
            <div className="text-[10px] font-mono text-[var(--text-muted)]">
              &copy; {currentYear} &middot; All systems operational.
            </div>
          </div>
        </div>

        {/* Tech Credits */}
        <div className="text-center md:text-left text-xs font-mono text-[var(--text-muted)]">
          Built with <span className="text-[var(--text-primary)] font-semibold">Next.js 16</span>,{" "}
          <span className="text-[var(--text-primary)] font-semibold">Tailwind CSS</span>, &amp;{" "}
          <span className="text-[var(--text-primary)] font-semibold">Lenis</span>.
        </div>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-4">
          <Link
            href={portfolio.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </Link>

          <Link
            href={portfolio.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </Link>

          <a
            href={`mailto:${portfolio.personal.email}`}
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-black dark:hover:border-white transition-colors cursor-pointer"
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
