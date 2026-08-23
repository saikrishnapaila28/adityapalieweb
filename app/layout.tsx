import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";
import { AmbientBackground } from "@/components/background/AmbientBackground";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: portfolioData.meta.title,
  description: portfolioData.meta.description,
  keywords: portfolioData.meta.keywords,
  authors: [{ name: portfolioData.personal.name }],
  creator: portfolioData.personal.name,
  openGraph: {
    title: portfolioData.meta.title,
    description: portfolioData.meta.description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.meta.title,
    description: portfolioData.meta.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${interTight.variable} font-sans bg-[#05080D] text-[#999999] antialiased min-h-screen relative overflow-x-hidden selection:bg-[#27435F] selection:text-white`}>
        {/* Dedicated Fixed Ambient Light Beam Layer */}
        <AmbientBackground />

        {/* Website Content (Higher Stacking Context) */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
