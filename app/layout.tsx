import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asset Ally",
  description: "Thailand's best asset management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          {/* Header */}
          <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="AssetAlly Logo"
                  width={180}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link
                  href="/#features"
                  className="text-sm font-medium hover:text-blue-600 transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="/#benefits"
                  className="text-sm font-medium hover:text-blue-600 transition-colors"
                >
                  Benefits
                </Link>
                <Link
                  href="/pricing"
                  className="text-sm font-medium hover:text-blue-600 transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/#contact"
                  className="text-sm font-medium hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </nav>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </div>
            </div>
          </header>

          {/* Main content */}
          {children}

          {/* Footer */}
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="AssetAlly Logo"
                  width={120}
                  height={30}
                  className="h-6 w-auto"
                />
              </div>
              <p className="text-xs text-gray-600">
                © {new Date().getFullYear()} AssetAlly. All rights reserved.
                AssetAlly is a product of{" "}
                <span className="text-blue-900 font-bold">
                  Magic Box Solutions.
                </span>
              </p>
              <nav className="flex gap-4 sm:gap-6">
                <Link
                  href="#"
                  className="text-xs hover:underline underline-offset-4 text-gray-600"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-xs hover:underline underline-offset-4 text-gray-600"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-xs hover:underline underline-offset-4 text-gray-600"
                >
                  Support
                </Link>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
