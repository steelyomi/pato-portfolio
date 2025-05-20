"use client";

import Link from "next/link";
import { Instagram, Youtube, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">TSOFT MEDIA</h3>
            <p className="text-gray-400 max-w-md">
              Professional cinematographer based in Lagos, Nigeria, specializing
              in narrative films, commercials, and short films.
            </p>
            <div className="flex space-x-4 mt-6">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-white hover:bg-white/10"
              >
                <Link
                  href="https://www.instagram.com/tsoft_media/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-white hover:bg-white/10"
              >
                <Link
                  href="https://www.youtube.com/@tsoftmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </Button>
              {/* <Button variant="ghost" size="icon" className="rounded-full hover:text-white hover:bg-white/10">
                <Vimeo className="h-5 w-5" />
                <span className="sr-only">Vimeo</span>
              </Button> */}
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-white hover:bg-white/10"
              >
                <Link href="mailto:salakotum@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Lagos, Nigeria</p>
              <p>
                <a
                  href="mailto:contact@jamesanderson.com"
                  className="hover:text-white transition-colors"
                >
                  salakotum@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+12345678900"
                  className="hover:text-white transition-colors"
                >
                  +1 (234) 8162680019
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} TSOFT MEDIA. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full mt-4 md:mt-0 hover:bg-white/10"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
