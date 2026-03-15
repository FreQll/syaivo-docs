"use client";

import { useRef, useState, useCallback } from "react";
import { CyberGrid } from "syaivo/react";
import type { CyberGridEffect } from "syaivo";
import { PreviewShell, Slider, Switch } from "./preview-shell";

export function CyberGridPreview() {
  const effectRef = useRef<CyberGridEffect | null>(null);

  const [intensity, setIntensity] = useState(0.5);
  const [anchor, setAnchor] = useState(-0.5);
  const [fov, setFov] = useState(0.2);
  const [speed, setSpeed] = useState(1.5);
  const [lineWidth, setLineWidth] = useState(1);
  const [floorMode, setFloorMode] = useState(true);
  const [pixelated, setPixelated] = useState(false);

  const update = useCallback(
    (patch: Parameters<CyberGridEffect["update"]>[0]) => {
      effectRef.current?.update(patch);
    },
    []
  );

  return (
    <PreviewShell
      controls={
        <>
          <Slider
            label="Intensity"
            value={intensity}
            min={0}
            max={1}
            step={0.05}
            format={(v) => v.toFixed(2)}
            onChange={(v) => {
              setIntensity(v);
              update({ intensity: v });
            }}
          />
          <Slider
            label="Anchor"
            value={anchor}
            min={-1}
            max={1}
            step={0.05}
            format={(v) => v.toFixed(2)}
            onChange={(v) => {
              setAnchor(v);
              update({ anchor: v });
            }}
          />
          <Slider
            label="FOV"
            value={fov}
            min={-1}
            max={1}
            step={0.05}
            format={(v) => v.toFixed(2)}
            onChange={(v) => {
              setFov(v);
              update({ fov: v });
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
            label="Line W"
            value={lineWidth}
            min={0.5}
            max={4}
            step={0.5}
            format={(v) => `${v.toFixed(1)}px`}
            onChange={(v) => {
              setLineWidth(v);
              update({ lineWidth: v });
            }}
          />
          <Switch
            label="Floor"
            checked={floorMode}
            onChange={(v) => {
              setFloorMode(v);
              update({ floorMode: v });
            }}
          />
          <Switch
            label="Pixelated"
            checked={pixelated}
            onChange={(v) => {
              setPixelated(v);
              update({ pixelated: v });
            }}
          />
        </>
      }
    >
      <CyberGrid
        effectRef={effectRef}
        gridColor="#ff80ff"
        backgroundColor="#001a33"
        intensity={intensity}
        anchor={anchor}
        fov={fov}
        speed={speed}
        lineWidth={lineWidth}
        floorMode={floorMode}
        pixelated={pixelated}
        animated
        style={{ position: "absolute", inset: 0 }}
      />
    </PreviewShell>
  );
}
