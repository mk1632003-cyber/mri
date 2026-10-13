"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const heroEase = [0.76, 0, 0.24, 1] as const;

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* 1. Hero Info */}
      <motion.div
        className="heroInfo container"
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.85,
          ease: heroEase,
        }}
      >
        <span>CREATIVE DEVELOPER / TECHNOLOGIST</span>
        <span className="heroLocation">RANCHI, INDIA</span>
      </motion.div>

      {/* 2. Giant Editorial WordMask Titles */}
      <div className="nameWrapper">
        <div className="nameLine">
          <div className="wordMask">
            <motion.h1
              initial={{
                y: "115%",
                rotate: 2,
              }}
              animate={{
                y: 0,
                rotate: 0,
              }}
              transition={{
                duration: 1.15,
                delay: 0.35,
                ease: heroEase,
              }}
            >
              MRITUNJAY
            </motion.h1>
          </div>
        </div>

        <div className="nameLine secondName">
          <div className="wordMask">
            <motion.h1
              initial={{
                y: "115%",
                rotate: 2,
              }}
              animate={{
                y: 0,
                rotate: 0,
              }}
              transition={{
                duration: 1.15,
                delay: 0.48,
                ease: heroEase,
              }}
            >
              KUMAR
            </motion.h1>
          </div>
        </div>
      </div>

      {/* 3. Hero Bottom with breathing arrow */}
      <motion.div
        className="heroBottom container"
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: heroEase,
        }}
      >
        <a href="#work" className="scrollButton">
          <motion.span
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={17} />
          </motion.span>
          <span>SCROLL TO EXPLORE</span>
        </a>

        <p>
          BLENDING CODE, DESIGN<br />AND A LITTLE VIBE-CODING
        </p>
      </motion.div>
    </section>
  );
}
