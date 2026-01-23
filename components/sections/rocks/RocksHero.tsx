"use client";

import Image from "next/image";
import { useTenant } from "@/lib/tenants/context";
import { useState, useEffect, useCallback } from "react";

// Field photo data - update this array to change carousel content
const fieldPhotos = [
  {
    id: 1,
    src: "/images/rocks/LRG_DSC00302.JPG",
    title: "Andean Mountains, Peru",
    description: "Exploring high-altitude geological formations in the Peruvian Andes",
    location: {
      lat: -13.1631,
      lng: -72.5450,
      name: "Peru"
    }
  },
  {
    id: 2,
    src: "/images/rocks/IMG_1824.JPG",
    title: "Paradox Basin, Utah",
    description: "Salt wall structures and evaporite deposits in the Colorado Plateau",
    location: {
      lat: 38.5733,
      lng: -109.5498,
      name: "Moab, Utah"
    }
  },
  {
    id: 3,
    src: "/images/rocks/meteora.jpg",
    title: "Meteora, Greece",
    description: "Metamorphic rocks and tectonic history of the Aegean region",
    location: {
      lat: 40.0859,
      lng: 22.3583,
      name: "Greece"
    }
  },
];

const funFacts = [
  "There were TWO Rocky Mountain building events, one 300 million years ago and one 80 million years ago",
  "There have been 5 mass extinction events in Earth's history: Ordovician, Devonian, Permian-Triassic ('Great Dying'), Triassic-Jurassic, and Cretaceous-Paleogene (K-Pg, ending the dinosaurs)",
  "Humans are closer in time to T. rex than T. rex was to Stegosaurus"
];

export function RocksHero() {
  const tenant = useTenant();
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % fieldPhotos.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + fieldPhotos.length) % fieldPhotos.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentPhoto = fieldPhotos[currentIndex];

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/30 border border-emerald-700/50 rounded-full text-emerald-400 text-sm mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Former geologist, lifelong nerd
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              I collect rocks
              <br />
              <span className="text-emerald-500">and love to talk</span>
              <br />
              about them
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-lg">
              {tenant.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/projects"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-semibold rounded transition-colors"
              >
                View Gallery
              </a>
              <a
                href="/images/rocks/research/Lehmann_Masters Thesis_2015.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-zinc-600 hover:border-emerald-500 text-zinc-300 hover:text-emerald-500 rounded transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Master&apos;s Thesis
              </a>
            </div>
          </div>

          {/* Photo Carousel Card */}
          <div className="relative">
            <div className="bg-zinc-800 border border-zinc-700 rounded-2xl overflow-hidden">
              {/* Image Carousel */}
              <div className="aspect-[4/3] relative overflow-hidden">
                {fieldPhotos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-900/70 hover:bg-zinc-900/90 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Previous photo"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-900/70 hover:bg-zinc-900/90 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Next photo"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {fieldPhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-emerald-500 w-6"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Photo Info */}
              <div className="p-6">
                <span className="text-xs text-emerald-500 font-mono uppercase tracking-wider">
                  From the Field
                </span>
                <h3 className="text-xl font-bold text-zinc-100 mt-1 mb-2">
                  {currentPhoto.title}
                </h3>
                <p className="text-zinc-400 text-sm">
                  {currentPhoto.description}
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Fun fact banner */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 px-6">
          <p className="text-zinc-400 text-center italic">
            &ldquo;{randomFact}&rdquo;
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Favorite Field Site", value: "Mount Olympus", icon: "🇬🇷" },
            { label: "Favorite Rock", value: "Blue Schist", icon: "💎" },
            { label: "Favorite Period", value: "Cretaceous", icon: "🦖" },
            { label: "Dream Field Site", value: "The Himalayas", icon: "🏔️" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-6 text-center"
            >
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <p className="text-2xl font-bold text-emerald-500 mb-1">
                {stat.value}
              </p>
              <p className="text-zinc-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
