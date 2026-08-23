"use client";

import React from "react";
import { BentoCard } from "@/components/cards/BentoCard";
import { ArrowButton } from "@/components/cards/ArrowButton";
import { portfolioData } from "@/data/portfolio";

export const EducationCard: React.FC = () => {
  const { education } = portfolioData;
  const bca = education[0];
  const secondary = education[1];

  return (
    <BentoCard
      className="col-span-1 flex-col justify-between p-7 sm:p-8"
      onClick={() => {
        const el = document.getElementById("experience");
        el?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <div>
        <span className="text-[11px] font-medium tracking-[0.12em] text-[#B5B5B5] uppercase block mb-4">
          EDUCATION
        </span>

        {/* Clean Timeline */}
        <div className="space-y-4">
          <div>
            <span className="text-[10px] font-medium text-[#5a7696] tracking-[0.08em] block">
              {bca?.period}
            </span>
            <h3 className="text-xs font-semibold text-[#EEEEEE] mt-1 leading-snug">
              {bca?.degree}
            </h3>
            <p className="text-[11px] text-[#999999] mt-0.5 leading-normal">
              IGNOU
            </p>
          </div>

          <div className="pt-3.5 border-t border-white/[0.04]">
            <span className="text-[10px] font-medium text-[#6F6F6F] tracking-[0.08em] block">
              {secondary?.period}
            </span>
            <h3 className="text-xs font-semibold text-[#EEEEEE] mt-1 leading-snug">
              {secondary?.degree}
            </h3>
            <p className="text-[11px] text-[#999999] mt-0.5 leading-normal">
              PM Shri KV, R.K Puram
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between mt-6 pt-4 border-t border-white/[0.05]">
        <span className="text-xs font-semibold text-[#B5B5B5]">
          Academic
        </span>
        <ArrowButton href="#experience" ariaLabel="View education timeline" size="sm" />
      </div>
    </BentoCard>
  );
};
