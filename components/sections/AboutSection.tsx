"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { BentoCard } from "@/components/cards/BentoCard";
import { Badge } from "@/components/cards/Badge";

export const AboutSection: React.FC = () => {
  const { personal, languages, professionalHighlights } = portfolioData;

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 lg:mb-16 max-w-3xl">
          <Badge>ABOUT ME</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#EEEEEE] tracking-[-0.025em] leading-[1.18] mt-3">
            Customer Service Executive with <br className="hidden sm:inline" />
            proven resolution <span className="text-[#5a7696]">excellence.</span>
          </h2>
        </div>

        {/* Grid of About Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Main Bio Card */}
          <BentoCard className="lg:col-span-2 p-6 sm:p-8 lg:p-10" hoverEffect={false}>
            <div className="space-y-4 sm:space-y-5 text-[#999999] text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.72]">
              {personal.extendedBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 lg:mt-12 pt-5 sm:pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#B5B5B5] font-normal">
                <MapPin size={14} className="text-[#5a7696] flex-shrink-0" />
                <span>{personal.location}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="text-xs sm:text-[13px] font-medium text-[#B5B5B5]"
                  >
                    {lang.name} <span className="text-[#6F6F6F]">({lang.level})</span>
                    {idx < languages.length - 1 && <span className="text-neutral-700 ml-2 sm:ml-3">•</span>}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Status & Quick Contact Card */}
          <BentoCard className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between" hoverEffect={false}>
            <div>
              <div className="flex items-center gap-2 mb-3.5 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/90" />
                <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-[#B5B5B5] uppercase">
                  CURRENT STATUS
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-[#EEEEEE] mb-2.5 sm:mb-3 leading-snug tracking-[-0.01em]">
                {personal.availability.text}
              </h3>
              <p className="text-xs sm:text-[14px] text-[#999999] font-normal leading-[1.7]">
                Skilled in customer query resolution, complaint handling, and maintaining high customer satisfaction ratings across Voice and Email channels.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/[0.05]">
              <a
                href="#contact"
                className="w-full min-h-[44px] py-3 px-4 rounded-[12px] bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] border border-white/[0.06] text-[#EEEEEE] flex items-center justify-center text-xs font-medium tracking-[0.08em] uppercase transition-colors"
              >
                Contact Aditya
              </a>
            </div>
          </BentoCard>
        </div>

        {/* Professional Highlights Grid */}
        <div className="mt-5 sm:mt-6">
          <BentoCard className="p-6 sm:p-8 lg:p-10" hoverEffect={false}>
            <div className="mb-5 sm:mb-6">
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-[#5a7696] uppercase block mb-1.5">
                KEY STRENGTHS
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-[#EEEEEE] tracking-[-0.02em]">
                Professional Highlights
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-3.5 sm:gap-y-4">
              {professionalHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-[13.5px] font-normal text-[#EEEEEE] leading-[1.6]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#36516D] mt-2 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};
