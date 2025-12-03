"use client";

import { useState, FormEvent, useEffect, useRef } from "react";

/**
 * Contact Component
 * Quote request form with contact information and animations
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

  const contactItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Call us directly",
      value: "(407) 274-3487",
      href: "tel:407-274-3487",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email us",
      value: "delancedrywall@gmail.com",
      href: "mailto:delancedrywall@gmail.com",
    },
  ];

  return (
    <section id="contact" className="bg-delance-black py-20 md:py-28 overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Contact info */}
          <div className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>
            <p className="text-delance-silver text-sm font-medium tracking-wider uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Start Your Project?
            </h2>

            <p className="text-delance-silver text-lg mb-8">
              Getting started is easy. Here&apos;s what to expect:
            </p>

            {/* Process steps */}
            <div className="space-y-4 mb-10">
              {[
                { step: "1", text: "Submit your request or give us a call" },
                { step: "2", text: "We schedule a convenient walkthrough" },
                { step: "3", text: "Receive your detailed, no-obligation quote" },
                { step: "4", text: "Approve and we schedule your project" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-4 transition-all duration-500
                             ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-delance-charcoal flex items-center 
                                  justify-center text-white text-sm font-bold flex-shrink-0
                                  border border-delance-gray/30">
                    {item.step}
                  </div>
                  <p className="text-delance-light">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div className={`space-y-4 pt-8 border-t border-delance-gray/30 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 text-white hover:text-delance-accent 
                             transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-delance-charcoal flex items-center 
                                  justify-center group-hover:bg-delance-gray group-hover:scale-110
                                  transition-all duration-300 border border-delance-gray/30">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-delance-silver">{item.label}</p>
                    <p className="font-semibold text-lg">{item.value}</p>
                  </div>
                </a>
              ))}

              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-xl bg-delance-charcoal flex items-center 
                                justify-center border border-delance-gray/30">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-delance-silver">Service area</p>
                  <p className="font-semibold">Orlando, FL & Central Florida</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-xl bg-delance-charcoal flex items-center 
                                justify-center border border-delance-gray/30">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-delance-silver">Business hours</p>
                  <p className="font-semibold text-sm">Mon–Fri: 7am–6pm | Sat: 7am–3pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            <div className="bg-delance-off-white rounded-3xl p-8 md:p-10 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center 
                                  justify-center mx-auto mb-6 animate-bounce">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-delance-black mb-2">Thank You!</h3>
                  <p className="text-delance-gray-mid">
                    We&apos;ve received your request and will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-delance-black mb-2">
                    Request Your Free Estimate
                  </h3>
                  <p className="text-delance-gray-mid mb-6">
                    Fill out the form below and we&apos;ll get back to you promptly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-delance-black mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-delance-light 
                                   focus:border-delance-black focus:ring-2 focus:ring-delance-black/10 
                                   outline-none transition-all duration-300 bg-white text-delance-black"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-delance-black mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-delance-light 
                                     focus:border-delance-black focus:ring-2 focus:ring-delance-black/10 
                                     outline-none transition-all duration-300 bg-white text-delance-black"
                          placeholder="you@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-delance-black mb-1">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-delance-light 
                                     focus:border-delance-black focus:ring-2 focus:ring-delance-black/10 
                                     outline-none transition-all duration-300 bg-white text-delance-black"
                          placeholder="(555) 555-5555"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-delance-black mb-1">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-delance-light 
                                   focus:border-delance-black focus:ring-2 focus:ring-delance-black/10 
                                   outline-none transition-all duration-300 bg-white text-delance-black"
                      >
                        <option value="">Select a project type</option>
                        <option value="drywall-install">Drywall Installation</option>
                        <option value="drywall-repair">Drywall Repair</option>
                        <option value="interior-painting">Interior Painting</option>
                        <option value="exterior-painting">Exterior Painting</option>
                        <option value="texture-removal">Texture Removal</option>
                        <option value="commercial">Commercial Project</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-delance-black mb-1">
                        Project Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-delance-light 
                                   focus:border-delance-black focus:ring-2 focus:ring-delance-black/10 
                                   outline-none transition-all duration-300 bg-white text-delance-black"
                        placeholder="e.g., Orlando, Winter Park"
                      />
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-delance-black mb-1">
                        Project Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-delance-light 
                                   focus:border-delance-black focus:ring-2 focus:ring-delance-black/10 
                                   outline-none transition-all duration-300 bg-white text-delance-black resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-delance-black text-white font-semibold py-4 px-6 
                                 rounded-xl hover:bg-delance-charcoal transition-all duration-300
                                 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Request Your Free Estimate
                    </button>

                    <p className="text-xs text-delance-silver text-center">
                      By submitting, you agree to be contacted about your project.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
