import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import RootLayoutClient from "@/components/RootLayoutClient";
import "./globals.css";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veer Singh Lodhi — Java Full-Stack Developer & AI/ML",
  description:
    "Portfolio of Veer Singh Lodhi: Java, Spring Boot, Microservices, React, and Generative AI engineer based in Sagar, India.",
  keywords: [
    "Veer Singh Lodhi",
    "Java Developer",
    "Spring Boot",
    "Full-Stack Developer",
    "AI/ML",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Veer Singh Lodhi" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${serifFont.variable} ${sansFont.variable} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preload" href="/ink.png" as="image" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);if(t==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased selection:bg-amber-100 selection:text-amber-950 dark:selection:bg-amber-900/60 dark:selection:text-amber-200">
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
