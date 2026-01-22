"use client";

import { ReactNode } from "react";
import { useTenant } from "@/lib/tenants/context";
import { RocksLayout } from "./RocksLayout";
import { EngineerLayout } from "./EngineerLayout";
import { SocialLayout } from "./SocialLayout";

interface TenantLayoutProps {
  children: ReactNode;
}

export function TenantLayout({ children }: TenantLayoutProps) {
  const tenant = useTenant();

  switch (tenant.layout) {
    case "rocks":
      return <RocksLayout>{children}</RocksLayout>;
    case "engineer":
      return <EngineerLayout>{children}</EngineerLayout>;
    case "social":
      return <SocialLayout>{children}</SocialLayout>;
    default:
      return <RocksLayout>{children}</RocksLayout>;
  }
}
