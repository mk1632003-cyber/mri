"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const playgroundItems = [
  {
    number: "01",
    title: "NOOK ARCHIVE",
    type: "CREATIVE TOOL / EXTENSION",
    image: "/playground/playground-1.jpg",
  },
  {
    number: "02",
    title: "REMAKE TOOLS",
    type: "WEB APP / CREATIVE STACK",
    image: "/playground/playground-2.jpg",
  },
  {
    number: "03",
    title: "BALANCÉ",
    type: "MOBILE UI / MOTION",
    image: "/playground/playground-3.jpg",
  },
  {
    number: "04",
    title: "FLUID KINETICS",
    type: "WEBGL / SHADER LAB",
    image: "/playground/playground-4.jpg",
  },
];

export default function Playground() {
  return (
    <section className="playground" id="playground">
      <div className="container">
        <div className="sectionHeader">
          <span>03 / PLAYGROUND</span>
          <span>EXPERIMENTS & EXPLORATIONS</span>
        </div>

        <div className="heading">
          <motion.div
            className="headingMask"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.h2
              variants={{
                hidden: { y: "110%" },
                visible: { y: 0 },
              }}
              transition={{
                duration: 0.9,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              PLAY
            </motion.h2>
          </motion.div>

          <motion.div
            className="headingMask second"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.h2
              variants={{
                hidden: { y: "110%" },
                visible: { y: 0 },
              }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              GROUND
            </motion.h2>
          </motion.div>
        </div>

        <div className="description">
          <p>
            A COLLECTION OF SMALL EXPERIMENTS,
            <br />
            INTERFACES AND IDEAS CREATED WHILE
            <br />
            EXPLORING DESIGN & TECHNOLOGY.
          </p>

          <span>
            SELECTED
            <br />
            EXPLORATIONS
          </span>
        </div>

        <div className="grid">
          {playgroundItems.map((item, index) => (
            <PlaygroundCard
              key={item.number}
              item={item}
              index={index}
            />
          ))}
        </div>

        <div className="bottom">
          <span>MORE EXPERIMENTS COMING SOON.</span>

          <a href="#">
            VIEW ARCHIVE
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <style jsx>{`
        .playground {
          padding: 45px 0 130px;
          background: #f1f0eb;
          color: #111;
        }

        .sectionHeader {
          display: flex;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--line);

          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.14em;
        }

        .heading {
          padding-top: 100px;
        }

        .headingMask {
          overflow: hidden;
        }

        .headingMask h2 {
          font-family: var(--font-space);
          font-size: clamp(90px, 16vw, 260px);
          font-weight: 500;
          letter-spacing: -0.09em;
          line-height: 0.75;
        }

        .second {
          text-align: right;
        }

        .description {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;

          padding: 80px 0 120px;

          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          line-height: 1.6;
        }

        .description span {
          text-align: right;
          color: #777;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 25px;
        }

        .bottom {
          margin-top: 100px;
          padding-top: 20px;

          border-top: 1px solid var(--line);

          display: flex;
          justify-content: space-between;
          align-items: center;

          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
        }

        .bottom a {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 768px) {
          .playground {
            padding-top: 30px;
            padding-bottom: 80px;
          }

          .sectionHeader span:last-child {
            display: none;
          }

          .heading {
            padding-top: 80px;
          }

          .headingMask h2 {
            font-size: clamp(70px, 22vw, 130px);
          }

          .description {
            padding: 60px 0 80px;
            align-items: flex-start;
          }

          .description span {
            display: none;
          }

          .grid {
            display: flex;
            flex-direction: column;
            gap: 70px;
          }

          .bottom {
            margin-top: 70px;
          }
        }
      `}</style>
    </section>
  );
}

type PlaygroundItem = {
  number: string;
  title: string;
  type: string;
  image: string;
};

function PlaygroundCard({
  item,
  index,
}: {
  item: PlaygroundItem;
  index: number;
}) {
  return (
    <motion.article
      className={`card card${index + 1}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay: index % 2 === 0 ? 0 : 0.1,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <div className="image" data-cursor="view">
        <motion.img
          src={item.image}
          alt={item.title}
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.7,
            ease: [0.25, 1, 0.5, 1],
          }}
        />

        <span className="number">{item.number}</span>

        <div className="circle">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="information">
        <h3>{item.title}</h3>

        <div>
          <span>{item.type}</span>
          <span>© 2026</span>
        </div>
      </div>

      <style jsx>{`
        .card {
          position: relative;
        }

        .card1 {
          grid-column: 1 / span 7;
        }

        .card2 {
          grid-column: 9 / span 4;
          margin-top: 230px;
        }

        .card3 {
          grid-column: 2 / span 4;
          margin-top: 100px;
        }

        .card4 {
          grid-column: 7 / span 6;
          margin-top: -80px;
        }

        .image {
          position: relative;
          overflow: hidden;
          background: #d8d6cf;
          cursor: pointer;
        }

        .card1 .image {
          aspect-ratio: 1.35 / 1;
        }

        .card2 .image {
          aspect-ratio: 0.85 / 1;
        }

        .card3 .image {
          aspect-ratio: 0.9 / 1;
        }

        .card4 .image {
          aspect-ratio: 1.25 / 1;
        }

        .image :global(img) {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .number {
          position: absolute;
          top: 15px;
          left: 17px;

          padding: 6px 8px;

          background: rgba(241, 240, 235, 0.9);

          font-size: 9px;
          font-weight: 700;
        }

        .circle {
          width: 58px;
          height: 58px;

          position: absolute;
          right: 18px;
          bottom: 18px;

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #111;
          color: white;

          transform: scale(0);
          transition: transform 0.35s
            cubic-bezier(0.25, 1, 0.5, 1);
        }

        .image:hover .circle {
          transform: scale(1);
        }

        .information {
          padding-top: 14px;
        }

        .information h3 {
          font-family: var(--font-space);
          font-size: clamp(23px, 2.4vw, 42px);
          letter-spacing: -0.05em;
          font-weight: 500;
          margin-bottom: 12px;
        }

        .information div {
          border-top: 1px solid var(--line);
          padding-top: 9px;

          display: flex;
          justify-content: space-between;

          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        @media (max-width: 768px) {
          .card1,
          .card2,
          .card3,
          .card4 {
            margin: 0;
            width: 100%;
          }

          .card1 .image,
          .card2 .image,
          .card3 .image,
          .card4 .image {
            aspect-ratio: 1.05 / 1;
          }

          .circle {
            transform: scale(1);
            width: 48px;
            height: 48px;
          }

          .information h3 {
            font-size: 30px;
          }
        }
      `}</style>
    </motion.article>
  );
}
