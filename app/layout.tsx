import { RootProvider } from 'fumadocs-ui/provider/next';
import { Analytics } from '@vercel/analytics/next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'syaivo — Animated Background Engine',
  description:
    'Zero-dependency, framework-agnostic animated background engine for the web. Tree-shakeable canvas effects with vanilla and React bindings.',
  icons: { icon: '/syaivo_favicon.ico' },
  openGraph: {
    title: 'syaivo — Animated Background Engine',
    description:
      'Zero-dependency, framework-agnostic animated background engine for the web.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'syaivo — Animated Background Engine',
    description:
      'Zero-dependency, framework-agnostic animated background engine for the web.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
