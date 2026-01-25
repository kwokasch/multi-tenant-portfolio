"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTenant } from "@/lib/tenants/context";

interface TimelineEntry {
  year: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "education" | "transition";
  logo?: string;
}

const timelineData: TimelineEntry[] = [
  // {
  //   year: "2026 - Present",
  //   title: "Manager, Product Engineering",
  //   company: "Name.com",
  //   description:
  //     "Bridging the gap between product and engineering. Leading a team of product managers and engineers to build the best products and experiences for our users.",
  //   type: "work",
  //   logo: "/images/engineer/name-logo.jpg",
  // },
  {
    year: "2023 - Present",
    title: "Senior Software Engineer ",
    company: "Name.com",
    description:
      "Building best-in-class products and experiences through deep cross-functional collaboration.",
    type: "work",
    logo: "/images/engineer/name-logo.jpg",
  },
  {
    year: "2021 - 2023",
    title: "Software Engineer",
    company: "Name.com",
    description:
      "Expanded my skill set and influence by taking on increasingly complex projects and assuming the role of Scrum Master.",
    type: "work",
    logo: "/images/engineer/name-logo.jpg",
  },
  {
    year: "2020 - 2021",
    title: "Associate Software Engineer",
    company: "Name.com",
    description:
      "Learned the ropes and building my passion for software engineering.",
    type: "work", 
    logo: "/images/engineer/name-logo.jpg",
  },
  {
    year: "2019",
    title: "Software Engineering Bootcamp",
    company: "Flatiron School",
    description:
      "Intensive 15-week full-stack web development bootcamp. JavaScript, React, Node.js, Ruby on Rails. Built Homeward Bound, a pet recovery platform.",
    type: "education",
    logo: "/images/engineer/flatiron-logo.jpg",
  },
  {
    year: "2014 - 2019",
    title: "Geologist",
    company: "Chevron",
    description:
      "Worked as a professional geologist in the oil and gas industry. Applied geological principles to exploration and production challenges at one of the world's largest energy companies.",
    type: "work",
    logo: "/images/engineer/chevron-logo.jpg",
  },
  {
    year: "2013 - 2015",
    title: "M.S. Geology",
    company: "Colorado School of Mines",
    description:
      "Earned a Master's degree in Geology. Studied structural geology, salt tectonics and sedimentology/stratigraphy. Explored the intersection of geology and technology.",
    type: "education",  
    logo: "/images/engineer/mines-logo.png",
  },
  {
    year: "2013",
    title: "Geo-tech Consultant",
    company: "Innovative Geo-tech Resources",
    description:
      "Applied geological expertise to technical consulting projects. Bridged the gap between field research and practical applications.",
    type: "work",
    logo: "/images/engineer/igr-logo.jpg",
  },
  {
    year: "2012",
    title: "B.S. Geology",
    company: "Miami University",
    description:
      "Developed a strong foundation in Earth sciences, field methods, and analytical techniques. Sparked a lifelong curiosity about how things work.",
    type: "education",
    logo: "/images/engineer/miami-logo.jpg",
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
          <div className="flex items-start gap-4 mb-3">
            {entry.logo && (
              <div className="flex-shrink-0">
                <Image
                  src={entry.logo}
                  alt={`${entry.company} logo`}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-fill rounded-full bg-white/5 border-2 border-white"
                />
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-orange-400 transition-colors">
                {entry.title}
              </h3>
              <p className="text-orange-500 font-medium">{entry.company}</p>
            </div>
          </div>
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
