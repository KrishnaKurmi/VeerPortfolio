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
    <footer className="w-full border-t border-[#E8E9E5] bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-[#D7F36A] text-[#121212] flex items-center justify-center font-mono font-bold text-xs border border-[#121212]/10 shadow-2xs">
            V
          </div>
          <div>
            <div className="font-mono text-xs font-bold tracking-tight text-[#121212]">
              VEER SINGH LODHI
            </div>
            <div className="text-[10px] font-mono text-[#73766F]">
              &copy; {currentYear} &middot; All systems operational.
            </div>
          </div>
        </div>

        {/* Tech Credits */}
        <div className="text-center md:text-left text-xs font-mono text-[#73766F]">
          Engineered with <span className="text-[#121212] font-semibold">Next.js</span>,{" "}
          <span className="text-[#121212] font-semibold">Tailwind CSS</span>, &amp;{" "}
          <span className="text-[#121212] font-semibold">Lenis</span>.
        </div>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-4">
          <Link
            href={portfolio.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#73766F] hover:text-[#121212] transition-colors p-1"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </Link>

          <Link
            href={portfolio.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#73766F] hover:text-[#121212] transition-colors p-1"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </Link>

          <a
            href={`mailto:${portfolio.personal.email}`}
            className="text-[#73766F] hover:text-[#121212] transition-colors p-1"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E8E9E5] bg-[#F9F9F6] text-xs font-mono text-[#121212] hover:border-[#121212] transition-colors cursor-pointer"
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
