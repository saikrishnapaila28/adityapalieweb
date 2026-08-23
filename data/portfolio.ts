/**
 * Centralized Portfolio Data for Aditya Palei
 * 
 * Customer Service Executive | Voice & Email Support
 * Source of truth: Aditya Palei Resume
 */

export interface PersonalInfo {
  name: string;
  role: string;
  specialization: string;
  headline: string;
  bio: string;
  extendedBio: string[];
  location: string;
  availability: {
    status: "available" | "busy" | "open_to_offers";
    text: string;
  };
  avatarUrl: string;
  brandName: string;
  resumeUrl?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
}

export interface SupportCapability {
  id: string;
  title: string;
  subtitle: string;
  icon: "phone" | "mail" | "database" | "award" | "check" | "users";
  description: string;
  keyPoints: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  achievementBadge?: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  location: string;
  details?: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  tag: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface SocialLink {
  id: string;
  platform: "email" | "phone" | "linkedin" | "globe";
  label: string;
  url: string;
  value: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  timezone: string;
  ctaTitle: string;
  ctaHighlight: string;
  ctaSubtitle: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  navigation: NavLink[];
  stats: StatItem[];
  marqueeItems: string[];
  professionalHighlights: string[];
  capabilities: SupportCapability[];
  experience: ExperienceItem[];
  education: EducationItem[];
  languages: LanguageItem[];
  technicalSkills: SkillCategory[];
  softSkills: string[];
  socials: SocialLink[];
  contact: ContactInfo;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Aditya Palei",
    role: "CUSTOMER SERVICE EXECUTIVE",
    specialization: "Voice & Email Support",
    headline: "Customer Service Executive with 1 year of experience at Concentrix delivering Voice and Email support. Skilled in customer query resolution, complaint handling, and providing exceptional customer experiences.",
    bio: "Recognized as the Agent with the Most Positive Customer Responses and Ratings at Concentrix. Fluent in English, Hindi, and native in Odia with excellent communication, fast typing speed, strong computer proficiency, and a proven ability to maintain quality standards in fast-paced environments.",
    extendedBio: [
      "Customer Service Executive with 1 year of dedicated experience at Concentrix handling omnichannel Voice and Email customer support.",
      "Skilled in customer query resolution, professional complaint handling, active listening, and delivering consistent first-contact resolution (FCR) with high CSAT ratings.",
      "Proficient in Microsoft Office (Excel, Word, PowerPoint, Outlook), CRM Systems, Google Workspace, Windows OS, Internet & Email Applications, Fast Typing, and accurate Data Entry.",
    ],
    location: "R.K Puram, Delhi 110066, India",
    availability: {
      status: "available",
      text: "Available for Voice & Email Support roles",
    },
    avatarUrl: "/images/aditya-profile.jpg",
    brandName: "Aditya.Palei",
    resumeUrl: "#contact",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  marqueeItems: [
    "CUSTOMER SUPPORT",
    "RECOGNIZED FOR HIGHEST POSITIVE CUSTOMER RATINGS",
    "VOICE & EMAIL SUPPORT",
    "FIRST-CONTACT RESOLUTION",
    "CUSTOMER SATISFACTION",
    "CRM PROFICIENCY",
    "FAST TYPING",
    "PROFESSIONAL COMMUNICATION",
  ],

  professionalHighlights: [
    "1 Year of Customer Service Experience",
    "Voice & Email Support Specialist",
    "Fluent in English, Hindi & Odia",
    "Excellent Typing Speed & Computer Skills",
    "Customer Satisfaction Focused",
    "Strong Process Knowledge",
    "Team Player & Quick Learner",
    "Professional Communication Skills",
  ],

  stats: [
    {
      id: "stat-1",
      value: "Top",
      label: "CUSTOMER",
      sublabel: "RATINGS & CSAT",
    },
    {
      id: "stat-2",
      value: "1 Year",
      label: "CONCENTRIX",
      sublabel: "EXPERIENCE",
    },
    {
      id: "stat-3",
      value: "Voice/Email",
      label: "DUAL CHANNEL",
      sublabel: "EXPERTISE",
    },
  ],

  capabilities: [
    {
      id: "cap-1",
      title: "Voice Support & Communication",
      subtitle: "Inbound & Outbound Calling",
      icon: "phone",
      description: "Delivering clear, empathetic, and professional verbal assistance with active listening and swift query de-escalation.",
      keyPoints: [
        "First-contact resolution whenever possible",
        "Empathetic and professional call handling",
        "Active listening and clear articulation",
        "Calm and effective complaint handling",
      ],
    },
    {
      id: "cap-2",
      title: "Email & Ticket Resolution",
      subtitle: "Written Correspondence",
      icon: "mail",
      description: "Crafting structured, precise, and polite email resolutions with high typing speed and error-free communication.",
      keyPoints: [
        "Clear and professional written responses",
        "Fast query resolution and turnaround",
        "Process-compliant ticket documentation",
        "Maintaining quality and productivity metrics",
      ],
    },
    {
      id: "cap-3",
      title: "CRM Systems & Process Knowledge",
      subtitle: "Customer Records & Data",
      icon: "database",
      description: "Navigating CRM systems efficiently to maintain accurate logs, track customer history, and follow standard operating procedures.",
      keyPoints: [
        "CRM Systems navigation and record updating",
        "Accurate customer query tagging",
        "Demonstrated in-depth process knowledge",
        "Fast typing and meticulous data entry",
      ],
    },
    {
      id: "cap-4",
      title: "Customer Satisfaction & Quality",
      subtitle: "Quality & Productivity Benchmarks",
      icon: "award",
      description: "Consistently outperforming quality benchmarks and earning the highest positive customer feedback ratings.",
      keyPoints: [
        "Highest positive customer responses & ratings",
        "Maintaining high customer satisfaction scores",
        "Adherence to quality and productivity standards",
        "Customer-first service mindset",
      ],
    },
  ],

  experience: [
    {
      id: "exp-1",
      period: "October 2025 – October 2026",
      role: "Customer Executive",
      company: "Concentrix",
      location: "India",
      achievementBadge: "Recognized as the Agent with the Most Positive Customer Responses and Ratings.",
      description: "Delivered omnichannel Voice and Email customer support, resolving customer inquiries with a high standard of quality, first-contact resolution, and customer satisfaction.",
      responsibilities: [
        "Provided Voice and Email support to customers.",
        "Resolved customer queries efficiently.",
        "Delivered first-contact resolution whenever possible.",
        "Maintained high customer satisfaction scores.",
        "Demonstrated in-depth process knowledge.",
        "Handled customer complaints professionally.",
        "Maintained quality and productivity metrics.",
      ],
      skills: [
        "Voice Support",
        "Email Support",
        "Customer Query Resolution",
        "First-Contact Resolution",
        "Customer Satisfaction",
        "Complaint Handling",
        "CRM Systems",
        "Process Knowledge",
        "Quality & Productivity Metrics",
      ],
    },
  ],

  education: [
    {
      id: "edu-1",
      period: "2025 – 2028",
      degree: "Bachelor of Computer Application (B.C.A.)",
      institution: "Indira Gandhi National Open University (IGNOU)",
      location: "India",
      details: "Pursuing higher education in Computer Applications, computer fundamentals, and software applications.",
    },
    {
      id: "edu-2",
      period: "2012 – 2024",
      degree: "Secondary Education",
      institution: "PM Shri Kendriya Vidyalaya, Sector-2, R.K Puram",
      location: "New Delhi, India",
      details: "Completed secondary education with solid academic and communication foundations.",
    },
  ],

  languages: [
    { name: "English", level: "Fluent", tag: "Fluent" },
    { name: "Hindi", level: "Fluent", tag: "Fluent" },
    { name: "Odia", level: "Native", tag: "Native" },
  ],

  technicalSkills: [
    {
      title: "Microsoft Office Suite",
      description: "Core productivity suite for reporting, documentation, and correspondence",
      skills: ["Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Outlook"],
    },
    {
      title: "CRM & Systems",
      description: "Platforms and operating environments for customer workflow",
      skills: ["CRM Systems", "Internet & Email Applications", "Google Workspace", "Windows OS"],
    },
    {
      title: "Operational & Speed",
      description: "Data processing and speed proficiencies",
      skills: ["Fast Typing", "Data Entry", "Ticket Documentation", "Query Tagging"],
    },
  ],

  softSkills: [
    "Communication",
    "Active Listening",
    "Teamwork",
    "Problem Solving",
    "Adaptability",
    "Time Management",
  ],

  socials: [
    {
      id: "soc-1",
      platform: "phone",
      label: "Phone",
      url: "tel:+919810220395",
      value: "+91 9810220395",
    },
    {
      id: "soc-2",
      platform: "email",
      label: "Email",
      url: "mailto:adityapalei07@gmail.com",
      value: "adityapalei07@gmail.com",
    },
    {
      id: "soc-3",
      platform: "globe",
      label: "Location",
      url: "#contact",
      value: "R.K Puram, Delhi 110066, India",
    },
  ],

  contact: {
    email: "adityapalei07@gmail.com",
    phone: "+91 9810220395",
    location: "R.K Puram, Delhi 110066, India",
    timezone: "IST (UTC+5:30)",
    ctaTitle: "Let's",
    ctaHighlight: "work together.",
    ctaSubtitle: "Seeking an energetic, top-rated Customer Service Executive with 1 year of Concentrix experience in Voice & Email support? Reach out directly.",
  },

  meta: {
    title: "Aditya Palei — Customer Service Executive Portfolio",
    description: "Portfolio of Aditya Palei, Customer Service Executive with 1 year experience at Concentrix in Voice & Email support, CRM systems, and customer satisfaction.",
    keywords: [
      "Aditya Palei",
      "Customer Service Executive",
      "Voice Support",
      "Email Support",
      "Concentrix",
      "Customer Satisfaction",
      "First-Contact Resolution",
      "CRM",
      "IGNOU B.C.A.",
    ],
  },
};
