import { NextResponse } from "next/server";

export async function GET() {
  // LinkedIn API setup is complex and requires OAuth.
  // For now, return empty array so component uses fallback data.
  // You can manually update the placeholder data in SocialHero.tsx instead.
  return NextResponse.json({ posts: [] }, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
