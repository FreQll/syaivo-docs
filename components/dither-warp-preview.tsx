"use client";

import { useRef, useState, useCallback } from "react";
import { DitherWarp } from "syaivo/react";
import type { DitherWarpEffect } from "syaivo";
import { PreviewShell, Slider } from "./preview-shell";

const SHAPES = [
  "simplex",
  "warp",
  "dots",
  "wave",
  "ripple",
  "swirl",
  "sphere",
] as const;
const PATTERNS = ["random", "2x2", "4x4", "8x8"] as const;

export function DitherWarpPreview() {
  const effectRef = useRef<DitherWarpEffect | null>(null);

  const [pixelSize, setPixelSize] = useState(3);
  const [scale, setScale] = useState(0.6);
  const [speed, setSpeed] = useState(0.6);
  const [shapeIdx, setShapeIdx] = useState(1); // "warp"
  const [patternIdx, setPatternIdx] = useState(2); // "4x4"

  const update = useCallback(
    (patch: Parameters<DitherWarpEffect["update"]>[0]) => {
      effectRef.current?.update(patch);
    },
    []
  );

  return (
    <PreviewShell
      controls={
        <>
          <Slider
            label="Pixel Size"
            value={pixelSize}
            min={1}
            max={10}
            step={1}
            format={(v) => `${v}px`}
            onChange={(v) => {
              setPixelSize(v);
              update({ pixelSize: v });
            }}
          />
          <Slider
            label="Scale"
            value={scale}
            min={0.2}
            max={4}
            step={0.1}
            format={(v) => v.toFixed(1)}
            onChange={(v) => {
              setScale(v);
              update({ scale: v });
            }}
          />
          <Slider
            label="Speed"
            value={speed}
            min={0}
            max={3}
            step={0.1}
            format={(v) => v.toFixed(1)}
            onChange={(v) => {
              setSpeed(v);
              update({ speed: v });
            }}
          />
          <Slider
            label="Shape"
            value={shapeIdx}
            min={0}
            max={SHAPES.length - 1}
            step={1}
            format={(v) => SHAPES[v]}
            onChange={(v) => {
              setShapeIdx(v);
              update({ shape: SHAPES[v] });
            }}
          />
          <Slider
            label="Pattern"
            value={patternIdx}
            min={0}
            max={PATTERNS.length - 1}
            step={1}
            format={(v) => PATTERNS[v]}
            onChange={(v) => {
              setPatternIdx(v);
              update({ pattern: PATTERNS[v] });
            }}
          />
        </>
      }
    >
      <DitherWarp
        effectRef={effectRef}
        colorFront="#BEB26F"
        colorBack="#191919"
        shape={SHAPES[shapeIdx]}
        pattern={PATTERNS[patternIdx]}
        pixelSize={pixelSize}
        scale={scale}
        speed={speed}
        animated
        style={{ position: "absolute", inset: 0 }}
      />
    </PreviewShell>
  );
}
