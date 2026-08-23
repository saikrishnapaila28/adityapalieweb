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
      className="md:col-span-2 lg:col-span-2 flex-col sm:flex-row items-center sm:items-stretch gap-6 sm:gap-8 justify-between p-8 sm:p-9"
      onClick={() => {
        const el = document.getElementById("about");
        el?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {/* Left Avatar Container with Real Photo in Clean Dark Frame */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-auto sm:min-h-[200px] md:w-44 flex-shrink-0 rounded-[18px] overflow-hidden bg-[rgba(8,11,16,0.85)] p-1 border border-white/[0.08] shadow-2xl">
        <div className="relative w-full h-full min-h-[140px] sm:min-h-full rounded-[14px] overflow-hidden bg-[#070a0e]">
          {!imageError ? (
            <Image
              src={personal.avatarUrl}
              alt="Aditya Palei — Customer Service Executive"
              fill
              sizes="(max-width: 640px) 128px, 176px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#10141c] text-[#B5B5B5] font-medium text-xl">
              AP
            </div>
          )}
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col justify-between w-full">
        <div>
          {/* Small Uppercase Label */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-medium tracking-[0.12em] text-[#B5B5B5] uppercase">
              {personal.role}
            </span>
            <span className="text-[#6F6F6F]">•</span>
            <span className="text-[11px] font-medium tracking-[0.08em] text-[#4a90e2] uppercase">
              {personal.specialization}
            </span>
          </div>

          {/* Name with Breathing Room */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#EEEEEE] tracking-[-0.03em] leading-tight">
            Aditya <span className="text-[#4a90e2]">Palei.</span>
          </h1>

          {/* Summary */}
          <p className="text-[14px] sm:text-[15px] text-[#999999] font-normal leading-[1.7] mt-3.5 max-w-xl">
            {personal.headline}
          </p>
        </div>

        {/* Bottom Interactive Row */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/[0.06]">
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
