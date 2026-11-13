"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { InkTransitionProvider } from "@/context/InkTransitionContext";
import SmoothScroll from "@/components/SmoothScroll";
import { ReactNode } from "react";

export default function RootLayoutClient({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <InkTransitionProvider>
        <SmoothScroll>
          <main className="relative flex flex-col w-full min-h-screen">
            {children}
          </main>
        </SmoothScroll>
      </InkTransitionProvider>
    </ThemeProvider>
  );
}
