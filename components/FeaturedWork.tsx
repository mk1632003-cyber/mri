"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Aetherius AI",
    category: "AI Platform & Interaction",
    year: "2026",
    description:
      "Next-generation conversational interface and autonomous AI workspace engineered for intuitive multimodal interactions and fluid latency-free workflows.",
    image: "/projects/project-1.jpg",
    tags: ["Next.js", "AI Workspace", "WebGL", "TypeScript"],
  },
  {
    number: "02",
    title: "QuantumFlow",
    category: "Cloud Observability",
    year: "2026",
    description:
      "High-throughput enterprise telemetry dashboard offering real-time system observability, dynamic infrastructure topologies, and instant analytics visualization.",
    image: "/projects/project-2.jpg",
    tags: ["Dashboard", "Telemetry", "React", "Data Viz"],
  },
  {
    number: "03",
    title: "Flux Dynamics",
    category: "Creative Computing & WebGL",
    year: "2025",
    description:
      "Interactive digital experiment exploring real-time physics simulations, custom GLSL shaders, and audio-reactive 3D particle constellations.",
    image: "/projects/project-3.jpg",
    tags: ["Three.js", "GLSL Shaders", "Creative Coding"],
  },
  {
    number: "04",
    title: "Fluid Studio",
    category: "Brand & Interactive Experience",
    year: "2025",
    description:
      "Digital surface engineered to be visually arresting, technologically sharp, and tuned for extreme fluid 60fps micro-animations.",
    image: "/playground/playground-1.jpg",
    tags: ["Motion", "Brand Design", "Framer Motion"],
  },
];

export default function FeaturedWork() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevProject = () => {
    setCurrentIdx((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIdx((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const current = projects[currentIdx];

  return (
    <section id="work" className="featured-work-section">
      <div className="container">
        {/* Section Header */}
        <div className="fw-header">
          <p className="fw-badge">
            <span className="dot-loop" />
            Since 2024
          </p>
          <h2 className="fw-title">Featured Work</h2>
          <p className="fw-sub">
            I blend technology, creativity, and empathy to craft seamless experiences
            that bridge people, spaces, and services.
          </p>
        </div>

        {/* Carousel Viewport with Prev / Next */}
        <div className="fw-carousel-row">
          <button
            type="button"
            onClick={prevProject}
            aria-label="Previous project"
            className="carousel-nav-btn prev-btn"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Large Main Showcase Card */}
          <div className="fw-card-stage" data-cursor="view">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                className="fw-card-inner"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className="fw-card-img"
                />

                {/* Top Number Counter Pill */}
                <div className="fw-card-counter">
                  {current.number} / 0{projects.length}
                </div>

                {/* Bottom Gradient and Info */}
                <div className="fw-card-info">
                  <div className="fw-card-tags">
                    {current.tags.map((t) => (
                      <span key={t} className="fw-tag-pill">{t}</span>
                    ))}
                  </div>
                  <h3 className="fw-card-heading">{current.title}</h3>
                  <p className="fw-card-desc">{current.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={nextProject}
            aria-label="Next project"
            className="carousel-nav-btn next-btn"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Horizontal Project Selector Tabs */}
        <div className="fw-tabs-row">
          {projects.map((proj, idx) => (
            <button
              key={proj.title}
              type="button"
              onClick={() => setCurrentIdx(idx)}
              className={`fw-tab-btn ${idx === currentIdx ? "active" : ""}`}
            >
              {proj.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
