import { TenantConfig, TenantSlug } from "./types";

export const tenants: Record<TenantSlug, TenantConfig> = {
  rocks: {
    slug: "rocks",
    name: "Katie Wokasch",
    domain: "katiewokasch.rocks",
    tagline: "Geologist & Rock Enthusiast",
    description: "Former geologist sharing field photos, research, and an unhealthy obsession with minerals",
    layout: "rocks",
    theme: {
      name: "rocks",
      background: "#1c1917",
      foreground: "#fafaf9",
      primary: "#d97706",
      secondary: "#a16207",
      accent: "#fbbf24",
      muted: "#292524",
      border: "#44403c",
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
      background: "#ffffff",
      foreground: "#171717",
      primary: "#171717",
      secondary: "#525252",
      accent: "#171717",
      muted: "#fafafa",
      border: "#e5e5e5",
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
