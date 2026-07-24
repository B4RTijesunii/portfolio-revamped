import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import About from "../components/About";
import Projects from "../components/Projects";
import CurrentlyBuilding from "../components/CurrentlyBuilding";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Olayode Oyebanke | Frontend developer in Nigeria</title>
        <meta
          name="description"
          content="Olayode Oyebanke is a frontend developer in Nigeria specializing in React, JavaScript, and Tailwind CSS. Explore modern, responsive web projects."
        />
      </Helmet>
      <Navbar />
      <Hero />
      <Technologies />
      <About />
      <Projects preview />
      <CurrentlyBuilding preview />
      <Contact />
      <Footer />
    </>
  );
}
