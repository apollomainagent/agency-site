import { CalendarCheck, LineChart, MessageCircle, NotebookText, Repeat2, UserPlus } from "lucide-react";

const services = [
  {
    icon: UserPlus,
    title: "Lead Generation AI",
    description:
      "Automatically identify high-intent prospects, qualify them, and route the best opportunities to your team in real time.",
  },
  {
    icon: MessageCircle,
    title: "Customer Support Bot",
    description:
      "Handle recurring questions, route complex cases, and maintain conversation continuity across channels 24/7.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Automation",
    description:
      "Sync scheduling rules, confirm appointments, and reduce no-shows through reminder flows that feel human and personal.",
  },
  {
    icon: NotebookText,
    title: "Review Management",
    description:
      "Automatically request reviews after successful service moments and draft thoughtful responses for every incoming feedback.",
  },
  {
    icon: Repeat2,
    title: "Follow-Up Sequences",
    description:
      "Deploy multi-channel follow-up journeys with adaptive pacing based on lead behavior and response sentiment.",
  },
  {
    icon: LineChart,
    title: "Analytics Dashboard",
    description:
      "Track conversion points, engagement velocity, and revenue impact with clear weekly visibility and optimization guidance.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold text-white">What We Build</h2>
          <p className="mt-4 text-zinc-400">
            End-to-end AI workflows designed for modern service and growth teams.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-white/8 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-zinc-400">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
