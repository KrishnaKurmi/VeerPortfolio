"use client";

import React, {
  createContext,
  useContext,
  useEffect,
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
}

const InkTransitionContext = createContext<InkTransitionContextType>({
  triggerTransition: () => {},
  isTransitioning: false,
});

const FRAME_PROPORTION = 1.78; // 640 / 360 aspect ratio of 1 frame
const TOTAL_FRAMES = 25;

export function InkTransitionProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [phase, setPhase] = useState<"idle" | "opening" | "closing">("idle");
  const [toLight, setToLight] = useState(false);

  const layerRef = useRef<HTMLDivElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout[]>([]);

  // Calculate dimensions so that 1 frame always covers the screen regardless of viewport ratio
  const setLayerDimensions = useCallback(() => {
    if (!bgLayerRef.current) return;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    let layerHeight: number;
    let layerWidth: number;

    // Add 15% buffer to guarantee complete viewport coverage on all aspect ratios
    if (windowWidth / windowHeight > FRAME_PROPORTION) {
      layerWidth = windowWidth * 1.15;
      layerHeight = layerWidth / FRAME_PROPORTION;
    } else {
      layerHeight = windowHeight * 1.15;
      layerWidth = layerHeight * FRAME_PROPORTION;
    }

    bgLayerRef.current.style.width = `${Math.ceil(layerWidth * TOTAL_FRAMES)}px`;
    bgLayerRef.current.style.height = `${Math.ceil(layerHeight)}px`;
  }, []);

  useEffect(() => {
    setLayerDimensions();
    window.addEventListener("resize", setLayerDimensions);
    return () => {
      window.removeEventListener("resize", setLayerDimensions);
      timeoutRef.current.forEach(clearTimeout);
    };
  }, [setLayerDimensions]);

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

      // Clear any pending timeouts
      timeoutRef.current.forEach(clearTimeout);
      timeoutRef.current = [];

      setLayerDimensions();
      setIsTransitioning(true);
      setToLight(Boolean(options?.toLight));
      setPhase("opening");

      // Peak coverage is reached near the end of the opening animation (~700ms)
      const peakTimer = setTimeout(() => {
        options?.onPeak?.();
        setPhase("closing");

        // Closing animation duration (~720ms)
        const closeTimer = setTimeout(() => {
          setPhase("idle");
          setIsTransitioning(false);
        }, 720);

        timeoutRef.current.push(closeTimer);
      }, 700);

      timeoutRef.current.push(peakTimer);
    },
    [isTransitioning, setLayerDimensions]
  );

  return (
    <InkTransitionContext.Provider value={{ triggerTransition, isTransitioning }}>
      {children}

      {/* CodyHouse Ink Transition Overlay Layer */}
      <div
        ref={layerRef}
        aria-hidden="true"
        className={`cd-transition-layer ${
          phase !== "idle" ? "visible" : ""
        } ${phase === "opening" ? "opening" : ""} ${
          phase === "closing" ? "closing" : ""
        } ${toLight ? "to-light" : ""}`}
      >
        <div ref={bgLayerRef} className="bg-layer" />
      </div>
    </InkTransitionContext.Provider>
  );
}

export function useInkTransition() {
  return useContext(InkTransitionContext);
}

