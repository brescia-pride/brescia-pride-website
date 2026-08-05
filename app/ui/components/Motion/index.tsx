"use client";

import { motion } from "framer-motion";

export function MotionDiv({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      className="mx-auto flex"
    >
      {children}
    </motion.div>
  );
}
