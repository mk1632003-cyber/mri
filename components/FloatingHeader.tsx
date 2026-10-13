"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const previous = lastScroll.current;

      /*
       * STATE 1
       * Top of page = large header
       */
      if (current < 80) {
        setScrolled(false);
        setHidden(false);
        setMenuOpen(false);
      } else {
        /*
         * STATE 2
         * Header becomes floating pill
         */
        setScrolled(true);

        /*
         * STATE 3
         * Scroll down = hide
         * Scroll up = show
         */
        if (current > previous && current > 450) {
          setHidden(true);
          setMenuOpen(false);
        }
        if (current < previous) {
          setHidden(false);
        }
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`smartHeader ${scrolled ? "scrolled" : ""} ${
        menuOpen ? "menuOpen" : ""
      }`}
      initial={false}
      animate={{
        y: hidden ? -140 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* MAIN BAR */}
      <div className="headerBar">
        {/* LEFT */}
        <a href="#top" className="identity">
          <div className="avatar">
            <img src="/images/profile.jpg" alt="Mritunjay Kumar" />
            <span className="status" />
          </div>
          <span className="name"> Mritunjay Kumar. </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="desktopNav">
          <a href="#work">WORK</a>
          <a href="#playground">PLAYGROUND</a>
          <a href="#about">ABOUT</a>
        </nav>

        {/* DOT BUTTON */}
        <button
          className="dots"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* EXPANDING MENU */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            className="dropMenu"
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

      <style jsx>{`
        /* ====================================
           HEADER — INITIAL STATE
           ==================================== */
        .smartHeader {
          position: fixed;
          z-index: 99990;
          top: 18px;
          left: 24px;
          right: 24px;
          color: #fff;
          transition:
            left 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            right 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            top 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            width 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            background 0.45s ease,
            color 0.45s ease,
            border-radius 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            border 0.45s ease,
            box-shadow 0.45s ease;
        }

        .headerBar {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5px;
        }

        /* ====================================
           IDENTITY
           ==================================== */
        .identity {
          display: flex;
          align-items: center;
          gap: 13px;
          flex-shrink: 0;
          color: inherit;
          text-decoration: none;
        }

        .avatar {
          position: relative;
          width: 52px;
          height: 52px;
          transition:
            width 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            height 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          display: block;
        }

        .status {
          position: absolute;
          right: 0px;
          bottom: 3px;
          width: 9px;
          height: 9px;
          background: #64b51c;
          border-radius: 50%;
          border: 2px solid #070709;
        }

        .name {
          font-family: var(--font-space);
          font-size: 20px;
          font-weight: 600;
          letter-spacing: -0.045em;
        }

        /* ====================================
           NORMAL NAVIGATION
           ==================================== */
        .desktopNav {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 34px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.09em;
        }

        .desktopNav a {
          position: relative;
          color: inherit;
          text-decoration: none;
        }

        .desktopNav a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0;
          height: 1px;
          background: currentColor;
          transition: width 0.3s ease;
        }

        .desktopNav a:hover::after {
          width: 100%;
        }

        /* ====================================
           DOTS
           ==================================== */
        .dots {
          border: 0;
          background: transparent;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 14px;
          cursor: pointer;
        }

        .dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #65a917;
          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        /*
         * Hide dots while header is full width on desktop.
         */
        .smartHeader:not(.scrolled) .dots {
          opacity: 0;
          pointer-events: none;
        }

        /* ====================================
           SCROLLED / PILL STATE
           ==================================== */
        .smartHeader.scrolled {
          top: 14px;
          left: 0;
          right: 0;
          margin-inline: auto;
          width: min(550px, calc(100% - 30px));
          background: rgba(7, 7, 7, 0.94);
          color: #fff;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 14px 50px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .smartHeader.scrolled .headerBar {
          height: 70px;
          padding: 6px 17px 6px 7px;
        }

        .smartHeader.scrolled .avatar {
          width: 56px;
          height: 56px;
        }

        .smartHeader.scrolled .status {
          border-color: #070707;
        }

        /*
         * Original navigation disappears when it becomes the pill.
         */
        .smartHeader.scrolled .desktopNav {
          opacity: 0;
          pointer-events: none;
          transform: translateX(-50%) translateY(-10px);
          transition:
            opacity 0.25s ease,
            transform 0.25s ease;
        }

        .smartHeader.scrolled .dots {
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.3s ease 0.2s;
        }

        /* ====================================
           OPEN MENU
           ==================================== */
        .smartHeader.menuOpen {
          border-radius: 30px;
        }

        .dropMenu {
          overflow: hidden;
        }

        .dropMenu nav {
          padding: 2px 22px 22px;
        }

        .dropMenu a {
          display: grid;
          grid-template-columns: 45px 1fr auto;
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          padding: 16px 3px;
          color: inherit;
          text-decoration: none;
          transition: padding-left 0.25s ease;
        }

        .dropMenu a:hover {
          padding-left: 10px;
        }

        .dropMenu small {
          color: rgba(255, 255, 255, 0.4);
          font-size: 9px;
        }

        .dropMenu a > span:nth-child(2) {
          font-family: var(--font-space);
          font-size: 20px;
        }

        /* ====================================
           MOBILE
           ==================================== */
        @media (max-width: 768px) {
          .smartHeader {
            left: 14px;
            right: 14px;
            top: 10px;
          }

          .headerBar {
            height: 60px;
          }

          .avatar {
            width: 45px;
            height: 45px;
          }

          .name {
            font-size: 16px;
          }

          .desktopNav {
            display: none;
          }

          /*
           * We need dots on mobile even before scrolling.
           */
          .smartHeader:not(.scrolled) .dots {
            opacity: 1;
            pointer-events: auto;
          }

          .smartHeader.scrolled {
            top: 10px;
            width: calc(100% - 24px);
          }

          .smartHeader.scrolled .headerBar {
            height: 62px;
          }

          .smartHeader.scrolled .avatar {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </motion.header>
  );
}
