import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nomo Labs | Smart Automated Trading",
  description: "Nomo is an automated trading platform designed to help you trade smarter with less stress. Trade smarter while Nomo does the work.",
  keywords: ["automated trading", "crypto trading", "trading bot", "Nomo Labs", "smart trading"],
  openGraph: {
    title: "Nomo Labs | Smart Automated Trading",
    description: "Nomo is an automated trading platform designed to help you trade smarter with less stress. Trade smarter while Nomo does the work.",
    url: "https://nomolabs.io",
    siteName: "Nomo Labs",
    images: [
      {
        url: "/assets/nomo.png",
        width: 1200,
        height: 630,
        alt: "Nomo Labs Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomo Labs | Smart Automated Trading",
    description: "Nomo is an automated trading platform designed to help you trade smarter with less stress.",
    creator: "@NomoSATMr",
    images: ["/assets/nomo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-glow overflow-x-hidden">
        <div className="bg-grid flex min-h-full flex-col">
          <Header />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
