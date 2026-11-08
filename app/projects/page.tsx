import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectGrid from "@/components/ProjectGrid";
import { portfolio } from "@/data/portfolio";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  const allProjects = [...portfolio.featured_projects, ...portfolio.secondary_projects];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <div className="text-xs font-mono font-semibold text-[#D7F36A] uppercase tracking-widest mb-2">
            COMPLETE ARCHIVE
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[var(--text-primary)] tracking-tight mb-4">
            All Projects &amp; Software
          </h1>

          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
            A comprehensive catalog of enterprise backend services, web applications, desktop systems, and distributed platforms engineered by Veer Singh Lodhi.
          </p>
        </div>

        <ProjectGrid projects={allProjects} />
      </section>

      <Footer />
    </div>
  );
}
