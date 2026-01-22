"use client";

import Image from "next/image";

export function ThesisFeature() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Thesis Preview */}
          <div className="relative group">
            <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-[8.5/11] relative bg-white rounded-lg overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 to-zinc-200 flex flex-col items-center justify-center p-8 text-center">
                  <div className="text-zinc-400 text-xs uppercase tracking-widest mb-4">
                    Master&apos;s Thesis
                  </div>
                  <h3 className="text-zinc-800 text-lg font-serif leading-tight mb-6">
                    Geological Research &amp; Analysis
                  </h3>
                  <div className="w-16 h-0.5 bg-sandstone-500 mb-6" />
                  <p className="text-zinc-500 text-sm">
                    Katie Wokasch
                  </p>
                  <p className="text-zinc-400 text-xs mt-2">
                    2015
                  </p>
                </div>
              </div>
              {/* Decorative paper stack effect */}
              <div className="absolute -bottom-2 left-4 right-4 h-4 bg-zinc-700 rounded-b-xl -z-10" />
              <div className="absolute -bottom-4 left-8 right-8 h-4 bg-zinc-600 rounded-b-xl -z-20" />
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-sandstone-500/10 rounded-3xl blur-2xl -z-30 group-hover:bg-sandstone-500/20 transition-colors duration-500" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sandstone-900/30 border border-sandstone-700/50 rounded-full text-sandstone-400 text-sm mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Academic Research
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Master&apos;s <span className="text-sandstone-500">Thesis</span>
            </h2>
            <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
              My graduate research explored the geological history and structural
              formations that shaped my understanding of Earth&apos;s dynamic processes.
              This work combined extensive field research with laboratory analysis.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sandstone-900/50 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sandstone-400 text-xs">1</span>
                </div>
                <p className="text-zinc-400">
                  Comprehensive field work across multiple geological sites
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sandstone-900/50 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sandstone-400 text-xs">2</span>
                </div>
                <p className="text-zinc-400">
                  Detailed stratigraphic analysis and sample collection
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sandstone-900/50 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sandstone-400 text-xs">3</span>
                </div>
                <p className="text-zinc-400">
                  Integration of field observations with laboratory data
                </p>
              </div>
            </div>
            <a
              href="/images/rocks/research/Lehmann_Masters Thesis_2015.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-sandstone-500 hover:bg-sandstone-400 text-zinc-900 font-semibold rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Full Thesis (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
