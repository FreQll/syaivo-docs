import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      nav={{
        title: (
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            syaivo
            <span
              style={{
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                color: 'rgb(255 238 145 / 0.7)',
                background: 'rgb(255 238 145 / 0.05)',
                border: '1px solid rgb(255 238 145 / 0.2)',
                borderRadius: '9999px',
                padding: '2px 8px',
              }}
            >
              alpha
            </span>
          </span>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
