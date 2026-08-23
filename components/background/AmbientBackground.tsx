"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export const AmbientBackground: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const light1Ref = useRef<HTMLDivElement>(null);
  const light1SpineRef = useRef<HTMLDivElement>(null);
  const light2Ref = useRef<HTMLDivElement>(null);
  const light3Ref = useRef<HTMLDivElement>(null);

  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const checkPointer = () => {
      setIsInteractive(
        window.matchMedia("(pointer: fine)").matches &&
        window.innerWidth >= 640 &&
        !prefersReducedMotion
      );
    };

    checkPointer();
    window.addEventListener("resize", checkPointer);
    return () => window.removeEventListener("resize", checkPointer);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    let targetScroll = 0;
    let currentScroll = 0;

    let rafId: number;

    const handlePointerMove = (e: PointerEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      // Normalized between -1 and 1
      targetX = (e.clientX - cx) / cx;
      targetY = (e.clientY - cy) / cy;
    };

    const handleScroll = () => {
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      targetScroll = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    };

    if (isInteractive) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const updatePosition = () => {
      currentX = lerp(currentX, targetX, 0.045);
      currentY = lerp(currentY, targetY, 0.045);
      currentScroll = lerp(currentScroll, targetScroll, 0.05);

      // LIGHT 1: Main Diagonal Beam (Upper-Right toward Center)
      // Shifts 25-35px with mouse, plus 60-80px gradual scroll translation
      if (light1Ref.current) {
        const mouseX = currentX * 32;
        const mouseY = currentY * 24;
        const scrollX = -currentScroll * 65;
        const scrollY = currentScroll * 75;
        light1Ref.current.style.transform = `translate3d(${mouseX + scrollX}px, ${mouseY + scrollY}px, 0) rotate(-26deg)`;
      }

      if (light1SpineRef.current) {
        const mouseX = currentX * 36;
        const mouseY = currentY * 28;
        const scrollX = -currentScroll * 75;
        const scrollY = currentScroll * 85;
        light1SpineRef.current.style.transform = `translate3d(${mouseX + scrollX}px, ${mouseY + scrollY}px, 0) rotate(-26deg)`;
      }

      // LIGHT 2: Weaker Secondary Beam (Lower-Left toward Center)
      if (light2Ref.current) {
        const mouseX = currentX * 22;
        const mouseY = currentY * 18;
        const scrollX = currentScroll * 35;
        const scrollY = -currentScroll * 45;
        light2Ref.current.style.transform = `translate3d(${mouseX + scrollX}px, ${mouseY + scrollY}px, 0) rotate(22deg)`;
      }

      // LIGHT 3: Upper-Center Atmosphere
      if (light3Ref.current) {
        const mouseX = currentX * -18;
        const mouseY = currentY * -14;
        const scrollX = -currentScroll * 30;
        const scrollY = -currentScroll * 35;
        light3Ref.current.style.transform = `translate3d(${mouseX + scrollX}px, ${mouseY + scrollY}px, 0)`;
      }

      rafId = requestAnimationFrame(updatePosition);
    };

    rafId = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(rafId);
      if (isInteractive) {
        window.removeEventListener("pointermove", handlePointerMove);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInteractive, prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#05080D]"
    >
      {/* 1. Deep Navy Canvas Foundation (#05080D to #080D16) */}
      <div className="absolute inset-0 bg-[#05080D]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#0c1624_0%,#080D16_45%,#05080D_80%)] opacity-90" />

      {/* =========================================================================
          LIGHT 1 — MAIN: Broad elongated diagonal desaturated blue-grey light beam
          Position: Upper-right toward center
          Color: Desaturated blue-grey #6E8492 / #526A7D (35% less saturation)
          ========================================================================= */}
      <div
        ref={light1Ref}
        style={{ transform: "rotate(-26deg)" }}
        className={`
          absolute -top-[12%] -right-[6%]
          w-[85vw] min-w-[950px] h-[28vw] min-h-[340px]
          rounded-[50%]
          bg-[radial-gradient(ellipse_at_center,rgba(110,132,146,0.28)_0%,rgba(65,85,100,0.16)_40%,rgba(16,25,35,0.06)_68%,transparent_80%)]
          blur-[130px]
          will-change-transform
          ${!prefersReducedMotion ? "animate-beam-idle-1" : ""}
        `}
      />

      {/* Core Spine Filament of Light 1 (Subtle soft pale mist core) */}
      <div
        ref={light1SpineRef}
        style={{ transform: "rotate(-26deg)" }}
        className={`
          absolute top-[2%] right-[4%]
          w-[65vw] min-w-[700px] h-[15vw] min-h-[180px]
          rounded-[50%]
          bg-[radial-gradient(ellipse_at_center,rgba(165,185,198,0.28)_0%,rgba(110,132,146,0.15)_40%,transparent_75%)]
          blur-[80px]
          will-change-transform
          ${!prefersReducedMotion ? "animate-beam-idle-1" : ""}
        `}
      />

      {/* =========================================================================
          LIGHT 2: Much weaker grey-blue beam coming from lower-left toward center
          Position: Lower-left / Mid-left
          Color: Desaturated soft grey-blue #455A6B
          ========================================================================= */}
      <div
        ref={light2Ref}
        style={{ transform: "rotate(22deg)" }}
        className={`
          absolute top-[40%] -left-[16%]
          w-[60vw] min-w-[700px] h-[22vw] min-h-[250px]
          rounded-[50%]
          bg-[radial-gradient(ellipse_at_center,rgba(68,88,102,0.18)_0%,rgba(35,48,58,0.09)_48%,transparent_75%)]
          blur-[140px]
          will-change-transform
          ${!prefersReducedMotion ? "animate-beam-idle-2" : ""}
        `}
      />

      {/* =========================================================================
          LIGHT 3: Very faint graphite/blue atmospheric light near upper-center
          Position: Upper-center
          Color: Faint graphite-blue #2D3E4C
          ========================================================================= */}
      <div
        ref={light3Ref}
        className={`
          absolute -top-[8%] left-[22%]
          w-[50vw] min-w-[550px] h-[18vw] min-h-[200px]
          rounded-[50%]
          bg-[radial-gradient(ellipse_at_center,rgba(48,65,78,0.14)_0%,rgba(20,28,36,0.06)_50%,transparent_80%)]
          blur-[150px]
          will-change-transform
          ${!prefersReducedMotion ? "animate-beam-idle-3" : ""}
        `}
      />

      {/* 4. Deep Dark Perimeter Vignette (Ensures edges & lower regions fade to deep dark navy) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,transparent_48%,rgba(3,5,8,0.78)_100%)]" />
    </div>
  );
};

export const AtmosphericBackground = AmbientBackground;
