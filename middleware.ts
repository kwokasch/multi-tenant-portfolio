import { NextRequest, NextResponse } from "next/server";
import { domainToTenant } from "./lib/tenants/config";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  
  // Determine tenant based on domain
  const tenantSlug = domainToTenant[hostname] || "rocks";

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
