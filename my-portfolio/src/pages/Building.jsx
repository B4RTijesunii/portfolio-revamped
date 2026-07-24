import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CurrentlyBuilding from "../components/CurrentlyBuilding";

export default function Building() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Currently Building | Olayode Oyebanke</title>
        <meta
          name="description"
          content="A running list of what Olayode Oyebanke is actively building right now — in-progress projects, not yet finished."
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

      <CurrentlyBuilding preview={false} />

      <Footer />
    </>
  );
}
