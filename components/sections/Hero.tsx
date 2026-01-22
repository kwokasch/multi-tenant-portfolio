"use client";

import { useTenant } from "@/lib/tenants/context";
import { RocksHero } from "./RocksHero";
import { EngineerHero } from "./EngineerHero";
import { SocialHero } from "./SocialHero";

export function Hero() {
  const tenant = useTenant();

  switch (tenant.layout) {
    case "rocks":
      return <RocksHero />;
    case "engineer":
      return <EngineerHero />;
    case "social":
      return <SocialHero />;
    default:
      return <RocksHero />;
  }
}
