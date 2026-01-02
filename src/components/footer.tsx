"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  services: [
    { label: "AI Strategy & Transformation", href: "/services/ai-strategy-transformation" },
    { label: "Cyber Resilience Advisory", href: "/services/cyber-resilience-advisory" },
    { label: "Digital Acceleration", href: "/services/digital-acceleration" },
    { label: "Strategic Technology Advisory", href: "/services/strategic-technology-advisory" },
    { label: "Intelligent Automation", href: "/services/intelligent-automation" },
    { label: "APAC Expansion", href: "/services/asia-pacific-expansion" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center mb-4">
                <Image
                  src="/logo.png"
                  alt="Amazing Dino - Your Trusted IT Partner"
                  width={160}
                  height={53}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-gray-600 max-w-md mb-6 leading-relaxed">
                Your trusted IT partner for strategic consulting, cybersecurity,
                and digital transformation. Technology evolves. Partner with us
                to stay ahead.
              </p>
              <a
                href="https://www.linkedin.com/company/amazing-dino-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors group"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm">Follow on LinkedIn</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-200" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            Amazing Dino Consulting {currentYear}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-700 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
