"use client";

import { useTenant } from "@/lib/tenants/context";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

function RocksAbout() {
  const tenant = useTenant();
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const para1Ref = useRef<HTMLDivElement>(null);
  const para2Ref = useRef<HTMLDivElement>(null);
  const para3Ref = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  // Scroll-linked animation for the image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress to scale (starts small, expands to fill container as you scroll)
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.75, 1.3]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);

  // useInView for text reveal animations
  const headingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const para1InView = useInView(para1Ref, { once: true, amount: 0.5 });
  const para2InView = useInView(para2Ref, { once: true, amount: 0.5 });
  const para3InView = useInView(para3Ref, { once: true, amount: 0.5 });
  const socialsInView = useInView(socialsRef, { once: true, amount: 0.5 });

  return (
    <section ref={containerRef} className="relative -mt-20">
      {/* Hero image with scroll zoom - sticky so text scrolls over it */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
          <Image
            src="/images/rocks/IMG_7612.webp"
            alt="Geology fieldwork"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>
        {/* Gradient overlay that fades in as you scroll */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content section - scrolls over the sticky image */}
      <div className="relative z-10  px-6 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <h2 className="text-5xl font-bold mb-4">
              The <span className="text-emerald-500">Story</span>
            </h2>
          </motion.div>

          {/* Paragraphs with staggered reveal */}
          <div className="space-y-8 text-zinc-300 text-lg leading-relaxed">
            <motion.div
              ref={para1Ref}
              initial={{ opacity: 0, y: 30 }}
              animate={para1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p>
                I spent years studying the Earth&apos;s history, hiking to remote
                outcrops, and getting unreasonably excited about highway roadcuts.
                There&apos;s nothing quite like picking up a rock off Mount Olympus that was once part of an ancient seafloor.
              </p>
            </motion.div>

            <motion.div
              ref={para2Ref}
              initial={{ opacity: 0, y: 30 }}
              animate={para2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <p>
                My journey started in high school, where I was fortunate enough to have an Earth Science teacher who
                encouraged me to lean into this new-found passion. This curiosity and enthusiasm to understand the forces that literally move
                mountains led to two degrees in two different states and, most fortunately, to find my future husband and lifelong geology partner.
              </p>
            </motion.div>

            <motion.div
              ref={para3Ref}
              initial={{ opacity: 0, y: 30 }}
              animate={para3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <p>
                These days, I channel that same curiosity into different pursuits, but the rock collection keeps growing. No road trip through the Rockies
                is complete without taking turns reading from the <em>Roadside Geology of Colorado</em> handbook.
                The subject matter has changed, but the approach is the same: break complex systems into understandable parts and explain them, often at length, to anyone within earshot.
              </p>
            </motion.div>
          </div>

          {/* Socials */}
          <motion.div
            ref={socialsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={socialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-16 flex justify-center gap-6 flex-wrap"
          >
            <a
              href={tenant.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-emerald-500 hover:bg-zinc-700 transition-all duration-300 text-zinc-300 hover:text-emerald-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={tenant.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-emerald-500 hover:bg-zinc-700 transition-all duration-300 text-zinc-300 hover:text-emerald-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Github
            </a>
            <a
              href="https://substack.com/@kwokasch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-emerald-500 hover:bg-zinc-700 transition-all duration-300 text-zinc-300 hover:text-emerald-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
              </svg>
              Substack
            </a>
          </motion.div>
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
              Today, I work at Name.com as a Senior Software Engineer, where I work with an awesome team to build the best products and experiences for our users.
            </p>

            {/* Key highlights */}
            <div className="pt-6 border-t border-slate-700">
              <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
                Highlights
              </h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">→</span>
                  <span>Senior Software Engineer at Name.com, focused on building the best products and experiences for our users</span>
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
      <h2 className="text-2xl upper font-semibold pb-2 text-navy-700 dark:text-navy-100 tracking-tight mb-8 bg-gradient-to-r from-navy-600 dark:from-navy-200 to-navy-600/20 dark:to-navy-400/20 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="space-y-6 text-navy-900/70 dark:text-navy-100/70 leading-relaxed">
        <p>
          I&apos;m a software engineer and product builder based in Denver, Colorado. Lately, I spend my
          time thinking about the emergence of AI has unlocked new ways to experiment, build, and share ideas.
        </p>
        <p>
          By day, I am focused on the growth of our Product teams at Name.com, encouraging our company to challenge assumptions and ensure we are building the right products the right way. 
          By night, I think about creativity, technology, leadership, and community-building, and strive to be helpful and encouraging to others.
        </p>
        <p>
          I believe in building in public, learning out loud, and unlocking potential in myself and others.
        </p>
      </div>

      {/* Links Section */}
      <div className="mt-12">
        <h3 className="text-md font-semibold text-navy-600 dark:text-navy-200 uppercase tracking-wider mb-6 flex items-center gap-2">
          <span>🔗</span> Where to find me
        </h3>
        <div className="space-y-4">
          <a
            href={tenant.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/80 dark:bg-neutral-800/80 border border-navy-100 dark:border-navy-200 rounded-2xl hover:border-navy-600/70 dark:hover:border-navy-100 transition-all group"
          >
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <div>
                <p className="font-medium text-navy-900 dark:text-navy-200">LinkedIn</p>
                <p className="text-sm text-navy-700/50 dark:text-navy-100">Professional updates</p>
              </div>
            </div>
            <span className="text-navy-400 dark:text-navy-200 group-hover:text-navy-700 dark:group-hover:text-navy-100 transition-colors">
              &rarr;
            </span>
          </a>

          <a
            href="https://substack.com/@kwokasch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/80 dark:bg-neutral-800/80 border border-navy-100 dark:border-navy-200 rounded-2xl hover:border-navy-600/70 dark:hover:border-navy-100 transition-all group"
          >
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5 text-[#FF6719]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
              </svg>
              <div> 
                <p className="font-medium text-navy-900 dark:text-navy-200">Substack</p>
                <p className="text-sm text-navy-700/50 dark:text-navy-100">Long-form writing</p>
              </div>
            </div>
            <span className="text-navy-400 dark:text-navy-200 group-hover:text-navy-700 dark:group-hover:text-navy-100 transition-colors">
              &rarr;
            </span>
          </a>

          <a
            href="https://bsky.app/profile/kwokasch.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/80 dark:bg-neutral-800/80 border border-navy-100 dark:border-navy-200 rounded-2xl hover:border-navy-600/70 dark:hover:border-navy-100 transition-all group"
          >
            <div className="flex items-center gap-4">
              <Image 
                src="/images/engineer/bluesky-logo.png" 
                alt="Bluesky" 
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <div>
                <p className="font-medium text-navy-900 dark:text-navy-200">Bluesky</p>
                <p className="text-sm text-navy-700/50 dark:text-navy-100">Quick thoughts</p>
              </div>
            </div>
            <span className="text-navy-400 dark:text-navy-200 group-hover:text-navy-700 dark:group-hover:text-navy-100 transition-colors">
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
