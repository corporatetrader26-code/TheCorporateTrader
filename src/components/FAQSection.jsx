import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import "./FAQSection.css";

const faqs = [
  {
    question: "What is The Corporate Trader?",
    answer:
      "The Corporate Trader provides structured, logic-based options and futures guidance — helping you trade with confidence, not emotion.",
  },
  {
    question: "Do I need prior trading experience?",
    answer:
      "Not at all. We teach from the ground up — from understanding structure to mastering execution psychology.",
  },
  {
    question: "How accurate are the signals?",
    answer:
      "Our signals are powered by institutional-level analysis and have maintained high consistency over time through strict discipline.",
  },
  {
    question: "Can I access it on mobile?",
    answer:
      "Yes! The Signaler community and resources are fully mobile-friendly so you can stay connected on the go.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes, if you’re not satisfied within the first 7 days, you can request a full refund — no questions asked.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [questionMarks, setQuestionMarks] = useState([]);
  const sectionRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ Generate floating question marks across full section height
  useEffect(() => {
    const generateMarks = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const markCount = window.innerWidth < 768 ? 20 : 45;

      const marks = Array.from({ length: markCount }).map(() => ({
        id: Math.random(),
        left: `${Math.random() * rect.width}px`,
        top: `${Math.random() * rect.height}px`,
        size: Math.random() * 22 + 12,
        speed: Math.random() * 10 + 6,
        drift: Math.random() * 20 - 10,
      }));
      setQuestionMarks(marks);
    };

    generateMarks();

    // ✅ Recalculate positions on resize
    window.addEventListener("resize", generateMarks);
    return () => window.removeEventListener("resize", generateMarks);
  }, []);

  // ✅ Handle pop and regenerate mark
  const handlePop = (id) => {
    setQuestionMarks((prev) => prev.filter((m) => m.id !== id));
    setTimeout(() => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setQuestionMarks((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: `${Math.random() * rect.width}px`,
          top: `${Math.random() * rect.height}px`,
          size: Math.random() * 22 + 12,
          speed: Math.random() * 10 + 6,
          drift: Math.random() * 20 - 10,
        },
      ]);
    }, 2000);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="scroll-mt-24 w-full bg-[#0a0a0f] text-white py-24 px-6 sm:px-10 md:px-20 relative overflow-hidden"
    >
      {/* 🌟 Floating Question Marks Layer */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {questionMarks.map((mark) => (
          <span
            key={mark.id}
            onClick={() => handlePop(mark.id)}
            className="floating-mark"
            style={{
              left: mark.left,
              top: mark.top,
              fontSize: `${mark.size}px`,
              animationDuration: `${mark.speed}s`,
              "--drift": `${mark.drift}px`,
            }}
          >
            ?
          </span>
        ))}
      </div>

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-4xl font-bold mb-4">
          Frequently Asked <i>Questions</i>
        </h2>
        <p className="text-gray-400 text-base">
          Everything you need to know before you start your journey with The
          Signaler.
        </p>
      </div>

      {/* FAQ Cards */}
      <div className="max-w-3xl mx-auto space-y-4 relative z-10">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => toggleFAQ(index)}
            className="border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-[#151515] to-[#0d0d0d] cursor-pointer
                       transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
              <ChevronDown
                size={22}
                className={`transition-transform duration-300 ${
                  openIndex === index
                    ? "rotate-180 text-gray-300"
                    : "text-gray-500"
                }`}
              />
            </div>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-40 opacity-100 mt-3 faq-open"
                  : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <p className="text-gray-400 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
