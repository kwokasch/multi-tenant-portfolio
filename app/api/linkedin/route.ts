import { NextResponse } from "next/server";

interface LinkedInPost {
  id: string;
  title: string;
  excerpt: string;
  likes: number;
  comments: number;
  date: string;
  url?: string;
}

// Helper function to format date relative to now
function formatRelativeDate(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return "just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 604800)}w ago`;
  return `${Math.floor(diffInSeconds / 2592000)}mo ago`;
}

// Helper function to extract title and excerpt from LinkedIn post text
function parseLinkedInPost(text: string): { title: string; excerpt: string } {
  // Try to extract first line as title, rest as excerpt
  const lines = text.split('\n').filter(line => line.trim());
  const title = lines[0]?.trim() || "LinkedIn Post";
  const excerpt = lines.slice(1).join(' ').trim().substring(0, 150) || text.substring(0, 150);
  
  return {
    title: title.length > 80 ? title.substring(0, 80) + "..." : title,
    excerpt: excerpt.length < text.length ? excerpt + "..." : excerpt,
  };
}

export async function GET() {
  try {
    const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
    const personUrn = process.env.LINKEDIN_PERSON_URN; // e.g., "urn:li:person:YOUR_ID"
    
    // LinkedIn requires OAuth for API access. If you want to avoid OAuth setup,
    // you can manually update the placeholder data in SocialHero.tsx instead.
    // This API route will return empty array, and the component will use fallback data.
    if (!accessToken || !personUrn) {
      // Return empty array - component will use fallback placeholder data
      return NextResponse.json({ posts: [] }, {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      });
    }

    // Fetch UGC posts from LinkedIn API v2
    // Note: This requires proper OAuth setup and may need different endpoints based on your LinkedIn app permissions
    const response = await fetch(
      `https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(${encodeURIComponent(personUrn)})&count=10`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'X-Restli-Protocol-Version': '2.0.0',
        },
      }
    );

    if (!response.ok) {
      console.error('LinkedIn API error:', response.status, response.statusText);
      return NextResponse.json({ posts: [] }, {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
        },
      });
    }

    const data = await response.json();
    
    // Transform LinkedIn API response to our format
    const posts: LinkedInPost[] = (data.elements || []).map((post: any) => {
      const text = post.specificContent?.shareContent?.shareCommentary?.text || '';
      const { title, excerpt } = parseLinkedInPost(text);
      const createdAt = post.created?.time ? new Date(post.created.time) : new Date();
      
      return {
        id: post.id || '',
        title,
        excerpt,
        likes: post.numLikes || 0,
        comments: post.numComments || 0,
        date: formatRelativeDate(createdAt),
        url: post.permalink || undefined,
      };
    });

    return NextResponse.json({ posts }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching LinkedIn posts:', error);
    return NextResponse.json(
      { posts: [] },
      {
        status: 500,
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
        },
      }
    );
  }
}
