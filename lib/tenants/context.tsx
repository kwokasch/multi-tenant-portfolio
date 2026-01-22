"use client";

import { createContext, useContext, ReactNode } from "react";
import { TenantConfig } from "./types";
import { tenants } from "./config";

const TenantContext = createContext<TenantConfig | null>(null);

interface TenantProviderProps {
  children: ReactNode;
  tenant: TenantConfig;
}

export function TenantProvider({ children, tenant }: TenantProviderProps) {
  return (
    <TenantContext.Provider value={tenant}>{children}</TenantContext.Provider>
  );
}

export function useTenant(): TenantConfig {
  const context = useContext(TenantContext);
  if (!context) {
    // Return default tenant if no provider (shouldn't happen in normal usage)
    return tenants.rocks;
  }
  return context;
}
