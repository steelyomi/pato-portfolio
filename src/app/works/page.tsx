"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects, weddings, type Project } from "@/hooks";
import { VideoModal } from "@/components/video-modal";

export default function WorksPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="pt-24 bg-[#080808] min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.p
              className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Portfolio
            </motion.p>
            <motion.h1
              className="font-display text-5xl md:text-6xl font-light text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              My Work
            </motion.h1>
            <div className="h-px w-16 bg-[hsl(var(--gold)/0.6)] mb-6" />
            <motion.p
              className="text-gray-400 font-sans text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              A collection of films, commercials, weddings, and shorts I&apos;ve
              had the privilege to shoot.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Tabs */}
      <section className="py-16 md:py-20 bg-[#080808]">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="films" className="w-full">
            {/* Custom tab bar */}
            <div className="flex justify-center mb-14">
              <TabsList className="bg-transparent border-b border-[hsl(var(--gold)/0.15)] rounded-none p-0 gap-0 h-auto">
                {[
                  { value: "films", label: "Films" },
                  { value: "commercials", label: "Commercials" },
                  { value: "shorts", label: "Shorts" },
                  { value: "weddings", label: "Weddings" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="rounded-none bg-transparent border-b-2 border-transparent px-7 py-3 text-sm font-sans font-medium text-white/40 tracking-widest uppercase data-[state=active]:text-[hsl(var(--gold))] data-[state=active]:border-[hsl(var(--gold))] data-[state=active]:bg-transparent data-[state=active]:shadow-none hover:text-white/70 transition-colors"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="films">
              <ProjectGrid projects={projects.films} onProjectClick={setSelectedProject} />
            </TabsContent>
            <TabsContent value="commercials">
              <ProjectGrid projects={projects.commercials} onProjectClick={setSelectedProject} />
            </TabsContent>
            <TabsContent value="shorts">
              <ProjectGrid projects={projects.music} onProjectClick={setSelectedProject} />
            </TabsContent>
            <TabsContent value="weddings">
              <div className="mb-10">
                <p className="text-center text-gray-500 font-sans text-sm italic mb-8">
                  Sample wedding projects — full gallery coming soon.
                </p>
              </div>
              <ProjectGrid projects={weddings} onProjectClick={setSelectedProject} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Latest Feature Banner */}
      <section className="bg-[#050505] border-y border-[hsl(var(--gold)/0.12)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={projects.films[0].image}
                alt={projects.films[0].title}
                fill
                className="object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505] hidden md:block" />
              <button
                className="absolute inset-0 flex items-center justify-center group"
                onClick={() => setSelectedProject(projects.films[0])}
                aria-label={`Play ${projects.films[0].title}`}
              >
                <div className="w-16 h-16 rounded-full border border-[hsl(var(--gold)/0.7)] bg-black/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-[hsl(var(--gold)/0.15)] transition-colors">
                  <Play className="h-6 w-6 text-[hsl(var(--gold))] ml-0.5" fill="currentColor" />
                </div>
              </button>
            </div>
            <div className="px-8 md:px-14 py-12 md:py-16">
              <p className="text-[9px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans mb-3">Latest Release</p>
              <h2 className="font-display text-3xl md:text-4xl text-white font-light mb-3">
                {projects.films[0].title}
              </h2>
              <p className="text-gray-500 text-sm font-sans mb-6 leading-relaxed">
                A short film exploring the themes of when love turns lethal, trust becomes the
                first casualty. Shot on ARRI Alexa Mini with Cooke S4/i lenses.
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {["Cinematography", projects.films[0].category, "Drama", projects.films[0].year].map((tag) => (
                  <span key={tag} className="px-3 py-1 border border-[hsl(var(--gold)/0.2)] text-[10px] uppercase tracking-widest text-white/50 font-sans">
                    {tag}
                  </span>
                ))}
              </div>
              <Button
                onClick={() => setSelectedProject(projects.films[0])}
                className="rounded-none bg-[hsl(var(--gold))] text-black hover:bg-[hsl(var(--gold)/0.85)] font-sans font-semibold tracking-widest text-xs uppercase px-8"
              >
                <Play className="mr-2 h-3.5 w-3.5" fill="currentColor" /> Watch Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#080808]">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
              Interested in Working Together?
            </h2>
            <div className="h-px w-12 bg-[hsl(var(--gold)/0.5)] mx-auto mb-6" />
            <p className="text-gray-400 font-sans mb-8 leading-relaxed">
              I&apos;m always looking for new and exciting projects. Let&apos;s create something
              amazing together.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none px-10 bg-[hsl(var(--gold))] text-black hover:bg-[hsl(var(--gold)/0.85)] font-sans font-semibold tracking-widest text-xs uppercase"
            >
              <Link href="/contact">Get In Touch</Link>
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

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

function ProjectGrid({ projects, onProjectClick }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          onProjectClick={onProjectClick}
        />
      ))}
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onProjectClick: (project: Project) => void;
}

function ProjectCard({ project, index, onProjectClick }: ProjectCardProps) {
  const hasVideo = !!(project.youtubeId || project.driveUrl);

  return (
    <motion.button
      className="relative group overflow-hidden text-left w-full focus:outline-none cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => onProjectClick(project)}
      disabled={!hasVideo}
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
        {hasVideo && (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border border-[hsl(var(--gold)/0.7)] bg-black/30 flex items-center justify-center backdrop-blur-sm">
              <Play className="h-4 w-4 text-[hsl(var(--gold))] ml-0.5" fill="currentColor" />
            </div>
          </div>
        )}

        {/* Gold ring on hover */}
        <div className="absolute inset-0 ring-0 group-hover:ring-1 group-hover:ring-[hsl(var(--gold)/0.5)] transition-all duration-300" />

        {/* Badges */}
        <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest bg-[hsl(var(--gold))] text-black font-sans font-semibold px-2 py-0.5">
          {project.category}
        </span>
        <span className="absolute top-3 right-3 text-[10px] text-white/50 font-sans">
          {project.year}
        </span>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-display text-lg text-white leading-tight">{project.title}</h3>
        {!hasVideo && (
          <p className="text-[9px] uppercase tracking-widest text-white/30 font-sans mt-1">No video available</p>
        )}
      </div>
    </motion.button>
  );
}

