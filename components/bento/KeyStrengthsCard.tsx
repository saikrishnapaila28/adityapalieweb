"use client";

import React from "react";
import { BentoCard } from "@/components/cards/BentoCard";
import { ArrowButton } from "@/components/cards/ArrowButton";
import { portfolioData } from "@/data/portfolio";

export const KeyStrengthsCard: React.FC = () => {
  const { professionalHighlights } = portfolioData;

  return (
    <BentoCard
      className="md:col-span-2 flex-col justify-between p-8 sm:p-9"
      onClick={() => {
        const el = document.getElementById("about");
        el?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-[11px] font-medium tracking-[0.12em] text-[#B5B5B5] uppercase">
            PROFESSIONAL HIGHLIGHTS
          </span>
          <span className="text-xs text-[#6F6F6F] font-normal">8 Core Strengths</span>
        </div>

        {/* 2-Column List with Small Muted Dots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
          {professionalHighlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-normal text-[#EEEEEE] leading-[1.6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#36516D] mt-1.5 flex-shrink-0" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Metadata */}
      <div className="flex items-end justify-between mt-6 pt-4 border-t border-white/[0.05]">
        <span className="text-xs text-[#6F6F6F] font-normal">
          Demonstrated track record of customer satisfaction &amp; quality
        </span>

        <ArrowButton href="#about" ariaLabel="View all professional strengths" size="sm" />
      </div>
    </BentoCard>
  );
};
