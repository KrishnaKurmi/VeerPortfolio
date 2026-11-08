"use client";

import { portfolio, ExperienceEntry } from "@/data/portfolio";
import { Briefcase, Building2, Calendar, CheckCircle, Code } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E8E9E5]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <div className="inline-block px-2.5 py-1 rounded bg-[#D7F36A] text-[#121212] font-mono text-[11px] font-bold tracking-wider uppercase mb-3">
            05 // INDUSTRY TRAJECTORY
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#121212] tracking-hero">
            Work Experience
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-[#73766F] max-w-xs sm:text-right">
          ENTERPRISE SOFTWARE DELIVERY &middot; BACKEND APIS
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {portfolio.experience.map((exp: ExperienceEntry, idx: number) => (
          <div
            key={idx}
            className="p-6 sm:p-10 rounded-2xl border border-[#E8E9E5] bg-white shadow-[0_4px_24px_rgba(29,37,18,0.03)] relative overflow-hidden"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#E8E9E5]">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-[#F9F9F6] border border-[#E8E9E5] text-[#121212]">
                  <Building2 className="w-5 h-5 text-[#121212]" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-[#121212]">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#73766F] font-semibold mt-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.role}</span>
                  </div>
                </div>
              </div>

              {/* Status & Period */}
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F9F9F6] text-[#121212] font-mono text-xs font-semibold border border-[#E8E9E5]">
                  <span className="w-2 h-2 rounded-full bg-[#D7F36A] border border-[#121212]/30 animate-pulse"></span>
                  <span>CURRENT ENGAGEMENT</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#73766F]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>
            </div>

            {/* Description & Core Impact */}
            <div className="space-y-4 mb-8">
              <p className="text-base text-[#42463F] leading-[1.8]">
                {exp.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm text-[#73766F]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#3B4330] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Architected modular REST APIs in Spring Boot powering product discovery, orders, and authentication.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#3B4330] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Integrated Spring Security and JWT token lifecycles with role-based access for multi-tier user workflows.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#3B4330] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Delivered backend logic across 4 team projects: Samvaad, HotOrNot, Health Saathi, and Jaldi Store.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#3B4330] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Managed schema design and query execution across relational (MySQL, PostgreSQL) and document (MongoDB) databases.
                  </span>
                </div>
              </div>
            </div>

            {/* Tech badges */}
            <div className="pt-4 border-t border-[#E8E9E5] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#73766F] mr-2 flex items-center gap-1">
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
                  className="px-2.5 py-1 rounded-md border border-[#E8E9E5] bg-[#F9F9F6] text-xs font-mono text-[#121212]"
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
