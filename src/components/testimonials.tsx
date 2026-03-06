import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", company: "Bright Smile Dental", initials: "SC", quote: "We went from missing leads every night to a full pipeline. The AI agent qualifies every inquiry before our team ever sees it." },
  { name: "Marcus Johnson", company: "ProClean Services", initials: "MJ", quote: "Response times dropped to under 2 minutes. Our close rate jumped 35% because no lead goes cold anymore." },
  { name: "Emily Rodriguez", company: "Summit Physical Therapy", initials: "ER", quote: "Review management is now effortless. The system collects, follows up, and keeps our reputation consistent every week." },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 py-[140px]">
      <div className="mb-16">
        <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.3)" }}>Results</p>
        <h2 className="font-display" style={{ fontSize: "40px", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#EDEDED" }}>
          What operators say
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {testimonials.map(t => (
          <article key={t.name} className="flex flex-col gap-6 rounded-xl p-8"
                   style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5" style={{ fill: "#EAB308", color: "#EAB308" }} />)}
            </div>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(255,255,255,0.65)" }}>&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-3 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-semibold"
                   style={{ background: "rgba(124,92,252,0.15)", color: "#A78BFA" }}>
                {t.initials}
              </div>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "#EDEDED" }}>{t.name}</p>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>{t.company}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
