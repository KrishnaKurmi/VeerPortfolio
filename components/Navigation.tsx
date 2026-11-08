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
          ? "bg-[#F9F9F6]/90 backdrop-blur-md border-b border-[#E8E9E5] py-3.5 shadow-[0_4px_20px_rgba(29,37,18,0.03)]"
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
              <span className="font-display text-sm font-bold tracking-tight text-[#121212] group-hover:text-[#3B4330] transition-colors">
                Veer Singh Lodhi
              </span>
              <span className="text-[11px] font-mono text-[#73766F] tracking-wider">
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
                className="px-3.5 py-1.5 text-sm font-medium text-[#73766F] hover:text-[#121212] transition-colors rounded-lg hover:bg-[#E8E9E5]/60"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E9E5] bg-white text-xs font-mono text-[#121212] shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D7F36A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4D7C0F]"></span>
              </span>
              <span className="font-medium text-[#42463F]">Available for roles</span>
            </div>

            {/* Resume Button */}
            <a
              href={portfolio.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#121212] text-white text-xs font-semibold hover:bg-[#3B4330] transition-all shadow-xs active:scale-98"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-[#E8E9E5]" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={portfolio.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#121212] text-white text-xs font-semibold"
            >
              <span>CV</span>
              <ArrowUpRight className="w-3 h-3 ml-1" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg border border-[#E8E9E5] text-[#121212] hover:bg-white transition-colors focus-visible:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border border-[#E8E9E5] bg-white rounded-2xl p-4 shadow-xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg text-[#121212] hover:bg-[#F9F9F6] transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#73766F]">&rarr;</span>
              </a>
            ))}
            <div className="pt-2 border-t border-[#E8E9E5] flex items-center justify-between px-3">
              <span className="text-xs font-mono text-[#73766F]">Status</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#121212]">
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
