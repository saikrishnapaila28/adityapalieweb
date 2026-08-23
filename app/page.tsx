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
import { getSiteUrl, siteConfig } from "@/lib/site";

export default function Home() {
  const siteUrl = getSiteUrl();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en-IN",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: siteConfig.name,
        jobTitle: siteConfig.jobTitle,
        description: siteConfig.description,
        url: siteUrl,
        image: `${siteUrl}/images/aditya-profile.jpg`,
        worksFor: {
          "@type": "Organization",
          name: siteConfig.company,
        },
        alumniOf: siteConfig.education.map((edu) => ({
          "@type": "EducationalOrganization",
          name: edu,
        })),
        knowsAbout: [
          "Customer Support",
          "Voice Support",
          "Email Support",
          "First-Contact Resolution",
          "Customer Satisfaction",
          "CRM Systems",
          "Complaint Handling",
          "Process Knowledge",
          "Microsoft Office",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Delhi",
          postalCode: "110066",
          addressCountry: "IN",
        },
      },
    ],
  };

  return (
    <>
      {/* Structured Data — JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
    </>
  );
}
