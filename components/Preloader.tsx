"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 1900);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          <div className="loaderTop">
            <span>PORTFOLIO</span>
            <span>© 2026</span>
          </div>

          <div className="loaderCenter">
            <div className="loaderMask">
              <motion.h2
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.15,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                MRITUNJAY
              </motion.h2>
            </div>

            <div className="loaderMask loaderRight">
              <motion.h2
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.27,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                KUMAR
              </motion.h2>
            </div>
          </div>

          <div className="loaderBottom">
            <span>LOADING EXPERIENCE</span>

            <div className="loaderLine">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.35,
                  delay: 0.15,
                  ease: [0.65, 0, 0.35, 1],
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
