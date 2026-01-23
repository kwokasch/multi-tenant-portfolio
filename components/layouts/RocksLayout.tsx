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
            <div className="flex items-center gap-6 text-sm">
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
              <a
                href={`mailto:${tenant.socialLinks.email}`}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-medium rounded transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>{children}</main>
    </div>
  );
}
