"use client";

import { Glyphs } from "syaivo/react";
import Link from "next/link";

// const EFFECTS = [
//   {
//     name: "Particles",
//     description:
//       "Floating dots with proximity connections and mouse repulsion.",
//     href: "/docs/particles",
//   },
//   {
//     name: "Waves",
//     description:
//       "Layered sine-wave ribbons with configurable amplitude and speed.",
//     href: "/docs/waves",
//   },
//   {
//     name: "Topography",
//     description: "Animated contour-map lines driven by simplex noise.",
//     href: "/docs/topography",
//   },
//   {
//     name: "Glyphs",
//     description: "Ambient floating characters that drift and flicker softly.",
//     href: "/docs/glyphs",
//   },
// ];

export default function HomePage() {
  return (
    <div
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{ background: "#030303", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Ambient glyphs background ─────────────────────────── */}
      <Glyphs
        color="rgba(255,238,145,0.5)"
        backgroundColor="transparent"
        count={50}
        fontSize={14}
        maxSpeed={0.4}
        minOpacity={0.06}
        maxOpacity={0.18}
        style={{ position: "fixed", inset: 0, zIndex: 0 }}
      />

      {/* Subtle radial glow */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 30%, rgba(255,238,145,0.03) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      {/* ── Page content ────────────────────────────────────────── */}
      <div
        className="relative flex min-h-screen flex-col"
        style={{ zIndex: 2 }}
      >
        {/* Nav */}
        <nav
          className="flex items-center justify-between px-6 py-6 sm:px-10"
          style={{ animation: "fade-in 0.6s ease-out both" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="text-lg tracking-tight text-white/90"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
              }}
            >
              syaivo
            </span>
            <span className="rounded-full border border-[#FFEE91]/20 bg-[#FFEE91]/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-[#FFEE91]/70">
              alpha
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/docs"
              className="text-sm text-white/40 transition-colors hover:text-white/70"
            >
              Docs
            </Link>
            <a
              href="https://github.com/FreQll/syaivo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 transition-colors hover:text-white/70"
            >
              GitHub
            </a>
          </div>
        </nav>

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
          {/* Status pill */}
          <div style={{ animation: "fade-in-up 0.8s ease-out both" }}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#FFEE91]/15 bg-[#FFEE91]/4 px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] text-[#FFEE91]/60">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#FFEE91]/60"
                style={{ animation: "pulse-glow 2.5s ease-in-out infinite" }}
              />
              In alpha · Building in public
            </span>
          </div>
          {/* Title */}
          <h1
            className="mt-8 text-7xl leading-none tracking-tight text-white sm:text-8xl lg:text-[11rem]"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              animation: "fade-in-up 0.8s ease-out both",
              animationDelay: "0.1s",
            }}
          >
            syaivo
          </h1>
          {/* Tagline */}
          <p
            className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-white/30 sm:text-base"
            style={{
              animation: "fade-in-up 0.8s ease-out both",
              animationDelay: "0.2s",
              letterSpacing: "0.01em",
            }}
          >
            Animated background effects library
            <br />
            for modern SaaS. Zero dependencies.
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex items-center gap-4"
            style={{
              animation: "fade-in-up 0.8s ease-out both",
              animationDelay: "0.4s",
            }}
          >
            <Link
              href="/docs"
              className="group relative inline-flex items-center justify-center rounded-lg bg-white/95 px-6 py-2.5 text-[13px] font-medium tracking-wide text-[#0a0a0a] transition-all duration-200 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Get Started
              <span className="ml-2 text-[11px] opacity-40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-70">
                &rarr;
              </span>
            </Link>
            <a
              href="https://github.com/FreQll/syaivo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/8 bg-white/2 px-6 py-2.5 text-[13px] font-normal tracking-wide text-white/50 transition-all duration-200 hover:border-white/15 hover:bg-white/4 hover:text-white/70"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────────── */}
        <footer className="border-t border-white/4 mt-auto px-6 py-8 sm:px-10">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <span
              className="text-xs text-white/15"
              style={{
                fontFamily: "'Instrument Serif', serif",
                // fontStyle: "italic",
              }}
            >
              syaivo
            </span>
            <span className="text-xs text-white/15">
              Built for modern interfaces.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
