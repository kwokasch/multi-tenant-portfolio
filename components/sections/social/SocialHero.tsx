"use client";

import { useTenant } from "@/lib/tenants/context";

const linkedInPosts = [
  {
    title: "Thoughts on building in public",
    excerpt: "Why sharing your journey matters more than the destination...",
    likes: 142,
    comments: 23,
    date: "2d ago",
  },
  {
    title: "The power of saying no",
    excerpt: "How I learned to prioritize and why it changed everything...",
    likes: 89,
    comments: 15,
    date: "1w ago",
  },
];

const substackPosts = [
  {
    title: "On creativity and constraints",
    excerpt:
      "Exploring how limitations can actually fuel innovation and lead to better outcomes.",
    readTime: "5 min",
    date: "Jan 15",
  },
  {
    title: "The quiet art of observation",
    excerpt:
      "What I learned from spending a month paying attention to the small things.",
    readTime: "4 min",
    date: "Jan 8",
  },
  {
    title: "Building your second brain",
    excerpt:
      "A practical guide to organizing thoughts and ideas for creative work.",
    readTime: "7 min",
    date: "Dec 28",
  },
];

export function SocialHero() {
  const tenant = useTenant();

  return (
    <section>
      {/* Hero */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-100 rounded-full text-violet-600 text-sm mb-6">
          <span className="text-lg">👋</span>
          <span>Hey there!</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
          {tenant.name}
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-lg">
          {tenant.tagline}. {tenant.description}.
        </p>
      </div>

      {/* Platform Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        <a
          href={tenant.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 bg-white/80 border border-violet-100 rounded-2xl hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100/50 transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <svg className="w-6 h-6 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-violet-400 text-sm group-hover:text-violet-600 transition-colors">
              Follow &rarr;
            </span>
          </div>
          <p className="font-semibold text-neutral-800">LinkedIn</p>
          <p className="text-sm text-neutral-500">Professional updates & thoughts</p>
        </a>

        <a
          href="https://substack.com/@kwokasch"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 bg-white/80 border border-violet-100 rounded-2xl hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100/50 transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <svg className="w-6 h-6 text-[#FF6719]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
            </svg>
            <span className="text-pink-400 text-sm group-hover:text-pink-600 transition-colors">
              Subscribe &rarr;
            </span>
          </div>
          <p className="font-semibold text-neutral-800">Substack</p>
          <p className="text-sm text-neutral-500">Long-form essays & ideas</p>
        </a>
      </div>

      {/* Activity Feed */}
      <div className="space-y-12">
        {/* Substack Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-semibold text-violet-600 uppercase tracking-wider flex items-center gap-2">
              <span>✍️</span> Recent Writing
            </h2>
            <a
              href="https://substack.com/@kwokasch"
              className="text-sm text-neutral-400 hover:text-violet-600 transition-colors"
            >
              View all &rarr;
            </a>
          </div>
          <div className="space-y-4">
            {substackPosts.map((post, i) => (
              <article
                key={i}
                className="group p-5 bg-white/60 rounded-xl border border-violet-50 hover:border-violet-200 hover:bg-white transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-medium text-neutral-800 group-hover:text-violet-600 transition-colors mb-1">
                      {post.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="text-right text-sm text-neutral-400 shrink-0">
                    <p className="text-violet-400">{post.date}</p>
                    <p>{post.readTime}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-violet-100" />

        {/* LinkedIn Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-semibold text-violet-600 uppercase tracking-wider flex items-center gap-2">
              <span>💼</span> LinkedIn Activity
            </h2>
            <a
              href={tenant.socialLinks.linkedin}
              className="text-sm text-neutral-400 hover:text-violet-600 transition-colors"
            >
              View profile &rarr;
            </a>
          </div>
          <div className="space-y-4">
            {linkedInPosts.map((post, i) => (
              <article
                key={i}
                className="p-5 bg-white/60 border border-violet-50 rounded-xl hover:border-violet-200 hover:bg-white transition-all cursor-pointer"
              >
                <h3 className="font-medium text-neutral-800 mb-2">{post.title}</h3>
                <p className="text-neutral-500 text-sm mb-3">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-neutral-400">
                  <span className="flex items-center gap-1">
                    <span className="text-pink-400">♥</span> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-violet-400">💬</span> {post.comments}
                  </span>
                  <span className="ml-auto">{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16 p-8 bg-gradient-to-r from-violet-100 to-pink-100 rounded-2xl">
        <div className="text-2xl mb-2">📬</div>
        <h3 className="font-semibold text-neutral-800 mb-2">Stay in the loop</h3>
        <p className="text-neutral-600 text-sm mb-4">
          Get notified when I publish new essays or share interesting finds.
        </p>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-2.5 bg-white border border-violet-200 rounded-full text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
          />
          <button className="px-6 py-2.5 bg-violet-600 text-white text-sm font-medium rounded-full hover:bg-violet-500 transition-colors shadow-lg shadow-violet-200">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
