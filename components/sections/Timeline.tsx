"use client";

import { useEffect, useRef, useState } from "react";
import { useTenant } from "@/lib/tenants/context";

interface TimelineEntry {
  year: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "education" | "transition";
}

const timelineData: TimelineEntry[] = [
  {
    year: "2024",
    title: "Senior Software Engineer",
    company: "Name.com",
    description:
      "Leading API development and building best-in-class developer experiences. Making it easier than ever for partners to integrate domain services.",
    type: "work",
  },
  {
    year: "2021",
    title: "Software Engineer",
    company: "Name.com",
    description:
      "Full-stack development on domain registration and management platforms. Building scalable services and improving user experiences.",
    type: "work",
  },
  {
    year: "2019",
    title: "Career Transition",
    company: "Flatiron School",
    description:
      "Intensive 15-week full-stack web development bootcamp. JavaScript, React, Node.js, Ruby on Rails. Built Homeward Bound, a pet recovery platform.",
    type: "transition",
  },
  {
    year: "2014",
    title: "Geologist",
    company: "Chevron",
    description:
      "Worked as a professional geologist in the oil and gas industry. Applied geological principles to exploration and production challenges at one of the world's largest energy companies.",
    type: "work",
  },
  {
    year: "2013",
    title: "Geo-tech Consultant",
    company: "Innovative Geo-tech Resources",
    description:
      "Applied geological expertise to technical consulting projects. Bridged the gap between field research and practical applications.",
    type: "work",
  },
  {
    year: "2012",
    title: "B.S. Geology",
    company: "Miami University",
    description:
      "Developed a strong foundation in Earth sciences, field methods, and analytical techniques. Sparked a lifelong curiosity about how things work.",
    type: "education",
  },
];

function TimelineItem({
  entry,
  index,
  isVisible,
}: {
  entry: TimelineEntry;
  index: number;
  isVisible: boolean;
}) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8 gap-4`}
    >
      {/* Content Card */}
      <div
        className={`md:w-[calc(50%-2rem)] w-full transition-all duration-700 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : `opacity-0 ${isEven ? "md:-translate-x-12" : "md:translate-x-12"} translate-y-8`
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-colors group">
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`text-xs px-2 py-1 rounded font-mono ${
                entry.type === "work"
                  ? "bg-orange-500/20 text-orange-400"
                  : entry.type === "education"
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-green-500/20 text-green-400"
              }`}
            >
              {entry.type === "work"
                ? "WORK"
                : entry.type === "education"
                  ? "EDUCATION"
                  : "PIVOT"}
            </span>
            <span className="text-slate-500 text-sm font-mono">{entry.year}</span>
          </div>
          <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-orange-400 transition-colors">
            {entry.title}
          </h3>
          <p className="text-orange-500 font-medium mb-3">{entry.company}</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            {entry.description}
          </p>
        </div>
      </div>

      {/* Timeline Node */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-500 ${
          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 100 + 200}ms` }}
      >
        <div
          className={`w-4 h-4 rounded-full border-2 ${
            entry.type === "work"
              ? "border-orange-500 bg-orange-500/30"
              : entry.type === "education"
                ? "border-blue-500 bg-blue-500/30"
                : "border-green-500 bg-green-500/30"
          }`}
        />
      </div>

      {/* Spacer for opposite side */}
      <div className="md:w-[calc(50%-2rem)] hidden md:block" />
    </div>
  );
}

export function Timeline() {
  const tenant = useTenant();
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...Array.from(prev), index]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Only show on engineer tenant
  if (tenant.layout !== "engineer") {
    return null;
  }

  return (
    <section className="px-6 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            The <span className="text-orange-500">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From studying rocks to building software. A timeline of pivots,
            learning, and growth.
          </p>
        </div>

        {/* Timeline Line */}
        <div className="absolute left-1/2 top-40 bottom-20 w-px bg-gradient-to-b from-orange-500/50 via-slate-700 to-slate-700/0 hidden md:block" />

        {/* Timeline Items */}
        <div className="space-y-12 md:space-y-16">
          {timelineData.map((entry, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              data-index={index}
            >
              <TimelineItem
                entry={entry}
                index={index}
                isVisible={visibleItems.has(index)}
              />
            </div>
          ))}
        </div>

        {/* End decoration */}
        <div className="flex justify-center mt-16">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-orange-500 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <p className="text-slate-500 text-sm">And the journey continues...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
