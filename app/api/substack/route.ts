import { NextResponse } from "next/server";

interface SubstackPost {
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  url: string;
}

// Helper function to format date
function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// Helper function to estimate read time from content
function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min`;
}

export async function GET() {
  try {
    // Substack publications have RSS feeds at: https://[username].substack.com/feed
    // You can configure this via environment variable or use a default
    const substackUsername = process.env.SUBSTACK_USERNAME || 'kwokasch';
    const rssFeedUrl = `https://${substackUsername}.substack.com/feed`;

    const response = await fetch(rssFeedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)',
      },
      next: {
        revalidate: 3600, // Revalidate every hour
      },
    });

    if (!response.ok) {
      console.error('Substack RSS feed error:', response.status, response.statusText);
      return NextResponse.json({ posts: [] }, {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
        },
      });
    }

    const xmlText = await response.text();
    
    // Parse RSS XML (simple parser - you might want to use a library like 'rss-parser' for production)
    const posts: SubstackPost[] = [];
    
    // Extract items from RSS feed
    const itemRegex = /<item>(.*?)<\/item>/gs;
    const items = xmlText.match(itemRegex) || [];
    
    // Limit to most recent 10 posts
    for (const item of items.slice(0, 10)) {
      const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/);
      const linkMatch = item.match(/<link>(.*?)<\/link>/);
      const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
      const descriptionMatch = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>|<description>(.*?)<\/description>/);
      
      if (titleMatch && linkMatch) {
        const title = titleMatch[1] || titleMatch[2] || '';
        const url = linkMatch[1] || '';
        const pubDate = pubDateMatch ? new Date(pubDateMatch[1]) : new Date();
        const description = descriptionMatch ? (descriptionMatch[1] || descriptionMatch[2] || '') : '';
        
        // Clean HTML tags from description
        const excerpt = description
          .replace(/<[^>]*>/g, '')
          .replace(/&nbsp;/g, ' ')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .trim()
          .substring(0, 200);
        
        posts.push({
          title: title.trim(),
          excerpt: excerpt + (excerpt.length >= 200 ? '...' : ''),
          readTime: estimateReadTime(description),
          date: formatDate(pubDate),
          url: url.trim(),
        });
      }
    }

    return NextResponse.json({ posts }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching Substack posts:', error);
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
