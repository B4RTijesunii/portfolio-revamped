import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-[#020617] text-white px-6 md:px-20 py-12 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-blue-600 opacity-20 blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-purple-600 opacity-20 blur-[100px] "></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold mb-3">
              Olayode <span className="text-blue-500">Oyebanke</span>
            </h2>

            <p className="text-gray-400 text-sm">
              Frontend developer building modern and responsive web
              applications.
            </p>
          </motion.div>

          {/* LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* SOCIALS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-lg font-semibold mb-3">Connect</h3>

            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-blue-400">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaTwitter />
              </a>
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Olayode Oyebanke. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
