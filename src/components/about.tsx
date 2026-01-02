"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  Globe,
  Briefcase,
  Target,
  ChevronRight,
} from "lucide-react";

const credentials = [
  { label: "Years Experience", value: "15+" },
  { label: "Global Clients", value: "100+" },
  { label: "Security Frameworks", value: "10+" },
  { label: "Successful Audits", value: "500+" },
];

const expertise = [
  "SASE & SD-WAN Architecture",
  "Zero Trust Implementation",
  "Multi-Framework Compliance",
  "Cloud Security Posture Management",
  "AI Governance & Data Security",
  "Executive Risk Advisory",
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 via-transparent to-gray-50/50" />

      {/* Abstract Shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-teal-500/20 rounded-full opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div>
            <Badge
              variant="outline"
              className="mb-4 border-gray-300 text-gray-600 bg-gray-50"
            >
              Meet Your Strategic Partner
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Strategic IT Leadership for the{" "}
              <span className="text-teal-600">Modern Enterprise</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Amazing Dino Consulting delivers executive-level IT and cybersecurity
              guidance to enterprises worldwide. We bring the strategic perspective of a
              Fortune 500 IT operation to organizations navigating
              complex technology landscapes.
            </p>

            <div className="flex items-center gap-4 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-teal-600" />
                <span className="text-sm">Global Presence</span>
              </div>
              <Separator orientation="vertical" className="h-4 bg-gray-300" />
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-teal-600" />
                <span className="text-sm">Enterprise Focus</span>
              </div>
            </div>

            {/* Expertise List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <ChevronRight className="h-4 w-4 text-teal-600 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats & Visual */}
          <div className="space-y-6">
            {/* Founder Card */}
            <div className="relative p-8 bg-white border border-gray-200 rounded-sm shadow-sm">
              {/* Abstract decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-500/5 to-transparent rounded-bl-full" />

              <div className="relative">
                {/* Profile Placeholder */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm flex items-center justify-center border border-gray-200">
                    <Award className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Founder & Principal Advisor
                    </h3>
                    <p className="text-gray-600">
                      Strategic IT Leadership
                    </p>
                  </div>
                </div>

                <blockquote className="text-gray-700 italic border-l-2 border-teal-500 pl-4 mb-6">
                  &quot;In technology, standing still means falling behind. We help
                  enterprises evolve faster than the challenges they face.&quot;
                </blockquote>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Target className="h-4 w-4 text-teal-600" />
                  <span>Serving Enterprises Worldwide</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 bg-white border border-gray-200 rounded-sm text-center shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all"
                >
                  <div className="text-3xl font-bold text-teal-600 mb-1">
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
  );
}
