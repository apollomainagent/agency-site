import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Owner, Bright Smile Dental",
    quote:
      "We went from 15 new patients a month to over 40 within 60 days. The AI chat widget alone captures leads we used to miss every single night.",
  },
  {
    name: "Marcus Johnson",
    role: "Founder, ProClean Services",
    quote:
      "The automated follow-up system is a game-changer. Our close rate jumped 35% because no lead goes more than 2 minutes without a response.",
  },
  {
    name: "Emily Rodriguez",
    role: "Director, Summit Physical Therapy",
    quote:
      "We used to spend hours chasing patients for reviews. Now it happens automatically, and our Google rating went from 3.8 to 4.7 stars.",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-y border-border/40 bg-muted/40 px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Results That Speak
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Growing Businesses
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real results from real business owners who automated their lead
            pipeline with Apollo Agency.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border/50 bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-4 border-t border-border/40 pt-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
