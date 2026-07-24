import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="relative text-white px-6 md:px-20 py-12 overflow-hidden"
      style={{ background: "#030712" }}
    >
      <div
        className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{
          background: "rgba(243, 209, 138, 0.06)",
          filter: "blur(100px)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl font-medium mb-3">
              Olayode <span style={{ color: "#F3D18A" }}>Oyebanke</span>
            </h2>

            <p className="text-sm" style={{ color: "#7B8191" }}>
              Frontend developer building modern and responsive web
              applications.
            </p>
          </motion.div>

          {/* LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-medium mb-3">Quick Links</h3>

            <ul className="space-y-2 text-sm" style={{ color: "#7B8191" }}>
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              {/* fixed: was "#contacts", didn't match the section id */}
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* SOCIALS — now pointing at real profiles, not "#" */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-medium mb-3">Connect</h3>

            <div className="flex gap-4" style={{ color: "#7B8191" }}>
              <a
                href="https://github.com/B4RTijesunii"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/olayode-oyebanke-876b44294/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:oyebankeolayode@gmail.com"
                className="transition hover:text-white"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div
          className="pt-6 text-center text-sm"
          style={{ borderTop: "0.5px solid #1B2336", color: "#7B8191" }}
        >
          © {new Date().getFullYear()} Olayode Oyebanke. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
