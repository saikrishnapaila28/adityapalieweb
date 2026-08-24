"use client";

import React from "react";
import { BentoCard } from "@/components/cards/BentoCard";
import { ArrowButton } from "@/components/cards/ArrowButton";
import { portfolioData } from "@/data/portfolio";

export const FeaturedExperienceCard: React.FC = () => {
  const exp = portfolioData.experience[0];

  return (
    <BentoCard
      className="md:col-span-2 lg:col-span-2 star-experience-card flex-col justify-between p-6 sm:p-7 md:p-8 lg:p-9"
      onClick={() => {
        const el = document.getElementById("experience");
        el?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <div>
        {/* Top Header Row */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 mb-3">
          <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-[#4a90e2] uppercase">
            EXPERIENCE
          </span>

          <span className="text-xs font-normal text-[#B5B5B5]">
            {exp.period}
          </span>
        </div>

        {/* Company & Role */}
        <div className="mt-1">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#EEEEEE] tracking-[-0.02em]">
            {exp.company}
          </h2>
          <p className="text-xs sm:text-sm font-normal text-[#B5B5B5] mt-1">
            {exp.role}
          </p>
        </div>

        {/* Dark Inner Glass Achievement Panel */}
        {exp.achievementBadge && (
          <div className="mt-3.5 sm:mt-4 p-3.5 sm:p-4 rounded-[14px] bento-card-inner">
            <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#4a90e2] block mb-1">
              KEY ACHIEVEMENT
            </span>
            <p className="text-xs sm:text-[13px] font-normal text-[#EEEEEE] leading-[1.6]">
              {exp.achievementBadge}
            </p>
          </div>
        )}

        {/* Core Duties */}
        <div className="mt-3.5 sm:mt-4 space-y-2">
          {exp.responsibilities.slice(0, 3).map((resp, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[12.5px] text-[#999999] leading-[1.6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4a90e2] mt-1.5 flex-shrink-0" />
              <span>{resp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action */}
      <div className="flex items-center justify-between mt-5 sm:mt-6 pt-4 border-t border-white/[0.06] gap-2">
        <span className="text-[11px] sm:text-xs text-[#6F6F6F] font-normal truncate">
          Voice &amp; Email Support • Quality &amp; FCR
        </span>

        <ArrowButton href="#experience" ariaLabel="View complete experience details" size="sm" />
      </div>
    </BentoCard>
  );
};
