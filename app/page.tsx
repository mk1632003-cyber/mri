"use client";

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

export default function Home() {
  return (
    <main>
      {/* 1. HERO WITH PARTICLE CANVAS & EDITORIAL NAME REVEAL */}
      <Hero />

      {/* 2. INFINITE MARQUEE BANNER */}
      <section className="marqueeSection" aria-hidden="true">
        <div className="marquee">
          <div className="marqueeTrack">
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </div>
      </section>

      {/* 3. JINGJING HAN SIGNATURE AUDIENCE-SWITCHER NOTEBOOK */}
      <AudienceIntro />

      {/* 4. FEATURED WORK SHOWCASE */}
      <FeaturedWork />

      {/* 5. WEB DESIGN OUTLINE STROKE LIST WITH FLOATING HOVER PREVIEW */}
      <WebDesignList />

      {/* 6. PLAYGROUND & EXPERIMENTAL BUILDS */}
      <Playground />

      {/* 7. ABOUT ME, PORTRAIT, CAPABILITIES & EXPERIENCE */}
      <About />

      {/* 8. MASSIVE EDITORIAL FOOTER CTA */}
      <Footer />
    </main>
  );
}
