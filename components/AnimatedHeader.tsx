"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function AnimatedHeader() {
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const previousScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const previous = previousScroll.current;

      // Full header at top
      if (current < 70) {
        setCompact(false);
        setHidden(false);
        setMenuOpen(false);
      } else {
        // Morph into pill
        setCompact(true);

        // Hide when scrolling down after hero area
        if (current > previous && current > 400) {
          setHidden(true);
          setMenuOpen(false);
        }

        // Bring it back immediately when scrolling upward
        if (current < previous - 2) {
          setHidden(false);
        }
      }

      previousScroll.current = current;
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.header
      className={`siteHeader ${compact ? "compact" : ""} ${
        menuOpen ? "opened" : ""
      }`}
      initial={{
        opacity: 0,
        y: -25,
      }}
      animate={{
        opacity: hidden ? 0 : 1,
        y: hidden ? -120 : 0,
      }}
      transition={{
        duration: 0.55,
        delay: compact ? 0 : 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="headerInner">
        {/* Identity */}
        <a href="#" className="identity">
          <div className="avatar">
            <img src="/images/profile.jpg" alt="Mritunjay Kumar" />
            <span className="online" />
          </div>

          <span className="name">Mritunjay Kumar.</span>
        </a>

        {/* Normal navigation */}
        <nav className="normalNav">
          <a href="#work">WORK</a>
          <a href="#playground">PLAYGROUND</a>
          <a href="#about">ABOUT</a>
        </nav>

        {/* Compact navigation button */}
        <button
          className="dotButton"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Expanded pill menu */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            className="compactMenu"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <nav>
              <a href="#work" onClick={() => setMenuOpen(false)}>
                <small>01</small>
                <span>WORK</span>
                <span>↗</span>
              </a>

              <a href="#playground" onClick={() => setMenuOpen(false)}>
                <small>02</small>
                <span>PLAYGROUND</span>
                <span>↗</span>
              </a>

              <a href="#about" onClick={() => setMenuOpen(false)}>
                <small>03</small>
                <span>ABOUT</span>
                <span>↗</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
