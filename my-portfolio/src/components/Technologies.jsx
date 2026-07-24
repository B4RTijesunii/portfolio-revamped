import React from "react";
import { motion } from "framer-motion";
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

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const iconItem = {
  hidden: { opacity: 0, y: 0 },
  show: {
    opacity: 1,
    y: [0, -14, 0],
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  },
};

const Technologies = () => {
  const techs = [
    { name: "HTML", icon: <SiHtml5 style={{ color: "#F3D18A" }} /> },
    { name: "CSS", icon: <SiCss style={{ color: "#F3D18A" }} /> },
    { name: "JavaScript", icon: <SiJavascript style={{ color: "#F3D18A" }} /> },
    { name: "React", icon: <SiReact style={{ color: "#F3D18A" }} /> },
    { name: "Tailwind", icon: <SiTailwindcss style={{ color: "#F3D18A" }} /> },
    { name: "Node.js", icon: <SiNodedotjs style={{ color: "#F3D18A" }} /> },
    { name: "Git", icon: <SiGit style={{ color: "#F3D18A" }} /> },
    { name: "Figma", icon: <SiFigma style={{ color: "#F3D18A" }} /> },
  ];

  return (
    <div className="w-full py-20 text-white" style={{ background: "#030712" }}>
      <div className="max-w-6xl mx-auto px-4">
        <p
          className="text-center text-sm uppercase tracking-widest mb-8"
          style={{ color: "#D4A35A" }}
        >
          Technologies I work with
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl p-6"
          style={{ background: "#0D1323", border: "0.5px solid #1B2336" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {techs.map((tech, index) => (
              <motion.div
                key={index}
                variants={iconItem}
                className="flex flex-col items-center gap-3 group transition-transform duration-300 hover:scale-110"
              >
                <div className="text-3xl md:text-4xl opacity-80 group-hover:opacity-100 transition-opacity">
                  {tech.icon}
                </div>
                <span
                  className="text-xs font-medium transition-colors"
                  style={{ color: "#7B8191" }}
                >
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Technologies;
