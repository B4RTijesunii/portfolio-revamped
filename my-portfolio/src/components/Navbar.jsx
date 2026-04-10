import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/10">
      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4 text-white">
        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-xl font-semibold">Olayode</span>
          <span className="text-blue-400 font-semibold">.dev</span>
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Projects</li>
          <li className="hover:text-blue-500 cursor-pointer">Blog</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* DARK MODE */}
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

          {/* RESUME */}
          <button className="hidden md:block px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-sm rounded-lg transition">
            Resume
          </button>

          {/* HAMBURGER */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-gray-300"></span>
              <span className="block w-6 h-[2px] bg-gray-300"></span>
              <span className="block w-6 h-[2px] bg-gray-300"></span>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (SLIDE DOWN) */}
      <div
        className={`md:hidden bg-[#020617] text-white px-6 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 text-sm font-medium text-gray-300">
          <p
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 cursor-pointer"
          >
            Home
          </p>
          <p
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 cursor-pointer"
          >
            About
          </p>
          <p
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 cursor-pointer"
          >
            Projects
          </p>
          <p
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 cursor-pointer"
          >
            Blog
          </p>
          <p
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 cursor-pointer"
          >
            Contact
          </p>

          <button className="mt-2 px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-sm rounded-lg transition">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}
