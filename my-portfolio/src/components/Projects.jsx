import React from "react";
import { motion } from "framer-motion";
import p1 from "../assets/news-homepage.jpg";
import p2 from "../assets/B4Rshop.png";
import p3 from "../assets/weather.png";
import p4 from "../assets/cleardifference.png";

const projects = [
  {
    title: "News Homepage",
    description:
      "A modern responsive portfolio built with React and Tailwind CSS.",
    image: p1,
    live: "https://final-news-homepage.vercel.app/",
    github: "#",
  },
  {
    title: "E-commerce UI",
    description: "Clean and responsive shopping interface with great UX.",
    image: p2,
    live: "https://b4rshoppingwebsite.vercel.app/",
    github: "#",
  },
  {
    title: "Weather App",
    description: "A weather app with real-time data and clean UI.",
    image: p3,
    live: "https://meteor-weather-app.vercel.app/",
    github: "#",
  },
  {
    title: "Clear Difference Event",
    description:
      "Working responsive website for an events decorator and manager.",
    image: p4,
    live: "https://clear-difference-event.vercel.app/",
    github: "#",
  },
  {
    title: "University Project",
    description: "Website for a University",
    image: "",
    live: "https://my-awesome-project-blue.vercel.app/",
    github: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative px-6 md:px-20 py-20 overflow-hidden bg-white dark:bg-[#020617] text-gray-600 dark:text-gray-300 transition-colors duration-300"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-600 opacity-20 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600 opacity-20 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 mt-4">
            Some of the work I've built recently
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              {/* CARD — scale removed from here so links aren't affected */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 transition duration-300 shadow-lg">
                {/* IMAGE — scale and glow scoped here */}
                <div className="relative h-40 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  {/* HOVER GLOW — image only */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-30 blur-md transition duration-300"></div>
                </div>

                {/* TEXT */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* LINKS */}
                <div className="flex gap-4 text-sm">
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-white transition"
                    >
                      Live
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-white transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
