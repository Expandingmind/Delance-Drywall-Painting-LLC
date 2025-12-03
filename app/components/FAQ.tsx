"use client";

import { useState, useEffect, useRef } from "react";

/**
 * FAQ Component
 * Compact, aesthetic accordion-style FAQ with white theme
 */

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes! We provide free, no-obligation estimates. We'll visit your property, assess the work, and provide a detailed quote within 24-48 hours.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Orlando and greater Central Florida including Winter Park, Lake Nona, Kissimmee, Sanford, Altamonte Springs, and surrounding areas.",
  },
  {
    question: "Residential and commercial?",
    answer:
      "Yes, we handle both. From single-room repaints to large commercial build-outs—our crews are experienced in all project sizes.",
  },
  {
    question: "How do you control dust?",
    answer:
      "We use plastic sheeting, professional dust barriers, and HEPA-filtered equipment. All furniture and floors are fully covered with daily cleanup.",
  },
  {
    question: "What warranty do you offer?",
    answer:
      "All work comes with a workmanship warranty. If issues arise from our installation—peeling, cracking, or visible seams—we'll fix it at no cost.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A single room takes 1-2 days. Full home interior with drywall work could be 1-2 weeks. We'll provide a timeline during your estimate.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-12 md:py-16 overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        <div className={`max-w-2xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-delance-black mb-2">
              Common Questions
            </h2>
            <p className="text-delance-gray-mid text-sm">
              Quick answers to help you get started
            </p>
          </div>

          {/* FAQ Grid - 2 columns on desktop */}
          <div className="grid md:grid-cols-2 gap-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-delance-off-white rounded-xl overflow-hidden transition-all duration-300
                           ${openIndex === index ? "ring-1 ring-delance-black/10" : ""}
                           ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 py-3 flex items-center justify-between text-left group"
                  aria-expanded={openIndex === index}
                >
                  <span className={`text-sm font-medium pr-2 transition-colors
                                   ${openIndex === index ? "text-delance-black" : "text-delance-gray-mid"}
                                   group-hover:text-delance-black`}>
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center 
                                transition-all duration-300 text-xs
                                ${openIndex === index 
                                  ? "bg-delance-black text-white rotate-180" 
                                  : "bg-delance-light text-delance-gray-mid"}`}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="px-4 text-delance-gray-mid text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
