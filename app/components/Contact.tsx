"use client";

import { useState, FormEvent, useEffect, useRef } from "react";

/**
 * Contact Component
 * Compact, aesthetic quote request form
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
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

  const processSteps = [
    { icon: "📋", text: "Submit request" },
    { icon: "📍", text: "Schedule walkthrough" },
    { icon: "💰", text: "Get your quote" },
    { icon: "🎉", text: "Project begins" },
  ];

  return (
    <section id="contact" className="bg-delance-black py-16 md:py-20 overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        {/* Header - centered */}
        <div className={`text-center mb-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to Start Your Project?
          </h2>
          <p className="text-delance-silver max-w-xl mx-auto">
            Get a free, no-obligation estimate. We&apos;ll respond within 24 hours.
          </p>
          
          {/* Process steps - horizontal on desktop */}
          <div className={`flex flex-wrap justify-center gap-3 md:gap-6 mt-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <span className="text-lg">{step.icon}</span>
                <span className="text-delance-silver">{step.text}</span>
                {index < processSteps.length - 1 && (
                  <svg className="w-4 h-4 text-delance-gray hidden md:block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form - centered and compact */}
        <div className={`max-w-2xl mx-auto transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="bg-delance-charcoal rounded-2xl p-6 md:p-8 border border-delance-gray/30">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center 
                                justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-delance-silver">
                  We&apos;ve received your request and will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name */}
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-delance-black/50 border border-delance-gray/30 
                               focus:border-white/50 focus:ring-1 focus:ring-white/20 
                               outline-none transition-all duration-300 text-white placeholder-delance-silver"
                    placeholder="Your name *"
                  />
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-delance-black/50 border border-delance-gray/30 
                               focus:border-white/50 focus:ring-1 focus:ring-white/20 
                               outline-none transition-all duration-300 text-white placeholder-delance-silver"
                    placeholder="Email *"
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-delance-black/50 border border-delance-gray/30 
                               focus:border-white/50 focus:ring-1 focus:ring-white/20 
                               outline-none transition-all duration-300 text-white placeholder-delance-silver"
                    placeholder="Phone *"
                  />
                </div>

                {/* Row 3: Project Type & Location */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-delance-black/50 border border-delance-gray/30 
                               focus:border-white/50 focus:ring-1 focus:ring-white/20 
                               outline-none transition-all duration-300 text-white appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                  >
                    <option value="" className="bg-delance-charcoal">Project type *</option>
                    <option value="drywall-install" className="bg-delance-charcoal">Drywall Installation</option>
                    <option value="drywall-repair" className="bg-delance-charcoal">Drywall Repair</option>
                    <option value="interior-painting" className="bg-delance-charcoal">Interior Painting</option>
                    <option value="exterior-painting" className="bg-delance-charcoal">Exterior Painting</option>
                    <option value="texture-removal" className="bg-delance-charcoal">Texture Removal</option>
                    <option value="commercial" className="bg-delance-charcoal">Commercial Project</option>
                    <option value="other" className="bg-delance-charcoal">Other</option>
                  </select>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-delance-black/50 border border-delance-gray/30 
                               focus:border-white/50 focus:ring-1 focus:ring-white/20 
                               outline-none transition-all duration-300 text-white placeholder-delance-silver"
                    placeholder="City (e.g., Orlando)"
                  />
                </div>

                {/* Row 4: Description */}
                <div>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-delance-black/50 border border-delance-gray/30 
                               focus:border-white/50 focus:ring-1 focus:ring-white/20 
                               outline-none transition-all duration-300 text-white placeholder-delance-silver resize-none"
                    placeholder="Tell us about your project (optional)"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-white text-delance-black font-semibold py-4 px-6 
                             rounded-xl hover:bg-delance-light transition-all duration-300
                             hover:shadow-xl hover:shadow-white/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get Your Free Estimate
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
