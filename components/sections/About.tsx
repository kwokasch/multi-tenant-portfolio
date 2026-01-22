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
              The <span className="text-emerald-500">Story</span>
            </h2>
            <div className="space-y-6 text-zinc-300">
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
                <div key={item.label} className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-emerald-500 font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div className="space-y-6">
            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-8">
              <h3 className="text-lg font-bold mb-4">Field Kit Essentials</h3>
              <ul className="space-y-3 text-zinc-400">
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

            <div className="bg-emerald-900/20 border border-emerald-700/30 rounded-xl p-6">
              <p className="text-emerald-400 text-sm italic">
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
    <section className="px-6 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-orange-500">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I&apos;m a full-stack software engineer with a life-long passion for learning how things work. Whether it&apos;s building software, learning new technologies, or exploring the natural world, I&apos;ve never been satisfied with taking things at face value.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Today, I work at Name.com as a Product Engineer and Manager, where I
              lead a team of product managers and engineers to build the best products and experiences for our users.
            </p>

            {/* Key highlights */}
            <div className="pt-6 border-t border-slate-700">
              <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
                Highlights
              </h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">→</span>
                  <span>Product Engineer and Manager at Name.com, focused on building the best products and experiences for our users</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">→</span>
                  <span>Full-stack development with TypeScript, Vue.js, PHP, and more</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">→</span>
                  <span>Passionate about continuous learning and creative problem-solving</span>
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
                    Building features that solve real problems, not just interesting ones.
                  </p>
                </div>
                <div>
                  <h4 className="text-orange-500 font-medium mb-1">Iterative</h4>
                  <p className="text-slate-400 text-sm">
                    Ship early, gather feedback, iterate, and improve.
                  </p>
                </div>
                <div>
                  <h4 className="text-orange-500 font-medium mb-1">Collaborative</h4>
                  <p className="text-slate-400 text-sm">
                    The best solutions come from diverse perspectives and open communication.
                  </p>
                </div>
                <div>
                  <h4 className="text-orange-500 font-medium mb-1">Innovative</h4>
                  <p className="text-slate-400 text-sm">
                    Leverage emerging technologies and best practices to build the best products and experiences for our users.
                  </p>
                </div>
                <div>
                  <h4 className="text-orange-500 font-medium mb-1">Force Multiplier</h4>
                  <p className="text-slate-400 text-sm">
                    Empowering others to build and grow—teams achieve more together.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="ring-1 ring-orange-500 shadow-lg shadow-orange-500/25 rounded-xl p-6">
              <p className="text-orange-500 italic">
                The transition from geology to software felt less like a
                career change and more like discovering a different way to satisfy
                the same curiosity and desire to understand how things work.
              </p>
            </div> */}
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
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-100 rounded-full text-violet-600 text-sm mb-6">
        <span className="text-lg">🌟</span>
        <span>A bit about me</span>
      </div>
      <h2 className="text-2xl font-medium tracking-tight mb-8 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
        About
      </h2>

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
        <h3 className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-6 flex items-center gap-2">
          <span>🔗</span> Find me elsewhere
        </h3>
        <div className="space-y-4">
          <a
            href={tenant.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/80 border border-violet-100 rounded-2xl hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100/50 transition-all group"
          >
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <div>
                <p className="font-medium text-neutral-800">LinkedIn</p>
                <p className="text-sm text-neutral-500">Professional updates</p>
              </div>
            </div>
            <span className="text-violet-400 group-hover:text-violet-600 transition-colors">
              &rarr;
            </span>
          </a>

          <a
            href="https://substack.com/@kwokasch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/80 border border-violet-100 rounded-2xl hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100/50 transition-all group"
          >
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5 text-[#FF6719]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
              </svg>
              <div>
                <p className="font-medium text-neutral-800">Substack</p>
                <p className="text-sm text-neutral-500">Long-form writing</p>
              </div>
            </div>
            <span className="text-pink-400 group-hover:text-pink-600 transition-colors">
              &rarr;
            </span>
          </a>

          <a
            href={tenant.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/80 border border-violet-100 rounded-2xl hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100/50 transition-all group"
          >
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <div>
                <p className="font-medium text-neutral-800">X / Twitter</p>
                <p className="text-sm text-neutral-500">Quick thoughts</p>
              </div>
            </div>
            <span className="text-violet-400 group-hover:text-violet-600 transition-colors">
              &rarr;
            </span>
          </a>

          <a
            href={`mailto:${tenant.socialLinks.email}`}
            className="flex items-center justify-between p-4 bg-white/80 border border-violet-100 rounded-2xl hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100/50 transition-all group"
          >
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-medium text-neutral-800">Email</p>
                <p className="text-sm text-neutral-500">{tenant.socialLinks.email}</p>
              </div>
            </div>
            <span className="text-violet-400 group-hover:text-violet-600 transition-colors">
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

  // Explicitly check tenant layout to ensure correct rendering
  if (tenant.layout === "engineer") {
    return <EngineerAbout />;
  }
  
  if (tenant.layout === "social") {
    return <SocialAbout />;
  }
  
  // Default to rocks for rocks tenant or any other case
  return <RocksAbout />;
}
