"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * SectionWrapper — Shared scroll-reveal animation using Framer Motion whileInView.
 * Every section fades in and slides up smoothly as it enters the viewport.
 */
interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );
}
