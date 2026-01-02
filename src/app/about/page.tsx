"use client";

import Link from "next/link";
import {
  Award,
  Globe,
  Briefcase,
  Target,
  ChevronRight,
  ArrowRight,
  Shield,
  Users,
  Lightbulb,
  CheckCircle,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const credentials = [
  { label: "Years Experience", value: "15+" },
  { label: "Enterprise Clients", value: "50+" },
  { label: "Countries Served", value: "10+" },
  { label: "Projects Delivered", value: "200+" },
];

const expertise = [
  "IT Infrastructure Assessment",
  "IT Outsourcing Advisory",
  "Vendor & RFP Management",
  "Security Maturity Assessment",
  "Regulatory Compliance (NIST, ISO)",
  "Network Security Architecture",
  "Cloud & M365 Advisory",
  "Executive IT Strategy",
];

const values = [
  {
    icon: Shield,
    title: "Uncompromising Quality",
    description:
      "We never cut corners. Every recommendation, every implementation is designed to provide maximum value and protection.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We work alongside your teams, transferring knowledge and building internal capability, not dependence.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Innovation",
    description:
      "We stay ahead of emerging trends and technologies, ensuring your IT posture evolves with the landscape.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every engagement is focused on measurable outcomes that align with your business objectives.",
  },
];

const frameworks = [
  "ISO 27001",
  "SOC 2 Type I & II",
  "NIST CSF",
  "NIST 800-53",
  "GDPR",
  "PCI DSS",
  "ACSC Essential 8",
  "CIS Controls",
];

export default function AboutPage() {
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
            <div className="text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Badge
                variant="outline"
                className="mb-4 border-gray-300 text-gray-600 bg-white"
              >
                About Us
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Your Trusted IT Partner for the{" "}
                <span className="text-teal-600">Modern Enterprise</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Amazing Dino Consulting delivers executive-level IT and cybersecurity
                guidance to enterprises worldwide. Technology evolves.
                Partner with us to stay ahead.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-dots opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Column */}
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 border-gray-300 text-gray-600 bg-gray-50"
                >
                  Our Mission
                </Badge>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                  Empowering Enterprises to{" "}
                  <span className="text-teal-600">Thrive Securely</span>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  In a world where technology evolves daily, organizations
                  need more than reactive measures. They need strategic
                  partners who understand both the technical landscape and
                  business imperatives.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We bring Fortune 500 IT expertise to enterprises
                  worldwide, helping them build resilient, compliant, and
                  future-ready technology programs that protect today and prepare
                  for tomorrow.
                </p>

                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-teal-600" />
                    <span className="text-sm">Global Presence</span>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="h-4 bg-gray-300"
                  />
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-teal-600" />
                    <span className="text-sm">Enterprise Focus</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats */}
              <div>
                <div className="grid grid-cols-2 gap-4">
                  {credentials.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-8 bg-white border border-gray-200 rounded-sm text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                    >
                      <div className="text-4xl font-bold text-teal-600 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden bg-gray-50">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white/50 to-gray-50" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-teal-500/20 rounded-full opacity-10" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="p-10 bg-white border border-gray-200 rounded-sm shadow-sm relative">
                {/* Abstract decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-500/5 to-transparent rounded-bl-full" />

                <div className="relative">
                  {/* Profile */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm flex items-center justify-center border border-gray-200">
                      <Award className="h-10 w-10 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Founder & Principal Advisor
                      </h3>
                      <p className="text-gray-600 text-lg">
                        Strategic IT Leadership
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-xl text-gray-700 italic border-l-2 border-teal-600 pl-6 mb-8">
                    &quot;In technology, standing still means falling behind. We help
                    enterprises evolve faster than the challenges they face. Our
                    mission is to make enterprise-grade IT solutions accessible to
                    organizations worldwide.&quot;
                  </blockquote>

                  <div className="flex items-center gap-2 text-gray-500">
                    <Target className="h-5 w-5 text-teal-600" />
                    <span>Serving Enterprises Worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-dots opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge
                variant="outline"
                className="mb-4 border-gray-300 text-gray-600 bg-gray-50"
              >
                Our Values
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                What Drives Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-8 bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-sm mb-6">
                    <value.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden bg-gray-50">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white/50 to-gray-50" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Expertise */}
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 border-gray-300 text-gray-600 bg-white"
                >
                  Expertise
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                  Core Competencies
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {expertise.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-gray-300 transition-all"
                    >
                      <ChevronRight className="h-4 w-4 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 border-gray-300 text-gray-600 bg-white"
                >
                  Compliance
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                  Frameworks We Support
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {frameworks.map((framework) => (
                    <div
                      key={framework}
                      className="p-4 bg-white border border-gray-200 rounded-sm text-center shadow-sm hover:border-teal-500/30 transition-all"
                    >
                      <CheckCircle className="h-5 w-5 text-teal-600 mx-auto mb-2" />
                      <span className="text-gray-700 font-medium text-sm">
                        {framework}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Ready to Partner with Us?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                Let us help you build a technology program that protects your
                enterprise and enables growth. Schedule a strategic
                consultation today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white rounded-sm px-8 py-6 text-lg font-semibold shadow-lg shadow-teal-600/25 hover:shadow-teal-600/40 transition-all"
                >
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-sm px-8 py-6 text-lg font-semibold"
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
