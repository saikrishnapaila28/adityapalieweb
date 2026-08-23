"use client";

import React from "react";
import { BentoCard } from "@/components/cards/BentoCard";
import { ArrowButton } from "@/components/cards/ArrowButton";

export const ToolsCard: React.FC = () => {
  const tools = [
    "Microsoft Excel",
    "Microsoft Word",
    "PowerPoint",
    "Outlook",
    "CRM Systems",
    "Fast Typing",
  ];

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
          TECHNICAL STACK
        </span>

        {/* Clean Typographic List */}
        <div className="space-y-2.5">
          {tools.map((tool, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#EEEEEE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#36516D] flex-shrink-0" />
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-end justify-between mt-6 pt-4 border-t border-white/[0.05]">
        <span className="text-xs font-semibold text-[#B5B5B5]">
          Office &amp; CRM
        </span>
        <ArrowButton href="#skills" ariaLabel="View all technical skills" size="sm" />
      </div>
    </BentoCard>
  );
};
