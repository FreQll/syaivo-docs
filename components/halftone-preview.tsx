"use client";

import { useRef, useState, useCallback } from "react";
import { Halftone } from "syaivo/react";
import type { HalftoneEffect } from "syaivo";
import { PreviewShell, Slider, Switch } from "./preview-shell";

export function HalftonePreview() {
  const effectRef = useRef<HalftoneEffect | null>(null);

  const [pixelSize, setPixelSize] = useState(4);
  const [contrast, setContrast] = useState(1.2);
  const [angle, setAngle] = useState(85);
  const [noiseIntensity, setNoiseIntensity] = useState(0);
  const [opacity, setOpacity] = useState(0.9);
  const [speed, setSpeed] = useState(0.8);
  const [waveFrequency, setWaveFrequency] = useState(1.6);
  const [waveAmplitude, setWaveAmplitude] = useState(0.1);
  const [ribbonWidth, setRibbonWidth] = useState(0.16);
  const [invert, setInvert] = useState(false);

  const update = useCallback(
    (patch: Parameters<HalftoneEffect["update"]>[0]) => {
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
            min={2}
            max={20}
            step={1}
            format={(v) => `${v}px`}
            onChange={(v) => {
              setPixelSize(v);
              update({ pixelSize: v });
            }}
          />
          <Slider
            label="Contrast"
            value={contrast}
            min={0.5}
            max={4}
            step={0.1}
            format={(v) => v.toFixed(1)}
            onChange={(v) => {
              setContrast(v);
              update({ contrast: v });
            }}
          />
          <Slider
            label="Angle"
            value={angle}
            min={0}
            max={360}
            step={5}
            format={(v) => `${v}°`}
            onChange={(v) => {
              setAngle(v);
              update({ angle: v });
            }}
          />
          <Slider
            label="Noise"
            value={noiseIntensity}
            min={0}
            max={1}
            step={0.05}
            format={(v) => v.toFixed(2)}
            onChange={(v) => {
              setNoiseIntensity(v);
              update({ noiseIntensity: v });
            }}
          />
          <Slider
            label="Opacity"
            value={opacity}
            min={0}
            max={1}
            step={0.05}
            format={(v) => v.toFixed(2)}
            onChange={(v) => {
              setOpacity(v);
              update({ opacity: v });
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
            label="Waves"
            value={waveFrequency}
            min={0}
            max={8}
            step={0.2}
            format={(v) => v.toFixed(1)}
            onChange={(v) => {
              setWaveFrequency(v);
              update({ waveFrequency: v });
            }}
          />
          <Slider
            label="Amplitude"
            value={waveAmplitude}
            min={0}
            max={0.5}
            step={0.02}
            format={(v) => v.toFixed(2)}
            onChange={(v) => {
              setWaveAmplitude(v);
              update({ waveAmplitude: v });
            }}
          />
          <Slider
            label="Ribbon W"
            value={ribbonWidth}
            min={0.02}
            max={0.5}
            step={0.02}
            format={(v) => v.toFixed(2)}
            onChange={(v) => {
              setRibbonWidth(v);
              update({ ribbonWidth: v });
            }}
          />
          <Switch
            label="Invert"
            checked={invert}
            onChange={(v) => {
              setInvert(v);
              update({ invert: v });
            }}
          />
        </>
      }
    >
      <Halftone
        effectRef={effectRef}
        dotColor="#09090B"
        backgroundColor="#FFF"
        pixelSize={pixelSize}
        contrast={contrast}
        angle={angle}
        noiseIntensity={noiseIntensity}
        opacity={opacity}
        speed={speed}
        waveFrequency={waveFrequency}
        waveAmplitude={waveAmplitude}
        ribbonWidth={ribbonWidth}
        invert={invert}
        animated
        style={{ position: "absolute", inset: 0 }}
      />
    </PreviewShell>
  );
}
