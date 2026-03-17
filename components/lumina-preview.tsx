"use client";

import { useRef, useState, useCallback } from "react";
import { Lumina } from "syaivo/react";
import type { LuminaEffect } from "syaivo";
import { PreviewShell, Slider } from "./preview-shell";

export function LuminaPreview() {
  const effectRef = useRef<LuminaEffect | null>(null);

  const [beams, setBeams] = useState(6);
  const [angle, setAngle] = useState(35);
  const [intensity, setIntensity] = useState(0.4);
  const [softness, setSoftness] = useState(0.26);
  const [grain, setGrain] = useState(0.04);
  const [beamSpeed, setBeamSpeed] = useState(1.2);

  const update = useCallback((patch: Parameters<LuminaEffect["update"]>[0]) => {
    effectRef.current?.update(patch);
  }, []);

  return (
    <PreviewShell
      controls={
        <>
          <Slider
            label="Beams"
            value={beams}
            min={1}
            max={12}
            step={1}
            onChange={(v) => {
              setBeams(v);
              update({ beams: v });
            }}
          />
          <Slider
            label="Angle"
            value={angle}
            min={0}
            max={90}
            step={1}
            format={(v) => `${v}°`}
            onChange={(v) => {
              setAngle(v);
              update({ angle: v });
            }}
          />
          <Slider
            label="Intensity"
            value={intensity}
            min={0}
            max={1}
            step={0.02}
            format={(v) => v.toFixed(2)}
            onChange={(v) => {
              setIntensity(v);
              update({ intensity: v });
            }}
          />
          <Slider
            label="Softness"
            value={softness}
            min={0.05}
            max={0.5}
            step={0.01}
            format={(v) => v.toFixed(2)}
            onChange={(v) => {
              setSoftness(v);
              update({ softness: v });
            }}
          />
          <Slider
            label="Grain"
            value={grain}
            min={0}
            max={1}
            step={0.02}
            format={(v) => v.toFixed(2)}
            onChange={(v) => {
              setGrain(v);
              update({ grain: v });
            }}
          />
          <Slider
            label="Beam Spd"
            value={beamSpeed}
            min={0}
            max={3}
            step={0.1}
            format={(v) => v.toFixed(1)}
            onChange={(v) => {
              setBeamSpeed(v);
              update({ beamSpeed: v });
            }}
          />
        </>
      }
    >
      <Lumina
        effectRef={effectRef}
        beamColor="#ffffff"
        backgroundColor="#0a0a0a"
        beams={beams}
        angle={angle}
        intensity={intensity}
        softness={softness}
        grain={grain}
        beamSpeed={beamSpeed}
        animated
        style={{ position: "absolute", inset: 0 }}
      />
    </PreviewShell>
  );
}
