"use client";

import Link from "next/link";
import { Instagram, Youtube, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#080808] text-white border-t border-[hsl(var(--gold)/0.15)]">
      {/* Gold top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.5)] to-transparent" />

      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl tracking-widest text-white mb-3">TSOFT MEDIA</h3>
            <div className="h-px w-12 bg-[hsl(var(--gold))] mb-4" />
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed font-sans">
              Professional cinematographer based in Lagos, Nigeria, specializing in narrative films,
              commercials, weddings, and short films. Available worldwide.
            </p>
            <div className="flex space-x-3 mt-6">
              <a
                href="https://www.instagram.com/tsoft_media/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-[hsl(var(--gold)/0.25)] text-white/50 hover:text-[hsl(var(--gold))] hover:border-[hsl(var(--gold)/0.6)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@tsoftmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-[hsl(var(--gold)/0.25)] text-white/50 hover:text-[hsl(var(--gold))] hover:border-[hsl(var(--gold)/0.6)] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="mailto:salakotum@gmail.com"
                className="w-9 h-9 flex items-center justify-center border border-[hsl(var(--gold)/0.25)] text-white/50 hover:text-[hsl(var(--gold))] hover:border-[hsl(var(--gold)/0.6)] transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/works", label: "Works" },
                { href: "/weddings", label: "Weddings" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[hsl(var(--gold))] transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-4">
              Contact
            </h4>
            <address className="not-italic text-gray-400 space-y-2.5 text-sm font-sans">
              <p>Lagos, Nigeria</p>
              <p>
                <a
                  href="mailto:salakotum@gmail.com"
                  className="hover:text-[hsl(var(--gold))] transition-colors"
                >
                  salakotum@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+2348162680019"
                  className="hover:text-[hsl(var(--gold))] transition-colors"
                >
                  +234 816 268 0019
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-[hsl(var(--gold)/0.1)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-sans tracking-wide">
            &copy; {new Date().getFullYear()} TSOFT MEDIA. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 flex items-center justify-center border border-[hsl(var(--gold)/0.25)] text-white/40 hover:text-[hsl(var(--gold))] hover:border-[hsl(var(--gold)/0.6)] transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
