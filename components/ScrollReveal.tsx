"use client";

import { ReactNode, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  stagger?: boolean;
  className?: string;
}

/**
 * ScrollReveal component: animates children on scroll into view.
 * Supports staggered children with individual delays.
 */
export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  stagger = false,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const initial = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...initial }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, ...initial }
      }
      transition={{
        duration: 0.6,
        delay,
      }}
    >
      {stagger && Array.isArray(children) ? (
        <motion.div>
          {Array.isArray(children) &&
            children.map((child, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, ...initial }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, x: 0 }
                    : { opacity: 0, ...initial }
                }
                transition={{
                  duration: 0.6,
                  delay: delay + idx * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {child}
              </motion.div>
            ))}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}
