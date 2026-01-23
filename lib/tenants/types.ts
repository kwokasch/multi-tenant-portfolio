export type TenantSlug = "rocks" | "engineer" | "social";

export interface TenantTheme {
  name: string;
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
  border: string;
}

export interface TenantConfig {
  slug: TenantSlug;
  name: string;
  domain: string;
  tagline: string;
  description: string;
  theme: TenantTheme;
  layout: "rocks" | "engineer" | "social";
  socialLinks: {
    github?: string;
    linkedin?: string;
    blueSky?: string;
    twitter?: string;
    email?: string;
  };
}
