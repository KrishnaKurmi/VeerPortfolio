"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Phone,
  FileText,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolio.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border-subtle)]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <div className="text-xs font-mono font-semibold text-[#D7F36A] dark:text-[#D7F36A] uppercase tracking-widest mb-2">
            06 // COLLABORATION &amp; ROLES
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] tracking-tight">
            Let&apos;s Build Something Enduring.
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-[var(--text-muted)] max-w-xs sm:text-right">
          AVAILABLE FOR FULL-TIME ROLES &amp; CONTRACTS
        </p>
      </div>

      {/* Main Email Hero Card */}
      <div className="p-8 sm:p-12 md:p-16 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] mb-10 shadow-xs relative overflow-hidden group">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-xs font-mono text-[var(--text-muted)] mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Direct Channel &middot; Replies within 24 hours</span>
          </div>

          <h3 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[var(--text-muted)] mb-3">
            Primary Inquiries
          </h3>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <a
              href={`mailto:${portfolio.personal.email}`}
              className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-[var(--text-primary)] hover:text-[#3b82f6] transition-colors tracking-tight underline decoration-1 underline-offset-8"
            >
              {portfolio.personal.email}
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] hover:border-[#D7F36A] hover:bg-[#D7F36A]/10 text-xs font-mono font-semibold text-[var(--text-primary)] transition-all cursor-pointer self-start sm:self-auto active:scale-95"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--border-subtle)]">
            <a
              href={`mailto:${portfolio.personal.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#121212] dark:bg-white text-white dark:text-[#121212] text-sm font-semibold hover:bg-[#3B4330] dark:hover:bg-[#E8E9E5] transition-all shadow-sm active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Send Message</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={portfolio.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] text-sm font-semibold hover:border-black dark:hover:border-white transition-all active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            </a>
          </div>
        </div>
      </div>

      {/* 3 Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Direct Contact */}
        <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
          <div className="flex items-center gap-2 mb-4 text-[#D7F36A]">
            <Phone className="w-4 h-4" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Direct Contact
            </span>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <div className="text-[11px] font-mono text-[var(--text-muted)]">Phone / WhatsApp</div>
              <div className="font-semibold text-[var(--text-primary)]">{portfolio.personal.phone}</div>
            </div>

            <div>
              <div className="text-[11px] font-mono text-[var(--text-muted)]">Location</div>
              <div className="flex items-center gap-1.5 text-[var(--text-primary)]">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                <span>{portfolio.personal.location}</span>
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono text-[var(--text-muted)]">Timezone</div>
              <div className="text-[var(--text-primary)] font-mono text-xs">IST (UTC +5:30)</div>
            </div>
          </div>
        </div>

        {/* Card 2: Professional Profiles */}
        <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
          <div className="flex items-center gap-2 mb-4 text-[#D7F36A]">
            <Sparkles className="w-4 h-4" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Online Profiles
            </span>
          </div>

          <div className="space-y-3">
            <Link
              href={portfolio.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] hover:border-black dark:hover:border-white transition-colors group"
            >
              <div className="flex items-center gap-2.5 text-xs font-mono font-semibold text-[var(--text-primary)]">
                <GithubIcon className="w-4 h-4" />
                <span>GitHub &middot; @VeerSinghLodhi</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href={portfolio.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] hover:border-black dark:hover:border-white transition-colors group"
            >
              <div className="flex items-center gap-2.5 text-xs font-mono font-semibold text-[var(--text-primary)]">
                <LinkedinIcon className="w-4 h-4 text-blue-600" />
                <span>LinkedIn &middot; Veer Singh Lodhi</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Card 3: Scope of Engagement */}
        <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
          <div className="flex items-center gap-2 mb-4 text-[#D7F36A]">
            <Check className="w-4 h-4" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Scope of Interest
            </span>
          </div>

          <ul className="space-y-2 text-xs text-[var(--text-muted)]">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span>Java / Spring Boot Backend Roles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span>Full-Stack Development (React + Spring)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span>Generative AI / RAG &amp; Agent Systems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span>Software Engineering Internships &amp; New Grad</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
