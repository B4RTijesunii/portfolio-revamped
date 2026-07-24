import React from "react";
import { FiDownload, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const navigate = useNavigate();
  return (
    <div
      id="resume"
      className="min-h-screen px-6 md:px-20 py-20 text-white"
      style={{ background: "#030712" }}
    >
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 text-sm flex items-center gap-1 transition"
        style={{ color: "#A6ADBB" }}
      >
        <FiArrowLeft />
        Back
      </button>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-medium" style={{ color: "#FFFFFF" }}>
          My Resume
        </h1>
        <p className="mt-2" style={{ color: "#A6ADBB" }}>
          Frontend Developer • React • UI Engineer
        </p>

        {/* DOWNLOAD BUTTON */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg transition"
          style={{
            background: "rgba(243, 209, 138, 0.15)",
            color: "#F4D392",
            border: "0.5px solid #F3D18A",
          }}
        >
          <FiDownload />
          Download CV
        </a>
      </div>

      {/* GRID SECTIONS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* EXPERIENCE */}
        <div
          className="p-6 rounded-xl"
          style={{ background: "#0D1323", border: "0.5px solid #1B2336" }}
        >
          <h2 className="text-xl font-medium mb-4" style={{ color: "#FFFFFF" }}>
            Experience
          </h2>

          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium" style={{ color: "#E5E7EB" }}>
                Frontend Developer
              </p>
              <p style={{ color: "#7B8191" }}>Freelance • 2024 - Present</p>
              <p style={{ color: "#A6ADBB" }}>
                Built responsive web apps using React, TailwindCSS, and modern
                UI principles.
              </p>
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div
          className="p-6 rounded-xl"
          style={{ background: "#0D1323", border: "0.5px solid #1B2336" }}
        >
          <h2 className="text-xl font-medium mb-4" style={{ color: "#FFFFFF" }}>
            Skills
          </h2>

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
                className="px-3 py-1 rounded-full"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#A6ADBB",
                  border: "0.5px solid #1B2336",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* EDUCATION */}
        <div
          className="p-6 rounded-xl"
          style={{ background: "#0D1323", border: "0.5px solid #1B2336" }}
        >
          <h2 className="text-xl font-medium mb-4" style={{ color: "#FFFFFF" }}>
            Education
          </h2>

          <p className="font-medium" style={{ color: "#E5E7EB" }}>
            Physiology
          </p>
          <p style={{ color: "#7B8191" }}>University • 2022 - Present</p>
          <p className="mt-2" style={{ color: "#A6ADBB" }}>
            Took online classes on Frontend Development.
          </p>
        </div>

        {/* CONTACT */}
        <div
          className="p-6 rounded-xl"
          style={{ background: "#0D1323", border: "0.5px solid #1B2336" }}
        >
          <h2 className="text-xl font-medium mb-4" style={{ color: "#FFFFFF" }}>
            Contact
          </h2>

          <p style={{ color: "#A6ADBB" }}>Email: oyebankeolayode@gmail.com</p>
          <p style={{ color: "#A6ADBB" }}>Phone: +234 704 283 8584</p>
          <p style={{ color: "#A6ADBB" }}>Location: Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  );
}
