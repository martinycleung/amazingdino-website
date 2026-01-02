"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Globe,
  Calendar,
  CheckCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

interface ContactProps {
  standalone?: boolean;
}

export function Contact({ standalone = false }: ContactProps) {
  const benefits = [
    "Complimentary IT posture assessment",
    "Custom architecture recommendations",
    "Multi-framework compliance gap analysis",
    "Executive strategy briefing",
  ];

  const bookingUrl = "https://calendly.com/amazingdino";

  return (
    <section
      id="contact"
      className={`relative overflow-hidden ${
        standalone ? "min-h-screen pt-24 lg:pt-32" : "py-24 lg:py-32"
      } bg-gray-50`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white/30 to-gray-50" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 border border-teal-500/20 rounded-full opacity-15" />
      <div className="absolute bottom-20 right-10 w-96 h-96 border border-gray-300/30 rounded-full opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-gray-300 text-gray-600 bg-white"
          >
            Start the Conversation
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Ready to <span className="text-teal-600">Transform</span> Your
            Technology?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Book a strategic consultation to discuss your enterprise IT
            objectives. No obligation, just actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Benefits */}
          <div className="space-y-8">
            <div className="p-8 bg-white border border-gray-200 rounded-sm shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Calendar className="h-6 w-6 text-teal-600" />
                What to Expect
              </h3>

              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white border border-gray-200 rounded-sm shadow-sm">
                <Mail className="h-5 w-5 text-teal-600 mb-3" />
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Email</h4>
                <p className="text-gray-600 text-sm">contact@amazingdino.au</p>
              </div>
              <div className="p-6 bg-white border border-gray-200 rounded-sm shadow-sm">
                <Globe className="h-5 w-5 text-teal-600 mb-3" />
                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                  Coverage
                </h4>
                <p className="text-gray-600 text-sm">Worldwide</p>
              </div>
            </div>
          </div>

          {/* Right Column - Booking CTA */}
          <div>
            <div className="p-8 lg:p-10 bg-white border border-gray-200 rounded-sm shadow-sm">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-50 border border-teal-200 rounded-sm mb-6">
                  <Calendar className="h-8 w-8 text-teal-600" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Schedule a Strategic Consultation
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  Choose a time that works for you. Our 30-minute consultation
                  covers your IT challenges and provides initial recommendations
                  at no cost.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-sm py-6 font-semibold shadow-lg shadow-teal-600/25 hover:shadow-teal-600/40 transition-all mb-4"
                >
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                    Book Your Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>

                <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Opens in Calendly
                </p>
              </div>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm text-gray-500">or</span>
                </div>
              </div>

              {/* Alternative Contact */}
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Prefer to reach out directly?
                </p>
                <a
                  href="mailto:contact@amazingdino.au"
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  contact@amazingdino.au
                </a>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Your information is confidential. We never share data with third
              parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
