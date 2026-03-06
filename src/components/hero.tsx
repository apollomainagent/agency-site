import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.22), rgba(9,9,11,0) 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 pt-32 pb-28 text-center sm:px-6 sm:pt-40 sm:pb-36">
        <div className="mx-auto">
          <p className="mb-5 inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-300">
            Trusted by Bay Area SMBs
          </p>
          <h1 className="font-display text-6xl leading-tight font-bold text-white md:text-7xl">
            AI Automation for Modern Businesses
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-400">
            We build custom AI systems that handle your ops, outreach, and customer
            service so you can focus on growth.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-indigo-500 text-white hover:bg-indigo-400">
              <a href="#pricing">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <a href="#testimonials">See Our Work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
