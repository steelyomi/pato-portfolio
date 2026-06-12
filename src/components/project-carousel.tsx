"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { type Project } from "@/hooks";

interface ProjectCarouselProps {
  projects: Project[];
  autoplay?: boolean;
  onProjectClick?: (project: Project) => void;
}

export function ProjectCarousel({ projects, autoplay = false, onProjectClick }: ProjectCarouselProps) {
  const plugins = autoplay
    ? [Autoplay({ delay: 4000, stopOnInteraction: true })]
    : [];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, plugins);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-none w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] min-w-0"
            >
              <button
                className="relative group w-full overflow-hidden block cursor-pointer focus:outline-none"
                onClick={() => onProjectClick?.(project)}
                aria-label={`Play ${project.title}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay always visible at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[hsl(var(--gold)/0.15)] border border-[hsl(var(--gold)/0.6)] flex items-center justify-center backdrop-blur-sm">
                      <Play className="h-5 w-5 text-[hsl(var(--gold))] ml-0.5" fill="currentColor" />
                    </div>
                  </div>

                  {/* Gold border glow on hover */}
                  <div className="absolute inset-0 ring-0 group-hover:ring-1 group-hover:ring-[hsl(var(--gold)/0.5)] transition-all duration-300" />

                  {/* Category badge */}
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-[hsl(var(--gold))] text-black font-sans font-semibold px-2 py-0.5">
                    {project.category}
                  </span>

                  {/* Year badge */}
                  <span className="absolute top-3 right-3 text-[10px] tracking-wider text-white/70 font-sans">
                    {project.year}
                  </span>
                </div>

                {/* Title footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-lg text-white leading-tight">{project.title}</h3>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-black/60 border border-[hsl(var(--gold)/0.3)] text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold)/0.15)] transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-black/60 border border-[hsl(var(--gold)/0.3)] text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold)/0.15)] transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Dot indicators */}
      {scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-px transition-all duration-300 ${
                index === selectedIndex
                  ? "w-8 bg-[hsl(var(--gold))]"
                  : "w-4 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
