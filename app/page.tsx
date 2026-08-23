import React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { BentoGrid } from "@/components/bento/BentoGrid";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/footer/Footer";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-transparent text-neutral-100 selection:bg-[#35577F] selection:text-white">
      {/* Top Floating Glass Navbar */}
      <Navbar />

      {/* Main Bento Grid Dashboard */}
      <BentoGrid />

      {/* Deep-Dive Sections */}
      <AboutSection />
      <ExperienceSection />
      <CapabilitiesSection />
      <SkillsSection />
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Scroll-to-Top Button */}
      <BackToTop />
    </main>
  );
}
