import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
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
    >
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased selection:bg-amber-100 selection:text-amber-950">
        <SmoothScroll>
          <main className="relative flex flex-col w-full min-h-screen">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
