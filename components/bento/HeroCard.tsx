"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BentoCard } from "@/components/cards/BentoCard";
import { ArrowButton } from "@/components/cards/ArrowButton";
import { portfolioData } from "@/data/portfolio";

export const HeroCard: React.FC = () => {
  const { personal } = portfolioData;
  const [imageError, setImageError] = useState(false);

  return (
    <BentoCard
      className="md:col-span-2 lg:col-span-2 flex-col sm:flex-row items-start sm:items-stretch gap-5 sm:gap-7 md:gap-8 justify-between p-6 sm:p-7 md:p-8 lg:p-9"
      onClick={() => {
        const el = document.getElementById("about");
        el?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {/* Avatar Container with Real Photo in Clean Dark Frame */}
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-auto md:min-h-[210px] flex-shrink-0 rounded-[16px] sm:rounded-[18px] overflow-hidden bg-[rgba(8,11,16,0.85)] p-1 border border-white/[0.08] shadow-2xl">
        <div className="relative w-full h-full min-h-[104px] sm:min-h-full rounded-[12px] sm:rounded-[14px] overflow-hidden bg-[#070a0e]">
          {!imageError ? (
            <Image
              src={personal.avatarUrl}
              alt="Aditya Palei — Customer Service Executive"
              fill
              sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 176px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#10141c] text-[#B5B5B5] font-medium text-xl">
              AP
            </div>
          )}
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-between w-full">
        <div>
          {/* Small Uppercase Label */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-[#B5B5B5] uppercase">
              {personal.role}
            </span>
            <span className="text-[#6F6F6F]">•</span>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.08em] text-[#4a90e2] uppercase">
              {personal.specialization}
            </span>
          </div>

          {/* Name with Breathing Room */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#EEEEEE] tracking-[-0.03em] leading-tight">
            Aditya <span className="text-[#4a90e2]">Palei.</span>
          </h1>

          {/* Summary */}
          <p className="text-[13.5px] sm:text-[15px] text-[#999999] font-normal leading-[1.68] mt-2.5 sm:mt-3.5 max-w-xl">
            {personal.headline}
          </p>
        </div>

        {/* Bottom Interactive Row */}
        <div className="flex items-center justify-between mt-5 sm:mt-6 pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/90 flex-shrink-0" />
            <span className="text-xs font-normal text-[#B5B5B5]">
              {personal.availability.text}
            </span>
          </div>

          <ArrowButton href="#about" ariaLabel="Learn more about Aditya Palei" size="sm" />
        </div>
      </div>
    </BentoCard>
  );
};
