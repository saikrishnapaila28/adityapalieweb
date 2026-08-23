"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { BentoCard } from "@/components/cards/BentoCard";
import { Badge } from "@/components/cards/Badge";

export const ExperienceSection: React.FC = () => {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-28 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <Badge>EXPERIENCE</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#EEEEEE] tracking-[-0.025em] leading-[1.15] mt-3">
            Professional experience &amp; <br className="hidden sm:inline" />
            academic <span className="text-[#5a7696]">background.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Work Experience Column (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {experience.map((item) => (
              <BentoCard
                key={item.id}
                className="p-8 sm:p-10 star-experience-card"
                hoverEffect={false}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-5 pb-5 border-b border-white/[0.05]">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-[#EEEEEE] tracking-[-0.02em]">
                      {item.company}
                    </h3>
                    <p className="text-sm font-normal text-[#B5B5B5] mt-1">
                      {item.role}
                    </p>
                  </div>

                  <span className="text-xs font-normal text-[#B5B5B5] tracking-[0.04em]">
                    {item.period}
                  </span>
                </div>

                {/* Outstanding Achievement Callout (Dark Inner Smoked Glass) */}
                {item.achievementBadge && (
                  <div className="my-5 p-4 rounded-[14px] bento-card-inner">
                    <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#5a7696] block mb-1">
                      KEY ACHIEVEMENT
                    </span>
                    <p className="text-sm font-normal text-[#EEEEEE] leading-[1.6]">
                      {item.achievementBadge}
                    </p>
                  </div>
                )}

                <p className="text-xs sm:text-[14px] text-[#999999] font-normal leading-[1.7] mt-4">
                  {item.description}
                </p>

                {/* Responsibilities */}
                <div className="mt-7 pt-6 border-t border-white/[0.05]">
                  <span className="text-xs font-medium uppercase tracking-[0.1em] text-[#B5B5B5] block mb-3.5">
                    Responsibilities
                  </span>
                  <div className="space-y-3">
                    {item.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-[14px] text-[#EEEEEE] leading-[1.65]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#36516D] mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Competencies Chips */}
                <div className="mt-7 pt-6 border-t border-white/[0.05] flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-[8px] text-xs font-normal bg-[rgba(255,255,255,0.03)] text-[#B5B5B5] border border-white/[0.05] tracking-[0.02em]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </BentoCard>
            ))}
          </div>

          {/* Education Column (1 col) */}
          <div className="space-y-6">
            <BentoCard className="p-8 sm:p-10 flex flex-col justify-between" hoverEffect={false}>
              <div>
                <span className="text-[11px] font-medium tracking-[0.12em] text-[#5a7696] uppercase block mb-5">
                  EDUCATION
                </span>

                <div className="space-y-7">
                  {education.map((edu) => (
                    <div key={edu.id} className="pb-6 border-b border-white/[0.04] last:border-0 last:pb-0">
                      <span className="text-xs font-medium text-[#6F6F6F] tracking-[0.08em] block mb-1.5">
                        {edu.period}
                      </span>
                      <h4 className="text-base font-semibold text-[#EEEEEE] leading-snug tracking-[-0.01em]">
                        {edu.degree}
                      </h4>
                      <p className="text-xs sm:text-[13px] font-normal text-[#999999] mt-1">
                        {edu.institution}
                      </p>
                      <p className="text-[11px] text-[#6F6F6F] mt-0.5">
                        {edu.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/[0.05]">
                <span className="text-xs text-[#6F6F6F] leading-[1.6] block">
                  Strong academic foundation in computer applications &amp; communication.
                </span>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
};
