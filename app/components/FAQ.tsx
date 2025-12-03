"use client";

import { useState } from "react";

/**
 * FAQ Component
 * Accordion-style frequently asked questions
 */

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do you offer free estimates?",
    answer:
      "Absolutely. We provide free, no-obligation estimates for all drywall and painting projects. One of our team members will visit your property, assess the scope of work, and provide a detailed written quote—typically within 24-48 hours of your request.",
  },
  {
    question: "What areas around Orlando do you serve?",
    answer:
      "We serve Orlando and the greater Central Florida area, including Winter Park, Lake Nona, Kissimmee, Sanford, Altamonte Springs, Oviedo, Clermont, and surrounding communities. If you're unsure whether we service your area, give us a call—we're happy to discuss your project.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes, we work on projects of all sizes. From single-room repaints and small drywall repairs in homes to large commercial build-outs, office renovations, and multi-unit residential projects. Our crews are experienced in both settings and understand the unique requirements of each.",
  },
  {
    question: "How do you control dust and protect my furniture?",
    answer:
      "Dust control is one of our top priorities. We use plastic sheeting to seal off work areas, professional-grade dust barriers, and HEPA-filtered equipment when sanding. All furniture, floors, and fixtures in or near the work area are fully covered. We also perform daily cleanup to minimize disruption to your daily life.",
  },
  {
    question: "What kind of warranty do you offer on your work?",
    answer:
      "We stand behind our craftsmanship. All drywall and painting work comes with a workmanship warranty. If any issues arise due to our installation or application—like peeling, cracking from improper technique, or visible seams—we'll make it right at no additional cost. Specific warranty terms are provided in your project contract.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope. A single room repaint might take 1-2 days, while a full home interior with drywall work could take 1-2 weeks. During your estimate, we'll provide a realistic timeline and keep you updated throughout the project if anything changes.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-delance-black mb-4">
            Common Questions About Delance Drywall & Painting
          </h2>
          <p className="text-delance-gray-mid max-w-2xl mx-auto">
            Have questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re 
            looking for, feel free to reach out directly.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-delance-light last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex items-center justify-between text-left 
                           group focus:outline-none focus-visible:ring-2 
                           focus-visible:ring-delance-black focus-visible:ring-offset-2 rounded"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-delance-black pr-4 
                                 group-hover:text-delance-gray-mid transition-colors">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-delance-off-white 
                              flex items-center justify-center transition-transform duration-300
                              ${openIndex === index ? "rotate-180" : ""}`}
                >
                  <svg
                    className="w-4 h-4 text-delance-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-delance-gray-mid leading-relaxed pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

