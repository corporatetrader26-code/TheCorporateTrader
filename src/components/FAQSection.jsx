import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import "./FAQSection.css"; // ✅ add CSS here for animations

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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="scroll-mt-24 w-full bg-[#0a0a0f] text-white py-24 px-6 sm:px-10 md:px-20"
    >
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Frequently Asked <i>Questions</i>
        </h2>
        <p className="text-gray-400 text-base">
          Everything you need to know before you start your journey with The Signaler.
        </p>
      </div>

      {/* FAQ Cards */}
      <div className="max-w-3xl mx-auto space-y-4">
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
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
              <ChevronDown
                size={22}
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-gray-300" : "text-gray-500"
                }`}
              />
            </div>

            {/* Animated Answer */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-40 opacity-100 mt-3 faq-open"
                  : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
