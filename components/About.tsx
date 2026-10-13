"use client";

import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

const skills = [
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT",
  "NEXT.JS",
  "NODE.JS",
  "PYTHON",
  "UI / UX",
  "GIT & GITHUB",
];

const timeline = [
  {
    year: "2026",
    title: "EXPERIENCE / ROLE",
    place: "COMPANY OR ORGANIZATION",
  },
  {
    year: "2025",
    title: "PROJECT / INTERNSHIP",
    place: "COMPANY OR ORGANIZATION",
  },
  {
    year: "2023 — 2027",
    title: "B.TECH COMPUTER SCIENCE",
    place: "UNIVERSITY NAME",
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        {/* HEADER */}
        <div className="sectionHeader">
          <span>04 / ABOUT</span>
          <span>WHO I AM</span>
        </div>

        {/* HUGE TITLE */}
        <div className="heading">
          <div className="mask">
            <motion.h2
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              ABOUT
            </motion.h2>
          </div>

          <div className="mask second">
            <motion.h2
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              ME
            </motion.h2>
          </div>
        </div>

        {/* ABOUT INTRO */}
        <div className="aboutGrid">
          <motion.div
            className="portrait"
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
            }}
          >
            <img
              src="/images/profile.jpg"
              alt="Mritunjay Kumar"
            />

            <span>PORTRAIT / 2026</span>
          </motion.div>

          <div className="aboutText">
            <span className="smallTitle">
              A LITTLE ABOUT ME
            </span>

            <motion.p
              className="largeText"
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              I&apos;M MRITUNJAY, A DEVELOPER
              INTERESTED IN CREATING
              <span> USEFUL, THOUGHTFUL </span>
              AND ENGAGING DIGITAL EXPERIENCES.
            </motion.p>

            <div className="bioColumns">
              <p>
                I enjoy working at the intersection of
                development, design and technology —
                transforming ideas into functional digital
                products.
              </p>

              <p>
                I&apos;m constantly learning, experimenting
                with new technologies and looking for
                opportunities to build things that solve
                meaningful problems.
              </p>
            </div>

            <a href="#skills" className="discover">
              EXPLORE MY SKILLS
              <ArrowDownRight size={17} />
            </a>
          </div>
        </div>

        {/* SKILLS */}
        <div id="skills" className="skillsSection">
          <div className="subHeader">
            <span>CAPABILITIES</span>
            <span>01 — 08</span>
          </div>

          <div className="skills">
            {skills.map((skill, index) => (
              <motion.div
                className="skill"
                key={skill}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
              >
                <span className="skillNumber">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="skillName">
                  {skill}
                </span>

                <span className="skillArrow">
                  ↗
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="experience">
          <div className="subHeader">
            <span>EXPERIENCE & EDUCATION</span>
            <span>TIMELINE</span>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div
                className="timelineRow"
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <span className="year">
                  {item.year}
                </span>

                <h3>
                  {item.title}
                </h3>

                <span className="place">
                  {item.place}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          background: #d9ff43;
          color: #111;
          padding: 45px 0 140px;
        }

        /* HEADER */
        .sectionHeader {
          display: flex;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(17, 17, 17, 0.3);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.14em;
        }

        /* BIG HEADING */
        .heading {
          padding: 100px 0 140px;
        }

        .mask {
          overflow: hidden;
        }

        .mask h2 {
          font-family: var(--font-space);
          font-size: clamp(100px, 18vw, 300px);
          font-weight: 500;
          letter-spacing: -0.09em;
          line-height: 0.73;
        }

        .second {
          text-align: right;
        }

        /* ABOUT */
        .aboutGrid {
          display: grid;
          grid-template-columns: minmax(280px, 0.8fr) minmax(0, 1.4fr);
          gap: clamp(50px, 8vw, 140px);
          align-items: start;
        }

        .portrait img {
          width: 100%;
          aspect-ratio: 0.8 / 1;
          object-fit: cover;
          display: block;
          filter: grayscale(100%);
          transition: filter 0.5s ease, transform 0.5s ease;
        }

        .portrait:hover img {
          filter: grayscale(0%);
          transform: scale(1.02);
        }

        .portrait span {
          display: block;
          margin-top: 10px;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        .smallTitle {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .largeText {
          font-family: var(--font-space);
          font-size: clamp(40px, 5vw, 78px);
          line-height: 1;
          letter-spacing: -0.055em;
          margin-top: 35px;
        }

        .largeText span {
          color: rgba(17, 17, 17, 0.42);
        }

        .bioColumns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;
          margin-top: 65px;
          max-width: 750px;
        }

        .bioColumns p {
          font-size: 13px;
          line-height: 1.7;
        }

        .discover {
          display: flex;
          align-items: center;
          gap: 9px;
          width: fit-content;
          margin-top: 50px;
          padding-bottom: 6px;
          border-bottom: 1px solid #111;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        /* SKILLS */
        .skillsSection {
          margin-top: 180px;
        }

        .subHeader {
          display: flex;
          justify-content: space-between;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(17, 17, 17, 0.35);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .skill {
          display: grid;
          grid-template-columns: 70px 1fr auto;
          align-items: center;
          padding: 22px 0;
          border-bottom: 1px solid rgba(17, 17, 17, 0.25);
          cursor: default;
          transition: padding 0.3s ease;
        }

        .skill:hover {
          padding-left: 15px;
        }

        .skillNumber {
          font-size: 10px;
        }

        .skillName {
          font-family: var(--font-space);
          font-size: clamp(27px, 3.5vw, 55px);
          letter-spacing: -0.04em;
        }

        .skillArrow {
          font-size: 25px;
          opacity: 0.45;
        }

        /* EXPERIENCE */
        .experience {
          margin-top: 180px;
        }

        .timelineRow {
          display: grid;
          grid-template-columns: 180px 1fr 300px;
          gap: 30px;
          align-items: center;
          padding: 30px 0;
          border-bottom: 1px solid rgba(17, 17, 17, 0.3);
        }

        .year,
        .place {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
        }

        .timelineRow h3 {
          font-family: var(--font-space);
          font-size: clamp(24px, 3vw, 45px);
          font-weight: 500;
          letter-spacing: -0.04em;
        }

        .place {
          text-align: right;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .about {
            padding-top: 30px;
            padding-bottom: 90px;
          }

          .heading {
            padding: 80px 0 100px;
          }

          .mask h2 {
            font-size: clamp(80px, 25vw, 150px);
          }

          .aboutGrid {
            display: flex;
            flex-direction: column;
            gap: 70px;
          }

          .portrait {
            width: 85%;
          }

          .largeText {
            font-size: clamp(38px, 10vw, 65px);
          }

          .bioColumns {
            grid-template-columns: 1fr;
            gap: 25px;
            margin-top: 45px;
          }

          .skillsSection,
          .experience {
            margin-top: 120px;
          }

          .skill {
            grid-template-columns: 45px 1fr auto;
            padding: 18px 0;
          }

          .timelineRow {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            padding: 25px 0;
          }

          .place {
            text-align: left;
            color: rgba(17, 17, 17, 0.55);
          }
        }
      `}</style>
    </section>
  );
}
