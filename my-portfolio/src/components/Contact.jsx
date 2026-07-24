import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_s5re3sf",
        "template_61pjdcq",
        form.current,
        "npHmsVfnHaWPPEpja",
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        () => {
          setStatus("error");
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative px-6 md:px-20 py-24 text-white overflow-hidden"
      style={{ background: "#030712" }}
    >
      {/* AMBIENT GOLD GLOW — same visual language as Hero */}
      <div
        className="absolute bottom-0 left-1/2 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: "rgba(243, 209, 138, 0.06)",
          filter: "blur(150px)",
          transform: "translateX(-50%)",
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16">
        {/* LEFT — copy, availability, contact details, socials */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="text-xs tracking-[0.2em] uppercase font-medium"
            style={{ color: "#D4A35A" }}
          >
            Let's connect
          </span>
          <h2
            className="text-3xl md:text-4xl font-medium mt-3 mb-4 leading-tight"
            style={{ color: "#FFFFFF" }}
          >
            Let's build something great together.
          </h2>
          <p className="mb-8" style={{ color: "#A6ADBB" }}>
            I'm currently available for freelance work and full-time
            opportunities. Reach out and I'll get back to you within a day or
            two.
          </p>

          {/* AVAILABILITY BADGE */}
          <div className="flex items-center gap-2 mb-8">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#22C55E" }}
            ></span>
            <span className="text-sm" style={{ color: "#E5E7EB" }}>
              Available for opportunities
            </span>
          </div>

          {/* CONTACT DETAILS */}
          <div className="space-y-4 mb-8 text-sm">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt style={{ color: "#7B8191" }} />
              <span style={{ color: "#A6ADBB" }}>Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope style={{ color: "#7B8191" }} />
              <a
                href="mailto:oyebankeolayode@gmail.com"
                className="transition hover:text-white"
                style={{ color: "#A6ADBB" }}
              >
                oyebankeolayode@gmail.com
              </a>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 text-lg" style={{ color: "#7B8191" }}>
            <a
              href="https://github.com/B4RTijesunii"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/olayode-oyebanke-876b44294/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT — form */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="p-8 rounded-xl"
          style={{ background: "#0D1323", border: "0.5px solid #1B2336" }}
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  className="block text-xs mb-2"
                  style={{ color: "#7B8191" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full p-3 rounded-lg text-sm outline-none transition"
                  style={{
                    background: "#141B2D",
                    border: "0.5px solid #252F46",
                    color: "#E5E7EB",
                  }}
                  onFocus={(e) =>
                    (e.target.style.border = "0.5px solid #F3D18A")
                  }
                  onBlur={(e) =>
                    (e.target.style.border = "0.5px solid #252F46")
                  }
                />
              </div>
              <div>
                <label
                  className="block text-xs mb-2"
                  style={{ color: "#7B8191" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full p-3 rounded-lg text-sm outline-none transition"
                  style={{
                    background: "#141B2D",
                    border: "0.5px solid #252F46",
                    color: "#E5E7EB",
                  }}
                  onFocus={(e) =>
                    (e.target.style.border = "0.5px solid #F3D18A")
                  }
                  onBlur={(e) =>
                    (e.target.style.border = "0.5px solid #252F46")
                  }
                />
              </div>
            </div>

            <div>
              <label
                className="block text-xs mb-2"
                style={{ color: "#7B8191" }}
              >
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full p-3 rounded-lg text-sm outline-none transition resize-none"
                style={{
                  background: "#141B2D",
                  border: "0.5px solid #252F46",
                  color: "#E5E7EB",
                }}
                onFocus={(e) => (e.target.style.border = "0.5px solid #F3D18A")}
                onBlur={(e) => (e.target.style.border = "0.5px solid #252F46")}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-lg font-medium text-sm transition-transform hover:scale-[1.01] disabled:opacity-60"
              style={{
                background: "rgba(243, 209, 138, 0.15)",
                color: "#F4D392",
                border: "0.5px solid #F3D18A",
              }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-center"
                style={{ color: "#22C55E" }}
              >
                Message sent successfully — I'll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-center"
                style={{ color: "#F87171" }}
              >
                Something went wrong — please try again, or email me directly.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact;
