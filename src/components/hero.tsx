import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-24 sm:px-6 sm:pb-32 sm:pt-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          AI Automation for Small Businesses
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          We Build AI Systems That{" "}
          <span className="text-primary">Fill Your Calendar</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Stop losing leads to slow follow-ups and missed messages. Our AI
          automation captures every prospect, books appointments 24/7, and turns
          your online reputation into a growth engine.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="text-base">
            <a href="#pricing">
              See Pricing <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base">
            <a href="#how-it-works">How It Works</a>
          </Button>
        </div>
      </div>

      {/* Decorative gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
      />
    </section>
  );
}
