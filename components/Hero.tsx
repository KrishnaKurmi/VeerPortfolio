"use client";

import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { ArrowDown, ArrowUpRight, Award, MapPin, Sparkles, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Reduced motion check
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Hero scale & opacity on scroll
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = Math.max(0.8, 1 - progress * 0.2);
            const opacity = Math.max(0.3, 1 - progress * 0.7);
            gsap.set(heroRef.current, { scale, opacity });
          },
        },
      });

      // Stagger card animations
      gsap.utils.toArray(".hero-card").forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 0.5,
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const titleLineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-[90vh] flex flex-col justify-between pt-6 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-opacity"
    >
      {/* Top Meta Bar */}
      <motion.div
        className="flex flex-wrap items-center justify-between gap-3 pt-2 border-b border-zinc-200/80 dark:border-zinc-800 pb-4 text-xs font-mono text-zinc-500 dark:text-zinc-400"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300" />
          <span>Sagar, Madhya Pradesh, India</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-semibold border border-amber-200/90 dark:border-amber-800/60 text-[11px] shadow-2xs">
            <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            1st Prize &middot; Code Rush Winner
          </span>
          <span className="hidden sm:inline-block text-zinc-400 dark:text-zinc-500">B.Tech AI/ML &apos;27</span>
        </div>
      </motion.div>

      {/* Main Hero Stage */}
      <motion.div
        className="py-14 md:py-20 lg:py-24 flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Role Kicker */}
        <motion.div
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-mono font-medium w-fit mb-6 shadow-2xs"
          variants={itemVariants}
        >
          <Terminal className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Java Full-Stack Architect &middot; AI/ML Technologist</span>
        </motion.div>

        {/* Editorial Headline with Serif Accent - Line by line animation */}
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.96] text-zinc-950 dark:text-zinc-100 mb-7 overflow-hidden">
          <motion.div variants={titleLineVariants} initial="hidden" animate="visible">
            Veer Singh
          </motion.div>
          <motion.div
            variants={titleLineVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <span className="font-serif italic font-normal tracking-normal text-zinc-800 dark:text-zinc-300">
              Lodhi.
            </span>
          </motion.div>
        </h1>

        {/* Narrative Tagline */}
        <motion.p
          className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed mb-9"
          variants={itemVariants}
        >
          Engineering reliable enterprise systems with{" "}
          <strong className="text-zinc-950 dark:text-zinc-100 font-semibold">Java</strong>,{" "}
          <strong className="text-zinc-950 dark:text-zinc-100 font-semibold">Spring Boot</strong>, and reactive{" "}
          <strong className="text-zinc-950 dark:text-zinc-100 font-semibold">React</strong> interfaces — bridging scalable microservices with modern Generative AI.
        </motion.p>

        {/* Action Row */}
        <motion.div
          className="flex flex-wrap items-center gap-3 sm:gap-4"
          variants={containerVariants}
        >
          <motion.a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm active:scale-98 group cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -2, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)" }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore Work</span>
            <motion.div
              whileHover={{ y: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowDown className="w-4 h-4 text-white dark:text-zinc-950" />
            </motion.div>
          </motion.a>

          <motion.a
            href={portfolio.personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-semibold text-sm hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-2xs active:scale-98 cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View Resume</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
          </motion.a>

          <motion.div
            className="flex items-center gap-2 pl-1 sm:pl-2"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Link
                href={portfolio.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-2xs inline-flex cursor-pointer"
                aria-label="GitHub Profile"
              >
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                  <GithubIcon className="w-4 h-4" />
                </motion.div>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                href={portfolio.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-2xs inline-flex cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.95 }}>
                  <LinkedinIcon className="w-4 h-4" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Technical Bento Strip */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-zinc-200/80 dark:border-zinc-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          {
            num: "01",
            title: "Architecture",
            subtitle: "Backend Systems & Microservices",
            desc: "Spring Boot 3, Spring Security, JWT, PostgreSQL, MySQL, and Docker fundamentals.",
          },
          {
            num: "02",
            title: "Current Role",
            subtitle: "Software Developer Intern",
            desc: "Xansa IT Solutions · Delivering core backend APIs across 4 production projects.",
          },
          {
            num: "03",
            title: "Active Research",
            subtitle: "RAG & Autonomous Agents",
            desc: "Semantic vector embeddings, Hugging Face Transformers, and tool-calling agent loops.",
            hasIcon: true,
          },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            className="hero-card p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] dark:shadow-[0_1px_3px_0_rgba(0,0,0,0.4)] hover:border-zinc-400 dark:hover:border-zinc-700 transition-all"
            variants={itemVariants}
            whileHover={{
              y: -4,
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="text-[11px] font-mono font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              {card.hasIcon && <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />}
              <span>{card.num} · {card.title === "Active Research" ? "Active Research" : card.title}</span>
            </div>
            <div className="font-display font-bold text-sm text-zinc-950 dark:text-zinc-100 mb-1">
              {card.subtitle}
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
