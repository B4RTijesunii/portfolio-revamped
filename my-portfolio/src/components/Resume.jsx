import React from "react";
import { FiDownload } from "react-icons/fi";

export default function Resume() {
  return (
    <div
      id="Resume"
      className="min-h-screen px-6 md:px-20 py-20 bg-gray-50 dark:bg-[020617] text-gray-900 dark:text-white transition-colors duration-300"
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold">My Resume</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Frontend Developer • React • UI Engineer
        </p>

        {/* DOWNLOAD BUTTON */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition"
        >
          <FiDownload />
          Download CV
        </a>
      </div>

      {/* GRID SECTIONS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* EXPERIENCE */}
        <div className="p-6 rounded-xl bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-white/10">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>

          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold">Fronrend Developer</p>
              <p className="text-gray-500 dark:text-gray-400">
                Freelance • 2024 - Present
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Built responsive web apps using React, TailwindCSS, and modern
                UI principles.
              </p>
            </div>
          </div>
        </div>

        {/* SKILLS */}
      </div>
    </div>
  );
}
