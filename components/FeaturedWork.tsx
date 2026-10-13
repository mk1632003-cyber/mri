"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Aetherius AI",
    category: "AI Platform & Interaction",
    year: "2026",
    description:
      "Next-generation conversational interface and autonomous AI workspace engineered for intuitive multimodal interactions and fluid latency-free workflows.",
    image: "/projects/project-1.jpg",
    background: "#121316",
  },
  {
    number: "02",
    title: "QuantumFlow",
    category: "Cloud Observability",
    year: "2026",
    description:
      "High-throughput enterprise telemetry dashboard offering real-time system observability, dynamic infrastructure topologies, and instant analytics visualization.",
    image: "/projects/project-2.jpg",
    background: "#16161a",
  },
  {
    number: "03",
    title: "Flux Dynamics",
    category: "Creative Computing & WebGL",
    year: "2025",
    description:
      "Interactive digital experiment exploring real-time physics simulations, custom GLSL shaders, and audio-reactive 3D particle constellations.",
    image: "/projects/project-3.jpg",
    background: "#111215",
  },
  {
    number: "04",
    title: "Fluid Studio",
    category: "Brand & Interactive Experience",
    year: "2025",
    description:
      "Digital surface engineered to be visually arresting, technologically sharp, and tuned for extreme fluid 60fps micro-animations.",
    image: "/playground/playground-1.jpg",
    background: "#141519",
  },
];

export default function FeaturedWork() {
  return (
    <section className="featuredWork" id="work">
      <div className="workHeader container">
        <span className="section-label">02 / FEATURED WORK</span>

        <div className="workTitle">
          <RevealTitle>SELECTED</RevealTitle>
          <RevealTitle right>WORK</RevealTitle>
        </div>
      </div>

      <div className="projectsList">
        {projects.map((project, index) => (
          <Project key={project.number} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function Project({
  project,
  index,
}: {
  project: {
    number: string;
    title: string;
    category: string;
    year: string;
    description: string;
    image: string;
    background: string;
  };
  index: number;
}) {
  const projectRef = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, {
    stiffness: 180,
    damping: 22,
    mass: 0.2,
  });

  const cursorY = useSpring(mouseY, {
    stiffness: 180,
    damping: 22,
    mass: 0.2,
  });

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.12, 1, 1.08]
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - bounds.left);
    mouseY.set(event.clientY - bounds.top);
  };

  return (
    <article
      ref={projectRef}
      className={`project ${index % 2 !== 0 ? "reverse" : ""}`}
    >
      <div className="projectInner container">
        {/* IMAGE */}
        <motion.div
          className="projectVisual"
          style={{
            background: project.background,
          }}
          initial={{
            clipPath:
              index % 2 === 0
                ? "inset(0 100% 0 0)"
                : "inset(0 0 0 100%)",
          }}
          whileInView={{
            clipPath: "inset(0 0% 0 0%)",
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1.15,
            ease: [0.76, 0, 0.24, 1],
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            style={{
              y: imageY,
              scale: imageScale,
            }}
          />

          {/* FOLLOW CURSOR */}
          <motion.div
            className="viewCursor"
            style={{
              left: cursorX,
              top: cursorY,
            }}
            animate={{
              scale: hovered ? 1 : 0,
              opacity: hovered ? 1 : 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <span>VIEW</span>
            <ArrowUpRight size={17} />
          </motion.div>
        </motion.div>

        {/* INFORMATION */}
        <motion.div
          className="projectInfo"
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            delay: 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="projectMeta">
            <span>{project.number}</span>
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <div className="projectTitleMask">
            <motion.h3
              initial={{
                y: "110%",
              }}
              whileInView={{
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {project.title}
            </motion.h3>
          </div>

          <p>{project.description}</p>

          <motion.div
            className="projectLine"
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.1,
              delay: 0.3,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        </motion.div>
      </div>
    </article>
  );
}

function RevealTitle({
  children,
  right = false,
}: {
  children: React.ReactNode;
  right?: boolean;
}) {
  return (
    <div className={`workTitleMask ${right ? "right" : ""}`}>
      <motion.h2
        initial={{
          y: "110%",
          rotate: 2,
        }}
        whileInView={{
          y: 0,
          rotate: 0,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {children}
      </motion.h2>
    </div>
  );
}
