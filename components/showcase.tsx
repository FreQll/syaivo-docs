"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import Link from "next/link";
import { createLiquidSilk } from "syaivo";
import { Particles } from "syaivo/react";
import { Waves } from "syaivo/react";
import { Topography } from "syaivo/react";
import { Glyphs } from "syaivo/react";
import { MeshGradient } from "syaivo/react";
import { Aurora } from "syaivo/react";
import { CyberGrid } from "syaivo/react";
import { Dither } from "syaivo/react";
import { HyperJump } from "syaivo/react";
import { DitherWarp } from "syaivo/react";
import { Halftone } from "syaivo/react";

const fill = { position: "absolute" as const, inset: 0 };

interface EffectEntry {
  name: string;
  node: ReactNode;
}

function LiquidSilkBg() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const effect = createLiquidSilk({
      backgroundColor: "#020208",
      colors: ["#00e5ff", "#d500f9", "#0a1a5c", "#00d4aa", "#f050ff"],
      scale: 1,
      specular: 0.5,
      normalStrength: 1.2,
      speed: 0.8,
      opacity: 0.6,
      animated: true,
    });
    effect.mount(el);
    return () => effect.destroy();
  }, []);
  return <div ref={ref} style={fill} />;
}

const effects: EffectEntry[] = [
  {
    name: "Dither Warp",
    node: (
      <DitherWarp
        colorFront="#1a1a2e"
        colorBack="#09090b"
        shape="warp"
        pattern="4x4"
        pixelSize={2}
        scale={0.6}
        speed={0.3}
        animated
        style={fill}
      />
    ),
  },
  {
    name: "Particles",
    node: (
      <Particles
        color="#80FF87"
        backgroundColor="#09090b"
        count={40}
        maxSpeed={12}
        animated
        style={fill}
      />
    ),
  },
  {
    name: "Waves",
    node: (
      <Waves
        colors={[
          "rgba(99,102,241,0.25)",
          "rgba(139,92,246,0.18)",
          "rgba(59,130,246,0.12)",
        ]}
        backgroundColor="#09090b"
        layers={4}
        amplitude={0.06}
        frequency={1.2}
        speed={0.6}
        filled
        animated
        style={fill}
      />
    ),
  },
  {
    name: "Topography",
    node: (
      <Topography
        lineColor="rgba(255,255,255,0.1)"
        backgroundColor="#09090b"
        levels={14}
        speed={0.1}
        lineWidth={0.6}
        animated
        style={fill}
      />
    ),
  },
  {
    name: "Glyphs",
    node: (
      <Glyphs
        color={["#00D492", "#FE963C"]}
        backgroundColor="#09090b"
        count={100}
        maxSpeed={0.2}
        fontSize={12}
        maxOpacity={1}
        animated
        style={fill}
      />
    ),
  },
  {
    name: "Mesh Gradient",
    node: (
      <MeshGradient
        colors={["#4f46e5", "#ec4899", "#0ea5e9", "#8b5cf6"]}
        backgroundColor="#09090b"
        points={5}
        distortion={0.4}
        speed={1}
        animated
        style={{ ...fill }}
      />
    ),
  },
  {
    name: "Aurora",
    node: (
      <Aurora
        colors={["#00c897", "#00b4d8", "#6366f1", "#8b5cf6", "#a855f7"]}
        backgroundColor="#09090b"
        curtains={5}
        waveAmplitude={0.15}
        speed={0.8}
        opacity={0.35}
        animated
        style={fill}
      />
    ),
  },
  {
    name: "CyberGrid",
    node: (
      <CyberGrid
        gridColor="#6366f1"
        backgroundColor="#09090b"
        intensity={0.2}
        anchor={0}
        fov={0.35}
        speed={0.2}
        lineWidth={0.5}
        style={fill}
      />
    ),
  },
  {
    name: "Dither",
    node: (
      <Dither
        colors={["#1a0a2e", "#2d1b4e", "#1b1040", "#0a0a1a"]}
        backgroundColor="#09090b"
        pixelSize={2}
        pattern="bayer"
        angle={90}
        noiseIntensity={0.15}
        speed={0.4}
        animated
        style={fill}
      />
    ),
  },
  {
    name: "Hyper Jump",
    node: (
      <HyperJump
        colors={["#a5f3fc", "#818cf8"]}
        backgroundColor="#09090b"
        count={300}
        speed={0.7}
        trailSegments={8}
        animated
        style={fill}
      />
    ),
  },

  {
    name: "Liquid Silk",
    node: <LiquidSilkBg />,
  },
  {
    name: "Halftone",
    node: (
      <Halftone
        dotColor="#6366f1"
        backgroundColor="#09090b"
        pixelSize={5}
        contrast={1.6}
        angle={135}
        noiseIntensity={0.15}
        opacity={0.4}
        speed={0.5}
        waveFrequency={2.5}
        ribbonWidth={0.16}
        animated
        style={fill}
      />
    ),
  },
];

