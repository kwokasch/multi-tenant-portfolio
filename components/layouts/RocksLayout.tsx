"use client";

import { ReactNode, useState } from "react";
import { useTenant } from "@/lib/tenants/context";
import Link from "next/link";

interface RocksLayoutProps {
  children: ReactNode;
}

export function RocksLayout({ children }: RocksLayoutProps) {
  const tenant = useTenant();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Navigation - Field notebook style */}
      <nav className="sticky top-0 z-50 bg-zinc-900/95 backdrop-blur border-b border-zinc-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl">🪨</span>
              <div>
                <span className="font-bold text-emerald-500">katiewokasch</span>
                <span className="text-zinc-400">.rocks</span>
              </div>
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              <Link
                href="/"
                className="text-zinc-400 hover:text-emerald-500 transition-colors"
              >
                Field Notes
              </Link>
              <Link
                href="/projects"
                className="text-zinc-400 hover:text-emerald-500 transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="text-zinc-400 hover:text-emerald-500 transition-colors"
              >
                About
              </Link>
            </div>
            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-emerald-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-zinc-700 pt-4">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-zinc-400 hover:text-emerald-500 transition-colors text-sm"
                >
                  Field Notes
                </Link>
                <Link
                  href="/projects"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-zinc-400 hover:text-emerald-500 transition-colors text-sm"
                >
                  Gallery
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-zinc-400 hover:text-emerald-500 transition-colors text-sm"
                >
                  About
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main content */}
      <main>{children}</main>
    </div>
  );
}
