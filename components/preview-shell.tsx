'use client';

import type { ReactNode } from 'react';

export function PreviewShell({
  children,
  controls,
}: {
  children: ReactNode;
  controls: ReactNode;
}) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-fd-border">
      <div className="relative h-[360px] bg-black">{children}</div>
      <div className="grid grid-cols-1 gap-3 border-t border-fd-border bg-fd-card p-4 sm:grid-cols-2">
        {controls}
      </div>
    </div>
  );
}

export function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format?: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <label className="group flex items-center gap-3 text-[13px]">
      <span className="w-[72px] shrink-0 text-fd-muted-foreground">
        {label}
      </span>
      <div className="relative flex flex-1 items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="slider-input peer h-5 w-full cursor-pointer appearance-none bg-transparent"
        />
        {/* Track background */}
        <div className="pointer-events-none absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 rounded-full bg-fd-border" />
        {/* Track fill */}
        <div
          className="pointer-events-none absolute left-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-fd-primary"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-[52px] text-right tabular-nums text-fd-foreground">
        {format ? format(value) : value}
      </span>
      <style>{`
        .slider-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--color-fd-primary, #3b82f6);
          border: 2px solid var(--color-fd-background, #fff);
          box-shadow: 0 1px 3px rgba(0,0,0,0.3);
          position: relative;
          z-index: 2;
          cursor: pointer;
        }
        .slider-input::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--color-fd-primary, #3b82f6);
          border: 2px solid var(--color-fd-background, #fff);
          box-shadow: 0 1px 3px rgba(0,0,0,0.3);
          cursor: pointer;
        }
        .slider-input::-webkit-slider-runnable-track {
          height: 3px;
          background: transparent;
        }
        .slider-input::-moz-range-track {
          height: 3px;
          background: transparent;
        }
      `}</style>
    </label>
  );
}
