"use client";

import React from "react";
import { BentoCard } from "@/components/cards/BentoCard";
import { ArrowButton } from "@/components/cards/ArrowButton";
import { portfolioData } from "@/data/portfolio";

export const CtaCard: React.FC = () => {
  const { contact } = portfolioData;

  return (
    <BentoCard
      className="col-span-1 flex-col justify-between p-7 sm:p-8"
      onClick={() => {
        const el = document.getElementById("contact");
        el?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <div>
        <span className="text-[11px] font-medium tracking-[0.12em] text-[#B5B5B5] uppercase block mb-4">
          CONNECT
        </span>

        <h2 className="text-xl sm:text-2xl font-semibold text-[#EEEEEE] tracking-[-0.02em] leading-snug mt-1">
          Let&apos;s <span className="text-[#5a7696]">{contact.ctaHighlight}</span>
        </h2>

        <p className="text-xs text-[#999999] mt-2.5 leading-[1.6]">
          Open for Voice &amp; Email support roles.
        </p>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/[0.05]">
        <span className="text-xs font-semibold text-[#B5B5B5]">
          Get in touch
        </span>
        <ArrowButton href="#contact" ariaLabel="Contact Aditya Palei" size="sm" />
      </div>
    </BentoCard>
  );
};
