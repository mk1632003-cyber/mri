"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [coords, setCoords] = useState({ x: 50, y: 40 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({ x, y });
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={footerRef}
      onMouseMove={handleMouseMove}
      id="contact"
      className="footer-spotlight-section"
      style={{
        background: `radial-gradient(40rem 32rem at ${coords.x}% ${coords.y}%, rgba(217, 255, 67, 0.08), transparent 70%), linear-gradient(180deg, #07090d 0%, #0a0c11 100%)`,
      }}
    >
      <div className="container footer-content-wrap">
        {/* Giant Centered Headline */}
        <div className="footer-headline-wrap">
          <motion.h2
            className="footer-hero-h2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="block hover-word">Let&apos;s</span>
            <span className="block hover-word accent-word">Collaborate!</span>
          </motion.h2>
        </div>

        {/* 3-Column Editorial Grid */}
        <footer className="footer-meta-grid">
          <div className="footer-columns">
            {/* Column 1: Menu */}
            <div className="footer-col">
              <p className="footer-col-label">Menu</p>
              <ul className="footer-col-links">
                <li><a href="#top">Home</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#playground">Playground</a></li>
                <li><a href="#web">Web</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>

            {/* Column 2: Connect */}
            <div className="footer-col">
              <p className="footer-col-label">Connect</p>
              <ul className="footer-col-links">
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    LinkedIn <ArrowUpRight size={14} className="inline-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    GitHub <ArrowUpRight size={14} className="inline-icon" />
                  </a>
                </li>
                <li>
                  <a href="mailto:mk1632003@gmail.com">
                    Email <ArrowUpRight size={14} className="inline-icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Resume <ArrowUpRight size={14} className="inline-icon" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Say Hello */}
            <div className="footer-col hello-col">
              <p className="footer-col-label">Say Hello</p>
              <a
                href="mailto:mk1632003@gmail.com"
                className="footer-email-link"
              >
                mk1632003@gmail.com
              </a>
              <div className="footer-status-row">
                <span className="dot-loop" />
                <span className="footer-status-text">
                  Available for work — Ranchi, India
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Back to Top */}
          <div className="footer-sub-bar">
            <p className="footer-copyright">
              © 2026 Mritunjay Kumar — All rights reserved
            </p>

            <button
              type="button"
              onClick={scrollTop}
              className="footer-back-top-btn"
            >
              Back to top
              <ArrowUp size={16} />
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
