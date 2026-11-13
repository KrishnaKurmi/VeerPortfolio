"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface TransitionOptions {
  onPeak?: () => void;
  toLight?: boolean;
}

interface InkTransitionContextType {
  triggerTransition: (options?: TransitionOptions) => void;
  isTransitioning: boolean;
  phase: "idle" | "opening" | "closing";
  toLight: boolean;
}

const InkTransitionContext = createContext<InkTransitionContextType>({
  triggerTransition: () => {},
  isTransitioning: false,
  phase: "idle",
  toLight: false,
});

export function InkTransitionProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [phase, setPhase] = useState<"idle" | "opening" | "closing">("idle");
  const [toLight, setToLight] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout[]>([]);

  const triggerTransition = useCallback(
    (options?: TransitionOptions) => {
      if (isTransitioning) return;

      // Check prefers-reduced-motion
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        options?.onPeak?.();
        return;
      }

      // Clear any pending timers
      timeoutRef.current.forEach(clearTimeout);
      timeoutRef.current = [];

      setIsTransitioning(true);
      setToLight(Boolean(options?.toLight));
      setPhase("opening");

      // Peak coverage is reached near the end of opening animation (~700ms)
      const peakTimer = setTimeout(() => {
        options?.onPeak?.();
        setPhase("closing");

        // Closing phase settles smoothly (~720ms)
        const closeTimer = setTimeout(() => {
          setPhase("idle");
          setIsTransitioning(false);
        }, 720);

        timeoutRef.current.push(closeTimer);
      }, 700);

      timeoutRef.current.push(peakTimer);
    },
    [isTransitioning]
  );

  return (
    <InkTransitionContext.Provider
      value={{ triggerTransition, isTransitioning, phase, toLight }}
    >
      {children}
    </InkTransitionContext.Provider>
  );
}

export function useInkTransition() {
  return useContext(InkTransitionContext);
}
