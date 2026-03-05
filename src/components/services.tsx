import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MessageSquare, RefreshCw, CalendarCheck, Star } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "AI Chat Widget",
    description:
      "A smart chatbot on your website that answers questions, qualifies leads, and captures contact info — even while you sleep.",
  },
  {
    icon: RefreshCw,
    title: "Automated Follow-Up",
    description:
      "Never lose a lead again. Our AI sends personalized follow-up sequences via SMS and email within seconds of a new inquiry.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Automation",
    description:
      "Let prospects book directly on your calendar. AI handles scheduling, reminders, and rescheduling — zero back-and-forth.",
  },
  {
    icon: Star,
    title: "Review Management",
    description:
      "Automatically request reviews from happy customers and respond to feedback, boosting your reputation on Google and Yelp.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            What We Build
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            AI-Powered Systems for Every Part of Your Pipeline
          </h2>
          <p className="mt-4 text-muted-foreground">
            Four core automations that work together to drive leads, book
            appointments, and grow your reputation.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-border/50 bg-card transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
