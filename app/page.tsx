/**
 * Delance Drywall & Painting LLC - Main Landing Page
 * 
 * A modern, professional marketing website showcasing drywall and painting
 * services in Orlando, FL and Central Florida.
 * 
 * Built with Next.js 14, TypeScript, and Tailwind CSS
 */

import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import PainlessSection from "./components/PainlessSection";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Top notification bar */}
      <TopBar />
      
      {/* Main navigation - sticky */}
      <Navigation />
      
      {/* Hero section with headline and CTA */}
      <Hero />
      
      {/* Customer reviews/testimonials */}
      <Reviews />
      
      {/* Services grid */}
      <Services />
      
      {/* Project gallery */}
      <Gallery />
      
      {/* "Drywall is messy, we make it painless" section */}
      <PainlessSection />
      
      {/* FAQ accordion */}
      <FAQ />
      
      {/* Contact form and info */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}

