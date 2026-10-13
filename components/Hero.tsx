"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const TRAIL_IMAGES = [
  "/projects/project-1.jpg",
  "/projects/project-2.jpg",
  "/projects/project-3.jpg",
  "/playground/playground-1.jpg",
  "/playground/playground-2.jpg",
  "/playground/playground-3.jpg",
  "/playground/playground-4.jpg",
];

interface TrailItem {
  id: number;
  x: number;
  y: number;
  image: string;
  rotation: number;
}

export default function Hero() {
  const containerRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const lastSpawnRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const imgIndexRef = useRef(0);
  const idCounterRef = useRef(0);

  // 1. Mouse Image Trail Spawner
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x - lastSpawnRef.current.x;
    const dy = y - lastSpawnRef.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 70) {
      lastSpawnRef.current = { x, y };
      const currentImg = TRAIL_IMAGES[imgIndexRef.current % TRAIL_IMAGES.length];
      imgIndexRef.current += 1;

      const newId = idCounterRef.current++;
      const newItem: TrailItem = {
        id: newId,
        x,
        y,
        image: currentImg,
        rotation: (Math.random() - 0.5) * 16,
      };

      setTrail((prev) => [...prev.slice(-7), newItem]);

      // Remove after 800ms
      setTimeout(() => {
        setTrail((prev) => prev.filter((item) => item.id !== newId));
      }, 750);
    }
  }, []);

  // 2. Interactive Canvas Particles Network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    const numParticles = 38;
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.4 + 0.2,
      });
    }

    const mouse = { x: -1000, y: -1000 };

    const handleCanvasMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleCanvasMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          p.x -= (dx / dist) * 1.4;
          p.y -= (dy / dist) * 1.4;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.35})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist2 / 110) * 0.08})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleCanvasMouseMove);
    };
  }, []);

  const name = "Mritunjay Kumar";

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="hero-jingjing"
      id="top"
    >
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />

      {/* Interactive Cursor Image Trail Elements */}
      <div className="hero-trail-container" aria-hidden="true">
        <AnimatePresence>
          {trail.map((item) => (
            <motion.div
              key={item.id}
              className="trail-card"
              style={{
                left: item.x,
                top: item.y,
              }}
              initial={{
                opacity: 0,
                scale: 0.65,
                rotate: item.rotation,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: 0.88,
                scale: 1,
                rotate: item.rotation,
                x: "-50%",
                y: "-50%",
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.35 },
              }}
              transition={{
                duration: 0.45,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <img src={item.image} alt="" className="trail-card-img" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Top Meta info */}
      <div className="hero-top-bar container">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-badge-left"
        >
          <span className="badge-text">CREATIVE DEVELOPER</span>
          <span className="badge-sub">&amp; TECHNOLOGIST</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-badge-right"
        >
          <span className="badge-location">
            <span className="dot-loop" /> RANCHI, INDIA
          </span>
          <span className="badge-edition">© 2026 EDITION</span>
        </motion.div>
      </div>

      {/* Centerpiece Name Reveal & Editorial Tagline */}
      <div className="hero-center-content">
        <h1 className="hero-center-title">
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              className="hero-letter"
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.85,
                delay: 0.2 + index * 0.032,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="hero-center-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          Ranchi-based creative developer who loves beautiful things and blends code,
          design, and a little vibe-coding into every build.
        </motion.p>
      </div>

      {/* Jingjing Han Signature Animated Scroll Indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <span className="scroll-label">SCROLL</span>
        <span className="scroll-track">
          <span className="scroll-line-drop" />
        </span>
      </motion.div>
    </section>
  );
}
