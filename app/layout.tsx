import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { TenantProvider } from "@/lib/tenants/context";
import { ThemeProvider } from "@/lib/theme/context";
import { getTenantBySlug } from "@/lib/tenants/config";
import { TenantSlug } from "@/lib/tenants/types";

// Force dynamic rendering to ensure middleware runs
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const tenantSlug = (headersList.get("x-tenant") || "rocks") as TenantSlug;
  const tenant = getTenantBySlug(tenantSlug);

  return {
    title: `${tenant.name} | ${tenant.tagline}`,
    description: tenant.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const tenantSlug = (headersList.get("x-tenant") || "rocks") as TenantSlug;
  const tenant = getTenantBySlug(tenantSlug);

  return (
    <html lang="en" data-theme={tenant.slug}>
      <body>
        <ThemeProvider>
          <TenantProvider tenant={tenant}>
            {children}
          </TenantProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
