import React from "react";
import { motion } from "framer-motion";
import p1 from "../assets/news-homepage.jpg";
import p2 from "../assets/B4Rshop.png";
import p3 from "../assets/weather.png";
import p4 from "../assets/cleardifference.png";
import p5 from "../assets/moviewebsite.png";
import p6 from "../assets/Architecture.png";
import p7 from "../assets/b4rlibrary.png";
// TODO: replace with real screenshots once available
import p8 from "../assets/Architecture.png"; // placeholder — swap for Portico screenshot
import p9 from "../assets/Architecture.png"; // placeholder — swap for Olayode Architects screenshot

export const projects = [
  {
    title: "News Homepage",
    description:
      "A pixel-focused recreation of a news homepage design challenge — responsive grid layout, semantic HTML, and typography built to match the original spec closely.",
    image: p1,
    live: "https://final-news-homepage.vercel.app/",
    github: "#",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "E-commerce UI",
    description:
      "A multi-category storefront concept with a diagonal clip-path hero, a scrolling category marquee, and structured navigation — built to push past typical grid-template e-commerce layouts.",
    image: p2,
    live: "https://b4rshoppingwebsite.vercel.app/",
    github: "#",
    tech: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
  },
  {
    title: "Weather App",
    description:
      "A real-time weather app with location search and current conditions, built around a clean, minimal interface for fast, glanceable readability.",
    image: p3,
    live: "https://meteor-weather-app.vercel.app/",
    github: "#",
  },
  {
    title: "Clear Difference Event",
    description:
      "A client site for an event decoration business — multi-step booking form, filterable project gallery, and full local SEO setup with structured LocalBusiness data.",
    image: p4,
    live: "https://clear-difference-event.vercel.app/",
    github: "#",
    tech: ["React", "Vite", "Tailwind CSS", "EmailJS"],
  },
  {
    title: "B4RStudio",
    description:
      "A TMDB-powered movie and TV discovery platform with search, category browsing, and watchlists — the original build now being rebuilt as Cineflux 2.0.",
    image: p5,
    live: "https://b4rstudio.vercel.app/",
    github: "#",
    tech: ["React", "Vite", "Tailwind CSS", "TMDB API"],
  },
  {
    title: "Boyede Studio",
    description:
      "A portfolio site for an architecture practice, structured around a clean, gallery-first layout so completed projects and case studies take center stage.",
    image: p6,
    live: "https://architect-ochre-beta.vercel.app/",
    github: "#",

    tech: ["React", "Tailwind CSS"],
  },

  {
    title: "Dornier Modern Architecture",
    description:
      "A business website for Dornier Modern Architecture, built directly from the firm's real portfolio material into a polished, professional web presence for a paying client.",
    image: p6,
    live: "https://dornier-modern-architecture.vercel.app/",
    github: "#",
    tech: ["React", "Tailwind CSS"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Projects = ({ preview = false }) => {
  const visibleProjects = preview ? projects.slice(0, 3) : projects;

  return (
    <section
      id="projects"
      className="relative px-6 md:px-20 py-24 overflow-hidden text-white"
      style={{ background: "#030712" }}
    >
      {/* AMBIENT GOLD GLOW */}
      <div
        className="absolute top-0 left-0 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{
          background: "rgba(243, 209, 138, 0.06)",
          filter: "blur(140px)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs tracking-[0.2em] uppercase font-medium"
            style={{ color: "#D4A35A" }}
          >
            Selected work
          </span>
          <h2
            className="text-3xl md:text-4xl font-medium mt-3"
            style={{ color: "#FFFFFF" }}
          >
            My Projects
          </h2>
          <p className="mt-3" style={{ color: "#7B8191" }}>
            Some of the work I've built recently.
          </p>

          {preview && (
            <a
              href="/projects"
              className="inline-block mt-5 text-sm font-medium transition"
              style={{ color: "#F3D18A" }}
            >
              View all projects →
            </a>
          )}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              {/* CARD */}
              <div
                className="rounded-xl p-6 transition duration-300"
                style={{ background: "#0D1323", border: "0.5px solid #1B2336" }}
              >
                {/* IMAGE */}
                <div className="relative h-40 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent, rgba(3,7,18,0.6))",
                    }}
                  ></div>
                </div>

                {/* TEXT */}
                <h3
                  className="text-xl font-medium mb-2"
                  style={{ color: "#FFFFFF" }}
                >
                  {project.title}
                </h3>

                <p className="text-sm mb-4" style={{ color: "#A6ADBB" }}>
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
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

                {/* LINKS */}
                <div className="flex gap-4 text-sm">
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition"
                      style={{ color: "#F3D18A" }}
                    >
                      Live
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition"
                      style={{ color: "#F3D18A" }}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
