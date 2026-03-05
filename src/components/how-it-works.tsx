const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, your ideal customer, and where leads are falling through the cracks.",
  },
  {
    number: "02",
    title: "Build & Launch",
    description:
      "We design and deploy your custom AI systems — chat widget, follow-up sequences, booking flows, and review requests.",
  },
  {
    number: "03",
    title: "Optimize & Scale",
    description:
      "We monitor performance, tune the AI, and continuously improve conversion rates so your calendar stays full.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-y border-border/40 bg-muted/40 px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Simple Process
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground">
            From first call to a fully automated pipeline in as little as two
            weeks.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center sm:text-left">
              <span className="text-4xl font-extrabold text-primary/20">
                {step.number}
              </span>
              <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
