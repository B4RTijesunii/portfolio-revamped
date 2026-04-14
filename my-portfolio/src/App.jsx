import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Resume from "./components/Resume";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark"),
  );

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");

    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home toggleTheme={toggleTheme} darkMode={darkMode} />}
        />
        <Route
          path="/resume"
          element={<Resume toggleTheme={toggleTheme} darkMode={darkMode} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
