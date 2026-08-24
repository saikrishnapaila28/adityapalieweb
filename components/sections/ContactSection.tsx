"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Copy, Send, Check } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { BentoCard } from "@/components/cards/BentoCard";
import { Badge } from "@/components/cards/Badge";
import { Toast } from "@/components/ui/Toast";

export const ContactSection: React.FC = () => {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setToastMessage("Email copied to clipboard");
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contact.phone);
    setCopiedPhone(true);
    setToastMessage("Phone number copied to clipboard");
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setToastMessage("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 lg:mb-16 max-w-3xl">
          <Badge>CONTACT</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#EEEEEE] tracking-[-0.025em] leading-[1.18] mt-3">
            Let&apos;s <span className="text-[#5a7696]">work together.</span>
          </h2>
          <p className="text-[#999999] text-xs sm:text-sm md:text-[15px] mt-2.5 sm:mt-3 max-w-xl leading-[1.7]">
            {contact.ctaSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6">
          {/* Contact Details Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Phone Card (Clickable) */}
            <BentoCard className="p-6 sm:p-7 md:p-8 lg:p-9" hoverEffect={false}>
              <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-[#B5B5B5] uppercase">
                  PHONE
                </span>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  aria-label="Copy phone number"
                  className="min-h-[36px] px-2 text-xs text-[#999999] hover:text-[#EEEEEE] flex items-center gap-1.5 transition-colors"
                >
                  {copiedPhone ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span>{copiedPhone ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="text-lg sm:text-xl font-semibold text-[#EEEEEE] hover:text-[#5a7696] transition-colors block tracking-[-0.01em]"
              >
                {contact.phone}
              </a>
            </BentoCard>

            {/* Email Card (Clickable) */}
            <BentoCard className="p-6 sm:p-7 md:p-8 lg:p-9" hoverEffect={false}>
              <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-[#B5B5B5] uppercase">
                  EMAIL
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="min-h-[36px] px-2 text-xs text-[#999999] hover:text-[#EEEEEE] flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <a
                href={`mailto:${contact.email}`}
                className="text-base sm:text-lg font-semibold text-[#EEEEEE] hover:text-[#5a7696] transition-colors break-all block tracking-[-0.01em]"
              >
                {contact.email}
              </a>
            </BentoCard>

            {/* Location & Timezone Card */}
            <BentoCard className="p-6 sm:p-7 md:p-8 lg:p-9" hoverEffect={false}>
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-[#B5B5B5] uppercase block mb-1.5">
                    LOCATION
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#EEEEEE] leading-relaxed block">
                    {contact.location}
                  </span>
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-white/[0.05]">
                  <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-[#B5B5B5] uppercase block mb-1.5">
                    TIMEZONE
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#EEEEEE] leading-relaxed block">
                    {contact.timezone}
                  </span>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Contact Form Column (3 cols) */}
          <BentoCard className="lg:col-span-3 p-6 sm:p-8 lg:p-10" hoverEffect={false}>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#EEEEEE] mb-1.5 sm:mb-2 tracking-[-0.02em]">
              Send a Message
            </h3>
            <p className="text-[#999999] text-xs sm:text-sm mb-6 sm:mb-7 leading-[1.6]">
              Connect regarding Customer Service Executive opportunities or support roles.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.1em] text-[#B5B5B5] block mb-1.5 sm:mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Recruiter / Manager"
                    className="w-full min-h-[44px] px-4 py-3 rounded-[12px] bg-[rgba(8,9,11,0.85)] border border-white/[0.06] text-[#EEEEEE] placeholder-[#6F6F6F] focus:outline-none focus:border-white/25 transition-colors text-base sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.1em] text-[#B5B5B5] block mb-1.5 sm:mb-2">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full min-h-[44px] px-4 py-3 rounded-[12px] bg-[rgba(8,9,11,0.85)] border border-white/[0.06] text-[#EEEEEE] placeholder-[#6F6F6F] focus:outline-none focus:border-white/25 transition-colors text-base sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.1em] text-[#B5B5B5] block mb-1.5 sm:mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Role / Opportunity Details"
                  className="w-full min-h-[44px] px-4 py-3 rounded-[12px] bg-[rgba(8,9,11,0.85)] border border-white/[0.06] text-[#EEEEEE] placeholder-[#6F6F6F] focus:outline-none focus:border-white/25 transition-colors text-base sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.1em] text-[#B5B5B5] block mb-1.5 sm:mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about the position, team, and next steps..."
                  className="w-full px-4 py-3 rounded-[12px] bg-[rgba(8,9,11,0.85)] border border-white/[0.06] text-[#EEEEEE] placeholder-[#6F6F6F] focus:outline-none focus:border-white/25 transition-colors text-base sm:text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[48px] py-3.5 px-6 rounded-[12px] bg-[#36516D] hover:bg-[#2a4057] active:scale-[0.99] text-white font-medium text-xs uppercase tracking-[0.1em] flex items-center justify-center gap-2 border border-white/[0.06] transition-all disabled:opacity-50 mt-2 shadow-lg"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={13} />
                  </>
                )}
              </button>
            </form>
          </BentoCard>
        </div>
      </div>

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </section>
  );
};
