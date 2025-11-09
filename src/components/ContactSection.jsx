import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser"; // ✅ Import EmailJS

// ---------------- Floating Particles ---------------- //
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random(),
            scale: Math.random() * 0.6 + 0.4,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// ---------------- Main Contact Section ---------------- //
export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const controls = useAnimation();
  const sectionRef = useRef(null);

  // Handle input change
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submit (SheetDB + EmailJS + popup)
  const handleSubmit = async (e) => {
    e.preventDefault();
    controls.start({ scale: [1, 1.05, 1], transition: { duration: 0.3 } });

    try {
      // 1️⃣ Send data to SheetDB
      const response = await fetch("https://sheetdb.io/api/v1/atokztnujkdkm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [
            {
              Name: formData.name,
              Email: formData.email,
              Message: formData.message,
            },
          ],
        }),
      });

      // 2️⃣ Send auto-reply email with EmailJS
      // ⚙️ Your template expects only {{name}}
      const emailParams = {
        name: formData.name,
        email: formData.email, // matches your template placeholder
      };

      const emailResponse = await emailjs.send(
        "service_p89yo3r",      // your service ID
        "template_ydzhwjj",     // your template ID
        emailParams,            // correct variables
        "bBUX_lbllZxpEp7AM"     // your public key
      );

      // 3️⃣ Show success popup if both succeed
      if (response.ok && emailResponse.status === 200) {
        Swal.fire({
          title: "✅ Message Sent!",
          text: "Thank you for contacting us. A confirmation email has been sent to your inbox!",
          icon: "success",
          background: "#0a0a0f",
          color: "#00ffff",
          confirmButtonColor: "#00ffff",
          confirmButtonText: "Awesome!",
          customClass: {
            popup: "rounded-2xl shadow-lg border border-cyan-400/30 backdrop-blur-lg",
          },
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error details:", error);
      Swal.fire({
        title: "⚠️ Error",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#ef4444",
        background: "#0a0a0f",
        color: "#fff",
      });
    }
  };

  // Glow effect following mouse
  const glowRef = useRef(null);
  useEffect(() => {
    const handleMove = (e) => {
      const section = sectionRef.current;
      const glow = glowRef.current;
      if (!section || !glow) return;
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative scroll-mt-24 w-full bg-[#0a0a0f] text-white py-24 px-6 sm:px-10 md:px-20 overflow-hidden"
    >
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Glow Trail */}
      <div
        ref={glowRef}
        className="absolute w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none transition-transform duration-1000"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center mb-14 relative z-10"
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-2xl mx-auto bg-gradient-to-br from-[#161616] to-[#0d0d0d] border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_50px_rgba(0,255,255,0.05)] z-10 backdrop-blur-md"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-transparent border border-white/20 focus:border-cyan-400/60 outline-none text-white placeholder-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-transparent border border-white/20 focus:border-cyan-400/60 outline-none text-white placeholder-gray-400"
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message..."
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-transparent border border-white/20 focus:border-cyan-400/60 outline-none text-white placeholder-gray-400 h-40 mb-8"
          required
        />

        {/* Submit Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px rgba(0, 255, 255, 0.4)",
            backgroundColor: "#00ffff",
            color: "#000",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-lg font-semibold bg-cyan-500 text-white transition-all"
        >
          Send Message <Send size={20} />
        </motion.button>
      </motion.form>

      {/* Telegram CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16 relative z-10"
      >
        <motion.a
          href="https://t.me/+1G2MYj8eFes2YWY1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.15,
            textShadow: "0 0 20px rgba(0,180,255,0.9)",
            boxShadow: "0 0 50px rgba(0,180,255,0.6)",
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
