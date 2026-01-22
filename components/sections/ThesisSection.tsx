"use client";

import { useTenant } from "@/lib/tenants/context";
import { ThesisFeature } from "./ThesisFeature";

export function ThesisSection() {
  const tenant = useTenant();

  // Only show thesis section on rocks tenant
  if (tenant.layout !== "rocks") {
    return null;
  }

  return <ThesisFeature />;
}
