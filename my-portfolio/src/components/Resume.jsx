import React from "react";

import { motion } from "framer-motion";
import { FiDownload, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "Tools and APIs",
    skills: ["Git and GitHub", "Figma", "Vercel", "REST APIs", "EmailJS"],
  },
];

export default function Resume() {
  const navigate = useNavigate();

  return (
    <div
      id-="resume"
      className="min-h-screen px-6 md:px-20 py-20 text-white"
      style={{ background: "#030712" }}
    >
      {/* BACK BUTTON */}

      <button
        onClick={() => navigate("/")}
        className="mb-6 text-sm flex items-center gap-1 transition"
        style={{ color: "#A6ADBB" }}
      >
        <FiArrowLeft />
        Back
      </button>

      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-medium" style={{ color: "#FFFFFF" }}>
          My Resume
        </h1>
        <p className="mt-2" style={{ color: "#A6aDBB" }}>
          Frontend Developer • React • UI Engineer
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg transition"
          style={{
            background: "rgba(243 209, 138, 0.15)",
            color: "#F4D392",
            border: "0.5px solid #F3D18A",
          }}
        >
          <FiDownload />
          Download CV
        </a>
      </motion.div>

      {/* GRID SECTIONS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* EXPERIENCE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="p-6 rounded-xl"
          style={{ background: "#0D1323", border: "0.5px solid #1B2336" }}
        >
          <h2 className="text-xl font-medium mb-4" style={{ color: "#FFFFFF" }}>
            Experience
          </h2>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium" style={{ color: "#E5E7EB" }}>
                Freelance Frontend Developer
              </p>
              <p style={{ color: "#7B8191" }}>2024 - Present</p>
              <p className="mt-1" style={{ color: "#A6ADBB" }}>
                Design and build responsive, production-ready websites for
                clients and personal-projects, including business sites for real
                clients
              </p>
            </div>
          </div>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="p-6 rounded-xl"
          style={{ background: "#0D1323", border: "0.5px solid #1B2336" }}
        >
          <h2 className="text-xl font-medium mb-4" style={{ color: "#FFFFFF" }}>
            Skills
          </h2>

          <div className="space-y-4">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p
                  className="text-xs uppercase tracking-wider mb-2"
                  style={{ color: "#D4A35A" }}
                >
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(255, 255, 255, 0.05",
                        color: "#A6ADBB",
                        border: "0.5px solid #1B2336",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="p-6 rounded-xl"
          style={{ background: "#0D1323", border: "0.5px solid #1B2336" }}
        >
          <h2 className="text-xl font-medium mb-4" style={{ color: "#FFFFFF" }}>
            Education
          </h2>
          <p className="font-medium" style={{ color: "#E5E7EB" }}>
            Human Physiology - LAUTECH, Ogbomoso.
          </p>
          <p style={{ color: "#7B8191" }}>2022 - 2026</p>
          <p className="mt-2" style={{ color: "#A6ADBB" }}>
            Undergraduate studies alongside self-directed frontend development
            training
          </p>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="p-6 rounded-xl"
          style={{ background: "#0D1323", border: "0.5px solid #1B2336" }}
        >
          <h2 className="text-xl font-medium mb-4" style={{ color: "#FFFFFF" }}>
            Contact
          </h2>
          <p style={{ color: "#A6ADBB" }}>Email: oyebankeolayode@gmail.com</p>
          <p style={{ color: "#A6ADBB" }}>Phone: +234 704 283 8584</p>
          <p style={{ color: "#A6ADBB" }}>Location: Lagos, Nigeria</p>
        </motion.div>
      </div>
    </div>
  );
}
