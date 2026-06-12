"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowRight, Check, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { weddings, type Project } from "@/hooks";
import { VideoModal } from "@/components/video-modal";

const weddingServices = [
  {
    title: "Highlight Film",
    duration: "5–7 minutes",
    features: [
      "Full day coverage",
      "Cinematic edit with music",
      "Colour graded footage",
      "Online delivery",
    ],
  },
  {
    title: "Full Ceremony Edit",
    duration: "90+ minutes",
    features: [
      "Complete ceremony recording",
      "Multi-camera setup",
      "Speeches & vows uncut",
      "USB + online delivery",
    ],
  },
  {
    title: "Full Day Documentary",
    duration: "Highlight + Full Edit",
    features: [
      "Everything in both packages",
      "Getting ready coverage",
      "Reception & first dance",
      "Extended interviews",
    ],
    featured: true,
  },
];

const weddingTestimonials = [
  {
    quote:
      "TSOFT Media captured every precious moment of our wedding day with such artistry. Watching our film still brings us to tears — in the best way possible.",
    author: "Adaeze & Emeka",
    role: "Wedding — Lagos, 2024",
  },
  {
    quote:
      "The cinematic quality of our wedding film is breathtaking. TSOFT understood our vision perfectly and delivered something truly magical.",
    author: "Funmi & Tunde",
    role: "Traditional & White Wedding, 2025",
  },
];

const whatToExpect = [
  "A pre-wedding consultation to understand your story and vision",
  "Discreet, unobtrusive coverage so you live every moment fully",
  "Cinematic storytelling — not just documentation, but art",
];

