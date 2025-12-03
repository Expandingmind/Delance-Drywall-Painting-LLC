"use client";

import { useState, FormEvent, useEffect, useRef } from "react";

/**
 * Contact Component
 * Ultra-compact, aesthetic quote request form
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="bg-delance-black py-12 md:py-16 overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        <div className={`max-w-xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Get Your Free Estimate
            </h2>
            <p className="text-delance-silver text-sm">
              We respond within 24 hours
            </p>
          </div>

          {/* Form */}
          <div className="bg-delance-charcoal/50 rounded-xl p-5 border border-delance-gray/20">
            {isSubmitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center 
                                justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Thank You!</h3>
                <p className="text-delance-silver text-sm">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg bg-delance-black/60 border border-delance-gray/20 
                               focus:border-white/40 outline-none transition-all text-white text-sm placeholder-delance-silver"
                    placeholder="Name *"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg bg-delance-black/60 border border-delance-gray/20 
                               focus:border-white/40 outline-none transition-all text-white text-sm placeholder-delance-silver"
                    placeholder="Phone *"
                  />
                </div>

                {/* Row 2: Email & Project Type */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg bg-delance-black/60 border border-delance-gray/20 
                               focus:border-white/40 outline-none transition-all text-white text-sm placeholder-delance-silver"
                    placeholder="Email *"
                  />
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg bg-delance-black/60 border border-delance-gray/20 
                               focus:border-white/40 outline-none transition-all text-white text-sm appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center', backgroundSize: '16px' }}
                  >
                    <option value="" className="bg-delance-charcoal">Project type *</option>
                    <option value="drywall" className="bg-delance-charcoal">Drywall</option>
                    <option value="painting" className="bg-delance-charcoal">Painting</option>
                    <option value="both" className="bg-delance-charcoal">Both</option>
                    <option value="other" className="bg-delance-charcoal">Other</option>
                  </select>
                </div>

                {/* Row 3: Description */}
                <textarea
                  name="description"
                  rows={2}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-lg bg-delance-black/60 border border-delance-gray/20 
                             focus:border-white/40 outline-none transition-all text-white text-sm placeholder-delance-silver resize-none"
                  placeholder="Brief project description (optional)"
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-white text-delance-black font-semibold py-3 px-4 
                             rounded-lg hover:bg-delance-light transition-all duration-300 text-sm
                             hover:shadow-lg hover:shadow-white/10"
                >
                  Request Estimate →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
