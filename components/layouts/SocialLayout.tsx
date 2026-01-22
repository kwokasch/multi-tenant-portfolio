"use client";

import { ReactNode } from "react";
import { useTenant } from "@/lib/tenants/context";
import Link from "next/link";

interface SocialLayoutProps {
  children: ReactNode;
}

export function SocialLayout({ children }: SocialLayoutProps) {
  const tenant = useTenant();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-pink-50 text-neutral-900">
      {/* Decorative background shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-32 w-64 h-64 bg-violet-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-violet-100">
        <div className="max-w-2xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <div>
                <span className="font-bold text-violet-700">katiewokasch</span>
                <span className="text-pink-400">.social</span>
              </div>
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/"
                className="text-neutral-600 hover:text-violet-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-neutral-600 hover:text-violet-600 transition-colors"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="text-neutral-600 hover:text-violet-600 transition-colors"
              >
                About
              </Link>
              <a
                href={`mailto:${tenant.socialLinks.email}`}
                className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-full text-sm font-medium transition-colors"
              >
                Say hi
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-2xl mx-auto px-6 py-16 relative">{children}</main>

      {/* Footer */}
      <footer className="border-t border-violet-100 py-12 px-6 bg-white/50 backdrop-blur-sm relative">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <p className="flex items-center gap-2">
              Made with <span className="text-pink-500">♥</span> in Denver
            </p>
            <div className="flex items-center gap-6">
              {tenant.socialLinks.linkedin && (
                <a
                  href={tenant.socialLinks.linkedin}
                  className="hover:text-violet-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              )}
              {tenant.socialLinks.twitter && (
                <a
                  href={tenant.socialLinks.twitter}
                  className="hover:text-violet-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
              )}
              <a
                href="https://substack.com/@kwokasch"
                className="hover:text-violet-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Substack
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
