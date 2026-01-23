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
      console.log('LinkedIn API: Missing credentials. Using fallback data.');
      // Return empty array - component will use fallback placeholder data
      return NextResponse.json({ posts: [] }, {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      });
    }

    // Try UGC Posts API first (for personal posts)
    let response = await fetch(
      `https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(${encodeURIComponent(personUrn)})&count=10`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'X-Restli-Protocol-Version': '2.0.0',
        },
      }
    );

    // If UGC Posts API fails, try Share API as fallback
    if (!response.ok && response.status === 403) {
      console.log('UGC Posts API not available, trying Share API...');
      // Get your profile ID from personUrn
      const profileId = personUrn.replace('urn:li:person:', '');
      response = await fetch(
        `https://api.linkedin.com/v2/shares?q=owners&owners=List(${encodeURIComponent(personUrn)})&count=10`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'X-Restli-Protocol-Version': '2.0.0',
          },
        }
      );
    }

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      console.error('LinkedIn API error:', response.status, response.statusText, errorText);
      return NextResponse.json({ posts: [] }, {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
        },
      });
    }

    const data = await response.json();
    
    // Transform LinkedIn API response to our format
    // Handle both UGC Posts and Share API responses
    const posts: LinkedInPost[] = (data.elements || []).map((post: any) => {
      // UGC Posts API structure
      let text = post.specificContent?.shareContent?.shareCommentary?.text || '';
      let createdAt = post.created?.time ? new Date(post.created.time) : new Date();
      let postId = post.id || '';
      let permalink = post.permalink;
      let numLikes = post.numLikes || 0;
      let numComments = post.numComments || 0;

      // Share API structure (fallback)
      if (!text && post.text) {
        text = post.text.text || '';
      }
      if (!createdAt && post.created) {
        createdAt = new Date(post.created.time);
      }
      if (!postId && post.id) {
        postId = post.id;
      }

      const { title, excerpt } = parseLinkedInPost(text);
      
      return {
        id: postId,
        title,
        excerpt,
        likes: numLikes,
        comments: numComments,
        date: formatRelativeDate(createdAt),
        url: permalink || undefined,
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
