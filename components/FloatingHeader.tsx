"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingHeader() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setVisible(scrollY > 350);
      if (scrollY <= 350) {
        setMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          className={`floatingHeader ${menuOpen ? "open" : ""}`}
          initial={{
            y: -100,
            x: "-50%",
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            y: 0,
            x: "-50%",
            opacity: 1,
            scale: 1,
          }}
          exit={{
            y: -100,
            x: "-50%",
            opacity: 0,
            scale: 0.92,
          }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="topRow">
            <a href="#top" className="identity">
              <div className="avatar">
                <img src="/images/profile.jpg" alt="Mritunjay Kumar" />
                <span className="online" />
              </div>
              <span className="name"> Mritunjay Kumar. </span>
            </a>

            <button
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
              width: min(94%, 550px);
              background: rgba(8, 8, 8, 0.94);
              border: 1px solid rgba(255, 255, 255, 0.12);
              border-radius: 100px;
              color: #fff;
              z-index: 99990;
              overflow: hidden;
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
              backdrop-filter: blur(18px);
              -webkit-backdrop-filter: blur(18px);
              transition:
                border-radius 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                width 0.45s cubic-bezier(0.16, 1, 0.3, 1);
            }

            .floatingHeader.open {
              border-radius: 32px;
              width: min(94%, 550px);
            }

            .topRow {
              height: 74px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 7px 24px 7px 8px;
            }

            /* IDENTITY */
            .identity {
              display: flex;
              align-items: center;
              gap: 14px;
            }

            .avatar {
              width: 60px;
              height: 60px;
              position: relative;
              flex-shrink: 0;
              border-radius: 50%;
              overflow: visible;
            }

            .avatar img {
              width: 100%;
              height: 100%;
              display: block;
              object-fit: cover;
              border-radius: 50%;
            }

            .online {
              position: absolute;
              width: 10px;
              height: 10px;
              right: 1px;
              bottom: 4px;
              border-radius: 50%;
              background: #5aaa17;
              border: 2px solid #080808;
            }

            .name {
              font-family: var(--font-space);
              font-size: 19px;
              font-weight: 600;
              letter-spacing: -0.04em;
            }

            /* THREE DOTS */
            .menuButton {
              border: 0;
              background: transparent;
              padding: 14px 0 14px 14px;
              display: flex;
              align-items: center;
              gap: 8px;
              cursor: pointer;
            }

            .menuButton span {
              width: 8px;
              height: 8px;
              display: block;
              border-radius: 50%;
              background: #5aaa17;
              transition:
                transform 0.3s ease,
                opacity 0.3s ease;
            }

            .menuButton:hover span:nth-child(1) {
              transform: translateX(-3px);
            }

            .menuButton:hover span:nth-child(3) {
              transform: translateX(3px);
            }

            /* MENU */
            .menu {
              overflow: hidden;
            }

            .menu nav {
              padding: 5px 24px 25px;
            }

            .menu a {
              display: grid;
              grid-template-columns: 45px 1fr;
              align-items: center;
              padding: 17px 4px;
              border-top: 1px solid rgba(255, 255, 255, 0.15);
              font-family: var(--font-space);
              font-size: 22px;
              letter-spacing: -0.03em;
              transition: padding-left 0.3s ease;
            }

            .menu a:hover {
              padding-left: 10px;
            }

            .menu a span {
              font-family: var(--font-inter);
              font-size: 9px;
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
                border-radius: 25px;
              }

              .topRow {
                height: 64px;
                padding: 6px 19px 6px 6px;
              }

              .avatar {
                width: 52px;
                height: 52px;
              }

              .name {
                font-size: 16px;
              }

              .menuButton {
                gap: 6px;
              }

              .menuButton span {
                width: 7px;
                height: 7px;
              }

              .menu nav {
                padding: 5px 18px 20px;
              }

              .menu a {
                font-size: 19px;
                padding: 15px 3px;
              }
            }
          `}</style>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
