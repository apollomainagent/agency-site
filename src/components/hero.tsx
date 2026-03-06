"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const logos = ["Dental", "HVAC Pro", "MedSpa", "Legal Group", "HomeServ"];

type StatCard = {
  label: string;
  value: number;
  trend: string;
  direction: "up" | "down";
  suffix: string;
  decimals?: number;
};

type ActivityType = "ai" | "conversion";

type ActivityItem = {
  id: string;
  type: ActivityType;
  text: string;
  time: string;
  isFresh: boolean;
};

const statCards: StatCard[] = [
  { label: "New Leads Today", value: 47, trend: "↑ 23%", direction: "up", suffix: "" },
  { label: "Appts Booked", value: 12, trend: "↑ 8%", direction: "up", suffix: "" },
  { label: "Response Time", value: 1.8, trend: "↓ 94%", direction: "down", suffix: "m", decimals: 1 },
] ;

const initialActivities: ActivityItem[] = [
  { id: "activity-1", type: "ai", text: "Lead captured — Sarah M. via chat widget", time: "2m ago", isFresh: true },
  { id: "activity-2", type: "ai", text: "Lead captured — David L. via website form", time: "5m ago", isFresh: true },
  { id: "activity-3", type: "conversion", text: "Call scheduled — Jenna P. confirmed", time: "11m ago", isFresh: true },
  { id: "activity-4", type: "conversion", text: "Lead converted — Alex R. to demo booking", time: "18m ago", isFresh: true },
  { id: "activity-5", type: "ai", text: "Lead captured — Maya K. via WhatsApp flow", time: "34m ago", isFresh: true },
];

const activityPool: Omit<ActivityItem, "id" | "time" | "isFresh">[] = [
  { type: "ai", text: "Lead captured — Jordan P. via chat widget" },
  { type: "conversion", text: "Appt booked — Morgan K. accepted confirmation" },
  { type: "ai", text: "Lead captured — Tasha W. via SMS follow-up" },
  { type: "conversion", text: "Demo booked — Eli R. submitted details" },
  { type: "ai", text: "AI action — follow-up sent to Noah D." },
  { type: "conversion", text: "Conversion — Priya L. moved to onboarding" },
] as const;

const funnelBars = [
  { label: "Leads", value: 100 },
  { label: "Engaged", value: 74 },
  { label: "Qualified", value: 41 },
  { label: "Booked", value: 23 },
] as const;

export function Hero() {
  const [statValues, setStatValues] = useState(statCards.map(() => 0));
  const [activities, setActivities] = useState<ActivityItem[]>(initialActivities);

  useEffect(() => {
    const started = performance.now();
    const duration = 1300;

    const tick = (now: number) => {
      const rawProgress = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - rawProgress, 3);

      setStatValues(
        statCards.map((card) => {
          const value = card.value * eased;
          return card.decimals ? Number(value.toFixed(card.decimals)) : Math.round(value);
        }),
      );

      if (rawProgress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivities((prev) => {
        const template = activityPool[Math.floor(Math.random() * activityPool.length)];
        const timeMinutes = `${Math.max(1, Math.floor(Math.random() * 12) + 1)}m ago`;
        const next = {
          ...template,
          id: `activity-${Date.now()}`,
          type: template.type as "ai" | "conversion",
          time: timeMinutes,
          isFresh: true,
        };

        return [next, ...prev.slice(0, 4)];
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const getStatValue = (value: number, card: (typeof statCards)[number]) =>
    `${card.decimals ? value.toFixed(card.decimals) : value.toString()}${card.suffix}`;

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

        {/* Hero visual — animated dashboard */}
        <div className="relative mx-auto mt-20 max-w-3xl">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 p-2 md:p-3"
               style={{ background: "#09090B", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)" }}>
            <style>
              {`
                @keyframes hero-count-pop {
                  from { opacity: 0.5; transform: translateY(2px) scale(0.98); }
                  to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes hero-item-in {
                  from { opacity: 0; transform: translateY(5px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                @keyframes hero-bar-grow {
                  from { transform: scaleY(0); }
                  to { transform: scaleY(1); }
                }
                .hero-activity-dot {
                  animation: hero-count-pop 1.2s ease both;
                }
                .hero-feed-item {
                  animation: hero-item-in 0.42s ease-out both;
                  transform-origin: bottom;
                }
                .hero-bar {
                  animation: hero-bar-grow 0.9s ease-out both;
                  transform-origin: bottom;
                }
              `}
            </style>

            <div className="flex h-full flex-col gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] p-2 md:p-2.5 text-white">
              <div className="relative flex h-6 items-center rounded-md border border-white/10 bg-black/20 px-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#EF4444]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                </div>
                <p className="absolute left-1/2 -translate-x-1/2 text-[10px] font-medium text-white/85">Apollo Operations</p>
                <span className="ml-auto rounded-full border border-emerald-500/50 px-1.5 py-0.5 text-[9px] text-emerald-300">
                  ● Live
                </span>
              </div>

              <div className="grid flex-1 grid-cols-3 gap-1.5">
                {statCards.map((card, index) => (
                  <div
                    key={card.label}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-1.5"
                  >
                    <p className="text-[10px] leading-none text-white/60">{card.label}</p>
                    <div className="mt-1 flex items-end justify-between gap-1">
                      <span className="text-[11px] font-semibold leading-none">
                        {getStatValue(statValues[index], card)}
                      </span>
                      <span
                        className={`text-[10px] leading-none ${card.direction === "up" ? "text-emerald-400" : "text-rose-400"}`}
                      >
                        {card.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid flex-1 min-h-0 grid-cols-[60%_40%] gap-1.5">
                <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.04] p-1.5">
                  <p className="mb-1 text-[10px] leading-none text-white/65">Recent Activity</p>
                  <div className="space-y-1">
                    {activities.map((activity, index) => (
                      <div
                        key={activity.id}
                        className="hero-feed-item flex items-start gap-1.5 rounded-sm border border-white/5 bg-white/[0.03] px-1 py-1"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                        }}
                      >
                        <span
                          className={`hero-activity-dot mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                            activity.type === "conversion" ? "bg-emerald-400" : "bg-[#7C5CFC]"
                          }`}
                        />
                        <div className="min-w-0">
                          <p className="truncate text-[10px] leading-tight text-white/90">{activity.text}</p>
                          <p className="text-[9px] text-white/45">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-md border border-white/10 bg-white/[0.04] p-1.5">
                  <p className="mb-1 text-[10px] leading-none text-white/65">Conversion Funnel</p>
                  <div className="mt-3 grid h-full grid-cols-4 items-end gap-1.5">
                    {funnelBars.map((bar, index) => (
                      <div key={bar.label} className="flex h-full flex-col items-center justify-end gap-1.5">
                        <div className="relative flex w-full max-w-[28px] flex-1 items-end overflow-hidden rounded-sm border border-white/10 bg-white/[0.06] px-1">
                          <span
                            className="hero-bar block w-full rounded-sm bg-[#7C5CFC]"
                            style={{ height: `${bar.value}%`, animationDelay: `${index * 0.14}s` }}
                          />
                        </div>
                        <p className="text-[9px] leading-none text-white/55">{bar.label}</p>
                        <span className="text-[9px] font-medium text-white/85">{bar.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
