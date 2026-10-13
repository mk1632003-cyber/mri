"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="scroll-progress-container" aria-hidden="true">
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX }}
      />
    </div>
  );
}
