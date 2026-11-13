"use client";

import { portfolio } from "@/data/portfolio";
import { Award, BookOpen, Cpu, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const leftColVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const rightColVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800"
    >
      {/* Header */}
      <motion.div
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div>
          <div className="inline-block px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-[11px] font-bold tracking-wider uppercase mb-3">
            02 // BACKGROUND &amp; PHILOSOPHY
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-zinc-950 dark:text-zinc-100 tracking-tight">
            Engineering for <span className="font-serif italic font-normal text-zinc-700 dark:text-zinc-300">reliability</span>. <br />
            Architecting for <span className="font-serif italic font-normal text-zinc-700 dark:text-zinc-300">scale</span>.
          </h2>
        </div>

        <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 sm:text-right max-w-xs">
          B.Tech AI/ML &middot; Spring Boot &middot; React
        </div>
      </motion.div>

      {/* Main Grid Content */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {/* Left Column (7 cols) */}
        <motion.div
          className="lg:col-span-7 space-y-6"
          variants={leftColVariants}
        >
          <motion.div
            className="p-8 sm:p-10 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            variants={cardVariants}
            whileHover={{
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3 className="font-display font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-100 mb-4">
              Hello, I&apos;m Veer Singh Lodhi.
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-[1.8] mb-5 font-normal">
              {portfolio.about.bio}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-[1.8]">
              {portfolio.about.background}
            </p>
          </motion.div>

          {/* Achievement Spotlight Card */}
          <motion.div
            className="p-7 sm:p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-[#F9F9F6]/90 dark:bg-zinc-900/90 backdrop-blur-md text-zinc-950 dark:text-zinc-100 shadow-2xs"
            variants={cardVariants}
            whileHover={{
              y: -4,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-zinc-950 dark:bg-zinc-800 text-[#D7F36A] flex-shrink-0 shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase font-bold">
                  Hackathon &amp; Contest Recognition
                </div>
                <div className="font-display font-bold text-lg sm:text-xl text-zinc-950 dark:text-zinc-100">
                  {portfolio.about.achievement}
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                  Demonstrated fast algorithmic problem solving, clean system design, and reliable software execution among collegiate engineering teams.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md flex items-start gap-4 shadow-2xs"
            variants={cardVariants}
            whileHover={{
              y: -4,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div className="p-3 rounded-xl bg-[#F9F9F6] dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 flex-shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase mb-1">
                B.Tech in Artificial Intelligence &amp; Machine Learning (2023 — 2027)
              </div>
              <div className="font-display font-bold text-sm sm:text-base text-zinc-950 dark:text-zinc-100">
                Babulal Tarabai Institute of Research and Technology (BTIRT)
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                Sironja, Sagar, Madhya Pradesh, India
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column (5 cols) */}
        <motion.div
          className="lg:col-span-5 space-y-6"
          variants={rightColVariants}
        >
          {/* Active Exploration Card */}
          <motion.div
            className="p-7 sm:p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            variants={cardVariants}
            whileHover={{
              y: -4,
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-zinc-900 dark:text-amber-400" />
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-zinc-950 dark:text-zinc-100">
                Generative AI &amp; R&amp;D
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
              Bridging classical enterprise backends with modern AI primitives to architect intelligent, autonomous agent workflows:
            </p>

            <div className="flex flex-wrap gap-2">
              {portfolio.about.exploring.map((item) => (
                <motion.span
                  key={item}
                  className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-[#F9F9F6] dark:bg-zinc-800 text-xs font-mono text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors cursor-default"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Engineering Tenets Card */}
          <motion.div
            className="p-7 sm:p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            variants={cardVariants}
            whileHover={{
              y: -4,
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-4 h-4 text-zinc-900 dark:text-emerald-400" />
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-zinc-950 dark:text-zinc-100">
                Core Engineering Tenets
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-950 dark:text-zinc-100 font-semibold">Clean Domain Layering:</strong> Strict separation of controllers, service orchestrators, and repository abstractions.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-950 dark:text-zinc-100 font-semibold">Resilient Security:</strong> Role-based access control (RBAC), signed JWT sessions, and input sanitization.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-950 dark:text-zinc-100 font-semibold">Pragmatic Full-Stack:</strong> Pairing Spring Boot microservices with reactive, accessible frontend components.
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
