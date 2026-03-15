import { RootProvider } from 'fumadocs-ui/provider/next';
import { Analytics } from '@vercel/analytics/next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'syaivo — Animated Background Engine',
  description: 'Framework-agnostic animated background effects for modern SaaS',
  icons: { icon: '/syaivo_favicon.ico' },
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
