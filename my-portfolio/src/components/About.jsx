import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-20 py-20  bg-gray-50 dark:bg-[#020617] text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto mb-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm a frontend developer focused on building responsive and
            user-friendly web applications using modern technologies like React
            and Tailwind CSS.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I have hands-on experience developing real-world projects, including
            API-based applications, where I focus on clean design, performance,
            and usability.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            I enjoy turning ideas into real products and continuosly improving
            my skills through hands-on projects.
          </p>

          {/* CTA */}
          <div className="mt-6 flex  flex-col sm:flex-row justify-center md: justify-start gap-4">
            <a
              href="#contact"
              className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition"
            >
              Contact Me
            </a>
            <a
              href="/resume"
              className="px-5 py-2 border border-gray-300 dark:border-white/20 rounded-lg transition"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - CARD */}
        <div className="p-6 rounded-xl bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-white/10">
          <h3 className="text-lg font-semibold mb-4">Quick Info</h3>

          <div className="space-y-3 text-sm">
            <p>
              <span className="font-medium">Location:</span> Nigeria
            </p>
            <p>
              <span className="font-medium">Focus:</span> Frontend Development
            </p>
            <p>
              <span className="font-medium">Stack:</span> React, Tailwind,
              JavaScript
            </p>
            <p>
              <span className="font-medium">Open to:</span> Internships &
              Freelance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
