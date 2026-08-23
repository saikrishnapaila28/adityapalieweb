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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-xs bg-[rgba(10,11,14,0.94)] backdrop-blur-xl border-l border-white/[0.08] z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.06]">
                <span className="font-semibold text-lg text-[#EEEEEE]">
                  {personal.brandName}
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.05)] border border-white/[0.08] flex items-center justify-center text-[#999999] hover:text-[#EEEEEE] transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-1.5">
                {links.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={`
                        flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors
                        ${isActive 
                          ? "bg-white/[0.08] text-[#EEEEEE]" 
                          : "text-[#999999] hover:bg-white/[0.04] hover:text-[#EEEEEE]"}
                      `}
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={14} className="opacity-40" />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Contact CTA */}
            <div className="pt-6 border-t border-white/[0.06] space-y-3">
              <a
                href="#contact"
                onClick={onClose}
                className="w-full py-3 px-4 bg-[#3B5F8F] hover:bg-[#2d4a73] text-white font-medium rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-[0.08em] transition-colors"
              >
                <Mail size={14} />
                <span>Let's talk</span>
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
