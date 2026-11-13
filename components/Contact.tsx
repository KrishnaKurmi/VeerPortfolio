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
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <div className="inline-block px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-[11px] font-bold tracking-wider uppercase mb-3">
            06 // COLLABORATION &amp; ROLES
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-zinc-950 dark:text-zinc-100 tracking-hero">
            Let&apos;s Build Something Enduring.
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-xs sm:text-right">
          AVAILABLE FOR FULL-TIME ROLES &amp; CONTRACTS
        </p>
      </div>

      {/* Main Email Hero Card */}
      <div className="p-8 sm:p-12 md:p-16 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md mb-10 shadow-[0_20px_70px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_70px_rgba(0,0,0,0.4)] relative overflow-hidden group">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200/80 dark:border-zinc-700 bg-[#F9F9F6] dark:bg-zinc-800 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D7F36A] border border-[#121212]/30 dark:border-zinc-950/40 animate-pulse"></span>
            <span>Direct Channel &middot; Replies within 24 hours</span>
          </div>

          <h3 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3">
            Primary Inquiries
          </h3>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <a
              href={`mailto:${portfolio.personal.email}`}
              className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-zinc-950 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors tracking-tight underline decoration-1 underline-offset-8"
            >
              {portfolio.personal.email}
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-700 bg-[#F9F9F6] dark:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-white dark:hover:bg-zinc-700 text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200 transition-all cursor-pointer self-start sm:self-auto active:scale-95"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-zinc-950 dark:text-zinc-100">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-200/80 dark:border-zinc-800">
            <a
              href={`mailto:${portfolio.personal.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:-translate-y-0.5 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.12)] active:scale-95 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Send Message</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 dark:text-zinc-600" />
            </a>

            <a
              href={portfolio.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm font-semibold hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:-translate-y-0.5 transition-all active:scale-95 shadow-2xs cursor-pointer"
            >
              <FileText className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              <span>Download Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
            </a>
          </div>
        </div>
      </div>

      {/* 3 Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
          <div className="flex items-center gap-2 mb-4 text-zinc-950 dark:text-zinc-100">
            <Phone className="w-4 h-4 text-zinc-900 dark:text-zinc-200" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-950 dark:text-zinc-100">
              Direct Contact
            </span>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">Phone / WhatsApp</div>
              <div className="font-semibold text-zinc-950 dark:text-zinc-200">{portfolio.personal.phone}</div>
            </div>

            <div>
              <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">Location</div>
              <div className="flex items-center gap-1.5 text-zinc-950 dark:text-zinc-200">
                <MapPin className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300" />
                <span>{portfolio.personal.location}</span>
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">Timezone</div>
              <div className="text-zinc-950 dark:text-zinc-200 font-mono text-xs">IST (UTC +5:30)</div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
          <div className="flex items-center gap-2 mb-4 text-zinc-950 dark:text-zinc-100">
            <Sparkles className="w-4 h-4 text-zinc-900 dark:text-amber-400" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-950 dark:text-zinc-100">
              Online Profiles
            </span>
          </div>

          <div className="space-y-3">
            <Link
              href={portfolio.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-700 bg-[#F9F9F6] dark:bg-zinc-800 hover:bg-white dark:hover:bg-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all group"
            >
              <div className="flex items-center gap-2.5 text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200">
                <GithubIcon className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
                <span>GitHub &middot; @VeerSinghLodhi</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href={portfolio.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-700 bg-[#F9F9F6] dark:bg-zinc-800 hover:bg-white dark:hover:bg-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all group"
            >
              <div className="flex items-center gap-2.5 text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200">
                <LinkedinIcon className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
                <span>LinkedIn &middot; Veer Singh Lodhi</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
          <div className="flex items-center gap-2 mb-4 text-zinc-950 dark:text-zinc-100">
            <Check className="w-4 h-4 text-zinc-900 dark:text-emerald-400" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-950 dark:text-zinc-100">
              Scope of Interest
            </span>
          </div>

          <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-zinc-950 dark:text-zinc-200 font-bold">•</span>
              <span className="text-zinc-700 dark:text-zinc-300">Java / Spring Boot Backend Roles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-950 dark:text-zinc-200 font-bold">•</span>
              <span className="text-zinc-700 dark:text-zinc-300">Full-Stack Development (React + Spring)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-950 dark:text-zinc-200 font-bold">•</span>
              <span className="text-zinc-700 dark:text-zinc-300">Generative AI / RAG &amp; Agent Workflows</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-950 dark:text-zinc-200 font-bold">•</span>
              <span className="text-zinc-700 dark:text-zinc-300">Software Engineering Internships</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
