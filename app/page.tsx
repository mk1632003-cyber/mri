"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import AudienceIntro from "@/components/AudienceIntro";
import FeaturedWork from "@/components/FeaturedWork";
import WebDesignList from "@/components/WebDesignList";
import Playground from "@/components/Playground";
import About from "@/components/About";
import Footer from "@/components/Footer";

function MarqueeContent() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "35px",
        paddingRight: "35px",
        whiteSpace: "nowrap",
        fontFamily: "var(--font-space), sans-serif",
        fontSize: "clamp(18px, 2.2vw, 32px)",
        fontWeight: 500,
        letterSpacing: "-0.02em",
      }}
    >
      <span>DEVELOPMENT</span>
      <span style={{ color: "#3a9c4d" }}>✳</span>
      <span>PRODUCT DESIGN</span>
      <span style={{ color: "#3a9c4d" }}>✳</span>
      <span>CREATIVE CODING</span>
      <span style={{ color: "#3a9c4d" }}>✳</span>
      <span>AI PROTOTYPING</span>
      <span style={{ color: "#3a9c4d" }}>✳</span>
      <span>WEB EXPERIENCES</span>
      <span style={{ color: "#3a9c4d" }}>✳</span>
      <span>TECHNOLOGY</span>
      <span style={{ color: "#3a9c4d" }}>✳</span>
    </div>
  );
}

function AnimatedMarquee() {
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section className="marqueeSection" aria-hidden="true">
      <div className="marquee">
        <motion.div className="marqueeTrack" style={{ x }}>
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </motion.div>
      </div>
    </section>
  );
}

function RevealLine({
  children,
  delay = 0,
  muted = false,
}: {
  children: React.ReactNode;
  delay?: number;
  muted?: boolean;
}) {
  return (
    <div className="revealLine">
      <motion.div
        className={muted ? "mutedLine" : ""}
        initial={{
          y: "115%",
          rotate: 1.5,
        }}
        whileInView={{
          y: 0,
          rotate: 0,
        }}
        viewport={{
          once: true,
          amount: 0.7,
        }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* 1. HERO WITH DELIBERATE ENTRANCE & SCROLL PARALLAX */}
      <Hero />

      {/* 2. SCROLL-LINKED ANIMATED MARQUEE */}
      <AnimatedMarquee />

      {/* 3. INTRO STATEMENT WITH ROTATING LINE MASK REVEALS */}
      <section id="intro" className="intro container">
        <div className="introTop">
          <span>01 / INTRO</span>
          <span>DISCIPLINE</span>
        </div>

        <div className="introContent">
          <div className="introStatement">
            <RevealLine delay={0}>
              I&apos;M A CREATIVE DEVELOPER
            </RevealLine>

            <RevealLine delay={0.05}>
              WHO ENJOYS TURNING
            </RevealLine>

            <RevealLine delay={0.1} muted>
              IDEAS INTO DIGITAL
            </RevealLine>

            <RevealLine delay={0.15}>
              EXPERIENCES.
            </RevealLine>
          </div>
        </div>

        <div className="introBottom">
          <span>AVAILABLE FOR NEW PROJECTS</span>
          <a href="#about">
            ABOUT ME <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* 4. AUDIENCE-SWITCHER INTERACTIVE NOTEBOOK */}
      <AudienceIntro />

      {/* 5. FEATURED WORK SHOWCASE */}
      <FeaturedWork />

      {/* 6. WEB DESIGN OUTLINE STROKE LIST WITH FLOATING HOVER PREVIEW */}
      <WebDesignList />

      {/* 7. PLAYGROUND & EXPERIMENTAL BUILDS */}
      <Playground />

      {/* 8. ABOUT ME, PORTRAIT, CAPABILITIES & EXPERIENCE */}
      <About />

      {/* 9. MASSIVE EDITORIAL FOOTER CTA */}
      <Footer />
    </main>
  );
}
