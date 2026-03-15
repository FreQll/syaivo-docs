'use client';

import { useRef, useState, useCallback } from 'react';
import { Waves } from 'syaivo/react';
import type { WavesEffect } from 'syaivo';
import { PreviewShell, Slider, Switch } from './preview-shell';

export function WavesPreview() {
  const effectRef = useRef<WavesEffect | null>(null);

  const [layers, setLayers] = useState(3);
  const [amplitude, setAmplitude] = useState(0.08);
  const [frequency, setFrequency] = useState(1.5);
  const [speed, setSpeed] = useState(1);
  const [filled, setFilled] = useState(true);
  const [harmonics, setHarmonics] = useState(false);

  const update = useCallback(
    (patch: Parameters<WavesEffect['update']>[0]) => {
      effectRef.current?.update(patch);
    },
    [],
  );

  return (
    <PreviewShell
      controls={
        <>
          <Slider label="Layers" value={layers} min={1} max={8} step={1}
            onChange={(v) => { setLayers(v); update({ layers: v }); }} />
          <Slider label="Amplitude" value={amplitude} min={0.01} max={0.25} step={0.01}
            format={(v) => v.toFixed(2)}
            onChange={(v) => { setAmplitude(v); update({ amplitude: v }); }} />
          <Slider label="Frequency" value={frequency} min={0.5} max={5} step={0.1}
            format={(v) => v.toFixed(1)}
            onChange={(v) => { setFrequency(v); update({ frequency: v }); }} />
          <Slider label="Speed" value={speed} min={0.1} max={3} step={0.1}
            format={(v) => `${v.toFixed(1)}x`}
            onChange={(v) => { setSpeed(v); update({ speed: v }); }} />
          <Switch label="Filled" checked={filled}
            onChange={(v) => { setFilled(v); update({ filled: v }); }} />
          <Switch label="Harmonics" checked={harmonics}
            onChange={(v) => { setHarmonics(v); update({ harmonics: v }); }} />
        </>
      }
    >
      <Waves
        effectRef={effectRef}
        colors={[
          'rgba(99,102,241,0.35)',
          'rgba(139,92,246,0.25)',
          'rgba(59,130,246,0.20)',
        ]}
        backgroundColor="#09090b"
        layers={layers}
        amplitude={amplitude}
        frequency={frequency}
        speed={speed}
        filled={filled}
        harmonics={harmonics}
        animated
        style={{ position: 'absolute', inset: 0 }}
      />
    </PreviewShell>
  );
}
