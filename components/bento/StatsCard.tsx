"use client";

import React from "react";
import { BentoCard } from "@/components/cards/BentoCard";
import { portfolioData } from "@/data/portfolio";

export const StatsCard: React.FC = () => {
  const { stats } = portfolioData;

  if (!stats || stats.length === 0) return null;

  return (
    <BentoCard
      className="md:col-span-2 lg:col-span-2 flex-col justify-center p-6"
      hoverEffect={false}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 h-full">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="rounded-2xl bento-card-inner p-5 flex flex-col items-center justify-center text-center group/stat hover:border-white/10 transition-all duration-300"
          >
            <span className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight group-hover/stat:text-brand-400 group-hover/stat:scale-105 transition-all duration-300">
              {stat.value}
            </span>
            <span className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase mt-2">
              {stat.label}
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">
              {stat.sublabel}
            </span>
          </div>
        ))}
      </div>
    </BentoCard>
  );
};
