"use client";

import { ReactNode } from "react";
import { useTenant } from "@/lib/tenants/context";
import Link from "next/link";

interface RocksLayoutProps {
  children: ReactNode;
}

export function RocksLayout({ children }: RocksLayoutProps) {
  const tenant = useTenant();

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100">
      {/* Navigation - Field notebook style */}
      <nav className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur border-b border-stone-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl">🪨</span>
              <div>
                <span className="font-bold text-amber-500">katiewokasch</span>
                <span className="text-stone-400">.rocks</span>
              </div>
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/"
                className="text-stone-400 hover:text-amber-500 transition-colors"
              >
                Field Notes
              </Link>
              <Link
                href="/projects"
                className="text-stone-400 hover:text-amber-500 transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="text-stone-400 hover:text-amber-500 transition-colors"
              >
                About
              </Link>
              <a
                href={`mailto:${tenant.socialLinks.email}`}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-stone-900 font-medium rounded transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-stone-700 mt-24 py-12 px-6 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4 text-stone-500 text-sm">
              <span>Made with mass igneous enthusiasm</span>
              <span>•</span>
              <span>&copy; {new Date().getFullYear()}</span>
            </div>
            <div className="flex gap-4 text-stone-500">
              {tenant.socialLinks.github && (
                <a
                  href={tenant.socialLinks.github}
                  className="hover:text-amber-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {tenant.socialLinks.twitter && (
                <a
                  href={tenant.socialLinks.twitter}
                  className="hover:text-amber-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
