"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";

export const MarqueeBanner: React.FC = () => {
  const { marqueeItems } = portfolioData;
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full mb-6 sm:mb-8 relative rounded-full overflow-hidden bg-[rgba(12,14,17,0.65)] backdrop-blur-md border border-white/[0.05] py-2 sm:py-2.5 select-none [mask-image:linear-gradient(to_right,transparent_0%,black_3%,black_97%,transparent_100%)]">
      {/* Scrolling track */}
      <div className="flex overflow-hidden w-full">
        <div className="marquee-track flex items-center space-x-6 sm:space-x-8 pl-3 sm:pl-4">
          {repeatedItems.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-6 sm:space-x-8 flex-shrink-0">
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-[#999999] uppercase whitespace-nowrap">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#36516D] flex-shrink-0 opacity-75" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
