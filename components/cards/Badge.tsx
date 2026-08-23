import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "accent",
  className = "",
}) => {
  const variantStyles = {
    default: "text-[#6F6F6F]",
    accent: "text-[#5a8bb3]",
    outline: "text-[#B5B5B5]",
  };

  return (
    <span
      className={`inline-block font-medium text-[11px] sm:text-xs tracking-[0.12em] uppercase ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
