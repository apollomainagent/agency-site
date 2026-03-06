import { CalendarCheck, LineChart, MessageCircle, NotebookText, Repeat2, UserPlus } from "lucide-react";

const services = [
  { icon: UserPlus, title: "Lead Generation AI", description: "Identify high-intent prospects, qualify them automatically, and route the best opportunities to your team in real time." },
  { icon: MessageCircle, title: "Customer Support Bot", description: "Handle recurring questions, escalate complex cases, and maintain conversation continuity across every channel — 24/7." },
  { icon: CalendarCheck, title: "Appointment Automation", description: "Sync scheduling rules, confirm bookings, and reduce no-shows through intelligent reminder flows that feel human." },
  { icon: NotebookText, title: "Review Management", description: "Request reviews at the right moment, draft thoughtful responses, and protect your reputation automatically." },
  { icon: Repeat2, title: "Follow-Up Sequences", description: "Multi-channel follow-up with adaptive pacing — triggered by behavior, tuned to convert." },
  { icon: LineChart, title: "Analytics Dashboard", description: "Track conversion points, engagement velocity, and revenue impact with clear weekly reporting." },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1120px] px-6 py-[140px]">
      {/* Section header */}
      <div className="mb-16">
        <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.3)" }}>What we build</p>
        <div className="flex items-end justify-between gap-8">
          <h2 className="font-display max-w-sm" style={{ fontSize: "40px", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#EDEDED" }}>
            AI systems that do the work
          </h2>
          <p className="max-w-md text-[16px]" style={{ lineHeight: 1.65, color: "rgba(255,255,255,0.5)" }}>
            Every system we build is purpose-built for your workflow — not a generic chatbot or templated sequence.
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3"
           style={{ background: "rgba(255,255,255,0.04)" }}>
        {services.map((s) => (
          <article key={s.title}
                   className="group flex flex-col gap-4 bg-[#09090B] p-8 transition-colors duration-200 hover:bg-[rgba(255,255,255,0.02)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg"
                 style={{ background: "rgba(124,92,252,0.1)", color: "#7C5CFC" }}>
              <s.icon className="h-5 w-5" />
            </div>
            <h3 style={{ fontSize: "15px", fontWeight: 500, letterSpacing: "-0.02em", color: "#EDEDED" }}>{s.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.65, color: "rgba(255,255,255,0.4)" }}>{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
