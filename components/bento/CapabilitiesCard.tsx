"use client";

import React from "react";
import { PhoneCall, MailCheck, Database, Award } from "lucide-react";
import { BentoCard } from "@/components/cards/BentoCard";
import { ArrowButton } from "@/components/cards/ArrowButton";

export const CapabilitiesCard: React.FC = () => {
  const capabilities = [
    { icon: PhoneCall, title: "Voice Support", desc: "Inbound & outbound query resolution" },
    { icon: MailCheck, title: "Email Support", desc: "Written ticketing & correspondence" },
    { icon: Database, title: "CRM Systems", desc: "Data entry & SOP documentation" },
    { icon: Award, title: "CSAT & FCR", desc: "Quality & customer satisfaction" },
  ];

  return (
    <BentoCard
      className="md:col-span-2 flex-col justify-between p-6 sm:p-7 md:p-8 lg:p-9"
      onClick={() => {
        const el = document.getElementById("capabilities");
        el?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-5 sm:mb-6">
          <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-[#B5B5B5] uppercase">
            CAPABILITIES
          </span>
          <span className="text-xs text-[#6F6F6F] font-normal">Customer Support</span>
        </div>

        {/* Clean 2x2 Capabilities Grid (Single Surface) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-5">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div key={idx} className="pb-3 border-b border-white/[0.04] sm:border-0 sm:pb-0">
                <div className="flex items-center gap-2.5 mb-1">
                  <Icon size={14} className="text-[#5a7696] flex-shrink-0" />
                  <h3 className="text-sm font-semibold text-[#EEEEEE] tracking-[-0.01em]">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-xs text-[#999999] leading-[1.6]">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Metadata */}
      <div className="flex items-end justify-between mt-5 sm:mt-6 pt-4 border-t border-white/[0.05] gap-2">
        <span className="text-[11px] sm:text-xs text-[#6F6F6F] font-normal truncate">
          Omnichannel query resolution &amp; customer service
        </span>

        <ArrowButton href="#capabilities" ariaLabel="Explore capabilities" size="sm" />
      </div>
    </BentoCard>
  );
};
