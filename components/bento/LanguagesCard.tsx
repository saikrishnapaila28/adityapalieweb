"use client";

import React from "react";
import { BentoCard } from "@/components/cards/BentoCard";
import { ArrowButton } from "@/components/cards/ArrowButton";
import { portfolioData } from "@/data/portfolio";

export const LanguagesCard: React.FC = () => {
  const { languages } = portfolioData;

  return (
    <BentoCard
      className="col-span-1 flex-col justify-between p-7 sm:p-8"
      onClick={() => {
        const el = document.getElementById("skills");
        el?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <div>
        <span className="text-[11px] font-medium tracking-[0.12em] text-[#B5B5B5] uppercase block mb-4">
          LANGUAGES
        </span>

        {/* Clean Typographic List */}
        <div className="space-y-3.5">
          {languages.map((lang, idx) => (
            <div key={idx} className="flex items-center justify-between py-1 border-b border-white/[0.04] last:border-0">
              <span className="text-sm font-semibold text-[#EEEEEE]">
                {lang.name}
              </span>
              <span className="text-xs font-medium text-[#5a7696]">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-end justify-between mt-6 pt-4 border-t border-white/[0.05]">
        <span className="text-xs font-semibold text-[#B5B5B5]">
          Fluency
        </span>
        <ArrowButton href="#skills" ariaLabel="View communication skills" size="sm" />
      </div>
    </BentoCard>
  );
};
