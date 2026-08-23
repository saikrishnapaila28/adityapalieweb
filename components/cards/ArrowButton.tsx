import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ArrowButtonProps {
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  href,
  onClick,
  ariaLabel = "View details",
  className = "",
  size = "sm",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
  };

  const content = (
    <div
      className={`
        ${sizeClasses[size]}
        rounded-full 
        bg-[rgba(255,255,255,0.04)] 
        hover:bg-[rgba(255,255,255,0.09)]
        border border-white/[0.08] 
        hover:border-white/20
        flex items-center justify-center 
        text-[#999999] 
        hover:text-[#EEEEEE] 
        transition-all duration-200 
        ${className}
      `}
    >
      <ArrowUpRight
        size={iconSizes[size]}
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5F8F] rounded-full"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5F8F] rounded-full"
    >
      {content}
    </button>
  );
};
