"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedDiv({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="modal"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ type: "fade-in", duration: 0.4, easing: "ease" }}
        className="mx-auto max-w-3xl self-center"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
