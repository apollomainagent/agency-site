import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$297",
    cadence: "/mo",
    featured: false,
    features: [
      "1 AI agent build",
      "1 primary workflow automation",
      "Email + SMS setup",
      "Basic analytics dashboard",
      "1 strategy call per month",
    ],
  },
  {
    name: "Growth",
    price: "$497",
    cadence: "/mo",
    featured: true,
    features: [
      "3 AI agents + follow-up orchestration",
      "Appointment, support, and outreach automations",
      "Review management loop",
      "Advanced reporting and optimization",
      "Priority support + bi-weekly tune-ups",
    ],
  },
  {
    name: "Scale",
    price: "Custom",
    cadence: "",
    featured: false,
    features: [
      "Custom agent portfolio and tooling stack",
      "Dedicated implementation roadmap",
      "Multi-location or multi-team support",
      "Executive-level dashboards",
      "Dedicated Slack + priority SLA",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold text-white">Simple Pricing</h2>
          <p className="mt-4 text-zinc-400">Clear options for lean teams and ambitious operators.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl border bg-zinc-900/50 p-8 ${
                plan.featured
                  ? "scale-105 border-indigo-500/70 shadow-[0_0_45px_rgba(99,102,241,0.25)]"
                  : "border-white/8"
              } transition-all duration-300`}
            >
              {plan.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-300">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.cadence ? (
                  <span className="ml-1 text-zinc-400">{plan.cadence}</span>
                ) : null}
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-zinc-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                variant={plan.featured ? "default" : "ghost"}
                className={
                  plan.featured
                    ? "mt-8 w-full bg-indigo-500 text-white hover:bg-indigo-400"
                    : "mt-8 w-full text-white hover:bg-white/5"
                }
              >
                <a href="#">Book a Call</a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
