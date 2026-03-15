'use client';

import { useRef, useState, useCallback } from 'react';
import { Dither } from 'syaivo/react';
import type { DitherEffect } from 'syaivo';
import { PreviewShell, Slider } from './preview-shell';

export function DitherPreview() {
  const effectRef = useRef<DitherEffect | null>(null);

  const [pixelSize, setPixelSize] = useState(4);
  const [angle, setAngle] = useState(135);
  const [noiseIntensity, setNoiseIntensity] = useState(0.3);
  const [speed, setSpeed] = useState(1);

  const update = useCallback(
    (patch: Parameters<DitherEffect['update']>[0]) => {
      effectRef.current?.update(patch);
    },
    [],
  );

  return (
    <PreviewShell
      controls={
        <>
          <Slider
            label="Pixel Size"
            value={pixelSize}
            min={1}
            max={12}
            step={1}
            format={(v) => `${v}px`}
            onChange={(v) => { setPixelSize(v); update({ pixelSize: v }); }}
          />
          <Slider
            label="Angle"
            value={angle}
            min={0}
            max={360}
            step={5}
            format={(v) => `${v}°`}
            onChange={(v) => { setAngle(v); update({ angle: v }); }}
          />
          <Slider
            label="Noise"
            value={noiseIntensity}
            min={0}
            max={1}
            step={0.05}
            format={(v) => v.toFixed(2)}
            onChange={(v) => { setNoiseIntensity(v); update({ noiseIntensity: v }); }}
          />
          <Slider
            label="Speed"
            value={speed}
            min={0}
            max={3}
            step={0.1}
            format={(v) => v.toFixed(1)}
            onChange={(v) => { setSpeed(v); update({ speed: v }); }}
          />
        </>
      }
    >
      <Dither
        effectRef={effectRef}
        colors={['#c084fc', '#818cf8', '#38bdf8', '#2dd4bf']}
        backgroundColor="#0a0a0a"
        pixelSize={pixelSize}
        pattern="bayer"
        angle={angle}
        noiseIntensity={noiseIntensity}
        speed={speed}
        animated
        style={{ position: 'absolute', inset: 0 }}
      />
    </PreviewShell>
  );
}
