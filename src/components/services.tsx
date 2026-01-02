"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/services-data";

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden bg-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-950 to-slate-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="text-sm font-medium text-teal-400">
              AI-Powered Advisory
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Executive Technology
            <span className="block bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              Partnership
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Strategic advisory for leaders navigating digital transformation.
            We combine deep technical expertise with executive-level counsel
            to accelerate your competitive advantage.
          </p>
        </div>

        {/* Featured Service - AI Strategy */}
        {services.filter(s => s.featured).map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group block mb-8"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-500">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  {/* Content */}
                  <div className="flex-1">
                    <Badge className="mb-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white border-0 shadow-lg shadow-teal-500/25">
                      Featured Service
                    </Badge>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-600/20 border border-teal-500/30">
                        <service.icon className="h-8 w-8 text-teal-400" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-teal-300 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-lg text-slate-300 mb-6 leading-relaxed max-w-2xl">
                      {service.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1.5 text-sm font-medium bg-slate-800/80 border border-slate-700 rounded-lg text-slate-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-teal-400 font-semibold group-hover:text-teal-300 transition-colors">
                      Explore AI Strategy
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  {/* Stats Card */}
                  {service.stats && (
                    <div className="lg:w-48 flex-shrink-0">
                      <div className="p-6 rounded-xl bg-gradient-to-br from-teal-500/10 to-orange-500/10 border border-slate-700/50 text-center">
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent mb-2">
                          {service.stats.value}
                        </div>
                        <div className="text-sm text-slate-400 uppercase tracking-wider">
                          {service.stats.label}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.filter(s => !s.featured).map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative"
            >
              <div className="h-full p-6 lg:p-8 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-600 hover:bg-slate-900/80 transition-all duration-300">
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon & Stats Row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 group-hover:border-teal-500/30 group-hover:bg-teal-500/10 transition-all">
                      <service.icon className="h-6 w-6 text-slate-400 group-hover:text-teal-400 transition-colors" />
                    </div>
                    {service.stats && (
                      <div className="text-right">
                        <div className="text-xl font-bold text-teal-400">
                          {service.stats.value}
                        </div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">
                          {service.stats.label}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.highlights.slice(0, 3).map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs font-medium px-2 py-1 bg-slate-800/60 border border-slate-700/50 rounded-md text-slate-400"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="flex items-center text-sm text-teal-500 font-medium group-hover:text-teal-400 transition-colors">
                    Learn more
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <p className="text-slate-300">
              Not sure which service fits your needs?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-semibold rounded-lg shadow-lg shadow-teal-500/25 transition-all"
            >
              Schedule a Strategy Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
