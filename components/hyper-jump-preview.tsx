"use client";

import { useRef, useState, useCallback } from "react";
import { HyperJump } from "syaivo/react";
import type { HyperJumpEffect } from "syaivo";
import { PreviewShell, Slider } from "./preview-shell";

export function HyperJumpPreview() {
  const effectRef = useRef<HyperJumpEffect | null>(null);

  const [count, setCount] = useState(150);
  const [speed, setSpeed] = useState(1);
  const [trailSegments, setTrailSegments] = useState(10);
  const [minSize, setMinSize] = useState(1);
  const [maxSize, setMaxSize] = useState(6);

  const update = useCallback(
    (patch: Parameters<HyperJumpEffect["update"]>[0]) => {
      effectRef.current?.update(patch);
    },
    []
  );

  return (
    <PreviewShell
      controls={
        <>
          <Slider
            label="Count"
            value={count}
            min={50}
            max={800}
            step={25}
            onChange={(v) => {
              setCount(v);
              update({ count: v });
            }}
          />
          <Slider
            label="Speed"
            value={speed}
            min={0.1}
            max={4}
            step={0.1}
            format={(v) => v.toFixed(1)}
            onChange={(v) => {
              setSpeed(v);
              update({ speed: v });
            }}
          />
          <Slider
            label="Trails"
            value={trailSegments}
            min={0}
            max={16}
            step={1}
            onChange={(v) => {
              setTrailSegments(v);
              update({ trailSegments: v });
            }}
          />
          <Slider
            label="Min Size"
            value={minSize}
            min={1}
            max={4}
            step={0.5}
            format={(v) => `${v}px`}
            onChange={(v) => {
              setMinSize(v);
              update({ minSize: v });
            }}
          />
          <Slider
            label="Max Size"
            value={maxSize}
            min={2}
            max={12}
            step={1}
            format={(v) => `${v}px`}
            onChange={(v) => {
              setMaxSize(v);
              update({ maxSize: v });
            }}
          />
        </>
      }
    >
      <HyperJump
        effectRef={effectRef}
        colors={["#a5f3fc"]}
        backgroundColor="#0a0a0a"
        count={count}
        speed={speed}
        trailSegments={trailSegments}
        minSize={minSize}
        maxSize={maxSize}
        animated
        style={{ position: "absolute", inset: 0 }}
      />
    </PreviewShell>
  );
}
