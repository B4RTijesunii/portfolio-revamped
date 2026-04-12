import React from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiFigma,
} from "react-icons/si";

const Technologies = () => {
  const techs = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Git", icon: <SiGit className="text-orange-600" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
  ];

  return (
    <div className="w-full py-20 bg-white dark:bg-[#020617] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* SECTION HEADING */}
        <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-8">
          Technologies I work with
        </p>

        {/* ICCONS GRID */}
        <div className="bg-[#0F172A]/50 border border-white/5 rounded-2xl p-6 md:backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {techs.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 group transition-transform duration-300 hover:scale-110"
              >
                <div className="text-3xl md:text-4xl opacity-80 group-hover:opacity-100 transition-opacity">
                  {tech.icon}{" "}
                </div>
                <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Technologies;
