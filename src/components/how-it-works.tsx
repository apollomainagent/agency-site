const steps = [
  { number: "01", title: "Audit & Strategy", description: "We map your funnel, team workflows, and CRM stack to find the highest-leverage automation opportunities. You get a clear roadmap before any work begins." },
  { number: "02", title: "Build & Integrate", description: "We design your AI agents, connect your tools, and tune every prompt and routing rule so interactions convert — not just respond." },
  { number: "03", title: "Launch & Optimize", description: "We deploy, monitor, and iterate weekly. Every system improves over time as we refine based on real conversion data." },
];

export function HowItWorks() {
  return (
    <section id="process" className="mx-auto max-w-[1120px] px-6 py-[140px]">
      {/* Header */}
      <div className="mb-16 flex items-end justify-between gap-8">
        <div>
          <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.3)" }}>How it works</p>
          <h2 className="font-display" style={{ fontSize: "40px", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#EDEDED" }}>
            From audit to live in weeks
          </h2>
        </div>
        <p className="max-w-sm text-[16px]" style={{ lineHeight: 1.65, color: "rgba(255,255,255,0.5)" }}>
          A simple, focused process built to ship fast and improve continuously.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 gap-px md:grid-cols-3"
           style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}>
        {steps.map((step, i) => (
          <article key={step.number} className="p-10"
                   style={{ background: i === 1 ? "rgba(124,92,252,0.04)" : "rgba(255,255,255,0.01)" }}>
            <p style={{ fontSize: "48px", fontWeight: 600, letterSpacing: "-0.04em", color: "rgba(124,92,252,0.25)", lineHeight: 1 }}>
              {step.number}
            </p>
            <h3 className="mt-6" style={{ fontSize: "16px", fontWeight: 500, letterSpacing: "-0.02em", color: "#EDEDED" }}>
              {step.title}
            </h3>
            <p className="mt-3" style={{ fontSize: "14px", lineHeight: 1.65, color: "rgba(255,255,255,0.45)" }}>
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
