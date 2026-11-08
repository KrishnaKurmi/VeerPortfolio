export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone?: string;
  location?: string;
  github: string;
  linkedin: string;
  resume: string;
}

export interface AboutSection {
  bio: string;
  background: string;
  achievement: string;
  exploring: string[];
}

export interface SkillsByCategory {
  languages: string[];
  backend: string[];
  frontend: string[];
  databases: string[];
  ai_ml: string[];
  tools: string[];
}

export interface FeaturedProject {
  id: string;
  name: string;
  description: string;
  category: string;
  period: string;
  team: number;
  tech: string[];
  liveLink?: string;
  playStoreLink?: string;
  githubLink?: string;
  image?: string;
}

export interface SecondaryProject {
  id: string;
  name: string;
  description: string;
  category: string;
  period: string;
  team: number;
  tech: string[];
  githubLink: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export interface Portfolio {
  personal: PersonalInfo;
  about: AboutSection;
  skills: SkillsByCategory;
  featured_projects: FeaturedProject[];
  secondary_projects: SecondaryProject[];
  experience: ExperienceEntry[];
}

export const portfolio: Portfolio = {
  personal: {
    name: "Veer Singh Lodhi",
    title: "Java Full-Stack Developer",
    tagline: "Building reliable web experiences & exploring Generative AI.",
    email: "veerlodhi54@gmail.com",
    phone: "+91 9770225248",
    location: "Sagar, Madhya Pradesh, India",
    github: "https://github.com/VeerSinghLodhi",
    linkedin: "https://www.linkedin.com/in/veer-singh-lodhi/",
    resume: "https://github.com/VeerSinghLodhi/VeerSinghLodhi/blob/main/VeerResume.pdf",
  },
  about: {
    bio: "I build full-stack applications with Java, Spring Boot, React, and databases. I enjoy turning practical problems into useful, maintainable software.",
    background:
      "B.Tech student specializing in Machine Learning and Artificial Intelligence at Babulal Tarabai Institute of Research and Technology, Sironja, Sagar, MP (2023–2027). Hands-on experience developing Java and Spring Boot applications spanning backend APIs, database integration, authentication, and full-stack web development. Collaborated on diverse production-grade and team projects including a local kirana marketplace, healthcare apps, and role-based platforms.",
    achievement: "First Prize — Code Rush, college technology fest",
    exploring: [
      "Prompting techniques",
      "Hugging Face & Transformers",
      "Pipelines",
      "AI agents",
      "Retrieval-Augmented Generation (RAG)",
      "Vector embeddings",
      "Orchestration",
    ],
  },
  skills: {
    languages: ["Java", "Python", "C", "C++", "JavaScript"],
    backend: [
      "Spring Boot",
      "Microservices",
      "Spring Security",
      "REST APIs",
      "JDBC",
      "Thymeleaf",
      "Spring AI",
    ],
    frontend: ["React", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
    databases: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"],
    ai_ml: [
      "Prompt Engineering",
      "Hugging Face",
      "Transformers",
      "RAG",
      "Vector Embeddings",
      "AI Agents",
      "Pipelines",
      "Orchestration",
    ],
    tools: [
      "Git",
      "GitHub",
      "Postman",
      "DSA",
      "JWT",
      "Google OAuth",
      "WebSocket",
    ],
  },
  featured_projects: [
    {
      id: "jaldi-store",
      name: "Jaldi Store",
      description:
        "A grocery and kirana-focused marketplace connecting local merchants with customers through product discovery, ordering, and delivery workflows.",
      category: "Grocery / Kirana Marketplace",
      period: "June 2026 – Present",
      team: 3,
      tech: ["Java", "Spring Boot", "React", "Vite", "Tailwind CSS", "MongoDB", "Spring Security", "JWT", "REST APIs"],
      liveLink: "https://jaldistore.in",
    },
    {
      id: "health-saathi",
      name: "Health Saathi",
      description:
        "A healthcare project developed with a Spring Boot backend and a server-rendered web interface.",
      category: "Healthcare Application",
      period: "February 2026 – August 2026",
      team: 6,
      tech: ["Java", "Spring Boot", "MySQL", "Spring Security", "Thymeleaf", "JavaScript"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.healthsaathi.xits",
    },
    {
      id: "hot-or-not",
      name: "HotOrNot",
      description:
        "A web application built with Spring Boot, PostgreSQL, WebSocket, and Google OAuth authentication.",
      category: "Web Application",
      period: "January 2026 – July 2026",
      team: 6,
      tech: ["Java", "Spring Boot", "Thymeleaf", "Google OAuth", "Spring Security", "PostgreSQL", "WebSocket"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.hon.xits",
    },
    {
      id: "samvaad",
      name: "Samvaad",
      description:
        "A role-based platform with separate access tiers for students, faculty, and administrators, built with Spring Boot and PostgreSQL.",
      category: "Role-Based Web Platform",
      period: "September 2025 – January 2026",
      team: 4,
      tech: ["Java", "Spring Boot", "PostgreSQL", "Thymeleaf", "Spring Security", "JavaScript"],
      liveLink: "https://xansa.net",
    },
  ],
  secondary_projects: [
    {
      id: "sagar-naukri",
      name: "SagarNaukri.com",
      description:
        "A job-portal project built with Spring Boot, PostgreSQL, Thymeleaf, and WebSocket.",
      category: "Job Portal",
      period: "June 2025 – September 2025",
      team: 4,
      tech: ["Java", "Spring Boot", "PostgreSQL", "WebSocket", "Thymeleaf"],
      githubLink: "https://github.com/VeerSinghLodhi/SagarNaukri.com.git",
    },
    {
      id: "bank-management",
      name: "Bank Management System",
      description:
        "A Java desktop application using Swing for the user interface and Oracle for database operations.",
      category: "Desktop Application",
      period: "October 2024 – December 2025",
      team: 1,
      tech: ["Java", "Java Swing", "JDBC", "Oracle"],
      githubLink: "https://github.com/VeerSinghLodhi/BankManagementSystem.git",
    },
    {
      id: "shaadi",
      name: "Shaadi.com Java Project",
      description:
        "A Java Swing application backed by an Oracle database, developed as a collaborative team project.",
      category: "Desktop Application",
      period: "January 2025 – April 2025",
      team: 2,
      tech: ["Java", "Java Swing", "Oracle"],
      githubLink: "https://github.com/VeerSinghLodhi/Shaadi.com-java.git",
    },
    {
      id: "school-management",
      name: "School Management System",
      description: "A Java Swing desktop project using Oracle as its database.",
      category: "Desktop Application",
      period: "February 2025 – April 2025",
      team: 2,
      tech: ["Java", "Java Swing", "Oracle"],
      githubLink: "https://github.com/Shroti-blip/SchoolManagementSystem.git",
    },
    {
      id: "math-easy",
      name: "Mathematic Is Easy",
      description:
        "A standalone Java Swing application focused on mathematical learning and practice.",
      category: "Learning Application",
      period: "December 2024 – January 2025",
      team: 1,
      tech: ["Java", "Java Swing"],
      githubLink: "https://github.com/VeerSinghLodhi/Mathematical-Java.git",
    },
  ],
  experience: [
    {
      company: "Xansa IT Solutions",
      role: "Software Developer Intern",
      period: "September 2025 – Present",
      description:
        "Worked with Spring Boot on projects such as Samvaad, HotOrNot, Health Saathi, and Jaldi Store, contributing to backend development and software delivery.",
      tech: ["Java", "Spring Boot", "Backend Development"],
    },
  ],
};
