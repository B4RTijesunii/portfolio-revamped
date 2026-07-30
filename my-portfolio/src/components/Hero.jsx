import React from "react";
import { motion } from "framer-motion";
import headshot from "../assets/headshot.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, x: -36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageItem = {
  hidden: { opacity: 0, x: 36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-20 pt-24 overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(180deg, #030712, #050816, #090B14, #030712)",
      }}
    >
      <div
        className="absolute top-[-120px] right-[-80px] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: "rgba(243, 209, 138, 0.10)",
          filter: "blur(140px)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto w-full grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative z-10"
      >
        {/* TEXT */}
        <div className="space-y-6 text-center md:text-left">
          <motion.span
            variants={item}
            className="inline-block text-xs tracking-[0.2em] uppercase font-medium"
            style={{ color: "#D4A35A" }}
          >
            Frontend developer · Lagos, Nigeria
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-medium leading-[1.1]"
            style={{ color: "#FFFFFF" }}
          >
            Olayode Oyebanke
          </motion.h1>

          <motion.div
            variants={item}
            className="h-px w-16 mx-auto md:mx-0"
            style={{
              background: "linear-gradient(90deg, #E7B96C, transparent)",
            }}
          />

          <motion.p
            variants={item}
            className="max-w-md mx-auto md:mx-0 text-base leading-relaxed"
            style={{ color: "#A6ADBB" }}
          >
            From idea to interface, I create responsive, user-centered
            experiences that balance performance, usability anf visual design.{" "}
            <br /> Currently exploring backend development, animations and
            mobile apps.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 justify-center md:justify-start pt-2"
          >
            <a
              href="/projects"
              className="px-6 py-3 rounded-lg font-medium text-sm transition-transform hover:scale-[1.03]"
              style={{
                background: "rgba(243, 209, 138, 0.15)",
                color: "#F4D392",
                border: "0.5px solid #F3D18A",
              }}
            >
              View projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-medium text-sm transition-colors hover:border-white/30"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                color: "#E5E7EB",
                border: "0.5px solid #252F46",
              }}
            >
              Get in touch
            </a>
          </motion.div>

          {/* SOCIALS */}
          <motion.div
            variants={item}
            className="flex gap-5 justify-center md:justify-start pt-6 text-lg"
            style={{ color: "#7B8191" }}
          >
            <a
              href="https://github.com/B4RTijesunii"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/olayode-oyebanke-876b44294/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:oyebankeolayode@gmail.com"
              aria-label="Email"
              className="transition-colors hover:text-white"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        {/* IMAGE — blended, no frame */}
        <motion.div
          variants={imageItem}
          className="relative flex justify-center md:justify-end min-h-[380px] md:min-h-[460px]"
        >
          {/* ambient glow sitting behind the subject */}
          <div
            className="absolute top-1/2 left-1/2 w-[380px] h-[380px] rounded-full pointer-events-none"
            style={{
              background: "rgba(243, 209, 138, 0.08)",
              filter: "blur(110px)",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* thin dashed orbit line */}
          <svg
            className="absolute top-1/2 left-1/2 pointer-events-none"
            style={{ transform: "translate(-50%, -50%)" }}
            width="420"
            height="420"
            viewBox="0 0 420 420"
            fill="none"
          >
            <circle
              cx="210"
              cy="210"
              r="188"
              stroke="#2F3A56"
              strokeWidth="1"
              strokeDasharray="2 7"
              opacity="0.6"
            />
          </svg>

          {/* sparkle accents */}
          <span
            className="absolute text-xs pointer-events-none"
            style={{ color: "#F3D18A", top: "14%", left: "8%" }}
          >
            ✦
          </span>
          <span
            className="absolute pointer-events-none"
            style={{
              color: "#F3D18A",
              top: "58%",
              right: "4%",
              fontSize: "8px",
            }}
          >
            ✦
          </span>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative z-10 w-[280px] md:w-[380px] aspect-[3/4]"
          >
            <img
              src={headshot}
              alt="Olayode Oyebanke"
              className="w-full h-full object-cover"
              style={{
                maskImage:
                  "radial-gradient(ellipse 68% 78% at 50% 45%, black 55%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 68% 78% at 50% 45%, black 55%, transparent 100%)",
              }}
            />
          </motion.div>

          <div
            className="hidden md:block absolute text-[11px] leading-relaxed text-right"
            style={{ color: "#7B8191", top: "22%", right: "0" }}
          >
            Crafting
            <br />
            interfaces.
            <br />
            Solving
            <br />
            problems.
            <br />
            Creating
            <br />
            impact.
          </div>

          {/* location tag */}
          <div
            className="absolute bottom-2 right-0 text-[11px] tracking-wide flex items-center gap-1.5"
            style={{ color: "#7B8191" }}
          >
            Based in Lagos, Nigeria
            <span style={{ color: "#F3D18A" }}>●</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