export default function WeddingsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="pt-24 bg-[#080808] min-h-screen">
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Letterbox bars */}
        <div className="letterbox-top" />
        <div className="letterbox-bottom" />

        <div className="absolute inset-0 z-0">
          <Image
            src="/logo-bg.png"
            alt="Wedding cinematography background"
            fill
            className="object-cover brightness-40"
            priority
          />
          {/* Warm golden overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-amber-950/10 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center max-w-4xl">
          <motion.p
            className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Wedding Cinematography
          </motion.p>
          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Every Love Story Deserves a{" "}
            <em className="text-[hsl(var(--gold))] not-italic">Cinematic Frame</em>
          </motion.h1>
          <div className="h-px w-16 bg-[hsl(var(--gold)/0.5)] mx-auto mb-6" />
          <motion.p
            className="text-white0 font-sans text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your wedding day is a story unlike any other. I create cinematic films
            that preserve every emotion, every glance, and every moment — forever.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-none px-10 bg-[hsl(var(--gold))] text-black hover:bg-[hsl(var(--gold)/0.85)] font-sans font-semibold tracking-widest text-xs uppercase"
            >
              <Link href="/contact">Book Your Date</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none px-10 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-[hsl(var(--gold)/0.5)] font-sans font-semibold tracking-widest text-xs uppercase"
            >
              <Link href="#gallery">View Gallery <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-[9px] uppercase tracking-widest text-white/30 font-sans">Scroll</span>
          <div className="relative w-px h-10 bg-white/10">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[hsl(var(--gold))]"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, delay: 1.2, repeat: Infinity, repeatDelay: 0.5 }}
            />
          </div>
        </div>
      </section>

      {/* Intro / What to Expect */}
      <section className="py-24 bg-[#080808]">
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
                alt="Wedding cinematographer at work"
                width={600}
                height={800}
                className="object-cover aspect-[3/4] w-full"
              />
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
              <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans">The Experience</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight">
                More Than a Video —<br />
                <em className="text-[hsl(var(--gold))] not-italic">A Legacy</em>
              </h2>
              <div className="h-px w-12 bg-[hsl(var(--gold)/0.5)]" />
              <p className="text-gray-400 font-sans leading-relaxed">
                I approach every wedding with the same care and craft I bring to narrative films.
                Your day is not just documented — it&apos;s interpreted. Every frame tells your
                story with intention and beauty.
              </p>

              <ul className="space-y-4 pt-2">
                {whatToExpect.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center border border-[hsl(var(--gold)/0.5)] text-[hsl(var(--gold))]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-gray-300 font-sans text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] uppercase tracking-widest text-[hsl(var(--gold)/0.6)] font-sans pt-2">
                Weddings book 3–6 months in advance
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-[#050505] border-y border-[hsl(var(--gold)/0.1)]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans mb-2">Gallery</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white">Wedding Films</h2>
            <div className="h-px w-16 bg-[hsl(var(--gold)/0.4)] mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {weddings.map((project, index) => (
              <motion.button
                key={project.id}
                className="relative group overflow-hidden text-left w-full focus:outline-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => project.youtubeId || project.driveUrl ? setSelectedProject(project) : undefined}
                aria-label={`View ${project.title}`}
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
                    <div className="w-12 h-12 rounded-full border border-[hsl(var(--gold)/0.7)] bg-black/30 flex items-center justify-center backdrop-blur-sm">
                      <Play className="h-4 w-4 text-[hsl(var(--gold))] ml-0.5" fill="currentColor" />
                    </div>
                  </div>

                  <div className="absolute inset-0 ring-0 group-hover:ring-1 group-hover:ring-[hsl(var(--gold)/0.5)] transition-all duration-300" />

                  <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest bg-[hsl(var(--gold))] text-black font-sans font-semibold px-2 py-0.5">
                    {project.category}
                  </span>
                  <span className="absolute top-3 right-3 text-[10px] text-white/40 font-sans">
                    {project.year}
                  </span>
                </div>

                <div className="bg-zinc-950 border border-[hsl(var(--gold)/0.08)] border-t-0 p-4">
                  <h3 className="font-display text-lg text-white">{project.title}</h3>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#080808]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans mb-2">Packages</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white">Wedding Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {weddingServices.map((service, index) => (
              <motion.div
                key={index}
                className={`relative border p-8 flex flex-col ${
                  service.featured
                    ? "border-[hsl(var(--gold)/0.6)] bg-[hsl(var(--gold)/0.04)]"
                    : "border-[hsl(var(--gold)/0.12)] bg-zinc-950"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {service.featured && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--gold)/0.7)]" />
                )}
                {service.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[hsl(var(--gold))] text-black text-[9px] uppercase tracking-widest font-sans font-semibold px-3 py-1">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="font-display text-2xl text-white mb-1">{service.title}</h3>
                  <p className="text-[hsl(var(--gold))] text-sm font-sans tracking-wide">{service.duration}</p>
                </div>
                <ul className="space-y-3 flex-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 flex items-center justify-center">
                        <Check className="h-3 w-3 text-[hsl(var(--gold))]" />
                      </span>
                      <span className="text-gray-400 text-sm font-sans">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-8 rounded-none w-full font-sans font-semibold tracking-widest text-xs uppercase ${
                    service.featured
                      ? "bg-[hsl(var(--gold))] text-black hover:bg-[hsl(var(--gold)/0.85)]"
                      : "border border-[hsl(var(--gold)/0.3)] bg-transparent text-white hover:bg-[hsl(var(--gold)/0.08)] hover:border-[hsl(var(--gold))]"
                  }`}
                  variant={service.featured ? "default" : "outline"}
                >
                  <Link href="/contact">Enquire Now</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#050505] border-y border-[hsl(var(--gold)/0.1)]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans mb-2">Testimonials</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white">What Couples Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {weddingTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-zinc-950 border border-[hsl(var(--gold)/0.12)] p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Quote className="h-6 w-6 text-[hsl(var(--gold))] mb-5" />
                <p className="font-display text-lg italic text-gray-300 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="pt-5 border-t border-[hsl(var(--gold)/0.1)]">
                  <p className="font-semibold text-white font-sans text-sm">{testimonial.author}</p>
                  <p className="text-[hsl(var(--gold))] text-xs font-sans tracking-wide mt-0.5">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 bg-[#080808]">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans mb-4">Book Your Date</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
              Start Planning Your Film
            </h2>
            <div className="h-px w-12 bg-[hsl(var(--gold)/0.5)] mx-auto mb-6" />
            <p className="text-gray-400 font-sans leading-relaxed mb-3">
              I take on a limited number of weddings each year to ensure every couple receives my
              full attention and artistry.
            </p>
            <p className="text-[hsl(var(--gold)/0.7)] font-sans text-sm mb-10">
              Weddings typically book 3–6 months in advance.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none px-12 bg-[hsl(var(--gold))] text-black hover:bg-[hsl(var(--gold)/0.85)] font-sans font-semibold tracking-widest text-xs uppercase"
            >
              <Link href="/contact">Start Planning</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
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
    </div>
  );
}
