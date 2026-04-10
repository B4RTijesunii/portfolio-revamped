import React from "react";
import profileImg from "../assets/profileImg.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-center space-y-6 text-center md:text-left">
          <p className="text-lg text-gray-500">Hello, I'm</p>
          <h1 className="text-4x1 md:text-6xl font-bold text-gray-900">
            Olayode Oyebanke
          </h1>
          <h2 className="text-2x1 md:text-3x1 text-gray-600">
            Frontend Developer
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            I build responsive, accessible, and interactive web experiences
            using modern web technologies.
          </p>
          {/*BUTTONS*/}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-black rounded-xl hover:bg-black hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* RIGHT IMAGE VISUAL */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
          <img
            src={profileImg}
            alt="profile"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
