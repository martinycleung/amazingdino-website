import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Get related services (excluding current)
  const relatedServices = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  const IconComponent = service.icon;

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
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-teal-500/5 to-transparent rounded-full blur-3xl opacity-10" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Link */}
            <div className="mb-8">
              <Link
                href="/services"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Services
              </Link>
            </div>

            <div className="max-w-4xl">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white border border-gray-200 rounded-sm mb-6 shadow-sm">
                <IconComponent className="h-8 w-8 text-teal-600" />
              </div>

              {/* Featured Badge */}
              {service.featured && (
                <Badge className="mb-4 bg-teal-500/10 text-teal-600 border-teal-500/20">
                  Featured Service
                </Badge>
              )}

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                {service.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {service.longDescription}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3 mb-10">
                {service.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="text-sm font-medium px-4 py-2 bg-white border border-gray-200 rounded-sm text-gray-700 shadow-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-sm px-8 py-6 text-lg font-semibold shadow-lg shadow-teal-600/25 hover:shadow-teal-600/40 transition-all"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-dots opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Benefits List */}
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 border-gray-300 text-gray-600 bg-gray-50"
                >
                  Key Benefits
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                  What You Get
                </h2>

                <div className="space-y-6">
                  {service.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-sm"
                    >
                      <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks / Additional Info */}
              <div className="space-y-8">
                {service.frameworks && (
                  <div className="p-8 bg-gray-50 border border-gray-200 rounded-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Compliance Frameworks
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Our expertise spans multiple international compliance
                      frameworks, ensuring your organization meets regulatory
                      requirements worldwide.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.frameworks.map((framework) => (
                        <div
                          key={framework}
                          className="p-4 bg-white border border-gray-200 rounded-sm text-center shadow-sm"
                        >
                          <span className="text-teal-600 font-semibold">
                            {framework}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Card */}
                <div className="p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-sm shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Schedule a consultation to discuss how our{" "}
                    {service.shortTitle} services can help protect and grow your
                    enterprise.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-sm py-6 font-semibold shadow-lg shadow-teal-600/25"
                  >
                    <Link href="/contact">Book a Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="relative py-16 lg:py-24 overflow-hidden bg-gray-50">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white/50 to-gray-50" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Related Services
              </h2>
              <p className="text-lg text-gray-600">
                Explore other ways we can help protect your enterprise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => {
                const RelatedIcon = relatedService.icon;
                return (
                  <div
                    key={relatedService.slug}
                    className="group"
                  >
                    <Link
                      href={`/services/${relatedService.slug}`}
                      className="block p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-gray-300 hover:shadow-md hover:-translate-y-1 transition-all h-full"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-sm mb-4 group-hover:border-teal-500/50 transition-colors">
                        <RelatedIcon className="h-6 w-6 text-teal-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                        {relatedService.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedService.description}
                      </p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
