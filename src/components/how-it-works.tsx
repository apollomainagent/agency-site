const steps = [
  {
    number: "01",
    title: "Audit & Strategy",
    description:
      "We review your funnel, team workflow, and CRM stack to identify high-leverage automation opportunities.",
  },
  {
    number: "02",
    title: "Build & Integrate",
    description:
      "We design your agents, connect your tools, and tune prompts and routing so every interaction is aligned to your goals.",
  },
  {
    number: "03",
    title: "Launch & Optimize",
    description:
      "We deploy, monitor, and iterate weekly, improving conversion and response quality as your business grows.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold text-white">How It Works</h2>
          <p className="mt-4 text-zinc-400">
            A simple execution model built to get your AI systems live faster and improving fast.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-xl border border-white/8 bg-zinc-900/50 p-6"
            >
              <p className="text-6xl font-bold text-indigo-500/30">{step.number}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-zinc-400">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
