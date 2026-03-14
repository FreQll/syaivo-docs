"use client";

import { useRef, useState, useCallback } from "react";
import { Topography } from "syaivo/react";
import type { TopographyEffect } from "syaivo";
import { PreviewShell, Slider } from "./preview-shell";

export function TopographyPreview() {
  const effectRef = useRef<TopographyEffect | null>(null);

  const [levels, setLevels] = useState(12);
  const [detail, setDetail] = useState(4);
  const [speed, setSpeed] = useState(0.35);
  const [lineWidth, setLineWidth] = useState(1.3);
  const [noiseScale, setNoiseScale] = useState(0.006);
  const [warpStrength, setWarpStrength] = useState(0);

  const update = useCallback(
    (patch: Parameters<TopographyEffect["update"]>[0]) => {
      effectRef.current?.update(patch);
    },
    []
  );

  return (
    <PreviewShell
      controls={
        <>
          <Slider
            label="Levels"
            value={levels}
            min={4}
            max={30}
            step={1}
            onChange={(v) => {
              setLevels(v);
              update({ levels: v });
            }}
          />
          <Slider
            label="Detail"
            value={detail}
            min={4}
            max={30}
            step={1}
            format={(v) => `${v}px`}
            onChange={(v) => {
              setDetail(v);
              update({ detail: v });
            }}
          />
          <Slider
            label="Speed"
            value={speed}
            min={0}
            max={0.8}
            step={0.05}
            format={(v) => v.toFixed(2)}
            onChange={(v) => {
              setSpeed(v);
              update({ speed: v });
            }}
          />
          <Slider
            label="Line W"
            value={lineWidth}
            min={0.3}
            max={3}
            step={0.1}
            format={(v) => `${v.toFixed(1)}px`}
            onChange={(v) => {
              setLineWidth(v);
              update({ lineWidth: v });
            }}
          />
          <Slider
            label="Noise"
            value={noiseScale}
            min={0.002}
            max={0.012}
            step={0.001}
            format={(v) => v.toFixed(3)}
            onChange={(v) => {
              setNoiseScale(v);
              update({ noiseScale: v });
            }}
          />
          <Slider
            label="Warp"
            value={warpStrength}
            min={0}
            max={1.5}
            step={0.05}
            format={(v) => v.toFixed(2)}
            onChange={(v) => {
              setWarpStrength(v);
              update({ warpStrength: v });
            }}
          />
        </>
      }
    >
      <Topography
        effectRef={effectRef}
        lineColor="rgba(255,255,255,0.25)"
        backgroundColor="#09090b"
        levels={levels}
        detail={detail}
        speed={speed}
        lineWidth={lineWidth}
        noiseScale={noiseScale}
        warpStrength={warpStrength}
        animated
        style={{ position: "absolute", inset: 0 }}
      />
    </PreviewShell>
  );
}
