"use client";

import { useState } from "react";
import { motion, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const webProjects = [
  {
    id: "aetherius",
    number: "01",
    title: "Aetherius AI",
    category: "Futuristic Platform",
    image: "/projects/project-1.jpg",
  },
  {
    id: "quantumflow",
    number: "02",
    title: "QuantumFlow",
    category: "Cloud Dashboard",
    image: "/projects/project-2.jpg",
  },
  {
    id: "flux",
    number: "03",
    title: "Flux Dynamics",
    category: "Generative Lab",
    image: "/projects/project-3.jpg",
  },
  {
    id: "fluid-tech",
    number: "04",
    title: "Fluid Studio",
    category: "WebGL Experience",
    image: "/playground/playground-1.jpg",
  },
];

export default function WebDesignList() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const springX = useSpring(0, { stiffness: 350, damping: 28 });
  const springY = useSpring(0, { stiffness: 350, damping: 28 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    springX.set(e.clientX - rect.left);
    springY.set(e.clientY - rect.top);
  };

  return (
    <section id="web" className="web-section">
      <div className="container">
        <div className="web-header">
          <div className="web-title-wrap">
            <span className="dot-loop" />
            <h2 className="web-title">Web Design</h2>
          </div>
          <span className="section-label">SELECTED INTERFACES (04)</span>
        </div>

        <p className="web-subtitle">
          Digital surfaces engineered to be visually arresting, technologically sharp, and tuned for performance.
        </p>

        {/* List of projects */}
        <div
          className="web-list-container"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {webProjects.map((proj, idx) => (
            <a
              key={proj.id}
              href="#work"
              data-cursor="view"
              className="web-row"
              onMouseEnter={() => setHoveredIdx(idx)}
            >
              <div className="web-row-left">
                <span className="web-row-num">{proj.number}</span>
                <h3 className="web-row-title">{proj.title}</h3>
              </div>

              <div className="web-row-right">
                <span className="web-row-cat">{proj.category}</span>
                <span className="web-row-arrow">
                  <ArrowUpRight size={28} />
                </span>
              </div>
            </a>
          ))}

          {/* Floating Image Preview on Hover */}
          <motion.div
            className="floating-preview"
            style={{
              x: springX,
              y: springY,
              opacity: hoveredIdx !== null ? 1 : 0,
              scale: hoveredIdx !== null ? 1 : 0.85,
            }}
          >
            {hoveredIdx !== null && (
              <img
                src={webProjects[hoveredIdx].image}
                alt={webProjects[hoveredIdx].title}
                className="floating-preview-img"
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
