"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Mail } from "lucide-react";
import { NavLink, PersonalInfo } from "@/data/portfolio";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  personal: PersonalInfo;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  links,
  personal,
  activeSection,
}) => {
  // Close menu on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-xs sm:max-w-sm bg-[rgba(10,11,14,0.95)] backdrop-blur-2xl border-l border-white/[0.08] z-50 p-6 sm:p-7 flex flex-col justify-between shadow-2xl lg:hidden overflow-y-auto"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-lg text-[#EEEEEE]">
                    {personal.brandName}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#36516D]" />
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] border border-white/[0.08] flex items-center justify-center text-[#999999] hover:text-[#EEEEEE] active:scale-95 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-2">
                {links.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={`
                        min-h-[48px] flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors
                        ${isActive 
                          ? "bg-white/[0.08] text-[#EEEEEE] border border-white/[0.06]" 
                          : "text-[#999999] hover:bg-white/[0.04] hover:text-[#EEEEEE]"}
                      `}
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={15} className={`transition-transform ${isActive ? "text-[#5a8bb3] translate-x-0.5" : "opacity-40"}`} />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Contact CTA */}
            <div className="pt-6 border-t border-white/[0.06] space-y-3 mt-6">
              <a
                href="#contact"
                onClick={onClose}
                className="w-full min-h-[48px] py-3 px-4 bg-[#3B5F8F] hover:bg-[#2d4a73] text-white font-medium rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-[0.08em] shadow-lg transition-colors"
              >
                <Mail size={15} />
                <span>Let&apos;s talk</span>
              </a>

              <p className="text-[11px] text-center text-[#6F6F6F]">
                {personal.availability.text}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
