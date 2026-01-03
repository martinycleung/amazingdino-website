import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Amazing Dino Consulting | AI Strategy & Enterprise Technology Advisory",
  description:
    "Transform your enterprise with AI-powered innovation. Strategic technology advisory, AI implementation, cyber resilience, and digital acceleration for forward-thinking executives.",
  keywords: [
    "AI strategy consulting",
    "enterprise AI transformation",
    "generative AI implementation",
    "digital transformation",
    "technology advisory",
    "executive technology consulting",
    "cyber resilience",
    "AI governance",
    "intelligent automation",
    "enterprise innovation",
    "APAC technology expansion",
    "C-suite advisory",
  ],
  authors: [{ name: "Amazing Dino Consulting" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Amazing Dino Consulting | AI Strategy & Enterprise Technology Advisory",
    description:
      "Transform your enterprise with AI-powered innovation. Strategic advisory for executives navigating digital transformation and emerging technology.",
    type: "website",
    locale: "en",
    siteName: "Amazing Dino Consulting",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazing Dino Consulting | AI Strategy & Enterprise Advisory",
    description:
      "Strategic AI and technology advisory for forward-thinking enterprises.",
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
