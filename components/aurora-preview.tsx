"use client";

import { useRef, useState, useCallback } from "react";
import { Aurora } from "syaivo/react";
import type { AuroraEffect } from "syaivo";
import { PreviewShell, Slider, Switch } from "./preview-shell";

export function AuroraPreview() {
  const effectRef = useRef<AuroraEffect | null>(null);

  const [curtains, setCurtains] = useState(5);
  const [waveAmplitude, setWaveAmplitude] = useState(0.3);
  const [curtainWidth, setCurtainWidth] = useState(0.3);
  const [speed, setSpeed] = useState(1);
  const [opacity, setOpacity] = useState(0.9);
  const [scanlines, setScanlines] = useState(false);

  const update = useCallback((patch: Parameters<AuroraEffect["update"]>[0]) => {
    effectRef.current?.update(patch);
  }, []);

  return (
    <PreviewShell
      controls={
        <>
          <Slider
            label="Curtains"
            value={curtains}
            min={1}
            max={10}
            step={1}
            onChange={(v) => {
              setCurtains(v);
              update({ curtains: v });
            }}
          />
          <Slider
            label="Amplitude"
            value={waveAmplitude}
            min={0}
            max={0.4}
            step={0.01}
            format={(v) => v.toFixed(2)}
            onChange={(v) => {
              setWaveAmplitude(v);
              update({ waveAmplitude: v });
            }}
          />
          <Slider
            label="Width"
            value={curtainWidth}
            min={0.1}
            max={0.8}
            step={0.05}
            format={(v) => v.toFixed(2)}
            onChange={(v) => {
              setCurtainWidth(v);
              update({ curtainWidth: v });
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
            label="Opacity"
            value={opacity}
            min={0.1}
            max={1}
            step={0.05}
            format={(v) => v.toFixed(2)}
            onChange={(v) => {
              setOpacity(v);
              update({ opacity: v });
            }}
          />
          <Switch label="Scanlines" checked={scanlines}
            onChange={(v) => { setScanlines(v); update({ scanlines: v }); }} />
        </>
      }
    >
      <Aurora
        effectRef={effectRef}
        colors={["#00c897", "#00b4d8", "#6366f1", "#8b5cf6", "#a855f7"]}
        backgroundColor="#0a0a0a"
        curtains={curtains}
        waveAmplitude={waveAmplitude}
        curtainWidth={curtainWidth}
        speed={speed}
        opacity={opacity}
        scanlines={scanlines}
        animated
        style={{ position: "absolute", inset: 0 }}
      />
    </PreviewShell>
  );
}
