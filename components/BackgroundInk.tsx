"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { useInkTransition } from "@/context/InkTransitionContext";
import { useTheme } from "@/context/ThemeContext";

const FRAME_PROPORTION = 1.78; // 640 / 360 aspect ratio
const TOTAL_FRAMES = 25;

export default function BackgroundInk() {
  const { isTransitioning, phase, toLight } = useInkTransition();
  const { theme } = useTheme();
  const bgLayerRef = useRef<HTMLDivElement>(null);

  // Responsive dimension calculation for CodyHouse sprite layer
  const setLayerDimensions = useCallback(() => {
    if (!bgLayerRef.current) return;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    let layerHeight: number;
    let layerWidth: number;

    if (windowWidth / windowHeight > FRAME_PROPORTION) {
      layerWidth = windowWidth * 1.3;
      layerHeight = layerWidth / FRAME_PROPORTION;
    } else {
      layerHeight = windowHeight * 1.3;
      layerWidth = layerHeight * FRAME_PROPORTION;
    }

    bgLayerRef.current.style.width = `${Math.ceil(layerWidth * TOTAL_FRAMES)}px`;
    bgLayerRef.current.style.height = `${Math.ceil(layerHeight)}px`;
  }, []);

  useEffect(() => {
    setLayerDimensions();
    window.addEventListener("resize", setLayerDimensions);
    return () => window.removeEventListener("resize", setLayerDimensions);
  }, [setLayerDimensions]);

  // Recalculate whenever transition starts
  useEffect(() => {
    if (isTransitioning) {
      setLayerDimensions();
    }
  }, [isTransitioning, setLayerDimensions]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#C0D0BB] dark:bg-[#3F2F44] transition-colors duration-700"
    >
      {/* 1. Tactical Fine Micro-Grain for Tactile Physical Depth */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] dark:opacity-[0.045] mix-blend-overlay pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="ink-paper-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#ink-paper-noise)" />
      </svg>

      {/* 2. Soft, Seamless Organic Ink Smoke & Dispersion Clouds */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Top-Left Soft Ink Smoke Wisp */}
        <div
          className={`absolute -top-24 -left-20 w-[550px] h-[480px] rounded-full blur-[85px] transition-all duration-700 pointer-events-none ${
            theme === "dark"
              ? "bg-white/[0.04] mix-blend-screen"
              : "bg-[#1f291e]/[0.06] mix-blend-multiply"
          }`}
        />

        {/* Top-Right Deep Ink Depth Pool */}
        <div
          className={`absolute -top-16 -right-16 w-[700px] h-[600px] rounded-full blur-[110px] transition-all duration-700 pointer-events-none ${
            theme === "dark"
              ? "bg-[#251b29]/70 mix-blend-multiply"
              : "bg-[#182317]/[0.055] mix-blend-multiply"
          }`}
        />

        {/* Mid-Right Subtle Ink Bloom */}
        <div
          className={`absolute top-1/3 -right-24 w-[550px] h-[550px] rounded-full blur-[100px] transition-all duration-700 pointer-events-none ${
            theme === "dark"
              ? "bg-white/[0.03] mix-blend-screen"
              : "bg-[#1f291e]/[0.05] mix-blend-multiply"
          }`}
        />

        {/* Bottom-Left Rich Ink Shadow */}
        <div
          className={`absolute -bottom-24 -left-20 w-[650px] h-[550px] rounded-full blur-[110px] transition-all duration-700 pointer-events-none ${
            theme === "dark"
              ? "bg-[#2a1d2f]/60 mix-blend-multiply"
              : "bg-[#182317]/[0.055] mix-blend-multiply"
          }`}
        />

        {/* Subtle Radial Vignette for Editorial Depth */}
        <div
          className={`absolute inset-0 w-full h-full transition-all duration-700 pointer-events-none ${
            theme === "dark"
              ? "bg-[radial-gradient(ellipse_at_top,_transparent_50%,_rgba(26,18,29,0.45)_100%)]"
              : "bg-[radial-gradient(ellipse_at_top,_transparent_55%,_rgba(25,35,23,0.06)_100%)]"
          }`}
        />
      </div>

      {/* 3. Authentic CodyHouse Animated Ink Transition Layer */}
      <div
        className={`cd-bg-transition-layer ${
          phase !== "idle" ? "visible" : ""
        } ${phase === "opening" ? "opening" : ""} ${
          phase === "closing" ? "closing" : ""
        } ${toLight ? "to-light" : ""}`}
      >
        <div ref={bgLayerRef} className="bg-layer" />
      </div>
    </div>
  );
}