/* ── Expand icon (top-right) ── */
function ExpandIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <path
        d="M8.5 1.5H12.5V5.5M5.5 12.5H1.5V8.5M12.5 1.5L8 6M1.5 12.5L6 8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Collapse icon (top-right in fullscreen) ── */
function CollapseIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <path
        d="M9 5H13M9 5V1M9 5L13 1M5 9H1M5 9V13M5 9L1 13"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Autoplay icon ── */
function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
    >
      <path d="M2.5 1.5L10 6L2.5 10.5V1.5Z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
    >
      <rect x="2" y="1.5" width="3" height="9" rx="0.5" fill="currentColor" />
      <rect x="7" y="1.5" width="3" height="9" rx="0.5" fill="currentColor" />
    </svg>
  );
}

export function Showcase() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Escape to exit fullscreen
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape" && fullscreen) setFullscreen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [fullscreen]);

  // Autoplay timer
  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % effects.length);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(advance, 1000);
    return () => clearInterval(id);
  }, [autoplay, advance]);

  const content = (
    <>
      {/* Effect layer */}
      {effects[active].node}

      {/* Top-right controls */}
      <div className="absolute right-4 top-4 z-20 flex items-center gap-1.5">
        {/* Autoplay toggle */}
        <button
          onClick={() => setAutoplay(!autoplay)}
          className="flex h-8 w-8 items-center justify-center rounded-md bg-black/40 text-white/50 backdrop-blur-sm transition-colors hover:bg-black/60 hover:text-white/80"
          title={autoplay ? "Pause autoplay" : "Auto-scroll effects"}
        >
          {autoplay ? <PauseIcon /> : <PlayIcon />}
        </button>
        {/* Fullscreen toggle */}
        <button
          onClick={() => setFullscreen(!fullscreen)}
          className="flex h-8 w-8 items-center justify-center rounded-md bg-black/40 text-white/50 backdrop-blur-sm transition-colors hover:bg-black/60 hover:text-white/80"
          title={fullscreen ? "Exit fullscreen" : "Open fullscreen"}
        >
          {fullscreen ? <CollapseIcon /> : <ExpandIcon />}
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-10 px-6 text-center">
        {/* Badge */}
        <div className="flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-[11px] font-medium tracking-wide text-white/50">
            {effects.length} effects available
          </span>
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center gap-6">
          <h1
            className={`font-semibold leading-[1.05] tracking-[-0.035em] text-white ${
              fullscreen
                ? "text-[clamp(2.5rem,6vw,4.5rem)]"
                : "text-3xl sm:text-4xl md:text-5xl"
            }`}
          >
            The background engine
            <br />
            <span className="text-white/40">for modern interfaces</span>
          </h1>
          <p className="max-w-lg text-sm leading-relaxed text-white/35 sm:text-base">
            Purpose-built for landing pages, hero sections, and product
            marketing. Designed to stay out of the way.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => {
                setOpen(!open);
                if (autoplay) setAutoplay(false);
              }}
              className="flex w-[180px] items-center justify-between rounded-lg bg-white px-4 py-2 text-[13px] font-medium text-black shadow-lg shadow-white/5 transition-all hover:shadow-white/10"
            >
              <span className="truncate">{effects[active].name}</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`shrink-0 opacity-40 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M2.5 3.75L5 6.25L7.5 3.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {open && (
              <div className="absolute bottom-full left-1/2 mb-2 w-[200px] -translate-x-1/2 rounded-lg border border-white/8 bg-[#111113]/95 p-1.5 shadow-2xl backdrop-blur-xl">
                <div className="max-h-[320px] overflow-y-auto">
                  {effects.map((effect, i) => (
                    <button
                      key={effect.name}
                      onClick={() => {
                        setActive(i);
                        setOpen(false);
                      }}
                      className={`w-full rounded-md px-3 py-1.5 text-left text-[13px] transition-colors ${
                        i === active
                          ? "bg-white/8 text-white"
                          : "text-white/40 hover:bg-white/4 hover:text-white/70"
                      }`}
                    >
                      {effect.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/docs"
            className="rounded-lg border border-white/10 px-4 py-2 text-[13px] font-medium text-white/40 transition-all hover:border-white/20 hover:text-white/60"
          >
            Documentation
          </Link>
        </div>
      </div>

      {/* Bottom attribution */}
      <div className="absolute inset-x-0 bottom-5 z-10 text-center">
        <p className="text-[11px] tracking-wide text-white/50">
          Powered by syaivo
        </p>
      </div>
    </>
  );

  // Fullscreen overlay
  if (fullscreen) {
    return (
      <div className="not-prose fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#09090b]">
        {content}
      </div>
    );
  }

  // Inline rectangle
  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-fd-border">
      <div className="relative flex aspect-video max-h-[600px] min-h-[420px] items-center justify-center overflow-hidden bg-[#09090b]">
        {content}
      </div>
    </div>
  );
}
