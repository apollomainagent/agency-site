import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    company: "Bright Smile Dental",
    initials: "SC",
    quote:
      "We went from missed leads to a full pipeline. The AI agent now qualifies every inquiry before our team ever sees it.",
  },
  {
    name: "Marcus Johnson",
    company: "ProClean Services",
    initials: "MJ",
    quote:
      "Follow-up is now automatic and context-aware. Response times dropped and conversion improved immediately after launch.",
  },
  {
    name: "Emily Rodriguez",
    company: "Summit Physical Therapy",
    initials: "ER",
    quote:
      "Review outreach became effortless. The system collects, follows up, and keeps reputation work consistent every week.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold text-white">What Clients Say</h2>
          <p className="mt-4 text-zinc-400">What real operators see after implementing our systems.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl border border-white/8 bg-zinc-900/50 p-6"
            >
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="mb-4 text-zinc-300">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-3 border-t border-white/8 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-semibold text-indigo-300">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-zinc-400">{testimonial.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
