"use client";

import { ReactNode } from "react";
import { useTenant } from "@/lib/tenants/context";
import Link from "next/link";

interface EngineerLayoutProps {
  children: ReactNode;
}

export function EngineerLayout({ children }: EngineerLayoutProps) {
  const tenant = useTenant();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      {/* Top Navigation - Fun, playful */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="text-2xl group-hover:animate-bounce">🦔</div>
              <div>
                <span className="font-bold text-orange-500">kwokasch</span>
                <span className="text-slate-500">.engineer</span>
              </div>
            </Link>
            <div className="flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all text-sm"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all text-sm"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all text-sm"
              >
                About
              </Link>
              <a
                href={tenant.socialLinks.github}
                className="px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={`mailto:${tenant.socialLinks.email}`}
                className="ml-2 px-4 py-2 bg-orange-500 hover:bg-orange-400 text-slate-900 font-medium rounded-lg transition-colors text-sm"
              >
                Contact me 
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer - Quirky */}
      <footer className="border-t border-slate-700 mt-24 py-12 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">kwokasch.engineer</h3>
              <p className="text-slate-500 text-sm">
                Building things that occasionally work on the first try.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/projects" className="text-slate-500 hover:text-orange-500 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-slate-500 hover:text-orange-500 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href={tenant.socialLinks.github} className="text-slate-500 hover:text-orange-500 transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Status</h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-slate-500">All systems operational*</span>
              </div>
              <p className="text-slate-600 text-xs mt-2">*probably</p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-sm text-slate-600">
            <p>&copy; {new Date().getFullYear()} • Made with mass chaos and mass caffeine</p>
            <p className="font-mono text-xs">v0.0.1-alpha-probably-broken</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
