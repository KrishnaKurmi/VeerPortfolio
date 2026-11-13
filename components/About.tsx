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
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E8E9E5]"
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
          <div className="inline-block px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 font-mono text-[11px] font-bold tracking-wider uppercase mb-3">
            02 // BACKGROUND &amp; PHILOSOPHY
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-zinc-950 tracking-tight">
            Engineering for <span className="font-serif italic font-normal text-zinc-700">reliability</span>. <br />
            Architecting for <span className="font-serif italic font-normal text-zinc-700">scale</span>.
          </h2>
        </div>

        <div className="text-xs font-mono text-[#73766F] sm:text-right max-w-xs">
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
            className="p-8 sm:p-10 rounded-2xl border border-[#E8E9E5] bg-white shadow-[0_4px_24px_rgba(29,37,18,0.03)]"
            variants={cardVariants}
            whileHover={{
              boxShadow: "0 12px 24px rgba(29, 37, 18, 0.06)",
            }}
          >
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#121212] mb-4">
              Hello, I&apos;m Veer Singh Lodhi.
            </h3>
            <p className="text-[#42463F] text-base sm:text-lg leading-[1.8] mb-5 font-normal">
              {portfolio.about.bio}
            </p>
            <p className="text-[#73766F] text-sm sm:text-base leading-[1.8]">
              {portfolio.about.background}
            </p>
          </motion.div>

          {/* Achievement Spotlight Card */}
          <motion.div
            className="p-7 sm:p-8 rounded-2xl border border-[#E8E9E5] bg-[#F9F9F6] text-[#121212] shadow-2xs"
            variants={cardVariants}
            whileHover={{
              y: -4,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#121212] text-[#D7F36A] flex-shrink-0 shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono tracking-widest text-[#73766F] uppercase font-bold">
                  Hackathon &amp; Contest Recognition
                </div>
                <div className="font-display font-bold text-lg sm:text-xl text-[#121212]">
                  {portfolio.about.achievement}
                </div>
                <p className="text-xs sm:text-sm text-[#73766F] leading-relaxed pt-1">
                  Demonstrated fast algorithmic problem solving, clean system design, and reliable software execution among collegiate engineering teams.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            className="p-6 rounded-2xl border border-[#E8E9E5] bg-white flex items-start gap-4 shadow-2xs"
            variants={cardVariants}
            whileHover={{
              y: -4,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="p-3 rounded-xl bg-[#F9F9F6] border border-[#E8E9E5] text-[#121212] flex-shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#73766F] uppercase mb-1">
                B.Tech in Artificial Intelligence &amp; Machine Learning (2023 — 2027)
              </div>
              <div className="font-display font-bold text-sm sm:text-base text-[#121212]">
                Babulal Tarabai Institute of Research and Technology (BTIRT)
              </div>
              <div className="text-xs sm:text-sm text-[#73766F] mt-0.5">
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
            className="p-7 sm:p-8 rounded-2xl border border-[#E8E9E5] bg-white shadow-[0_4px_24px_rgba(29,37,18,0.03)]"
            variants={cardVariants}
            whileHover={{
              y: -4,
              boxShadow: "0 12px 24px rgba(29, 37, 18, 0.06)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#121212]" />
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[#121212]">
                Generative AI &amp; R&amp;D
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#73766F] mb-5 leading-relaxed">
              Bridging classical enterprise backends with modern AI primitives to architect intelligent, autonomous agent workflows:
            </p>

            <div className="flex flex-wrap gap-2">
              {portfolio.about.exploring.map((item) => (
                <motion.span
                  key={item}
                  className="px-3 py-1.5 rounded-lg border border-[#E8E9E5] bg-[#F9F9F6] text-xs font-mono text-[#121212] hover:border-[#121212] transition-colors cursor-default"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Engineering Tenets Card */}
          <motion.div
            className="p-7 sm:p-8 rounded-2xl border border-[#E8E9E5] bg-white shadow-[0_4px_24px_rgba(29,37,18,0.03)]"
            variants={cardVariants}
            whileHover={{
              y: -4,
              boxShadow: "0 12px 24px rgba(29, 37, 18, 0.06)",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-4 h-4 text-[#121212]" />
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[#121212]">
                Core Engineering Tenets
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              {[
                { title: "Clean Domain Layering", desc: "Strict separation of controllers, service orchestrators, and repository abstractions." },
                { title: "Resilient Security", desc: "Role-based access control (RBAC), signed JWT sessions, and input sanitization." },
                { title: "Pragmatic Full-Stack", desc: "Pairing Spring Boot microservices with reactive, accessible frontend components." },
              ].map((tenet, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#3B4330] mt-0.5 flex-shrink-0" />
                  <span className="text-[#42463F] leading-relaxed">
                    <strong className="text-[#121212] font-semibold">{tenet.title}:</strong> {tenet.desc}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
