"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Camera, Film, Monitor } from "lucide-react";
import { TestimonialCarousel, type Testimonial } from "@/components/testimonial-carousel";

const skills = [
  {
    icon: <Camera className="h-6 w-6" />,
    title: "Cinematography",
    description: "Expert in camera operation, lighting design, and visual storytelling techniques.",
  },
  {
    icon: <Film className="h-6 w-6" />,
    title: "Film Production",
    description: "Experienced in both digital and analog film production workflows.",
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "Color Grading",
    description: "Skilled in color theory and professional grading techniques.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Visual Direction",
    description: "Ability to translate creative vision into compelling visual narratives.",
  },
];

const equipment = [
  {
    category: "Cameras",
    items: ["ARRI Alexa Mini", "RED Gemini 5K", "Sony Venice", "Canon C500 Mark II", "Blackmagic URSA Mini Pro 12K"],
  },
  {
    category: "Lenses",
    items: ["ARRI Signature Primes", "Cooke S4/i Primes", "Angenieux Optimo Zooms", "Atlas Orion Anamorphics", "Zeiss Supreme Primes"],
  },
  {
    category: "Lighting & Grip",
    items: ["ARRI SkyPanel S60-C", "ARRI M-Series HMIs", "Litepanels Gemini 2x1", "Astera Titan Tubes", "DoPchoice Snapbags & Snapgrids"],
  },
];

const testimonials: Testimonial[] = [
  {
    quote: "TSOFT Media has an incredible eye for composition and lighting. His work on our feature film elevated the entire production.",
    author: "Sarah Johnson",
    role: "Film Director",
  },
  {
    quote: "Working with TSOFT was a revelation. He captured our brand's essence in ways we couldn't have imagined.",
    author: "Michael Chen",
    role: "Creative Director",
  },
  {
    quote: "His technical knowledge combined with artistic vision makes TSOFT one of the most versatile cinematographers I've worked with.",
    author: "David Rodriguez",
    role: "Producer",
  },
  {
    quote: "TSOFT doesn't just shoot scenes, he creates visual poetry. Our music video wouldn't have been the same without his contribution.",
    author: "Emma Williams",
    role: "Music Artist",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 bg-[#080808] min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#080808]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.p
              className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              About
            </motion.p>
            <motion.h1
              className="font-display text-5xl md:text-6xl font-light text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Cinematographer &amp;<br />Visual Storyteller
            </motion.h1>
            <div className="h-px w-16 bg-[hsl(var(--gold)/0.6)] mb-6" />
            <motion.p
              className="text-gray-400 font-sans text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              A passion for visual storytelling and creating compelling imagery —
              one frame at a time.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-24 bg-[#080808]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
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
              <h2 className="font-display text-4xl text-white font-light">Salako Tumininu</h2>
              <div className="h-px w-10 bg-[hsl(var(--gold)/0.5)]" />
              <p className="text-gray-400 font-sans leading-relaxed">
                I&apos;m a cinematographer with over 10 years of experience in the film industry. My
                journey began with a deep fascination for how light and shadow can tell stories, evoke
                emotions, and transport viewers to different worlds.
              </p>

              {/* Pull quote */}
              <blockquote className="border-l-2 border-[hsl(var(--gold)/0.5)] pl-5 py-1">
                <p className="font-display text-2xl italic text-[hsl(var(--gold))] leading-snug">
                  &ldquo;Light is the language I speak.
                  <br />Every shadow, a word.&rdquo;
                </p>
              </blockquote>

              <p className="text-gray-400 font-sans leading-relaxed">
                After graduating from the Kunle Afolayan Productions (KAP) Film &amp; Television
                Academy with a degree in Cinematography, I&apos;ve had the privilege of working on a
                diverse range of projects including feature films, documentaries, commercials, and
                weddings.
              </p>
              <p className="text-gray-400 font-sans leading-relaxed">
                When I&apos;m not behind the camera, I enjoy travelling, photography, and mentoring
                emerging filmmakers. Based in Lagos, Nigeria — available for projects worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-24 overflow-hidden bg-[#050505] border-y border-[hsl(var(--gold)/0.1)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/logo-bg.png"
            alt=""
            fill
            className="object-cover brightness-10 opacity-20"
            aria-hidden
          />
          <div className="absolute inset-0 bg-[#050505]/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-px w-16 bg-[hsl(var(--gold)/0.5)] mx-auto mb-10" />
            <p className="font-display text-3xl md:text-4xl lg:text-5xl italic font-light text-white leading-snug">
              &ldquo;I believe every frame should serve the story
              and create a meaningful connection with the audience.
              Whether shooting an intimate character moment or an epic landscape —
              my goal is imagery that{" "}
              <em className="text-[hsl(var(--gold))]">resonates</em>.&rdquo;
            </p>
            <div className="h-px w-16 bg-[hsl(var(--gold)/0.5)] mx-auto mt-10" />
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-[#080808]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans mb-2">Expertise</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white">Skills &amp; Craft</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-zinc-950 border border-[hsl(var(--gold)/0.1)] p-7 relative overflow-hidden group hover:border-[hsl(var(--gold)/0.35)] transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Gold top line on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--gold)/0.6)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="text-[hsl(var(--gold))] mb-5">{skill.icon}</div>
                <h3 className="font-display text-xl text-white mb-2">{skill.title}</h3>
                <p className="text-gray-500 text-sm font-sans leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-24 bg-[#050505] border-y border-[hsl(var(--gold)/0.1)]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans mb-2">Gear</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white">Equipment</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {equipment.map((cat, index) => (
              <motion.div
                key={index}
                className="space-y-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-sans text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] pb-3 border-b border-[hsl(var(--gold)/0.2)]">
                  {cat.category}
                </h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-gray-400 font-sans text-sm">
                      <span className="w-1 h-1 bg-[hsl(var(--gold)/0.6)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#080808]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans mb-2">Testimonials</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white">What Clients Say</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto px-8">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>
    </div>
  );
}
