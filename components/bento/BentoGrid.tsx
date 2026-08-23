"use client";

import React from "react";
import { MarqueeBanner } from "./MarqueeBanner";
import { HeroCard } from "./HeroCard";
import { FeaturedExperienceCard } from "./FeaturedExperienceCard";
import { CapabilitiesCard } from "./CapabilitiesCard";
import { KeyStrengthsCard } from "./KeyStrengthsCard";
import { LanguagesCard } from "./LanguagesCard";
import { ToolsCard } from "./ToolsCard";
import { EducationCard } from "./EducationCard";
import { CtaCard } from "./CtaCard";

export const BentoGrid: React.FC = () => {
  return (
    <section id="home" className="w-full pt-28 sm:pt-32 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Ticker / Marquee Banner */}
        <MarqueeBanner />

        {/* Bento Grid Layout (4 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {/* Row 1: Hero (2 cols) + Concentrix Featured Experience Star Card (2 cols) */}
          <HeroCard />
          <FeaturedExperienceCard />

          {/* Row 2: Customer Support Capabilities (2 cols) + Key Professional Strengths (2 cols) */}
          <CapabilitiesCard />
          <KeyStrengthsCard />

          {/* Row 3: Languages (1 col) + Tools (1 col) + Education (1 col) + CTA (1 col) */}
          <LanguagesCard />
          <ToolsCard />
          <EducationCard />
          <CtaCard />
        </div>
      </div>
    </section>
  );
};
