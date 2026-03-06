import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apollo Operations | AI Automation Agency",
  description:
    "We build custom AI systems that handle your ops, outreach, and customer service — so your team can focus on what matters.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#09090B] antialiased">{children}</body>
    </html>
  );
}
