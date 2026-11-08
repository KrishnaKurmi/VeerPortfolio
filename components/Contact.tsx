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
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E8E9E5]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <div className="inline-block px-2.5 py-1 rounded bg-[#D7F36A] text-[#121212] font-mono text-[11px] font-bold tracking-wider uppercase mb-3">
            06 // COLLABORATION &amp; ROLES
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#121212] tracking-hero">
            Let&apos;s Build Something Enduring.
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-[#73766F] max-w-xs sm:text-right">
          AVAILABLE FOR FULL-TIME ROLES &amp; CONTRACTS
        </p>
      </div>

      {/* Main Email Hero Card */}
      <div className="p-8 sm:p-12 md:p-16 rounded-3xl border border-[#E8E9E5] bg-white mb-10 shadow-[0_20px_70px_rgba(29,37,18,0.05)] relative overflow-hidden group">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E8E9E5] bg-[#F9F9F6] text-xs font-mono text-[#73766F] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D7F36A] border border-[#121212]/30 animate-pulse"></span>
            <span>Direct Channel &middot; Replies within 24 hours</span>
          </div>

          <h3 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#73766F] mb-3">
            Primary Inquiries
          </h3>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <a
              href={`mailto:${portfolio.personal.email}`}
              className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#121212] hover:text-[#3B4330] transition-colors tracking-tight underline decoration-1 underline-offset-8"
            >
              {portfolio.personal.email}
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E8E9E5] bg-[#F9F9F6] hover:border-[#121212] hover:bg-white text-xs font-mono font-semibold text-[#121212] transition-all cursor-pointer self-start sm:self-auto active:scale-95"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#3B4330]" />
                  <span className="text-[#121212]">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E8E9E5]">
            <a
              href={`mailto:${portfolio.personal.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#121212] text-white text-sm font-semibold hover:bg-[#3B4330] hover:-translate-y-0.5 transition-all shadow-[0_10px_30px_rgba(18,18,18,0.12)] active:scale-95 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Send Message</span>
              <ArrowUpRight className="w-4 h-4 text-[#E8E9E5]" />
            </a>

            <a
              href={portfolio.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[#E8E9E5] bg-white text-[#121212] text-sm font-semibold hover:border-[#73766F] hover:bg-[#F9F9F6] hover:-translate-y-0.5 transition-all active:scale-95 shadow-2xs"
            >
              <FileText className="w-4 h-4 text-[#73766F]" />
              <span>Download Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#73766F]" />
            </a>
          </div>
        </div>
      </div>

      {/* 3 Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border border-[#E8E9E5] bg-white shadow-[0_4px_20px_rgba(29,37,18,0.03)] hover:border-[#121212] transition-colors">
          <div className="flex items-center gap-2 mb-4 text-[#121212]">
            <Phone className="w-4 h-4" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212]">
              Direct Contact
            </span>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <div className="text-[11px] font-mono text-[#73766F]">Phone / WhatsApp</div>
              <div className="font-semibold text-[#121212]">{portfolio.personal.phone}</div>
            </div>

            <div>
              <div className="text-[11px] font-mono text-[#73766F]">Location</div>
              <div className="flex items-center gap-1.5 text-[#121212]">
                <MapPin className="w-3.5 h-3.5 text-[#121212]" />
                <span>{portfolio.personal.location}</span>
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono text-[#73766F]">Timezone</div>
              <div className="text-[#121212] font-mono text-xs">IST (UTC +5:30)</div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-[#E8E9E5] bg-white shadow-[0_4px_20px_rgba(29,37,18,0.03)] hover:border-[#121212] transition-colors">
          <div className="flex items-center gap-2 mb-4 text-[#121212]">
            <Sparkles className="w-4 h-4" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212]">
              Online Profiles
            </span>
          </div>

          <div className="space-y-3">
            <Link
              href={portfolio.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl border border-[#E8E9E5] bg-[#F9F9F6] hover:bg-white hover:border-[#121212] transition-all group"
            >
              <div className="flex items-center gap-2.5 text-xs font-mono font-semibold text-[#121212]">
                <GithubIcon className="w-4 h-4 text-[#121212]" />
                <span>GitHub &middot; @VeerSinghLodhi</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#73766F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href={portfolio.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl border border-[#E8E9E5] bg-[#F9F9F6] hover:bg-white hover:border-[#121212] transition-all group"
            >
              <div className="flex items-center gap-2.5 text-xs font-mono font-semibold text-[#121212]">
                <LinkedinIcon className="w-4 h-4 text-[#121212]" />
                <span>LinkedIn &middot; Veer Singh Lodhi</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#73766F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-[#E8E9E5] bg-white shadow-[0_4px_20px_rgba(29,37,18,0.03)] hover:border-[#121212] transition-colors">
          <div className="flex items-center gap-2 mb-4 text-[#121212]">
            <Check className="w-4 h-4" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212]">
              Scope of Interest
            </span>
          </div>

          <ul className="space-y-2 text-xs text-[#73766F]">
            <li className="flex items-start gap-2">
              <span className="text-[#121212] font-bold">•</span>
              <span className="text-[#42463F]">Java / Spring Boot Backend Roles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#121212] font-bold">•</span>
              <span className="text-[#42463F]">Full-Stack Development (React + Spring)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#121212] font-bold">•</span>
              <span className="text-[#42463F]">Generative AI / RAG &amp; Agent Workflows</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#121212] font-bold">•</span>
              <span className="text-[#42463F]">Software Engineering Internships</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
