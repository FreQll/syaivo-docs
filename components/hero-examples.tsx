"use client";

import { useRef, useEffect } from "react";
import { createLiquidSilk } from "syaivo";
import { HeroExample } from "./hero-example";
import { Particles } from "syaivo/react";
import { Waves } from "syaivo/react";
import { Topography } from "syaivo/react";
import { Glyphs } from "syaivo/react";
import { MeshGradient } from "syaivo/react";
import { Aurora } from "syaivo/react";
import { CyberGrid } from "syaivo/react";
import { Dither } from "syaivo/react";
import { HyperJump } from "syaivo/react";
import { Lumina } from "syaivo/react";
import { DitherWarp } from "syaivo/react";
import { Halftone } from "syaivo/react";

const fill = { position: "absolute" as const, inset: 0 };

export function ParticlesHero() {
  return (
    <HeroExample>
      <Particles
        color="rgba(255,255,255,0.5)"
        backgroundColor="#09090b"
        count={100}
        maxSpeed={15}
        mouseInteraction
        animated
        style={fill}
      />
    </HeroExample>
  );
}

export function WavesHero() {
  return (
    <HeroExample>
      <Waves
        colors={[
          "rgba(99,102,241,0.3)",
          "rgba(139,92,246,0.2)",
          "rgba(59,130,246,0.15)",
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
    </HeroExample>
  );
}

export function TopographyHero() {
  return (
    <HeroExample>
      <Topography
        lineColor="rgba(255,255,255,0.12)"
        backgroundColor="#09090b"
        levels={14}
        speed={0.1}
        lineWidth={0.7}
        detail={4}
        animated
        style={fill}
        noiseScale={0.002}
      />
    </HeroExample>
  );
}

export function GlyphsHero() {
  return (
    <HeroExample>
      <Glyphs
        color={["rgba(0,255,65,0.6)", "rgba(255,176,0,0.5)"]}
        backgroundColor="#09090b"
        count={80}
        maxSpeed={0.3}
        fontSize={14}
        maxOpacity={0.5}
        animated
        style={fill}
      />
    </HeroExample>
  );
}

export function MeshGradientHero() {
  return (
    <HeroExample>
      <MeshGradient
        colors={[
          "#4f46e5",
          "#ec4899",
          "#0ea5e9",
          "#8b5cf6",
          "#f59e0b",
          "#10b981",
        ]}
        backgroundColor="#09090b"
        points={8}
        distortion={0.45}
        speed={0.15}
        animated
        style={fill}
      />
    </HeroExample>
  );
}

export function AuroraHero() {
  return (
    <HeroExample>
      <Aurora
        colors={["#00c897", "#00b4d8", "#6366f1", "#8b5cf6", "#a855f7"]}
        backgroundColor="#09090b"
        curtains={5}
        waveAmplitude={0.15}
        speed={0.8}
        opacity={0.4}
        animated
        style={fill}
      />
    </HeroExample>
  );
}

export function CyberGridHero() {
  return (
    <HeroExample>
      <CyberGrid
        gridColor="#6366f1"
        backgroundColor="#09090b"
        intensity={0.25}
        anchor={0}
        fov={0.35}
        speed={0.6}
        lineWidth={0.5}
        animated
        style={fill}
      />
    </HeroExample>
  );
}

export function DitherHero() {
  return (
    <HeroExample>
      <Dither
        colors={["#1a0a2e", "#2d1b4e", "#1b1040", "#0a0a1a"]}
        backgroundColor="#09090b"
        pixelSize={2}
        pattern="bayer"
        angle={90}
        noiseIntensity={0.2}
        speed={0.4}
        animated
        style={fill}
      />
    </HeroExample>
  );
}

export function HyperJumpHero() {
  return (
    <HeroExample>
      <HyperJump
        colors={["#a5f3fc", "#818cf8"]}
        backgroundColor="#09090b"
        count={350}
        speed={0.8}
        trailSegments={8}
        animated
        style={fill}
      />
    </HeroExample>
  );
}

export function LuminaHero() {
  return (
    <HeroExample>
      <Lumina
        beamColor="#ffffff"
        backgroundColor="#09090b"
        beams={5}
        angle={35}
        intensity={0.2}
        softness={0.2}
        grain={0.04}
        animated
        style={fill}
      />
    </HeroExample>
  );
}

export function DitherWarpHero() {
  return (
    <HeroExample>
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
    </HeroExample>
  );
}

function LiquidSilkCanvas() {
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
      opacity: 0.7,
      animated: true,
    });
    effect.mount(el);
    return () => effect.destroy();
  }, []);
  return <div ref={ref} style={fill} />;
}

export function LiquidSilkHero() {
  return (
    <HeroExample>
      <LiquidSilkCanvas />
    </HeroExample>
  );
}

export function HalftoneHero() {
  return (
    <HeroExample>
      <Halftone
        dotColor="#BEB36F"
        backgroundColor="#191919"
        pixelSize={4}
        contrast={1}
        angle={135}
        noiseIntensity={0.2}
        opacity={0.2}
        speed={0.6}
        waveFrequency={2.5}
        ribbonWidth={0.18}
        animated
        style={fill}
      />
    </HeroExample>
  );
}
