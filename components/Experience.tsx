"use client";

import { portfolio, ExperienceEntry } from "@/data/portfolio";
import { Briefcase, Building2, Calendar, CheckCircle, Code } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border-subtle)]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <div className="text-xs font-mono font-semibold text-[#D7F36A] dark:text-[#D7F36A] uppercase tracking-widest mb-2">
            05 // INDUSTRY TRAJECTORY
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] tracking-tight">
            Work Experience
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-[var(--text-muted)] max-w-xs sm:text-right">
          ENTERPRISE SOFTWARE DELIVERY &middot; BACKEND APIS
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {portfolio.experience.map((exp: ExperienceEntry, idx: number) => (
          <div
            key={idx}
            className="p-6 sm:p-10 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xs relative overflow-hidden"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
                  <Building2 className="w-5 h-5 text-[#D7F36A]" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-[var(--text-primary)]">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#3b82f6] dark:text-blue-400 font-semibold mt-0.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.role}</span>
                  </div>
                </div>
              </div>

              {/* Status & Period */}
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>CURRENT ENGAGEMENT</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>
            </div>

            {/* Description & Core Impact */}
            <div className="space-y-4 mb-8">
              <p className="text-base text-[var(--text-primary)] leading-relaxed">
                {exp.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-[var(--text-muted)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Architected modular REST APIs in Spring Boot powering product discovery, orders, and authentication.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Integrated Spring Security and JWT token lifecycles with role-based access for multi-tier user workflows.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Delivered backend logic across 4 team projects: Samvaad, HotOrNot, Health Saathi, and Jaldi Store.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Managed schema design and query execution across relational (MySQL, PostgreSQL) and document (MongoDB) databases.
                  </span>
                </div>
              </div>
            </div>

            {/* Technologies used */}
            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[var(--text-muted)] mr-2 flex items-center gap-1">
                <Code className="w-3.5 h-3.5" />
                <span>Ecosystem:</span>
              </span>
              {[
                "Java",
                "Spring Boot",
                "Spring Security",
                "REST APIs",
                "Microservices",
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "JWT",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-xs font-mono text-[var(--text-primary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
