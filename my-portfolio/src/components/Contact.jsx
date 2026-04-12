import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s5re3sf",
        "template_61pjdcq",
        form.current,
        "npHmsVfnHaWPPEpja",
      )
      .then(
        () => {
          alert("Message sent succesfully!");
        },
        () => {
          alert("Failed to send message.");
        },
      );
  };
  return (
    <section
      id="contact"
      className="px-6 md:px-20 py-20 bg-white dark:bg-[#020617] text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-3xl font-bold mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact me</h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10"
          ></textarea>

          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
