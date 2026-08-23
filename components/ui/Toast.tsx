"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

interface ToastProps {
  message: string | null;
  type?: "success" | "error";
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "success",
  onClose,
}) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#181818] text-white px-4 py-3 rounded-xl border border-white/10 shadow-2xl"
        >
          {type === "success" ? (
            <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
          ) : (
            <AlertCircle size={16} className="text-rose-400 flex-shrink-0" />
          )}
          <span className="text-xs font-semibold">{message}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Dismiss notification"
            className="ml-2 text-neutral-400 hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
