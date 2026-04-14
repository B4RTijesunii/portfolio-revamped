import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar({ toggleTheme, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = ["home", "about", "projects", "blog", "contact"];

  const linkClass = (section) =>
    `relative transition cursor-pointer ${
      activeSection === section
        ? "text-blue-500"
        : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
    }`;

  // ✅ FIXED SCROLL SPY (safe mount timing)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisible = entry.target.id;
          }
        });

        if (mostVisible) {
          setActiveSection(mostVisible);
        }
      },
      {
        threshold: [0.3, 0.6, 0.9],
        rootMargin: "-80px 0px -40% 0px",
      },
    );

    // delay ensures sections exist
    const timeout = setTimeout(() => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => observer.observe(section));
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl border-b bg-white/80 dark:bg-[#030712]/80 border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6 md:px-12">
        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-xl font-semibold text-gray-900 dark:text-white">
            Olayode
          </span>
          <span className="text-[#6366F1] font-semibold">.dev</span>
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item} className="relative">
              <a href={`#${item}`} className={linkClass(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>

              {activeSection === item && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-500 rounded-full"></span>
              )}
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-white/10 hover:scale-105 transition"
          >
            {darkMode ? (
              <FiSun className="text-white text-lg" />
            ) : (
              <FiMoon className="text-gray-800 dark:text-white text-lg" />
            )}
          </button>

          {/* RESUME */}
          <Link
            to="/resume"
            className="hidden md:block px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-sm rounded-lg transition text-white"
          >
            Resume
          </Link>

          {/* HAMBURGER */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-gray-800 dark:bg-gray-300"></span>
              <span className="block w-6 h-[2px] bg-gray-800 dark:bg-gray-300"></span>
              <span className="block w-6 h-[2px] bg-gray-800 dark:bg-gray-300"></span>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white dark:bg-[#020617] px-6 ${
          menuOpen ? "max-h-80 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className={
                activeSection === item
                  ? "text-blue-500"
                  : "text-gray-700 dark:text-gray-300"
              }
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <Link
            to="/resume"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-sm rounded-lg transition text-white text-center"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
