import React from "react";
import { FiDownload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
export default function Resume() {
  const navigate = useNavigate();
  return (
    <div
      id="Resume"
      className="min-h-screen px-6 md:px-20 py-20 bg-[#E3EBFC] dark:bg-[020617] text-gray-900 dark:text-white transition-colors duration-300"
    >
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500"
      >
        <FiArrowLeft />
        Back
      </button>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl text-[#0B1220] font-bold">My Resume</h1>
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
              <p className="font-semibold">Frontend Developer</p>
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
        <div className="p-6 rounded-xl bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-white/10">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>

          <div className="flex flex-wrap gap-2 text-sm">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind",
              "Git",
              "UI Design",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* EDUCATION */}
        <div className="p-6 rounded-xl bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-white/10">
          <h2 className="text-xl font-semibold mb-4">Education</h2>

          <p className="font-semibold">Physiology</p>
          <p className="text-gray-500 dark:text-gray-400">
            University • 2022 - Present
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Took online classes on Frontend Development.
          </p>
        </div>

        {/* CONTACT */}
        <div className="p-6 rounded-xl bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-white/10">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>

          <p className="text-gray-600 dark:text-gray-300">
            Email: oyebankeolayode@gmail.com
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Phone: +234 704 283 8584
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Location: lagos, Nigeria
          </p>
        </div>
      </div>
    </div>
  );
}
