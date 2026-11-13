"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { InkTransitionProvider } from "@/context/InkTransitionContext";
import BackgroundInk from "@/components/BackgroundInk";
import SmoothScroll from "@/components/SmoothScroll";
import { ReactNode } from "react";

export default function RootLayoutClient({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <InkTransitionProvider>
        <BackgroundInk />
        <SmoothScroll>
          <main className="relative z-10 flex flex-col w-full min-h-screen">
            {children}
          </main>
        </SmoothScroll>
      </InkTransitionProvider>
    </ThemeProvider>
  );
}
