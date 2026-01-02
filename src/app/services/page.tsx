"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gray-50">
          {/* Background */}
          <div className="absolute inset-0 bg-grid opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50" />

          {/* Abstract Shapes */}
          <div className="absolute top-1/4 -right-32 w-96 h-96 border border-teal-500/20 rounded-full opacity-15" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Badge
                variant="outline"
                className="mb-4 border-gray-300 text-gray-600 bg-white"
              >
                Our Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Comprehensive{" "}
                <span className="text-teal-600">IT Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                From vulnerability management to AI governance, we deliver
                strategic IT and security frameworks that protect your enterprise and
                enable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-16 lg:py-24 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-dots opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service) => (
                <div
                  key={service.slug}
                  className="group relative bg-white border border-gray-200 rounded-sm shadow-sm hover:border-gray-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="block p-8 lg:p-10 h-full"
                  >
                    {/* Gradient Hover Effect */}
                    <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      {/* Icon & Badge */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-50 border border-gray-200 rounded-sm group-hover:border-teal-500/50 transition-colors">
                          <service.icon className="h-7 w-7 text-teal-600" />
                        </div>
                        {service.featured && (
                          <Badge className="bg-teal-500/10 text-teal-600 border-teal-500/20">
                            Featured
                          </Badge>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">
                        {service.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                        {service.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="text-sm font-medium px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-gray-600"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Frameworks if available */}
                      {service.frameworks && (
                        <div className="mb-6">
                          <span className="text-sm text-gray-500 block mb-2">
                            Compliance Frameworks:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {service.frameworks.map((framework) => (
                              <span
                                key={framework}
                                className="text-xs font-medium px-2 py-1 bg-teal-50 border border-teal-200 rounded text-teal-700"
                              >
                                {framework}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Learn More */}
                      <div className="flex items-center text-teal-600 font-medium group-hover:text-teal-700 transition-colors">
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-50">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white/50 to-gray-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-teal-500/20 rounded-full opacity-10" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Ready to Transform Your IT?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                Let us help you build a technology posture that protects today and
                prepares for tomorrow. Schedule a strategic consultation.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-sm px-8 py-6 text-lg font-semibold shadow-lg shadow-teal-600/25 hover:shadow-teal-600/40 transition-all"
              >
                <Link href="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
