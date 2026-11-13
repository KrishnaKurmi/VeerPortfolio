"use client";

import { portfolio, ExperienceEntry } from "@/data/portfolio";
import { Briefcase, Building2, Calendar, CheckCircle, Code } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <div className="inline-block px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-[11px] font-bold tracking-wider uppercase mb-3">
            05 // INDUSTRY TRAJECTORY
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-zinc-950 dark:text-zinc-100 tracking-hero">
            Work Experience
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-xs sm:text-right">
          ENTERPRISE SOFTWARE DELIVERY &middot; BACKEND APIS
        </p>
      </div>

      {/* Experience Timeline */}
      <motion.div
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {portfolio.experience.map((exp: ExperienceEntry, idx: number) => (
          <motion.div
            key={idx}
            className="p-6 sm:p-10 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -4,
              boxShadow: "0 16px 36px rgba(0, 0, 0, 0.08)",
            }}
            transition={{
              duration: 0.6,
              delay: idx * 0.2,
            }}
            viewport={{ once: true }}
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-[#F9F9F6] dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200">
                  <Building2 className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-zinc-950 dark:text-zinc-100">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 font-semibold mt-1">
                    <Briefcase className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                    <span>{exp.role}</span>
                  </div>
                </div>
              </div>

              {/* Status & Period */}
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F9F9F6] dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-xs font-semibold border border-zinc-200/80 dark:border-zinc-700">
                  <span className="w-2 h-2 rounded-full bg-[#D7F36A] border border-[#121212]/30 dark:border-zinc-950/40 animate-pulse"></span>
                  <span>CURRENT ENGAGEMENT</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                  <span>{exp.period}</span>
                </div>
              </div>
            </div>

            {/* Description & Core Impact */}
            <div className="space-y-4 mb-8">
              <p className="text-base text-zinc-700 dark:text-zinc-300 leading-[1.8]">
                {exp.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Architected modular REST APIs in Spring Boot powering product discovery, orders, and authentication.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Integrated Spring Security and JWT token lifecycles with role-based access for multi-tier user workflows.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Delivered backend logic across 4 team projects: Samvaad, HotOrNot, Health Saathi, and Jaldi Store.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Managed schema design and query execution across relational (MySQL, PostgreSQL) and document (MongoDB) databases.
                  </span>
                </div>
              </div>
            </div>

            {/* Tech badges */}
            <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mr-2 flex items-center gap-1">
                <Code className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
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
                  className="px-2.5 py-1 rounded-md border border-zinc-200/80 dark:border-zinc-700 bg-[#F9F9F6] dark:bg-zinc-800 text-xs font-mono text-zinc-800 dark:text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
