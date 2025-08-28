"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/hooks";

export default function WorksPage() {
  const featuredProject = projects.films.find((p) => p.id === 1); // Assuming Deadly Affairs is always the featured project

  const handlePlayClick = (
    youtubeId: string,
    driveUrl: string,
    category: string
  ) => {
    // if (!youtubeId) {
    //   console.warn("No YouTube ID provided for this video.");
    //   return; // Do nothing if youtubeId is empty
    // }

    if (youtubeId) {
      let youtubeUrl;
      if (category === "Short Video") {
        youtubeUrl = `https://www.youtube.com/shorts/${youtubeId}`;
      } else {
        youtubeUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
      }
      window.open(youtubeUrl, "_blank");
    } else if (driveUrl) {
      // Convert Google Drive share link to direct embed/view link
      const fileId = driveUrl.match(/\/d\/([^\/]+)/)?.[1];
      if (fileId) {
        const driveEmbedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
        window.open(driveEmbedUrl, "_blank");
      }
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Work</h1>
            <p className="text-xl text-gray-300">
              A collection of films, commercials, and music videos I&apos;ve had
              the privilege to shoot.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="films" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-zinc-900">
                <TabsTrigger value="films" className="text-sm">
                  Films
                </TabsTrigger>
                <TabsTrigger value="commercials" className="text-sm">
                  Commercials
                </TabsTrigger>
                <TabsTrigger value="shorts" className="text-sm">
                  Shorts
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="films">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.films.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    handlePlayClick={handlePlayClick}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercials">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.commercials.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    handlePlayClick={handlePlayClick}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="shorts">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.music.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    handlePlayClick={handlePlayClick}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Project
            </h2>

            {featuredProject && (
              <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white/20 backdrop-blur-sm scale-150"
                    onClick={() =>
                      handlePlayClick(
                        featuredProject.youtubeId || "",
                        featuredProject.driveUrl || "",
                        featuredProject.category
                      )
                    }
                    disabled={!featuredProject.youtubeId}
                  >
                    <Play className="h-6 w-6 text-white" />
                  </Button>
                </div>
              </div>
            )}

            {featuredProject && (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {featuredProject.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  A short film exploring the themes of when love turns lethal,
                  trust becomes the first casualty.. Shot on ARRI Alexa Mini
                  with Cooke S4/i lenses.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-gray-200">
                    Cinematography
                  </span>
                  <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-gray-200">
                    {featuredProject.category}
                  </span>
                  <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-gray-200">
                    Drama
                  </span>
                  <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-gray-200">
                    {featuredProject.year}
                  </span>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  &quot;Deadly Affairs&quot; unravels a night of betrayal when a
                  husband returns home to find not just infidelity — but death
                  itself waiting in his bed. Now, love, loyalty, and life hang
                  by a thread as he faces an impossible decision.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-gray-300 mb-8">
              I&apos;m always looking for new and exciting projects to
              collaborate on. Let&apos;s create something amazing together.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

type Project = {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  youtubeId?: string;
  driveUrl?: string;
};

interface ProjectCardProps {
  project: Project;
  index: number;
  handlePlayClick: (
    youtubeId: string,
    driveUrl: string,
    category: string
  ) => void;
}

function ProjectCard({ project, index, handlePlayClick }: ProjectCardProps) {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={600}
        className="object-cover aspect-video"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/20 backdrop-blur-sm"
          onClick={() =>
            handlePlayClick(
              project.youtubeId || "",
              project.driveUrl || "",
              project.category
            )
          }
          disabled={!project.youtubeId && !project.driveUrl}
        >
          <Play className="h-6 w-6 text-white" />
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-lg font-medium text-white">{project.title}</h3>
        <p className="text-gray-300 text-sm">
          {project.category} • {project.year}
        </p>
      </div>
    </motion.div>
  );
}
