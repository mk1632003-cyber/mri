"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const audiencePitches = [
  {
    id: "anyone",
    label: "For anyone",
    text: "I'm Mritunjay — a creative developer and technologist who blends code, design, and a little vibe-coding into digital experiences that feel genuinely engaging, human, and memorable.",
  },
  {
    id: "recruiters",
    label: "Recruiters",
    text: "Full stack engineering mindset with deep proficiency in TypeScript, Next.js, React, Node.js, and modern styling. Strong problem-solving instincts, speed to shipping, and production-grade code quality.",
  },
  {
    id: "designers",
    label: "Product Designers",
    text: "A developer who genuinely cares about typography, sub-pixel alignments, fluid 60fps Framer Motion curves, and design systems. Bringing Figma designs to life with zero aesthetic compromises.",
  },
  {
    id: "managers",
    label: "Product Managers",
    text: "High-velocity product building from 0 to 1. Turning raw ideas and user feedback into shipped web applications, interactive prototypes, and high-converting digital surfaces.",
  },
  {
    id: "engineers",
    label: "Engineers",
    text: "Clean architecture, component composability, type safety, and minimal bundle sizes. Focused on building maintainable software that scales smoothly without developer headaches.",
  },
];

export default function AudienceIntro() {
  const [activeAudience, setActiveAudience] = useState(0);

  return (
    <section id="intro" className="audience-section">
      <div className="container">
        <div className="audience-header">
          <p className="fw-badge">
            <span className="dot-loop" />
            Since 2024
          </p>
          <span className="section-label">INTERACTIVE NOTEBOOK</span>
        </div>

        <div className="audience-content">
          {/* Left audience tabs */}
          <div className="audience-nav">
            <h2 className="audience-title">Intro</h2>
            <nav className="audience-tabs">
              {audiencePitches.map((pitch, idx) => (
                <button
                  key={pitch.id}
                  type="button"
                  onClick={() => setActiveAudience(idx)}
                  className={`audience-tab-btn ${activeAudience === idx ? "active" : ""}`}
                >
                  <span className="tab-indicator" />
                  {pitch.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right notepad card */}
          <div className="notepad-card">
            <div className="notepad-inner">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeAudience}
                  className="notepad-text"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                >
                  {audiencePitches[activeAudience].text}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
