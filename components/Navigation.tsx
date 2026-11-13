"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { scrollToTarget } from "@/lib/gsap-setup";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const dropdownVariants: Variants = {
  closed: {
    opacity: 0,
    scale: 0.96,
    y: -8,
    transition: {
      duration: 0.18,
      ease: [0.32, 0.72, 0, 1],
    },
  },
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.035,
      delayChildren: 0.03,
    },
  },
};

const dropdownItemVariants: Variants = {
  closed: { opacity: 0, x: -6 },
  open: { opacity: 1, x: 0, transition: { duration: 0.18, ease: "easeOut" } },
};

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleOutsideClick = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleOutsideClick);
    return () => document.removeEventListener("pointerdown", handleOutsideClick);
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToTarget(href, -70);
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Capabilities", href: "#stack" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#c0d0bb]/90 dark:bg-[#3f2f44]/90 backdrop-blur-md border-b border-black/10 dark:border-white/10 py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors rounded-lg hover:bg-zinc-100/60 dark:hover:bg-white/10 cursor-pointer"
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
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen((prev) => !prev);
              }}
              className="p-2 rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 text-zinc-800 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-800 transition-colors focus-visible:outline-hidden cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <div className="pointer-events-none flex items-center justify-center">
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Fluid Spring Physics */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-dropdown-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={dropdownVariants}
              onClick={(e) => e.stopPropagation()}
              className="md:hidden absolute top-full left-4 right-4 mt-2 overflow-hidden border border-black/10 dark:border-white/10 bg-[#c0d0bb]/95 dark:bg-[#3f2f44]/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl space-y-2 origin-top z-50"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={dropdownItemVariants}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg text-zinc-800 dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer group"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500 group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </a>
                </motion.div>
              ))}
              <motion.div
                variants={dropdownItemVariants}
                className="pt-2 border-t border-black/5 dark:border-white/10 flex items-center justify-between px-3"
              >
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Status</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200">
                  <span className="h-2 w-2 rounded-full bg-[#D7F36A] border border-[#121212]/20"></span>
                  Open to engineering roles
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
