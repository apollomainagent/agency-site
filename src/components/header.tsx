"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[rgba(9,9,11,0.85)] backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#"
          className="flex items-center gap-1 text-sm font-medium tracking-tight text-zinc-200"
        >
          <span className="font-display text-lg text-white">Apollo</span>
          <span className="font-sans">Operations</span>
          <span aria-hidden="true">🚀</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          asChild
          size="sm"
          className="hidden bg-indigo-500 text-white hover:bg-indigo-400 md:inline-flex"
        >
          <a href="#pricing">Book a Call</a>
        </Button>

        <button
          className="inline-flex md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5 text-zinc-200" />
          ) : (
            <Menu className="h-5 w-5 text-zinc-200" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-[rgba(9,9,11,0.95)] px-4 pb-4 md:hidden">
          <div className="mt-3 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              size="sm"
              className="mt-2 w-fit bg-indigo-500 text-white hover:bg-indigo-400"
              onClick={() => setMobileOpen(false)}
            >
              <a href="#pricing">Book a Call</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
