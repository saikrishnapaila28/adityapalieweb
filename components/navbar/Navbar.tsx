"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { MobileMenu } from "./MobileMenu";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { personal, navigation } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navigation.map((nav) => nav.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigation]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-200 ${
          isScrolled
            ? "py-3.5 bg-[rgba(9,10,12,0.85)] backdrop-blur-md border-b border-white/[0.05]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Name */}
            <a
              href="#home"
              className="flex items-center gap-1.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#36516D] rounded-md"
            >
              <span className="font-semibold text-lg tracking-[-0.01em] text-[#EEEEEE] group-hover:text-[#B5B5B5] transition-colors">
                {personal.brandName}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#36516D]" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 bg-[rgba(14,16,19,0.70)] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/[0.055]">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`
                      px-3.5 py-1.5 rounded-full text-xs font-medium tracking-[0.02em] transition-colors
                      ${
                        isActive
                          ? "text-[#EEEEEE] bg-white/[0.07]"
                          : "text-[#999999] hover:text-[#EEEEEE]"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                className="
                  px-4 py-2 
                  rounded-full 
                  text-xs font-medium tracking-[0.02em]
                  bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] 
                  text-[#B5B5B5] hover:text-[#EEEEEE] 
                  border border-white/[0.06] hover:border-white/15 
                  transition-all duration-200
                "
              >
                Let&apos;s talk
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden items-center gap-2.5">
              <a
                href="#contact"
                className="px-3 py-1.5 text-xs font-medium bg-[rgba(255,255,255,0.04)] text-[#EEEEEE] border border-white/[0.06] rounded-full"
              >
                Contact
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="w-9 h-9 rounded-full bg-[rgba(14,16,19,0.70)] border border-white/[0.06] flex items-center justify-center text-[#999999] hover:text-[#EEEEEE] transition-colors"
              >
                <Menu size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navigation}
        personal={personal}
        activeSection={activeSection}
      />
    </>
  );
};
