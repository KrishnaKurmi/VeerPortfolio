import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
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
      className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-[#D7F36A] selection:text-[#121212]">
        <SmoothScroll>
          <main className="relative flex flex-col w-full min-h-screen">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
