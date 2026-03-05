import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const features = [
  "AI Chat Widget installed on your site",
  "Automated SMS & email follow-up",
  "Calendar booking automation",
  "Review request & response system",
  "Monthly performance reports",
  "Dedicated Slack support channel",
  "Continuous AI optimization",
];

export function Pricing() {
  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Transparent Pricing
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            One Plan. Everything Included.
          </h2>
          <p className="mt-4 text-muted-foreground">
            No hidden fees, no nickel-and-diming. You get the full AI automation
            stack from day one.
          </p>
        </div>

        <Card className="mx-auto mt-14 max-w-lg border-primary/30 shadow-lg">
          <CardHeader className="text-center">
            <Badge variant="secondary" className="mx-auto mb-4 w-fit">
              Most Popular
            </Badge>
            <CardTitle className="text-2xl">Growth Package</CardTitle>
            <div className="mt-4">
              <span className="text-5xl font-extrabold">$2,500</span>
              <span className="ml-1 text-muted-foreground">one-time setup</span>
            </div>
            <div className="mt-2">
              <span className="text-3xl font-bold">$497</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8 w-full text-base">
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book a Discovery Call
              </a>
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              No contracts. Cancel anytime with 30 days notice.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
