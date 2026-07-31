import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

export default function Allprojects() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Projects | Olayode Oyebanke</title>
        <meta
          name="description"
          content="A full list of projects built by Olayode Oyebanke — React apps, client sites, and personal builds."
        />
      </Helmet>

      <Navbar />

      <div style={{ background: "#030712" }} className="pt-24 px-6 md:px-20">
        <button
          onClick={() => navigate("/")}
          className="mb-4 text-sm flex items-center gap-1 transition"
          style={{ color: "#A6ADBB" }}
        >
          <FiArrowLeft />
          Back home
        </button>
      </div>

      <Projects preview={false} />

      <Footer />
    </>
  );
}
