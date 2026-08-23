"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface BentoCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = "",
  onClick,
  hoverEffect = true,
  ...props
}) => {
  return (
    <motion.div
      onClick={onClick}
      className={`
        bento-card 
        rounded-[20px] sm:rounded-[22px] 
        p-7 sm:p-8 
        flex flex-col justify-between 
        ${hoverEffect ? "cursor-pointer" : ""} 
        ${className}
      `}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
