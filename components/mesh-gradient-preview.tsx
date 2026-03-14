'use client';

import { useRef, useState, useCallback } from 'react';
import { MeshGradient } from 'syaivo/react';
import type { MeshGradientEffect } from 'syaivo';
import { PreviewShell, Slider } from './preview-shell';

export function MeshGradientPreview() {
  const effectRef = useRef<MeshGradientEffect | null>(null);

  const [points, setPoints] = useState(6);
  const [distortion, setDistortion] = useState(0.4);
  const [speed, setSpeed] = useState(0.2);

  const update = useCallback(
    (patch: Parameters<MeshGradientEffect['update']>[0]) => {
      effectRef.current?.update(patch);
    },
    [],
  );

  return (
    <PreviewShell
      controls={
        <>
          <Slider
            label="Points"
            value={points}
            min={3}
            max={12}
            step={1}
            onChange={(v) => { setPoints(v); update({ points: v }); }}
          />
          <Slider
            label="Distortion"
            value={distortion}
            min={0}
            max={1}
            step={0.05}
            format={(v) => v.toFixed(2)}
            onChange={(v) => { setDistortion(v); update({ distortion: v }); }}
          />
          <Slider
            label="Speed"
            value={speed}
            min={0}
            max={1}
            step={0.05}
            format={(v) => v.toFixed(2)}
            onChange={(v) => { setSpeed(v); update({ speed: v }); }}
          />
        </>
      }
    >
      <MeshGradient
        effectRef={effectRef}
        colors={['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd']}
        backgroundColor="#0a0a0a"
        points={points}
        distortion={distortion}
        speed={speed}
        animated
        style={{ position: 'absolute', inset: 0 }}
      />
    </PreviewShell>
  );
}
