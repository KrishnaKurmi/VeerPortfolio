"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useInkTransition } from "@/context/InkTransitionContext";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { triggerTransition, isTransitioning } = useInkTransition();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    if (isTransitioning) return;

    // Trigger authentic CodyHouse ink transition
    triggerTransition({
      toLight: theme === "dark", // If currently dark, ink is inverted to light
      onPeak: () => {
        toggleTheme();
      },
    });
  };

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={handleToggle}
      disabled={isTransitioning}
      aria-label="Toggle theme"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode (Ink transition)`}
      className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:outline-hidden cursor-pointer disabled:opacity-60"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-zinc-800" />
      ) : (
        <Sun className="w-4 h-4 text-amber-400" />
      )}
    </button>
  );
}
