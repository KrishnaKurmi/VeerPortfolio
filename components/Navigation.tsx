"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";

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
    { name: "Work", href: "#work", index: "01" },
    { name: "About", href: "#about", index: "02" },
    { name: "Stack", href: "#stack", index: "03" },
    { name: "Experience", href: "#experience", index: "04" },
    { name: "Contact", href: "#contact", index: "05" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] py-3 shadow-xs"
          : "bg-[var(--bg-primary)]/60 backdrop-blur-xs border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-current no-underline focus-visible:outline-hidden"
          >
            <div className="w-8 h-8 rounded-md bg-[#121212] dark:bg-white text-white dark:text-[#121212] flex items-center justify-center font-mono font-bold text-sm tracking-wider transition-transform group-hover:scale-105 border border-[#D7F36A]/40">
              V
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[#3b82f6] transition-colors">
                VEER SINGH LODHI
              </span>
              <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider">
                JAVA FULL-STACK &middot; AI/ML
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative px-3 py-1.5 text-xs lg:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors rounded-md hover:bg-black/5 dark:hover:bg-white/5"
              >
                <span className="text-[10px] font-mono text-[#D7F36A] dark:text-[#D7F36A] mr-1 opacity-70 group-hover:opacity-100">
                  {link.index}
                </span>
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[11px] font-mono text-[var(--text-muted)] shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
              </span>
              <span className="font-medium text-[var(--text-primary)]">Open to work</span>
            </div>

            {/* Resume Button */}
            <a
              href={portfolio.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#121212] dark:bg-white text-white dark:text-[#121212] text-xs font-semibold hover:bg-[#3B4330] dark:hover:bg-[#E8E9E5] transition-all duration-200 shadow-2xs active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-[#D7F36A] dark:text-[#121212]" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={portfolio.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-2.5 py-1.5 rounded-md bg-[#121212] dark:bg-white text-white dark:text-[#121212] text-xs font-semibold"
            >
              <span>CV</span>
              <ArrowUpRight className="w-3 h-3 ml-1" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus-visible:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-[var(--border-subtle)] space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  {link.index}
                </span>
              </a>
            ))}
            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between px-3">
              <span className="text-xs font-mono text-[var(--text-muted)]">Status</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                Available for internships & roles
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
