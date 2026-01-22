"use client";

import Image from "next/image";
import { useTenant } from "@/lib/tenants/context";

const funFacts = [
  "Did you know? The oldest rock on Earth is ~4.4 billion years old",
  "Hot take: Schist happens (literally, it's metamorphic)",
  "Geologists: We really dig our work",
  "I have a rock collection. It's not my fault, they're all so gneiss",
];

export function RocksHero() {
  const tenant = useTenant();
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-900/30 border border-amber-700/50 rounded-full text-amber-500 text-sm mb-6">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              Former geologist, current rock hoarder
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              I collect rocks
              <br />
              <span className="text-amber-500">and take pictures</span>
              <br />
              of them
            </h1>
            <p className="text-xl text-stone-400 mb-8 max-w-lg">
              {tenant.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/projects"
                className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-900 font-semibold rounded transition-colors"
              >
                View Gallery
              </a>
              <a
                href="/images/rocks/research/Lehmann_Masters Thesis_2015.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-stone-600 hover:border-amber-600 text-stone-300 hover:text-amber-500 rounded transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Master&apos;s Thesis
              </a>
            </div>
          </div>

          {/* Featured Photo Card */}
          <div className="relative">
            <div className="bg-stone-800 border border-stone-700 rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/rocks/LRG_DSC00312.JPG"
                  alt="Field geology photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-amber-500 font-mono uppercase tracking-wider">
                    From the Field
                  </span>
                </div>
                <h3 className="text-xl font-bold text-stone-100 mb-2">
                  Field Work
                </h3>
                <p className="text-stone-400 text-sm">
                  Exploring geological formations
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-600/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-600/5 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Fun fact banner */}
        <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-6">
          <p className="text-stone-400 text-center italic">
            &ldquo;{randomFact}&rdquo;
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Field Sites Visited", value: "47", icon: "🗺️" },
            { label: "Specimens Collected", value: "200+", icon: "💎" },
            { label: "Papers Published", value: "1", icon: "📄" },
            { label: "Puns Made", value: "∞", icon: "😅" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-stone-800/30 border border-stone-700/50 rounded-xl p-6 text-center"
            >
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <p className="text-3xl font-bold text-amber-500 mb-1">
                {stat.value}
              </p>
              <p className="text-stone-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
