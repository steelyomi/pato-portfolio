"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Camera, Film, Monitor } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-300">
              Cinematographer with a passion for visual storytelling and
              creating compelling imagery.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/pato-new.png"
                alt="TSOFT"
                width={600}
                height={800}
                className="rounded-lg object-cover aspect-[3/4]"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Salako Tumininu</h2>
              <p className="text-gray-300">
                I&apos;m a cinematographer with over 10 years of experience in
                the film industry. My journey began with a deep fascination for
                how light and shadow can tell stories, evoke emotions, and
                transport viewers to different worlds.
              </p>
              <p className="text-gray-300">
                After graduating from the Kunle Afolayan Productions (KAP) Film
                & Television Academy, with a degree in Cinematography, I&apos;ve
                had the privilege of working on a diverse range of projects
                including feature films, documentaries, commercials, and music
                videos.
              </p>
              <p className="text-gray-300">
                My approach to cinematography combines technical precision with
                artistic vision. I believe that every frame should serve the
                story and create a meaningful connection with the audience.
                Whether I&apos;m shooting an intimate character moment or an
                epic landscape, my goal is to create imagery that resonates and
                leaves a lasting impression.
              </p>
              <p className="text-gray-300">
                When I&apos;m not behind the camera, I enjoy traveling,
                photography, and mentoring emerging filmmakers. I&apos;m based
                in Lagos, Nigeria, but available for projects worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Expertise & Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="h-10 w-10 mb-4" />,
                title: "Cinematography",
                description:
                  "Expert in camera operation, lighting design, and visual storytelling techniques.",
              },
              {
                icon: <Film className="h-10 w-10 mb-4" />,
                title: "Film Production",
                description:
                  "Experienced in both digital and analog film production workflows.",
              },
              {
                icon: <Monitor className="h-10 w-10 mb-4" />,
                title: "Color Grading",
                description:
                  "Skilled in color theory and professional grading techniques.",
              },
              {
                icon: <Award className="h-10 w-10 mb-4" />,
                title: "Visual Direction",
                description:
                  "Ability to translate creative vision into compelling visual narratives.",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {skill.icon}
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Equipment</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold border-b border-white/20 pb-2">
                Cameras
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>ARRI Alexa Mini</li>
                <li>RED Gemini 5K</li>
                <li>Sony Venice</li>
                <li>Canon C500 Mark II</li>
                <li>Blackmagic URSA Mini Pro 12K</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold border-b border-white/20 pb-2">
                Lenses
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>ARRI Signature Primes</li>
                <li>Cooke S4/i Primes</li>
                <li>Angenieux Optimo Zooms</li>
                <li>Atlas Orion Anamorphics</li>
                <li>Zeiss Supreme Primes</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold border-b border-white/20 pb-2">
                Lighting & Grip
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>ARRI SkyPanel S60-C</li>
                <li>ARRI M-Series HMIs</li>
                <li>Litepanels Gemini 2x1</li>
                <li>Astera Titan Tubes</li>
                <li>DoPchoice Snapbags & Snapgrids</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "TSOFT Media has an incredible eye for composition and lighting. His work on our feature film elevated the entire production.",
                author: "Sarah Johnson",
                role: "Film Director",
              },
              {
                quote:
                  "Working with TSOFT was a revelation. He captured our brand's essence in ways we couldn't have imagined.",
                author: "Michael Chen",
                role: "Creative Director",
              },
              {
                quote:
                  "His technical knowledge combined with artistic vision makes TSOFT one of the most versatile cinematographers I've worked with.",
                author: "David Rodriguez",
                role: "Producer",
              },
              {
                quote:
                  "TSOFT doesn't just shoot scenes, he creates visual poetry. Our music video wouldn't have been the same without his contribution.",
                author: "Emma Williams",
                role: "Music Artist",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800 p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-lg italic mb-4 text-gray-300">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
