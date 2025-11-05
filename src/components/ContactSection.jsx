import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 w-full bg-[#0a0a0f] text-white py-24 px-6 sm:px-10 md:px-20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center mb-14"
      >
        <h2 className="text-4xl font-bold mb-4">
          Let’s <i>Connect</i>
        </h2>
        <p className="text-gray-400 text-base">
          Have questions or want to collaborate? Fill the form below — or reach us directly on Telegram.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-gradient-to-br from-[#161616] to-[#0d0d0d] border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <motion.input
            whileFocus={{ scale: 1.03, boxShadow: "0 0 20px rgba(255,255,255,0.15)" }}
            transition={{ duration: 0.2 }}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-transparent border border-white/20 focus:border-white/40 outline-none text-white placeholder-gray-400"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.03, boxShadow: "0 0 20px rgba(255,255,255,0.15)" }}
            transition={{ duration: 0.2 }}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-transparent border border-white/20 focus:border-white/40 outline-none text-white placeholder-gray-400"
            required
          />
        </div>

        <motion.textarea
          whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          transition={{ duration: 0.2 }}
          name="message"
          placeholder="Your Message..."
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-transparent border border-white/20 focus:border-white/40 outline-none text-white placeholder-gray-400 h-40 mb-8"
          required
        />

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.3)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          type="submit"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-lg font-semibold bg-white text-black transition"
        >
          Send Message <Send size={20} />
        </motion.button>
      </motion.form>

      {/* Join Telegram CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <motion.a
          href="https://t.me/+1G2MYj8eFes2YWY1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 50px rgba(0, 180, 255, 0.6)",
            textShadow: "0 0 20px rgba(0, 180, 255, 0.9)",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center gap-3 bg-[#0088cc] text-white text-lg font-bold px-10 py-4 rounded-full shadow-[0_0_40px_rgba(0,136,204,0.4)] transition"
        >
          <MessageCircle size={22} /> Join Our Telegram
        </motion.a>
      </motion.div>
    </section>
  );
}
