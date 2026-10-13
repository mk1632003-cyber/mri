"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if user already saw preloader in this session
    const hasSeen = sessionStorage.getItem("mk_preloader_seen");
    if (hasSeen === "true") {
      setIsDone(true);
      return;
    }

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            sessionStorage.setItem("mk_preloader_seen", "true");
          }, 350);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="preloader-root"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* 5 Vertical Curtain Panels */}
          <div className="panels-wrap">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="panel"
                initial={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{
                  duration: 0.85,
                  delay: i * 0.08,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            ))}
          </div>

          {/* Preloader typography content */}
          <motion.div
            className="preloader-content"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <div className="preloader-counter">
              <span>{Math.min(count, 100)}</span>%
            </div>

            <div className="preloader-word">
              CREATIVE
            </div>

            <div className="preloader-sub">
              MRITUNJAY KUMAR / 2026
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
