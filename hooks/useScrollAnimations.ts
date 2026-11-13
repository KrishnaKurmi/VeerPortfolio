import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook to coordinate scroll-linked animations across the page.
 * Syncs hero shrink, nav reveal, and section title scaling.
 */
export function useScrollAnimations() {
  const heroRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current || !navRef.current) return;

    const ctx = gsap.context(() => {
      // Hero title shrink as you scroll past
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
          markers: false,
        },
        scale: 0.85,
        opacity: 0.4,
        y: -20,
        duration: 1,
      });

      // Nav background fade in as you scroll
      gsap.to(navRef.current, {
        scrollTrigger: {
          trigger: "body",
          start: "top+=100 top",
          end: "top+=200 top",
          scrub: 0.6,
          markers: false,
        },
        duration: 1,
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return { heroRef, navRef };
}
