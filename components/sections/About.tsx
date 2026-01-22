"use client";

import { useTenant } from "@/lib/tenants/context";

function RocksAbout() {
  const tenant = useTenant();

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              The <span className="text-amber-500">Story</span>
            </h2>
            <div className="space-y-6 text-stone-300">
              <p>
                I spent years studying the Earth&apos;s history, hiking to remote
                outcrops, and getting unreasonably excited about metamorphic
                textures. There&apos;s something magical about holding a rock that&apos;s
                older than complex life itself.
              </p>
              <p>
                My journey started with a geology degree and led me through
                fieldwork across three continents. I&apos;ve documented stromatolites
                in Western Australia, volcanic formations in Iceland, and
                sedimentary sequences in the American Southwest.
              </p>
              <p>
                These days, I channel that same curiosity into different pursuits,
                but the rock collection keeps growing. And yes, I will absolutely
                stop mid-hike to look at an interesting outcrop.
              </p>
            </div>

            {/* Fun credentials */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              {[
                { label: "Degree", value: "BSc Geology" },
                { label: "Favorite Era", value: "Precambrian" },
                { label: "Rock Type", value: "Igneous (sorry)" },
                { label: "Mohs Scale Rating", value: "Solid 7" },
              ].map((item) => (
                <div key={item.label} className="bg-stone-800 border border-stone-700 rounded-lg p-4">
                  <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-amber-500 font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div className="space-y-6">
            <div className="bg-stone-800 border border-stone-700 rounded-xl p-8">
              <h3 className="text-lg font-bold mb-4">Field Kit Essentials</h3>
              <ul className="space-y-3 text-stone-400">
                <li className="flex items-center gap-3">
                  <span>🔨</span> Rock hammer (Estwing, obviously)
                </li>
                <li className="flex items-center gap-3">
                  <span>🔍</span> 10x hand lens
                </li>
                <li className="flex items-center gap-3">
                  <span>📓</span> Waterproof field notebook
                </li>
                <li className="flex items-center gap-3">
                  <span>🧲</span> Magnet (for magnetite, naturally)
                </li>
                <li className="flex items-center gap-3">
                  <span>📷</span> Camera + macro lens
                </li>
              </ul>
            </div>

            <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-6">
              <p className="text-amber-500 text-sm italic">
                &ldquo;The Earth has a 4.5 billion year story to tell. I&apos;m just
                here to listen and take notes.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EngineerAbout() {
  const tenant = useTenant();

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            The path from geology to software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I&apos;m a software engineer with an unconventional background. After
              earning my degree in Geology and working as a geo-tech consultant, I
              discovered a passion for building software that led me to make a
              career pivot in 2019.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Today, I work at Name.com as a Senior Software Engineer, where I
              build APIs and developer tools that help partners integrate domain
              services. I care deeply about developer experience and creating
              software that&apos;s intuitive to use.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My geology background taught me to think systematically about complex
              problems and find patterns in data. Those skills translate surprisingly
              well to debugging production issues and designing scalable systems.
            </p>

            {/* Key highlights */}
            <div className="pt-6 border-t border-slate-700">
              <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
                Highlights
              </h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">→</span>
                  <span>Senior Software Engineer at Name.com, building developer-focused products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">→</span>
                  <span>Full-stack development with TypeScript, React, Node.js, and PostgreSQL</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">→</span>
                  <span>Career changer who brings a unique perspective to problem-solving</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Values / Approach */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">How I Work</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-orange-500 font-medium mb-1">User-Focused</h4>
                  <p className="text-slate-400 text-sm">
                    Building features that solve real problems, not just technically interesting ones.
                  </p>
                </div>
                <div>
                  <h4 className="text-orange-500 font-medium mb-1">Iterative</h4>
                  <p className="text-slate-400 text-sm">
                    Ship early, gather feedback, improve. Perfect is the enemy of done.
                  </p>
                </div>
                <div>
                  <h4 className="text-orange-500 font-medium mb-1">Collaborative</h4>
                  <p className="text-slate-400 text-sm">
                    The best solutions come from diverse perspectives and open communication.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
              <p className="text-slate-300 italic">
                &ldquo;The transition from geology to software felt less like a
                career change and more like discovering a different way to satisfy
                the same curiosity about how things work.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Let&apos;s Connect</h3>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Interested in working together or just want to chat about tech,
            geology, or career transitions? I&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${tenant.socialLinks.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-slate-900 font-semibold rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
            <a
              href={tenant.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-orange-500 text-slate-300 hover:text-orange-500 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialAbout() {
  const tenant = useTenant();

  return (
    <section>
      <h2 className="text-2xl font-medium tracking-tight mb-8">About</h2>

      <div className="space-y-6 text-neutral-600 leading-relaxed">
        <p>
          I&apos;m a writer and builder based in the Pacific Northwest. I spend my
          time thinking about how we create, connect, and share ideas in the
          digital age.
        </p>
        <p>
          By day, I work on products that help people communicate better. By
          night, I write essays about creativity, technology, and the
          intersection of the two.
        </p>
        <p>
          I believe in building in public, learning out loud, and the power of
          compounding small efforts over time.
        </p>
      </div>

      {/* Links Section */}
      <div className="mt-12">
        <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-6">
          Find me elsewhere
        </h3>
        <div className="space-y-4">
          <a
            href={tenant.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:border-neutral-900 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-neutral-500">Professional updates</p>
              </div>
            </div>
            <span className="text-neutral-400 group-hover:text-neutral-900 transition-colors">
              &rarr;
            </span>
          </a>

          <a
            href="https://substack.com/@kwokasch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:border-neutral-900 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5 text-[#FF6719]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
              </svg>
              <div>
                <p className="font-medium">Substack</p>
                <p className="text-sm text-neutral-500">Long-form writing</p>
              </div>
            </div>
            <span className="text-neutral-400 group-hover:text-neutral-900 transition-colors">
              &rarr;
            </span>
          </a>

          <a
            href={tenant.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:border-neutral-900 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <div>
                <p className="font-medium">X / Twitter</p>
                <p className="text-sm text-neutral-500">Quick thoughts</p>
              </div>
            </div>
            <span className="text-neutral-400 group-hover:text-neutral-900 transition-colors">
              &rarr;
            </span>
          </a>

          <a
            href={`mailto:${tenant.socialLinks.email}`}
            className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:border-neutral-900 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-neutral-500">{tenant.socialLinks.email}</p>
              </div>
            </div>
            <span className="text-neutral-400 group-hover:text-neutral-900 transition-colors">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const tenant = useTenant();

  switch (tenant.layout) {
    case "rocks":
      return <RocksAbout />;
    case "engineer":
      return <EngineerAbout />;
    case "social":
      return <SocialAbout />;
    default:
      return <RocksAbout />;
  }
}
