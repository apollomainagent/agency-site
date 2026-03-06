"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-14"
      style={{
        background: "rgba(9,9,11,0.85)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-[15px] font-semibold text-[#EDEDED] tracking-tight">Apollo Operations</span>
          <span className="text-sm">🚀</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
               className="text-[14px] text-[rgba(255,255,255,0.55)] transition-colors duration-150 hover:text-[rgba(255,255,255,0.95)]">{l.label}</a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#pricing"
             className="rounded-lg bg-[#7C5CFC] px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[#6D4EE0]">
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white/60" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t md:hidden px-6 py-4 flex flex-col gap-4"
             style={{ background: "rgba(9,9,11,0.95)", borderColor: "rgba(255,255,255,0.06)" }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
               className="text-[14px]" style={{ color: "rgba(255,255,255,0.6)" }}>{l.label}</a>
          ))}
          <a href="#pricing" className="w-fit rounded-lg bg-[#7C5CFC] px-4 py-2 text-[13px] font-medium text-white">
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
