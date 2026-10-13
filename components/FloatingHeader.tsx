"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingHeader() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      const prevScrollY = lastScrollY.current;
      const diff = currentScrollY - prevScrollY;

      // 1. At the very top (hero zone <= 120px):
      // Hide the floating pill so the initial top navbar is active
      if (currentScrollY <= 120) {
        setVisible(false);
        setMenuOpen(false);
      }
      // 2. Hand-off zone (120px to 400px):
      // Convert and display the compact floating pill as shown in the design
      else if (currentScrollY > 120 && currentScrollY <= 400) {
        setVisible(true);
      }
      // 3. If user opened the 3-dots menu, keep it visible
      else if (menuOpen) {
        setVisible(true);
      }
      // 4. Scrolling UP (> 400px):
      // User is scrolling backwards / seeking navigation -> reveal pill instantly
      else if (diff < -5) {
        setVisible(true);
      }
      // 5. Scrolling DOWN (> 400px):
      // User is actively reading content down the page -> hide pill to clear screen
      else if (diff > 5) {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          className={`floatingHeader ${menuOpen ? "open" : ""}`}
          initial={{
            y: -80,
            x: "-50%",
            opacity: 0,
            scale: 0.94,
          }}
          animate={{
            y: 0,
            x: "-50%",
            opacity: 1,
            scale: 1,
          }}
          exit={{
            y: -80,
            x: "-50%",
            opacity: 0,
            scale: 0.94,
          }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="topRow">
            {/* Identity / Avatar + Name */}
            <a href="#top" className="identity" aria-label="Mritunjay Kumar">
              <div className="avatar">
                <img src="/images/profile.jpg" alt="Mritunjay Kumar" />
                <span className="online" />
              </div>
              <span className="name">Mritunjay Kumar.</span>
            </a>

            {/* Three Green Dots Toggle */}
            <button
              type="button"
              className="menuButton"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          {/* Collapsible Navigation Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="menu"
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
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <nav>
                  <a href="#work" onClick={() => setMenuOpen(false)}>
                    <span>01</span> WORK
                  </a>
                  <a href="#playground" onClick={() => setMenuOpen(false)}>
                    <span>02</span> PLAYGROUND
                  </a>
                  <a href="#about" onClick={() => setMenuOpen(false)}>
                    <span>03</span> ABOUT
                  </a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>

          <style jsx>{`
            .floatingHeader {
              position: fixed;
              top: 18px;
              left: 50%;
              transform: translateX(-50%);
              width: min(92vw, 490px);
              background: rgba(10, 10, 12, 0.9);
              border: 1px solid rgba(255, 255, 255, 0.12);
              border-radius: 9999px;
              color: #fff;
              z-index: 99990;
              overflow: hidden;
              box-shadow: 0 14px 40px rgba(0, 0, 0, 0.45);
              backdrop-filter: blur(20px);
              -webkit-backdrop-filter: blur(20px);
              transition:
                border-radius 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            }

            .floatingHeader.open {
              border-radius: 28px;
              width: min(92vw, 490px);
            }

            .topRow {
              height: 58px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 6px 18px 6px 8px;
            }

            /* IDENTITY */
            .identity {
              display: flex;
              align-items: center;
              gap: 12px;
              text-decoration: none;
              color: inherit;
            }

            .avatar {
              width: 44px;
              height: 44px;
              position: relative;
              flex-shrink: 0;
              border-radius: 50%;
            }

            .avatar img {
              width: 100%;
              height: 100%;
              display: block;
              object-fit: cover;
              border-radius: 50%;
              border: 1.5px solid rgba(255, 255, 255, 0.2);
            }

            .online {
              position: absolute;
              width: 9px;
              height: 9px;
              right: 0px;
              bottom: 1px;
              border-radius: 50%;
              background: #5aaa17;
              border: 2px solid #0a0a0c;
              box-shadow: 0 0 8px rgba(90, 170, 23, 0.6);
            }

            .name {
              font-family: var(--font-space), var(--font-inter), sans-serif;
              font-size: 16px;
              font-weight: 500;
              letter-spacing: -0.02em;
              color: #ffffff;
            }

            /* THREE GREEN DOTS */
            .menuButton {
              border: 0;
              background: transparent;
              padding: 10px 4px 10px 14px;
              display: flex;
              align-items: center;
              gap: 6px;
              cursor: pointer;
              transition: opacity 0.2s ease;
            }

            .menuButton:hover {
              opacity: 0.85;
            }

            .menuButton span {
              width: 6.5px;
              height: 6.5px;
              display: block;
              border-radius: 50%;
              background: #5aaa17;
              transition:
                transform 0.25s ease,
                background-color 0.25s ease;
            }

            .menuButton:hover span:nth-child(1) {
              transform: translateX(-2.5px);
            }

            .menuButton:hover span:nth-child(3) {
              transform: translateX(2.5px);
            }

            /* MENU */
            .menu {
              overflow: hidden;
            }

            .menu nav {
              padding: 4px 20px 20px;
            }

            .menu a {
              display: grid;
              grid-template-columns: 40px 1fr;
              align-items: center;
              padding: 14px 4px;
              border-top: 1px solid rgba(255, 255, 255, 0.1);
              font-family: var(--font-space), sans-serif;
              font-size: 19px;
              letter-spacing: -0.02em;
              color: #fff;
              transition:
                padding-left 0.25s ease,
                color 0.25s ease;
            }

            .menu a:hover {
              padding-left: 8px;
              color: #5aaa17;
            }

            .menu a span {
              font-family: var(--font-inter), sans-serif;
              font-size: 10px;
              color: rgba(255, 255, 255, 0.4);
              letter-spacing: 0.08em;
            }

            @media (max-width: 600px) {
              .floatingHeader {
                top: 12px;
                width: calc(100% - 24px);
              }

              .floatingHeader.open {
                width: calc(100% - 24px);
                border-radius: 24px;
              }

              .topRow {
                height: 52px;
                padding: 5px 14px 5px 6px;
              }

              .avatar {
                width: 40px;
                height: 40px;
              }

              .name {
                font-size: 15px;
              }

              .menuButton {
                gap: 5px;
              }

              .menuButton span {
                width: 6px;
                height: 6px;
              }

              .menu nav {
                padding: 4px 16px 18px;
              }

              .menu a {
                font-size: 17px;
                padding: 12px 2px;
              }
            }
          `}</style>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
