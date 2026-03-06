export function Footer() {
  return (
    <footer className="border-t border-white/6 bg-[#09090B] px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-zinc-500 sm:flex-row">
        <div>
          <p className="font-display text-sm text-white">
            Apollo 🚀 Operations
          </p>
          <p className="text-sm">Built with AI. Deployed with intention.</p>
        </div>

        <div className="flex gap-6">
          <a
            href="#services"
            className="text-sm transition-colors hover:text-white"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-sm transition-colors hover:text-white"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="text-sm transition-colors hover:text-white"
          >
            Testimonials
          </a>
        </div>

        <p className="text-sm">© {new Date().getFullYear()} Apollo Operations.</p>
      </div>
    </footer>
  );
}
