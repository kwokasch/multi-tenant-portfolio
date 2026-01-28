"use client";

import { useEffect, useState } from "react";
import { useTenant } from "@/lib/tenants/context";

interface LinkedInPost {
  id?: string;
  title: string;
  excerpt: string;
  likes: number;
  comments: number;
  date: string;
  url?: string;
}

interface SubstackPost {
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  url: string;
}

export function SocialHero() {
  const tenant = useTenant();
  const [linkedInPosts, setLinkedInPosts] = useState<LinkedInPost[]>([
    {
      title: "I’ve been experimenting with Claude Code and Vercel and I’m honestly blown away 🤯",
      excerpt: "Using Claude Code with the Vercel MCP, I was able to spin up a multi-tenant app in minutes and serve multiple domains from a single Vercel-hosted codebase.",
      likes: 142,
      comments: 23,
      date: "Jan 27, 2026",
      url: "https://www.linkedin.com/posts/kwokasch_ive-been-experimenting-with-claude-code-activity-7422115955121635328-Kgq1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAO4gZ4BlqH4YH80tOwcnzGTuLkNdj3Fyt4",
    },
    {
      title: "This feels more important than ever.",
      excerpt: "This feels more important than ever.In the age of AI slop, the real differentiator is showing users that you genuinely care about their needs, and building products and solutions designed to remove friction and delight them along the way 🌷",
      likes: 142,
      comments: 23,
      date: "Jan 25, 2026",
      url: "https://www.linkedin.com/posts/kwokasch_bptw2026-2026builtinbest-activity-7419875105805107200-qoLz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAO4gZ4BlqH4YH80tOwcnzGTuLkNdj3Fyt4",
    },
    {
      title: "name.com has been included on the “Best Place to Work” award in Colorado",
      excerpt: "Incredibly proud to be part of this company, we’ve got another amazing year in store 🎉",
      likes: 142,
      comments: 23,
      date: "Jan 22, 2026",
      url: "https://www.linkedin.com/posts/kwokasch_bptw2026-2026builtinbest-activity-7419875105805107200-qoLz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAO4gZ4BlqH4YH80tOwcnzGTuLkNdj3Fyt4",
    },
    {
      title: "Our API team is hard at work",
      excerpt: "Our API team is hard at work building a best-in-class developer experience, making it easier than ever for partners to search for domains and help users bring their businesses online.",
      likes: 89,
      comments: 15,
      date: "Jan 18, 2026",
      url: "https://www.linkedin.com/posts/kwokasch_claims-flow-namecom-core-api-activity-7417220994983153664-4LF0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAO4gZ4BlqH4YH80tOwcnzGTuLkNdj3Fyt4",
    },
  ]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [substackPosts, setSubstackPosts] = useState<SubstackPost[]>([]);
  const [isLoadingSubstack, setIsLoadingSubstack] = useState(false);

  useEffect(() => {
    async function fetchLinkedInPosts() {
      setIsLoadingPosts(true);
      try {
        const response = await fetch("/api/linkedin");
        const data = await response.json();
        
        if (data.posts && data.posts.length > 0) {
          setLinkedInPosts(data.posts);
        }
        // If no posts returned, keep the fallback data
      } catch (error) {
        console.error("Error fetching LinkedIn posts:", error);
        // Keep fallback data on error
      } finally {
        setIsLoadingPosts(false);
      }
    }

    async function fetchSubstackPosts() {
      setIsLoadingSubstack(true);
      try {
        const response = await fetch("/api/substack");
        const data = await response.json();
        
        if (data.posts && data.posts.length > 0) {
          setSubstackPosts(data.posts);
        }
        // If no posts returned, keep the fallback data
      } catch (error) {
        console.error("Error fetching Substack posts:", error);
        // Keep fallback data on error
      } finally {
        setIsLoadingSubstack(false);
      }
    }

    fetchLinkedInPosts();
    fetchSubstackPosts();
  }, []);

  return (
    <section>
      {/* Hero - Ultra minimal */}
      <div className="mb-12">
        <h1 className="text-4xl text-navy-900 dark:text-navy-100 font-medium tracking-tight mb-4">
          {tenant.name}
        </h1>
        <p className="text-2xl font-semi-bold text-navy-700 dark:text-navy-200 leading-relaxed max-w-lg mb-1">
          {tenant.tagline}
        </p>
        <p className="text-md text-navy-700/70 dark:text-navy-200 leading-relaxed max-w-lg">
          {tenant.description}
        </p>
      </div>

      {/* Platform Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        <a
          href={tenant.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 bg-white/80 dark:bg-neutral-800/80 border rounded-2xl border-navy-100 dark:border-navy-200 hover:border-navy-600/70 dark:hover:border-navy-100 transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <svg className="w-6 h-6 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-navy-600 dark:text-navy-100 text-sm group-hover:text-navy-600 dark:group-hover:text-navy-100 transition-colors">
              Follow &rarr;
            </span>
          </div>
          <p className="font-semibold text-navy-700 dark:text-navy-100">LinkedIn</p>
          <p className="text-sm text-navy-700/70 dark:text-navy-100/70">Professional updates & thoughts</p>
        </a>

        <a
          href="https://substack.com/@kwokasch"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 bg-white/80 dark:bg-neutral-800/80 border border-navy-100 dark:border-navy-200 rounded-2xl hover:border-navy-400/50 dark:hover:border-navy-100  transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <svg className="w-6 h-6 text-[#FF6719]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
            </svg>
            <span className="text-navy-600 dark:text-navy-100 text-sm group-hover:text-navy-600 dark:group-hover:text-navy-100 transition-colors">
              Subscribe &rarr;
            </span>
          </div>
          <p className="font-semibold text-navy-700 dark:text-navy-100">Substack</p>
          <p className="text-sm text-navy-700/70 dark:text-navy-100/70">Long-form essays & ideas</p>
        </a>
      </div>

      {/* Activity Feed */}
      <div className="space-y-12">
        {/* Substack Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-navy-900 dark:text-navy-100 uppercase tracking-wide flex items-center gap-2">
              <span>✍️</span> Recent Writing
            </h2>
            <a
              href="https://substack.com/@kwokasch"
              className="text-sm text-navy-700/70 dark:text-navy-100/70 hover:text-navy-600 dark:hover:text-navy-200 transition-colors"
            >
              View all &rarr;
            </a>
          </div>
          <div className="space-y-6">
            {isLoadingSubstack ? (
              <div className="py-4">
                <p className="text-navy-700/70 dark:text-navy-100/70 text-sm">Loading posts...</p>
              </div>
            ) : substackPosts.length === 0 ? (
              <div className="py-4">
                <p className="text-navy-700/70 dark:text-navy-100/70 text-sm italic">Stay tuned for content</p>
              </div>
            ) : (
              substackPosts.map((post, i) => (
                <a
                  key={post.url || i}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-medium text-navy-700 dark:text-navy-100 group-hover:text-navy-700/70 dark:group-hover:text-navy-200/70 transition-colors mb-1">
                        {post.title}
                      </h3>
                      <p className="text-navy-700/70 dark:text-navy-200 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="text-right text-sm text-navy-700/70 dark:text-navy-200 shrink-0">
                      <p>{post.date}</p>
                      <p>{post.readTime}</p>
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-navy-400/10 dark:border-navy-200" />

        {/* LinkedIn Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-navy-900 dark:text-navy-100 uppercase tracking-wide flex items-center gap-2">
              <span>💼</span> LinkedIn Activity
            </h2>
            <a
              href={tenant.socialLinks.linkedin}
              className="text-sm text-navy-700/70 dark:text-navy-100/70 hover:text-navy-600 dark:hover:text-navy-200 transition-colors"
            >
              View profile &rarr;
            </a>
          </div>
          <div className="space-y-4">
            {isLoadingPosts ? (
              <div className="p-5 border border-neutral-100 dark:border-navy-200 rounded-lg">
                <p className="text-navy-700/70 dark:text-navy-100/70 text-sm">Loading posts...</p>
              </div>
            ) : linkedInPosts.length === 0 ? (
              <div className="p-5 border border-neutral-100 dark:border-navy-200 rounded-lg">
                <p className="text-navy-700/70 dark:text-navy-100/70 text-sm">No posts available</p>
              </div>
            ) : (
              linkedInPosts.map((post, i) => {
                const postUrl = post.url || tenant.socialLinks.linkedin;
                return (
                  <a
                    key={post.id || `post-${i}`}
                    href={postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 border border-neutral-100 dark:border-navy-200 rounded-lg hover:border-neutral-200 dark:hover:border-navy-100 transition-colors cursor-pointer"
                  >
                  <h3 className="font-semibold text-navy-700 dark:text-navy-100 mb-2">{post.title}</h3>
                  <p className="text-navy-700/70 dark:text-navy-200 text-sm mb-3">{post.excerpt}</p>
                  {/* <div className="flex items-start gap-4 text-sm text-navy-700/70 dark:text-navy-200"> */}
                    {/* <span>{post.likes} likes</span> */}
                    {/* <span>{post.comments} comments</span> */}
                    <span className="ml-auto text-sm text-navy-600/70 dark:text-navy-200">{post.date}</span>
                  {/* </div> */}
                  </a>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
