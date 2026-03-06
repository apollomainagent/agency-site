import { ArrowRight } from "lucide-react";

const logos = ["Dental", "HVAC Pro", "MedSpa", "Legal Group", "HomeServ"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div style={{
          background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(124,92,252,0.18), transparent 65%)",
        }} className="absolute inset-0" />
      </div>

      {/* Hero content */}
      <div className="relative mx-auto max-w-[1120px] px-6 pt-32 pb-24 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px]"
             style={{ background: "rgba(124,92,252,0.1)", border: "1px solid rgba(124,92,252,0.25)", color: "rgba(124,92,252,0.9)" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#7C5CFC]" />
          AI automation for modern businesses
        </div>

        {/* Headline */}
        <h1 className="font-display mx-auto max-w-4xl"
            style={{
              fontSize: "clamp(40px, 5.5vw, 64px)",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#EDEDED",
            }}>
          The AI ops layer your business has been missing
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-xl text-[17px]"
           style={{ lineHeight: 1.65, letterSpacing: "-0.01em", color: "rgba(255,255,255,0.5)" }}>
          We build custom AI systems that handle lead capture, follow-up, booking, and support — so your team closes deals instead of chasing them.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#pricing"
             className="flex items-center gap-2 rounded-lg bg-[#7C5CFC] px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#6D4EE0]">
            Get started <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#services"
             className="rounded-lg border border-[rgba(255,255,255,0.12)] px-6 py-3 text-[14px] text-[rgba(255,255,255,0.65)] transition-colors hover:border-[rgba(255,255,255,0.25)] hover:text-[rgba(255,255,255,0.9)]">
            See our work
          </a>
        </div>

        {/* Hero visual — gradient orb */}
        <div className="relative mx-auto mt-20 max-w-3xl">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden"
               style={{ background: "linear-gradient(135deg, #18181B 0%, #0F0F13 100%)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex h-full items-center justify-center">
              <div style={{
                width: "320px", height: "320px",
                background: "radial-gradient(circle, rgba(124,92,252,0.35) 0%, rgba(59,130,246,0.2) 40%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(40px)",
              }} />
            </div>
            {/* Fake UI chrome at top */}
            <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 px-4 py-3"
                 style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
            </div>
          </div>
        </div>

        {/* Logo bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8"
             style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "32px" }}>
          <p className="text-[12px] uppercase tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.25)" }}>
            Trusted by Bay Area businesses
          </p>
          {logos.map(l => (
            <span key={l} className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
