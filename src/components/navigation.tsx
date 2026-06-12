"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { closeMenu(); }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/works", label: "Works" },
    { href: "/weddings", label: "Weddings" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md py-3 border-b border-[hsl(var(--gold)/0.12)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white">
            {scrolled ? (
              <span className="font-display text-xl tracking-widest text-white">TSOFT MEDIA</span>
            ) : (
              <Image
                src="/TS-Media.png"
                alt="TSOFT Media logo"
                width={110}
                height={110}
                priority
                className="brightness-0 invert"
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-sans font-medium transition-colors duration-200 pb-0.5 ${
                    isActive
                      ? "text-[hsl(var(--gold))]"
                      : "text-white/65 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-[hsl(var(--gold))]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </Link>
              );
            })}
            <Button
              asChild
              size="sm"
              className="rounded-none px-6 bg-[hsl(var(--gold))] text-black hover:bg-[hsl(var(--gold)/0.85)] font-sans font-semibold tracking-wide text-xs uppercase"
            >
              <Link href="/contact">Hire Me</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden z-50 text-white hover:bg-transparent hover:text-[hsl(var(--gold))]"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center md:hidden"
          >
            {/* Gold top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.6)] to-transparent" />

            <nav className="flex flex-col items-center w-full max-w-xs">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.3, delay: index * 0.07 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`flex items-center justify-between w-full px-6 py-4 font-display text-2xl transition-colors ${
                        isActive
                          ? "text-[hsl(var(--gold))]"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))]" />
                      )}
                    </Link>
                    {index < navLinks.length - 1 && (
                      <div className="mx-6 h-px bg-[hsl(var(--gold)/0.12)]" />
                    )}
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.07 }}
                className="mt-8 px-6 w-full"
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-none bg-[hsl(var(--gold))] text-black hover:bg-[hsl(var(--gold)/0.85)] font-sans font-semibold tracking-widest text-xs uppercase"
                >
                  <Link href="/contact" onClick={closeMenu}>
                    Hire Me
                  </Link>
                </Button>
              </motion.div>
            </nav>

            {/* Gold bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.6)] to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
