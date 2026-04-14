import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";
import { Helmet } from "react-helmet-async";

export default function Home({ toggleTheme, darkMode }) {
  return (
    <>
      <Helmet>
        <title>Olayode Oyebanke | Frontend developer in Nigeria</title>
        <meta
          name="description"
          content="Olayode Oyebanke is a frontend developer in Nigeria specializing in React, JavaScript, and Tailwind CSS. Explore modern, responsive web projects."
        />
      </Helmet>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <Hero />
      <Technologies />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
