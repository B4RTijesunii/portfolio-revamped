import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
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
        </div>
      </div>
    </section>
  );
};
