"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTenant } from "@/lib/tenants/context";
import { TenantSlug } from "@/lib/tenants/types";

const themes: { slug: TenantSlug; label: string; color: string }[] = [
  { slug: "rocks", label: "Rocks", color: "#FF6B35" },
  { slug: "engineer", label: "Engineer", color: "#0066CC" },
  { slug: "social", label: "Social", color: "#8B5CF6" },
];

export function DemoSwitcher() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tenant = useTenant();

  const switchTenant = (slug: TenantSlug) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tenant", slug);
    router.push(`?${params.toString()}`);
    router.refresh();
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-black/90 backdrop-blur-lg rounded-full px-2 py-2 shadow-2xl border border-white/10">
      <div className="flex items-center gap-1">
        <span className="text-white/60 text-xs px-3 hidden sm:block">Demo:</span>
        {themes.map((theme) => (
          <button
            key={theme.slug}
            onClick={() => switchTenant(theme.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              tenant.slug === theme.slug
                ? "text-white"
                : "text-white/60 hover:text-white"
            }`}
            style={{
              backgroundColor:
                tenant.slug === theme.slug ? theme.color : "transparent",
            }}
          >
            {theme.label}
          </button>
        ))}
      </div>
    </div>
  );
}
