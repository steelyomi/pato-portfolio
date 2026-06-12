"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Film, ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { clients, featuredProjects, type Project } from "@/hooks";
import { VideoModal } from "@/components/video-modal";
import { ProjectCarousel } from "@/components/project-carousel";

const SHOWREEL_YOUTUBE_ID = "BpN11VRTeno";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "Weddings", label: "& Ceremonies" },
  { value: "Lagos", label: "→ Worldwide" },
];

const services = [
  {
    icon: <Film className="h-6 w-6" />,
    title: "Narrative Films",
    description: "Feature films, short films, and documentaries that move audiences.",
    href: "/works",
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: "Commercials",
    description: "Brand stories and advertising content that captivates and converts.",
    href: "/works",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Weddings & Ceremonies",
    description: "Cinematic wedding films that preserve your story for a lifetime.",
    href: "/weddings",
  },
];

const titleChars = "TSOFT MEDIA".split("");

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Letterbox bars */}
        <div className="letterbox-top" />
        <div className="letterbox-bottom" />

        <div className="absolute inset-0 z-0">
          <Image
            src="/logo-bg.png"
            alt="Cinematic background"
            fill
            className="object-cover brightness-40"
            priority
          />
          {/* Warm vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          {/* Animated title */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] text-white"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
              }}
            >
              {titleChars.map((char, i) => (
                <motion.span
                  key={i}
                  className={char === " " ? "inline-block w-6" : "inline-block"}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <motion.p
            className="font-sans text-sm md:text-base uppercase tracking-[0.35em] text-[hsl(var(--gold))] mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Cinematographer &amp; Visual Storyteller
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-none px-10 bg-[hsl(var(--gold))] text-black hover:bg-[hsl(var(--gold)/0.85)] font-sans font-semibold tracking-widest text-xs uppercase"
            >
              <Link href="/works">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowreelOpen(true)}
              className="rounded-none px-10 border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-[hsl(var(--gold)/0.6)] font-sans font-semibold tracking-widest text-xs uppercase"
            >
              <Play className="mr-2 h-4 w-4" fill="currentColor" /> Watch Showreel
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <span className="text-[9px] uppercase tracking-widest text-white/40 font-sans">Scroll</span>
          <div className="relative w-px h-10 bg-white/10">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[hsl(var(--gold))]"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, delay: 1.8, repeat: Infinity, repeatDelay: 0.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#0a0a0a] border-y border-[hsl(var(--gold)/0.15)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[hsl(var(--gold)/0.12)]">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center py-8 px-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <span className="font-display text-3xl md:text-4xl text-[hsl(var(--gold))] leading-none">
                  {stat.value}
                </span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-white/40 mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section className="py-24 bg-[#080808]">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex items-end justify-between mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans mb-2">Portfolio</p>
              <h2 className="font-display text-4xl md:text-5xl text-white font-light">Featured Work</h2>
            </div>
            <Link
              href="/works"
              className="hidden md:flex items-center gap-2 text-sm font-sans text-white/50 hover:text-[hsl(var(--gold))] transition-colors"
            >
              View All <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* Desktop: 3-col grid */}
          <div className="hidden md:grid grid-cols-3 gap-5">
            {featuredProjects.map((project, index) => (
              <motion.button
                key={project.id}
                className="relative group overflow-hidden text-left focus:outline-none cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                onClick={() => setSelectedProject(project)}
                aria-label={`Play ${project.title}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border border-[hsl(var(--gold)/0.7)] bg-[hsl(var(--gold)/0.1)] flex items-center justify-center backdrop-blur-sm">
                      <Play className="h-5 w-5 text-[hsl(var(--gold))] ml-0.5" fill="currentColor" />
                    </div>
                  </div>

                  {/* Gold ring on hover */}
                  <div className="absolute inset-0 ring-0 group-hover:ring-1 group-hover:ring-[hsl(var(--gold)/0.5)] transition-all duration-300" />

                  {/* Category badge */}
                  <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest bg-[hsl(var(--gold))] text-black font-sans font-semibold px-2 py-0.5">
                    {project.category}
                  </span>
                  <span className="absolute top-3 right-3 text-[10px] text-white/50 font-sans">
                    {project.year}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-xl text-white leading-tight">{project.title}</h3>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Mobile: carousel */}
          <div className="md:hidden">
            <ProjectCarousel
              projects={featuredProjects}
              autoplay
              onProjectClick={setSelectedProject}
            />
          </div>

          <div className="text-center mt-10 md:hidden">
            <Button asChild variant="outline" className="rounded-none px-8 border-[hsl(var(--gold)/0.3)] text-white hover:bg-[hsl(var(--gold)/0.1)] hover:border-[hsl(var(--gold))]">
              <Link href="/works">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Pull Quote ── */}
      <section className="py-20 bg-[#050505] border-y border-[hsl(var(--gold)/0.1)]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-px w-16 bg-[hsl(var(--gold)/0.5)] mx-auto mb-10" />
            <p className="font-display text-3xl md:text-4xl lg:text-5xl italic font-light text-[hsl(var(--gold))] leading-snug">
              &ldquo;Every frame is a deliberate choice.
              <br className="hidden md:block" /> Every light, a whisper of intention.&rdquo;
            </p>
            <p className="mt-6 text-xs uppercase tracking-widest text-white/30 font-sans">
              — Salako Tumininu
            </p>
            <div className="h-px w-16 bg-[hsl(var(--gold)/0.5)] mx-auto mt-10" />
          </motion.div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <Image
                src="/pato-new.png"
                alt="Salako Tumininu"
                width={600}
                height={800}
                className="object-cover aspect-[3/4] w-full"
              />
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[hsl(var(--gold)/0.7)]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[hsl(var(--gold)/0.7)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-6"
            >
              <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans">About</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight">
                Crafting Visual<br />Stories That Last
              </h2>
              <div className="h-px w-12 bg-[hsl(var(--gold)/0.5)]" />
              <p className="text-gray-400 leading-relaxed font-sans">
                I&apos;m a cinematographer with over 10 years of experience capturing compelling visual stories.
                My work spans feature films, documentaries, commercials, and weddings.
              </p>
              <p className="text-gray-400 leading-relaxed font-sans">
                I believe in the power of visual storytelling to evoke emotion and create meaningful connections.
                My approach combines technical precision with artistic vision.
              </p>
              <Button
                asChild
                variant="outline"
                className="rounded-none px-8 border-[hsl(var(--gold)/0.4)] text-white hover:bg-[hsl(var(--gold)/0.08)] hover:border-[hsl(var(--gold))] font-sans text-xs uppercase tracking-widest"
              >
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-24 bg-[#080808]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans mb-2">What I Do</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white">Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href} className="group block h-full">
                  <div className="bg-zinc-950 border border-[hsl(var(--gold)/0.1)] p-8 h-full group-hover:border-[hsl(var(--gold)/0.4)] transition-colors duration-300 relative overflow-hidden">
                    {/* Gold top border accent */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--gold)/0.5)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="text-[hsl(var(--gold))] mb-5">{service.icon}</div>
                    <h3 className="font-display text-2xl text-white mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm font-sans leading-relaxed">{service.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-[hsl(var(--gold)/0.6)] group-hover:text-[hsl(var(--gold))] transition-colors text-xs uppercase tracking-widest font-sans">
                      Explore <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ── */}
      <section className="py-20 bg-[#050505] border-y border-[hsl(var(--gold)/0.1)]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans mb-2">Partners</p>
            <h2 className="font-display text-4xl font-light text-white">Trusted By</h2>
          </motion.div>

          <div className="overflow-hidden">
            <div className="animate-marquee">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-none px-12 flex items-center justify-center"
                >
                  <Image
                    src={client.image}
                    alt={client.title}
                    width={140}
                    height={70}
                    className="object-contain opacity-40 hover:opacity-80 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-0 bg-black overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image side */}
          <div className="relative h-64 md:h-auto min-h-[400px]">
            <Image
              src="/logo-bg.png"
              alt="Cinematic still"
              fill
              className="object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 md:to-black" />
          </div>

          {/* Text side */}
          <motion.div
            className="flex flex-col justify-center px-10 md:px-16 py-20 bg-[#080808]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans mb-4">Get In Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-4">
              Let&apos;s Create Something{" "}
              <em className="text-[hsl(var(--gold))] not-italic">Unforgettable</em>
            </h2>
            <div className="h-px w-12 bg-[hsl(var(--gold)/0.5)] mb-6" />
            <p className="text-gray-400 font-sans leading-relaxed mb-8 max-w-md">
              Whether it&apos;s a film, a commercial, or the most important day of your life — I&apos;m here
              to tell your story beautifully.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none px-10 w-fit bg-[hsl(var(--gold))] text-black hover:bg-[hsl(var(--gold)/0.85)] font-sans font-semibold tracking-widest text-xs uppercase"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      {selectedProject && (
        <VideoModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          youtubeId={selectedProject.youtubeId}
          driveUrl={selectedProject.driveUrl}
          title={selectedProject.title}
          category={selectedProject.category}
        />
      )}
      <VideoModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        youtubeId={SHOWREEL_YOUTUBE_ID}
        title="TSOFT MEDIA — Showreel"
        category="Showreel"
      />
    </div>
  );
}
