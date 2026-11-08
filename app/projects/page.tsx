import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectGrid from "@/components/ProjectGrid";
import { portfolio } from "@/data/portfolio";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  const allProjects = [...portfolio.featured_projects, ...portfolio.secondary_projects];

  return (
    <div className="min-h-screen bg-[#F9F9F6] text-[#121212]">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#73766F] hover:text-[#121212] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <div>
            <div className="inline-block px-2.5 py-1 rounded bg-[#D7F36A] text-[#121212] font-mono text-[11px] font-bold tracking-wider uppercase mb-3">
              COMPLETE ARCHIVE
            </div>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#121212] tracking-hero mb-4">
            All Projects &amp; Software
          </h1>

          <p className="text-sm sm:text-base text-[#42463F] max-w-2xl leading-[1.8]">
            A comprehensive catalog of enterprise backend services, web applications, desktop systems, and distributed platforms engineered by Veer Singh Lodhi.
          </p>
        </div>

        <ProjectGrid projects={allProjects} />
      </section>

      <Footer />
    </div>
  );
}
