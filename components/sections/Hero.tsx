"use client";

import { useTenant } from "@/lib/tenants/context";
import { RocksHero } from "./rocks/RocksHero";
import { EngineerHero } from "./engineer/EngineerHero";
import { SocialHero } from "./social/SocialHero";

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
