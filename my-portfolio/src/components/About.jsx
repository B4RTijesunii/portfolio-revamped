import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Olayode Oyebanke | Frontend Developer in Nigeria</title>

        <meta
          name="description"
          content="Olayode Oyebanke is a frontend developer in Nigeria building modern React and Tailwind CSS applications."
        />

        <meta
          name="keywords"
          content="Learn more about Olayode Oyebanke, a Frontend Developer based in Nigeria, React Developer Nigeria, JavaScript Developer, Portfolio"
        />
      </Helmet>

      <section
        id="about"
        className="px-6 md:px-20 py-24 text-white"
        style={{ background: "#030712" }}
      >
        <div className="max-w-6xl mx-auto mb-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="text-xs tracking-[0.2em] uppercase font-medium"
              style={{ color: "#D4A35A" }}
            >
              About me
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium mt-3 mb-6"
              style={{ color: "#FFFFFF" }}
            >
              About Me
            </h2>
            <p className="mb-4" style={{ color: "#A6ADBB" }}>
              I'm a frontend developer focused on building responsive and
              user-friendly web applications using modern technologies like
              React and Tailwind CSS.
            </p>
            <p className="mb-4" style={{ color: "#A6ADBB" }}>
              I have hands-on experience developing real projects, including
              API-based applications, where I focus on clean design,
              performance, and usability.
            </p>
            <p style={{ color: "#A6ADBB" }}>
              I enjoy turning ideas into real products and continuously
              improving my skills through hands-on projects.
            </p>

            {/* SIGNATURE */}
            <div className="mt-6 inline-flex items-end">
              <span
                style={{
                  fontFamily: "'Alex Brush', cursive",
                  color: "#E7B96C",
                  fontSize: "2.75rem",
                  lineHeight: 1,
                }}
              >
                Oyebanke
              </span>
              <svg
                width="90"
                height="30"
                viewBox="0 0 90 30"
                className="ml-1 mb-2"
                fill="none"
              >
                <path
                  d="M2 15 C 30 15, 50 25, 85 5"
                  stroke="#D4A35A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-5 py-2 rounded-lg text-sm font-medium transition"
                style={{
                  background: "rgba(243, 209, 138, 0.15)",
                  color: "#F4D392",
                  border: "0.5px solid #F3D18A",
                }}
              >
                Contact Me
              </a>
              <a
                href="/resume"
                className="px-5 py-2 rounded-lg text-sm font-medium transition"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#E5E7EB",
                  border: "0.5px solid #252F46",
                }}
              >
                View Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="p-6 rounded-xl"
            style={{ background: "#0D1323", border: "0.5px solid #1B2336" }}
          >
            <h3
              className="text-lg font-medium mb-4"
              style={{ color: "#FFFFFF" }}
            >
              Quick Info
            </h3>

            <div className="space-y-3 text-sm" style={{ color: "#A6ADBB" }}>
              <p>
                <span style={{ color: "#7B8191" }}>Location:</span> Nigeria
              </p>
              <p>
                <span style={{ color: "#7B8191" }}>Focus:</span> Frontend
                Development
              </p>
              <p>
                <span style={{ color: "#7B8191" }}>Stack:</span> React,
                Tailwind, JavaScript
              </p>
              <p>
                <span style={{ color: "#7B8191" }}>Open to:</span> Internships &
                Freelance
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default About;
