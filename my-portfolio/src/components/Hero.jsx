import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profileImg.jpg";
import headshot from "../assets/headshot.jpeg";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
// or use /profile.png if in public

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-20 pt-20 overflow-hidden bg-white dark:bg-[#030712] text-gray-900 dark:text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-600 opacity-20 blur-[120px]"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <p className="text-gray-400 text-sm tracking-wide">👋 Hello, I’m</p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Olayode <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Oyebanke
            </span>
          </h1>

          <h2 className="text-lg md:text-xl text-gray-300">
            FullStack Developer Developer
          </h2>

          <p className="text-gray-400 max-w-md mx-auto md:mx-0">
            I design and build modern, responsive, and visually engaging web
            applications.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-center md:justify-start pt-2">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium shadow-lg hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-5 justify-center md:justify-start pt-4 text-gray-400">
            <a
              href="https://github.com/B4RTijesunii"
              className="hover:text-gray-400 transition-colors duration-300 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/olayode-oyebanke-876b44294/"
              className="hover:text-gray-400 transition-colors duration-300 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors duration-300 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors duration-300 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center relative"
        >
          {/* GLOW */}
          <div className="absolute w-72 h-72 md:w-[400px] md:h-[400px] bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 blur-[100px] rounded-full"></div>

          {/* FLOATING IMAGE */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-56 h-56 md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow-2xl relative z-10 border border-white/10"
          >
            <img
              src={headshot}
              alt="Olayode Oyebanke"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
