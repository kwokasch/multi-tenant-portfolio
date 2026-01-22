import { NextRequest, NextResponse } from "next/server";
import { domainToTenant, tenants } from "./lib/tenants/config";
import { TenantSlug } from "./lib/tenants/types";

const validTenants: TenantSlug[] = ["rocks", "engineer", "social"];

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const { searchParams } = request.nextUrl;

  // Check for tenant query param first (for demo/testing)
  const tenantParam = searchParams.get("tenant") as TenantSlug | null;

  let tenantSlug: TenantSlug;

  if (tenantParam && validTenants.includes(tenantParam)) {
    // Use query param if valid
    tenantSlug = tenantParam;
  } else {
    // Fall back to domain detection
    tenantSlug = domainToTenant[hostname] || "rocks";
  }

  // Clone the request headers and add tenant info
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-tenant", tenantSlug);
  requestHeaders.set("x-hostname", hostname);

  // Return response with modified headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes that don't need tenant
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
