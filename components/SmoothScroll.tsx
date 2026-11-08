"use client";

import { useEffect, ReactNode } from "react";
import { initializeLenisAndGSAP } from "@/lib/gsap-setup";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const cleanup = initializeLenisAndGSAP();
    return () => {
      cleanup?.();
    };
  }, []);

  return <>{children}</>;
}

