'use client';

import type { ReactNode } from 'react';

export function HeroExample({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-fd-border">
      <div className="relative flex h-[480px] items-center justify-center bg-black">
        {children}
        <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-white/40">
            Introducing your product
          </p>
          <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Build something
            <br />
            people remember
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-white/50">
            A polished experience starts with the details. Ship interfaces that
            feel considered from the first pixel.
          </p>
          <div className="flex gap-3">
            <span className="rounded-lg bg-white px-5 py-2 text-sm font-medium text-black">
              Get started
            </span>
            <span className="rounded-lg border border-white/20 px-5 py-2 text-sm font-medium text-white/70">
              Documentation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
