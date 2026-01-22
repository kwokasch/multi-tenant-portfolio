import { TenantConfig, TenantSlug } from "./types";

export const tenants: Record<TenantSlug, TenantConfig> = {
  rocks: {
    slug: "rocks",
    name: "Katie Wokasch",
    domain: "katiewokasch.rocks",
    tagline: "Geologist & Rock Enthusiast",
    description: "Former geologist sharing photos, research, and my passion for science",
    layout: "rocks",
    theme: {
      name: "rocks",
      background: "#18181b",
      foreground: "#fafaf9",
      primary: "#10b981",
      secondary: "#059669",
      accent: "#34d399",
      muted: "#27272a",
      border: "#3f3f46",
    },
    socialLinks: {
      github: "https://github.com/kwokasch",
      twitter: "https://twitter.com/kwokasch",
      email: "katie@katiewokasch.rocks",
    },
  },
  engineer: {
    slug: "engineer",
    name: "Katie Wokasch",
    domain: "katiewokasch.engineer",
    tagline: "Senior Software Engineer",
    description: "Building developer tools and APIs. Former geologist turned full-stack engineer.",
    layout: "engineer",
    theme: {
      name: "engineer",
      background: "#0f172a",
      foreground: "#e2e8f0",
      primary: "#f97316",
      secondary: "#3b82f6",
      accent: "#22c55e",
      muted: "#1e293b",
      border: "#334155",
    },
    socialLinks: {
      github: "https://github.com/kwokasch",
      linkedin: "https://linkedin.com/in/kwokasch",
      email: "katie@katiewokasch.engineer",
    },
  },
  social: {
    slug: "social",
    name: "Katie Wokasch",
    domain: "katiewokasch.social",
    tagline: "Writer & Builder",
    description: "Connecting ideas across platforms",
    layout: "social",
    theme: {
      name: "social",
      background: "#faf5ff",
      foreground: "#171717",
      primary: "#7c3aed",
      secondary: "#a855f7",
      accent: "#ec4899",
      muted: "#f3e8ff",
      border: "#ddd6fe",
    },
    socialLinks: {
      linkedin: "https://linkedin.com/in/kwokasch",
      twitter: "https://twitter.com/kwokasch",
      email: "katie@katiewokasch.social",
    },
  },
};

// Map domains to tenant slugs
export const domainToTenant: Record<string, TenantSlug> = {
  "katiewokasch.rocks": "rocks",
  "katiewokasch.engineer": "engineer",
  "katiewokasch.social": "social",
  // Local development
  "localhost:3000": "rocks",
  "rocks.localhost:3000": "rocks",
  "engineer.localhost:3000": "engineer",
  "social.localhost:3000": "social",
};

export function getTenantByDomain(domain: string): TenantConfig {
  const slug = domainToTenant[domain];
  if (slug) {
    return tenants[slug];
  }
  // Default to rocks for unknown domains
  return tenants.rocks;
}

export function getTenantBySlug(slug: TenantSlug): TenantConfig {
  return tenants[slug];
}
