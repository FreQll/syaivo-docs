'use client';

import { useRef, useState, useCallback } from 'react';
import { Particles } from 'syaivo/react';
import type { ParticlesEffect } from 'syaivo';
import { PreviewShell, Slider, Switch } from './preview-shell';

export function ParticlesPreview() {
  const effectRef = useRef<ParticlesEffect | null>(null);

  const [count, setCount] = useState(80);
  const [maxSpeed, setMaxSpeed] = useState(30);
  const [minRadius, setMinRadius] = useState(1);
  const [maxRadius, setMaxRadius] = useState(3);
  const [mouseRadius, setMouseRadius] = useState(100);
  const [mouseInteraction, setMouseInteraction] = useState(true);

  const update = useCallback(
    (patch: Parameters<ParticlesEffect['update']>[0]) => {
      effectRef.current?.update(patch);
    },
    [],
  );

  return (
    <PreviewShell
      controls={
        <>
          <Slider label="Count" value={count} min={10} max={300} step={5}
            onChange={(v) => { setCount(v); update({ count: v }); }} />
          <Slider label="Speed" value={maxSpeed} min={5} max={80} step={1}
            format={(v) => `${v}px/s`}
            onChange={(v) => { setMaxSpeed(v); update({ maxSpeed: v }); }} />
          <Slider label="Min R" value={minRadius} min={0.5} max={5} step={0.5}
            format={(v) => `${v}px`}
            onChange={(v) => { setMinRadius(v); update({ minRadius: v }); }} />
          <Slider label="Max R" value={maxRadius} min={1} max={8} step={0.5}
            format={(v) => `${v}px`}
            onChange={(v) => { setMaxRadius(v); update({ maxRadius: v }); }} />
          <Slider label="Mouse R" value={mouseRadius} min={30} max={250} step={10}
            format={(v) => `${v}px`}
            onChange={(v) => { setMouseRadius(v); update({ mouseRadius: v }); }} />
          <Switch label="Mouse" checked={mouseInteraction}
            onChange={(v) => { setMouseInteraction(v); update({ mouseInteraction: v }); }} />
        </>
      }
    >
      <Particles
        effectRef={effectRef}
        color="rgba(255,255,255,0.6)"
        backgroundColor="#09090b"
        count={count}
        maxSpeed={maxSpeed}
        minRadius={minRadius}
        maxRadius={maxRadius}
        mouseInteraction={mouseInteraction}
        mouseRadius={mouseRadius}
        animated
        style={{ position: 'absolute', inset: 0 }}
      />
    </PreviewShell>
  );
}
