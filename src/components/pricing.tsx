import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter", price: "$297", cadence: "/mo", featured: false,
    description: "One AI system. Zero fluff.",
    features: ["1 AI agent build", "1 primary automation", "Email + SMS setup", "Basic reporting", "Monthly strategy call"],
  },
  {
    name: "Growth", price: "$497", cadence: "/mo", featured: true,
    description: "Full ops coverage.",
    features: ["3 AI agents", "Lead gen + follow-up + support automations", "Review management loop", "Advanced analytics", "Bi-weekly optimization calls"],
  },
  {
    name: "Scale", price: "Custom", cadence: "", featured: false,
    description: "Enterprise-grade systems.",
    features: ["Custom agent portfolio", "Multi-location support", "Dedicated implementation roadmap", "Executive dashboards", "Priority SLA"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-[1120px] px-6 py-[140px]">
      {/* Header */}
      <div className="mb-16 text-center">
        <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.3)" }}>Pricing</p>
        <h2 className="font-display" style={{ fontSize: "40px", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#EDEDED" }}>
          Simple, transparent pricing
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[16px]" style={{ lineHeight: 1.65, color: "rgba(255,255,255,0.5)" }}>
          Pick a plan. Get live in 2 weeks. No contracts.
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {plans.map(plan => (
          <article key={plan.name} className="relative flex flex-col rounded-2xl p-8"
                   style={{
                     background: plan.featured ? "rgba(124,92,252,0.07)" : "rgba(255,255,255,0.02)",
                     border: `1px solid ${plan.featured ? "rgba(124,92,252,0.4)" : "rgba(255,255,255,0.07)"}`,
                   }}>
            {plan.featured && (
              <span className="absolute right-6 top-6 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
                    style={{ background: "rgba(124,92,252,0.2)", color: "#A78BFA" }}>
                Most Popular
              </span>
            )}

            <div>
              <p style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.45)" }}>{plan.name}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span style={{ fontSize: "42px", fontWeight: 600, letterSpacing: "-0.04em", color: "#EDEDED" }}>{plan.price}</span>
                {plan.cadence && <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.4)" }}>{plan.cadence}</span>}
              </div>
              <p className="mt-2" style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)" }}>{plan.description}</p>
            </div>

            <ul className="mt-8 flex flex-col gap-3">
              {plan.features.map(f => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#7C5CFC" }} />
                  <span style={{ fontSize: "14px", lineHeight: 1.5, color: "rgba(255,255,255,0.55)" }}>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <a href="#" className="block w-full rounded-lg py-3 text-center text-[14px] font-medium transition-colors"
                 style={{
                   background: plan.featured ? "#7C5CFC" : "rgba(255,255,255,0.05)",
                   color: plan.featured ? "#fff" : "rgba(255,255,255,0.65)",
                   border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.08)",
                 }}>
                Book a Call
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
