import React from "react";
import { motion } from "framer-motion";
import p1 from "../assets/news-homepage.jpg";
import p2 from "../assets/e-commerce.png";
import p3 from "../assets/weather.png";

const projects = [
  {
    title: "News Homepage",
    description:
      "A modern responsive portfoliio built with React and Tailwind CSS.",
    image: p1,
    live: "#",
    github: "#",
  },
  {
    title: "E-commerce UI",
    description: "Clean and responsive shopping interface with great UX.",
    image: p2,
    live: "#",
    github: "#",
  },
  {
    title: "Weather App",
    description: "Admin dashboard with analytics and data visualization.",
    image: p3,
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-[#020617] text-white px-6 md:px-20 py-20 overflow-hidden"
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
              {/* CARD */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:scale-105 transition duration-300 shadow-lg">
                {/* IMAGE */}
                <div className="h-40 rounded-lg mb-4 overflow-hidden ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 backdrop:transition duration-300"
                  />
                </div>

                {/* TEXT */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* LINKS */}
                <div className="flex gap-4 text-sm">
                  <a href="#" className="text-blue-400 hover:text-white">
                    Live
                  </a>
                  <a
                    href="#"
                    className="text-blue-400 hover:text-white transition  "
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* HOVER GLOW */}

              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
