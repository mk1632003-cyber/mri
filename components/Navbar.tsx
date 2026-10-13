"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Menu, X } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setScrolledPast(scrollY > 120);
      if (scrollY > 120) {
        setMobileOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {!scrolledPast && (
        <motion.header
          className="pill-navbar-wrapper"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pill-navbar">
            {/* Brand / Avatar */}
            <a href="#top" className="nav-brand" aria-label="Mritunjay Kumar">
              <span className="avatar-wrap">
                <img
                  src="/images/profile.jpg"
                  alt="Mritunjay Kumar"
                  className="nav-avatar"
                />
                <span className="dot-loop" />
              </span>
              <span className="nav-name">
                Mritunjay Kumar<span className="nav-dot-accent">.</span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="nav-desktop">
              <nav className="nav-links-menu">
                <a href="#work" className="nav-item">
                  Work
                  <span className="nav-hover-line" />
                </a>
                <a href="#playground" className="nav-item">
                  Playground
                  <span className="nav-hover-line" />
                </a>
                <a href="#web" className="nav-item">
                  Web
                  <span className="nav-hover-line" />
                </a>
                <a href="#about" className="nav-item">
                  About
                  <span className="nav-hover-line" />
                </a>
              </nav>

              <span className="nav-divider" aria-hidden="true" />

              {/* Social Icons */}
              <div className="nav-socials">
                <a
                  href="https://github.com/mk1632003-cyber"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="social-btn"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="social-btn"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href="mailto:mk1632003@gmail.com"
                  aria-label="Email"
                  className="social-btn"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                className="mobile-drawer"
                initial={{ opacity: 0, y: -15, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <nav className="mobile-nav-links">
                  <a href="#work" onClick={() => setMobileOpen(false)}>Work</a>
                  <a href="#playground" onClick={() => setMobileOpen(false)}>Playground</a>
                  <a href="#web" onClick={() => setMobileOpen(false)}>Web</a>
                  <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
                </nav>

                <div className="mobile-socials">
                  <a href="mailto:mk1632003@gmail.com">mk1632003@gmail.com</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
