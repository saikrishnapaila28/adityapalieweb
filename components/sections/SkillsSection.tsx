"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { BentoCard } from "@/components/cards/BentoCard";
import { Badge } from "@/components/cards/Badge";

export const SkillsSection: React.FC = () => {
  const { technicalSkills, softSkills, languages } = portfolioData;

  return (
    <section id="skills" className="py-28 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <Badge>SKILLS &amp; PROFICIENCIES</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#EEEEEE] tracking-[-0.025em] leading-[1.15] mt-3">
            Technical &amp; <span className="text-[#5a7696]">soft skills.</span>
          </h2>
        </div>

        {/* Technical Skills Typographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {technicalSkills.map((cat, idx) => (
            <BentoCard key={idx} className="p-8" hoverEffect={false}>
              <div className="mb-6">
                <span className="text-[11px] font-medium tracking-[0.12em] text-[#5a7696] uppercase block mb-1.5">
                  CATEGORY
                </span>
                <h3 className="text-lg font-semibold text-[#EEEEEE] tracking-[-0.01em]">
                  {cat.title}
                </h3>
              </div>

              {/* Clean Typographic List without Pills */}
              <div className="space-y-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-3 py-2 border-b border-white/[0.04] last:border-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#36516D] flex-shrink-0" />
                    <span className="text-xs sm:text-[13px] font-medium text-[#EEEEEE] uppercase tracking-[0.08em]">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </BentoCard>
          ))}
        </div>

        {/* Soft Skills & Languages Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Soft Skills (2 cols) */}
          <BentoCard className="lg:col-span-2 p-8 sm:p-10" hoverEffect={false}>
            <div className="mb-6">
              <span className="text-[11px] font-medium tracking-[0.12em] text-[#5a7696] uppercase block mb-1.5">
                INTERPERSONAL
              </span>
              <h3 className="text-xl font-semibold text-[#EEEEEE] tracking-[-0.02em]">
                Soft Skills
              </h3>
            </div>

            {/* 2-Column Clean Typographic Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
              {softSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 py-2 border-b border-white/[0.04]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#36516D] flex-shrink-0" />
                  <span className="text-xs sm:text-[13px] font-medium text-[#EEEEEE] uppercase tracking-[0.08em]">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Languages (1 col) */}
          <BentoCard className="p-8 sm:p-10 flex flex-col justify-between" hoverEffect={false}>
            <div>
              <div className="mb-6">
                <span className="text-[11px] font-medium tracking-[0.12em] text-[#5a7696] uppercase block mb-1.5">
                  COMMUNICATION
                </span>
                <h3 className="text-xl font-semibold text-[#EEEEEE] tracking-[-0.02em]">
                  Languages
                </h3>
              </div>

              <div className="space-y-4">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
                    <span className="text-sm font-semibold text-[#EEEEEE] uppercase tracking-[0.06em]">
                      {lang.name}
                    </span>
                    <span className="text-xs font-medium text-[#5a7696] tracking-[0.04em]">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.05] mt-6">
              <span className="text-xs text-[#6F6F6F] leading-[1.6] block">
                Fluent professional verbal and written communication.
              </span>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};
