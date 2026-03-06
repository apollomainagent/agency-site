"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const logos = ["Dental", "HVAC Pro", "MedSpa", "Legal Group", "HomeServ"];

const nodes = [
  {
    label: "New Lead",
    sub: "via chat, form, or SMS",
    icon: "👤",
    color: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.10)",
  },
  {
    label: "AI Agent",
    sub: "qualifies & responds in seconds",
    icon: "⚡",
    color: "rgba(124,92,252,0.12)",
    border: "rgba(124,92,252,0.4)",
    glow: true,
  },
  {
    label: "Booked",
    sub: "appointment confirmed",
    icon: "✅",
    color: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.3)",
  },
];

function FlowVisual() {
  const [pulse, setPulse] = useState(0); // 0 = first connector, 1 = second

  useEffect(() => {
    const id = setInterval(() => {
      setPulse((p) => (p + 1) % 2);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative mx-auto mt-16 w-full max-w-3xl rounded-2xl px-8 py-10"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Top label */}
      <p
        className="mb-8 text-center text-[11px] font-medium uppercase tracking-[0.1em]"
        style={{ color: "rgba(255,255,255,0.25)" }}
      >
        How every lead becomes a booking
      </p>

      {/* Flow row */}
      <div className="flex items-center justify-between gap-4">
        {nodes.map((node, i) => (
          <div key={node.label} className="flex flex-1 items-center">
            {/* Node card */}
            <div
              className="relative flex flex-1 flex-col items-center gap-2 rounded-xl px-4 py-5 text-center"
              style={{
                background: node.color,
                border: `1px solid ${node.border}`,
                boxShadow: node.glow
                  ? "0 0 32px rgba(124,92,252,0.2)"
                  : undefined,
              }}
            >
              {/* Pulsing dot on AI node */}
              {node.glow && (
                <span
                  className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[#7C5CFC]"
                  style={{ animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite" }}
                />
              )}
              <span className="text-2xl">{node.icon}</span>
              <p
                className="text-[13px] font-semibold"
                style={{ color: "#EDEDED", letterSpacing: "-0.02em" }}
              >
                {node.label}
              </p>
              <p
                className="text-[11px] leading-snug"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {node.sub}
              </p>
            </div>

            {/* Connector (not after last node) */}
            {i < nodes.length - 1 && (
              <div className="relative mx-2 flex flex-col items-center gap-1.5 shrink-0">
                {/* Static dashed line */}
                <div
                  className="h-px w-16"
                  style={{
                    background:
                      "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 4px, transparent 4px, transparent 8px)",
                  }}
                />
                {/* Animated travel dot */}
                <div
                  key={`dot-${i}-${pulse}`}
                  className="absolute -top-1 h-2.5 w-2.5 rounded-full"
                  style={{
                    background:
                      i === 0
                        ? "rgba(124,92,252,0.9)"
                        : "rgba(16,185,129,0.9)",
                    boxShadow:
                      i === 0
                        ? "0 0 8px rgba(124,92,252,0.8)"
                        : "0 0 8px rgba(16,185,129,0.8)",
                    animation:
                      pulse === i
                        ? "travelDot 1.6s ease-in-out forwards"
                        : "none",
                    left: 0,
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom stat strip */}
      <div
        className="mt-8 grid grid-cols-3 gap-4 rounded-xl px-6 py-4"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
      >
        {[
          { label: "Avg response time", value: "< 2 min" },
          { label: "Lead capture rate", value: "94%" },
          { label: "No-show reduction", value: "−61%" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p
              className="text-[17px] font-semibold"
              style={{ color: "#EDEDED", letterSpacing: "-0.03em" }}
            >
              {stat.value}
            </p>
            <p className="mt-0.5 text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* CSS keyframes */}
      <style>{`
        @keyframes travelDot {
          0%   { transform: translateX(0);    opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateX(64px); opacity: 0; }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(124,92,252,0.18), transparent 65%)",
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative mx-auto max-w-[1120px] px-6 pt-32 pb-24 text-center sm:px-6">
        {/* Badge */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px]"
          style={{
            background: "rgba(124,92,252,0.1)",
            border: "1px solid rgba(124,92,252,0.25)",
            color: "rgba(124,92,252,0.9)",
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#7C5CFC]" />
          AI automation for modern businesses
        </div>

        {/* Headline */}
        <h1
          className="font-display mx-auto max-w-4xl"
          style={{
            fontSize: "clamp(40px, 5.5vw, 64px)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#EDEDED",
          }}
        >
          The AI ops layer your business has been missing
        </h1>

        {/* Subheadline */}
        <p
          className="mx-auto mt-6 max-w-xl text-[17px]"
          style={{ lineHeight: 1.65, letterSpacing: "-0.01em", color: "rgba(255,255,255,0.5)" }}
        >
          We build custom AI systems that handle lead capture, follow-up, booking,
          and support — so your team closes deals instead of chasing them.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="flex items-center gap-2 rounded-lg bg-[#7C5CFC] px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#6D4EE0]"
          >
            Get started <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#services"
            className="rounded-lg px-6 py-3 text-[14px] transition-colors"
            style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.65)" }}
          >
            See our work
          </a>
        </div>

        {/* Flow visual */}
        <FlowVisual />

        {/* Logo bar */}
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "28px" }}
        >
          <p
            className="text-[12px] uppercase tracking-[0.08em]"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Trusted by Bay Area businesses
          </p>
          {logos.map((l) => (
            <span key={l} className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
