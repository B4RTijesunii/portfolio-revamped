import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", type: "anchor", target: "home", sectionId: "home" },
  { label: "About", type: "anchor", target: "about", sectionId: "about" },
  {
    label: "Projects",
    type: "anchor",
    target: "projects",
    sectionId: "projects",
  },
  {
    label: "Building",
    type: "link",
    target: "/building",
    sectionId: "currently-building",
  },
  { label: "Contact", type: "anchor", target: "contact", sectionId: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const trackedIds = links.map((l) => l.sectionId).filter(Boolean);

    const sections = trackedIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const handleScroll = () => {
      // 120px offset accounts for the fixed navbar height
      const scrollPos = window.scrollY + 120;
      let current = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= scrollPos) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isActive = (link) => {
    if (location.pathname === "/") {
      return activeSection === link.sectionId;
    }
    // on non-home pages, only route-based links can be active
    return link.type === "link" && location.pathname === link.target;
  };

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl"
      style={{
        background: "rgba(3, 7, 18, 0.8)",
        borderBottom: "0.5px solid #1B2336",
      }}
    >
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6 md:px-12">
        {/* LOGO */}
        <a href="#home" className="flex items-center cursor-pointer">
          <span className="text-lg font-semibold" style={{ color: "#FFFFFF" }}>
            olayode
          </span>
          <span className="text-lg font-semibold" style={{ color: "#F3D18A" }}>
            .dev
          </span>
        </a>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          {links.map((link) =>
            link.type === "anchor" ? (
              <li key={link.label} className="relative">
                <a
                  href={`#${link.target}`}
                  className="relative transition"
                  style={{ color: isActive(link) ? "#F3D18A" : "#A6ADBB" }}
                >
                  {link.label}
                </a>
                {isActive(link) && (
                  <span
                    className="absolute left-0 -bottom-1 w-full h-[2px] rounded-full"
                    style={{ background: "#F3D18A" }}
                  ></span>
                )}
              </li>
            ) : (
              <li key={link.label} className="relative">
                <Link
                  to={link.target}
                  className="relative transition"
                  style={{ color: isActive(link) ? "#F3D18A" : "#A6ADBB" }}
                >
                  {link.label}
                </Link>
                {isActive(link) && (
                  <span
                    className="absolute left-0 -bottom-1 w-full h-[2px] rounded-full"
                    style={{ background: "#F3D18A" }}
                  ></span>
                )}
              </li>
            ),
          )}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* RESUME */}
          <Link
            to="/resume"
            className="hidden md:block px-5 py-2 text-sm rounded-lg transition"
            style={{
              background: "rgba(243, 209, 138, 0.15)",
              color: "#F4D392",
              border: "0.5px solid #F3D18A",
            }}
          >
            Resume
          </Link>

          {/* HAMBURGER */}
          <button
            className="md:hidden cursor-pointer w-6 h-6 relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="absolute left-0 w-6 h-[2px] transition-all duration-300"
              style={{
                background: "#E5E7EB",
                top: menuOpen ? "11px" : "6px",
                transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)",
              }}
            ></span>
            <span
              className="absolute left-0 top-[11px] w-6 h-[2px] transition-all duration-300"
              style={{ background: "#E5E7EB", opacity: menuOpen ? 0 : 1 }}
            ></span>
            <span
              className="absolute left-0 w-6 h-[2px] transition-all duration-300"
              style={{
                background: "#E5E7EB",
                top: menuOpen ? "11px" : "16px",
                transform: menuOpen ? "rotate(-45deg)" : "rotate(0deg)",
              }}
            ></span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 px-6 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
        style={{ background: "#030712" }}
      >
        <div className="flex flex-col gap-4 text-sm font-medium">
          {links.map((link) =>
            link.type === "anchor" ? (
              <a
                key={link.label}
                href={`#${link.target}`}
                onClick={() => setMenuOpen(false)}
                style={{ color: isActive(link) ? "#F3D18A" : "#A6ADBB" }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.target}
                onClick={() => setMenuOpen(false)}
                style={{ color: isActive(link) ? "#F3D18A" : "#A6ADBB" }}
              >
                {link.label}
              </Link>
            ),
          )}

          <Link
            to="/resume"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-2 text-sm rounded-lg transition text-center"
            style={{
              background: "rgba(243, 209, 138, 0.15)",
              color: "#F4D392",
              border: "0.5px solid #F3D18A",
            }}
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
