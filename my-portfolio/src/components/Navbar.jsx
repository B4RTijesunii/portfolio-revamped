import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4 text-white">
        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-xl font-semibold">Olayode</span>
          <span className="text-blue-400 font-semibold">.dev</span>
        </div>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
          <li className="hover:text-blue-500 transition cursor-pointer">
            Home
          </li>
          <li className="hover:text-blue-500 transition cursor-pointer">
            About
          </li>
          <li className="hover:text-blue-500 transition cursor-pointer">
            Projects
          </li>
          <li className="hover:text-blue-500 transition cursor-pointer">
            Blog
          </li>
          <li className="hover:text-blue-500 transition cursor-pointer">
            Contact
          </li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            {darkMode ? (
              <FiSun className="text-white text-lg" />
            ) : (
              <FiMoon className="text-white text-lg" />
            )}
          </button>

          <button className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-sm rounded-lg transition">
            Resume
          </button>

          {/* MOBILE MENU ICON */}
          <div className="md:hidden cursor-pointer">
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-gray-300"></span>
              <span className="block w-6 h-[2px] bg-gray-300"></span>
              <span className="block w-6 h-[2px] bg-gray-300"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
