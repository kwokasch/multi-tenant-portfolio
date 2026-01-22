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
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navigation - Ultra minimal */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-100">
        <div className="max-w-2xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <Link href="/" className="font-medium tracking-tight">
              {tenant.name}
            </Link>
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <Link
                href="/"
                className="hover:text-neutral-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="hover:text-neutral-900 transition-colors"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="hover:text-neutral-900 transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-2xl mx-auto px-6 py-16">{children}</main>

      {/* Footer - Minimal */}
      <footer className="border-t border-neutral-100 py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center text-sm text-neutral-400">
            <p>&copy; {new Date().getFullYear()}</p>
            <div className="flex items-center gap-6">
              {tenant.socialLinks.linkedin && (
                <a
                  href={tenant.socialLinks.linkedin}
                  className="hover:text-neutral-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              )}
              {tenant.socialLinks.twitter && (
                <a
                  href={tenant.socialLinks.twitter}
                  className="hover:text-neutral-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
              )}
              <a
                href={`mailto:${tenant.socialLinks.email}`}
                className="hover:text-neutral-900 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
