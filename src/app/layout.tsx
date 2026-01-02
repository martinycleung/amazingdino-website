import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Amazing Dino Consulting | Strategic Cybersecurity Solutions",
  description:
    "Premium Tier-1 Cybersecurity and Strategic Consultancy for enterprises worldwide. Fractional CISO, SASE Architecture, AI Governance, and multi-framework compliance.",
  keywords: [
    "cybersecurity consulting",
    "SASE architecture",
    "fractional CISO",
    "enterprise security",
    "ISO 27001",
    "SOC 2",
    "NIST",
    "GDPR",
    "AI governance",
    "cloud security",
    "DevSecOps",
  ],
  authors: [{ name: "Amazing Dino Consulting" }],
  openGraph: {
    title: "Amazing Dino Consulting | Strategic Cybersecurity Solutions",
    description:
      "Premium Tier-1 Cybersecurity and Strategic Consultancy for enterprises worldwide.",
    type: "website",
    locale: "en",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
