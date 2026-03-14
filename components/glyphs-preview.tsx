"use client";

import { useRef, useState, useCallback } from "react";
import { Glyphs } from "syaivo/react";
import type { GlyphsEffect } from "syaivo";
import { PreviewShell, Slider } from "./preview-shell";

export function GlyphsPreview() {
  const effectRef = useRef<GlyphsEffect | null>(null);

  const [count, setCount] = useState(70);
  const [maxSpeed, setMaxSpeed] = useState(0.2);
  const [fontSize, setFontSize] = useState(12);
  const [maxOpacity, setMaxOpacity] = useState(0.5);
  const [minFlickerInterval, setMinFlickerInterval] = useState(40);

  const update = useCallback((patch: Parameters<GlyphsEffect["update"]>[0]) => {
    effectRef.current?.update(patch);
  }, []);

  return (
    <PreviewShell
      controls={
        <>
          <Slider
            label="Count"
            value={count}
            min={5}
            max={120}
            step={5}
            onChange={(v) => {
              setCount(v);
              update({ count: v });
            }}
          />
          <Slider
            label="Speed"
            value={maxSpeed}
            min={0.2}
            max={5}
            step={0.1}
            format={(v) => `${v}px/s`}
            onChange={(v) => {
              setMaxSpeed(v);
              update({ maxSpeed: v });
            }}
          />
          <Slider
            label="Size"
            value={fontSize}
            min={8}
            max={32}
            step={1}
            format={(v) => `${v}px`}
            onChange={(v) => {
              setFontSize(v);
              update({ fontSize: v });
            }}
          />
          <Slider
            label="Opacity"
            value={maxOpacity}
            min={0.05}
            max={0.5}
            step={0.01}
            format={(v) => v.toFixed(2)}
            onChange={(v) => {
              setMaxOpacity(v);
              update({ maxOpacity: v });
            }}
          />
          <Slider
            label="Flicker"
            value={minFlickerInterval}
            min={5}
            max={100}
            step={5}
            format={(v) => `${v}f`}
            onChange={(v) => {
              setMinFlickerInterval(v);
              update({ minFlickerInterval: v });
            }}
          />
        </>
      }
    >
      <Glyphs
        effectRef={effectRef}
        color={["rgba(0,255,65,0.6)", "rgba(255,176,0,0.5)"]}
        backgroundColor="#09090b"
        count={count}
        maxSpeed={maxSpeed}
        fontSize={fontSize}
        maxOpacity={maxOpacity}
        minFlickerInterval={minFlickerInterval}
        animated
        style={{ position: "absolute", inset: 0 }}
      />
    </PreviewShell>
  );
}
