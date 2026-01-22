"use client";

import { ReactNode } from "react";
import { useTenant } from "@/lib/tenants/context";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";

interface SocialLayoutProps {
  children: ReactNode;
}

export function SocialLayout({ children }: SocialLayoutProps) {
  const tenant = useTenant();

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 via-white to-pink-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors">
      {/* Decorative background shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-32 w-64 h-64 bg-navy-200/30 dark:bg-navy-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-navy-600/20 dark:bg-navy-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-48 h-38 bg-navy-800/20 dark:bg-navy-200/20 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md border-b border-navy-100 dark:border-navy-200">
        <div className="max-w-2xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl">👩‍💻</span>
              <div>
                <span className="font-bold text-navy-700 dark:text-navy-100">katiewokasch</span>
                <span className="text-navy-700/50 dark:text-navy-100/70">.social</span>
              </div>
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/"
                className="text-navy-700 dark:text-navy-100 hover:text-navy-600 dark:hover:text-navy-200 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-navy-700 dark:text-navy-100 hover:text-navy-600 dark:hover:text-navy-200 transition-colors"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="text-navy-700 dark:text-navy-100 hover:text-navy-600 dark:hover:text-navy-200 transition-colors"
              >
                About
              </Link>
              <ThemeToggle />
              <a
                href={`mailto:${tenant.socialLinks.email}`}
                className="px-4 py-2 bg-navy-400/70 dark:bg-navy-200 hover:bg-navy-700 dark:hover:bg-navy-100 text-white dark:text-neutral-900 rounded-full text-sm font-medium transition-colors"
              >
                Email me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-2xl mx-auto px-6 py-16 relative">{children}</main>

      {/* Footer */}
      <footer className="border-t border-navy-100 dark:border-navy-200 py-12 px-6 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm relative">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            <p className="flex items-center gap-2">
              Made with<span className="text-navy-700 dark:text-navy-100">♥</span>in Denver
            </p>
            <div className="flex items-center gap-6">
              {tenant.socialLinks.linkedin && (
                <a
                  href={tenant.socialLinks.linkedin}
                  className="hover:text-navy-600 dark:hover:text-navy-200 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-3 h-3 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
              <a
                href="https://bsky.app/profile/kwokasch.bsky.social"
                className="hover:text-navy-600 dark:hover:text-navy-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image 
                  src="/images/engineer/bluesky-logo.png" 
                  alt="Bluesky" 
                  width={20}
                  height={20}
                  className="w-3 h-3"
                />
              </a>  
              <a
                href="https://substack.com/@kwokasch"
                className="hover:text-navy-600 dark:hover:text-navy-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-3 h-3 text-[#FF6719]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
