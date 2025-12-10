import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/app/data/services";
import type { Metadata } from "next";

/**
 * Individual Service Page
 * Dynamic route for detailed service information
 */

// Generate static params for all services
export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: "Service Not Found | Delance Drywall & Painting",
    };
  }

  return {
    title: `${service.title} | Delance Drywall & Painting Orlando`,
    description: service.fullDescription.slice(0, 160),
  };
}

export default async function ServicePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Find related services (excluding current)
  const relatedServices = services
    .filter(s => s.slug !== slug)
    .slice(0, 3);

  return (
    <main className="bg-delance-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-delance-black via-delance-black/60 to-transparent" />
        
        {/* Back button */}
        <Link
          href="/#services"
          className="absolute top-6 left-6 z-10 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm
                     rounded-full text-white text-sm font-medium hover:bg-black/70 transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Services
        </Link>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
          <div className="section-container">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-delance-black">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconPath} />
                </svg>
              </div>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm border border-white/20">
                Professional Service
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  About This Service
                </h2>
                <p className="text-delance-silver text-lg leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* What&apos;s Included */}
              <div className="bg-delance-charcoal rounded-3xl p-8 border border-delance-gray/30">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  What&apos;s Included
                </h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-delance-silver">
                      <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Process */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  Our Process
                </h3>
                <div className="space-y-4">
                  {service.process.map((step, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-4 p-4 rounded-2xl bg-delance-charcoal/50 border border-delance-gray/20
                                 hover:border-delance-gray/40 transition-all duration-300"
                    >
                      <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center 
                                       text-sm font-bold text-delance-black flex-shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-delance-silver pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-b from-delance-charcoal to-delance-charcoal-light rounded-3xl p-8 
                              border border-delance-gray/30 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-2">
                  Ready to Get Started?
                </h3>
                <p className="text-delance-silver mb-6">
                  Get a free estimate for your {service.title.toLowerCase()} project today.
                </p>

                <div className="space-y-3">
                  <a
                    href="/#contact"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-white text-delance-black 
                               font-semibold rounded-xl hover:bg-delance-light transition-all duration-300"
                  >
                    Get a Free Estimate
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="tel:407-274-3487"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 border border-delance-gray 
                               text-white font-semibold rounded-xl hover:bg-delance-gray/20 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (407) 274-3487
                  </a>
                </div>

                {/* Trust badges */}
                <div className="mt-6 pt-6 border-t border-delance-gray/30">
                  <div className="flex items-center gap-3 text-sm text-delance-silver">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Licensed & Insured
                  </div>
                  <div className="flex items-center gap-3 text-sm text-delance-silver mt-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    A+ BBB Rated
                  </div>
                  <div className="flex items-center gap-3 text-sm text-delance-silver mt-2">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Fast Response Time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-delance-charcoal/30">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Other Services You May Need
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((relatedService) => (
              <Link
                key={relatedService.slug}
                href={`/services/${relatedService.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-delance-charcoal border border-delance-gray/30
                           hover:border-delance-gray/60 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={relatedService.image}
                    alt={relatedService.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-delance-charcoal via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-delance-light transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-delance-silver text-sm mt-2 line-clamp-2">
                    {relatedService.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-delance-silver group-hover:text-white transition-colors">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-delance-black">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-delance-silver max-w-xl mx-auto mb-8">
            Get a free, no-obligation estimate for your project. We serve Orlando and all of Central Florida.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-delance-black font-semibold 
                         rounded-full hover:bg-delance-light transition-all duration-300 hover:scale-105"
            >
              Request Free Estimate
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-delance-gray text-white font-semibold 
                         rounded-full hover:bg-delance-gray/20 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

