"use client";

import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId?: string;
  driveUrl?: string;
  title: string;
  category: string;
}

function getEmbedUrl(youtubeId?: string, driveUrl?: string, category?: string): string | null {
  if (youtubeId) {
    const base = category === "Short Video"
      ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`
      : `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
    return base;
  }
  if (driveUrl) {
    const fileId = driveUrl.match(/\/d\/([^/]+)/)?.[1];
    if (fileId) return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  return null;
}

export function VideoModal({ isOpen, onClose, youtubeId, driveUrl, title, category }: VideoModalProps) {
  const embedUrl = getEmbedUrl(youtubeId, driveUrl, category);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-full bg-black border border-[hsl(var(--gold)/0.3)] p-0 overflow-hidden rounded-none">
        <DialogTitle className="sr-only">{title}</DialogTitle>

        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[hsl(var(--gold)/0.15)]">
          <div>
            <p className="text-xs uppercase tracking-widest text-[hsl(var(--gold))] font-sans">{category}</p>
            <h3 className="text-white font-display text-lg leading-tight">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-[hsl(var(--gold))] transition-colors p-1"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Video area */}
        <div className="relative w-full aspect-video bg-black">
          {isOpen && embedUrl ? (
            <iframe
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm font-sans">
              No video available
            </div>
          )}
        </div>

        {/* Gold bottom accent */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.6)] to-transparent" />
      </DialogContent>
    </Dialog>
  );
}
