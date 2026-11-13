"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Capabilities", href: "#stack" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#fbfbfa]/90 dark:bg-[#0f0f0f]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800 py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark with signature lime marker block */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-current no-underline focus-visible:outline-hidden"
          >
            <div className="w-8 h-8 rounded-lg bg-[#D7F36A] text-[#121212] flex items-center justify-center font-display font-extrabold text-sm tracking-wider transition-transform group-hover:scale-105 shadow-2xs border border-[#121212]/10">
              V
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold tracking-tight text-zinc-950 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                Veer Singh Lodhi
              </span>
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 tracking-wider">
                Java Full-Stack &middot; AI/ML
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/80"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-mono text-zinc-800 dark:text-zinc-200 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D7F36A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4D7C0F] dark:bg-[#84cc16]"></span>
              </span>
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Available for roles</span>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Resume Button */}
            <a
              href={portfolio.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-xs active:scale-98"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400 dark:text-zinc-600" />
            </a>
          </div>

          {/* Mobile Menu Toggle & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <a
              href={portfolio.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 rounded-lg bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-semibold"
            >
              <span>CV</span>
              <ArrowUpRight className="w-3 h-3 ml-1" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">&rarr;</span>
              </a>
            ))}
            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-3">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Status</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200">
                <span className="h-2 w-2 rounded-full bg-[#D7F36A] border border-[#121212]/20"></span>
                Open to engineering roles
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
