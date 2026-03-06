export function Footer() {
  return (
    <footer className="mx-auto max-w-[1120px] px-6 py-16"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="font-display text-[15px] font-semibold" style={{ color: "#EDEDED" }}>Apollo Operations 🚀</p>
          <p className="mt-1 text-[13px]" style={{ color: "rgba(255,255,255,0.3)" }}>Built with AI. Deployed with intention.</p>
        </div>
        <div className="flex gap-8">
          {["Services", "Process", "Pricing"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
               className="text-[13px] text-[rgba(255,255,255,0.35)] transition-colors hover:text-[rgba(255,255,255,0.7)]">
              {l}
            </a>
          ))}
        </div>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
          © {new Date().getFullYear()} Apollo Operations
        </p>
      </div>
    </footer>
  );
}
