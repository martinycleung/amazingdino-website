"use client";

import { ArrowRight, Shield, Network, Activity, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20 bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Gradient Overlay - Light theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

      {/* Abstract Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 border border-teal-500/30 rounded-full opacity-15" />
        <div className="absolute top-1/3 -right-16 w-64 h-64 border border-gray-300/40 rounded-full opacity-10" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full blur-3xl opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm">
              <Handshake className="w-4 h-4 mr-2 text-teal-600" />
              Your Trusted IT Partner
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Technology Solutions{" "}
            <span className="relative">
              <span className="text-teal-600">You Can Trust</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-teal-500/30 origin-left" />
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Strategic IT Consulting, Cybersecurity, and Digital Transformation
            for enterprises worldwide.{" "}
            <span className="text-gray-700 font-medium">
              Partner with us to future-proof your business.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white rounded-sm px-8 py-6 text-lg font-semibold shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 transition-all group"
            >
              <Link href="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400 rounded-sm px-8 py-6 text-lg font-semibold transition-all"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>

          {/* Stats/Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            {[
              {
                icon: Shield,
                value: "IT Assessment",
                label: "Infrastructure & Security",
              },
              {
                icon: Network,
                value: "Vendor Advisory",
                label: "RFP & Outsourcing",
              },
              {
                icon: Activity,
                value: "Executive-Level",
                label: "Strategic Consulting",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all"
              >
                <stat.icon className="h-6 w-6 text-teal-600 mb-3" />
                <span className="text-xl font-bold text-gray-900 mb-1 text-center">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500 text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
}
