"use client";

import React from "react";
import { PhoneCall, MailCheck, Database, Award } from "lucide-react";
import { portfolioData, SupportCapability } from "@/data/portfolio";
import { BentoCard } from "@/components/cards/BentoCard";
import { Badge } from "@/components/cards/Badge";

export const CapabilitiesSection: React.FC = () => {
  const { capabilities } = portfolioData;

  const getCapabilityIcon = (iconName: SupportCapability["icon"]) => {
    switch (iconName) {
      case "phone":
        return <PhoneCall size={16} className="text-[#5a7696]" />;
      case "mail":
        return <MailCheck size={16} className="text-[#5a7696]" />;
      case "database":
        return <Database size={16} className="text-[#5a7696]" />;
      case "award":
        return <Award size={16} className="text-[#5a7696]" />;
      default:
        return <PhoneCall size={16} className="text-[#5a7696]" />;
    }
  };

  return (
    <section id="capabilities" className="py-28 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <Badge>CAPABILITIES</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#EEEEEE] tracking-[-0.025em] leading-[1.15] mt-3">
            Customer service <span className="text-[#5a7696]">capabilities.</span>
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <BentoCard
              key={cap.id}
              className="p-8 sm:p-10 flex flex-col justify-between"
              hoverEffect={false}
            >
              <div>
                {/* Top Icon & Title */}
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-9 h-9 rounded-[10px] bg-[rgba(8,9,11,0.85)] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                    {getCapabilityIcon(cap.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#EEEEEE] tracking-[-0.02em]">
                      {cap.title}
                    </h3>
                    <span className="text-xs text-[#6F6F6F] font-normal">
                      {cap.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-[14px] text-[#999999] mt-3.5 leading-[1.7]">
                  {cap.description}
                </p>

                {/* 4 Concise Bullet Points with Muted Dots */}
                <div className="mt-7 pt-6 border-t border-white/[0.05] space-y-3">
                  {cap.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-[14px] text-[#EEEEEE] leading-[1.65]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#36516D] mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Link */}
              <div className="mt-8 pt-5 border-t border-white/[0.05]">
                <a
                  href="#contact"
                  className="text-xs font-medium tracking-[0.04em] text-[#B5B5B5] hover:text-[#EEEEEE] flex items-center gap-1.5 transition-colors"
                >
                  <span>Inquire about support roles</span>
                  <span className="text-[#5a7696]">→</span>
                </a>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
};
