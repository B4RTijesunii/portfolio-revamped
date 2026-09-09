import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const builds = [
  {
    name: "B4R Library",
    status: "In development",
    description:
      "A full-stack reading tracker — search books, log progress, and get AI-assisted recommendations.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "SQLite",
      "Prisma",
      "JWT",
      "Open Library API",

      "Gemini API",
    ],
  },
  {
    name: "Cineflux 2.0",
    status: "Early stage",
    description:
      "The next version of Cineflux — smarter recommendations and features built on lessons from v1.",
    tech: ["React", "Vite", "TMDB API"],
  },
  {
    name: "DevTrack",
    status: "In development",
    description:
      "A full-stack app that tracks GitHub commit and gives review of progress weekly.",
    tech: ["React", "Tailwind CSS", "Vite", "GitHub API", "Gemini API"],
  },
  {
    name: "B4R Wallet",
    status: "Early stage",
    description: "A full-stack app that tracks savings and expenses",
    tech: ["React", "Vite", "Tailwind CSS"],
  },
  {
    name: "Travel Someday",
    status: "Early stage",
    description:
      "A website that has fully researched places to go and food to eat in every continent",
    tech: ["React", "Vite", "Tailwind CSS"],
  },
];

const CurrentlyBuilding = ({ preview = false }) => {
  const visibleBuilds = preview ? builds.slice(0, 2) : builds;

  return (
    <section
      id="currently-building"
      className="px-6 md:px-20 py-24 text-white"
      style={{ background: "#030712" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <span
              className="text-xs tracking-[0.2em] uppercase font-medium"
              style={{ color: "#D4A35A" }}
            >
              Currently building
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium mt-3"
              style={{ color: "#FFFFFF" }}
            >
              Not finished yet — but worth showing.
            </h2>
            <p className="mt-3 max-w-xl text-sm" style={{ color: "#7B8191" }}>
              Projects I'm actively building right now. No polished case study
              yet, just an honest look at what's in progress.
            </p>
          </div>

          {preview && (
            <a
              href="/building"
              className="text-sm font-medium whitespace-nowrap transition"
              style={{ color: "#F3D18A" }}
            >
              See everything I'm building →
            </a>
          )}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {visibleBuilds.map((build) => (
            <motion.div
              key={build.name}
              variants={item}
              className="relative rounded-xl p-6"
              style={{
                background: "#0D1323",
                border: "1px dashed #2F3A56",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3
                  className="text-lg font-medium"
                  style={{ color: "#FFFFFF" }}
                >
                  {build.name}
                </h3>
                <span
                  className="text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap"
                  style={{
                    background: "rgba(243, 209, 138, 0.15)",
                    color: "#F4D392",
                    border: "0.5px solid #F3D18A",
                  }}
                >
                  {build.status}
                </span>
              </div>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "#A6ADBB" }}
              >
                {build.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {build.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-md"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "#7B8191",
                      border: "0.5px solid #1B2336",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
