"use client";

import React from "react";
import { BentoCard } from "@/components/cards/BentoCard";
import { ArrowButton } from "@/components/cards/ArrowButton";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon, GlobeIcon } from "@/components/ui/Icons";

export const SocialsCard: React.FC = () => {
  const { socials } = portfolioData;

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <GithubIcon size={20} />;
      case "linkedin":
        return <LinkedinIcon size={20} />;
      case "twitter":
        return <TwitterIcon size={18} />;
      case "dribbble":
        return <DribbbleIcon size={20} />;
      default:
        return <GlobeIcon size={20} />;
    }
  };

  return (
    <BentoCard
      className="col-span-1 flex-col justify-between"
      onClick={() => {
        const el = document.getElementById("contact");
        el?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {/* Top Inset Container with Social Icons */}
      <div className="w-full h-32 sm:h-36 rounded-2xl bento-card-inner flex items-center justify-center gap-4 px-4 py-3 group-hover:border-white/10 transition-colors">
        {socials.slice(0, 3).map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={item.label}
            className="w-12 h-12 rounded-full bg-[#181822] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-brand-500 hover:bg-brand-500/20 hover:scale-110 transition-all duration-300 shadow-md"
          >
            {getSocialIcon(item.platform)}
          </a>
        ))}
      </div>

      {/* Bottom Metadata */}
      <div className="flex items-end justify-between mt-6">
        <div>
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase block mb-1">
            STAY WITH ME
          </span>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
            Profiles
          </h2>
        </div>

        <ArrowButton href="#contact" ariaLabel="View profiles" />
      </div>
    </BentoCard>
  );
};
