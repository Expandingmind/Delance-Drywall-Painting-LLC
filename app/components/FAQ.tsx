"use client";

import { useState, useEffect, useRef } from "react";

/**
 * FAQ Component
 * Accordion-style frequently asked questions with smooth animations
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
      "Yes, we work on projects of all sizes. From single-room repaints and small drywall repairs in homes to large commercial build-outs, office renovations, and multi-unit residential projects. Our crews are experienced in both settings.",
  },
  {
    question: "How do you control dust and protect my furniture?",
    answer:
      "Dust control is one of our top priorities. We use plastic sheeting to seal off work areas, professional-grade dust barriers, and HEPA-filtered equipment when sanding. All furniture, floors, and fixtures are fully covered. We also perform daily cleanup.",
  },
  {
    question: "What kind of warranty do you offer on your work?",
    answer:
      "We stand behind our craftsmanship. All drywall and painting work comes with a workmanship warranty. If any issues arise due to our installation or application—like peeling, cracking, or visible seams—we'll make it right at no additional cost.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope. A single room repaint might take 1-2 days, while a full home interior with drywall work could take 1-2 weeks. During your estimate, we'll provide a realistic timeline and keep you updated throughout.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    <section id="faq" className="bg-white py-20 md:py-28 overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-delance-gray-light text-sm font-medium tracking-wider uppercase mb-3">
            Got Questions?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-delance-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-delance-gray-mid max-w-2xl mx-auto text-lg">
            Have questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re 
            looking for, feel free to reach out directly.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-delance-light last:border-b-0 transition-all duration-500
                         ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${index * 50 + 300}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex items-center justify-between text-left 
                           group focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`text-lg font-semibold pr-4 transition-colors duration-300
                                 ${openIndex === index ? "text-delance-black" : "text-delance-gray-mid"}
                                 group-hover:text-delance-black`}>
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center 
                              justify-center transition-all duration-300
                              ${openIndex === index 
                                ? "bg-delance-black text-white rotate-180" 
                                : "bg-delance-off-white text-delance-black group-hover:bg-delance-light"}`}
                >
                  <svg
                    className="w-5 h-5"
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
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-delance-gray-mid leading-relaxed pr-16">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-delance-gray-mid mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-delance-black text-white 
                       font-semibold rounded-full hover:bg-delance-charcoal transition-all 
                       duration-300 hover:scale-105 hover:shadow-lg"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
