import { NextRequest, NextResponse } from "next/server";
import { getTenantSlugFromHostname } from "./lib/tenants/config";

export function middleware(request: NextRequest) {
  // Get hostname from various sources (production environments may use different headers)
  const hostHeader = request.headers.get("host") || "";
  const forwardedHost = request.headers.get("x-forwarded-host") || "";
  const urlHostname = request.nextUrl.hostname || "";
  
  // Use the first available hostname source
  const hostname = hostHeader || forwardedHost || urlHostname;
  
  // Determine tenant based on domain using robust matching
  const tenantSlug = getTenantSlugFromHostname(hostname);

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
