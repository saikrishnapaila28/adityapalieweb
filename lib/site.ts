/**
 * Centralized Site and SEO Configuration
 */

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Safe default for metadata generation
  return "https://adityapalei.com";
}

export const siteConfig = {
  name: "Aditya Palei",
  title: "Aditya Palei | Customer Service Executive",
  description:
    "Customer Service Executive with experience in Voice & Email Support, customer query resolution, complaint handling, first-contact resolution and customer satisfaction.",
  jobTitle: "Customer Service Executive",
  locale: "en_IN",
  keywords: [
    "Aditya Palei",
    "Customer Service Executive",
    "Customer Support",
    "Voice Support",
    "Email Support",
    "Customer Service",
    "CRM",
    "First Contact Resolution",
  ],
  author: {
    name: "Aditya Palei",
    email: "adityapalei07@gmail.com",
    phone: "+91 9810220395",
    location: "R.K Puram, Delhi 110066, India",
  },
  company: "Concentrix",
  education: [
    "Indira Gandhi National Open University (IGNOU)",
    "PM Shri Kendriya Vidyalaya",
  ],
};
