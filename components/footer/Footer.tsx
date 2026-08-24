"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Footer: React.FC = () => {
  const { personal, navigation } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 sm:py-12 border-t border-white/[0.04] bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-[#EEEEEE] tracking-[-0.01em]">
              {personal.name}
            </span>
            <span className="text-xs text-[#6F6F6F]">
              • {personal.role}
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs text-[#999999] hover:text-[#EEEEEE] transition-colors py-1 px-1.5"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Back to top & Copyright */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#6F6F6F]">
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] border border-white/[0.08] flex items-center justify-center text-[#999999] hover:text-[#EEEEEE] active:scale-95 transition-all"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
