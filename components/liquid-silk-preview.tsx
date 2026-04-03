'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { createLiquidSilk } from 'syaivo';
import type { LiquidSilkEffect } from 'syaivo';
import { PreviewShell, Slider } from './preview-shell';

export function LiquidSilkPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<LiquidSilkEffect | null>(null);

  const [scale, setScale] = useState(1.2);
  const [normalStrength, setNormalStrength] = useState(1.4);
  const [specular, setSpecular] = useState(0.65);
  const [shininess, setShininess] = useState(16);
  const [ambient, setAmbient] = useState(0.1);
  const [diffuse, setDiffuse] = useState(0.55);
  const [grain, setGrain] = useState(0);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const effect = createLiquidSilk({
      backgroundColor: '#020208',
      colors: ['#00e5ff', '#d500f9', '#0a1a5c', '#00d4aa', '#f050ff'],
      scale,
      normalStrength,
      specular,
      shininess,
      ambient,
      diffuse,
      grain,
      speed,
      animated: true,
    });
    effect.mount(el);
    effectRef.current = effect;
    return () => effect.destroy();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const update = useCallback(
    (patch: Parameters<LiquidSilkEffect['update']>[0]) => {
      effectRef.current?.update(patch);
    },
    [],
  );

  return (
    <PreviewShell
      controls={
        <>
          <Slider
            label="Scale"
            value={scale}
            min={0.2}
            max={4}
            step={0.1}
            format={(v) => v.toFixed(1)}
            onChange={(v) => { setScale(v); update({ scale: v }); }}
          />
          <Slider
            label="Normals"
            value={normalStrength}
            min={0}
            max={4}
            step={0.1}
            format={(v) => v.toFixed(1)}
            onChange={(v) => { setNormalStrength(v); update({ normalStrength: v }); }}
          />
          <Slider
            label="Specular"
            value={specular}
            min={0}
            max={1}
            step={0.05}
            format={(v) => v.toFixed(2)}
            onChange={(v) => { setSpecular(v); update({ specular: v }); }}
          />
          <Slider
            label="Shininess"
            value={shininess}
            min={1}
            max={64}
            step={1}
            onChange={(v) => { setShininess(v); update({ shininess: v }); }}
          />
          <Slider
            label="Ambient"
            value={ambient}
            min={0}
            max={1}
            step={0.05}
            format={(v) => v.toFixed(2)}
            onChange={(v) => { setAmbient(v); update({ ambient: v }); }}
          />
          <Slider
            label="Diffuse"
            value={diffuse}
            min={0}
            max={1}
            step={0.05}
            format={(v) => v.toFixed(2)}
            onChange={(v) => { setDiffuse(v); update({ diffuse: v }); }}
          />
          <Slider
            label="Grain"
            value={grain}
            min={0}
            max={1}
            step={0.02}
            format={(v) => v.toFixed(2)}
            onChange={(v) => { setGrain(v); update({ grain: v }); }}
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
      <div ref={containerRef} style={{ position: 'absolute', inset: 0 }} />
    </PreviewShell>
  );
}
