"use client";

import Image from "next/image";
import { useTenant } from "@/lib/tenants/context";

// Geology field photos/research - update map images for each location
const rocksProjects = [
  {
    title: "Andean Field Research",
    description: "Documenting geological formations and collecting samples in the Peruvian Andes",
    location: "Cusco, Peru",
    date: "2018",
    type: "Exploration",
    image: "/images/rocks/LRG_DSC00302.JPG",
    mapImage: "/images/rocks/maps/peru.jpg",
  },
  {
    title: "Paradox Basin Formations",
    description: "Salt wall structures and evaporite deposits in the Colorado Plateau",
    location: "Moab, Utah",
    date: "2015",
    type: "Thesis Research",
    image: "/images/rocks/OnionCreek1-1030x773.jpg",
    mapImage: "/images/rocks/maps/moab.jpg",
  },
  {
    title: "Outcrop Analysis",
    description: "Studying exposed rock layers and their depositional history",
    location: "Naturita, CO",
    date: "2015",
    type: "Thesis Research",
    image: "/images/rocks/gypsum-valley.png",
    mapImage: "/images/rocks/maps/naturita.jpg",
  },
  {
    title: "Erosion Analysis",
    description: "Observing modern-day erosion",
    location: "Ouray, Colorado",
    date: "2022",
    type: "Exploration",
    image: "/images/rocks/LRG_DSC01201.JPG",
    mapImage: "/images/rocks/maps/ouray.jpg",
  },
  {
    title: "Seismic Interpretation",
    description: "Interpreting seismic data",
    location: "Gulf of Mexico",
    date: "2015",
    type: "Interpretation",
    image: "/images/rocks/seismic.png",
    mapImage: "/images/rocks/maps/gom.jpg",
  },
  {
    title: "'Research' with my favorite geologist",
    description: "Honeymooning in New Zealand",
    location: "Queenstown, NZ",
    date: "2019",
    type: "Photography",
    image: "/images/rocks/LRG_DSC02324.JPG",
    mapImage: "/images/rocks/maps/nz.jpg",
  },
];

// Dev projects - professional focus
const engineerProjects = [
  {
    title: "Multi-Tenant Portfolio",
    description: "This very site! A multi-tenant Next.js app serving different portfolio experiences from custom domains with dynamic theming.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    type: "Personal Project",
    link: "https://github.com/kwokasch",
  },
  {
    title: "Lost Pet Finder",
    description: "Helps reunite lost pets with their owners through community-powered search, shelter data scraping, and AI image recognition.",
    tech: ["React", "Python", "PostgreSQL"],
    type: "Personal Project",
    link: "https://github.com/kwokasch/lost-pet-finder",
  }
];

// Social/writing projects
type SocialProject = {
  title: string;
  description: string;
  platform: string;
  subscribers?: string;
  engagement?: string;
};

const socialProjects: SocialProject[] = [];

function RocksProjects() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Field <span className="text-emerald-500">Gallery</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            A collection of field research, photography, and geological specimens
            from my time as a geologist.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rocksProjects.map((project, i) => (
            <div
              key={i}
              className="group bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-colors"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  quality={85}
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-1 bg-emerald-900/30 text-emerald-400 rounded">
                    {project.type}
                  </span>
                  <span className="text-xs text-zinc-500">{project.date}</span>
                </div>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-emerald-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-2">{project.description}</p>
                    <p className="text-zinc-500 text-xs">📍 {project.location}</p>
                  </div>
                  <div className="w-24 h-24 rounded-lg overflow-hidden border border-zinc-600 flex-shrink-0">
                    <Image
                      src={project.mapImage}
                      alt={`Map of ${project.location}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngineerProjects() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Things I&apos;ve <span className="text-orange-500">Built</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            A selection of professional work and personal projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineerProjects.map((project, i) => (
            <div
              key={i}
              className="group bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all hover:bg-slate-800/80"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <span className={`text-xs px-2 py-1 rounded font-mono ${
                  project.type === "Professional"
                    ? "bg-orange-500/20 text-orange-400"
                    : project.type === "Personal Project"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-green-500/20 text-green-400"
                }`}>
                  {project.type}
                </span>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-slate-700/50 text-slate-400 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-orange-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProjects() {
  return (
    <section>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold pb-2 text-navy-700 dark:text-navy-100">🚀 What I&apos;m working on</h2>
        <p className="text-navy-600 dark:text-navy-200">
          Writing, projects, and things I&apos;m building.
        </p>
      </div>
      {socialProjects.length === 0 ? (
        <div className="p-12 bg-white/80 border border-navy-100 rounded-2xl text-center bg-white dark:bg-neutral-800 dark:border-neutral-700">
          <div className="text-3xl mb-4">📚💻💡</div>
          <h3 className="text-xl font-semibold text-navy-700 dark:text-navy-100 mb-2">
            Content Coming Soon
          </h3>
          <p className="text-navy-600/70 dark:text-navy-200/70">
            I&apos;m working on some exciting projects. Check back soon!
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {socialProjects.map((project, i) => (
            <article
              key={i}
              className="group p-6 bg-white/80 border border-navy-100 rounded-2xl hover:border-navy-300 hover:shadow-lg hover:shadow-navy-100/50 transition-all cursor-pointer bg-white dark:bg-neutral-800"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-navy-700 dark:text-navy-100 mb-1 group-hover:text-navy-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-navy-700/70 dark:text-navy-200/80 text-sm">{project.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm text-navy-600 dark:text-navy-200/80">{project.platform}</p>
                  <p className="text-sm font-medium text-navy-600 dark:text-navy-200/80">
                    {project.subscribers || project.engagement}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export function ProjectsSection() {
  const tenant = useTenant();

  switch (tenant.layout) {
    case "rocks":
      return <RocksProjects />;
    case "engineer":
      return <EngineerProjects />;
    case "social":
      return <SocialProjects />;
    default:
      return <RocksProjects />;
  }
}
